let cachedModels = null;
let cachedAt = 0;
const CACHE_TTL_MS = 10 * 60 * 1000;

async function getAvailableGeminiModels(apiKey) {
  const now = Date.now();
  if (cachedModels && now - cachedAt < CACHE_TTL_MS) {
    return cachedModels;
  }

  const fallbackList = ['gemini-3.8-flash', 'gemini-3.5-flash-lite'];

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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY не налаштовано на Vercel' });
  }

  try {
    const { messages = [], context = {} } = req.body || {};
    const {
      mode = 'cards',
      isTestActive = false,
      forbiddenWord = '',
      forbiddenTranslation = '',
      petName = 'Schnurri',
    } = context;

    const systemInstruction = `
Ти — лаконічний, дружній ШІ-помічник платформи вивчення німецької мови «deutsch mit Dmytro» (автор курсу — Дмитро Горішняк).
Твоя роль: допомагати учням із базовими питаннями про німецьку лексику, синоніми, різницю між розмовною/офіційною/іспитовою німецькою, вимову, а також пояснювати, як працює цей тренажер.

ПРАВИЛА ВІДПОВІДЕЙ:
1. ЗАВЖДИ відповідай ВИКЛЮЧНО УКРАЇНСЬКОЮ МОВОЮ (німецькою — лише конкретні слова чи приклади речень з українським перекладом; англійську не використовуй взагалі).
2. Пиши коротко, чітко, по суті (2–4 завершені речення, не обривай думку на півслові).
3. НЕ використовуй жодного Markdown-форматування: не став зірочки (** або *), решітки (#) чи марковані списки. Пиши звичайним чистим текстом.
4. Наводь живі приклади німецькою з перекладом. Наприклад, якщо питають про заміну слова "Tschüss", коротко назви варіанти за стилем: розмовні (Ciao, Bis dann, Mach's gut, регіональне Servus) та офіційне (Auf Wiedersehen).
5. ІНФОРМАЦІЯ ПРО ПЛАТФОРМУ:
   - У тренажері є 4 режими: Картки (озвучення + приклад), Тест (+20 XP і монет), Правопис (+25 XP і монет, тренування артиклів der/die/das та умлаутів ä, ö, ü, ß), Речення (+30 XP і монет, запис голосу або тексту з розбором вимови та граматики).
   - Безкоштовно відкрито 60 слів (по перші 5 слів у кожній категорії рівнів A1–B2). Повний доступ відкриває абонемент PRO (1, 3 або 6 місяців через Monobank).
   - Монети заробляються у режимах тренування та витрачаються у крамничці на годування та аксесуари для кота (${petName}). Перша підказка на день безкоштовна (якщо ситість кота >= 70%), кожна наступна коштує на +20 монет дорожче.
   - Визначити свій рівень (A1–C1) можна за кнопкою «Визначити рівень» у верхньому блоці.

СУВОРЕ ОБМЕЖЕННЯ (АНТИ-ЧІТЕРСТВО У ТЕСТАХ):
- Поточний режим учня: "${mode}". Активний тест/правопис зараз: ${isTestActive ? 'ТАК' : 'НІ'}.
${isTestActive && forbiddenWord ? `- ЗАБОРОНЕНЕ СЛОВО ЗАРАЗ НА ЕКРАНІ: "${forbiddenWord}" (переклад: "${forbiddenTranslation}").
- Якщо учень прямо або завуальовано питає переклад, артикль, значення чи написання слова "${forbiddenWord}" або "${forbiddenTranslation}" — КАТЕГОРИЧНО НЕ ВІДПОВІДАЙ на це слово! Ввічливо скажи, що під час тесту не підказуєш поточне слово, і порадь натиснути кнопку «Підказка» від кота ${petName}.` : ''}
`.trim();

    const contents = messages
      .filter((msg) => msg && String(msg.text || '').trim().length > 0)
      .slice(-8)
      .map((msg) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: String(msg.text).trim() }],
      }));

    if (contents.length === 0) {
      return res.status(400).json({ error: 'Порожнє повідомлення' });
    }

    const models = await getAvailableGeminiModels(apiKey);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    let lastErrorMessage = 'Сервіс тимчасово перевантажений. Спробуй ще раз за кілька секунд.';
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
                system_instruction: {
                  parts: [{ text: systemInstruction }],
                },
                contents,
                generationConfig: {
                  temperature: 0.5,
                  maxOutputTokens: 1200,
                },
              }),
            }
          );

          const data = await response.json().catch(() => ({}));

          if (response.ok) {
            const rawReply =
              data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
              'Вибач, зараз не вдалося сформувати відповідь. Спробуй переформулювати питання.';

            const reply = rawReply.replace(/\*\*/g, '').trim();

            return res.status(200).json({ reply, modelUsed: model });
          }

          lastStatus = response.status;
          const apiMessage = data?.error?.message || lastErrorMessage;
          lastErrorMessage = apiMessage;

          const isNotFound =
            response.status === 404 || /not found|not supported/i.test(apiMessage);
          if (isNotFound) {
            break;
          }

          const isTransientOverload =
            response.status === 429 ||
            response.status === 503 ||
            /high demand|overloaded|try again later|quota|rate limit/i.test(apiMessage);

          if (isTransientOverload && attempt === 0) {
            await sleep(800);
            continue;
          }

          break;
        } catch (fetchErr) {
          lastStatus = 502;
          lastErrorMessage = 'Помилка зʼєднання з Gemini API';
          if (attempt === 0) {
            await sleep(500);
            continue;
          }
          break;
        }
      }
    }

    return res.status(lastStatus).json({ error: lastErrorMessage });
  } catch (err) {
    return res.status(500).json({ error: 'Внутрішня помилка сервера чату' });
  }
}
