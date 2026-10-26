// DRAFT translation — needs native review
// Bahasa Melayu (ms). Machine-assisted draft of the English placeholder copy in en.ts.
// Must match the Content type exactly; `npm run build` fails if a key is missing.
import type { Content } from "./types";

export const ms: Content = {
  meta: {
    title: "Topeng pintar Yishu | Penjual sah di Malaysia",
    description:
      "Penjual sah Yishu di Malaysia. Topeng pintar Yishu, serum dan set, dengan sokongan satu-ke-satu daripada perunding anda.",
    langName: "Bahasa Melayu",
    langShort: "BM",
  },

  ui: {
    skipToContent: "Langkau ke kandungan",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    language: "Bahasa",
    mainNav: "Utama",
    authorizedTag: "Penjual sah",
    step: "Langkah {n}",
    view: "Lihat",
    download: "Muat turun",
    previous: "Sebelumnya",
    next: "Seterusnya",
    close: "Tutup",
    counter: "{n} / {total}",
    imageComingSoon: "Imej akan datang",
    countriesListLabel: "Negara yang kami layani",
    showDetails: "Lihat butiran",
  },

  nav: [
    { id: "trust", label: "Piawaian" },
    { id: "philosophy", label: "Falsafah" },
    { id: "product", label: "Topeng pintar" },
    { id: "catalog", label: "Katalog" },
    { id: "certificates", label: "Sijil" },
    { id: "consultant", label: "Perunding" },
    { id: "partner", label: "Perkongsian" },
    { id: "contact", label: "Hubungi" },
  ],

  hero: {
    eyebrow: "Penjual sah",
    wordmark: "Yishu",
    lead: "Sains kulit yang boleh anda rasai dalam lima belas minit. Topeng pintar, serum yang bersih dan seseorang yang boleh anda hubungi.",
    ctaPrimary: { label: "Hantar permintaan", href: "#contact" },
    ctaSecondary: { label: "Lihat topeng pintar", href: "#product" },
    imageAlt: "",
  },

  trust: {
    eyebrow: "Piawaian",
    title: "Dibina mengikut piawaian yang diiktiraf",
    standards: [
      { name: "ISO 9001", note: "Sistem kualiti" },
      { name: "ISO 45001", note: "Keselamatan tempat kerja" },
      { name: "CE / RoHS", note: "Pematuhan Eropah", logo: "ce" },
      { name: "FCC Part 15", note: "Ujian peranti AS", logo: "fcc" },
      { name: "Annoyin™", note: "Bahan aktif bioteknologi SCGP" },
    ],
    stats: [
      { value: "7", label: "Teknologi berpaten" },
      { value: "12", label: "Negara dilayani" },
      { value: "15 min", label: "Setiap sesi" },
      { value: "FDA", label: "Pendaftaran AS" },
    ],
    markets: {
      title: "Hadir di 12 negara",
      lead: "Dari Asia Timur ke Amerika Utara, topeng dan formula yang sama sampai ke setiap pasaran kami.",
      countries: [
        { code: "CN", name: "China" },
        { code: "KR", name: "Korea Selatan" },
        { code: "JP", name: "Jepun" },
        { code: "TW", name: "Taiwan" },
        { code: "HK", name: "Hong Kong" },
        { code: "TH", name: "Thailand" },
        { code: "MY", name: "Malaysia" },
        { code: "SG", name: "Singapura" },
        { code: "ID", name: "Indonesia" },
        { code: "AU", name: "Australia" },
        { code: "US", name: "Amerika Syarikat" },
        { code: "CA", name: "Kanada" },
      ],
    },
  },

  philosophy: {
    eyebrow: "Falsafah",
    title: "Satu pokok, lima prinsip",
    lead: "Jenama ini berakar daripada idea yang mudah: jaga kekayaan, kesihatan dan tenaga, dan biarkan lima prinsip membimbing kerja.",
    items: [
      { zh: "正见", pinyin: "Zheng Jian", text: "Pandangan jelas. Jujur dengan diri sendiri, walaupun tiada siapa yang melihat.", imageAlt: "" },
      { zh: "正念", pinyin: "Zheng Nian", text: "Niat yang betul. Terus belajar dan memimpin dengan kebaikan.", imageAlt: "" },
      { zh: "正行", pinyin: "Zheng Xing", text: "Tindakan yang betul. Ikhlas, pemurah dan fokus.", imageAlt: "" },
      { zh: "正事", pinyin: "Zheng Shi", text: "Kerja yang betul. Hadir dengan sabar dan bantu orang di sekeliling anda.", imageAlt: "" },
      { zh: "正缘", pinyin: "Zheng Yuan", text: "Hubungan yang betul. Memberi kembali dan terus berkembang sepanjang hayat.", imageAlt: "" },
    ],
  },

  product: {
    eyebrow: "Produk utama",
    title: "Topeng pintar *Yishu*",
    lead: "Topeng yang sangat ringan dengan unit kawalan pintar. Arus mikro yang lembut dan elektroporasi membawa serum lebih dalam sambil topeng mengangkat dan menegangkan kulit, semuanya dalam suku jam.",
    imageAlt: "Topeng pintar Yishu dan unit kawalan",
    hotspots: [
      { id: "tens", label: "TENS", text: "Denyutan lembut yang melegakan dan menyegarkan otot muka yang letih." },
      { id: "ems", label: "EMS", text: "Arus mikro yang menegang dan mengangkat kontur wajah." },
      { id: "tdds", label: "TDDS", text: "Penghantaran transdermal yang membantu bahan aktif melepasi permukaan kulit." },
      { id: "annoyin", label: "Annoyin™", text: "Perisai kelembapan dari laut, dihasilkan dengan bioteknologi SCGP." },
      { id: "patents", label: "7 paten", text: "Tujuh teknologi berpaten dalam satu peranti." },
    ],
    specs: [
      { k: "Format", v: "Topeng pintar + serum" },
      { k: "Serum", v: "30 ml, melembapkan" },
      { k: "Sesi", v: "15 minit, di mana-mana sahaja" },
      { k: "Dalam kotak", v: "40 topeng + 2 fon telinga Bluetooth" },
    ],
    cta: { label: "Minta topeng pintar", href: "#contact?interest=mask" },
  },

  ingredients: {
    eyebrow: "Formula",
    title: "Apa yang ada dalam formula",
    lead: "Bahan aktif berpaten bersama lima ekstrak tumbuhan yang dipilih untuk kulit yang tenang dan lembap.",
    items: [
      { id: "aloe", latin: "Aloe barbadensis (Curaçao)", name: "Lidah buaya Curaçao", text: "Menenangkan dan membantu pemulihan kulit." },
      { id: "sophora", latin: "Sophora flavescens root", name: "Akar sophora", text: "Meredakan kemerahan dan menambah kelembapan." },
      { id: "purslane", latin: "Portulaca oleracea", name: "Gelang pasir", text: "Sokongan antioksidan untuk ton kulit lebih sekata." },
      { id: "chamomile", latin: "Chamomilla recutita", name: "Kamomil emas", text: "Lembut dan menenangkan, sesuai sebelum tidur." },
      { id: "algae", latin: "Marine macroalgae", name: "Makroalga", text: "Kelembapan dan nutrisi yang mendalam dan tahan lama." },
    ],
  },

  howTo: {
    eyebrow: "Cara guna",
    title: "Empat langkah, lima belas minit",
    lead: "Tanpa salun, tanpa produk tambahan selepas itu.",
    steps: [
      { icon: "droplets", title: "Bersihkan", text: "Mulakan dengan kulit yang bersih dan kering." },
      { icon: "pipette", title: "Sapu serum", text: "Ratakan serum dan bentangkan fabrik topeng." },
      { icon: "bluetooth", title: "Sambung dan mula", text: "Pakai topeng, pasangkan fon telinga dan mulakan dalam aplikasi." },
      { icon: "sparkles", title: "Selesai", text: "Tanggalkan topeng. Tiada apa-apa lagi untuk disapu." },
    ],
  },

  compare: {
    eyebrow: "Perbandingan",
    title: "Perbandingan topeng pintar",
    note: "Panduan umum tentang rutin dan rasa, bukan perbandingan klinikal.",
    columns: ["Topeng pintar Yishu", "Topeng helaian", "Krim harian", "Rawatan salun"],
    rows: [
      { k: "Kesan setiap sesi", v: ["Seluruh wajah, pelbagai tindakan", "Permukaan", "Permukaan", "Kuat"] },
      { k: "Angkat dan tegang", v: ["EMS + TENS", "Tiada", "Tiada", "Bergantung"] },
      { k: "Penghantaran bahan aktif", v: ["Dalam (TDDS)", "Permukaan", "Permukaan", "Bergantung"] },
      { k: "Masa", v: ["15 min", "15-20 min", "1-2 min", "60+ min"] },
      { k: "Bahan aktif utama", v: ["Annoyin™, ektoina, botani", "Berbeza", "Berbeza", "Berbeza"] },
      { k: "Kawalan aplikasi", v: ["Ya", "Tidak", "Tidak", "Tidak"] },
    ],
  },

  catalog: {
    eyebrow: "Katalog",
    title: "Set dan pakej",
    lead: "Pilih kit permulaan, tambah penjagaan badan, atau ambil semuanya.",
    askLabel: "Tanya tentang set ini",
    items: [
      { id: "manager", name: "Pakej Pengurus", text: "Kit permulaan penjagaan di rumah.", contents: ["8 kotak topeng esen", "2 peranti"] },
      { id: "combo", name: "Pakej Gabungan", text: "Penjagaan wajah dan badan bersama.", contents: ["2 set Taile", "10 tampalan magnetik", "10 kotak topeng esen", "3 peranti"] },
      { id: "magnetic", name: "Set Magnetik TIL Taileshu", text: "Pemulihan badan dengan kotak tenaga dan tampalan.", contents: ["1 set Taileshu", "8 pek tampalan Shucai"] },
      { id: "director", name: "Set Topeng Muka Pengarah", text: "Kit lebih besar untuk satu kursus penuh.", contents: ["13 kotak topeng esen", "4 peranti"] },
      { id: "board", name: "Komposisi Lembaga", text: "Barisan produk lengkap.", contents: ["1 set Taile", "6 kotak tampalan magnetik", "7 kotak topeng esen", "2 set peralatan"] },
    ],
  },

  certificates: {
    eyebrow: "Dokumen",
    title: "Sijil",
    lead: "Lihat atau muat turun dokumen di sebalik produk ini.",
    items: [
      { name: "ISO 9001:2015", scope: "Pengurusan kualiti" },
      { name: "ISO 45001:2018", scope: "Kesihatan dan keselamatan pekerjaan" },
      { name: "CE / RoHS", scope: "Arahan 2011/65/EU, peranti" },
      { name: "FCC Part 15", scope: "Ujian peranti AS" },
      { name: "Pendaftaran FDA", scope: "Pendaftaran kemudahan AS" },
      { name: "Anugerah keselamatan produk", scope: "China" },
      { name: "Pasport produk", scope: "Komposisi dan penggunaan topeng esen" },
    ],
  },

  people: {
    eyebrow: "Orang",
    title: "Orang di sebalik jenama",
    lead: "Pengasas, saintis dan duta yang menyokong Yishu.",
    items: Array.from({ length: 5 }, () => ({
      name: "Nama duta",
      role: "Peranan atau gelaran",
      bio: "Dua atau tiga ayat tentang orang ini dan sebab mereka menyokong jenama ini.",
    })),
  },

  consultant: {
    eyebrow: "Perunding anda",
    name: "Nama perunding",
    role: "Penjual sah Yishu",
    paragraphs: [
      "Saya membantu anda membina rutin yang sesuai dengan kulit dan jadual anda.",
      "Saya sendiri menggunakan topeng ini, jadi saya boleh beritahu dengan jujur apa yang boleh dijangka.",
      "Tempah sesi satu-ke-satu secara bersemuka atau dalam talian.",
    ],
    cta: { label: "Tempah konsultasi", href: "#contact?interest=consultation" },
    imageAlt: "Potret perunding",
    whatsappLabel: "WhatsApp",
    callLabel: "Telefon",
  },

  faq: {
    eyebrow: "Soalan lazim",
    title: "Soalan",
    items: [
      { q: "Berapa lama satu sesi?", a: "Lima belas minit. Topeng mudah dibawa dan tidak memerlukan produk susulan." },
      { q: "Bilakah saya akan nampak perbezaan?", a: "Ramai orang merasai kulit lebih lembap dan tegang selepas sesi pertama. Untuk hasil berpanjangan, rancang satu kursus sekurang-kurangnya 14 sesi." },
      { q: "Apa yang ada dalam set?", a: "40 topeng (setiap satu untuk dua sesi), dua fon telinga Bluetooth untuk aplikasi, dan 30 ml serum." },
      { q: "Apakah Annoyin™?", a: "Gliseril glukosida dari laut yang membantu sel mengekalkan kelembapan, dihasilkan dengan bioteknologi SCGP dari Qingdao Institute of Bioenergy, Akademi Sains China." },
      { q: "Siapa yang tidak patut menggunakannya?", a: "Jangan gunakan semasa hamil atau menyusu, jika memakai perentak jantung, menghidap kanser, atau pada leher jika ada masalah tiroid. Jika anda mempunyai penyakit kronik, tanya doktor anda dahulu." },
      { q: "Bagaimana saya boleh membuat pesanan?", a: "Hantar permintaan di bawah. Saya akan membalas, membantu anda memilih dan mengatur penghantaran." },
    ],
  },

  partner: {
    eyebrow: "Perkongsian",
    title: "Berkembang bersama *Yishu*",
    lead: "Kongsi produk yang anda gunakan dan bina pasukan yang melakukan perkara yang sama. Jana pendapatan daripada jualan sendiri dan pertumbuhan pasukan anda.",
    incomeTypes: [
      { icon: "user", title: "Pendapatan langsung", text: "Jana pendapatan dengan menjual set dan menawarkan sesi kepada pelanggan anda sendiri." },
      { icon: "network", title: "Pendapatan pasukan", text: "Dapatkan bahagian daripada jualan rakan kongsi yang anda bawa masuk dan sokong." },
    ],
    maths: {
      eyebrow: "Daripada set pertama anda",
      explanation: "Tawarkan sesi daripada satu set dan set itu boleh membayar dirinya sendiri beberapa kali ganda.",
      formula: "({masks} topeng − {keep} untuk diri sendiri) × {price} setiap sesi",
      pricePending: "Tetapkan harga sesi anda",
      rows: [
        { k: "Sesi pertama", v: "TODO" },
        { k: "Sesi ulangan", v: "TODO" },
        { k: "Pendapatan setiap topeng", v: "TODO" },
        { k: "Harga runcit biasa", v: "TODO" },
      ],
    },
    disclaimer: "Angka ini hanyalah ilustrasi, bukan janji. Hasil bergantung pada usaha anda sendiri dan pasaran tempatan.",
    levelsTitle: "Tahap rakan kongsi",
    levelUpTo: "sehingga {amount}",
    levelFrom: "dari {amount}",
    levelsNote: "Ambang ialah jualan kumpulan dalam dolar AS.",
    bonusesTitle: "Bonus",
    bonuses: [
      { value: "10%", label: "Bonus rujukan" },
      { value: "5-24%", label: "Bonus perbezaan" },
      { value: "10-40%", label: "Bonus tahap sama" },
      { value: "10-20%", label: "Bonus kepimpinan" },
      { value: "1-5%", label: "Bonus pemegang saham" },
      { value: "3-6%", label: "Dividen pasukan" },
      { value: "2%", label: "Dividen global" },
      { value: "2%", label: "Dividen pemegang saham" },
    ],
    stepsTitle: "Cara bermula",
    steps: [
      { title: "Hubungi kami", text: "Hantar permintaan dengan sedikit maklumat tentang diri anda." },
      { title: "Berbincang", text: "Panggilan ringkas tentang produk, terma dan pelan." },
      { title: "Mulakan", text: "Terima set pertama, bahan latihan dan sokongan anda." },
    ],
    cta: { label: "Tanya tentang perkongsian", href: "#contact?interest=partner" },
  },

  contact: {
    eyebrow: "Hubungi",
    title: "Hantar permintaan",
    lead: "Tinggalkan butiran anda dan saya akan menghubungi anda dalam satu hari bekerja.",
    infoLabel: "Maklumat hubungan",
    phoneLabel: "Telefon",
    emailLabel: "E-mel",
    whatsappLabel: "WhatsApp",
    followLabel: "Ikuti",
    interests: [
      { id: "mask", label: "Topeng pintar" },
      { id: "bundle", label: "Satu pakej" },
      { id: "partner", label: "Perkongsian" },
      { id: "consultation", label: "Konsultasi" },
    ],
    labels: {
      name: "Nama anda",
      phone: "Telefon",
      email: "E-mel (pilihan)",
      interest: "Saya berminat dengan",
      message: "Mesej (pilihan)",
      submit: "Hantar permintaan",
      sending: "Menghantar…",
    },
    errors: {
      name: "Sila masukkan nama anda.",
      phone: "Sila masukkan nombor telefon yang boleh dihubungi.",
      email: "Alamat e-mel itu nampaknya tidak betul.",
    },
    consent: "Dengan menghantar, anda bersetuju kami boleh menghubungi anda tentang permintaan anda.",
    success: { title: "Terima kasih", text: "Permintaan anda telah diterima. Kami akan membalas tidak lama lagi.", again: "Hantar permintaan lain" },
  },

  footer: {
    tagline: "Teknologi kecantikan, dijual dan disokong secara tempatan.",
    resellerStatement: "Penjual sah Yishu yang bebas di Malaysia.",
    sectionsLabel: "Bahagian",
    productInfoLabel: "Maklumat produk",
    productInfo: [
      { k: "Pemegang sijil", v: "TODO daripada pembungkusan" },
      { k: "Pengilang", v: "TODO daripada pembungkusan" },
      { k: "Pendaftaran", v: "TODO" },
      { k: "Lesen penjual", v: "TODO" },
    ],
    legal: "Yishu dan 宜树 ialah tanda dagangan pemilik masing-masing. Penjual sah yang bebas.",
    privacy: "Privasi",
  },
};
