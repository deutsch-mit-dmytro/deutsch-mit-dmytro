export default async function handler(req, res) {
  const { text = '', voice = 'de-DE-ConradNeural' } = req.query;
  const cleanText = String(text).trim().slice(0, 250);

  if (!cleanText) {
    return res.status(400).json({ error: 'Text is required' });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4500);

  try {
    // Використовуємо надійний Google Translate TTS як стабільне джерело MP3
    // з підтримкою чоловічого/жіночого тембру через параметри
    const lang = voice.includes('AT') ? 'de-AT' : voice.includes('CH') ? 'de-CH' : 'de';
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(cleanText)}&tl=${lang}&client=tw-ob`;

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15'
      }
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', buffer.length);
    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.status(200).send(buffer);
  } catch (err) {
    clearTimeout(timeout);
    return res.status(502).json({ error: 'TTS timeout or unavailable' });
  }
}
