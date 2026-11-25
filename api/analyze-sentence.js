export const config = {
  api: {
    bodyParser: {
      sizeLimit: '6mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY не налаштовано на Vercel' });
  }

  try {
    const {
      targetWord = '',
      targetArticle = '',
      targetTranslation = '',
      level = 'A1',
      category = 'colloquial',
      textInput = '',
      audioBase64 = '',
      audioMimeType = 'audio/webm',
    } = req.body || {};

    if (!textInput && !audioBase64) {
      return res.status(400).json({ error: 'Надішли текст речення або запиши голос.' });
    }

    const categoryMap = {
      colloquial: 'розмовна лексика (повсякденне спілкування)',
      exam: 'лексика для іспитів (Goethe / telc)',
      official: 'офіційна та ділова німецька',
    };

    const prompt = `
Ти — досвідчений викладач німецької мови проєкту «deutsch mit Dmytro».
Учень рівня ${level} (категорія: ${categoryMap[category] || category}) мав скласти речення німецькою мовою зі словом:
"${targetArticle ? targetArticle + ' ' : ''}${targetWord}" (переклад: "${targetTranslation}").

${audioBase64 ? 'Учень надіслав АУДІОЗАПИС свого речення. Уважно прослухай вимову, інтонацію, наголоси, артиклі та умлаути.' : `Учень написав ТЕКСТ речення: "${textInput}".`}

Поверни відповідь ВИКЛЮЧНО у форматі валідного JSON без markdown-обгорток (\`\`\`json не пиши), зі структурою:
{
  "transcript": "точний текст того, що сказав або написав учень німецькою",
  "usedTargetWord": true або false (чи використав учень задане слово або його граматичну форму),
  "isCorrect": true або false (чи граматично прийнятне речення для рівня ${level}),
  "pronunciation": "${audioBase64 ? 'короткий розбір вимови українською (1-2 речення: що прозвучало чітко, а на який звук чи наголос звернути увагу)' : 'Текстовий режим — для оцінки вимови спробуй записати речення голосом 🎙️'}",
  "grammarFeedback": "чіткий розбір граматики, порядку слів та артиклів українською (1-2 речення без води; якщо все правильно — похвали)",
  "correctedSentence": "граматично правильний та природний варіант цього речення німецькою",
  "contextAdvice": "у якому контексті та стилі це речення найкраще звучить (друзі, робота, іспит) + 1 живий альтернативний варіант німецькою"
}
`.trim();

    const parts = [{ text: prompt }];

    if (audioBase64) {
      const cleanMime = String(audioMimeType || 'audio/webm').split(';')[0].trim();
      parts.push({
        inline_data: {
          mime_type: cleanMime,
          data: audioBase64,
        },
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 700,
            responseMimeType: 'application/json',
          },
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.error?.message || 'Помилка аналізу від Gemini API',
      });
    }

    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
    const cleanedJson = rawText.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();

    let parsed;
    try {
      parsed = JSON.parse(cleanedJson);
    } catch {
      parsed = {
        transcript: textInput || 'Аудіозапис оброблено',
        usedTargetWord: true,
        isCorrect: true,
        pronunciation: audioBase64 ? 'Вимова зрозуміла.' : 'Текстовий режим.',
        grammarFeedback: rawText,
        correctedSentence: textInput || targetWord,
        contextAdvice: 'Підходить для повсякденної практики.',
      };
    }

    return res.status(200).json({ analysis: parsed });
  } catch (err) {
    return res.status(500).json({ error: 'Не вдалося перевірити речення. Спробуй ще раз.' });
  }
}
