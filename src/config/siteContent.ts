export interface SectorItem {
  id: string;
  title: string;
  subtitle: string;
  englishTitle: string;
  shortDesc: string;
  fullDesc: string;
  metricsLabel: string;
  capabilities: string[];
  icon: 'globe' | 'ship' | 'handshake' | 'trending-up';
  accentColor: string;
}

export interface TradeNode {
  id: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  type: 'hub' | 'port' | 'market';
  description: string;
}

export interface TradeCorridor {
  id: string;
  name: string;
  from: string;
  to: string;
  category: 'energy' | 'maritime' | 'tech' | 'strategic';
  description: string;
  estimatedTransit: string;
  keyCommodities: string[];
}

export interface WorkflowStep {
  number: string;
  title: string;
  englishTitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export const WHATSAPP_CONFIG = {
  phoneNumber: "201016731179",
  localNumber: "01016731179",
  displayNumber: "+20 101 673 1179",
  defaultMessage: "مرحبًا، تواصلت معكم من خلال موقع HORIZON GULF — أفق الخليج للاستثمار والتجارة الدولية، وأرغب في معرفة المزيد عن خدماتكم وفرص التعاون.",
  getWhatsAppUrl: (customMessage?: string) => {
    const message = customMessage || WHATSAPP_CONFIG.defaultMessage;
    return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
  },
};

export const SITE_CONFIG = {
  brand: {
    name: "HORIZON GULF",
    arabicName: "أفق الخليج للاستثمار والتجارة الدولية",
    descriptor: "International Trade & Investment",
    tagline: "نربط الأسواق، ونصنع آفاقًا جديدة للأعمال.",
    supportingCopy: "تصوّر متكامل لحلول التجارة الدولية والتوريد والشراكات الاستراتيجية عبر الأسواق الإقليمية والعالمية.",
    creator: "BADRA — Digital Product Engineering",
    creatorArabic: "تصميم وهندسة رقمية: بدرواي BADRA",
    statusNote: "عرض تجريبي مستقل لمفهوم رقمي مقترح — خاضع لاعتماد العميل",
  },
  disclaimer: {
    short: "مفهوم رقمي تجريبي (Concept Demonstration) أعدته BADRA للعرض والنقاش الهندسي. كافة القطاعات والبيانات المعروضة ذات طابع توضيحي وتخضع للمراجعة والاعتماد المؤسسي.",
    full: "هذا الموقع هو نموذج تجريبي أولي (Concept Demonstration) تم بناؤه لتوضيح الرؤية الرقمية والتجربة البصرية ثلاثية الأبعاد. لا يمثل الموقع بيانات رسمية أو شراكات تجارية ملزمة، وتخضع جميع القطاعات المقترحة للمراجعة والتطوير المستقبلي.",
  },
  navigation: [
    { label: "الرئيسية", href: "#hero" },
    { label: "قطاعات الأعمال", href: "#sectors" },
    { label: "شبكة التجارة", href: "#network" },
    { label: "منهج العمل", href: "#approach" },
    { label: "تواصل معنا", href: "#contact" },
  ],
  sectors: [
    {
      id: "intl-trade",
      title: "التجارة الدولية والتوريد",
      subtitle: "حلول التبادل السلعي العابر للحدود",
      englishTitle: "Cross-Border Trade & Sourcing",
      shortDesc: "تطوير مسارات توريد آمنة ومستقرة للمنتجات والسلع الاستراتيجية عبر مراكز التجارة الدولية.",
      fullDesc: "نظام مقترح لإدارة تدفق السلع الاستراتيجية والتوريد المتعدد الأطراف، يركز على كفاءة التسليم وإدارة مخاطر التسعير وتقلبات الأسواق العالمية مع مراعاة أعلى معايير الحوكمة والامتثال الدولي.",
      metricsLabel: "محاور التوريد المقترحة",
      capabilities: [
        "إدارة عقود التوريد الدولية وحلول التحوط",
        "تنسيق الشحن التجاري متعدد الوسائط",
        "تأمين مصادر الإمداد البديلة ومراقبة الجودة",
        "الامتثال الجمركي والتنظيمي عبر الموانئ",
      ],
      icon: "globe",
      accentColor: "#D4AF37",
    },
    {
      id: "logistics",
      title: "الخدمات اللوجستية وسلاسل الإمداد",
      subtitle: "الممرات الذكية وحلول الربط المتعدد",
      englishTitle: "Smart Multimodal Logistics",
      shortDesc: "هندسة سلاسل إمداد مرنة تجمع بين النقل البحري والجوي والبري لتقليص زمن الوصول والتكاليف.",
      fullDesc: "رؤية لشبكة لوجستية متطورة توظف البنى التحتية للموانئ الخليجية والمراكز المحورية في الشرق الأوسط للربط السلس بين مراكز الإنتاج الآسيوية والأوروبية والأسواق الإقليمية المستهدفة.",
      metricsLabel: "ركائز الممرات اللوجستية",
      capabilities: [
        "التكامل بين المنافذ البحرية ومحطات الشحن الجوي",
        "المستودعات الذكية وحلول التوزيع الإقليمي",
        "تتبع الشحنات وتكامل بيانات سلاسل الإمداد",
        "تحسين تكلفة الطن وسرعة دورة البضائع",
      ],
      icon: "ship",
      accentColor: "#F3C969",
    },
    {
      id: "alliances",
      title: "الشراكات التجارية والاستراتيجية",
      subtitle: "المشاريع المشتركة والتحالفات الاستثمارية",
      englishTitle: "Strategic Commercial Alliances",
      shortDesc: "بناء تحالفات متينة بين المنتجين والمستثمرين والموزعين لتأسيس حصص سوقية مستدامة.",
      fullDesc: "إطار عمل لبناء شراكات مؤسسية تقوم على تقاسم القيمة وتطوير فرص استثمارية في قطاعات الإنتاج والتوزيع، مع التوافق التام مع الخطط الاقتصادية والتنموية في دول الخليج العربي.",
      metricsLabel: "نماذج التحالفات المقترحة",
      capabilities: [
        "تأسيس مشاريع تجارية مشتركة (Joint Ventures)",
        "اتفاقيات التوزيع الحصري والتمثيل التجاري",
        "جذب الاستثمارات المشتركة للمشاريع النوعية",
        "المواءمة القانونية والتجارية متعددة الاختصاصات",
      ],
      icon: "handshake",
      accentColor: "#7890AA",
    },
    {
      id: "expansion",
      title: "تطوير الأعمال والتوسع في الأسواق",
      subtitle: "دخول الأسواق والاستشارات الاستراتيجية",
      englishTitle: "Market Entry & Strategic Expansion",
      shortDesc: "تمكين الشركات من دخول الأسواق الإقليمية والخليجية بخطط مدروسة ومبنية على بيانات السوق.",
      fullDesc: "منهجية تحليلية متكاملة لتقييم الفرص الاستثمارية ودراسة الجدوى وبناء شبكات العلاقات المحلية، بما يضمن تسريع وتيرة النفاذ إلى الأسواق المستهدفة وتقليل المخاطر التشغيلية.",
      metricsLabel: "أدوات التوسع والانتشار",
      capabilities: [
        "دراسات متقدمة للطلب وسلوك الأسواق التنافسية",
        "هيكلة نماذج الدخول وتحديد الشركاء المحليين",
        "برامج الامتثال والتراخيص والاعتمادات الرسمية",
        "إدارة استراتيجيات التسعير والهوية التجارية",
      ],
      icon: "trending-up",
      accentColor: "#D4AF37",
    },
  ] as SectorItem[],
  tradeNodes: [
    { id: "gulf", name: "الخليج العربي (الرياض / دبي)", region: "الشرق الأوسط", lat: 24.7, lng: 46.7, type: "hub", description: "المركز المحوري لإدارة العمليات والشراكات الإقليمية" },
    { id: "jordan", name: "عمّان والمشرق العربي", region: "بلاد الشام", lat: 31.9, lng: 35.9, type: "hub", description: "بوابة الربط البري والتجارة الإقليمية" },
    { id: "rotterdam", name: "الموانئ الأوروبية (روتردام / أنتويرب)", region: "أوروبا", lat: 51.9, lng: 4.4, type: "port", description: "نقطة ارتكاز تدفقات التجارة والواردات الصناعية" },
    { id: "shanghai", name: "شنغهاي والموانئ الشرقية", region: "شرق آسيا", lat: 31.2, lng: 121.5, type: "port", description: "مراكز التصنيع والتوريد للمعدات والسلع" },
    { id: "singapore", name: "سنغافورة ومضيق ملقا", region: "جنوب شرق آسيا", lat: 1.3, lng: 103.8, type: "port", description: "عقدة الخدمات اللوجستية البحرية والوقود والشحن الدولي" },
    { id: "london", name: "لندن والمراكز المالية", region: "المملكة المتحدة", lat: 51.5, lng: -0.1, type: "market", description: "أسواق التمويل التجاري والتأمين البحري" },
    { id: "newyork", name: "نيويورك والساحل الشرقي", region: "أمريكا الشمالية", lat: 40.7, lng: -74.0, type: "market", description: "مراكز التبادل الاستثماري وحلول التحوط المالي" },
  ] as TradeNode[],
  tradeCorridors: [
    {
      id: "gulf-asia",
      name: "ممر الخليج — آسيا والمحيط الهادئ",
      from: "الخليج العربي",
      to: "شنغهاي وسنغافورة",
      category: "maritime",
      description: "الممر الأكبر حركة لنقل المنتجات الهيدروكربونية والكيماويات ومعدات البنية التحتية والتقنيات الصناعية.",
      estimatedTransit: "تقدير استرشادي: ١٢ - ١٦ يومًا (بحري)",
      keyCommodities: ["المواد الكيماوية والمشتقات", "المعدات الثقيلة والمصنعة", "الإلكترونيات والتقنية"],
    },
    {
      id: "gulf-europe",
      name: "ممر الشرق الأوسط — موانئ أوروبا",
      from: "الخليج وعمّان",
      to: "روتردام وهامبورغ",
      category: "strategic",
      description: "مسار الشراكات الاستراتيجية للمنتجات الزراعية العالية القيمة، والمعدات الهندسية الدقيقة والسلع الصناعية.",
      estimatedTransit: "تقدير استرشادي: ١٤ - ١٨ يومًا (متعدد الوسائط)",
      keyCommodities: ["السلع الصناعية المتقدمة", "المنتجات الزراعية والأغذية", "مستلزمات الطاقة المتجددة"],
    },
    {
      id: "regional-levant",
      name: "ممر الربط الإقليمي الخليجي — الشامي",
      from: "الرياض ودبي",
      to: "عمّان والعقبة",
      category: "energy",
      description: "شبكة نقل بري سريع وسلاسل توريد سريعة الاستجابة لخدمة قطاعات التجزئة والإنشاءات والمواد الغذائية.",
      estimatedTransit: "تقدير استرشادي: ٢ - ٤ أيام (بري)",
      keyCommodities: ["المواد الغذائية والتجزئة", "مواد البناء والتشييد", "المستلزمات الطبية والدوائية"],
    },
  ] as TradeCorridor[],
  workflowSteps: [
    {
      number: "٠١",
      title: "فهم الاحتياج",
      englishTitle: "Requirement Discovery",
      description: "جلسات استشارية معمقة لتحديد متطلبات التوريد، والكميات المستهدفة، والمحددات الزمنية والمالية مع الشركاء.",
      deliverables: ["خريطة تدفق سلاسل الإمداد", "مصفوفة المتطلبات والمواصفات", "تقدير المخاطر الأولية"],
      duration: "أسبوع ١ - ٢",
    },
    {
      number: "٠٢",
      title: "دراسة الفرصة",
      englishTitle: "Feasibility & Market Due Diligence",
      description: "تحليل معمق لمسارات التوريد المتاحة، والتعريفات الجمركية، وهوامش الأسعار، وضمانات الجودة والموثوقية.",
      deliverables: ["تقرير الجدوى التجارية", "تحليل التكاليف الإجمالية", "مقارنة الموردين والمسارات"],
      duration: "أسبوع ٣ - ٤",
    },
    {
      number: "٠٣",
      title: "بناء الحل",
      englishTitle: "Solution Architecture & Execution Plan",
      description: "هيكلة العقود القانونية واللوجستية، وتحديد آليات الدفع الآمنة، وجدولة الشحن والتوزيع عبر الموانئ.",
      deliverables: ["عقد الشراكة وهيكل التسعير", "الجدول الزمني للتدفق السلعي", "خطة الطوارئ والبدائل"],
      duration: "أسبوع ٥ - ٦",
    },
    {
      number: "٠٤",
      title: "تطوير الشراكة",
      englishTitle: "Partnership Growth & Continuity",
      description: "متابعة دورية للأداء، واستكشاف مجالات التوسع والتحالفات طويلة الأمد مع فتح أسواق جديدة.",
      deliverables: ["تقارير كفاءة التوريد الدورية", "مراجعة فرص التوسع المشترك", "تحديث استراتيجية التكاليف"],
      duration: "شراكة مستمرة",
    },
  ] as WorkflowStep[],
  contact: {
    emailPlaceholder: "inquiries@horizongulf.concept",
    phonePlaceholder: "+966 11 000 0000 (نموذج افتراضي)",
    locationPlaceholder: "الرياض، المملكة العربية السعودية (المقر المقترح)",
    officeHours: "الأحد — الخميس: 8:00 صباحًا إلى 5:00 مساءً",
    whatsappNumber: WHATSAPP_CONFIG.displayNumber,
    whatsappUrl: WHATSAPP_CONFIG.getWhatsAppUrl(),
  },
};
