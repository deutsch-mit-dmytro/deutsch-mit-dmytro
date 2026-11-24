import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vdjduptyloghojeqaglw.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'ok' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const statementItem = body?.data?.statementItem;

    if (!statementItem) {
      return res.status(200).json({ ignored: true, reason: 'No statementItem' });
    }

    const amountUah = Math.floor((statementItem.amount || 0) / 100);
    const comment = String(statementItem.comment || statementItem.description || '').trim();

    if (amountUah < 165) {
      return res.status(200).json({ ignored: true, reason: 'Amount below minimum plan' });
    }

    const emailMatch = comment.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (!emailMatch) {
      return res.status(200).json({ ignored: true, reason: 'No email in comment' });
    }

    const email = emailMatch[0].toLowerCase();

    let months = 1;
    if (amountUah >= 900) months = 6;
    else if (amountUah >= 475) months = 3;

    const proUntil = new Date(Date.now() + months * 30 * 24 * 60 * 60 * 1000).toISOString();
    const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_KEY);

    const { error } = await supabaseAdmin
      .from('profiles')
      .update({
        is_pro: true,
        pro_until: proUntil,
        updated_at: new Date().toISOString()
      })
      .eq('email', email);

    if (error) {
      throw error;
    }

    return res.status(200).json({ ok: true, activated: email, months, amountUah });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Monobank webhook error' });
  }
}
