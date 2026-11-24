export default async function handler(req, res) {
  const { text = '', voice = 'de-DE-KatjaNeural' } = req.query;
  const cleanText = String(text).trim().slice(0, 300);

  if (!cleanText) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const endpoint = `https://tts.travisvn.com/api/tts?t=${encodeURIComponent(cleanText)}&v=${encodeURIComponent(voice)}&r=-5%25`;
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error('Upstream TTS failed');
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.status(200).send(buffer);
  } catch (err) {
    return res.status(502).json({ error: 'TTS unavailable' });
  }
}
