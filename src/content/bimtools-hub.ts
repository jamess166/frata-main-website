import type { Locale } from "@/lib/locale";

export interface BimtoolsHubContent {
  meta: {
    titleAbsolute: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    ogLocale: string;
  };
  hero: {
    offerBadge: string;
    heading: string;
    intro: string;
    subscriptionCta: string;
    downloadCta: string;
    stats: { addins: string; areas: string; premium: string; free: string };
  };
  suites: { eyebrow: string; heading: string; addinsSuffix: string };
  tiers: {
    eyebrow: string;
    heading: string;
    free: { badge: string; title: string; items: string[]; cta: string };
    premium: {
      badge: string;
      title: string;
      items: string[];
      customizationNote: string;
      subscriptionCta: string;
      contactCta: string;
      privacyLabel: string;
    };
  };
}

export const bimtoolsHubContent: Record<Locale, BimtoolsHubContent> = {
  es: {
    meta: {
      titleAbsolute: "BIMtools — Suite de Addins para Revit | Frata Ingenieros",
      description:
        "BIMtools es la suite de addins para Revit de Frata Ingenieros: 39 herramientas para exportación, navegación, estructuras, parámetros, MEP y automatización BIM. 8 premium a USD 30/mes.",
      keywords: [
        "addins revit",
        "plugins revit",
        "automatizacion bim",
        "consultoria bim",
        "desarrollo revit api",
        "manuales revit",
        "herramientas bim",
        "BIMtools",
        "suite revit",
        "addins mep revit",
      ],
      ogTitle: "BIMtools — Suite de Addins para Revit | Frata Ingenieros",
      ogDescription:
        "39 addins para Revit, 8 premium a USD 30/mes. Exportación, navegación, estructuras, parámetros, MEP y automatización de flujos BIM.",
      ogImageAlt: "BIMtools - Suite de Addins para Revit por Frata Ingenieros",
      ogLocale: "es_PE",
    },
    hero: {
      offerBadge: "Oferta 2026 · Precio de introducción en la suscripción premium",
      heading: "Addins para Revit hechos por quienes usan Revit todos los días.",
      intro:
        "Herramientas que aceleran tareas repetitivas, ordenan la información del modelo y mejoran la productividad de equipos que trabajan en Revit todos los días.",
      subscriptionCta: "Suscripción premium",
      downloadCta: "Descargar instalador",
      stats: {
        addins: "Addins documentados",
        areas: "Áreas de trabajo",
        premium: "Herramientas premium",
        free: "Herramientas gratis",
      },
    },
    suites: { eyebrow: "Suites", heading: "Elige una suite y entra a sus addins.", addinsSuffix: "addins" },
    tiers: {
      eyebrow: "Gratis vs Premium",
      heading: "Empieza gratis. Escala cuando lo necesites.",
      free: {
        badge: "Gratis · Sin costo",
        title: "Explora BIMtools",
        items: [
          "Acceso a addins gratuitos dentro de la suite",
          "Instalación y exploración del entorno BIMtools",
          "Revisión de manuales y funciones",
          "Base para decidir si Premium encaja con tu equipo",
          "Herramientas gratuitas para siempre, sin límite de tiempo",
        ],
        cta: "Descargar prueba",
      },
      premium: {
        badge: "Premium · Precio de introducción 2026: USD 30/mes, USD 75/trimestre o USD 250/año",
        title: "Todos los addins premium",
        items: [
          "Acceso a todos los addins premium con una sola suscripción",
          "Automatización avanzada para modelado, gestión y estructuras",
          "Mayor velocidad en tareas repetitivas y control del modelo",
          "Activación de acceso premium después del pago",
        ],
        customizationNote:
          "¿Solo te interesan uno o dos addins premium? Escríbenos y armamos una propuesta a medida.",
        subscriptionCta: "Ver suscripción premium",
        contactCta: "Consultar activación",
        privacyLabel: "Política de privacidad de BIMtools",
      },
    },
  },
  en: {
    meta: {
      titleAbsolute: "BIMtools for Revit | BIM Automation by Frata",
      description:
        "A suite of Revit add-ins with tools for exports, navigation, structures, parameters, MEP and BIM workflow automation.",
      keywords: [
        "revit addins",
        "revit plugins",
        "bim automation",
        "bim consulting",
        "revit api development",
        "revit manuals",
        "bim tools",
        "BIMtools",
        "revit suite",
        "mep revit addins",
      ],
      ogTitle: "BIMtools for Revit | BIM Automation by Frata",
      ogDescription:
        "39 add-ins for Revit, 8 premium at USD 30/month. Exports, navigation, structures, parameters, MEP and BIM workflow automation.",
      ogImageAlt: "BIMtools - Revit Addin Suite by Frata Ingenieros",
      ogLocale: "en_US",
    },
    hero: {
      offerBadge: "2026 offer · Introductory price on the premium subscription",
      heading: "Revit add-ins built by people who use Revit every day.",
      intro:
        "Tools that accelerate repetitive work, structure model information and improve day-to-day efficiency for teams working in Revit every day.",
      subscriptionCta: "Premium subscription",
      downloadCta: "Download installer",
      stats: {
        addins: "Documented add-ins",
        areas: "Work areas",
        premium: "Premium tools",
        free: "Free tools",
      },
    },
    suites: { eyebrow: "Suites", heading: "Choose a suite and enter its add-ins.", addinsSuffix: "add-ins" },
    tiers: {
      eyebrow: "Free vs Premium",
      heading: "Start free. Scale when you need it.",
      free: {
        badge: "Free · No cost",
        title: "Explore BIMtools",
        items: [
          "Access to free add-ins inside the suite",
          "Installer access and BIMtools environment setup",
          "Manual and feature review",
          "A clear base for deciding whether Premium fits your team",
          "Free tools forever, no time limit",
        ],
        cta: "Download trial",
      },
      premium: {
        badge: "Premium · 2026 introductory price: USD 30/month, USD 75/quarter or USD 250/year",
        title: "Every premium add-in",
        items: [
          "Access to every premium add-in with one subscription",
          "Advanced automation for modeling, management and structures",
          "Faster repetitive work and stronger model control",
          "Premium access activation after payment",
        ],
        customizationNote: "Only interested in one or two premium add-ins? Reach out and we'll put together a custom plan.",
        subscriptionCta: "View premium subscription",
        contactCta: "Ask about activation",
        privacyLabel: "BIMtools privacy policy",
      },
    },
  },
  de: {
    meta: {
      titleAbsolute: "BIMtools — Revit-Addin-Suite | Frata Ingenieros",
      description:
        "BIMtools ist die Revit-Addin-Suite von Frata Ingenieros: 39 Werkzeuge für Export, Navigation, Tragwerk, Parameter, MEP und BIM-Automatisierung. 8 Premium-Tools ab USD 30/Monat.",
      keywords: [
        "Revit Addins",
        "Revit Plugins",
        "BIM-Automatisierung",
        "BIM-Beratung",
        "Revit API Entwicklung",
        "Revit Handbücher",
        "BIM-Werkzeuge",
        "BIMtools",
        "Revit Suite",
        "MEP Revit Addins",
      ],
      ogTitle: "BIMtools — Revit-Addin-Suite | Frata Ingenieros",
      ogDescription:
        "39 Addins für Revit, 8 Premium-Tools ab USD 30/Monat. Export, Navigation, Tragwerk, Parameter, MEP und BIM-Workflow-Automatisierung.",
      ogImageAlt: "BIMtools - Revit-Addin-Suite von Frata Ingenieros",
      ogLocale: "de_DE",
    },
    hero: {
      offerBadge: "Angebot 2026 · Einführungspreis für das Premium-Abo",
      heading: "Revit-Addins, entwickelt von Menschen, die täglich mit Revit arbeiten.",
      intro:
        "Werkzeuge, die repetitive Aufgaben beschleunigen, Modellinformationen strukturieren und die Produktivität von Teams verbessern, die täglich mit Revit arbeiten.",
      subscriptionCta: "Premium-Abo",
      downloadCta: "Installer herunterladen",
      stats: {
        addins: "Dokumentierte Addins",
        areas: "Arbeitsbereiche",
        premium: "Premium-Werkzeuge",
        free: "Kostenlose Werkzeuge",
      },
    },
    suites: { eyebrow: "Suiten", heading: "Wählen Sie eine Suite und öffnen Sie ihre Addins.", addinsSuffix: "Addins" },
    tiers: {
      eyebrow: "Kostenlos vs. Premium",
      heading: "Kostenlos starten. Skalieren, wenn Sie es brauchen.",
      free: {
        badge: "Kostenlos · Ohne Kosten",
        title: "BIMtools entdecken",
        items: [
          "Zugang zu kostenlosen Addins innerhalb der Suite",
          "Installation und Erkundung der BIMtools-Umgebung",
          "Durchsicht von Handbüchern und Funktionen",
          "Grundlage für die Entscheidung, ob Premium zu Ihrem Team passt",
          "Kostenlose Werkzeuge für immer, ohne Zeitlimit",
        ],
        cta: "Testversion herunterladen",
      },
      premium: {
        badge: "Premium · Einführungspreis 2026: USD 30/Monat, USD 75/Quartal oder USD 250/Jahr",
        title: "Alle Premium-Addins",
        items: [
          "Zugang zu allen Premium-Addins mit einem einzigen Abo",
          "Erweiterte Automatisierung für Modellierung, Verwaltung und Tragwerk",
          "Höhere Geschwindigkeit bei repetitiven Aufgaben und Modellkontrolle",
          "Aktivierung des Premium-Zugangs nach der Zahlung",
        ],
        customizationNote: "Nur an ein oder zwei Premium-Addins interessiert? Schreiben Sie uns für ein individuelles Angebot.",
        subscriptionCta: "Premium-Abo ansehen",
        contactCta: "Aktivierung anfragen",
        privacyLabel: "Datenschutzerklärung von BIMtools",
      },
    },
  },
  fr: {
    meta: {
      titleAbsolute: "BIMtools — Suite d'addins pour Revit | Frata Ingenieros",
      description:
        "BIMtools est la suite d'addins pour Revit de Frata Ingenieros : 39 outils pour l'export, la navigation, les structures, les paramètres, le MEP et l'automatisation BIM. 8 addins premium dès 30 USD/mois.",
      keywords: [
        "addins revit",
        "plugins revit",
        "automatisation bim",
        "conseil bim",
        "développement revit api",
        "manuels revit",
        "outils bim",
        "BIMtools",
        "suite revit",
        "addins mep revit",
      ],
      ogTitle: "BIMtools — Suite d'addins pour Revit | Frata Ingenieros",
      ogDescription:
        "39 addins pour Revit, 8 premium dès 30 USD/mois. Export, navigation, structures, paramètres, MEP et automatisation des flux BIM.",
      ogImageAlt: "BIMtools - Suite d'addins pour Revit par Frata Ingenieros",
      ogLocale: "fr_FR",
    },
    hero: {
      offerBadge: "Offre 2026 · Prix de lancement sur l'abonnement premium",
      heading: "Des addins Revit conçus par des personnes qui utilisent Revit au quotidien.",
      intro:
        "Des outils qui accélèrent les tâches répétitives, structurent les informations du modèle et améliorent la productivité des équipes travaillant sur Revit au quotidien.",
      subscriptionCta: "Abonnement premium",
      downloadCta: "Télécharger l'installateur",
      stats: {
        addins: "Addins documentés",
        areas: "Domaines de travail",
        premium: "Outils premium",
        free: "Outils gratuits",
      },
    },
    suites: { eyebrow: "Suites", heading: "Choisissez une suite et accédez à ses addins.", addinsSuffix: "addins" },
    tiers: {
      eyebrow: "Gratuit vs Premium",
      heading: "Commencez gratuitement. Évoluez quand vous en avez besoin.",
      free: {
        badge: "Gratuit · Sans frais",
        title: "Découvrir BIMtools",
        items: [
          "Accès aux addins gratuits de la suite",
          "Installation et découverte de l'environnement BIMtools",
          "Consultation des manuels et fonctionnalités",
          "Une base claire pour décider si Premium convient à votre équipe",
          "Outils gratuits pour toujours, sans limite de temps",
        ],
        cta: "Télécharger l'essai",
      },
      premium: {
        badge: "Premium · Prix de lancement 2026 : 30 USD/mois, 75 USD/trimestre ou 250 USD/an",
        title: "Tous les addins premium",
        items: [
          "Accès à tous les addins premium avec un seul abonnement",
          "Automatisation avancée pour la modélisation, la gestion et les structures",
          "Plus de rapidité sur les tâches répétitives et un meilleur contrôle du modèle",
          "Activation de l'accès premium après paiement",
        ],
        customizationNote:
          "Seulement intéressé par un ou deux addins premium ? Contactez-nous, nous préparerons une offre sur mesure.",
        subscriptionCta: "Voir l'abonnement premium",
        contactCta: "Demander l'activation",
        privacyLabel: "Politique de confidentialité de BIMtools",
      },
    },
  },
  it: {
    meta: {
      titleAbsolute: "BIMtools — Suite di Addin per Revit | Frata Ingenieros",
      description:
        "BIMtools è la suite di addin per Revit di Frata Ingenieros: 39 strumenti per esportazione, navigazione, strutture, parametri, MEP e automazione BIM. 8 premium a partire da USD 30/mese.",
      keywords: [
        "addin revit",
        "plugin revit",
        "automazione bim",
        "consulenza bim",
        "sviluppo revit api",
        "manuali revit",
        "strumenti bim",
        "BIMtools",
        "suite revit",
        "addin mep revit",
      ],
      ogTitle: "BIMtools — Suite di Addin per Revit | Frata Ingenieros",
      ogDescription:
        "39 addin per Revit, 8 premium a partire da USD 30/mese. Esportazione, navigazione, strutture, parametri, MEP e automazione dei flussi BIM.",
      ogImageAlt: "BIMtools - Suite di Addin per Revit di Frata Ingenieros",
      ogLocale: "it_IT",
    },
    hero: {
      offerBadge: "Offerta 2026 · Prezzo di lancio sull'abbonamento premium",
      heading: "Addin per Revit realizzati da chi usa Revit ogni giorno.",
      intro:
        "Strumenti che velocizzano attività ripetitive, organizzano le informazioni del modello e migliorano la produttività dei team che lavorano ogni giorno in Revit.",
      subscriptionCta: "Abbonamento premium",
      downloadCta: "Scarica l'installer",
      stats: {
        addins: "Addin documentati",
        areas: "Aree di lavoro",
        premium: "Strumenti premium",
        free: "Strumenti gratuiti",
      },
    },
    suites: { eyebrow: "Suite", heading: "Scegli una suite ed entra nei suoi addin.", addinsSuffix: "addin" },
    tiers: {
      eyebrow: "Gratis vs Premium",
      heading: "Inizia gratis. Scala quando ne hai bisogno.",
      free: {
        badge: "Gratis · Senza costi",
        title: "Esplora BIMtools",
        items: [
          "Accesso agli addin gratuiti all'interno della suite",
          "Installazione ed esplorazione dell'ambiente BIMtools",
          "Consultazione di manuali e funzionalità",
          "Base per decidere se Premium è adatto al tuo team",
          "Strumenti gratuiti per sempre, senza limiti di tempo",
        ],
        cta: "Scarica la prova",
      },
      premium: {
        badge: "Premium · Prezzo di lancio 2026: USD 30/mese, USD 75/trimestre o USD 250/anno",
        title: "Tutti gli addin premium",
        items: [
          "Accesso a tutti gli addin premium con un unico abbonamento",
          "Automazione avanzata per modellazione, gestione e strutture",
          "Maggiore velocità nelle attività ripetitive e controllo del modello",
          "Attivazione dell'accesso premium dopo il pagamento",
        ],
        customizationNote: "Ti interessano solo uno o due addin premium? Scrivici e prepariamo una proposta su misura.",
        subscriptionCta: "Vedi l'abbonamento premium",
        contactCta: "Richiedi l'attivazione",
        privacyLabel: "Informativa sulla privacy di BIMtools",
      },
    },
  },
  pt: {
    meta: {
      titleAbsolute: "BIMtools — Suíte de Addins para Revit | Frata Ingenieros",
      description:
        "O BIMtools é a suíte de addins para Revit da Frata Ingenieros: 39 ferramentas para exportação, navegação, estruturas, parâmetros, MEP e automação BIM. 8 premium a partir de USD 30/mês.",
      keywords: [
        "addins revit",
        "plugins revit",
        "automação bim",
        "consultoria bim",
        "desenvolvimento revit api",
        "manuais revit",
        "ferramentas bim",
        "BIMtools",
        "suíte revit",
        "addins mep revit",
      ],
      ogTitle: "BIMtools — Suíte de Addins para Revit | Frata Ingenieros",
      ogDescription:
        "39 addins para Revit, 8 premium a partir de USD 30/mês. Exportação, navegação, estruturas, parâmetros, MEP e automação de fluxos BIM.",
      ogImageAlt: "BIMtools - Suíte de Addins para Revit da Frata Ingenieros",
      ogLocale: "pt_BR",
    },
    hero: {
      offerBadge: "Oferta 2026 · Preço de lançamento na assinatura premium",
      heading: "Addins para Revit feitos por quem usa Revit todos os dias.",
      intro:
        "Ferramentas que aceleram tarefas repetitivas, organizam as informações do modelo e melhoram a produtividade de equipes que trabalham no Revit todos os dias.",
      subscriptionCta: "Assinatura premium",
      downloadCta: "Baixar instalador",
      stats: {
        addins: "Addins documentados",
        areas: "Áreas de trabalho",
        premium: "Ferramentas premium",
        free: "Ferramentas gratuitas",
      },
    },
    suites: { eyebrow: "Suítes", heading: "Escolha uma suíte e acesse seus addins.", addinsSuffix: "addins" },
    tiers: {
      eyebrow: "Gratuito vs Premium",
      heading: "Comece grátis. Escale quando precisar.",
      free: {
        badge: "Gratuito · Sem custo",
        title: "Explore o BIMtools",
        items: [
          "Acesso a addins gratuitos dentro da suíte",
          "Instalação e exploração do ambiente BIMtools",
          "Consulta de manuais e funções",
          "Base para decidir se o Premium se encaixa na sua equipe",
          "Ferramentas gratuitas para sempre, sem limite de tempo",
        ],
        cta: "Baixar versão de teste",
      },
      premium: {
        badge: "Premium · Preço de lançamento 2026: USD 30/mês, USD 75/trimestre ou USD 250/ano",
        title: "Todos os addins premium",
        items: [
          "Acesso a todos os addins premium com uma única assinatura",
          "Automação avançada para modelagem, gestão e estruturas",
          "Mais velocidade em tarefas repetitivas e controle do modelo",
          "Ativação do acesso premium após o pagamento",
        ],
        customizationNote: "Só tem interesse em um ou dois addins premium? Fale conosco e montamos uma proposta sob medida.",
        subscriptionCta: "Ver assinatura premium",
        contactCta: "Consultar ativação",
        privacyLabel: "Política de privacidade do BIMtools",
      },
    },
  },
  ru: {
    meta: {
      titleAbsolute: "BIMtools — Пакет аддинов для Revit | Frata Ingenieros",
      description:
        "BIMtools — пакет аддинов для Revit от Frata Ingenieros: 39 инструментов для экспорта, навигации, конструкций, параметров, MEP и BIM-автоматизации. 8 премиум-инструментов от 30 USD/мес.",
      keywords: [
        "аддины revit",
        "плагины revit",
        "bim-автоматизация",
        "bim-консалтинг",
        "разработка revit api",
        "мануалы revit",
        "bim-инструменты",
        "BIMtools",
        "пакет revit",
        "mep аддины revit",
      ],
      ogTitle: "BIMtools — Пакет аддинов для Revit | Frata Ingenieros",
      ogDescription:
        "39 аддинов для Revit, 8 премиум от 30 USD/мес. Экспорт, навигация, конструкции, параметры, MEP и автоматизация BIM-процессов.",
      ogImageAlt: "BIMtools — пакет аддинов для Revit от Frata Ingenieros",
      ogLocale: "ru_RU",
    },
    hero: {
      offerBadge: "Акция 2026 · Вводная цена на премиум-подписку",
      heading: "Аддины для Revit, созданные людьми, которые ежедневно работают в Revit.",
      intro:
        "Инструменты, которые ускоряют повторяющиеся задачи, упорядочивают информацию модели и повышают продуктивность команд, работающих в Revit каждый день.",
      subscriptionCta: "Премиум-подписка",
      downloadCta: "Скачать установщик",
      stats: {
        addins: "Задокументированные аддины",
        areas: "Рабочие направления",
        premium: "Премиум-инструменты",
        free: "Бесплатные инструменты",
      },
    },
    suites: { eyebrow: "Наборы", heading: "Выберите набор и откройте его аддины.", addinsSuffix: "аддинов" },
    tiers: {
      eyebrow: "Бесплатно и Премиум",
      heading: "Начните бесплатно. Расширяйтесь, когда потребуется.",
      free: {
        badge: "Бесплатно · Без затрат",
        title: "Изучить BIMtools",
        items: [
          "Доступ к бесплатным аддинам внутри набора",
          "Установка и знакомство со средой BIMtools",
          "Просмотр руководств и функций",
          "Основа для решения, подходит ли Premium вашей команде",
          "Бесплатные инструменты навсегда, без ограничения по времени",
        ],
        cta: "Скачать пробную версию",
      },
      premium: {
        badge: "Премиум · Вводная цена 2026: 30 USD/мес, 75 USD/квартал или 250 USD/год",
        title: "Все премиум-аддины",
        items: [
          "Доступ ко всем премиум-аддинам по одной подписке",
          "Расширенная автоматизация моделирования, управления и конструкций",
          "Более высокая скорость выполнения повторяющихся задач и контроль модели",
          "Активация премиум-доступа после оплаты",
        ],
        customizationNote: "Интересуют только один-два премиум-аддина? Напишите нам — подготовим индивидуальное предложение.",
        subscriptionCta: "Смотреть премиум-подписку",
        contactCta: "Запросить активацию",
        privacyLabel: "Политика конфиденциальности BIMtools",
      },
    },
  },
  zh: {
    meta: {
      titleAbsolute: "BIMtools — Revit 插件套件 | Frata Ingenieros",
      description:
        "BIMtools 是 Frata Ingenieros 推出的 Revit 插件套件：包含 39 款用于导出、导航、结构、参数、机电（MEP）与 BIM 自动化的工具，其中 8 款高级插件起价为每月 30 美元。",
      keywords: [
        "revit 插件",
        "revit addins",
        "bim 自动化",
        "bim 咨询",
        "revit api 开发",
        "revit 手册",
        "bim 工具",
        "BIMtools",
        "revit 套件",
        "mep revit 插件",
      ],
      ogTitle: "BIMtools — Revit 插件套件 | Frata Ingenieros",
      ogDescription: "39 款 Revit 插件，其中 8 款高级插件起价每月 30 美元。涵盖导出、导航、结构、参数、机电及 BIM 工作流自动化。",
      ogImageAlt: "BIMtools - Frata Ingenieros 出品的 Revit 插件套件",
      ogLocale: "zh_CN",
    },
    hero: {
      offerBadge: "2026年优惠 · 高级订阅优惠价",
      heading: "由每天使用 Revit 的人开发的 Revit 插件。",
      intro: "这些工具可加速重复性工作、整理模型信息，并提升每天使用 Revit 的团队的工作效率。",
      subscriptionCta: "高级订阅",
      downloadCta: "下载安装程序",
      stats: {
        addins: "已记录插件数",
        areas: "工作领域数",
        premium: "高级工具数",
        free: "免费工具数",
      },
    },
    suites: { eyebrow: "套件", heading: "选择一个套件，进入其插件列表。", addinsSuffix: "个插件" },
    tiers: {
      eyebrow: "免费与高级版",
      heading: "免费开始，按需升级。",
      free: {
        badge: "免费 · 无需付费",
        title: "探索 BIMtools",
        items: [
          "访问套件内的免费插件",
          "安装并探索 BIMtools 环境",
          "查看使用手册与功能说明",
          "为判断高级版是否适合您的团队提供参考基础",
          "免费工具永久可用，无时间限制",
        ],
        cta: "下载试用版",
      },
      premium: {
        badge: "高级版 · 2026年优惠价：每月 30 美元、每季度 75 美元或每年 250 美元",
        title: "全部高级插件",
        items: [
          "一次订阅即可使用全部高级插件",
          "面向建模、管理与结构的高级自动化功能",
          "重复性工作更快，模型管控更精细",
          "付款后激活高级权限",
        ],
        customizationNote: "只对一两款高级插件感兴趣？联系我们，我们会为您定制方案。",
        subscriptionCta: "查看高级订阅",
        contactCta: "咨询激活事宜",
        privacyLabel: "BIMtools 隐私政策",
      },
    },
  },
};
