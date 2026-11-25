const MODELS = ['gemini-3.8-flash', 'gemini-3.5-flash-lite'];

function extractAudioFromBody(body) {
  const candidates = [
    body.audioBase64,
    body.audio,
    body.audioData,
    body.base64Audio,
    body.recording,
    body.voice,
  ];

  let rawAudio = '';
  for (const val of candidates) {
    if (typeof val === 'string' && val.trim().length > 0) {
      rawAudio = val.trim();
      break;
    }
    if (val && typeof val === 'object' && typeof val.data === 'string' && val.data.trim()) {
      rawAudio = val.data.trim();
      break;
    }
  }

  const rawMime =
    body.audioMimeType ||
    body.mimeType ||
    body.audioType ||
    (typeof body.audio === 'object' && body.audio?.mimeType) ||
    '';

  if (!rawAudio) {
    return { base64: '', mimeType: '' };
  }

  let base64 = rawAudio;
  let detectedMime = '';

  const dataUrlMatch = base64.match(/^data:([^;]+);base64,(.+)$/s);
  if (dataUrlMatch) {
    detectedMime = dataUrlMatch[1].trim();
    base64 = dataUrlMatch[2].trim();
  }

  base64 = base64.replace(/\s+/g, '');
  if (!base64) {
    return { base64: '', mimeType: '' };
  }

  const cleanMime = String(rawMime || detectedMime || 'audio/mp4')
    .split(';')[0]
    .trim()
    .toLowerCase();

  const allowedMimes = new Set([
    'audio/mp4',
    'audio/m4a',
    'audio/aac',
    'audio/mpeg',
    'audio/mp3',
    'audio/wav',
    'audio/webm',
    'audio/ogg',
    'audio/flac',
  ]);

  let finalMime = allowedMimes.has(cleanMime) ? cleanMime : 'audio/mp4';
  if (finalMime === 'audio/m4a') finalMime = 'audio/mp4';
  if (finalMime === 'audio/mp3') finalMime = 'audio/mpeg';

  return { base64, mimeType: finalMime };
}

function cleanText(val) {
  return String(val || '')
    .replace(/\*\*/g, '')
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();
}

function parseStructuredAnalysis(rawText, fallbackTextInput, hasAudio) {
  const cleaned = cleanText(rawText);
  let parsed = null;

  const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      parsed = JSON.parse(jsonMatch[0]);
    } catch (_) {}
  }

  const defaultHeard = fallbackTextInput
    ? fallbackTextInput
    : hasAudio
      ? 'Аудіо отримано, але чіткі слова не вдалося розпізнати.'
      : '';

  if (parsed && typeof parsed === 'object') {
    const heard =
      cleanText(parsed.heard || parsed.transcript || parsed.recognized || parsed.spoken) ||
      defaultHeard;

    const pronunciation =
      cleanText(parsed.pronunciation || parsed.sound || parsed.speech) ||
      (hasAudio
        ? 'Спробуй записати голос ще раз трохи гучніше й чіткіше біля мікрофона.'
        : 'Перевірено письмовий варіант.');

    const grammar =
      cleanText(parsed.grammar || parsed.words || parsed.correction) ||
      'Перевір порядок слів і вживання цільового слова в реченні.';

    const contextStyle =
      cleanText(parsed.context || parsed.style || parsed.usage || parsed.example) ||
      'Використовуй слово у відповідному розмовному або офіційному контексті.';

    return {
      heard,
      transcript: heard,
      pronunciation,
      grammar,
      context: contextStyle,
      style: contextStyle,
      analysis: cleaned,
      feedback: cleaned,
    };
  }

  return {
    heard: defaultHeard,
    transcript: defaultHeard,
    pronunciation: cleaned || 'Не вдалося оцінити вимову.',
    grammar: cleaned || 'Не вдалося перевірити граматику.',
    context: cleaned || 'Не вдалося визначити контекст.',
    style: cleaned || 'Не вдалося визначити стиль.',
    analysis: cleaned,
    feedback: cleaned,
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY не налаштовано на Vercel' });
  }

  try {
    const body = req.body || {};
    const word = String(body.word || body.targetWord || '').trim();
    const translation = String(body.translation || '').trim();
    const level = String(body.level || 'A1').trim();
    const textInput = String(body.sentence || body.text || '').trim();

    const { base64: audioBase64, mimeType: audioMimeType } = extractAudioFromBody(body);

    if (!textInput && !audioBase64) {
      return res.status(400).json({ error: 'Запиши голос або введи речення перед перевіркою.' });
    }

    if (audioBase64 && audioBase64.length > 3_500_000) {
      return res.status(413).json({
        error: 'Аудіозапис занадто великий. Запиши коротше речення (до 5–7 секунд).',
      });
    }

    const parts = [];

    if (audioBase64) {
      parts.push({
        inlineData: {
          mimeType: audioMimeType,
          data: audioBase64,
        },
      });
    }

    const promptText = `
Ти — досвідчений викладач німецької мови платформи «deutsch mit Dmytro» (рівень учня: ${level}).
Цільове слово для речення: "${word || 'не вказано'}"${translation ? ` (переклад: "${translation}")` : ''}.
${textInput ? `Текст учня: "${textInput}"` : 'Учень відповів голосом (аудіо прикріплено). Уважно прослухай аудіо та розпізнай німецькі слова.'}

Поверни ВИКЛЮЧНО валідний JSON (без markdown-блоків і без зірочок **), де всі пояснення написані УКРАЇНСЬКОЮ мовою:
{
  "heard": "що саме прозвучало в аудіо (або текст учня); якщо слова розпізнати не вдалося — вкажи це",
  "pronunciation": "оцінка вимови, звуків та інтонації; якщо аудіо тихе або нечітке — дай пораду щодо запису голосу",
  "grammar": "граматика, порядок слів, використання цільового слова та правильний приклад речення з перекладом",
  "context": "чи доречний стиль/контекст уживання слова та коротке пояснення ситуації вживання"
}
`.trim();

    parts.push({ text: promptText });

    let lastError = 'Сервіс тимчасово перевантажений. Спробуй ще раз за кілька секунд.';
    let lastStatus = 503;

    for (const model of MODELS) {
      try {
        const response = await fetch(
          `[https://generativelanguage.googleapis.com/v1beta/models/$](https://generativelanguage.googleapis.com/v1beta/models/$){model}:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts }],
              generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 1500,
              },
            }),
          }
        );

        const data = await response.json().catch(() => ({}));

        if (response.ok) {
          const candidateParts = data?.candidates?.[0]?.content?.parts || [];
          const rawText = candidateParts
            .map((p) => (typeof p?.text === 'string' ? p.text : ''))
            .join('\n')
            .trim();

          return res
            .status(200)
            .json(parseStructuredAnalysis(rawText, textInput, Boolean(audioBase64)));
        }

        lastStatus = response.status;
        lastError = data?.error?.message || lastError;

        if (/invalid argument/i.test(lastError) && audioBase64 && !textInput) {
          lastError =
            'Формат аудіо з браузера не підтримується напряму. Спробуй ввести речення текстом або перезаписати голос.';
        }
      } catch (fetchErr) {
        lastStatus = 502;
        lastError = 'Помилка зʼєднання з Gemini API';
      }
    }

    return res.status(lastStatus).json({ error: lastError });
  } catch (err) {
    return res.status(500).json({ error: 'Внутрішня помилка сервера під час аналізу речення' });
  }
}
