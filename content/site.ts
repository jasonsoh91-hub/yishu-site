// Locale-independent settings: business details, contact, currency, image slots and numbers.
// Edit this file once; it applies to /en, /zh and /ms.
//
// IMAGES: drop files into public/images/ using the exact paths below. Any slot whose file is
// missing renders a <Placeholder> box showing the filename and brief, so the layout never breaks.
// Restart `npm run dev` (or re-run `npm run build`) after adding files.

export type ImgSlot = { src: string; brief: string };

const img = (src: string, brief: string): ImgSlot => ({ src, brief });

export const site = {
  resellerName: "Your Business Name", // TODO owner
  siteUrl: "https://example.com", // TODO owner: used for canonical / OG URLs
  defaultLocale: "en" as const,

  /** Currency for every RM figure on the site. Formatted as "RM 3,500". */
  currency: { code: "MYR", symbol: "RM", locale: "en-MY" },
  /** Partnership level thresholds are set in US dollars by the brand. */
  levelsCurrency: { code: "USD", symbol: "US$", locale: "en-US" },

  contact: {
    phone: "+60 00-000 0000", // placeholder
    phoneHref: "tel:+60000000000", // placeholder
    email: "hello@example.com", // placeholder
    whatsapp: "https://wa.me/600000000000", // placeholder
    socials: [
      { label: "Instagram", href: "#", icon: "instagram" as const },
      { label: "Facebook", href: "#", icon: "facebook" as const },
      { label: "Telegram", href: "#", icon: "telegram" as const },
    ],
  },
  privacyHref: "#", // TODO owner: privacy policy URL

  /** Optional WebGL particle layer in the hero (not built yet; flag kept for later). */
  heroParticles: false,

  /** Hotspot positions on product-mask.webp. Re-tune when the real photo arrives. */
  hotspotPositions: {
    tens: { x: "50%", y: "22%" },
    ems: { x: "12%", y: "47%" },
    tdds: { x: "70%", y: "48%" },
    annoyin: { x: "35%", y: "64%" },
    patents: { x: "50%", y: "80%" },
  } as Record<string, { x: string; y: string }>,

  /** Income illustration: (masksPerSet - keepForSelf) × pricePerSession, in site.currency. */
  maths: {
    masksPerSet: 40,
    keepForSelf: 10,
    pricePerSession: 0, // TODO owner: your local session price in RM. 0 shows a "set your price" note.
  },

  /** Levels Y0–Y6. `min` in levelsCurrency; `upTo` renders "up to" instead of "from". `bar` is visual width %. */
  levels: [
    { code: "Y0", min: 1500, upTo: true, pct: 10, bar: 30 },
    { code: "Y1", min: 1500, upTo: false, pct: 15, bar: 44 },
    { code: "Y2", min: 3000, upTo: false, pct: 20, bar: 59 },
    { code: "Y3", min: 8000, upTo: false, pct: 25, bar: 74 },
    { code: "Y4", min: 48000, upTo: false, pct: 28, bar: 82 },
    { code: "Y5", min: 128000, upTo: false, pct: 31, bar: 91 },
    { code: "Y6", min: 450000, upTo: false, pct: 34, bar: 100 },
  ],

  images: {
    hero: img("/images/hero.webp", "16:9, 2400×1350. Product on a stone plinth, dark forest green, low warm light, centre dark"),
    cosmos: img("/images/cosmos.webp", "16:9. Soft starfield / gold dust on black"),
    zheng: [1, 2, 3, 4, 5].map((n) =>
      img(`/images/zheng-${n}.webp`, "1:1, transparent. Gold line-art illustration"),
    ),
    productBg: img("/images/product-bg.webp", "16:9. Very light cream texture (silk, paper)"),
    productMask: img("/images/product-mask.webp", "1142×1234. Mask + unit on light background, mask centred"),
    ingredient: Object.fromEntries(
      ["aloe", "sophora", "purslane", "chamomile", "algae"].map((id) => [
        id,
        img(`/images/ingredient-${id}.webp`, "1:1. Airy macro photo of the plant"),
      ]),
    ) as Record<string, ImgSlot>,
    ingredientIcon: Object.fromEntries(
      ["aloe", "sophora", "purslane", "chamomile", "algae"].map((id) => [
        id,
        img(`/images/ingredient-icon-${id}.webp`, "1:1, 320px, transparent cut-out"),
      ]),
    ) as Record<string, ImgSlot>,
    compareBg: img("/images/compare-bg.webp", "16:9. Pale cream / gold abstract"),
    bundle: Object.fromEntries(
      ["manager", "combo", "magnetic", "director", "board"].map((id) => [
        id,
        img(`/images/bundle-${id}.webp`, "4:3. Bundle laid flat on cream, top-down"),
      ]),
    ) as Record<string, ImgSlot>,
    certificatesBg: img("/images/certificates-bg.webp", "16:9. Pale paper texture"),
    certificates: [1, 2, 3, 4, 5, 6, 7].map((n) =>
      img(`/images/certificates/cert-${n}.webp`, "3:4, ~1240×1650. Scan you may publish; redact personal data"),
    ),
    people: [1, 2, 3, 4, 5].map((n) =>
      img(`/images/person-${n}.webp`, "3:4, transparent. Chest-up cut-out portrait"),
    ),
    consultantBg: img("/images/consultant-bg.webp", "16:9. Dark ink with gold bokeh"),
    consultant: img("/images/consultant.webp", "1536×2010, transparent. Your own waist-up cut-out"),
    logoCe: img("/images/logo-ce.svg", "Monochrome CE mark (SVG)"),
    logoFcc: img("/images/logo-fcc.svg", "Monochrome FCC mark (SVG)"),
    og: img("/images/og.jpg", "1200×630. Wordmark on forest green with product"),
  },
};
