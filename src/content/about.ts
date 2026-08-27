import type { Locale } from "@/lib/locale";

export interface AboutValue {
  index: string;
  title: string;
  description: string;
}

export interface AboutTimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AboutPageContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; heading: string; intro: string; imageAlt: string };
  values: { eyebrow: string; items: AboutValue[] };
  timeline: { eyebrow: string; heading: string; items: AboutTimelineItem[] };
  strengths: { eyebrow: string; heading: string; imageAlt: string; items: string[] };
  cta: { heading: string; talkLabel: string; bimtoolsLabel: string };
}

export const aboutContent: Record<Locale, AboutPageContent> = {
  es: {
    meta: {
      title: "Nosotros",
      description:
        "Conoce a Frata Ingenieros, una firma orientada a consultoria BIM, modelado BIM y desarrollo tecnico para Revit o Tekla.",
    },
    hero: {
      eyebrow: "Nosotros",
      heading: "Ingeniería BIM con capacidad real de desarrollo.",
      intro:
        "Somos una firma peruana que conecta consultoría BIM, modelado, coordinación y software técnico. Nuestro diferencial: las herramientas que ofrecemos las construimos y las usamos en producción propia.",
      imageAlt: "Equipo de Frata Ingenieros",
    },
    values: {
      eyebrow: "Cómo trabajamos",
      items: [
        {
          index: "01",
          title: "Pensamiento técnico",
          description: "Decidimos desde la lógica de producción, coordinación y control de información.",
        },
        {
          index: "02",
          title: "Capacidad de ejecución",
          description: "No nos quedamos en discurso BIM: modelamos, coordinamos y desarrollamos herramientas útiles.",
        },
        {
          index: "03",
          title: "Cercanía con el problema real",
          description: "Trabajamos desde necesidades concretas de oficina técnica, obra, fabricación y software.",
        },
      ],
    },
    timeline: {
      eyebrow: "Trayectoria",
      heading: "De la práctica al producto.",
      items: [
        {
          year: "Origen",
          title: "Nacimos desde la práctica BIM",
          description:
            "Frata surge de la necesidad de resolver problemas reales de modelado, coordinación y producción en proyectos técnicos.",
        },
        {
          year: "Expansión",
          title: "De servicios a soluciones",
          description:
            "Evolucionamos del soporte BIM tradicional hacia una oferta que combina consultoría, modelado y automatización.",
        },
        {
          year: "Hoy",
          title: "Ingeniería con software propio",
          description:
            "BIMtools y el desarrollo para Revit y Tekla nos definen: no solo implementamos BIM, construimos capacidad técnica.",
        },
      ],
    },
    strengths: {
      eyebrow: "Fortalezas",
      heading: "BIM que se sostiene en obra, no en diapositivas.",
      imageAlt: "Capacidades BIM de Frata Ingenieros",
      items: [
        "Consultoría BIM con foco operativo, no solo documental.",
        "Modelado BIM integral para arquitectura, estructura y MEP.",
        "Addins y automatizaciones propias para Revit y Tekla.",
        "Acompañamiento a equipos en oficina técnica, obra y fabricación.",
      ],
    },
    cta: {
      heading: "¿Tu operación BIM necesita un equipo técnico de verdad?",
      talkLabel: "Hablemos",
      bimtoolsLabel: "Ver BIMtools",
    },
  },
  en: {
    meta: {
      title: "About",
      description:
        "Learn more about Frata Ingenieros, a firm focused on BIM consulting, BIM modeling and technical development for Revit or Tekla.",
    },
    hero: {
      eyebrow: "About us",
      heading: "BIM engineering with real development capacity.",
      intro:
        "We are a Peruvian firm connecting BIM consulting, modeling, coordination and technical software. Our differentiator: the tools we offer are built and used in our own production.",
      imageAlt: "Frata Ingenieros team",
    },
    values: {
      eyebrow: "How we work",
      items: [
        {
          index: "01",
          title: "Technical thinking",
          description: "We decide from the logic of production, coordination and information control.",
        },
        {
          index: "02",
          title: "Execution capability",
          description: "We don't stay in BIM discourse: we model, coordinate and build tools teams actually use.",
        },
        {
          index: "03",
          title: "Closeness to the real problem",
          description: "We work from concrete needs of technical offices, jobsites, fabrication and software.",
        },
      ],
    },
    timeline: {
      eyebrow: "Track record",
      heading: "From practice to product.",
      items: [
        {
          year: "Origin",
          title: "Born from BIM practice",
          description:
            "Frata was born from the need to solve real modeling, coordination and production problems in technical projects.",
        },
        {
          year: "Expansion",
          title: "From services to solutions",
          description:
            "We evolved from traditional BIM support into an offer combining consulting, modeling and automation.",
        },
        {
          year: "Today",
          title: "Engineering with our own software",
          description:
            "BIMtools and Revit/Tekla development define us: we don't just implement BIM, we build technical capacity.",
        },
      ],
    },
    strengths: {
      eyebrow: "Strengths",
      heading: "BIM that holds up on site, not on slides.",
      imageAlt: "Frata Ingenieros BIM capabilities",
      items: [
        "BIM consulting with an operational focus, not just documents.",
        "Comprehensive BIM modeling for architecture, structure and MEP.",
        "Our own addins and automation for Revit and Tekla.",
        "Support for teams in technical offices, jobsites and fabrication.",
      ],
    },
    cta: {
      heading: "Does your BIM operation need a real technical team?",
      talkLabel: "Let's talk",
      bimtoolsLabel: "View BIMtools",
    },
  },
  de: {
    meta: {
      title: "Über uns",
      description:
        "Lernen Sie Frata Ingenieros kennen, ein Unternehmen mit Fokus auf BIM-Beratung, BIM-Modellierung und technische Entwicklung für Revit oder Tekla.",
    },
    hero: {
      eyebrow: "Über uns",
      heading: "BIM-Engineering mit echter Entwicklungskompetenz.",
      intro:
        "Wir sind ein peruanisches Unternehmen, das BIM-Beratung, Modellierung, Koordination und technische Software verbindet. Unser Unterschied: Die Werkzeuge, die wir anbieten, bauen und nutzen wir auch in unserer eigenen Produktion.",
      imageAlt: "Team von Frata Ingenieros",
    },
    values: {
      eyebrow: "Wie wir arbeiten",
      items: [
        {
          index: "01",
          title: "Technisches Denken",
          description: "Wir entscheiden auf Basis von Produktions-, Koordinations- und Informationslogik.",
        },
        {
          index: "02",
          title: "Umsetzungsstärke",
          description:
            "Wir bleiben nicht bei BIM-Reden: Wir modellieren, koordinieren und entwickeln Werkzeuge, die Teams tatsächlich nutzen.",
        },
        {
          index: "03",
          title: "Nähe zum realen Problem",
          description:
            "Wir arbeiten ausgehend von konkreten Bedürfnissen aus Planungsbüro, Baustelle, Fertigung und Software.",
        },
      ],
    },
    timeline: {
      eyebrow: "Werdegang",
      heading: "Von der Praxis zum Produkt.",
      items: [
        {
          year: "Ursprung",
          title: "Aus der BIM-Praxis entstanden",
          description:
            "Frata entstand aus der Notwendigkeit, reale Probleme bei Modellierung, Koordination und Produktion in technischen Projekten zu lösen.",
        },
        {
          year: "Expansion",
          title: "Von Dienstleistungen zu Lösungen",
          description:
            "Wir entwickelten uns vom traditionellen BIM-Support zu einem Angebot, das Beratung, Modellierung und Automatisierung verbindet.",
        },
        {
          year: "Heute",
          title: "Engineering mit eigener Software",
          description:
            "BIMtools und die Entwicklung für Revit und Tekla definieren uns: Wir implementieren BIM nicht nur, wir bauen technische Kompetenz auf.",
        },
      ],
    },
    strengths: {
      eyebrow: "Stärken",
      heading: "BIM, das sich auf der Baustelle bewährt, nicht nur auf Folien.",
      imageAlt: "BIM-Kompetenzen von Frata Ingenieros",
      items: [
        "BIM-Beratung mit operativem Fokus, nicht nur dokumentarisch.",
        "Umfassende BIM-Modellierung für Architektur, Tragwerk und TGA.",
        "Eigene Addins und Automatisierungen für Revit und Tekla.",
        "Begleitung von Teams in Planungsbüro, Baustelle und Fertigung.",
      ],
    },
    cta: {
      heading: "Braucht Ihr BIM-Betrieb ein echtes technisches Team?",
      talkLabel: "Kontakt aufnehmen",
      bimtoolsLabel: "BIMtools ansehen",
    },
  },
  fr: {
    meta: {
      title: "À propos",
      description:
        "Découvrez Frata Ingenieros, une entreprise spécialisée dans le conseil BIM, la modélisation BIM et le développement technique pour Revit ou Tekla.",
    },
    hero: {
      eyebrow: "À propos",
      heading: "Ingénierie BIM avec une réelle capacité de développement.",
      intro:
        "Nous sommes une entreprise péruvienne qui relie conseil BIM, modélisation, coordination et logiciels techniques. Notre différence : les outils que nous proposons, nous les construisons et les utilisons dans notre propre production.",
      imageAlt: "Équipe de Frata Ingenieros",
    },
    values: {
      eyebrow: "Comment nous travaillons",
      items: [
        {
          index: "01",
          title: "Pensée technique",
          description:
            "Nous décidons à partir de la logique de production, de coordination et de contrôle de l'information.",
        },
        {
          index: "02",
          title: "Capacité d'exécution",
          description:
            "Nous ne restons pas dans le discours BIM : nous modélisons, coordonnons et développons des outils réellement utilisés.",
        },
        {
          index: "03",
          title: "Proximité avec le problème réel",
          description:
            "Nous partons des besoins concrets du bureau technique, du chantier, de la fabrication et du logiciel.",
        },
      ],
    },
    timeline: {
      eyebrow: "Parcours",
      heading: "De la pratique au produit.",
      items: [
        {
          year: "Origine",
          title: "Nés de la pratique du BIM",
          description:
            "Frata naît de la nécessité de résoudre de vrais problèmes de modélisation, de coordination et de production dans des projets techniques.",
        },
        {
          year: "Expansion",
          title: "Des services aux solutions",
          description:
            "Nous avons évolué du support BIM traditionnel vers une offre combinant conseil, modélisation et automatisation.",
        },
        {
          year: "Aujourd'hui",
          title: "L'ingénierie avec notre propre logiciel",
          description:
            "BIMtools et le développement pour Revit et Tekla nous définissent : nous ne faisons pas qu'implémenter le BIM, nous construisons une capacité technique.",
        },
      ],
    },
    strengths: {
      eyebrow: "Points forts",
      heading: "Du BIM qui tient sur le chantier, pas seulement sur des diapositives.",
      imageAlt: "Capacités BIM de Frata Ingenieros",
      items: [
        "Conseil BIM à orientation opérationnelle, pas seulement documentaire.",
        "Modélisation BIM complète pour l'architecture, la structure et le MEP.",
        "Addins et automatisations propriétaires pour Revit et Tekla.",
        "Accompagnement des équipes en bureau technique, chantier et fabrication.",
      ],
    },
    cta: {
      heading: "Votre activité BIM a-t-elle besoin d'une véritable équipe technique ?",
      talkLabel: "Discutons-en",
      bimtoolsLabel: "Voir BIMtools",
    },
  },
  it: {
    meta: {
      title: "Chi siamo",
      description:
        "Scopri Frata Ingenieros, un'azienda specializzata in consulenza BIM, modellazione BIM e sviluppo tecnico per Revit o Tekla.",
    },
    hero: {
      eyebrow: "Chi siamo",
      heading: "Ingegneria BIM con reale capacità di sviluppo.",
      intro:
        "Siamo un'azienda peruviana che unisce consulenza BIM, modellazione, coordinamento e software tecnico. Il nostro differenziale: gli strumenti che offriamo li costruiamo e li utilizziamo nella nostra stessa produzione.",
      imageAlt: "Team di Frata Ingenieros",
    },
    values: {
      eyebrow: "Come lavoriamo",
      items: [
        {
          index: "01",
          title: "Pensiero tecnico",
          description:
            "Decidiamo secondo la logica di produzione, coordinamento e controllo delle informazioni.",
        },
        {
          index: "02",
          title: "Capacità di esecuzione",
          description:
            "Non ci fermiamo al discorso BIM: modelliamo, coordiniamo e sviluppiamo strumenti realmente utili.",
        },
        {
          index: "03",
          title: "Vicinanza al problema reale",
          description:
            "Lavoriamo partendo da esigenze concrete di ufficio tecnico, cantiere, produzione e software.",
        },
      ],
    },
    timeline: {
      eyebrow: "Percorso",
      heading: "Dalla pratica al prodotto.",
      items: [
        {
          year: "Origine",
          title: "Nati dalla pratica BIM",
          description:
            "Frata nasce dalla necessità di risolvere problemi reali di modellazione, coordinamento e produzione in progetti tecnici.",
        },
        {
          year: "Espansione",
          title: "Da servizi a soluzioni",
          description:
            "Siamo passati dal supporto BIM tradizionale a un'offerta che combina consulenza, modellazione e automazione.",
        },
        {
          year: "Oggi",
          title: "Ingegneria con software proprietario",
          description:
            "BIMtools e lo sviluppo per Revit e Tekla ci definiscono: non ci limitiamo a implementare il BIM, costruiamo capacità tecnica.",
        },
      ],
    },
    strengths: {
      eyebrow: "Punti di forza",
      heading: "BIM che regge in cantiere, non solo sulle slide.",
      imageAlt: "Competenze BIM di Frata Ingenieros",
      items: [
        "Consulenza BIM con focus operativo, non solo documentale.",
        "Modellazione BIM integrale per architettura, strutture e impianti MEP.",
        "Addin e automazioni proprietarie per Revit e Tekla.",
        "Affiancamento dei team in ufficio tecnico, cantiere e produzione.",
      ],
    },
    cta: {
      heading: "La tua attività BIM ha bisogno di un vero team tecnico?",
      talkLabel: "Parliamone",
      bimtoolsLabel: "Vedi BIMtools",
    },
  },
  pt: {
    meta: {
      title: "Sobre nós",
      description:
        "Conheça a Frata Ingenieros, uma empresa focada em consultoria BIM, modelagem BIM e desenvolvimento técnico para Revit ou Tekla.",
    },
    hero: {
      eyebrow: "Sobre nós",
      heading: "Engenharia BIM com capacidade real de desenvolvimento.",
      intro:
        "Somos uma empresa peruana que conecta consultoria BIM, modelagem, coordenação e software técnico. Nosso diferencial: as ferramentas que oferecemos, nós mesmos construímos e usamos em nossa própria produção.",
      imageAlt: "Equipe da Frata Ingenieros",
    },
    values: {
      eyebrow: "Como trabalhamos",
      items: [
        {
          index: "01",
          title: "Pensamento técnico",
          description: "Decidimos com base na lógica de produção, coordenação e controle de informações.",
        },
        {
          index: "02",
          title: "Capacidade de execução",
          description:
            "Não ficamos no discurso BIM: modelamos, coordenamos e desenvolvemos ferramentas realmente úteis.",
        },
        {
          index: "03",
          title: "Proximidade com o problema real",
          description:
            "Trabalhamos a partir de necessidades concretas de escritório técnico, obra, fabricação e software.",
        },
      ],
    },
    timeline: {
      eyebrow: "Trajetória",
      heading: "Da prática ao produto.",
      items: [
        {
          year: "Origem",
          title: "Nascemos da prática BIM",
          description:
            "A Frata surge da necessidade de resolver problemas reais de modelagem, coordenação e produção em projetos técnicos.",
        },
        {
          year: "Expansão",
          title: "De serviços a soluções",
          description:
            "Evoluímos do suporte BIM tradicional para uma oferta que combina consultoria, modelagem e automação.",
        },
        {
          year: "Hoje",
          title: "Engenharia com software próprio",
          description:
            "O BIMtools e o desenvolvimento para Revit e Tekla nos definem: não apenas implementamos BIM, construímos capacidade técnica.",
        },
      ],
    },
    strengths: {
      eyebrow: "Pontos fortes",
      heading: "BIM que se sustenta na obra, não em slides.",
      imageAlt: "Capacidades BIM da Frata Ingenieros",
      items: [
        "Consultoria BIM com foco operacional, não apenas documental.",
        "Modelagem BIM integral para arquitetura, estrutura e MEP.",
        "Addins e automações próprias para Revit e Tekla.",
        "Acompanhamento de equipes em escritório técnico, obra e fabricação.",
      ],
    },
    cta: {
      heading: "Sua operação BIM precisa de uma equipe técnica de verdade?",
      talkLabel: "Fale conosco",
      bimtoolsLabel: "Ver BIMtools",
    },
  },
  ru: {
    meta: {
      title: "О нас",
      description:
        "Познакомьтесь с Frata Ingenieros — компанией, специализирующейся на BIM-консалтинге, BIM-моделировании и технической разработке для Revit или Tekla.",
    },
    hero: {
      eyebrow: "О нас",
      heading: "BIM-инжиниринг с реальными возможностями разработки.",
      intro:
        "Мы — перуанская компания, объединяющая BIM-консалтинг, моделирование, координацию и техническое программное обеспечение. Наше отличие: инструменты, которые мы предлагаем, мы сами создаём и используем в собственном производстве.",
      imageAlt: "Команда Frata Ingenieros",
    },
    values: {
      eyebrow: "Как мы работаем",
      items: [
        {
          index: "01",
          title: "Техническое мышление",
          description: "Мы принимаем решения исходя из логики производства, координации и контроля информации.",
        },
        {
          index: "02",
          title: "Способность к реализации",
          description:
            "Мы не останавливаемся на разговорах о BIM: мы моделируем, координируем и разрабатываем действительно полезные инструменты.",
        },
        {
          index: "03",
          title: "Близость к реальной проблеме",
          description:
            "Мы отталкиваемся от конкретных потребностей технического отдела, стройплощадки, производства и ПО.",
        },
      ],
    },
    timeline: {
      eyebrow: "История",
      heading: "От практики к продукту.",
      items: [
        {
          year: "Начало",
          title: "Мы родились из BIM-практики",
          description:
            "Frata возникла из необходимости решать реальные проблемы моделирования, координации и производства в технических проектах.",
        },
        {
          year: "Развитие",
          title: "От услуг к решениям",
          description:
            "Мы прошли путь от традиционной BIM-поддержки к предложению, объединяющему консалтинг, моделирование и автоматизацию.",
        },
        {
          year: "Сегодня",
          title: "Инжиниринг с собственным ПО",
          description:
            "BIMtools и разработка для Revit и Tekla определяют нас: мы не просто внедряем BIM, мы создаём техническую компетенцию.",
        },
      ],
    },
    strengths: {
      eyebrow: "Сильные стороны",
      heading: "BIM, который выдерживает проверку стройплощадкой, а не только слайдами.",
      imageAlt: "BIM-компетенции Frata Ingenieros",
      items: [
        "BIM-консалтинг с операционным фокусом, а не только документальным.",
        "Комплексное BIM-моделирование для архитектуры, конструкций и инженерных систем.",
        "Собственные аддины и автоматизация для Revit и Tekla.",
        "Сопровождение команд в техническом отделе, на стройплощадке и в производстве.",
      ],
    },
    cta: {
      heading: "Нужна ли вашей BIM-деятельности настоящая техническая команда?",
      talkLabel: "Обсудим проект",
      bimtoolsLabel: "Смотреть BIMtools",
    },
  },
  zh: {
    meta: {
      title: "关于我们",
      description: "了解 Frata Ingenieros —— 一家专注于为 Revit 或 Tekla 提供 BIM 咨询、BIM 建模与技术开发的公司。",
    },
    hero: {
      eyebrow: "关于我们",
      heading: "拥有真正开发能力的 BIM 工程团队。",
      intro:
        "我们是一家秘鲁公司，将 BIM 咨询、建模、协同与技术软件结合在一起。我们的差异化优势在于：我们提供的工具，都是我们自己开发并在实际生产中使用的。",
      imageAlt: "Frata Ingenieros 团队",
    },
    values: {
      eyebrow: "我们的工作方式",
      items: [
        {
          index: "01",
          title: "技术思维",
          description: "我们基于生产、协同与信息管控的逻辑做出决策。",
        },
        {
          index: "02",
          title: "执行能力",
          description: "我们不止于谈论 BIM：我们建模、协同，并开发团队真正会使用的工具。",
        },
        {
          index: "03",
          title: "贴近真实问题",
          description: "我们从技术办公室、施工现场、加工与软件的具体需求出发开展工作。",
        },
      ],
    },
    timeline: {
      eyebrow: "发展历程",
      heading: "从实践到产品。",
      items: [
        {
          year: "起源",
          title: "源于 BIM 实践",
          description: "Frata 源于解决技术项目中真实的建模、协同与生产问题的需要。",
        },
        {
          year: "扩展",
          title: "从服务到解决方案",
          description: "我们从传统的 BIM 支持发展为融合咨询、建模与自动化的综合服务。",
        },
        {
          year: "如今",
          title: "以自研软件驱动工程",
          description: "BIMtools 以及面向 Revit 和 Tekla 的开发定义了我们：我们不仅实施 BIM，更在构建技术能力。",
        },
      ],
    },
    strengths: {
      eyebrow: "核心优势",
      heading: "经得起施工现场检验的 BIM，而不只是幻灯片上的 BIM。",
      imageAlt: "Frata Ingenieros 的 BIM 能力",
      items: [
        "以运营为核心的 BIM 咨询，而不仅是文档层面。",
        "面向建筑、结构与机电的全面 BIM 建模。",
        "面向 Revit 与 Tekla 的自研插件与自动化方案。",
        "为技术办公室、施工现场与加工团队提供陪伴式支持。",
      ],
    },
    cta: {
      heading: "您的 BIM 运作是否需要一支真正的技术团队？",
      talkLabel: "联系我们",
      bimtoolsLabel: "查看 BIMtools",
    },
  },
};
