// Simplified Chinese (zh). Copy mirrors the official https://yishu.su/zh/ (2026-10-27), with these local changes:
//   - consultant block is Gary Yeow (ours), not the reference site's consultant
//   - procedure/income figures are RM (converted), not RUB; level thresholds stay USD
//   - Russian phone/e-mail removed; form, error and UI strings are ours
// Must match the Content type exactly; `npm run build` fails if a key is missing.
import type { Content } from "./types";

export const zh: Content = {
  meta: {
    title: "Yishu 宜树 — 智能电渗透面膜",
    description: "Yishu 宜树——国际美丽与大健康科技品牌。EMS 微电流智能电渗透面膜，15 分钟提拉紧致护理。",
    langName: "中文",
    langShort: "中",
  },

  ui: {
    skipToContent: "跳到正文",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    language: "语言",
    mainNav: "主导航",
    authorizedTag: "",
    step: "步骤 {n}",
    view: "查看",
    download: "下载",
    previous: "上一张",
    next: "下一张",
    close: "关闭",
    counter: "{n} / {total}",
    imageComingSoon: "图片即将上线",
    countriesListLabel: "我们服务的国家和地区",
    showDetails: "查看详情",
  },

  nav: [
    { id: "about", label: "公司" },
    { id: "philosophy", label: "理念" },
    { id: "product", label: "智能面膜" },
    { id: "results", label: "用户见证" },
    { id: "catalog", label: "产品目录" },
    { id: "certificates", label: "证书" },
    { id: "expert", label: "专家" },
    { id: "partner", label: "合作" },
    { id: "contacts", label: "联系" },
  ],

  hero: {
    eyebrow: "",
    wordmark: "Yishu",
    lead: "国际化的美丽与大健康科技品牌——高端化妆品、生物技术与科研实力。",
    ctaPrimary: { label: "提交咨询", href: "#contacts" },
    ctaSecondary: { label: "了解产品", href: "#product" },
    imageAlt: "",
  },

  trust: {
    eyebrow: "",
    title: "以标准为依托的信赖",
    standards: [
      { name: "ISO 9001", note: "质量管理" },
      { name: "ISO 45001", note: "职业健康安全" },
      { name: "CE / RoHS", note: "欧盟合规", logo: "ce" },
      { name: "FCC Part 15", note: "设备测试", logo: "fcc" },
      { name: "Annoyin™", note: "SCGP 技术" },
    ],
    about: {
      title: "*Yishu* Global Holdings",
      paragraphs: [
        "Yishu 是科学美丽领域的领先国际科技公司。宜树环球控股旗下拥有 Yishu、Nutritree 与 TIL 品牌。公司的研发涵盖人工智能、科技护肤、生物抗衰、理疗与健康养护。",
        "公司已建立覆盖海外的运营与研发中心网络。总部与运营中心均设在香港。此外还设有新西兰实验室与三大生产基地。2024 年，公司获得美国 FDA 国际注册。",
      ],
    },
    stats: [
      { value: "2022", label: "品牌创立" },
      { value: "3", label: "控股旗下子品牌" },
      { value: "7", label: "核心专利" },
      { value: "FDA", label: "国际注册（2024）" },
    ],
    markets: {
      title: "23 个国家",
      lead: "宜树业务遍及亚洲、大洋洲和北美，构建全球运营与研发网络。",
      countries: [
        { code: "CN", name: "中国", hq: true },
        { code: "KR", name: "韩国" },
        { code: "JP", name: "日本" },
        { code: "TW", name: "台湾" },
        { code: "HK", name: "香港", hq: true },
        { code: "TH", name: "泰国" },
        { code: "MY", name: "马来西亚" },
        { code: "SG", name: "新加坡" },
        { code: "ID", name: "印度尼西亚" },
        { code: "AU", name: "澳大利亚" },
        { code: "US", name: "美国" },
        { code: "CA", name: "加拿大" },
      ],
    },
  },

  philosophy: {
    eyebrow: "",
    title: "树与五「正」",
    lead: "宜树的企业文化：在人生中种下三棵好树——财富之树、生命之树与能量之树——并践行五「正」，即正直之道。它们决定我们如何思考、工作与待人。",
    items: [
      { zh: "正见", pinyin: "Zhèngjiàn", text: "觉知；慎独守正，信任并热爱事业。", imageAlt: "" },
      { zh: "正念", pinyin: "Zhèngniàn", text: "自强与慈悲，求知若渴，胸怀宽广。", imageAlt: "" },
      { zh: "正行", pinyin: "Zhèngxíng", text: "利他、真诚、诚实与专注。", imageAlt: "" },
      { zh: "正事", pinyin: "Zhèngshì", text: "共情、奉献、互助与耐心。", imageAlt: "" },
      { zh: "正缘", pinyin: "Zhèngyuán", text: "惠及大众，终身成长。", imageAlt: "" },
    ],
  },

  product: {
    eyebrow: "",
    title: "*Yishu* 智能面膜",
    lead: "轻盈的电渗透美容面膜：搭载智能芯片与 EMS 微电流的主机、印有银离子墨水的纳米布，以及精华，渗透至肌肤基底层。一次 15 分钟，即可提拉、紧致与修护。",
    imageAlt: "Yishu 智能面膜与主机",
    hotspots: [
      { id: "tens", label: "TENS", text: "低频经皮刺激通过 ATP 激活细胞能量，模拟按摩并促进胶原生成——带来提拉与紧致效果。" },
      { id: "ems", label: "EMS", text: "搭载智能芯片与 EMS 微电流的主机，配合印有银离子墨水的纳米布。" },
      { id: "tdds", label: "TDDS", text: "微电流脉冲在角质层形成临时通道并扩张毛孔——以非注射方式将成分送入肌肤深层。" },
      { id: "annoyin", label: "Annoyin™", text: "Annoyin™ 是源自海洋的甘油葡糖苷，以世界级 SCGP 生物技术制成，由中国科学院青岛生物能源与过程研究所研发。" },
      { id: "patents", label: "7 项专利", text: "产品依托七项核心专利；研发由中国科学院与品牌科技委员会支持。" },
    ],
    specs: [
      { k: "形态", v: "面膜主机 + 精华" },
      { k: "精华", v: "30 毫升，保湿" },
      { k: "单次", v: "15 分钟，便携" },
      { k: "套装含", v: "40 片面膜 + 2 个蓝牙耳机" },
    ],
    cta: { label: "咨询智能面膜", href: "#contacts?interest=mask" },
  },

  ingredients: {
    eyebrow: "",
    title: "核心成分",
    lead: "配方融合专利明星成分与天然植物萃取。",
    items: [
      { id: "aloe", latin: "Aloe vera extract from Curacao", name: "库拉索芦荟萃取", text: "舒缓并修护肌肤。" },
      { id: "sophora", latin: "Matrine root extract", name: "苦参根萃取", text: "抗炎、舒缓、保湿与滋养。" },
      { id: "purslane", latin: "Purslane extract", name: "马齿苋萃取", text: "抗氧化，改善肤色，平衡水油。" },
      { id: "chamomile", latin: "Golden yellow chamomile extract", name: "金黄洋甘菊萃取", text: "抗炎舒缓，助眠。" },
      { id: "algae", latin: "Macroalgae extract", name: "巨藻萃取", text: "滋养肌肤，强效补水。" },
    ],
  },

  howTo: {
    eyebrow: "",
    title: "如何使用面膜",
    lead: "四个简单步骤 —— 从洁肤准备到居家 15 分钟护理。",
    steps: [
      { icon: "droplets", title: "清洁肌肤", text: "体验前彻底清洁面部肌肤。" },
      { icon: "pipette", title: "涂抹精华", text: "涂开精华，并将纳米布面膜与主机准备好。" },
      { icon: "bluetooth", title: "开始体验", text: "戴上面膜，将蓝牙耳机与应用同步，开始 15 分钟体验。" },
      { icon: "sparkles", title: "结束", text: "取下面膜——无需额外涂抹产品。来了做完即走。" },
    ],
  },

  compare: {
    eyebrow: "",
    title: "智能面膜与其他护理方式",
    note: "对比为概括性描述，说明护理方式与肤感。",
    columns: ["Yishu 智能面膜", "贴片面膜", "普通面霜", "美容院护理"],
    rows: [
      { k: "单次效果", v: ["全方位", "表层", "表层", "明显"] },
      { k: "提拉与紧致", v: ["EMS + TENS", "无", "无", "视情况"] },
      { k: "成分递送", v: ["深层（TDDS）", "表层", "表层", "视情况"] },
      { k: "所需时间", v: ["15 分钟", "15–20 分钟", "1–2 分钟", "60+ 分钟"] },
      { k: "活性成分", v: ["Annoyin™、依克多因、萃取物", "视情况", "视情况", "视情况"] },
      { k: "App 智能控制", v: ["是", "否", "否", "否"] },
    ],
  },

  results: {
    eyebrow: "",
    title: "真实用户效果",
    lead: "宜树 AI 面膜用户分享的使用前后对比照片。",
    disclaimer: "照片由用户提供，效果因人而异。宜树 AI 面膜为美容护肤产品，并非医疗治疗。",
    items: [
      { caption: "仅使用一次宜树 AI 面膜" },
      { caption: "使用前后对比" },
      { caption: "使用前、60 天后、180 天后" },
      { caption: "使用前后对比" },
      { caption: "坚持使用三贴" },
      { caption: "6 月 18 日使用前，6 月 20 日使用后" },
      { caption: "使用前后对比" },
    ],
  },

  catalog: {
    eyebrow: "",
    title: "全部产品",
    lead: "Yishu 全系列——精华面膜套装、仪器与 Tailuo 身体修护。",
    askLabel: "咨询此套装",
    items: [
      { id: "manager", name: "Manager Package", text: "居家护理入门套装——精华面膜与仪器。", contents: ["8 盒精华面膜", "2 台仪器"] },
      { id: "combo", name: "Combination Package", text: "面部护理与身体修护，一套搞定。", contents: ["2 套 Taile", "10 片磁疗贴", "10 盒精华面膜", "3 台仪器"] },
      { id: "magnetic", name: "TIL Taileshu Magnetic Set", text: "Tailuo 理疗：能量盒与身体磁疗贴。", contents: ["Taileshu 套装 ×1", "8 包舒采贴"] },
      { id: "director", name: "Director's Facial Mask Set", text: "进阶配置，适合完整护理疗程。", contents: ["13 盒精华面膜", "4 台仪器"] },
      { id: "board", name: "Board Composition", text: "至臻配置：面膜、磁疗贴与仪器。", contents: ["Taile 套装 ×1", "6 盒磁疗贴", "7 盒精华面膜", "2 套设备"] },
    ],
  },

  certificates: {
    eyebrow: "",
    title: "证书与标准",
    lead: "确认品质标准与安全的真实文件。",
    items: [
      { name: "ISO 9001:2015", scope: "质量管理体系 · 化妆品（面膜）销售" },
      { name: "ISO 14001:2015", scope: "环境管理体系 · 化妆品（面膜）销售" },
      { name: "ISO 45001:2018", scope: "职业健康安全管理体系 · 化妆品（面膜）销售" },
      { name: "CE / RoHS", scope: "指令 2011/65/EU 及 (EU) 2015/863 · 智能面罩" },
      { name: "FCC Part 15", scope: "Class B · AI 透皮能量仪（美国）" },
      { name: "FDA 注册", scope: "食品设施注册（美国）· 有效期至 2026" },
      { name: "食品安全示范企业", scope: "中国餐饮行业协会（2024）" },
      { name: "AAA级 质量、服务诚信单位", scope: "GB/T 23794-2023 信用评价（2024–2027）" },
      { name: "AAA级 诚信经营示范单位", scope: "GB/T 23794-2023 信用评价（2024–2027）" },
      { name: "AAA级 重服务守信用单位", scope: "GB/T 23794-2023 信用评价（2024–2027）" },
      { name: "生物科技行业 AAA级 诚信单位", scope: "GB/T 23794-2023 信用评价（2024–2027）" },
      { name: "品牌出海指定推荐产品", scope: "中国品牌文化国际出海盛典（2025）" },
      { name: "尼日利亚驻华大使馆 荣誉证书", scope: "大使馆指定用品（2025）" },
      { name: "产品说明", scope: "精华面膜成分与用途" },
    ],
  },

  people: {
    eyebrow: "",
    title: "品牌的面孔与科研",
    lead: "品牌由知名代言人与独立科技委员会支持。",
    items: [
      { name: "冯云山", role: "Yishu 品牌创始人", bio: "西班牙瓦伦西亚理工大学硕士，担任 Shanghai An Yishu Biotechnology 与 Zhongniu (Shanghai) Information Technology 董事长。十余年深耕企业运营管理与创新商业模式，主导公司顶层架构与资本发展。" },
      { name: "林俊贤", role: "品牌合伙人与股东 · 媒体代表", bio: "知名香港演员，曾主演《唐太宗李世民》《上海大风暴》等多部影视作品。Yishu 品牌的合伙人、股东与公众形象代表。" },
      { name: "罗丹", role: "品牌代言人", bio: "蹦床世界冠军，Yishu 品牌官方代言人。" },
      { name: "Hosahalli Ramaswamy 教授", role: "首席名誉科学家", bio: "加拿大皇家学会院士，麦吉尔大学食品营养学教授。曾获 ASHRAE 最佳论文奖、食品科学学会 W.J. Eva 奖、加拿大生物工程学会 John Clark 奖及 ICEF-12 终身成就奖。" },
      { name: "马志刚 教授", role: "科技委员会主任", bio: "首席科学家，生物细胞与电子物理学教授，被誉为“人体细胞修复师”。曾受中国相关部门委派进行海外科研访问与研究。" },
    ],
  },

  // Ours (Gary Yeow), not from the reference site.
  consultant: {
    eyebrow: "您的顾问",
    name: "Gary Yeow",
    role: "从企业高管到生活方式创业者",
    paragraphs: [
      "多年来，我担任国家总监，带领亚洲各地的团队，事业有成。但无休止的出差和每周80小时的工作让我付出了沉重的代价——错过了孩子成长的重要时刻、生日，以及珍贵的家庭时光。",
      "如今，我与家人一起环游世界，同时经营着一份蓬勃发展的国际事业。我建立了一套行之有效的系统，将健康、财富与生活自由结合在一起——我在这里，就是为了告诉您如何做到。",
    ],
    cta: { label: "获取咨询", href: "#contacts?interest=consultation" },
    imageAlt: "Gary Yeow",
    whatsappLabel: "WhatsApp",
    callLabel: "致电",
  },

  faq: {
    eyebrow: "",
    title: "常见问题",
    items: [
      { q: "单次体验多长时间？", a: "15 分钟。面膜便携——来了做完即走，无需后续涂抹产品。" },
      { q: "多久能看到效果？", a: "首次体验后即可见效：补水、紧致、提亮与提拉。如需持久效果，建议进行 14 次起的疗程。" },
      { q: "套装包含什么？", a: "40 片面膜（每片可用于 2 次体验）、2 个与应用同步的蓝牙耳机，以及 30 毫升精华。" },
      { q: "什么是 Annoyin™ / SCGP？", a: "它是源自海洋的甘油葡糖苷，可保护细胞并锁住水分。以中国科学院青岛生物能源研究所研发的 SCGP 生物技术制成。" },
      { q: "有哪些禁忌？", a: "有。肿瘤疾病、孕期与哺乳期、装有心脏起搏器者不可使用；颈部有甲状腺肿或甲状腺疾病时不可用于颈部。如有慢性疾病，请咨询医生。" },
      { q: "如何下单？", a: "通过表单提交咨询——我们会与你联系，帮助选择产品并下单。" },
    ],
  },

  partner: {
    eyebrow: "",
    title: "*Yishu* 营销计划",
    lead: "Yishu 不仅是护肤，更是真实的收入工具。技术驱动的商业模式：你既能通过个人销售获利，也能通过发展自己的团队获利。计划设有 10 个成长等级与 8 种奖金。",
    incomeTypes: [
      { icon: "user", title: "直接收入", text: "来自个人面膜销售与提供护理的收入。你销售自己也在使用的产品——当人们看到真实效果时，更容易下决心购买。" },
      { icon: "network", title: "团队收入", text: "来自团队业绩的被动收入。你引入伙伴、帮助他们成长，并从其销售中获得分成。结构可扩展，成果不清零。" },
    ],
    maths: {
      eyebrow: "首套即可获利",
      explanation: "仅凭第一套产品，通过为客户提供护理即可获得可观收入。",
      formula: "（{masks} 片面膜 − 自留 {keep} 片）× 每次 {price}",
      pricePending: "请设定您的护理价格",
      // RM conversions of the reference RUB figures (see content/site.ts).
      rows: [
        { k: "首次护理", v: "RM 127" },
        { k: "复购护理", v: "RM 51–76" },
        { k: "每片面膜收入", v: "RM 177–202" },
        { k: "市场价格", v: "RM 228" },
      ],
    },
    disclaimer: "以上数字仅为示例，并非承诺。实际收入取决于您个人的努力和当地市场。",
    levelsTitle: "收入等级",
    levelUpTo: "至 {amount}",
    levelFrom: "{amount} 起",
    levelsNote: "等级门槛以美元计算（按团队业绩），护理项目价格以马来西亚令吉计算。",
    bonusesTitle: "8 种奖金",
    bonuses: [
      { value: "10%", label: "推荐奖金" },
      { value: "5-24%", label: "级差奖金" },
      { value: "10-40%", label: "同级奖金" },
      { value: "10-20%", label: "领导奖金" },
      { value: "1-5%", label: "股东奖金" },
      { value: "3-6%", label: "团队分红" },
      { value: "2%", label: "全球分红" },
      { value: "2%", label: "股东分红" },
    ],
    stepsTitle: "如何开始",
    steps: [
      { title: "提交", text: "提交咨询，并简要介绍你自己。" },
      { title: "沟通", text: "我们将探讨产品、条款与营销计划。" },
      { title: "启动", text: "获取首套产品、资料与支持。" },
    ],
    cta: { label: "了解合作条款", href: "#contacts?interest=partner" },
  },

  contact: {
    eyebrow: "",
    title: "提交咨询",
    lead: "填写表单——我们会与你联系、解答疑问并协助选品。",
    infoLabel: "联系方式",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    whatsappLabel: "WhatsApp",
    followLabel: "关注",
    unavailable: "马来西亚联系方式将在上线前添加。",
    interests: [
      { id: "mask", label: "智能面膜" },
      { id: "bundle", label: "其他产品" },
      { id: "partner", label: "合作" },
      { id: "consultation", label: "咨询" },
    ],
    labels: {
      name: "你的姓名",
      phone: "电话",
      email: "电子邮箱（选填）",
      interest: "你感兴趣的内容",
      message: "留言（选填）",
      submit: "提交咨询",
      sending: "正在发送…",
      unavailable: "线上咨询尚未连接。",
    },
    errors: {
      name: "请输入你的姓名。",
      phone: "请输入我们可以联系到你的电话号码。",
      email: "电子邮箱格式似乎不正确。",
      send: "抱歉，提交未成功，请稍后再试。",
    },
    consent: "点击按钮即表示你同意处理个人信息。",
    success: { title: "谢谢", text: "你的咨询已收到，我们会尽快回复。", again: "再次提交" },
  },

  footer: {
    tagline: "美丽与大健康科技品牌。",
    resellerStatement: "马来西亚独立的宜树授权经销商。",
    sectionsLabel: "栏目",
    productInfoLabel: "产品信息",
    productInfo: [
      { k: "证书持有方", v: "Shanghai Anyishu Biotechnology Co., Ltd." },
      { k: "生产商", v: "Shanghai Huaya Cosmetics Co., Ltd." },
      { k: "化妆品注册", v: "上海，G 类 · 2024015253" },
      { k: "执行标准", v: "QB/T 2872" },
    ],
    legal: "Yishu 与 宜树 是其各自所有者的商标。独立授权经销商。",
    privacy: "隐私政策",
  },
};
