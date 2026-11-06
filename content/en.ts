// English copy follows the approved yishu.su reference, localized only where noted.
// Business details, contact, prices and images live in content/site.ts.
import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Yishu 宜树 — smart electroporation face mask",
    description:
      "Yishu 宜树 — smart electroporation face mask from an international beauty and biotechnology brand. EMS micro-current lift and care in 15 minutes.",
    langName: "English",
    langShort: "EN",
  },

  ui: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    mainNav: "Main",
    authorizedTag: "",
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
    { id: "about", label: "Company" },
    { id: "philosophy", label: "Philosophy" },
    { id: "product", label: "Smart mask" },
    { id: "results", label: "Results" },
    { id: "catalog", label: "Catalog" },
    { id: "certificates", label: "Certificates" },
    { id: "expert", label: "Expert" },
    { id: "partner", label: "Partnership" },
    { id: "contacts", label: "Contacts" },
  ],

  hero: {
    eyebrow: "",
    wordmark: "Yishu",
    lead: "An international beauty and big-health technology brand — premium cosmetics, biotechnology and scientific expertise.",
    ctaPrimary: { label: "Leave a request", href: "#contacts" },
    ctaSecondary: { label: "Explore the products", href: "#product" },
    imageAlt: "",
  },

  trust: {
    eyebrow: "",
    title: "Trust backed by standards",
    standards: [
      { name: "ISO 9001", note: "Quality management" },
      { name: "ISO 45001", note: "Occupational safety" },
      { name: "CE / RoHS", note: "EU compliance", logo: "ce" },
      { name: "FCC Part 15", note: "Device testing", logo: "fcc" },
      { name: "Annoyin™", note: "SCGP technology" },
    ],
    about: {
      title: "*Yishu* Global Holdings",
      paragraphs: [
        "Yishu is a leading international technology company in science-based beauty. Yishu Global Holdings owns the Yishu, Nutritree and TIL brands. The company's R&D spans AI, technological skincare, biological anti-aging, physiotherapy and wellness.",
        "The company has built a global network of overseas operational and research centers. Its headquarters and operations hub are both located in Hong Kong. It also runs a laboratory in New Zealand and three production bases. In 2024 the company obtained US FDA international registration.",
      ],
    },
    stats: [
      { value: "2022", label: "Brand founded" },
      { value: "3", label: "Sub-brands of the holding" },
      { value: "7", label: "Key patents" },
      { value: "FDA", label: "International registration (2024)" },
    ],
    markets: {
      title: "23 countries",
      lead: "Yishu operates across Asia, Oceania and North America — a global network of operational and R&D centers.",
      countries: [
        { code: "CN", name: "China", hq: true },
        { code: "KR", name: "South Korea" },
        { code: "JP", name: "Japan" },
        { code: "TW", name: "Taiwan" },
        { code: "HK", name: "Hong Kong", hq: true },
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
    eyebrow: "",
    title: "The Tree and the Five “Zheng”",
    lead: "Yishu's corporate culture: plant three good trees in life — the Tree of Wealth, the Tree of Life and the Tree of Energy — and follow the five “Zheng”, the principles of righteousness. They shape how we think, work and treat people.",
    items: [
      { zh: "正见", pinyin: "Zheng Jian", text: "Awareness; integrity even in solitude, trust and love for one's work.", imageAlt: "" },
      { zh: "正念", pinyin: "Zheng Nian", text: "Self-improvement and compassion, a thirst for knowledge and breadth of spirit.", imageAlt: "" },
      { zh: "正行", pinyin: "Zheng Xing", text: "Altruism, sincerity, honesty and focus.", imageAlt: "" },
      { zh: "正事", pinyin: "Zheng Shi", text: "Empathy, dedication, mutual help and patience.", imageAlt: "" },
      { zh: "正缘", pinyin: "Zheng Yuan", text: "Helping the wider community and lifelong growth.", imageAlt: "" },
    ],
  },

  product: {
    eyebrow: "",
    title: "*Yishu* smart mask",
    lead: "A lightweight electroporation cosmeceutical mask: a main unit with an intelligent chip and EMS micro-current, nano-fabric with silver ionic ink, and serum penetrate toward the skin's basal layer. It lifts, firms and restores — in a single 15-minute session.",
    imageAlt: "Yishu smart mask and control unit",
    hotspots: [
      { id: "tens", label: "TENS", text: "Low-frequency transcutaneous stimulation activates cell energy via ATP, mimics massage and stimulates collagen — for a lifting and firming effect." },
      { id: "ems", label: "EMS", text: "A main unit with an intelligent chip and EMS micro-current together with nano-fabric printed with silver ionic ink." },
      { id: "tdds", label: "TDDS", text: "Micro-current pulses form temporary channels in the stratum corneum and widen pores — a non-injection delivery of components deep into the skin." },
      { id: "annoyin", label: "Annoyin™", text: "A marine-sourced glyceryl glucoside produced with world-class SCGP biotechnology." },
      { id: "patents", label: "7 patents", text: "Seven key patents backed by the Chinese Academy of Sciences and the brand's science and technology committee." },
    ],
    specs: [
      { k: "Format", v: "Mask device + serum" },
      { k: "Serum", v: "30 ml, hydrating" },
      { k: "Session", v: "15 minutes, portable" },
      { k: "In the set", v: "40 masks + 2 Bluetooth earpieces" },
    ],
    cta: { label: "Request the smart mask", href: "#contacts?interest=mask" },
  },

  ingredients: {
    eyebrow: "",
    title: "Key components",
    lead: "The formula combines patented star components with natural botanical extracts.",
    items: [
      { id: "aloe", latin: "Aloe vera extract from Curacao", name: "Aloe vera extract (Curaçao)", text: "Soothes and restores the skin." },
      { id: "sophora", latin: "Matrine root extract", name: "Sophora root extract", text: "Anti-inflammatory, soothing, hydrating and nourishing." },
      { id: "purslane", latin: "Purslane extract", name: "Purslane extract", text: "Antioxidant action, improves complexion, balances water and lipids." },
      { id: "chamomile", latin: "Golden yellow chamomile extract", name: "Golden chamomile extract", text: "Anti-inflammatory and soothing, promotes sleep." },
      { id: "algae", latin: "Macroalgae extract", name: "Macroalgae extract", text: "Nourishes the skin and provides intense hydration." },
    ],
  },

  howTo: {
    eyebrow: "",
    title: "How to use the mask",
    lead: "Four simple steps — from prepping the skin to a 15-minute session at home.",
    steps: [
      { icon: "droplets", title: "Cleanse your skin", text: "Thoroughly cleanse your facial skin before the session." },
      { icon: "pipette", title: "Apply the serum", text: "Spread the serum and prepare the nano-fabric mask with the device." },
      { icon: "bluetooth", title: "Start the session", text: "Put on the mask, sync the Bluetooth earpiece with the app and start the 15-minute session." },
      { icon: "sparkles", title: "Finish", text: "Remove the mask — no follow-up products needed. In and out." },
    ],
  },

  compare: {
    eyebrow: "",
    title: "The smart mask vs other care routines",
    note: "The comparison is general and describes the care approach and feel.",
    columns: ["Yishu smart mask", "Sheet mask", "Regular cream", "Salon care"],
    rows: [
      { k: "Effect per session", v: ["Comprehensive", "Surface-level", "Surface-level", "Pronounced"] },
      { k: "Lifting & firmness", v: ["EMS + TENS", "No", "No", "Varies"] },
      { k: "Component delivery", v: ["Deep (TDDS)", "Surface", "Surface", "Varies"] },
      { k: "Time spent", v: ["15 min", "15–20 min", "1–2 min", "60+ min"] },
      { k: "Active components", v: ["Annoyin™, ectoine, extracts", "Varies", "Varies", "Varies"] },
      { k: "App control", v: ["Yes", "No", "No", "No"] },
    ],
  },

  results: {
    eyebrow: "",
    title: "Real customer results",
    lead: "Before-and-after photos shared by Yishu AI mask users.",
    disclaimer: "Photos supplied by customers. Individual results may vary. The Yishu AI mask is a cosmetic product, not a medical treatment.",
    items: [
      { caption: "After a single Yishu AI mask session" },
      { caption: "Before and after" },
      { caption: "Before, 60 days and 180 days later" },
      { caption: "Before and after" },
      { caption: "After three masks" },
      { caption: "Before 18 June, after 20 June" },
      { caption: "Before and after" },
    ],
  },

  catalog: {
    eyebrow: "",
    title: "All Yishu products",
    lead: "The full Yishu range — essence-mask sets, devices and Tailuo body recovery.",
    askLabel: "Ask about this set",
    items: [
      { id: "manager", name: "Manager Package", text: "A starter set for at-home care — essence masks and devices.", contents: ["8 boxes of essence masks", "2 devices"] },
      { id: "combo", name: "Combination Package", text: "Facial care and body recovery in a single set.", contents: ["2 Taile sets", "10 magnetic patches", "10 boxes of essence masks", "3 devices"] },
      { id: "magnetic", name: "TIL Taileshu Magnetic Set", text: "Tailuo physiotherapy: an energy box and magnetic patches for the body.", contents: ["1 Taileshu set", "8 packs of Shucai patches"] },
      { id: "director", name: "Director's Facial Mask Set", text: "An extended kit for a full care course.", contents: ["13 boxes of essence masks", "4 devices"] },
      { id: "board", name: "Board Composition", text: "Maximum configuration: masks, patches and devices.", contents: ["1 Taile set", "6 boxes of magnetic patches", "7 boxes of essence masks", "2 equipment sets"] },
    ],
  },

  certificates: {
    eyebrow: "",
    title: "Certificates and standards",
    lead: "Authentic documents confirming quality standards and safety.",
    items: [
      { name: "ISO 9001:2015", scope: "Quality management system · cosmetics (face mask) sales" },
      { name: "ISO 14001:2015", scope: "Environmental management · cosmetics (face mask) sales" },
      { name: "ISO 45001:2018", scope: "Occupational health & safety · cosmetics (face mask) sales" },
      { name: "CE / RoHS", scope: "Directive 2011/65/EU & (EU) 2015/863 · smart mask" },
      { name: "FCC Part 15", scope: "Class B · AI transdermal energy meter (USA)" },
      { name: "FDA registration", scope: "Food facility registration (USA) · valid to 2026" },
      { name: "Food Safety Model Enterprise", scope: "China Cuisine Association (2024)" },
      { name: "AAA Quality & Service Integrity", scope: "GB/T 23794-2023 credit rating (2024–2027)" },
      { name: "AAA Integrity Model Enterprise", scope: "GB/T 23794-2023 credit rating (2024–2027)" },
      { name: "AAA Service & Credit Excellence", scope: "GB/T 23794-2023 credit rating (2024–2027)" },
      { name: "AAA Biotech Industry Integrity", scope: "GB/T 23794-2023 credit rating (2024–2027)" },
      { name: "Recommended Product for Overseas Expansion", scope: "China Brand Culture International Expansion Gala (2025)" },
      { name: "Nigerian Embassy Honor Certificate", scope: "Designated item for the embassy (2025)" },
      { name: "Product passport", scope: "Essence mask composition & purpose" },
    ],
  },

  people: {
    eyebrow: "",
    title: "The faces and science of the brand",
    lead: "The brand is backed by well-known ambassadors and an independent science & technology committee.",
    items: [
      { name: "Feng Yunshan", role: "Founder of Yishu", bio: "Holds a Master's degree from the Polytechnic University of Valencia (Spain) and chairs the boards of Shanghai An Yishu Biotechnology and Zhongniu (Shanghai) Information Technology. For over 10 years she has shaped operational management and innovative business models, overseeing the company's architecture and capital growth." },
      { name: "Lin Junxian", role: "Partner and shareholder · media representative", bio: "A renowned Hong Kong actor with lead roles in “Tang Taizong Li Shimin”, “The Big Storm in Shanghai”, “Double Castling” and more. Partner, shareholder and public face of the Yishu brand." },
      { name: "Luo Dan", role: "Brand ambassador", bio: "World trampoline champion and official ambassador of the Yishu brand." },
      { name: "Prof. Hosahalli Ramaswamy", role: "Chief honorary scientist", bio: "Fellow of the Royal Society of Canada and professor of food nutrition at McGill University. Recipient of the ASHRAE best-paper award, the W.J. Eva Award of the Institute of Food Science, the John Clark Award of the Canadian Society for Bioengineering and the ICEF-12 lifetime achievement award." },
      { name: "Prof. Ma Zhigang", role: "Director of the science & technology committee", bio: "Chief scientist and professor of bio-cellular and electronic physics, known as the “repairer of human cells”. Appointed by Chinese state bodies for overseas scientific visits and research." },
    ],
  },

  consultant: {
    eyebrow: "Your consultant",
    name: "Gary Yeow",
    role: "From Corporate Executive to Lifestyle Entrepreneur",
    paragraphs: [
      "For years, I thrived as a Country Director, leading teams across Asia. But the relentless travel and 80-hour weeks came at a devastating cost — missing my children's milestones, birthdays, and precious family moments.",
      "Today, I explore the world with my family, building a thriving international business. I've developed a proven system that combines health, wealth, and lifestyle freedom — and I'm here to show you how.",
    ],
    cta: { label: "Get a consultation", href: "#contacts?interest=consultation" },
    imageAlt: "Gary Yeow",
    whatsappLabel: "WhatsApp",
    callLabel: "Call",
  },

  faq: {
    eyebrow: "",
    title: "Frequently asked questions",
    items: [
      { q: "How long is one session?", a: "15 minutes. The mask is portable — in and out, with no follow-up products to apply." },
      { q: "When are results visible?", a: "Visible results appear after the very first session: hydration, firmness, toning and lifting. For a lasting result a course from 14 sessions is recommended." },
      { q: "What's in the set?", a: "40 masks (one mask is enough for 2 sessions), 2 Bluetooth earpieces to sync with the app, and 30 ml of serum." },
      { q: "What is Annoyin™ / SCGP?", a: "It is a marine-sourced glyceryl glucoside that protects cells and retains moisture. It is produced with SCGP biotechnology developed by the Qingdao Institute of Bioenergy of the Chinese Academy of Sciences." },
      { q: "Are there contraindications?", a: "Yes. The mask is not used with oncological conditions, during pregnancy and breastfeeding, with a pacemaker, or on the neck area with goiter or thyroid disorders. With chronic conditions, consult a doctor." },
      { q: "How do I place an order?", a: "Leave a request through the form — we'll get in touch, help you choose a product and place the order." },
    ],
  },

  partner: {
    eyebrow: "",
    title: "*Yishu* marketing plan",
    lead: "Yishu is not only skincare but a real income tool. A technology-driven business model: you earn both on personal sales and on growing your own team. The plan includes 10 growth levels and 8 types of bonuses.",
    incomeTypes: [
      { icon: "user", title: "Direct income", text: "Earnings from personal mask sales and performing procedures. You sell a product you use yourself — people decide more easily when they see a real result." },
      { icon: "network", title: "Structure income", text: "Passive income from your team's turnover. You bring in partners, help them grow — and earn a percentage of their sales. The structure scales, results don't expire." },
    ],
    maths: {
      eyebrow: "Earnings from the first set",
      explanation: "Already with the first set you can earn a significant amount by performing procedures for clients.",
      formula: "({masks} masks − {keep} kept for yourself) × {price} per session",
      pricePending: "Set your session price",
      rows: [
        { k: "1st procedure", v: "RM 127" },
        { k: "Repeat procedure", v: "RM 51–76" },
        { k: "Income per mask", v: "RM 177–202" },
        { k: "Market price", v: "RM 228" },
      ],
    },
    disclaimer: "Figures are illustrations, not promises. Results depend on your own effort and local market.",
    levelsTitle: "Income levels",
    levelUpTo: "up to {amount}",
    levelFrom: "from {amount}",
    levelsNote: "Level thresholds are in US dollars based on group turnover; procedure prices are shown in Malaysian ringgit.",
    bonusesTitle: "8 types of bonuses",
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
      { title: "Request", text: "Leave a request and tell us briefly about yourself." },
      { title: "Intro call", text: "We'll discuss the product, terms and the marketing plan." },
      { title: "Start", text: "Get your first set, materials and support." },
    ],
    cta: { label: "Learn the terms", href: "#contacts?interest=partner" },
  },

  contact: {
    eyebrow: "",
    title: "Leave a request",
    lead: "Fill in the form — we'll get in touch, answer your questions and help you choose a product.",
    infoLabel: "Contact information",
    phoneLabel: "Phone",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    followLabel: "Follow",
    unavailable: "Malaysian contact details will be added before launch.",
    interests: [
      { id: "mask", label: "Smart mask" },
      { id: "bundle", label: "Other products" },
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
      unavailable: "Online enquiries are not connected yet.",
    },
    errors: {
      name: "Please enter your name.",
      phone: "Please enter a phone number we can reach you on.",
      email: "That email address doesn't look right.",
      send: "Sorry, your request didn't go through. Please try again in a moment.",
    },
    consent: "By sending, you agree that we may contact you about your request.",
    success: { title: "Thank you", text: "Your request is in. Expect a reply soon.", again: "Send another request" },
  },

  footer: {
    tagline: "A beauty and biotechnology brand.",
    resellerStatement: "Independent authorized Yishu reseller in Malaysia.",
    sectionsLabel: "Sections",
    productInfoLabel: "Product information",
    productInfo: [
      { k: "Certificate holder", v: "Shanghai Anyishu Biotechnology Co., Ltd." },
      { k: "Manufacturer", v: "Shanghai Huaya Cosmetics Co., Ltd." },
      { k: "Cosmetic registration", v: "Shanghai, category G · 2024015253" },
      { k: "Standard", v: "QB/T 2872" },
    ],
    legal: "Yishu and 宜树 are trademarks of their respective owner. Independent authorized reseller.",
    privacy: "Privacy",
  },
};
