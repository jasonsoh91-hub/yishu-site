// DRAFT translation — needs native review
// Simplified Chinese (zh). Machine-assisted draft of the English placeholder copy in en.ts.
// Must match the Content type exactly; `npm run build` fails if a key is missing.
import type { Content } from "./types";

export const zh: Content = {
  meta: {
    title: "宜树 Yishu 智能面膜 | 马来西亚授权经销商",
    description: "马来西亚宜树（Yishu）授权经销商。提供宜树智能面膜、精华与套装，并由您的专属顾问一对一服务。",
    langName: "中文",
    langShort: "中",
  },

  ui: {
    skipToContent: "跳到正文",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    language: "语言",
    mainNav: "主导航",
    authorizedTag: "授权经销商",
    step: "第 {n} 步",
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
    { id: "trust", label: "标准" },
    { id: "philosophy", label: "理念" },
    { id: "product", label: "智能面膜" },
    { id: "catalog", label: "产品套装" },
    { id: "certificates", label: "证书" },
    { id: "consultant", label: "顾问" },
    { id: "partner", label: "合作" },
    { id: "contact", label: "联系" },
  ],

  hero: {
    eyebrow: "授权经销商",
    wordmark: "Yishu",
    lead: "十五分钟即可感受的护肤科技。一片智能面膜，一瓶纯净精华，还有一位随时可以联系的顾问。",
    ctaPrimary: { label: "提交咨询", href: "#contact" },
    ctaSecondary: { label: "了解智能面膜", href: "#product" },
    imageAlt: "",
  },

  trust: {
    eyebrow: "标准",
    title: "遵循公认的国际标准",
    standards: [
      { name: "ISO 9001", note: "质量管理体系" },
      { name: "ISO 45001", note: "职业健康安全" },
      { name: "CE / RoHS", note: "欧盟合规", logo: "ce" },
      { name: "FCC Part 15", note: "美国设备检测", logo: "fcc" },
      { name: "Annoyin™", note: "SCGP 生物科技活性成分" },
    ],
    stats: [
      { value: "7", label: "项专利技术" },
      { value: "12", label: "个国家和地区" },
      { value: "15 分钟", label: "每次护理" },
      { value: "FDA", label: "美国注册" },
    ],
    markets: {
      title: "遍布 12 个国家和地区",
      lead: "从东亚到北美，同一款面膜与配方送达我们服务的每一个市场。",
      countries: [
        { code: "CN", name: "中国" },
        { code: "KR", name: "韩国" },
        { code: "JP", name: "日本" },
        { code: "TW", name: "台湾" },
        { code: "HK", name: "香港" },
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
    eyebrow: "理念",
    title: "一棵树，五个原则",
    lead: "品牌源于一个简单的想法：照顾好财富、健康与能量，让五个原则指引每一件事。",
    items: [
      { zh: "正见", pinyin: "Zheng Jian", text: "看得清楚。即使无人注视，也对自己诚实。", imageAlt: "" },
      { zh: "正念", pinyin: "Zheng Nian", text: "心念端正。持续学习，以善意引领。", imageAlt: "" },
      { zh: "正行", pinyin: "Zheng Xing", text: "行为端正。真诚、慷慨、专注。", imageAlt: "" },
      { zh: "正事", pinyin: "Zheng Shi", text: "做正确的事。保持耐心，帮助身边的人。", imageAlt: "" },
      { zh: "正缘", pinyin: "Zheng Yuan", text: "结善缘。懂得回馈，终身成长。", imageAlt: "" },
    ],
  },

  product: {
    eyebrow: "旗舰产品",
    title: "*Yishu* 智能面膜",
    lead: "轻若无物的面膜，搭配智能控制器。温和的微电流与电穿孔技术将精华带入更深层，同时提拉紧致，只需一刻钟。",
    imageAlt: "宜树智能面膜与控制器",
    hotspots: [
      { id: "tens", label: "TENS", text: "柔和脉冲，放松并唤醒疲惫的面部肌肉。" },
      { id: "ems", label: "EMS", text: "微电流塑形，提拉轮廓。" },
      { id: "tdds", label: "TDDS", text: "透皮递送技术，帮助活性成分穿越肌肤表层。" },
      { id: "annoyin", label: "Annoyin™", text: "源自海洋的保湿屏障，采用 SCGP 生物技术制成。" },
      { id: "patents", label: "7 项专利", text: "一台设备，七项专利技术。" },
    ],
    specs: [
      { k: "形式", v: "智能面膜 + 精华" },
      { k: "精华", v: "30 毫升，保湿" },
      { k: "护理时间", v: "15 分钟，随时随地" },
      { k: "包装内含", v: "40 片面膜 + 2 个蓝牙耳机" },
    ],
    cta: { label: "咨询智能面膜", href: "#contact?interest=mask" },
  },

  ingredients: {
    eyebrow: "配方",
    title: "配方里有什么",
    lead: "专利活性成分搭配五种植物提取物，为肌肤带来舒缓与水润。",
    items: [
      { id: "aloe", latin: "Aloe barbadensis (Curaçao)", name: "库拉索芦荟", text: "舒缓肌肤，帮助修护。" },
      { id: "sophora", latin: "Sophora flavescens root", name: "苦参根", text: "缓解泛红，补充水分。" },
      { id: "purslane", latin: "Portulaca oleracea", name: "马齿苋", text: "抗氧化，助肤色更均匀。" },
      { id: "chamomile", latin: "Chamomilla recutita", name: "金色洋甘菊", text: "温和镇静，适合睡前使用。" },
      { id: "algae", latin: "Marine macroalgae", name: "海洋巨藻", text: "深层持久补水与滋养。" },
    ],
  },

  howTo: {
    eyebrow: "使用方法",
    title: "四个步骤，十五分钟",
    lead: "无需去美容院，用后无需再涂抹其他产品。",
    steps: [
      { icon: "droplets", title: "清洁", text: "从洁净、干爽的肌肤开始。" },
      { icon: "pipette", title: "涂抹精华", text: "均匀涂抹精华，展开面膜布。" },
      { icon: "bluetooth", title: "连接并开始", text: "敷上面膜，配对耳机，在应用中开始护理。" },
      { icon: "sparkles", title: "完成", text: "取下面膜，无需再涂抹任何产品。" },
    ],
  },

  compare: {
    eyebrow: "对比",
    title: "智能面膜与其他方式对比",
    note: "仅为日常使用与体验的一般参考，并非临床对比。",
    columns: ["宜树智能面膜", "片状面膜", "日常面霜", "美容院护理"],
    rows: [
      { k: "单次效果", v: ["全脸，多重作用", "表层", "表层", "明显"] },
      { k: "提拉紧致", v: ["EMS + TENS", "无", "无", "视项目而定"] },
      { k: "活性成分递送", v: ["深层（TDDS）", "表层", "表层", "视项目而定"] },
      { k: "时间", v: ["15 分钟", "15-20 分钟", "1-2 分钟", "60 分钟以上"] },
      { k: "核心成分", v: ["Annoyin™、依克多因、植物精华", "不一", "不一", "不一"] },
      { k: "应用控制", v: ["有", "无", "无", "无"] },
    ],
  },

  catalog: {
    eyebrow: "产品目录",
    title: "套装与组合",
    lead: "选择入门套装，加入身体护理，或一步到位。",
    askLabel: "咨询此套装",
    items: [
      { id: "manager", name: "经理套装", text: "居家护理入门套装。", contents: ["精华面膜 8 盒", "设备 2 台"] },
      { id: "combo", name: "组合套装", text: "面部与身体护理二合一。", contents: ["Taile 套装 2 套", "磁疗贴 10 片", "精华面膜 10 盒", "设备 3 台"] },
      { id: "magnetic", name: "TIL Taileshu 磁疗套装", text: "能量盒与贴片，助身体恢复。", contents: ["Taileshu 套装 1 套", "Shucai 贴片 8 包"] },
      { id: "director", name: "总监面膜套装", text: "完整疗程的大容量套装。", contents: ["精华面膜 13 盒", "设备 4 台"] },
      { id: "board", name: "董事组合", text: "全系列产品。", contents: ["Taile 套装 1 套", "磁疗贴 6 盒", "精华面膜 7 盒", "设备 2 套"] },
    ],
  },

  certificates: {
    eyebrow: "文件",
    title: "证书",
    lead: "查看或下载产品相关的认证文件。",
    items: [
      { name: "ISO 9001:2015", scope: "质量管理" },
      { name: "ISO 45001:2018", scope: "职业健康安全" },
      { name: "CE / RoHS", scope: "2011/65/EU 指令，设备" },
      { name: "FCC Part 15", scope: "美国设备检测" },
      { name: "FDA 注册", scope: "美国工厂注册" },
      { name: "产品安全奖", scope: "中国" },
      { name: "产品护照", scope: "精华面膜成分与用法" },
    ],
  },

  people: {
    eyebrow: "团队",
    title: "品牌背后的人",
    lead: "支持宜树的创始人、科学家与品牌大使。",
    items: Array.from({ length: 5 }, () => ({
      name: "大使姓名",
      role: "职位或头衔",
      bio: "用两三句话介绍这位人物，以及他们支持这个品牌的原因。",
    })),
  },

  consultant: {
    eyebrow: "您的顾问",
    name: "顾问姓名",
    role: "宜树授权经销商",
    paragraphs: [
      "我帮助您建立适合自己肤质和作息的护理习惯。",
      "我自己也在使用这款面膜，所以能如实告诉您会有什么效果。",
      "欢迎预约线下或线上一对一咨询。",
    ],
    cta: { label: "预约咨询", href: "#contact?interest=consultation" },
    imageAlt: "顾问肖像",
    whatsappLabel: "WhatsApp",
    callLabel: "致电",
  },

  faq: {
    eyebrow: "常见问题",
    title: "常见问题",
    items: [
      { q: "每次护理需要多长时间？", a: "十五分钟。面膜便于携带，用后无需再涂抹其他产品。" },
      { q: "多久能看到变化？", a: "很多人在第一次使用后就感到肌肤更水润紧致。想要持久效果，建议至少完成 14 次护理的疗程。" },
      { q: "套装里有什么？", a: "40 片面膜（每片可用两次）、两个连接应用的蓝牙耳机，以及 30 毫升精华。" },
      { q: "什么是 Annoyin™？", a: "一种源自海洋的甘油葡糖苷，帮助细胞锁住水分，由中国科学院青岛生物能源与过程研究所的 SCGP 生物技术生产。" },
      { q: "哪些人不宜使用？", a: "孕期或哺乳期、装有心脏起搏器、患有癌症者请勿使用；有甲状腺疾病者请勿用于颈部。如有慢性疾病，请先咨询医生。" },
      { q: "如何订购？", a: "请在下方提交咨询。我会回复您，帮您挑选并安排配送。" },
    ],
  },

  partner: {
    eyebrow: "合作",
    title: "与 *Yishu* 共同成长",
    lead: "分享您自己在用的产品，组建同样热爱它的团队。从个人销售和团队成长中获得收入。",
    incomeTypes: [
      { icon: "user", title: "直接收入", text: "向自己的客户销售套装和提供护理服务获得收入。" },
      { icon: "network", title: "团队收入", text: "从您引荐并扶持的伙伴的营业额中获得分成。" },
    ],
    maths: {
      eyebrow: "从您的第一套开始",
      explanation: "用一套产品提供护理服务，这套产品可以多次回本。",
      formula: "（{masks} 片面膜 − 自用 {keep} 片）× 每次 {price}",
      pricePending: "请设定您的护理价格",
      rows: [
        { k: "首次护理", v: "TODO" },
        { k: "复购护理", v: "TODO" },
        { k: "每片面膜收入", v: "TODO" },
        { k: "参考零售价", v: "TODO" },
      ],
    },
    disclaimer: "以上数字仅为示例，并非承诺。实际收入取决于您个人的努力和当地市场。",
    levelsTitle: "合作级别",
    levelUpTo: "{amount} 以内",
    levelFrom: "{amount} 起",
    levelsNote: "门槛为团队营业额，以美元计。",
    bonusesTitle: "奖金",
    bonuses: [
      { value: "10%", label: "推荐奖" },
      { value: "5-24%", label: "级差奖" },
      { value: "10-40%", label: "平级奖" },
      { value: "10-20%", label: "领导奖" },
      { value: "1-5%", label: "股东奖" },
      { value: "3-6%", label: "团队分红" },
      { value: "2%", label: "全球分红" },
      { value: "2%", label: "股东分红" },
    ],
    stepsTitle: "如何开始",
    steps: [
      { title: "联系我们", text: "提交咨询，并简单介绍一下自己。" },
      { title: "详细沟通", text: "简短通话，了解产品、条款与计划。" },
      { title: "正式开始", text: "收到您的第一套产品、培训资料与支持。" },
    ],
    cta: { label: "咨询合作", href: "#contact?interest=partner" },
  },

  contact: {
    eyebrow: "联系",
    title: "提交咨询",
    lead: "留下您的联系方式，我会在一个工作日内回复您。",
    infoLabel: "联系方式",
    phoneLabel: "电话",
    emailLabel: "电子邮件",
    whatsappLabel: "WhatsApp",
    followLabel: "关注",
    interests: [
      { id: "mask", label: "智能面膜" },
      { id: "bundle", label: "产品套装" },
      { id: "partner", label: "合作" },
      { id: "consultation", label: "咨询" },
    ],
    labels: {
      name: "您的姓名",
      phone: "电话",
      email: "电子邮件（选填）",
      interest: "我感兴趣的是",
      message: "留言（选填）",
      submit: "提交咨询",
      sending: "正在发送…",
    },
    errors: {
      name: "请输入您的姓名。",
      phone: "请输入我们可以联系到您的电话号码。",
      email: "电子邮件地址格式似乎不正确。",
    },
    consent: "提交即表示您同意我们就您的咨询与您联系。",
    success: { title: "谢谢", text: "您的咨询已收到，我们会尽快回复。", again: "再次提交" },
  },

  footer: {
    tagline: "美容科技，本地销售与服务。",
    resellerStatement: "马来西亚独立的宜树授权经销商。",
    sectionsLabel: "页面导航",
    productInfoLabel: "产品信息",
    productInfo: [
      { k: "证书持有人", v: "TODO 见包装" },
      { k: "生产商", v: "TODO 见包装" },
      { k: "注册信息", v: "TODO" },
      { k: "经销商执照", v: "TODO" },
    ],
    legal: "Yishu 与 宜树 是其各自所有者的商标。独立授权经销商。",
    privacy: "隐私政策",
  },
};
