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
1. Відповідай українською мовою, коротко, чітко, по суті (зазвичай 2–4 речення, без води та канцеляризмів).
2. Наводь живі приклади німецькою з перекладом. Наприклад, якщо питають про заміну слова "Tschüss", коротко назви варіанти за стилем: розмовні (Ciao, Bis dann, Mach's gut, регіональне Servus) та офіційне (Auf Wiedersehen).
3. ІНФОРМАЦІЯ ПРО ПЛАТФОРМУ:
   - У тренажері є 4 режими: Картки (озвучення + приклад), Тест (+20 XP і монет), Правопис (+25 XP і монет, тренування артиклів der/die/das та умлаутів ä, ö, ü, ß), Речення (+30 XP і монет, запис голосу або тексту з розбором вимови та граматики).
   - Безкоштовно відкрито 60 слів (по перші 5 слів у кожній категорії рівнів A1–B2). Повний доступ відкриває абонемент PRO (1, 3 або 6 місяців через Monobank).
   - Монети витрачаються у крамничці на годування та аксесуари для кота (${petName}). Перша підказка на день безкоштовна (якщо ситість кота >= 70%), кожна наступна коштує на +20 монет дорожче.
   - Визначити свій рівень (A1–C1) можна за кнопкою «Визначити рівень» у верхньому блоці.

СУВОРЕ ОБМЕЖЕННЯ (АНТИ-ЧІТЕРСТВО У ТЕСТАХ):
- Поточний режим учня: "${mode}". Активний тест/правопис зараз: ${isTestActive ? 'ТАК' : 'НІ'}.
${isTestActive && forbiddenWord ? `- ЗАБОРОНЕНЕ СЛОВО ЗАРАЗ НА ЕКРАНІ: "${forbiddenWord}" (переклад: "${forbiddenTranslation}").
- Якщо учень прямо або завуальовано питає переклад, артикль, значення чи написання слова "${forbiddenWord}" або "${forbiddenTranslation}" — КАТЕГОРИЧНО НЕ ВІДПОВІДАЙ на це слово! Ввічливо скажи, що під час тесту не підказуєш поточне слово, і порадь натиснути кнопку «Підказка» від кота ${petName}.` : ''}
`.trim();

    const contents = messages.slice(-8).map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: String(msg.text || '') }],
    }));

    const models = [
      'gemini-2.5-flash-lite',
      'gemini-2.5-flash',
      'gemini-2.0-flash-lite',
      'gemini-2.0-flash',
    ];

    let lastErrorMessage = 'Помилка звернення до Gemini API';
    let lastStatus = 500;

    for (const model of models) {
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
              maxOutputTokens: 350,
            },
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        const reply =
          data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
          'Вибач, зараз не вдалося сформувати відповідь. Спробуй переформулювати питання.';

        return res.status(200).json({ reply, modelUsed: model });
      }

      lastStatus = response.status;
      lastErrorMessage = data?.error?.message || lastErrorMessage;
    }

    return res.status(lastStatus).json({ error: lastErrorMessage });
  } catch (err) {
    return res.status(500).json({ error: 'Внутрішня помилка сервера чату' });
  }
}
