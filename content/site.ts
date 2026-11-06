// Locale-independent settings: business details, contact, currency, image slots and numbers.
// Edit this file once; it applies to /en, /zh and /ms.
//
// Images below mirror the approved public assets on yishu.su. Any missing slot still falls back
// to a labelled placeholder so the layout cannot collapse during future asset updates.

export type ImgSlot = { src: string; brief: string };

const img = (src: string, brief: string): ImgSlot => ({ src, brief });

export const site = {
  resellerName: "Yishu Malaysia",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  defaultLocale: "en" as const,
  /** The enquiry form switches on when the Google Sheet endpoint is configured (see scripts/google-sheet-lead.gs). */
  leadFormEnabled: Boolean(process.env.LEAD_SHEET_URL && process.env.LEAD_SHEET_SECRET),

  /** Currency for every RM figure on the site. Formatted as "RM 3,500". */
  currency: { code: "MYR", symbol: "RM", locale: "en-MY" },
  /** Partnership level thresholds are set in US dollars by the brand. */
  levelsCurrency: { code: "USD", symbol: "US$", locale: "en-US" },

  contact: {
    // Gary Yeow (consultant).
    phone: "+60 19-218 8262",
    phoneHref: "tel:+60192188262",
    email: "yeow_gary@yahoo.com",
    whatsapp: "https://wa.me/60192188262",
    socials: [
      { label: "Facebook", href: "https://www.facebook.com/share/1CWTH3ftDw/", icon: "facebook" },
      { label: "Instagram", href: "https://www.instagram.com/garyyeow", icon: "instagram" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/gary-yeow-b7ab8a35/", icon: "linkedin" },
    ] as { label: string; href: string; icon: "instagram" | "facebook" | "telegram" | "linkedin" }[],
  },
  privacyHref: "",

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

  /** Income illustration converted from the reference site's RUB example at 1 RUB = RM 0.050607. */
  maths: {
    masksPerSet: 40,
    keepForSelf: 10,
    pricePerSession: 177,
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
    hero: img("/images/hero-bg.webp", "Yishu hero artwork"),
    cosmos: img("/images/cosmos-bg.webp", "Gold light field"),
    aboutBg: img("/images/about-bg.webp", "Yishu company background"),
    zheng: [
      img("/images/zheng-1-zhengjian-gpt.webp", "Zheng Jian artwork"),
      img("/images/zheng-2-zhengnian-gpt.webp", "Zheng Nian artwork"),
      img("/images/zheng-3-zhengxing-gpt.webp", "Zheng Xing artwork"),
      img("/images/zheng-4-zhengshi-gpt.webp", "Zheng Shi artwork"),
      img("/images/zheng-5-zhengyuan-gpt.webp", "Zheng Yuan artwork"),
    ],
    productBg: img("/images/flagship-section-bg.webp", "Smart mask section background"),
    productMask: img("/images/flagship-mask-trim.webp", "Yishu smart mask"),
    ingredient: Object.fromEntries(
      ["aloe", "sophora", "purslane", "chamomile", "algae"].map((id) => [
        id,
        img(`/images/ingredient-${id === "algae" ? "macroalgae" : id}.webp`, "Ingredient photograph"),
      ]),
    ) as Record<string, ImgSlot>,
    ingredientIcon: Object.fromEntries(
      ["aloe", "sophora", "purslane", "chamomile", "algae"].map((id) => [
        id,
        img(`/images/ingredient-icon-${id === "algae" ? "macroalgae" : id}.webp`, "Ingredient cut-out"),
      ]),
    ) as Record<string, ImgSlot>,
    compareBg: img("/images/compare-light-bg.webp", "Comparison section background"),
    bundle: {
      manager: img("/images/prod-manager-cream.webp", "Manager package"),
      combo: img("/images/prod-combo-cream.webp", "Combination package"),
      magnetic: img("/images/prod-tailuo-cream.webp", "TIL Taileshu magnetic set"),
      director: img("/images/prod-director-cream.webp", "Director facial mask set"),
      board: img("/images/prod-board-cream.webp", "Board composition"),
    } as Record<string, ImgSlot>,
    results: [
      { src: "/results/result-1.webp", w: 792, h: 1056 },
      { src: "/results/result-2.webp", w: 732, h: 596 },
      { src: "/results/result-3.webp", w: 1080, h: 756 },
      { src: "/results/result-4.webp", w: 1280, h: 853 },
      { src: "/results/result-5.webp", w: 1280, h: 854 },
      { src: "/results/result-6.webp", w: 1256, h: 1256 },
      { src: "/results/result-7.webp", w: 871, h: 1280 },
    ],
    certificatesBg: img("/images/certificates-bg-2.webp", "Certificates section background"),
    certificates: [
      "cert-iso9001-zh",
      "cert-iso14001",
      "cert-iso45001",
      "cert-ce-rohs",
      "cert-fcc",
      "cert-fda",
      "cert-food-safety-zh",
      "cert-aaa-quality-service",
      "cert-aaa-integrity",
      "cert-aaa-service-credit",
      "cert-aaa-industry-integrity",
      "cert-brand-overseas",
      "cert-nigeria-embassy",
      "cert-1-scan",
    ].map((f) => img(`/certificates/${f}.webp`, "Published certificate scan")),
    people: [
      img("/images/person-feng-hq-trim.webp", "Feng Yunshan"),
      img("/images/person-lin-chest.webp", "Lin Junxian"),
      img("/images/person-luo.webp", "Luo Dan"),
      img("/images/person-ramaswamy.webp", "Prof. Hosahalli Ramaswamy"),
      img("/images/person-ma.webp", "Prof. Ma Zhigang"),
    ],
    consultantBg: img("/images/about-bg-gold-v2-mir.webp", "Dark gold consultant background"),
    consultant: img("/images/person-gary-yeow.webp", "Gary Yeow portrait, cut-out on transparent background, waist up"),
    logoCe: img("/images/logo-ce.svg", "Monochrome CE mark (SVG)"),
    logoFcc: img("/images/logo-fcc.svg", "Monochrome FCC mark (SVG)"),
    og: img("/images/og.jpg", "1200×630. Wordmark on forest green with product"),
  },
};
