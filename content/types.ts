// Shared schema for every locale file (en.ts, zh.ts, ms.ts).
// zh and ms are typed as `Content`, so a missing or misspelt key is a type error at build time.
//
// Text conventions:
//   *word*      renders as italic display type (used for the brand word "Yishu").
//   {name}      placeholders filled in by the component (see each field's comment).

export type Locale = "en" | "zh" | "ms";

export type Link = { label: string; href: string };
export type KV = { k: string; v: string };

export interface Content {
  meta: {
    /** <title> and og:title */
    title: string;
    description: string;
    /** Name of this language in its own script, shown in the language switcher. */
    langName: string;
    /** Short code shown in the switcher chip. */
    langShort: string;
  };

  /** Small interface strings used by components (buttons, aria labels, errors). */
  ui: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    mainNav: string;
    authorizedTag: string;
    /** "Step {n}" */
    step: string;
    view: string;
    download: string;
    previous: string;
    next: string;
    close: string;
    /** "{n} / {total}" */
    counter: string;
    imageComingSoon: string;
    countriesListLabel: string;
    showDetails: string;
  };

  nav: { id: string; label: string }[];

  hero: {
    eyebrow: string;
    /** Brand word, rendered as the big shimmering wordmark. */
    wordmark: string;
    lead: string;
    ctaPrimary: Link;
    ctaSecondary: Link;
    imageAlt: string;
  };

  trust: {
    eyebrow: string;
    title: string;
    standards: { name: string; note: string; logo?: "ce" | "fcc" }[];
    about: {
      title: string;
      paragraphs: string[];
    };
    stats: { value: string; label: string }[];
    markets: {
      title: string;
      lead: string;
      /** `code` must match a key in lib/world-map.ts PINS. `hq` = highlighted pin (arcs start from the first one). */
      countries: { code: string; name: string; hq?: boolean }[];
    };
  };

  philosophy: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { zh: string; pinyin: string; text: string; imageAlt: string }[];
  };

  product: {
    eyebrow: string;
    title: string;
    lead: string;
    imageAlt: string;
    /** `id` must match a key in site.hotspotPositions. */
    hotspots: { id: string; label: string; text: string }[];
    specs: KV[];
    cta: Link;
  };

  ingredients: {
    eyebrow: string;
    title: string;
    lead: string;
    /** `id` must match site.images.ingredient keys. */
    items: { id: string; latin: string; name: string; text: string }[];
  };

  howTo: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { icon: "droplets" | "pipette" | "bluetooth" | "sparkles"; title: string; text: string }[];
  };

  compare: {
    eyebrow: string;
    title: string;
    note: string;
    /** First column is always the Yishu product. */
    columns: string[];
    rows: { k: string; v: string[] }[];
  };

  /** Customer before/after photos. `items` pair by index with site.images.results. */
  results: {
    eyebrow: string;
    title: string;
    lead: string;
    disclaimer: string;
    items: { caption: string }[];
  };

  catalog: {
    eyebrow: string;
    title: string;
    lead: string;
    askLabel: string;
    /** `id` must match site.images.bundle keys. */
    items: { id: string; name: string; text: string; contents: string[] }[];
  };

  certificates: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Order matches site.images.certificates. */
    items: { name: string; scope: string }[];
  };

  people: {
    eyebrow: string;
    title: string;
    lead: string;
    /** Order matches site.images.people. */
    items: { name: string; role: string; bio: string }[];
  };

  consultant: {
    eyebrow: string;
    name: string;
    role: string;
    paragraphs: string[];
    cta: Link;
    imageAlt: string;
    whatsappLabel: string;
    callLabel: string;
  };

  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };

  partner: {
    eyebrow: string;
    title: string;
    lead: string;
    incomeTypes: { icon: "user" | "network"; title: string; text: string }[];
    maths: {
      eyebrow: string;
      explanation: string;
      /** "({masks} masks − {keep} kept for yourself) × {price} per session" */
      formula: string;
      /** Shown instead of the number while site.maths.pricePerSession is 0. */
      pricePending: string;
      rows: KV[];
    };
    disclaimer: string;
    levelsTitle: string;
    /** "up to {amount}" */
    levelUpTo: string;
    /** "from {amount}" */
    levelFrom: string;
    levelsNote: string;
    bonusesTitle: string;
    bonuses: { value: string; label: string }[];
    stepsTitle: string;
    steps: { title: string; text: string }[];
    cta: Link;
  };

  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    infoLabel: string;
    phoneLabel: string;
    emailLabel: string;
    whatsappLabel: string;
    followLabel: string;
    unavailable: string;
    interests: { id: string; label: string }[];
    labels: {
      name: string;
      phone: string;
      email: string;
      interest: string;
      message: string;
      submit: string;
      sending: string;
      unavailable: string;
    };
    /** `send` is shown when the request could not be delivered. */
    errors: { name: string; phone: string; email: string; send: string };
    consent: string;
    success: { title: string; text: string; again: string };
  };

  footer: {
    tagline: string;
    resellerStatement: string;
    sectionsLabel: string;
    productInfoLabel: string;
    productInfo: KV[];
    legal: string;
    privacy: string;
  };
}
