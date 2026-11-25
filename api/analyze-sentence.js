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
    const audioBase64 = body.audioBase64 || body.audio || '';
    const audioMimeType = body.audioMimeType || body.mimeType || 'audio/mp4';

    if (!textInput && !audioBase64) {
      return res.status(400).json({ error: 'Запиши голос або введи речення перед перевіркою.' });
    }

    const parts = [];

    if (audioBase64) {
      parts.push({
        inline_data: {
          mime_type: audioMimeType,
          data: audioBase64,
        },
      });
    }

    const promptText = `
Ти — досвідчений викладач німецької мови платформи «deutsch mit Dmytro» (рівень учня: ${level}).
Цільове слово для речення: "${word || 'не вказано'}"${translation ? ` (переклад: "${translation}")` : ''}.
${textInput ? `Текст учня: "${textInput}"` : 'Учень відповів голосом (аудіо прикріплено).'}

Перевір речення учня та дай лаконічний, корисний розбір УКРАЇНСЬКОЮ мовою (без зірочок ** та зайвої води):
1. Якщо є аудіо — коротко оціни вимову й чи чітко чути слово та інтонацію.
2. Перевір граматику та порядок слів у німецькому реченні (і чи використано цільове слово).
3. Дай 1 правильний природний приклад речення німецькою з українським перекладом.
`.trim();

    parts.push({ text: promptText });

    const models = ['gemini-3.8-flash', 'gemini-2.5-flash', 'gemini-2.5-flash-lite'];
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    let lastError = 'Сервіс тимчасово перевантажений. Спробуй ще раз за кілька секунд.';
    let lastStatus = 503;

    for (const model of models) {
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 12000);

          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              signal: controller.signal,
              body: JSON.stringify({
                contents: [{ role: 'user', parts }],
                generationConfig: {
                  temperature: 0.4,
                  maxOutputTokens: 1200,
                  thinkingConfig: {
                    thinkingBudget: 0,
                  },
                },
              }),
            }
          );

          clearTimeout(timeout);
          const data = await response.json().catch(() => ({}));

          if (response.ok) {
            const rawText =
              data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
              'Не вдалося сформувати розбір. Спробуй ще раз.';

            const cleanText = rawText.replace(/\*\*/g, '').trim();

            return res.status(200).json({
              analysis: cleanText,
              feedback: cleanText,
              reply: cleanText,
              result: cleanText,
              modelUsed: model,
            });
          }

          lastStatus = response.status;
          const apiMsg = data?.error?.message || lastError;
          lastError = apiMsg;

          if (response.status === 404 || /not found|not supported/i.test(apiMsg)) {
            break;
          }

          if (
            (response.status === 429 ||
              response.status === 503 ||
              /high demand|overloaded|try again later|quota|rate limit/i.test(apiMsg)) &&
            attempt === 0
          ) {
            await sleep(600);
            continue;
          }

          break;
        } catch (err) {
          lastStatus = 504;
          lastError = 'Перевищено час очікування відповіді від ШІ. Спробуй ще раз.';
          if (attempt === 0) {
            await sleep(400);
            continue;
          }
          break;
        }
      }
    }

    return res.status(lastStatus).json({ error: lastError });
  } catch (err) {
    return res.status(500).json({ error: 'Внутрішня помилка сервера під час аналізу речення' });
  }
}
