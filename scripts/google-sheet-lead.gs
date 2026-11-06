// Google Apps Script: receives enquiries from /api/lead and appends them to this spreadsheet.
//
// Setup (once):
//   1. Create a Google Sheet. Extensions > Apps Script. Paste this file, save.
//   2. Project Settings > Script properties > add LEAD_SECRET = <a long random string>.
//   3. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
//   4. Copy the /exec URL. In Vercel set LEAD_SHEET_URL = that URL and LEAD_SHEET_SECRET = the same secret.
//   5. Redeploy the site. The form switches on automatically once LEAD_SHEET_URL is set.

const HEADERS = ["Received (MYT)", "Name", "Phone", "Email", "Interest", "Message", "Language", "Page"];

function doPost(e) {
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return json({ ok: false, error: "bad_json" });
  }

  const secret = PropertiesService.getScriptProperties().getProperty("LEAD_SECRET");
  if (!secret || body.secret !== secret) return json({ ok: false, error: "unauthorized" });

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sheet.appendRow([
      Utilities.formatDate(new Date(), "Asia/Kuala_Lumpur", "yyyy-MM-dd HH:mm:ss"),
      clean(body.name),
      // Leading apostrophe keeps "+60…" as text instead of a formula/number.
      "'" + String(body.phone == null ? "" : body.phone).slice(0, 40),
      clean(body.email),
      clean(body.interest),
      clean(body.message),
      clean(body.locale),
      clean(body.page),
    ]);
  } finally {
    lock.releaseLock();
  }
  return json({ ok: true });
}

// Strip leading formula characters so a submitted "=HYPERLINK(...)" is stored as plain text.
function clean(v) {
  const s = String(v == null ? "" : v).slice(0, 2000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
