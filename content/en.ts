// English copy (default locale). Placeholder copy from DESIGN.md: the owner will replace it.
// Business details, contact, prices and images live in content/site.ts.
import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Yishu smart mask | Authorized reseller in Malaysia",
    description:
      "Authorized Yishu reseller in Malaysia. The Yishu smart mask, serum and bundles, with one-to-one support from your consultant.",
    langName: "English",
    langShort: "EN",
  },

  ui: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    mainNav: "Main",
    authorizedTag: "Authorized reseller",
    step: "Step {n}",
    view: "View",
    download: "Download",
    previous: "Previous",
    next: "Next",
    close: "Close",
    counter: "{n} / {total}",
    imageComingSoon: "Image coming soon",
    countriesListLabel: "Countries we serve",
    showDetails: "Show details",
  },

  nav: [
    { id: "trust", label: "Standards" },
    { id: "philosophy", label: "Philosophy" },
    { id: "product", label: "Smart mask" },
    { id: "catalog", label: "Catalog" },
    { id: "certificates", label: "Certificates" },
    { id: "consultant", label: "Consultant" },
    { id: "partner", label: "Partnership" },
    { id: "contact", label: "Contact" },
  ],

  hero: {
    eyebrow: "Authorized reseller",
    wordmark: "Yishu",
    lead: "Skin science you can feel in fifteen minutes. A smart mask, a clean serum and a person you can call.",
    ctaPrimary: { label: "Send a request", href: "#contact" },
    ctaSecondary: { label: "See the smart mask", href: "#product" },
    imageAlt: "",
  },

  trust: {
    eyebrow: "Standards",
    title: "Built to recognised standards",
    standards: [
      { name: "ISO 9001", note: "Quality systems" },
      { name: "ISO 45001", note: "Workplace safety" },
      { name: "CE / RoHS", note: "European conformity", logo: "ce" },
      { name: "FCC Part 15", note: "US device testing", logo: "fcc" },
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
      countries: [
        { code: "CN", name: "China" },
        { code: "KR", name: "South Korea" },
        { code: "JP", name: "Japan" },
        { code: "TW", name: "Taiwan" },
        { code: "HK", name: "Hong Kong" },
        { code: "TH", name: "Thailand" },
        { code: "MY", name: "Malaysia" },
        { code: "SG", name: "Singapore" },
        { code: "ID", name: "Indonesia" },
        { code: "AU", name: "Australia" },
        { code: "US", name: "USA" },
        { code: "CA", name: "Canada" },
      ],
    },
  },

  philosophy: {
    eyebrow: "Philosophy",
    title: "One tree, five principles",
    lead: "The brand grows from a simple idea: tend to wealth, health and energy, and let five principles guide the work.",
    items: [
      { zh: "正见", pinyin: "Zheng Jian", text: "Clear sight. Honest with yourself, even when no one is watching.", imageAlt: "" },
      { zh: "正念", pinyin: "Zheng Nian", text: "Right intention. Keep learning and lead with kindness.", imageAlt: "" },
      { zh: "正行", pinyin: "Zheng Xing", text: "Right action. Be sincere, generous and focused.", imageAlt: "" },
      { zh: "正事", pinyin: "Zheng Shi", text: "Right work. Show up with patience and help the people beside you.", imageAlt: "" },
      { zh: "正缘", pinyin: "Zheng Yuan", text: "Right connection. Give back and keep growing for life.", imageAlt: "" },
    ],
  },

  product: {
    eyebrow: "Flagship",
    title: "*Yishu* smart mask",
    lead: "A featherlight mask with a smart control unit. Gentle micro-current and electroporation carry the serum deeper while the mask lifts and firms, all in one quarter-hour.",
    imageAlt: "Yishu smart mask and control unit",
    hotspots: [
      { id: "tens", label: "TENS", text: "Soft pulses that relax and wake up tired facial muscles." },
      { id: "ems", label: "EMS", text: "Micro-current that tones and lifts contours." },
      { id: "tdds", label: "TDDS", text: "Transdermal delivery that helps actives travel past the surface." },
      { id: "annoyin", label: "Annoyin™", text: "A marine-derived moisture shield made with SCGP biotech." },
      { id: "patents", label: "7 patents", text: "Seven patented technologies inside one device." },
    ],
    specs: [
      { k: "Format", v: "Smart mask + serum" },
      { k: "Serum", v: "30 ml, hydrating" },
      { k: "Session", v: "15 minutes, use anywhere" },
      { k: "In the box", v: "40 masks + 2 Bluetooth earpieces" },
    ],
    cta: { label: "Request the smart mask", href: "#contact?interest=mask" },
  },

  ingredients: {
    eyebrow: "Formula",
    title: "What's in the formula",
    lead: "Patented actives paired with five plant extracts chosen for calm, hydrated skin.",
    items: [
      { id: "aloe", latin: "Aloe barbadensis (Curaçao)", name: "Curaçao aloe vera", text: "Calms and helps skin recover." },
      { id: "sophora", latin: "Sophora flavescens root", name: "Sophora root", text: "Soothes redness and adds moisture." },
      { id: "purslane", latin: "Portulaca oleracea", name: "Purslane", text: "Antioxidant support for a more even tone." },
      { id: "chamomile", latin: "Chamomilla recutita", name: "Golden chamomile", text: "Gentle and calming, ideal before bed." },
      { id: "algae", latin: "Marine macroalgae", name: "Macroalgae", text: "Deep, lasting hydration and nourishment." },
    ],
  },

  howTo: {
    eyebrow: "How to use",
    title: "Four steps, fifteen minutes",
    lead: "No salon, no extra products afterwards.",
    steps: [
      { icon: "droplets", title: "Cleanse", text: "Start with clean, dry skin." },
      { icon: "pipette", title: "Apply serum", text: "Smooth the serum on and lay out the mask fabric." },
      { icon: "bluetooth", title: "Connect and start", text: "Put the mask on, pair the earpieces and begin in the app." },
      { icon: "sparkles", title: "Done", text: "Lift off the mask. Nothing else to apply." },
    ],
  },

  compare: {
    eyebrow: "Compare",
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
  },

  catalog: {
    eyebrow: "Catalog",
    title: "Sets and bundles",
    lead: "Pick a starter kit, add body care, or go all in.",
    askLabel: "Ask about this set",
    items: [
      { id: "manager", name: "Manager Package", text: "A home-care starter kit.", contents: ["8 boxes of essence masks", "2 devices"] },
      { id: "combo", name: "Combination Package", text: "Face and body care together.", contents: ["2 Taile sets", "10 magnetic patches", "10 boxes of essence masks", "3 devices"] },
      { id: "magnetic", name: "TIL Taileshu Magnetic Set", text: "Body recovery with an energy box and patches.", contents: ["1 Taileshu set", "8 packs of Shucai patches"] },
      { id: "director", name: "Director's Facial Mask Set", text: "A larger kit for a full course.", contents: ["13 boxes of essence masks", "4 devices"] },
      { id: "board", name: "Board Composition", text: "The complete line-up.", contents: ["1 Taile set", "6 boxes of magnetic patches", "7 boxes of essence masks", "2 equipment sets"] },
    ],
  },

  certificates: {
    eyebrow: "Documents",
    title: "Certificates",
    lead: "View or download the documents behind the product.",
    items: [
      { name: "ISO 9001:2015", scope: "Quality management" },
      { name: "ISO 45001:2018", scope: "Occupational health and safety" },
      { name: "CE / RoHS", scope: "Directive 2011/65/EU, device" },
      { name: "FCC Part 15", scope: "US device testing" },
      { name: "FDA registration", scope: "US facility registration" },
      { name: "Product safety award", scope: "China" },
      { name: "Product passport", scope: "Essence mask composition and use" },
    ],
  },

  people: {
    eyebrow: "People",
    title: "The people behind the brand",
    lead: "Founders, scientists and ambassadors who stand behind Yishu.",
    items: Array.from({ length: 5 }, () => ({
      name: "Ambassador name",
      role: "Role or title",
      bio: "Two or three sentences about this person and why they back the brand.",
    })),
  },

  consultant: {
    eyebrow: "Your consultant",
    name: "Consultant name",
    role: "Authorized Yishu reseller",
    paragraphs: [
      "I help you build a routine that fits your skin and your schedule.",
      "I use the mask myself, so I can tell you honestly what to expect.",
      "Book a one-to-one session in person or online.",
    ],
    cta: { label: "Book a consultation", href: "#contact?interest=consultation" },
    imageAlt: "Consultant portrait",
    whatsappLabel: "WhatsApp",
    callLabel: "Call",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions",
    items: [
      { q: "How long does a session take?", a: "Fifteen minutes. The mask is portable and needs no follow-up products." },
      { q: "When will I see a difference?", a: "Many people notice hydration and firmness after the first session. For lasting results plan a course of at least 14 sessions." },
      { q: "What comes in the set?", a: "40 masks (each lasts two sessions), two Bluetooth earpieces for the app, and 30 ml of serum." },
      { q: "What is Annoyin™?", a: "A marine-derived glyceryl glucoside that helps cells hold moisture, produced with SCGP biotechnology from the Qingdao Institute of Bioenergy, Chinese Academy of Sciences." },
      { q: "Who should not use it?", a: "Do not use during pregnancy or breastfeeding, with a pacemaker, with cancer, or on the neck with thyroid conditions. If you have a chronic condition, ask your doctor first." },
      { q: "How do I order?", a: "Send a request below. I will reply, help you choose and arrange delivery." },
    ],
  },

  partner: {
    eyebrow: "Partnership",
    title: "Grow with *Yishu*",
    lead: "Share a product you use and build a team that does the same. Earn on your own sales and on your team's growth.",
    incomeTypes: [
      { icon: "user", title: "Direct income", text: "Earn from selling sets and offering sessions to your own clients." },
      { icon: "network", title: "Team income", text: "Earn a share of turnover from partners you bring in and support." },
    ],
    maths: {
      eyebrow: "From your first set",
      explanation: "Offer sessions from a single set and the set can pay for itself several times over.",
      formula: "({masks} masks − {keep} kept for yourself) × {price} per session",
      pricePending: "Set your session price",
      rows: [
        { k: "First session", v: "TODO" },
        { k: "Repeat session", v: "TODO" },
        { k: "Earned per mask", v: "TODO" },
        { k: "Typical retail price", v: "TODO" },
      ],
    },
    disclaimer: "Figures are illustrations, not promises. Results depend on your own effort and local market.",
    levelsTitle: "Partner levels",
    levelUpTo: "up to {amount}",
    levelFrom: "from {amount}",
    levelsNote: "Thresholds are group turnover in US dollars.",
    bonusesTitle: "Bonuses",
    bonuses: [
      { value: "10%", label: "Referral bonus" },
      { value: "5-24%", label: "Differential bonus" },
      { value: "10-40%", label: "Same-level bonus" },
      { value: "10-20%", label: "Leadership bonus" },
      { value: "1-5%", label: "Shareholder bonus" },
      { value: "3-6%", label: "Team dividend" },
      { value: "2%", label: "Global dividend" },
      { value: "2%", label: "Shareholder dividend" },
    ],
    stepsTitle: "How to start",
    steps: [
      { title: "Reach out", text: "Send a request with a line about yourself." },
      { title: "Talk it through", text: "A short call on the product, terms and plan." },
      { title: "Begin", text: "Receive your first set, training material and support." },
    ],
    cta: { label: "Ask about partnership", href: "#contact?interest=partner" },
  },

  contact: {
    eyebrow: "Contact",
    title: "Send a request",
    lead: "Leave your details and I will get back to you within one working day.",
    infoLabel: "Contact information",
    phoneLabel: "Phone",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    followLabel: "Follow",
    interests: [
      { id: "mask", label: "Smart mask" },
      { id: "bundle", label: "A bundle" },
      { id: "partner", label: "Partnership" },
      { id: "consultation", label: "Consultation" },
    ],
    labels: {
      name: "Your name",
      phone: "Phone",
      email: "Email (optional)",
      interest: "I'm interested in",
      message: "Message (optional)",
      submit: "Send request",
      sending: "Sending…",
    },
    errors: {
      name: "Please enter your name.",
      phone: "Please enter a phone number we can reach you on.",
      email: "That email address doesn't look right.",
    },
    consent: "By sending, you agree that we may contact you about your request.",
    success: { title: "Thank you", text: "Your request is in. Expect a reply soon.", again: "Send another request" },
  },

  footer: {
    tagline: "Beauty technology, sold and supported locally.",
    resellerStatement: "Independent authorized Yishu reseller in Malaysia.",
    sectionsLabel: "Sections",
    productInfoLabel: "Product information",
    productInfo: [
      { k: "Certificate holder", v: "TODO from packaging" },
      { k: "Manufacturer", v: "TODO from packaging" },
      { k: "Registration", v: "TODO" },
      { k: "Reseller licence", v: "TODO" },
    ],
    legal: "Yishu and 宜树 are trademarks of their respective owner. Independent authorized reseller.",
    privacy: "Privacy",
  },
};
