export default async function handler(req, res) {
  const token = process.env.MONO_TOKEN;
  if (!token) {
    return res.status(400).json({ error: 'MONO_TOKEN is missing in Vercel' });
  }

  const response = await fetch('https://api.monobank.ua/personal/webhook', {
    method: 'POST',
    headers: {
      'X-Token': token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      webHookUrl: 'https://deutsch-dmytro.vercel.app/api/mono-webhook'
    })
  });

  const data = await response.json().catch(() => ({}));
  return res.status(response.status).json({ status: response.status, data });
}
