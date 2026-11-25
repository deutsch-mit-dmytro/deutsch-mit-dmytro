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
      .slice(-6)
      .map((msg) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: String(msg.text).trim() }],
      }));

    if (contents.length === 0) {
      return res.status(400).json({ error: 'Порожнє повідомлення' });
    }

    const models = ['gemini-3.8-flash', 'gemini-2.5-flash'];
    let lastErrorMessage = 'Сервіс тимчасово перевантажений. Спробуй ще раз за кілька секунд.';
    let lastStatus = 503;

    for (const model of models) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 9000);

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
            body: JSON.stringify({
              system_instruction: {
                parts: [{ text: systemInstruction }],
              },
              contents,
              generationConfig: {
                temperature: 0.4,
                maxOutputTokens: 900,
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
          const rawReply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
            'Вибач, зараз не вдалося сформувати відповідь. Спробуй переформулювати питання.';

          const reply = rawReply.replace(/\*\*/g, '').trim();
          return res.status(200).json({ reply, modelUsed: model });
        }

        lastStatus = response.status;
        lastErrorMessage = data?.error?.message || lastErrorMessage;
      } catch (err) {
        lastStatus = 504;
        lastErrorMessage = 'Час очікування відповіді від ШІ вичерпано. Спробуй ще раз.';
      }
    }

    return res.status(lastStatus).json({ error: lastErrorMessage });
  } catch (err) {
    return res.status(500).json({ error: 'Внутрішня помилка сервера чату' });
  }
}
