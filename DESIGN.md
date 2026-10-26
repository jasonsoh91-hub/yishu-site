# Yishu Authorized Reseller Site: Design Spec

Single-page marketing site for an authorized Yishu (宜树) reseller. The layout, section rhythm and
visual language follow the reference site (yishu.su/en). **All copy is original and every image
is a placeholder slot.** Do not copy sentences from the reference or download its images.

- Stack: Next.js (App Router) + Tailwind v4 (`@theme` tokens) + TypeScript. No UI kit.
- One page `app/page.tsx`. Each section is its own component in `components/sections/`.
- **All copy lives in `content.ts`.** No hard-coded strings inside components except aria fallbacks.
- Images live in `public/images/`. Until the owner supplies them, render a `<Placeholder>` box
  (see Component inventory) so the layout never breaks.

---

## 1. Design tokens

### 1.1 Colour (`@theme` in `app/globals.css`)

| Token | Hex | Use |
|---|---|---|
| `--color-ink` | `#0b0b0c` | Dark sections (Brand/Experts/Consultant/Footer), body text on light |
| `--color-forest-deep` | `#0d211b` | Hero, Trust, Philosophy, Partnership backgrounds |
| `--color-forest` | `#16332b` | Contact icon tint (`bg-forest/8`), hover fill |
| `--color-forest-soft` | `#1e463a` | Radial-gradient highlight on forest sections |
| `--color-gold` | `#c2a36b` | Primary accent, numerals, hairlines |
| `--color-gold-bright` | `#e4cf9c` | Accent on dark, eyebrows, focus ring |
| `--color-gold-deep` | `#9c7f49` | Accent on light, icon strokes |
| `--color-gold-text` | `#7a6134` | Small gold text on cream (passes AA: 5.2:1 on `#fbf8f1`) |
| `--color-cream` | `#f7f2e8` | Light sections (Compare, Certificates, Contacts), text on dark |
| `--color-cream-soft` | `#fbf8f1` | Light sections (Product, How-to, Catalog, FAQ) |
| `--color-stone` | `#6b6557` | Muted meta text on cream (labels, form footnote) |

Text opacity ladder (always on the base colour, never a new grey):
`cream/80` lead copy · `cream/70` body · `cream/60` meta · `cream/45` footnotes;
`ink/70` body · `ink/65` card body · `ink/55` meta.

`::selection { background: var(--color-gold); color: #0b0b0c; }`

### 1.2 Gradients and textures (reusable)

| Name | Value |
|---|---|
| `hero-radial` | `radial-gradient(120% 90% at 50% -10%, #1e463a 0%, #102a23 45%, #0b1c18 100%)` |
| `hero-vignette` | `radial-gradient(115% 115% at 50% 45%, transparent 0%, rgba(11,28,24,.42) 68%, rgba(11,28,24,.74) 100%)` |
| `forest-corner` | `radial-gradient(110% 80% at 15% 0%, #1e463a 0%, #0d211b 70%)` (Partnership) |
| `btn-gold-fill` | `linear-gradient(135deg, #e4cf9c, #c2a36b)`; hover layer `linear-gradient(135deg, #ecdbb2, #ceb078)` |
| `gold-sheen` | `linear-gradient(110deg, #c2a36b 0 32%, #e4cf9c 44%, #fbf8f1 50%, #e4cf9c 56%, #c2a36b 68% 100%)`, `background-size: 200%` |
| `rule-gold-h` | `linear-gradient(90deg, transparent, color-mix(in srgb, var(--color-gold) 55%, transparent) 50%, transparent)` on a 1px-high div |
| `rule-gold-v` | `linear-gradient(180deg, transparent 0%, gold/55 3%, gold/55 97%, transparent 100%)` on a 1px-wide div |
| `hairline` | `border-color: color-mix(in srgb, var(--color-gold) 28%, transparent)` |
| Glow orb | `rounded-full bg-gold/5..8 blur-[120px..150px]`, absolutely placed, `pointer-events-none` |
| Image fade | `bg-gradient-to-t from-<section-bg> via-<section-bg>/55..70 to-transparent` over the bottom 2/5 of any image so it melts into the section |

### 1.3 Typography

- Display: **Oranienbaum** 400 (Google Fonts, `next/font/google`, `variable: --font-display-src`),
  fallback `Georgia, "Times New Roman", serif`. Brand word "Yishu" is always *italic* display.
- Sans: **Commissioner** 400/500/600 (`variable: --font-commissioner`), fallback
  `ui-sans-serif, system-ui, "PingFang SC", "Microsoft YaHei", sans-serif` (CJK glyphs fall through).
- Chinese characters (正见 etc.) render in the display stack; Oranienbaum has no CJK, so they fall
  back to the system serif/CJK font. That is intended.

| Role | Classes | Size (mobile → desktop) |
|---|---|---|
| Hero wordmark | `font-display italic leading-none text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]` | 72 → 160px |
| Section H2 | `font-display text-balance text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.08]` | 36 → 56px |
| Product H2 | same but `lg:text-6xl leading-[1.04]` | 36 → 60px |
| Big numeral | `font-display text-6xl sm:text-7xl leading-[0.95] text-gold` | 60 → 72px |
| Stat numeral | `font-display text-4xl sm:text-5xl text-gold` | 36 → 48px |
| Person name | `font-display text-4xl sm:text-5xl leading-[1.05]` | |
| H3 card | `font-display text-xl lg:text-2xl leading-tight` | |
| Lead | `text-base sm:text-lg leading-relaxed text-pretty` | 16 → 18px |
| Body | `text-sm sm:text-base leading-relaxed` | |
| Eyebrow | `text-xs font-medium uppercase tracking-[0.18em] text-gold-bright` (dark) / `text-gold-text` (light) | 12px |
| Footer label | `text-[0.7rem] uppercase tracking-[0.22em] text-gold-deep` | |

Type scale is Tailwind default (`xs .75 → 9xl 8rem`); only arbitrary sizes are `3.5rem`, `4.25rem`,
`5.25rem`, `7rem`, `10rem`.

### 1.4 Spacing, layout, radii, shadow

- Base unit 4px (Tailwind `--spacing: .25rem`).
- Container: `mx-auto max-w-7xl px-5 sm:px-8`. Narrow text sections: `max-w-3xl` (FAQ), `max-w-2xl` (intros).
- Section padding: `py-20 md:py-28` (standard), `py-16 sm:py-24 md:py-32` (Product), hero `pt-32 pb-24 min-h-svh`.
- Intro → content gap: `mt-10`..`mt-16 md:mt-24`.
- Recurring split grid: `grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20` (title left, content right).
- Radii: `--radius-card: 1.125rem` (cards, portraits, product image), buttons/chips `9999px`.
  Ingredient tiles and table: square (0) with hairlines; the luxury feel comes from rules, not boxes.
- Shadows are rare. Only:
  - Hotspot label: `0 4px 14px -5px rgba(58,46,22,.45)`
  - Glass card: `inset 0 0 0 1px #ffffff8c, 0 16px 40px -16px #3a2e164d, 0 0 24px -10px gold/60`
  - Wordmark: `filter: drop-shadow(0 8px 18px #0000008c)`
- Breakpoints: Tailwind default (`sm 640`, `md 768`, `lg 1024`). Mobile first.

### 1.5 Motion

| Token | Value |
|---|---|
| `--ease-lux` | `cubic-bezier(.16, 1, .3, 1)` (reveal, button press) |
| `--ease-out` | `cubic-bezier(0, 0, .2, 1)` |
| Reveal | `opacity 0 → 1`, `translateY(28px) → 0`, `.9s var(--ease-lux)`; stagger via inline `transition-delay` 0/100/120ms |
| Shimmer | `@keyframes gold-shimmer { from {background-position:100%} to {background-position:-100%} }` 3s linear infinite |
| Outline glint | `@keyframes outline-glint` cycles fill/stroke colour gold-bright → cream-soft → gold-bright, 3s ease-in-out infinite |
| Hotspot ping | `@keyframes hotspot-ping { 0% {opacity:.7; scale:1} 70%,100% {opacity:0; scale:2.9} }` 2.4s ease-out infinite |
| Hover image zoom | `transition-transform duration-500 group-hover:scale-105` |

**`prefers-reduced-motion: reduce`**: reveal shows immediately, shimmer/glint/ping set to
`animation: none` with the gradient parked at `background-position: 50%`. Required, not optional.

---

## 2. Global chrome

### Sticky header
- `fixed inset-x-0 top-0 z-50 py-5`. Behind it a `.nav-glass` layer
  (`backdrop-filter: blur(11px) saturate(150%)`, `background: linear-gradient(#f7f2e81f, #f7f2e80d)`)
  at `opacity-0`, fading to `opacity-100` (500ms) once `scrollY > 24`.
- Left: wordmark "Yishu" (`.brand-logo`: gold gradient text clipped over a 0.6px gold-bright stroke
  pseudo-element). Optional small "Authorized reseller" tag after it (`text-[0.65rem] uppercase tracking-[0.2em] text-gold-bright/70`).
- Centre (`lg+`): anchor links, `font-display text-base text-cream/80 hover:text-gold`, gap-7.
  Active section (IntersectionObserver) gets `text-gold`.
- Right: optional language chip (only if the owner wants EN/中文 later; hide by default) and
  burger button (`glass-chip h-9 w-9 rounded-full`, `lg:hidden`).
- Over light sections the header text must stay legible: when the section under the header has
  `data-theme="light"`, swap link colour to `text-ink/80` and logo to `.brand-logo-dark` (gold-deep gradient).
- `html { scroll-behavior: smooth; scroll-padding-top: 5.5rem }`.

### Mobile menu
- Full-screen dialog `fixed inset-0 z-40`, backdrop `bg-ink/80` + `backdrop-blur` fading in 500ms,
  a gold glow orb at `top-1/3`. Links stacked centred, `font-display text-3xl text-cream/90`,
  each animating `translate-y-4 opacity-0 → 0/1` with 50ms stagger. Esc closes, focus trapped,
  body scroll locked, link click closes then scrolls.

### Buttons
- `.btn`: `inline-flex min-h-[3.25rem] px-[1.85rem] py-3 rounded-full text-sm font-medium gap-2`,
  `transition: transform .4s var(--ease-lux)`, `:active { transform: translateY(1px) scale(.99) }`,
  `focus-visible: outline 2px gold-bright, offset 3px`. An `::after` layer holds the hover gradient
  and cross-fades in over 550ms (no colour jump).
- `.btn-gold`: ink text on `btn-gold-fill`. `::before` is a 1px border painted with a moving
  gold sheen (mask-composite trick, see `.shimmer-border-gold`).
- `.btn-glass`: cream text, `background: #f7f2e80d`, `backdrop-filter: blur(7px) saturate(125%)`,
  inset 0.5px white/9 ring, sheen border on `::before`.
- On mobile, CTA pairs stack: `w-full max-w-[17rem]`, `sm:w-auto sm:flex-row`.

### Shimmer border (`.shimmer-border-gold`)
`::before { content:""; position:absolute; inset:0; padding:1.5px; border-radius:inherit;
background: <gold sheen 110deg> 0 0/200%; mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
mask-composite: exclude; animation: gold-shimmer 3s linear infinite; pointer-events:none }`.
Used on catalog cards and portrait frames. `.glass-chip` is the same idea with `currentColor` at 8% fill.

---

## 3. Sections

Background sequence (keep it, it creates the dark/light rhythm):
forest → forest → forest → cream-soft → cream-soft → cream-soft → cream → cream-soft → cream → ink → ink → cream-soft → forest → cream → ink.

Every section's direct content blocks are wrapped in `<Reveal>`.

### 3.1 Hero `#top` (forest-deep)
- Desktop and mobile: centred column `max-w-3xl`, `min-h-svh`, `pt-32 pb-24`.
- Background stack (`-z-10`): `hero-radial` → `hero.webp` (`object-cover opacity-65`) inside a
  wrapper at `scale(1.1)` that translates on scroll (parallax: `translateY(scrollY * 0.15)`, rAF,
  disabled under reduced motion) → `hero-vignette` → top fade `h-40 from-forest-deep/70` →
  bottom fade `h-[28rem] from-forest-deep via-forest-deep/55`.
- H1: wordmark "Yishu" with `.text-stroke-gold` (outline pseudo-element in gold-bright running
  `outline-glint`) wrapping `.text-shimmer-gold` (gradient text running `gold-shimmer`).
- Sub-line under it: small eyebrow "Authorized reseller" (owner-visible trust signal).
- Lead `mt-6 max-w-xl text-cream/80`. CTAs `mt-9`: gold "Send a request" → `#contact`,
  glass "See the smart mask" → `#product`.
- **Three.js**: no Three.js/WebGL code exists in the saved server-rendered HTML; the hero there is a
  static WebP with a scaled parallax wrapper. If the owner wants depth, add an *optional*
  `<HeroParticles>` client component: `dynamic(() => import(...), { ssr:false })`, a sparse field
  (~400) of warm-gold points drifting upward with additive blending over the background image,
  `opacity .5`, paused when off-screen or tab hidden, skipped on `prefers-reduced-motion` and when
  `navigator.hardwareConcurrency < 4`. Ship it behind `content.hero.particles: boolean` (default false).

### 3.2 Trust and reach `#trust` (forest-deep)
Two stacked blocks in one section.
1. **Standards list**: split grid (`0.85fr_1.15fr`). Left H2. Right `<dl class="divide-y divide-white/12">`,
   rows `flex justify-between py-5`: `dt` display `text-2xl sm:text-3xl` + optional mono logo
   (CE, FCC rendered as CSS `mask-image` SVG tinted `bg-current`, `h-5 sm:h-6`), `dd` right-aligned `text-cream/60`.
   Rows: ISO 9001, ISO 45001, CE / RoHS, FCC Part 15, Annoyin™.
2. **Stats strip** (optional, from the reference "about" block): `grid grid-cols-2 sm:grid-cols-4
   border-t border-white/10 pt-10 mt-16`, each stat a gold numeral + `text-sm text-cream/70` label,
   `sm:border-l` dividers.
3. **12 countries map**: H2 "12 countries" + lead, then an inline SVG world map (`viewBox 0 0 1000 470`,
   all land `fill cream/5 stroke cream/9 0.4px`, active countries slightly brighter, each market a
   pin = `r=20` radial glow (`#e4cf9c` 50% → `#c2a36b` 0) + `r=2.8` solid gold-bright dot; dots pulse
   with `hotspot-ping`). Below `sm`, the map is replaced by a wrapped list of country names with
   1px gold bullets (on `sm+` the list is `sr-only`, so screen readers always get it).
- Background: soft gold orb (`h-[55%] w-[70%] bg-gold/5 blur-[150px]`) centred; bottom 2/3 a
  `cosmos.webp` layer `mix-blend-screen opacity-90` masked `linear-gradient(to top, black 28%, transparent 92%)`.
- Use a free map SVG (e.g. Natural Earth via `world-atlas` + d3-geo at build time, equirectangular). Do not copy the reference's paths.

### 3.3 Philosophy "Five Zheng" `#philosophy` (forest-deep)
- Intro centred `max-w-2xl py-16 md:py-20`.
- Five rows, each `grid md:grid-cols-2 items-stretch`, **alternating**: text left/image right, then
  swapped (`md:order-1/2`). A `rule-gold-v` runs down the centre seam (`md:block`), and a
  `rule-gold-h` sits on top of every row after the first.
- Text cell: centred, `px-6 py-10 md:px-14 lg:px-24`. Big character in `.text-stroke-gold` +
  `.text-shimmer-gold`, `text-[4.25rem] sm:text-[5.25rem] lg:text-[7rem]`, `lang="zh-Hans"`;
  pinyin `mt-5 font-display text-2xl`; meaning `mt-3 max-w-md text-cream/65`.
- Image cell: `min-h-[13rem] md:min-h-[26rem]`, artwork `object-contain p-4 md:p-10`.
- Mobile: single column, character block then image, rule-gold-h between rows.

### 3.4 Smart mask flagship `#product` (cream-soft)
- Full-bleed `product-bg.webp` (`object-cover`) behind.
- `grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`. Left column row 1: H2 ("*Yishu* smart mask") + lead.
  Right column spans 2 rows: product image `aspect-[1142/1234] rounded-card overflow-hidden`.
  Left column row 2: spec `<dl>` (4 rows, `dt` eyebrow `text-gold-text`, `dd` display `text-base sm:text-lg`
  right-aligned, `rule-gold-h` between rows) then gold CTA.
- **Hotspots** on the image (5): TENS, EMS, TDDS, Annoyin™, "7 patents". Positions from content
  (`{x:'50%',y:'22%'}` etc.). Each = 16px dot `bg-gold-deep ring-2 ring-cream/85 hover:bg-gold` with an
  enlarged hit area (`after:-inset-1.5`, keep ≥ 44px on touch via an invisible pad) + a `hotspot-ping`
  halo + a pill label above (`bg-cream/80 backdrop-blur-md ring-1 ring-white/50 rounded-full px-2.5 py-1
  text-[0.8125rem] font-medium` + hotspot shadow). Clicking/tapping toggles a small glass popover
  (`.glass-card`, max-w-60) with a one-line explanation; `aria-expanded`, Esc closes, only one open at a time.
- Mobile: image first is fine; stack text → image → specs. Labels can collide below 380px: hide pill labels
  and show only dots + popover.

### 3.5 Key ingredients (same section, below)
- Centred intro, then a strip `border-t border-gold/40`. Mobile/tablet: horizontal scroller
  `flex snap-x snap-proximity overflow-x-auto no-scrollbar`, tiles `w-[72vw] max-w-[20rem] sm:w-[19rem]`.
  `lg`: `grid grid-cols-5`.
- Tile: `aspect-square p-4 sm:p-5 md:p-6`, background photo `opacity-60` zooming 105% on hover,
  bottom fade to cream-soft, an icon image `h-20 → lg:h-32`, footer with Latin/alt name (`italic text-ink/45`)
  and H3. Right edge: 1px `from-gold/45 to-transparent` divider.
- Hover/focus (`tabindex=0`, `group-focus-within`): a frosted overlay fades in (300ms):
  `bg-cream-soft/55 backdrop-blur-md backdrop-saturate-150 ring-1 ring-inset ring-white/40`,
  showing the name in `text-gold-text` + one-line benefit. On touch, tap toggles it.

### 3.6 How to use (cream-soft)
- Centred intro. `<ol class="grid md:grid-cols-4 gap-x-6 gap-y-8 mt-20 md:mt-28">`.
- Desktop: a 1px `bg-gold/30` line runs across `top-6` behind the icons; each step has a 48px
  circle (`border-gold/50 bg-cream-soft text-gold-deep`, line icon), then eyebrow "Step N", H3, body.
- Mobile: each `li` is `flex gap-4` (icon left, text right), line hidden.
- Icons: lucide `Droplets`, `Pipette`, `Headphones`/`Bluetooth`, `Sparkles` (stroke 1.5).

### 3.7 Comparison `#compare` (cream)
- `compare-bg.webp` at `opacity-50` + `bg-cream/35` wash.
- Intro left-aligned `max-w-2xl` with a disclaimer line ("general comparison, not a clinical claim").
- Desktop (`md+`): ARIA table built from divs (`role=table/row/columnheader/rowheader/cell`),
  `grid-cols-[22%_repeat(4,minmax(0,1fr))]`, cells `px-5 py-4 text-sm`. Yishu column text `text-ink`,
  others `text-ink/60`. Two `rule-gold-v` lines frame the Yishu column (absolute, positioned at the
  column edges), `rule-gold-h` above each row. Optional: very light `bg-gold/5` on the Yishu column.
- Mobile: one block per criterion (`divide-y divide-gold/25`), H3 then a `<dl>` of 4 product rows;
  the Yishu row's label in `text-gold-text`, value `font-medium text-ink`.

### 3.8 Catalog `#catalog` (cream-soft)
- Intro left. `grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mt-10`.
- Card (`article.shimmer-border-gold rounded-card bg-cream-soft overflow-hidden flex flex-col h-full`):
  image `aspect-[4/3]` with bottom fade and the title overlaid (`absolute inset-x-4 bottom-3 font-display
  text-lg line-clamp-2`); body `border-t border-gold/25 p-4`: one-line description + contents list
  (`text-xs`, 4px gold-deep bullets). Optional bottom CTA link "Ask about this set" → `#contact` that
  pre-selects the form's interest field (`?interest=<bundle id>` handled client-side).
- At `lg`, 5 columns are narrow (~230px): keep descriptions ≤ 70 chars.

### 3.9 Certificates `#certificates` (cream)
- `certificates-bg.webp opacity-50`. Split grid: left H2 + lead; right `<ul class="divide-y divide-gold/25">`,
  7 rows: name (display `text-lg sm:text-xl`) + scope (`text-sm text-ink/55`), right side two glass-chip
  icon buttons (36px): **View** (opens lightbox) and **Download** (`<a download>`).
- Below the grid, a thumbnail row (`grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-12`),
  each `aspect-[3/4] rounded-card shimmer-border-gold`, click opens the lightbox at that index.
- **Lightbox**: native `<dialog>` (focus trap + Esc for free), `bg-ink/90 backdrop-blur`, image
  `max-h-[85svh] object-contain`, caption below, prev/next glass-chip buttons, arrow keys, swipe on
  touch (pointer events, 40px threshold), counter "3 / 7", fade+scale-in 300ms.

### 3.10 Experts and ambassadors (ink)
- Gold orb top-right (`h-80 w-80 bg-gold/8 blur-[120px]`). Intro left.
- Five alternating rows, `flex flex-col gap-20 md:gap-28 mt-16 md:mt-24`. Row grid
  `md:grid-cols-[20rem_1fr] lg:grid-cols-[22rem_1fr] md:gap-x-[60px] items-center`, flipped on even rows.
- Portrait frame: `shimmer-border-gold aspect-[3/4] max-w-[18rem] md:max-w-none rounded-card
  bg-gradient-to-b from-white/[0.06] to-transparent`, cut-out PNG/WebP `object-contain object-bottom`.
- Name `font-display text-4xl sm:text-5xl`, role eyebrow `text-gold-bright tracking-[0.16em]`, bio
  `text-cream/70 sm:text-lg`. Mobile: centred, portrait above text.
- Slots are fully editable; ship with placeholders "Ambassador name" / "Role". If a slot has no image,
  render the placeholder silhouette, never a stock face.

### 3.11 Personal consultant `#consultant` (ink)
- Background `consultant-bg.webp` cover + `bg-ink/30`.
- `grid items-center gap-12 lg:grid-cols-[minmax(0,40rem)_28rem] lg:justify-center lg:gap-x-16`.
  Left: eyebrow "Your consultant", H2 = consultant name, sub-eyebrow role, 2-3 short paragraphs,
  gold CTA. Right: portrait `aspect-[1536/2010]` cut-out, `object-contain object-bottom`, bleeding into the
  section bottom with `-mb-20 md:-mb-28 lg:self-end`, a gold blur ellipse behind the shoulders
  (`h-2/3 rounded-[50%] bg-gold/15 blur-3xl`).
- Mobile: text centred first, portrait after, `max-w-sm`, `rounded-t-card`.
- Optional quick-contact row (WhatsApp / phone chips) under the CTA.

### 3.12 FAQ `#faq` (cream-soft)
- `max-w-3xl`, centred H2, `divide-y divide-gold/25`.
- Each item: `<button aria-expanded aria-controls>` full-width `py-5`, question in display `text-lg sm:text-xl`,
  a plus icon rotating 45° when open (300ms). Panel uses the grid-rows trick:
  `grid transition-all duration-300 grid-rows-[0fr] opacity-0` → `grid-rows-[1fr] opacity-100`,
  inner `overflow-hidden`, answer `pb-5 pr-12 text-ink/70`. First item open by default; multiple may be open.
- Emit `FAQPage` JSON-LD from the same content.

### 3.13 Partnership `#partner` (forest-deep)
- `forest-corner` radial gradient overlay.
- **a. Intro**: H2 + lead `text-lg text-cream/75`.
- **b. Two income types**: `grid md:grid-cols-2`, left `md:pr-16`, right `md:pl-16` with a `rule-gold-v` on its left edge.
  48px outlined icon circle (`border-gold/50 text-gold-bright`), H3 `text-2xl`, body.
- **c. Income maths**: `grid lg:grid-cols-2 lg:gap-20`. Left: eyebrow, big numeral (computed:
  `(masksPerSet - keepForSelf) × pricePerSession`, formatted with `Intl.NumberFormat` + currency from content),
  explanation, small formula line (`text-sm text-cream/55`). Right: `<dl class="divide-y divide-gold/20 self-center">`,
  4 rows label/value (`dd` display `text-xl sm:text-2xl`). All figures are owner-set; nothing hard-coded.
- **d. Levels Y0-Y6**: H3 + rows `grid grid-cols-[auto_1fr_auto] sm:grid-cols-[3.5rem_10rem_1fr_3.5rem] gap-x-5 py-4`:
  level code (`text-gold-bright text-xl`), threshold (`text-sm text-cream/60`), progress bar (`h-1.5 rounded-full
  bg-white/8`, fill `bg-gradient-to-r from-gold-deep to-gold-bright`, width from content), percentage right.
  On mobile the bar drops to its own full-width line (`order-last col-span-3`). Bars animate `width 0 → n%`
  (1.2s ease-lux, 80ms stagger) when the block is revealed. Footnote `text-xs text-cream/45`.
- **e. Bonuses**: H3 + `grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10`, value `font-display text-3xl sm:text-4xl text-gold`,
  label `text-sm text-cream/60`. Optional count-up on reveal.
- **f. How to start**: 3 steps in `grid md:grid-cols-3` with the same connector line as How-to-use but in gold/30 on dark,
  then gold CTA "Ask about partnership" → `#contact` with interest preset to Partnership.
- **Compliance**: render `content.partner.disclaimer` directly under the income maths (income is not guaranteed,
  depends on individual effort). Owner must check local direct-selling rules before publishing figures.

### 3.14 Lead form and contacts `#contact` (cream)
- `grid lg:grid-cols-2 lg:items-center gap-12 lg:gap-16`.
- Left: H2, lead, "Contact information" label (`text-sm font-semibold uppercase tracking-wider text-gold-deep`),
  contact rows: 44px circle icon `bg-forest/8 text-forest`, tiny label `text-xs uppercase text-stone`, value
  `font-medium hover:text-gold-deep`. Social icon buttons 44px `hover:bg-forest hover:text-cream`.
- Right: form `space-y-8`, `noValidate` with custom validation.
  - Fields: name + phone (2-col on `sm`), email (optional), interest `<select>` (options from content),
    message `<textarea rows=2>` (optional), hidden honeypot `company` (`absolute -left-[9999px]`, `tabIndex=-1`).
  - Underline inputs: label `text-xs uppercase tracking-[0.14em] text-gold-text`, input `border-0 bg-transparent
    font-display text-xl sm:text-2xl pb-2.5 pt-2`, base line `h-px bg-gold/25`, plus an overlay line `bg-gold
    scale-x-0 origin-center` that grows to `scale-x-100` on `group-focus-within` (500ms ease-out); label tints to gold-deep.
  - Error: line turns `#b4432f`, message `text-xs` under field, `aria-invalid` + `aria-describedby`.
  - Submit: full-width `.btn-gold`, `disabled:opacity-60` with spinner while sending; success replaces the form
    with a thank-you panel (`.glass-card rounded-card p-8`). Footnote consent line `text-xs text-stone text-center`.
  - Backend: `app/api/lead/route.ts` (named `POST`), posts to an owner-configured target (email via Resend,
    or a WhatsApp deep link fallback). Out of scope for this spec beyond the contract `{name, phone, email?, interest, message?}`.

### 3.15 Footer (ink)
- Gold orb top-right; giant watermark "宜树" `font-display text-[9rem] sm:text-[13rem] text-cream/[0.035]`
  bottom-right, `aria-hidden`, `select-none`.
- `grid md:grid-cols-[1.3fr_1fr] lg:gap-20`: wordmark + one-line tagline + reseller statement;
  "Sections" nav in a 2-col list (`text-sm text-cream/65 hover:text-gold-bright`).
- `rule-gold-h mt-12 md:mt-16`, then "Product information" `<dl grid sm:grid-cols-2 lg:grid-cols-4>` (holder,
  manufacturer, registration, reseller licence no.) filled from content, `dt text-xs text-cream/45`.
- Bottom line: © year + reseller business name + "Yishu and 宜树 are trademarks of their owner." + privacy link.

---

## 4. Component inventory

| Component | Notes |
|---|---|
| `Header`, `MobileMenu` | scroll-aware glass, active-link observer, light/dark swap via `data-theme` |
| `Reveal` | client; one shared IntersectionObserver (`rootMargin: 0px 0px -10% 0px`, threshold .15); adds `is-visible`; `delay` prop; SSR renders visible content and only "arms" (`reveal-armed`) after hydration so no-JS users see everything |
| `SectionHeading` | eyebrow?, title (supports `*Yishu*` italic token), lead?, `align`, `tone: dark/light` |
| `Button` | `variant: gold / glass`, `as` link or button |
| `GlassChip` | icon button / pill, `currentColor` driven |
| `BrandWordmark` | `tone: light/dark`, sizes `nav / hero / footer` |
| `ShimmerText`, `StrokeText` | hero word + Zheng characters |
| `GoldRule` | `orientation: h/v` |
| `StandardsList` | `dl` rows with optional mask-logo |
| `StatStrip` | 2→4 col numerals |
| `MarketMap` | build-time SVG + pins + mobile list |
| `ZhengRow` | alternating 2-col |
| `ProductHotspots` | image + positioned dots + popovers |
| `SpecList` | `dl` with gold rules |
| `IngredientStrip`, `IngredientTile` | scroller → 5-col grid, frosted hover overlay |
| `Steps` | connector line, `tone` |
| `CompareTable`, `CompareCards` | desktop ARIA grid / mobile blocks from same data |
| `ProductCard` | catalog card |
| `CertificateList`, `CertificateThumbs`, `Lightbox` | `<dialog>` based |
| `PersonRow` | alternating portrait + bio |
| `ConsultantCard` | |
| `Accordion` | grid-rows animation, a11y wiring |
| `IncomeCalc`, `LevelTable`, `BonusGrid` | partnership blocks |
| `LeadForm`, `UnderlineField`, `ContactList` | |
| `Footer` | |
| `Placeholder` | `aspect`, `label`, `tone`; renders a hairline-bordered box with a faint gold diagonal gradient, the slot filename in `text-xs` mono and the brief, so the owner sees exactly what to drop in |
| `Img` | wraps `next/image`; falls back to `Placeholder` when `src` is null |

---

## 5. Image slots (`public/images/`)

All WebP, quality ~78, sized for 2x at the rendered width. No reference-site images.

| File | Ratio | Owner should supply |
|---|---|---|
| `hero.webp` | 16:9 (2400×1350) | Dark forest-green moody scene: product on a stone plinth, botanicals, low warm light. Centre kept dark for text |
| `cosmos.webp` | 16:9 | Soft starfield / gold dust on black (blended with `screen`) |
| `zheng-1..5.webp` | 1:1, transparent | Five line-art or gold-leaf illustrations (tree, lotus, hands, path, circle) on transparent BG |
| `product-bg.webp` | 16:9 | Very light cream texture (silk, paper) |
| `product-mask.webp` | 1142:1234 (~0.93) | Clean product shot of the mask + unit, light background, mask centred (hotspot coords depend on it) |
| `ingredient-{aloe,sophora,purslane,chamomile,algae}.webp` | 1:1 | Macro photo of the plant, airy, light |
| `ingredient-icon-*.webp` | 1:1, 320px, transparent | Cut-out of the plant (or a simple line icon) |
| `compare-bg.webp` | 16:9 | Pale cream/gold abstract |
| `bundle-{starter,combo,magnetic,director,board}.webp` | 4:3 | Each bundle laid out flat on cream, top-down |
| `certificates-bg.webp` | 16:9 | Pale paper texture |
| `certificates/cert-1..7.webp` | 3:4 (≈1240×1650) | Scans the owner is authorised to publish; redact personal data |
| `person-1..5.webp` | 3:4, transparent bottom-cut | Ambassador cut-out portrait, chest up, neutral |
| `consultant-bg.webp` | 16:9 | Dark ink with gold bokeh |
| `consultant.webp` | 1536:2010, transparent | Reseller's own cut-out portrait, waist up |
| `logo-ce.svg`, `logo-fcc.svg` | vector | Monochrome marks (official public artwork) |
| `og.jpg` | 1200×630 | Wordmark on forest-deep with product |

---

## 6. Content file shape (`content.ts`)

Everything the owner may edit. Components import `content` only. `*word*` in strings renders as italic display.

```ts
// content.ts
export type Img = { src: string | null; alt: string; brief?: string };

export const site = {
  resellerName: "Your Business Name",              // TODO owner
  tagline: "Authorized Yishu reseller",
  locale: "en",
  currency: { code: "MYR", symbol: "RM" },          // TODO owner: set your currency
  contact: {
    phone: "+60 00-000 0000",                        // placeholder
    email: "hello@example.com",                      // placeholder
    whatsapp: "https://wa.me/600000000000",          // placeholder
    socials: [{ label: "Instagram", href: "#" }, { label: "Telegram", href: "#" }],
  },
};

export const nav = [
  { id: "trust", label: "Standards" }, { id: "philosophy", label: "Philosophy" },
  { id: "product", label: "Smart mask" }, { id: "catalog", label: "Catalog" },
  { id: "certificates", label: "Certificates" }, { id: "consultant", label: "Consultant" },
  { id: "partner", label: "Partnership" }, { id: "contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Authorized reseller",
  wordmark: "Yishu",
  lead: "Skin science you can feel in fifteen minutes. A smart mask, a clean serum and a person you can call.",
  ctaPrimary: { label: "Send a request", href: "#contact" },
  ctaSecondary: { label: "See the smart mask", href: "#product" },
  image: { src: null, alt: "", brief: "hero.webp 16:9, product on dark green" } as Img,
  particles: false,
};

export const trust = {
  title: "Built to recognised standards",
  standards: [
    { name: "ISO 9001", note: "Quality systems" },
    { name: "ISO 45001", note: "Workplace safety" },
    { name: "CE / RoHS", note: "European conformity", logo: "/images/logo-ce.svg" },
    { name: "FCC Part 15", note: "US device testing", logo: "/images/logo-fcc.svg" },
    { name: "Annoyin™", note: "SCGP biotech active" },
  ],
  stats: [
    { value: "7", label: "Patented technologies" },
    { value: "12", label: "Countries served" },
    { value: "15 min", label: "Per session" },
    { value: "FDA", label: "US registration" },
  ],
  markets: {
    title: "Present in 12 countries",
    lead: "From East Asia to North America, the same mask and formula reach every market we serve.",
    countries: ["China","South Korea","Japan","Taiwan","Hong Kong","Thailand","Malaysia","Singapore","Indonesia","Australia","USA","Canada"],
  },
};

export const philosophy = {
  title: "One tree, five principles",
  lead: "The brand grows from a simple idea: tend to wealth, health and energy, and let five principles guide the work.",
  items: [
    { zh: "正见", pinyin: "Zheng Jian", text: "Clear sight. Honest with yourself, even when no one is watching.", image: null },
    { zh: "正念", pinyin: "Zheng Nian", text: "Right intention. Keep learning and lead with kindness.", image: null },
    { zh: "正行", pinyin: "Zheng Xing", text: "Right action. Be sincere, generous and focused.", image: null },
    { zh: "正事", pinyin: "Zheng Shi", text: "Right work. Show up with patience and help the people beside you.", image: null },
    { zh: "正缘", pinyin: "Zheng Yuan", text: "Right connection. Give back and keep growing for life.", image: null },
  ],
};

export const product = {
  title: "*Yishu* smart mask",
  lead: "A featherlight mask with a smart control unit. Gentle micro-current and electroporation carry the serum deeper while the mask lifts and firms, all in one quarter-hour.",
  image: { src: null, alt: "Yishu smart mask and control unit" } as Img,
  hotspots: [
    { id: "tens", label: "TENS", x: "50%", y: "22%", text: "Soft pulses that relax and wake up tired facial muscles." },
    { id: "ems", label: "EMS", x: "12%", y: "47%", text: "Micro-current that tones and lifts contours." },
    { id: "tdds", label: "TDDS", x: "70%", y: "48%", text: "Transdermal delivery that helps actives travel past the surface." },
    { id: "annoyin", label: "Annoyin™", x: "35%", y: "64%", text: "A marine-derived moisture shield made with SCGP biotech." },
    { id: "patents", label: "7 patents", x: "50%", y: "80%", text: "Seven patented technologies inside one device." },
  ],
  specs: [
    { k: "Format", v: "Smart mask + serum" },
    { k: "Serum", v: "30 ml, hydrating" },
    { k: "Session", v: "15 minutes, use anywhere" },
    { k: "In the box", v: "40 masks + 2 Bluetooth earpieces" },
  ],
  cta: { label: "Request the smart mask", href: "#contact?interest=mask" },
};

export const ingredients = {
  title: "What's in the formula",
  lead: "Patented actives paired with five plant extracts chosen for calm, hydrated skin.",
  items: [
    { id: "aloe", latin: "Aloe barbadensis (Curaçao)", name: "Curaçao aloe vera", text: "Calms and helps skin recover." },
    { id: "sophora", latin: "Sophora flavescens root", name: "Sophora root", text: "Soothes redness and adds moisture." },
    { id: "purslane", latin: "Portulaca oleracea", name: "Purslane", text: "Antioxidant support for a more even tone." },
    { id: "chamomile", latin: "Chamomilla recutita", name: "Golden chamomile", text: "Gentle and calming, ideal before bed." },
    { id: "algae", latin: "Marine macroalgae", name: "Macroalgae", text: "Deep, lasting hydration and nourishment." },
  ],
};

export const howTo = {
  title: "Four steps, fifteen minutes",
  lead: "No salon, no extra products afterwards.",
  steps: [
    { icon: "droplets", title: "Cleanse", text: "Start with clean, dry skin." },
    { icon: "pipette", title: "Apply serum", text: "Smooth the serum on and lay out the mask fabric." },
    { icon: "bluetooth", title: "Connect and start", text: "Put the mask on, pair the earpieces and begin in the app." },
    { icon: "sparkles", title: "Done", text: "Lift off the mask. Nothing else to apply." },
  ],
};

export const compare = {
  title: "How the smart mask compares",
  note: "A general guide to routine and feel, not a clinical comparison.",
  columns: ["Yishu smart mask", "Sheet mask", "Everyday cream", "Salon treatment"],
  rows: [
    { k: "Per-session effect", v: ["Full-face, multi-action", "Surface", "Surface", "Strong"] },
    { k: "Lift and tone", v: ["EMS + TENS", "None", "None", "Depends"] },
    { k: "Active delivery", v: ["Deep (TDDS)", "Surface", "Surface", "Depends"] },
    { k: "Time", v: ["15 min", "15-20 min", "1-2 min", "60+ min"] },
    { k: "Key actives", v: ["Annoyin™, ectoine, botanicals", "Varies", "Varies", "Varies"] },
    { k: "App control", v: ["Yes", "No", "No", "No"] },
  ],
};

export const catalog = {
  title: "Sets and bundles",
  lead: "Pick a starter kit, add body care, or go all in.",
  items: [
    { id: "manager", name: "Manager Package", text: "A home-care starter kit.", contents: ["8 boxes of essence masks", "2 devices"] },
    { id: "combo", name: "Combination Package", text: "Face and body care together.", contents: ["2 Taile sets", "10 magnetic patches", "10 boxes of essence masks", "3 devices"] },
    { id: "magnetic", name: "TIL Taileshu Magnetic Set", text: "Body recovery with an energy box and patches.", contents: ["1 Taileshu set", "8 packs of Shucai patches"] },
    { id: "director", name: "Director's Facial Mask Set", text: "A larger kit for a full course.", contents: ["13 boxes of essence masks", "4 devices"] },
    { id: "board", name: "Board Composition", text: "The complete line-up.", contents: ["1 Taile set", "6 boxes of magnetic patches", "7 boxes of essence masks", "2 equipment sets"] },
  ],
};

export const certificates = {
  title: "Certificates",
  lead: "View or download the documents behind the product.",
  items: [
    { name: "ISO 9001:2015", scope: "Quality management", file: "/images/certificates/cert-1.webp" },
    { name: "ISO 45001:2018", scope: "Occupational health and safety", file: "/images/certificates/cert-2.webp" },
    { name: "CE / RoHS", scope: "Directive 2011/65/EU, device", file: "/images/certificates/cert-3.webp" },
    { name: "FCC Part 15", scope: "US device testing", file: "/images/certificates/cert-4.webp" },
    { name: "FDA registration", scope: "US facility registration", file: "/images/certificates/cert-5.webp" },
    { name: "Product safety award", scope: "China", file: "/images/certificates/cert-6.webp" },
    { name: "Product passport", scope: "Essence mask composition and use", file: "/images/certificates/cert-7.webp" },
  ],
};

export const people = {
  title: "The people behind the brand",
  lead: "Founders, scientists and ambassadors who stand behind Yishu.",
  items: Array.from({ length: 5 }, (_, i) => ({
    name: "Ambassador name", role: "Role or title",
    bio: "Two or three sentences about this person and why they back the brand.",
    image: { src: null, alt: "", brief: `person-${i + 1}.webp 3:4 cut-out` } as Img,
  })),
};

export const consultant = {
  eyebrow: "Your consultant",
  name: "Consultant name",
  role: "Authorized Yishu reseller",
  paragraphs: [
    "I help you build a routine that fits your skin and your schedule.",
    "I use the mask myself, so I can tell you honestly what to expect.",
    "Book a one-to-one session in person or online.",
  ],
  cta: { label: "Book a consultation", href: "#contact?interest=consultation" },
  image: { src: null, alt: "Consultant portrait" } as Img,
};

export const faq = {
  title: "Questions",
  items: [
    { q: "How long does a session take?", a: "Fifteen minutes. The mask is portable and needs no follow-up products." },
    { q: "When will I see a difference?", a: "Many people notice hydration and firmness after the first session. For lasting results plan a course of at least 14 sessions." },
    { q: "What comes in the set?", a: "40 masks (each lasts two sessions), two Bluetooth earpieces for the app, and 30 ml of serum." },
    { q: "What is Annoyin™?", a: "A marine-derived glyceryl glucoside that helps cells hold moisture, produced with SCGP biotechnology from the Qingdao Institute of Bioenergy, Chinese Academy of Sciences." },
    { q: "Who should not use it?", a: "Do not use during pregnancy or breastfeeding, with a pacemaker, with cancer, or on the neck with thyroid conditions. If you have a chronic condition, ask your doctor first." },
    { q: "How do I order?", a: "Send a request below. I will reply, help you choose and arrange delivery." },
  ],
};

export const partner = {
  title: "Grow with *Yishu*",
  lead: "Share a product you use and build a team that does the same. Earn on your own sales and on your team's growth.",
  incomeTypes: [
    { icon: "user", title: "Direct income", text: "Earn from selling sets and offering sessions to your own clients." },
    { icon: "network", title: "Team income", text: "Earn a share of turnover from partners you bring in and support." },
  ],
  maths: {
    eyebrow: "From your first set",
    masksPerSet: 40, keepForSelf: 10, pricePerSession: 0,       // TODO owner: local session price
    explanation: "Offer sessions from a single set and the set can pay for itself several times over.",
    rows: [
      { k: "First session", v: "TODO" }, { k: "Repeat session", v: "TODO" },
      { k: "Earned per mask", v: "TODO" }, { k: "Typical retail price", v: "TODO" },
    ],
  },
  disclaimer: "Figures are illustrations, not promises. Results depend on your own effort and local market.",
  levels: [
    { code: "Y0", threshold: "up to $1,500", pct: 10, bar: 30 },
    { code: "Y1", threshold: "from $1,500", pct: 15, bar: 44 },
    { code: "Y2", threshold: "from $3,000", pct: 20, bar: 59 },
    { code: "Y3", threshold: "from $8,000", pct: 25, bar: 74 },
    { code: "Y4", threshold: "from $48,000", pct: 28, bar: 82 },
    { code: "Y5", threshold: "from $128,000", pct: 31, bar: 91 },
    { code: "Y6", threshold: "from $450,000", pct: 34, bar: 100 },
  ],
  levelsNote: "Thresholds are group turnover in US dollars.",
  bonuses: [
    { value: "10%", label: "Referral bonus" }, { value: "5-24%", label: "Differential bonus" },
    { value: "10-40%", label: "Same-level bonus" }, { value: "10-20%", label: "Leadership bonus" },
    { value: "1-5%", label: "Shareholder bonus" }, { value: "3-6%", label: "Team dividend" },
    { value: "2%", label: "Global dividend" }, { value: "2%", label: "Shareholder dividend" },
  ],
  steps: [
    { title: "Reach out", text: "Send a request with a line about yourself." },
    { title: "Talk it through", text: "A short call on the product, terms and plan." },
    { title: "Begin", text: "Receive your first set, training material and support." },
  ],
  cta: { label: "Ask about partnership", href: "#contact?interest=partner" },
};

export const contact = {
  title: "Send a request",
  lead: "Leave your details and I will get back to you within one working day.",
  interests: [
    { id: "mask", label: "Smart mask" }, { id: "bundle", label: "A bundle" },
    { id: "partner", label: "Partnership" }, { id: "consultation", label: "Consultation" },
  ],
  labels: { name: "Your name", phone: "Phone", email: "Email (optional)", interest: "I'm interested in", message: "Message (optional)", submit: "Send request" },
  consent: "By sending, you agree that we may contact you about your request.",
  success: { title: "Thank you", text: "Your request is in. Expect a reply soon." },
};

export const footer = {
  tagline: "Beauty technology, sold and supported locally.",
  productInfo: [
    { k: "Certificate holder", v: "TODO from packaging" },
    { k: "Manufacturer", v: "TODO from packaging" },
    { k: "Registration", v: "TODO" },
    { k: "Reseller licence", v: "TODO" },
  ],
  legal: "Yishu and 宜树 are trademarks of their respective owner. Independent authorized reseller.",
};
```

Notes for the builder:
- `#contact?interest=x` is not a valid hash for the browser; intercept clicks with a small helper that
  sets the select value then scrolls to `#contact`.
- Hotspot `x/y` must be re-tuned when the owner's `product-mask.webp` arrives.
- `bar` widths are visual, not proportional to thresholds (the gaps are exponential).

---

## 7. Accessibility and performance checklist

- Contrast: cream/70 on forest-deep ≈ 10:1; ink/65 on cream-soft ≈ 7:1; `gold-text` for any small gold
  on light (plain `gold` on cream fails at 2.2:1, use it only for large numerals ≥ 24px on dark).
- Touch targets ≥ 44px (hotspots, chips, burger, FAQ rows).
- Keyboard: every hover reveal (ingredients, hotspots) also opens on focus; visible gold-bright focus ring.
- One `h1` (hero). Sections use `aria-labelledby` on their H2.
- LCP = hero image: `priority`, `sizes="100vw"`, ≤ 180 KB. Everything else `loading="lazy"`.
- Fonts via `next/font` (`display: swap`, subset latin). Particles (if enabled) load after `requestIdleCallback`.
- Backdrop-filter is expensive: limit to header, chips, ingredient overlays, lightbox. No blur on large scrolling areas.
- `prefers-reduced-motion` disables reveal, shimmer, glint, ping, parallax, count-up, bar animation.

## 8. Build order

1. Tokens + fonts + `Button`, `Reveal`, `GoldRule`, `Placeholder`, `content.ts`.
2. Header/MobileMenu, Hero, Footer (page frame).
3. Light sections (Product, Ingredients, How-to, Compare, Catalog, Certificates + Lightbox, FAQ, Contact).
4. Dark sections (Trust + map, Philosophy, People, Consultant, Partnership).
5. Lead API route, JSON-LD (Organization, Product, FAQPage), OG image, a11y pass at 360 / 768 / 1280.
