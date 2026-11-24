const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const MODELS = [
  'gemini-3.8-flash',
  'gemini-2.5-flash-lite',
  'gemini-2.0-flash',
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateWithFallback(prompt) {
  let lastError = null;

  for (const model of MODELS) {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log(`Пробую модель ${model} (спроба ${attempt}/3)...`);
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: { responseMimeType: 'application/json' },
            }),
          }
        );

        const json = await res.json();
        const rawText = json.candidates?.[0]?.content?.parts?.[0]?.text;

        if (rawText) {
          console.log(`Успішна відповідь від ${model}!`);
          return rawText;
        }

        lastError = JSON.stringify(json);
        // Якщо модель перевантажена (503) або тимчасово лімітована (429), чекаємо перед повтором
        if (res.status === 503 || res.status === 429) {
          await sleep(4000 * attempt);
          continue;
        }
        // Якщо модель не знайдена (404), одразу переходимо до наступної зі списку
        break;
      } catch (err) {
        lastError = err.message;
        await sleep(3000);
      }
    }
  }

  throw new Error('Жодна з моделей Gemini не відповіла: ' + lastError);
}

async function run() {
  // 1. Отримуємо список уже існуючих слів, щоб уникнути повторів
  const existingRes = await fetch(`${SUPABASE_URL}/rest/v1/vocabulary?select=word`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  });
  const existingData = await existingRes.json();
  const existingWords = Array.isArray(existingData)
    ? existingData.map((item) => item.word).join(', ')
    : '';

  // 2. Генеруємо 12 нових слів з автоматичним перебором моделей
  const prompt = `Згенеруй 12 корисних німецьких слів (по 1 слову на кожну комбінацію рівня A1, A2, B1, B2 та категорії colloquial, exam, official).
НЕ використовуй ці слова, бо вони вже є в базі: [${existingWords}].
Поверни ТІЛЬКИ валідний JSON-масив об'єктів без markdown-розмітки. Кожен об'єкт має містити поля:
- "level": "A1" | "A2" | "B1" | "B2"
- "category": "colloquial" | "exam" | "official"
- "article": "der" | "die" | "das" | "" (порожній рядок для дієслів/прикметників)
- "word": німецьке слово з великої літери (якщо іменник)
- "plural": множина з артиклем (наприклад "die Tische") або ""
- "translation": точний переклад українською
- "example": природне речення-приклад німецькою
- "example_ua": переклад прикладу українською`;

  const rawText = await generateWithFallback(prompt);
  const newWords = JSON.parse(rawText);

  // 3. Записуємо нові слова у Supabase (ігноруючи можливі дублікати)
  const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/vocabulary?on_conflict=word,level`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=ignore-duplicates',
    },
    body: JSON.stringify(newWords),
  });

  if (!insertRes.ok) {
    throw new Error('Помилка запису в Supabase: ' + (await insertRes.text()));
  }

  console.log(`Успішно додано ${newWords.length} нових слів!`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
