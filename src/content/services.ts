import type { Locale } from "@/lib/locale";

export interface ServicesPricingPlan {
  name: string;
  price: string;
  description: string;
  cta: string;
  href: string;
  highlight: boolean;
}

export interface ServicesPageContent {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; ogLocale: string };
  hero: { eyebrow: string; heading: { line1: string; line2: string }; intro: string };
  index: { serviceCta: string };
  pricing: {
    eyebrow: string;
    heading: string;
    intro: string;
    plans: ServicesPricingPlan[];
    disclaimer: string;
  };
  outcomes: { eyebrow: string; items: string[] };
}

export interface ServiceDetailPageContent {
  ogLocale: string;
  notFoundTitle: string;
  metaTitleOverrides: Partial<Record<string, string>>;
  backToServices: string;
  eyebrow: string;
  proposalCta: string;
  bimtoolsCta: string;
  pillars: { eyebrow: string; heading: string };
  method: { eyebrow: string; heading: string };
  outcomes: { eyebrow: string; heading: string };
  cta: { heading: string; label: string };
}

export const serviceDetailContent: Record<Locale, ServiceDetailPageContent> = {
  es: {
    ogLocale: "es_PE",
    notFoundTitle: "Servicio no encontrado",
    metaTitleOverrides: {
      "custom-bim-software-development": "Desarrollo de Addins Revit a Medida",
      "bim-training-and-implementation": "Implementación BIM para Empresas AEC",
    },
    backToServices: "Volver a servicios",
    eyebrow: "Servicio BIM",
    proposalCta: "Solicitar propuesta",
    bimtoolsCta: "Ver BIMtools",
    pillars: { eyebrow: "Pilares", heading: "Qué resuelve este servicio." },
    method: { eyebrow: "Método", heading: "Cómo trabajamos este tipo de encargo." },
    outcomes: { eyebrow: "Resultados", heading: "Impacto que puedes esperar." },
    cta: { heading: "¿Este es el problema que necesitas resolver?", label: "Hablar con Frata" },
  },
  en: {
    ogLocale: "en_US",
    notFoundTitle: "Service not found",
    metaTitleOverrides: {
      "custom-bim-software-development": "Custom Revit Addin Development",
      "bim-training-and-implementation": "BIM Implementation for AEC Companies",
    },
    backToServices: "Back to services",
    eyebrow: "BIM Service",
    proposalCta: "Request proposal",
    bimtoolsCta: "View BIMtools",
    pillars: { eyebrow: "Pillars", heading: "What this service solves." },
    method: { eyebrow: "Method", heading: "How we approach this kind of engagement." },
    outcomes: { eyebrow: "Outcomes", heading: "Impact you can expect." },
    cta: { heading: "Is this the problem you need solved?", label: "Talk to Frata" },
  },
  de: {
    ogLocale: "de_DE",
    notFoundTitle: "Leistung nicht gefunden",
    metaTitleOverrides: {
      "custom-bim-software-development": "Individuelle Revit-Addin-Entwicklung",
      "bim-training-and-implementation": "BIM-Implementierung für AEC-Unternehmen",
    },
    backToServices: "Zurück zu den Leistungen",
    eyebrow: "BIM-Leistung",
    proposalCta: "Angebot anfordern",
    bimtoolsCta: "BIMtools ansehen",
    pillars: { eyebrow: "Säulen", heading: "Was diese Leistung löst." },
    method: { eyebrow: "Methode", heading: "Wie wir diese Art von Auftrag angehen." },
    outcomes: { eyebrow: "Ergebnisse", heading: "Wirkung, die Sie erwarten können." },
    cta: { heading: "Ist das das Problem, das Sie lösen müssen?", label: "Mit Frata sprechen" },
  },
  fr: {
    ogLocale: "fr_FR",
    notFoundTitle: "Service introuvable",
    metaTitleOverrides: {
      "custom-bim-software-development": "Développement d'addins Revit sur mesure",
      "bim-training-and-implementation": "Implémentation BIM pour les entreprises AEC",
    },
    backToServices: "Retour aux services",
    eyebrow: "Service BIM",
    proposalCta: "Demander une proposition",
    bimtoolsCta: "Voir BIMtools",
    pillars: { eyebrow: "Piliers", heading: "Ce que résout ce service." },
    method: { eyebrow: "Méthode", heading: "Comment nous abordons ce type de mission." },
    outcomes: { eyebrow: "Résultats", heading: "L'impact que vous pouvez attendre." },
    cta: { heading: "Est-ce le problème que vous devez résoudre ?", label: "Parler à Frata" },
  },
  it: {
    ogLocale: "it_IT",
    notFoundTitle: "Servizio non trovato",
    metaTitleOverrides: {
      "custom-bim-software-development": "Sviluppo di Addin Revit su Misura",
      "bim-training-and-implementation": "Implementazione BIM per Aziende AEC",
    },
    backToServices: "Torna ai servizi",
    eyebrow: "Servizio BIM",
    proposalCta: "Richiedi una proposta",
    bimtoolsCta: "Vedi BIMtools",
    pillars: { eyebrow: "Pilastri", heading: "Cosa risolve questo servizio." },
    method: { eyebrow: "Metodo", heading: "Come affrontiamo questo tipo di incarico." },
    outcomes: { eyebrow: "Risultati", heading: "L'impatto che puoi aspettarti." },
    cta: { heading: "È questo il problema che devi risolvere?", label: "Parla con Frata" },
  },
  pt: {
    ogLocale: "pt_BR",
    notFoundTitle: "Serviço não encontrado",
    metaTitleOverrides: {
      "custom-bim-software-development": "Desenvolvimento de Addins Revit Sob Medida",
      "bim-training-and-implementation": "Implementação BIM para Empresas AEC",
    },
    backToServices: "Voltar aos serviços",
    eyebrow: "Serviço BIM",
    proposalCta: "Solicitar proposta",
    bimtoolsCta: "Ver BIMtools",
    pillars: { eyebrow: "Pilares", heading: "O que este serviço resolve." },
    method: { eyebrow: "Método", heading: "Como trabalhamos esse tipo de projeto." },
    outcomes: { eyebrow: "Resultados", heading: "Impacto que você pode esperar." },
    cta: { heading: "Esse é o problema que você precisa resolver?", label: "Falar com a Frata" },
  },
  ru: {
    ogLocale: "ru_RU",
    notFoundTitle: "Услуга не найдена",
    metaTitleOverrides: {
      "custom-bim-software-development": "Индивидуальная разработка аддинов для Revit",
      "bim-training-and-implementation": "Внедрение BIM для AEC-компаний",
    },
    backToServices: "Назад к услугам",
    eyebrow: "BIM-услуга",
    proposalCta: "Запросить предложение",
    bimtoolsCta: "Смотреть BIMtools",
    pillars: { eyebrow: "Основы", heading: "Что решает эта услуга." },
    method: { eyebrow: "Метод", heading: "Как мы подходим к такого рода задачам." },
    outcomes: { eyebrow: "Результаты", heading: "Эффект, которого можно ожидать." },
    cta: { heading: "Это та проблема, которую вам нужно решить?", label: "Связаться с Frata" },
  },
  zh: {
    ogLocale: "zh_CN",
    notFoundTitle: "未找到该服务",
    metaTitleOverrides: {
      "custom-bim-software-development": "Revit 插件定制开发",
      "bim-training-and-implementation": "面向 AEC 企业的 BIM 实施",
    },
    backToServices: "返回服务列表",
    eyebrow: "BIM 服务",
    proposalCta: "申请方案",
    bimtoolsCta: "查看 BIMtools",
    pillars: { eyebrow: "核心要素", heading: "该服务解决的问题。" },
    method: { eyebrow: "方法", heading: "我们如何处理此类项目。" },
    outcomes: { eyebrow: "成果", heading: "您可以期待的成效。" },
    cta: { heading: "这是您需要解决的问题吗？", label: "联系 Frata" },
  },
};

export const servicesContent: Record<Locale, ServicesPageContent> = {
  es: {
    meta: {
      title: "Servicios BIM",
      description:
        "Consultoría BIM, modelado, equipos remotos, soporte en obra y desarrollo de addins para Revit y Tekla. Servicios de Frata Ingenieros para empresas AEC en Perú y LATAM.",
      ogTitle: "Servicios BIM | Frata Ingenieros",
      ogDescription:
        "Consultoría BIM, modelado, equipos remotos, soporte en obra y desarrollo de addins para Revit y Tekla.",
      ogLocale: "es_PE",
    },
    hero: {
      eyebrow: "Servicios",
      heading: { line1: "Nuestras especialidades.", line2: "Lo único que ofrecemos." },
      intro:
        "Desde consultoría y modelado hasta software a medida. Cada servicio resuelve un problema real en la operación BIM de tu empresa.",
    },
    index: { serviceCta: "Ver servicio" },
    pricing: {
      eyebrow: "Inversión",
      heading: "¿Cuánto cuesta trabajar con Frata?",
      intro: "Los precios son referenciales. Cada proyecto se cotiza según alcance, complejidad y duración.",
      plans: [
        {
          name: "Diagnóstico BIM",
          price: "desde USD 500",
          description:
            "Revisamos tu operación BIM, identificamos brechas y entregamos un plan de acción claro con prioridades.",
          cta: "Solicitar diagnóstico",
          href: "/#contact",
          highlight: false,
        },
        {
          name: "Implementación BIM",
          price: "A consultar",
          description:
            "Estrategia, estandarización, capacitación y acompañamiento para consolidar BIM en tu empresa de forma sostenible.",
          cta: "Hablar con Frata",
          href: "/#contact",
          highlight: true,
        },
        {
          name: "Addin a medida",
          price: "desde USD 1,500",
          description:
            "Desarrollo de herramientas personalizadas para Revit o Tekla que automatizan flujos técnicos y reducen trabajo manual.",
          cta: "Solicitar propuesta",
          href: "/#contact",
          highlight: false,
        },
      ],
      disclaimer:
        "* Precios en USD. Los valores indicados son de referencia; cada propuesta se elabora según el alcance específico del proyecto.",
    },
    outcomes: {
      eyebrow: "Resultados",
      items: [
        "Equipos BIM más ordenados y con menos fricción operativa.",
        "Modelos coordinados listos para documentar, revisar y entregar.",
        "Software propio que automatiza tareas repetitivas de alto volumen.",
        "Procesos BIM que se mantienen aunque cambie el equipo.",
        "Entregables técnicos alineados al cliente y al proyecto real.",
        "Capacidad de producción que crece sin depender de un solo recurso.",
      ],
    },
  },
  en: {
    meta: {
      title: "BIM Services",
      description:
        "BIM consulting, modeling, remote teams, on-site support and custom Revit addin development. Frata Ingenieros services for AEC companies in Peru and LATAM.",
      ogTitle: "BIM Services | Frata Ingenieros",
      ogDescription:
        "BIM consulting, modeling, remote teams, on-site support and custom Revit addin development.",
      ogLocale: "en_US",
    },
    hero: {
      eyebrow: "Services",
      heading: { line1: "Our specialties.", line2: "The only thing we offer." },
      intro:
        "From consulting and modeling to custom software. Each service solves a real problem in your company's BIM operation.",
    },
    index: { serviceCta: "View service" },
    pricing: {
      eyebrow: "Pricing",
      heading: "How much does it cost to work with Frata?",
      intro: "Prices are indicative. Each project is quoted based on scope, complexity and duration.",
      plans: [
        {
          name: "BIM Assessment",
          price: "from USD 500",
          description:
            "We review your BIM operation, identify gaps and deliver a clear action plan with defined priorities.",
          cta: "Request assessment",
          href: "/#contact",
          highlight: false,
        },
        {
          name: "BIM Implementation",
          price: "Custom quote",
          description:
            "Strategy, standardization, training and follow-up to consolidate BIM in your company sustainably.",
          cta: "Talk to Frata",
          href: "/#contact",
          highlight: true,
        },
        {
          name: "Custom Addin",
          price: "from USD 1,500",
          description:
            "Purpose-built tools for Revit or Tekla that automate technical workflows and reduce manual work.",
          cta: "Request proposal",
          href: "/#contact",
          highlight: false,
        },
      ],
      disclaimer:
        "* Prices in USD. Values shown are indicative; each proposal is tailored to the specific project scope.",
    },
    outcomes: {
      eyebrow: "Outcomes",
      items: [
        "More organized BIM teams with less operational friction.",
        "Coordinated models ready to document, review and deliver.",
        "Purpose-built software that automates high-volume repetitive tasks.",
        "BIM processes that hold even when the team changes.",
        "Technical deliverables aligned to client and project requirements.",
        "Production capacity that scales without depending on a single resource.",
      ],
    },
  },
  de: {
    meta: {
      title: "BIM-Dienstleistungen",
      description:
        "BIM-Beratung, Modellierung, Remote-Teams, Unterstützung vor Ort und individuelle Revit-Addin-Entwicklung. Leistungen von Frata Ingenieros für AEC-Unternehmen in Peru und Lateinamerika.",
      ogTitle: "BIM-Dienstleistungen | Frata Ingenieros",
      ogDescription:
        "BIM-Beratung, Modellierung, Remote-Teams, Unterstützung vor Ort und individuelle Revit-Addin-Entwicklung.",
      ogLocale: "de_DE",
    },
    hero: {
      eyebrow: "Leistungen",
      heading: { line1: "Unsere Spezialisierungen.", line2: "Das Einzige, was wir anbieten." },
      intro:
        "Von Beratung und Modellierung bis hin zu individueller Software. Jede Leistung löst ein reales Problem in der BIM-Arbeit Ihres Unternehmens.",
    },
    index: { serviceCta: "Leistung ansehen" },
    pricing: {
      eyebrow: "Investition",
      heading: "Wie viel kostet die Zusammenarbeit mit Frata?",
      intro: "Die Preise sind Richtwerte. Jedes Projekt wird nach Umfang, Komplexität und Dauer kalkuliert.",
      plans: [
        {
          name: "BIM-Diagnose",
          price: "ab USD 500",
          description:
            "Wir prüfen Ihre BIM-Arbeit, identifizieren Lücken und liefern einen klaren Aktionsplan mit Prioritäten.",
          cta: "Diagnose anfordern",
          href: "/#contact",
          highlight: false,
        },
        {
          name: "BIM-Implementierung",
          price: "Auf Anfrage",
          description:
            "Strategie, Standardisierung, Schulung und Begleitung, um BIM nachhaltig in Ihrem Unternehmen zu verankern.",
          cta: "Mit Frata sprechen",
          href: "/#contact",
          highlight: true,
        },
        {
          name: "Individuelles Addin",
          price: "ab USD 1.500",
          description:
            "Entwicklung individueller Werkzeuge für Revit oder Tekla, die technische Abläufe automatisieren und manuelle Arbeit reduzieren.",
          cta: "Angebot anfordern",
          href: "/#contact",
          highlight: false,
        },
      ],
      disclaimer:
        "* Preise in USD. Die angegebenen Werte sind Richtwerte; jedes Angebot wird nach dem konkreten Projektumfang erstellt.",
    },
    outcomes: {
      eyebrow: "Ergebnisse",
      items: [
        "Besser organisierte BIM-Teams mit weniger operativer Reibung.",
        "Koordinierte Modelle, bereit für Dokumentation, Prüfung und Übergabe.",
        "Eigene Software, die repetitive Aufgaben mit hohem Volumen automatisiert.",
        "BIM-Prozesse, die auch bei Teamwechseln bestehen bleiben.",
        "Technische Leistungen, abgestimmt auf Kunde und reales Projekt.",
        "Produktionskapazität, die wächst, ohne von einer einzelnen Ressource abhängig zu sein.",
      ],
    },
  },
  fr: {
    meta: {
      title: "Services BIM",
      description:
        "Conseil BIM, modélisation, équipes à distance, support sur site et développement d'addins Revit sur mesure. Services de Frata Ingenieros pour les entreprises AEC au Pérou et en Amérique latine.",
      ogTitle: "Services BIM | Frata Ingenieros",
      ogDescription:
        "Conseil BIM, modélisation, équipes à distance, support sur site et développement d'addins Revit sur mesure.",
      ogLocale: "fr_FR",
    },
    hero: {
      eyebrow: "Services",
      heading: { line1: "Nos spécialités.", line2: "La seule chose que nous proposons." },
      intro:
        "Du conseil et de la modélisation aux logiciels sur mesure. Chaque service résout un problème réel dans l'activité BIM de votre entreprise.",
    },
    index: { serviceCta: "Voir le service" },
    pricing: {
      eyebrow: "Investissement",
      heading: "Combien coûte une collaboration avec Frata ?",
      intro: "Les prix sont indicatifs. Chaque projet est chiffré selon son périmètre, sa complexité et sa durée.",
      plans: [
        {
          name: "Diagnostic BIM",
          price: "à partir de 500 USD",
          description:
            "Nous examinons votre activité BIM, identifions les écarts et livrons un plan d'action clair avec des priorités.",
          cta: "Demander un diagnostic",
          href: "/#contact",
          highlight: false,
        },
        {
          name: "Implémentation BIM",
          price: "Sur devis",
          description:
            "Stratégie, standardisation, formation et accompagnement pour ancrer durablement le BIM dans votre entreprise.",
          cta: "Parler à Frata",
          href: "/#contact",
          highlight: true,
        },
        {
          name: "Addin sur mesure",
          price: "à partir de 1 500 USD",
          description:
            "Développement d'outils personnalisés pour Revit ou Tekla qui automatisent les flux techniques et réduisent le travail manuel.",
          cta: "Demander une proposition",
          href: "/#contact",
          highlight: false,
        },
      ],
      disclaimer:
        "* Prix en USD. Les valeurs indiquées sont indicatives ; chaque proposition est élaborée selon le périmètre spécifique du projet.",
    },
    outcomes: {
      eyebrow: "Résultats",
      items: [
        "Des équipes BIM plus organisées, avec moins de friction opérationnelle.",
        "Des modèles coordonnés prêts à documenter, réviser et livrer.",
        "Un logiciel propriétaire qui automatise les tâches répétitives à fort volume.",
        "Des processus BIM qui perdurent même en cas de changement d'équipe.",
        "Des livrables techniques alignés sur le client et le projet réel.",
        "Une capacité de production qui grandit sans dépendre d'une seule ressource.",
      ],
    },
  },
  it: {
    meta: {
      title: "Servizi BIM",
      description:
        "Consulenza BIM, modellazione, team da remoto, supporto in cantiere e sviluppo di addin Revit su misura. Servizi di Frata Ingenieros per aziende AEC in Perù e America Latina.",
      ogTitle: "Servizi BIM | Frata Ingenieros",
      ogDescription:
        "Consulenza BIM, modellazione, team da remoto, supporto in cantiere e sviluppo di addin Revit su misura.",
      ogLocale: "it_IT",
    },
    hero: {
      eyebrow: "Servizi",
      heading: { line1: "Le nostre specializzazioni.", line2: "L'unica cosa che offriamo." },
      intro:
        "Dalla consulenza e modellazione al software su misura. Ogni servizio risolve un problema reale nell'attività BIM della tua azienda.",
    },
    index: { serviceCta: "Vedi il servizio" },
    pricing: {
      eyebrow: "Investimento",
      heading: "Quanto costa lavorare con Frata?",
      intro: "I prezzi sono indicativi. Ogni progetto viene quotato in base ad ambito, complessità e durata.",
      plans: [
        {
          name: "Diagnosi BIM",
          price: "a partire da USD 500",
          description:
            "Analizziamo la tua attività BIM, identifichiamo le lacune e forniamo un piano d'azione chiaro con priorità definite.",
          cta: "Richiedi la diagnosi",
          href: "/#contact",
          highlight: false,
        },
        {
          name: "Implementazione BIM",
          price: "Su richiesta",
          description:
            "Strategia, standardizzazione, formazione e affiancamento per consolidare il BIM nella tua azienda in modo sostenibile.",
          cta: "Parla con Frata",
          href: "/#contact",
          highlight: true,
        },
        {
          name: "Addin su misura",
          price: "a partire da USD 1.500",
          description:
            "Sviluppo di strumenti personalizzati per Revit o Tekla che automatizzano i flussi tecnici e riducono il lavoro manuale.",
          cta: "Richiedi una proposta",
          href: "/#contact",
          highlight: false,
        },
      ],
      disclaimer:
        "* Prezzi in USD. I valori indicati sono a scopo indicativo; ogni proposta viene elaborata in base all'ambito specifico del progetto.",
    },
    outcomes: {
      eyebrow: "Risultati",
      items: [
        "Team BIM più organizzati e con meno attrito operativo.",
        "Modelli coordinati pronti per documentazione, revisione e consegna.",
        "Software proprietario che automatizza attività ripetitive ad alto volume.",
        "Processi BIM che si mantengono anche al cambio del team.",
        "Deliverable tecnici allineati al cliente e al progetto reale.",
        "Capacità produttiva che cresce senza dipendere da una singola risorsa.",
      ],
    },
  },
  pt: {
    meta: {
      title: "Serviços BIM",
      description:
        "Consultoria BIM, modelagem, equipes remotas, suporte em obra e desenvolvimento de addins Revit sob medida. Serviços da Frata Ingenieros para empresas AEC no Peru e na América Latina.",
      ogTitle: "Serviços BIM | Frata Ingenieros",
      ogDescription:
        "Consultoria BIM, modelagem, equipes remotas, suporte em obra e desenvolvimento de addins Revit sob medida.",
      ogLocale: "pt_BR",
    },
    hero: {
      eyebrow: "Serviços",
      heading: { line1: "Nossas especialidades.", line2: "A única coisa que oferecemos." },
      intro:
        "Da consultoria e modelagem ao software sob medida. Cada serviço resolve um problema real na operação BIM da sua empresa.",
    },
    index: { serviceCta: "Ver serviço" },
    pricing: {
      eyebrow: "Investimento",
      heading: "Quanto custa trabalhar com a Frata?",
      intro: "Os preços são referenciais. Cada projeto é cotado conforme escopo, complexidade e duração.",
      plans: [
        {
          name: "Diagnóstico BIM",
          price: "a partir de USD 500",
          description:
            "Analisamos sua operação BIM, identificamos lacunas e entregamos um plano de ação claro com prioridades.",
          cta: "Solicitar diagnóstico",
          href: "/#contact",
          highlight: false,
        },
        {
          name: "Implementação BIM",
          price: "A combinar",
          description:
            "Estratégia, padronização, capacitação e acompanhamento para consolidar o BIM na sua empresa de forma sustentável.",
          cta: "Falar com a Frata",
          href: "/#contact",
          highlight: true,
        },
        {
          name: "Addin sob medida",
          price: "a partir de USD 1.500",
          description:
            "Desenvolvimento de ferramentas personalizadas para Revit ou Tekla que automatizam fluxos técnicos e reduzem o trabalho manual.",
          cta: "Solicitar proposta",
          href: "/#contact",
          highlight: false,
        },
      ],
      disclaimer:
        "* Preços em USD. Os valores indicados são referenciais; cada proposta é elaborada conforme o escopo específico do projeto.",
    },
    outcomes: {
      eyebrow: "Resultados",
      items: [
        "Equipes BIM mais organizadas e com menos atrito operacional.",
        "Modelos coordenados prontos para documentar, revisar e entregar.",
        "Software próprio que automatiza tarefas repetitivas de alto volume.",
        "Processos BIM que se mantêm mesmo com mudanças na equipe.",
        "Entregáveis técnicos alinhados ao cliente e ao projeto real.",
        "Capacidade de produção que cresce sem depender de um único recurso.",
      ],
    },
  },
  ru: {
    meta: {
      title: "BIM-услуги",
      description:
        "BIM-консалтинг, моделирование, удалённые команды, поддержка на объекте и индивидуальная разработка аддинов для Revit. Услуги Frata Ingenieros для AEC-компаний в Перу и Латинской Америке.",
      ogTitle: "BIM-услуги | Frata Ingenieros",
      ogDescription:
        "BIM-консалтинг, моделирование, удалённые команды, поддержка на объекте и индивидуальная разработка аддинов для Revit.",
      ogLocale: "ru_RU",
    },
    hero: {
      eyebrow: "Услуги",
      heading: { line1: "Наши специализации.", line2: "Единственное, что мы предлагаем." },
      intro:
        "От консалтинга и моделирования до индивидуального ПО. Каждая услуга решает реальную проблему в BIM-деятельности вашей компании.",
    },
    index: { serviceCta: "Смотреть услугу" },
    pricing: {
      eyebrow: "Инвестиции",
      heading: "Сколько стоит работа с Frata?",
      intro: "Цены являются ориентировочными. Каждый проект оценивается индивидуально с учётом объёма, сложности и сроков.",
      plans: [
        {
          name: "BIM-диагностика",
          price: "от 500 USD",
          description:
            "Анализируем вашу BIM-деятельность, выявляем пробелы и предоставляем чёткий план действий с приоритетами.",
          cta: "Запросить диагностику",
          href: "/#contact",
          highlight: false,
        },
        {
          name: "Внедрение BIM",
          price: "По запросу",
          description:
            "Стратегия, стандартизация, обучение и сопровождение для устойчивого внедрения BIM в вашей компании.",
          cta: "Связаться с Frata",
          href: "/#contact",
          highlight: true,
        },
        {
          name: "Индивидуальный аддин",
          price: "от 1500 USD",
          description:
            "Разработка индивидуальных инструментов для Revit или Tekla, автоматизирующих технические процессы и снижающих объём ручного труда.",
          cta: "Запросить предложение",
          href: "/#contact",
          highlight: false,
        },
      ],
      disclaimer:
        "* Цены указаны в USD. Приведённые значения ориентировочны; каждое предложение формируется исходя из конкретного объёма проекта.",
    },
    outcomes: {
      eyebrow: "Результаты",
      items: [
        "Более организованные BIM-команды с меньшим числом операционных сбоев.",
        "Скоординированные модели, готовые к документированию, проверке и передаче.",
        "Собственное ПО, автоматизирующее повторяющиеся задачи большого объёма.",
        "BIM-процессы, которые сохраняются даже при смене состава команды.",
        "Технические результаты, соответствующие клиенту и реальному проекту.",
        "Производственная мощность, растущая без зависимости от одного ресурса.",
      ],
    },
  },
  zh: {
    meta: {
      title: "BIM 服务",
      description: "为秘鲁及拉丁美洲的 AEC 企业提供 BIM 咨询、建模、远程团队、现场支持与 Revit 插件定制开发等 Frata Ingenieros 服务。",
      ogTitle: "BIM 服务 | Frata Ingenieros",
      ogDescription: "BIM 咨询、建模、远程团队、现场支持与 Revit 插件定制开发。",
      ogLocale: "zh_CN",
    },
    hero: {
      eyebrow: "服务",
      heading: { line1: "我们的专长领域。", line2: "我们只做这一件事。" },
      intro: "从咨询、建模到定制软件。每项服务都解决贵公司 BIM 运营中的真实问题。",
    },
    index: { serviceCta: "查看服务" },
    pricing: {
      eyebrow: "投资费用",
      heading: "与 Frata 合作需要多少费用？",
      intro: "以下价格仅供参考，每个项目将根据范围、复杂度与周期单独报价。",
      plans: [
        {
          name: "BIM 诊断",
          price: "起价 500 美元",
          description: "评估您的 BIM 运营现状，识别差距，并提供明确的行动计划与优先事项。",
          cta: "申请诊断",
          href: "/#contact",
          highlight: false,
        },
        {
          name: "BIM 实施",
          price: "面议",
          description: "提供战略、标准化、培训与陪伴式支持，帮助贵公司可持续地落地 BIM。",
          cta: "联系 Frata",
          href: "/#contact",
          highlight: true,
        },
        {
          name: "定制插件",
          price: "起价 1,500 美元",
          description: "为 Revit 或 Tekla 开发定制工具，实现技术流程自动化并减少人工操作。",
          cta: "申请方案",
          href: "/#contact",
          highlight: false,
        },
      ],
      disclaimer: "* 价格以美元计。所示数值仅供参考；每份方案将根据项目的具体范围制定。",
    },
    outcomes: {
      eyebrow: "成效",
      items: [
        "BIM 团队更加规范，运营摩擦更少。",
        "协同模型可直接用于文档编制、审核与交付。",
        "自研软件可自动化大批量重复性任务。",
        "即使团队变动，BIM 流程依然保持稳定。",
        "技术交付物与客户及实际项目保持一致。",
        "生产能力持续增长，不依赖单一资源。",
      ],
    },
  },
};
