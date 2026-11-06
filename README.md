# Yishu authorized reseller site (Malaysia)

Single-page marketing site built from `DESIGN.md` and matched to the approved `yishu.su` reference. Next.js 16 App Router + Tailwind v4 + TypeScript.
Three locales: English (`/en`, default; `/` redirects there), Simplified Chinese (`/zh`), Bahasa Melayu (`/ms`).

## Run

```bash
npm install
npm run dev      # http://localhost:3000  -> redirects to /en
npm run build    # static build of /en, /zh, /ms
npm start        # serve the build
npm run lint
```

## Where to edit

| What | File |
|---|---|
| Business name, phone, email, WhatsApp, socials, privacy link | `content/site.ts` |
| Currency (RM), partnership session price, level thresholds (US$) | `content/site.ts` (`currency`, `maths`, `levels`) |
| Image slot paths + briefs, hotspot positions on the product photo | `content/site.ts` (`images`, `hotspotPositions`) |
| English copy | `content/en.ts` |
| Chinese copy (DRAFT, needs native review) | `content/zh.ts` |
| Malay copy (DRAFT, needs native review) | `content/ms.ts` |
| The shape every locale must follow | `content/types.ts` |

`*Yishu*` in a string renders as italic display type. `{n}`, `{amount}` etc. are filled in by the page.

### Editing or adding a translation

- Edit a string: change it in `content/<locale>.ts`. Keep the keys and array lengths; `npm run build`
  fails with a type error if a key is missing or misspelt.
- Add a language (e.g. Tamil `ta`):
  1. Copy `content/en.ts` to `content/ta.ts`, rename the export to `ta`, translate the values.
  2. Add `"ta"` to the `Locale` union in `content/types.ts`.
  3. In `content/index.ts`, import it, add it to `locales`, `dictionaries` and `htmlLang` (e.g. `"ta-MY"`).
  4. If the script needs a font (like CJK for `zh`), add it in `app/[lang]/layout.tsx`.
  The language switcher picks up `meta.langName` / `meta.langShort` automatically.

## Images

The approved public Yishu imagery is stored locally in `public/images/`, with published certificate scans in
`public/certificates/`. Paths are centralized in `content/site.ts`; missing future assets still fall back to a
labelled placeholder. If the smart-mask artwork changes, re-tune `hotspotPositions` in `content/site.ts`.

The current RM income illustration uses the 26 October 2026 reference conversion of
`1 RUB = RM 0.050607`, rounded to whole ringgit. Replace those illustrative values with approved Malaysian
commercial pricing before launch if the local offer differs.

## Lead form (Google Sheet)

The enquiry form posts to `/api/lead` (`app/api/lead/route.ts`), which forwards to a Google Apps Script web app
that appends a row to a Google Sheet. The Sheet URL and secret stay on the server.

1. Create a Google Sheet. Extensions > Apps Script. Paste `scripts/google-sheet-lead.gs`, save.
2. Project Settings > Script properties: add `LEAD_SECRET` = a long random string.
3. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone. Copy the `/exec` URL.
4. Set two environment variables on the host (Vercel / v0 project settings):
   - `LEAD_SHEET_URL` = the `/exec` URL
   - `LEAD_SHEET_SECRET` = the same secret as step 2
5. Redeploy. The page is pre-rendered, so the form only switches on in a build made **after** both variables exist.
   Without them the button stays disabled with an "not connected yet" note.

Optional: `NEXT_PUBLIC_SITE_URL` = the live domain (e.g. `https://yishu.garyyeow.net`) for canonical/OG links.

## Importing into v0.app

Import the folder as an existing Next.js project (GitHub import, or upload the zip). Then:

- Keep `postcss.config.mjs` and `app/globals.css` as they are; Tailwind v4 needs both.
- Add the environment variables above in the v0 project settings.
- Edit words in `content/*.ts`, not in the components.

## World map

`lib/world-map.ts` is generated from Natural Earth (world-atlas 110m) by `npm run build:map`.
Only re-run it if you change the market list in `scripts/build-map.mjs`.
