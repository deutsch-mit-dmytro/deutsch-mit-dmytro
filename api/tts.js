import { EdgeTTS } from 'edge-tts-universal';

export default async function handler(req, res) {
  const { text = '', voice = 'de-DE-KatjaNeural' } = req.query;
  const cleanText = String(text).trim().slice(0, 300);

  if (!cleanText) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const tts = new EdgeTTS(cleanText, voice, { rate: '-5%' });
    const result = await tts.synthesize();
    const arrayBuffer = await result.audio.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', buffer.length);
    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.status(200).send(buffer);
  } catch (err) {
    return res.status(502).json({ error: err.message || 'TTS failed' });
  }
}
