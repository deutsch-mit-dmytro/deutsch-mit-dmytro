export default async function handler(req, res) {
  const { text = '', voice = 'de-DE-KatjaNeural' } = req.query;
  const cleanText = String(text).trim().slice(0, 300);

  if (!cleanText) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const endpoint = `https://tts.travisvn.com/api/tts?t=${encodeURIComponent(cleanText)}&v=${encodeURIComponent(voice)}&r=-5%25`;
    const response = await fetch(endpoint, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    if (!response.ok) {
      throw new Error(`TTS error: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', buffer.length);
    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.status(200).send(buffer);
  } catch (err) {
    return res.status(502).json({ error: 'TTS unavailable' });
  }
}
