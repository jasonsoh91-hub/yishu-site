# Yishu authorized reseller site (Malaysia)

Single-page marketing site built from `DESIGN.md` (the spec). Next.js 16 App Router + Tailwind v4 + TypeScript.
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

Drop files into `public/images/` with the exact names listed in `content/site.ts` (and DESIGN.md section 5).
Until a file exists, its slot renders a placeholder box showing the filename and brief.
Existence is checked at build time, so restart `npm run dev` / re-run `npm run build` after adding images.
When `product-mask.webp` arrives, re-tune `hotspotPositions` in `content/site.ts`.

## Lead form

No backend yet. The form validates on the client, has a honeypot, shows a success state and
`console.log`s the payload. See the `TODO(owner)` in `components/sections/LeadForm.tsx` to wire email
(Resend via `app/api/lead/route.ts`, export a named `POST`) or a WhatsApp fallback.

## World map

`lib/world-map.ts` is generated from Natural Earth (world-atlas 110m) by `npm run build:map`.
Only re-run it if you change the market list in `scripts/build-map.mjs`.
