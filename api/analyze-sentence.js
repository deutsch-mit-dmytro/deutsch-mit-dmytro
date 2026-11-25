const MODELS = ['gemini-3.5-flash-lite', 'gemini-3.8-flash'];

function cleanText(val) {
  return String(val || '')
    .replace(/\*\*/g, '')
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();
}

function parseAnalysis(rawText, sentenceText, targetWord) {
  const cleaned = cleanText(rawText);
  let parsed = null;

  const match = cleaned.match(/\{[\s\S]*\}/);
  if (match) {
    try {
      parsed = JSON.parse(match[0]);
    } catch (_) {}
  }

  if (parsed && typeof parsed === 'object') {
    const grammarFeedback = cleanText(parsed.grammar || parsed.feedback || '') || cleaned;
    const contextAdvice = cleanText(parsed.context || parsed.tip || '') || '';
    const correctedSentence = cleanText(parsed.corrected || '') || '';
    const usedTargetWord =
      typeof parsed.usedTargetWord === 'boolean'
        ? parsed.usedTargetWord
        : targetWord
          ? sentenceText.toLowerCase().includes(targetWord.toLowerCase())
          : true;
    const isCorrect = typeof parsed.isCorrect === 'boolean' ? parsed.isCorrect : true;

    return {
      transcript: sentenceText,
      grammarFeedback,
      contextAdvice,
      correctedSentence,
      usedTargetWord,
      isCorrect,
    };
  }

  return {
    transcript: sentenceText,
    grammarFeedback: cleaned || 'Речення перевірено.',
    contextAdvice: '',
    correctedSentence: '',
    usedTargetWord: targetWord ? sentenceText.toLowerCase().includes(targetWord.toLowerCase()) : true,
    isCorrect: true,
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = String(process.env.GEMINI_API_KEY || '').replace(/[\r\n\s]+/g, '');
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY не налаштовано на Vercel' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (_) {
        body = {};
      }
    }
    body = body || {};

    const sentenceText = String(body.textInput || body.sentence || body.text || '').trim();
    const targetWord = String(body.targetWord || body.word || '').trim();
    const targetTranslation = String(body.targetTranslation || body.translation || '').trim();
    const level = String(body.level || 'A1').trim();

    if (!sentenceText) {
      return res.status(400).json({ error: 'Напиши речення перед перевіркою.' });
    }

    const prompt = [
      `Ти — викладач німецької мови платформи «deutsch mit Dmytro» (рівень учня: ${level}).`,
      `Цільове слово: "${targetWord}"${targetTranslation ? ` (${targetTranslation})` : ''}.`,
      `Речення учня: "${sentenceText}".`,
      'Перевір речення українською мовою (без зірочок **) і поверни ЛИШЕ валідний JSON:',
      '{',
      '  "usedTargetWord": true або false,',
      '  "isCorrect": true або false,',
      '  "grammar": "коротко про граматику, артиклі, порядок слів і використання цільового слова",',
      '  "corrected": "правильний природний варіант речення німецькою (або порожній рядок, якщо все ок)",',
      '  "context": "коротко про доречність і стиль вживання"',
      '}',
    ].join('\n');

    let lastError = 'Сервіс тимчасово перевантажений. Спробуй ще раз.';
    let lastStatus = 503;

    for (const model of MODELS) {
      try {
        const url =
          '[https://generativelanguage.googleapis.com/v1beta/models/](https://generativelanguage.googleapis.com/v1beta/models/)' +
          model +
          ':generateContent?key=' +
          apiKey;

        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 15000);

        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 1200,
            },
          }),
        });

        clearTimeout(timer);
        const data = await response.json().catch(() => ({}));

        if (response.ok) {
          const parts = data?.candidates?.[0]?.content?.parts || [];
          const rawText = parts
            .map((p) => (typeof p?.text === 'string' ? p.text : ''))
            .join('\n')
            .trim();

          return res.status(200).json({
            analysis: parseAnalysis(rawText, sentenceText, targetWord),
          });
        }

        lastStatus = response.status;
        lastError = data?.error?.message || `HTTP ${response.status} від Gemini API`;
      } catch (err) {
        lastStatus = 502;
        lastError = `Збій запиту до Gemini API (${err?.name || 'Error'}: ${err?.message || 'невідома причина'})`;
      }
    }

    return res.status(lastStatus).json({ error: lastError });
  } catch (err) {
    return res.status(500).json({ error: `Внутрішня помилка сервера: ${err?.message || 'помилка'}` });
  }
}
