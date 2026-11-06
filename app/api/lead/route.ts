// Forwards enquiry-form submissions to the Google Sheet web app (scripts/google-sheet-lead.gs).
// The sheet URL and secret stay server-side; the browser only ever talks to /api/lead.

const LIMITS = { name: 120, phone: 32, email: 160, interest: 40, message: 2000, locale: 8, page: 200 };
type Field = keyof typeof LIMITS;

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const url = process.env.LEAD_SHEET_URL;
  const secret = process.env.LEAD_SHEET_SECRET;
  if (!url || !secret) return Response.json({ ok: false, error: "not_configured" }, { status: 503 });

  let raw: Record<string, unknown>;
  try {
    raw = await req.json();
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot filled: pretend success so bots don't retry.
  if (str(raw.company, 200)) return Response.json({ ok: true });

  const lead = Object.fromEntries(
    (Object.keys(LIMITS) as Field[]).map((k) => [k, str(raw[k], LIMITS[k])]),
  ) as Record<Field, string>;

  const digits = lead.phone.replace(/\D/g, "");
  if (lead.name.length < 2 || digits.length < 8 || digits.length > 15) {
    return Response.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, secret }),
      redirect: "follow",
      cache: "no-store",
    });
    const out = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!out?.ok) {
      // Logged with a non-2xx status so the failure is visible in Vercel logs.
      console.error("lead: sheet rejected", res.status, out?.error);
      return Response.json({ ok: false, error: "upstream" }, { status: 502 });
    }
  } catch (err) {
    console.error("lead: sheet unreachable", err);
    return Response.json({ ok: false, error: "upstream" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
