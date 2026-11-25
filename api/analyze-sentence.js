let cachedModels = null;
let cachedAt = 0;
const CACHE_TTL_MS = 10 * 60 * 1000;

async function getAvailableGeminiModels(apiKey) {
  const now = Date.now();
  if (cachedModels && now - cachedAt < CACHE_TTL_MS) {
    return cachedModels;
  }

  const fallbackList = ['gemini-3.8-flash', 'gemini-3.5-flash-lite', 'gemini-2.5-flash'];

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );
    const data = await res.json().catch(() => ({}));

    if (res.ok && Array.isArray(data.models)) {
      const supported = data.models
        .filter(
          (m) =>
            Array.isArray(m.supportedGenerationMethods) &&
            m.supportedGenerationMethods.includes('generateContent') &&
            !/embedding|imagen|veo|aqa/i.test(m.name || '')
        )
        .map((m) => String(m.name).replace(/^models\//, ''));

      const score = (name) => {
        let s = 0;
        if (name === 'gemini-3.8-flash') s += 500;
        if (name === 'gemini-3.5-flash-lite') s += 450;
        if (/gemini/i.test(name)) s += 100;
        if (/flash/i.test(name)) s += 50;
        if (!/lite/i.test(name)) s += 10;
        const verMatch = name.match(/(\d+(?:\.\d+)?)/);
        if (verMatch) s += parseFloat(verMatch[1]) * 20;
        if (/exp|preview/i.test(name)) s -= 5;
        return s;
      };

      supported.sort((a, b) => score(b) - score(a));

      const merged = [...new Set([...fallbackList, ...supported])];
      if (merged.length > 0) {
        cachedModels = merged;
        cachedAt = now;
        return merged;
      }
    }
  } catch (_) {}

  return fallbackList;
}

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
    .trim();
}

function parseStructuredAnalysis(rawText, fallbackTextInput) {
  const cleaned = cleanText(rawText);
  let parsed = null;

  const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      parsed = JSON.parse(jsonMatch[0]);
    } catch (_) {}
  }

  if (parsed && typeof parsed === 'object') {
    const heard = cleanText(
      parsed.heard || parsed.transcript || parsed.recognized || parsed.spoken || fallbackTextInput || ''
    );
    const pronunciation = cleanText(
      parsed.pronunciation || parsed.sound || parsed.speech || ''
    );
    const grammar = cleanText(
      parsed.grammar || parsed.words || parsed.correction || ''
    );
    const contextStyle = cleanText(
      parsed.context || parsed.style || parsed.usage || parsed.example || ''
    );

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
    heard: fallbackTextInput || '',
    transcript: fallbackTextInput || '',
    pronunciation: cleaned,
    grammar: cleaned,
    context: cleaned,
    style: cleaned,
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

    const models = await getAvailableGeminiModels(apiKey);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    let lastError = 'Сервіс тимчасово перевантажений. Спробуй ще раз за кілька секунд.';
    let lastStatus = 503;

    for (const model of models.slice(0, 6)) {
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ role: 'user', parts }],
                generationConfig: {
                  temperature: 0.3,
                  maxOutputTokens: 1200,
                  responseMimeType: 'application/json',
                },
              }),
            }
          );

          const data = await response.json().catch(() => ({}));

          if (response.ok) {
            const rawText =
              data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';

            if (!rawText) {
              return res.status(200).json(
                parseStructuredAnalysis('Не вдалося сформувати розбір. Спробуй ще раз.', textInput)
              );
            }

            return res.status(200).json(parseStructuredAnalysis(rawText, textInput));
          }

          lastStatus = response.status;
          const apiMsg = data?.error?.message || lastError;
          lastError = apiMsg;

          if (/invalid argument/i.test(apiMsg) && audioBase64 && !textInput) {
            lastError =
              'Формат аудіо з браузера не підтримується напряму. Спробуй ввести речення текстом або перезаписати голос.';
          }

          if (response.status === 404 || /not found|not supported/i.test(apiMsg)) {
            break;
          }

          if (
            (response.status === 429 ||
              response.status === 503 ||
              /high demand|overloaded|try again later|quota|rate limit/i.test(apiMsg)) &&
            attempt === 0
          ) {
            await sleep(700);
            continue;
          }

          break;
        } catch (err) {
          lastStatus = 502;
          lastError = 'Помилка зʼєднання з Gemini API';
          if (attempt === 0) {
            await sleep(500);
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
