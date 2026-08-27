import type { Locale } from "@/lib/locale";

export interface HomeServiceCard {
  index: string;
  title: string;
  description: string;
  href: string;
}

export interface HomeProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface HomePageContent {
  meta: {
    titleAbsolute: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    ogLocale: string;
  };
  hero: {
    eyebrow: string;
    heading: { line1: string; line2: string };
    intro: string;
    talkCta: string;
    servicesCta: string;
    stats: { bimtoolsUsers: string; publishedAddins: string; deliveredProjects: string };
  };
  manifesto: { eyebrow: string; heading: { line1: string; line2: string }; points: string[] };
  services: { eyebrow: string; heading: string; cta: string; items: HomeServiceCard[] };
  projects: { eyebrow: string; heading: string; viewAllCta: string };
  process: { eyebrow: string; heading: string; steps: HomeProcessStep[] };
  bimtools: {
    eyebrow: string;
    heading: string;
    intro: string;
    exploreCta: string;
    customDevCta: string;
    imageAlt: string;
  };
}

export const homeContent: Record<Locale, HomePageContent> = {
  es: {
    meta: {
      titleAbsolute: "Frata Ingenieros · Consultoría BIM y Addins para Revit | Perú LATAM",
      description:
        "Frata Ingenieros desarrolla consultoría BIM, modelado BIM, coordinación digital y aplicaciones para Revit o Tekla con foco en productividad y control técnico.",
      ogTitle: "Frata Ingenieros · Consultoría BIM y Addins para Revit | Perú LATAM",
      ogDescription:
        "Consultoría BIM, modelado BIM y desarrollo de addins para Revit y Tekla. Empresa peruana con alcance LATAM.",
      ogImageAlt: "Frata Ingenieros - Consultoría BIM y Addins para Revit",
      ogLocale: "es_PE",
    },
    hero: {
      eyebrow: "Consultoría BIM · Perú → LATAM",
      heading: { line1: "BIM que se construye.", line2: "No BIM que se presenta." },
      intro:
        "Consultoría, modelado y desarrollo de software para Revit y Tekla. Ayudamos a empresas AEC a convertir BIM en capacidad real de producción.",
      talkCta: "Hablemos",
      servicesCta: "Ver servicios",
      stats: {
        bimtoolsUsers: "Usuarios de BIMtools",
        publishedAddins: "Addins publicados",
        deliveredProjects: "Proyectos BIM entregados",
      },
    },
    manifesto: {
      eyebrow: "Enfoque",
      heading: { line1: "No somos proveedores.", line2: "Somos tu equipo técnico." },
      points: [
        "Implementamos BIM en procesos reales de obra y oficina técnica, no en presentaciones.",
        "Modelamos estructuras y detalle de fabricación con control y trazabilidad.",
        "Desarrollamos addins propios porque los usamos en nuestra propia producción.",
        "Construimos sobre Revit API, IFC y flujos abiertos. Sin cajas negras.",
      ],
    },
    services: {
      eyebrow: "Servicios",
      heading: "Lo único que ofrecemos: lo que sabemos hacer bien.",
      cta: "Ver servicio",
      items: [
        {
          index: "01",
          title: "Consultoría BIM",
          description:
            "Estrategia, estándares, coordinación y acompañamiento para empresas que necesitan ordenar su operación BIM.",
          href: "/services/bim-training-and-implementation",
        },
        {
          index: "02",
          title: "Modelado BIM",
          description:
            "Modelos coordinados de arquitectura, estructuras y MEP para diseño, obra, metrados y control documental.",
          href: "/services/comprehensive-bim-modeling",
        },
        {
          index: "03",
          title: "Desarrollo Revit y Tekla",
          description:
            "Addins, automatizaciones y aplicaciones técnicas que eliminan trabajo manual en tu flujo de producción.",
          href: "/services/custom-bim-software-development",
        },
        {
          index: "04",
          title: "Soporte BIM en obra",
          description:
            "Asistencia directa para resolver interferencias, revisar modelos y conectar el modelo con la ejecución real.",
          href: "/services/on-site-bim-construction-support",
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      heading: "Trabajo que ya está construido.",
      viewAllCta: "Ver todos los casos",
    },
    process: {
      eyebrow: "Método",
      heading: "Un proceso claro, de diagnóstico a producción.",
      steps: [
        {
          index: "01",
          title: "Diagnóstico técnico",
          description: "Revisamos tu flujo BIM, puntos de dolor, software y objetivos de negocio.",
        },
        {
          index: "02",
          title: "Definición de alcance",
          description: "Priorizamos entregables, estándares, automatizaciones o desarrollo a medida.",
        },
        {
          index: "03",
          title: "Implementación",
          description: "Ejecutamos modelado, consultoría, soporte o desarrollo con seguimiento claro.",
        },
        {
          index: "04",
          title: "Escalado y soporte",
          description: "Documentamos, capacitamos y dejamos una base para crecer con menos dependencia manual.",
        },
      ],
    },
    bimtools: {
      eyebrow: "Producto propio · BIMtools",
      heading: "Construimos las herramientas que usamos.",
      intro:
        "BIMtools nació dentro de nuestros propios proyectos: addins para Revit que eliminan tareas repetitivas, exportaciones manuales y control de parámetros. Hoy los usan equipos técnicos en todo LATAM.",
      exploreCta: "Explorar BIMtools",
      customDevCta: "Desarrollo a medida",
      imageAlt: "Desarrollo de software BIM para Revit y Tekla",
    },
  },
  en: {
    meta: {
      titleAbsolute: "Frata Ingenieros · BIM Consulting and Revit Addins | Peru LATAM",
      description:
        "Frata Ingenieros delivers BIM consulting, BIM modeling, digital coordination and Revit addins focused on productivity and technical control for AEC teams in Peru and LATAM.",
      ogTitle: "Frata Ingenieros · BIM Consulting and Revit Addins | Peru LATAM",
      ogDescription:
        "BIM consulting, BIM modeling and Revit addin development. Peruvian firm serving AEC teams across LATAM.",
      ogImageAlt: "Frata Ingenieros - BIM Consulting and Revit Addins",
      ogLocale: "en_US",
    },
    hero: {
      eyebrow: "BIM Consulting · Peru → LATAM",
      heading: { line1: "BIM that gets built.", line2: "Not BIM that gets presented." },
      intro:
        "Consulting, modeling and software development for Revit and Tekla. We help AEC companies turn BIM into real production capacity.",
      talkCta: "Let's talk",
      servicesCta: "View services",
      stats: {
        bimtoolsUsers: "BIMtools users",
        publishedAddins: "Published addins",
        deliveredProjects: "BIM projects delivered",
      },
    },
    manifesto: {
      eyebrow: "Approach",
      heading: { line1: "We are not vendors.", line2: "We are your technical team." },
      points: [
        "We implement BIM in real construction and technical-office processes, not in slide decks.",
        "We model structures and fabrication detail with control and traceability.",
        "We build our own addins because we use them in our own production.",
        "We build on Revit API, IFC and open workflows. No black boxes.",
      ],
    },
    services: {
      eyebrow: "Services",
      heading: "The only thing we offer: what we do well.",
      cta: "View service",
      items: [
        {
          index: "01",
          title: "BIM consulting",
          description:
            "Strategy, standards, coordination and hands-on support for companies that need to structure their BIM operation.",
          href: "/services/bim-training-and-implementation",
        },
        {
          index: "02",
          title: "BIM modeling",
          description:
            "Coordinated architecture, structure and MEP models for design, construction, quantities and document control.",
          href: "/services/comprehensive-bim-modeling",
        },
        {
          index: "03",
          title: "Revit and Tekla development",
          description:
            "Addins, automation and technical applications that remove manual work from your production workflow.",
          href: "/services/custom-bim-software-development",
        },
        {
          index: "04",
          title: "On-site BIM support",
          description:
            "Direct assistance to resolve clashes, review models and connect the model with real execution.",
          href: "/services/on-site-bim-construction-support",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      heading: "Work that is already built.",
      viewAllCta: "View all case studies",
    },
    process: {
      eyebrow: "Method",
      heading: "A clear process, from diagnosis to production.",
      steps: [
        {
          index: "01",
          title: "Technical diagnosis",
          description: "We review your BIM workflow, pain points, software and business goals.",
        },
        {
          index: "02",
          title: "Scope definition",
          description: "We prioritize deliverables, standards, automation or custom development.",
        },
        {
          index: "03",
          title: "Implementation",
          description: "We execute modeling, consulting, support or development with clear tracking.",
        },
        {
          index: "04",
          title: "Scaling and support",
          description: "We document, train and leave a base to grow with less manual dependency.",
        },
      ],
    },
    bimtools: {
      eyebrow: "Own product · BIMtools",
      heading: "We build the tools we use.",
      intro:
        "BIMtools was born inside our own projects: Revit addins that remove repetitive tasks, manual exports and parameter control. Today technical teams across LATAM rely on them.",
      exploreCta: "Explore BIMtools",
      customDevCta: "Custom development",
      imageAlt: "BIM software development for Revit and Tekla",
    },
  },
  de: {
    meta: {
      titleAbsolute: "Frata Ingenieros · BIM-Beratung und Revit-Addins | Peru LATAM",
      description:
        "Frata Ingenieros bietet BIM-Beratung, BIM-Modellierung, digitale Koordination und Revit-Addins mit Fokus auf Produktivität und technische Kontrolle für AEC-Teams in Peru und Lateinamerika.",
      ogTitle: "Frata Ingenieros · BIM-Beratung und Revit-Addins | Peru LATAM",
      ogDescription:
        "BIM-Beratung, BIM-Modellierung und Entwicklung von Revit-Addins. Peruanisches Unternehmen mit Reichweite in ganz Lateinamerika.",
      ogImageAlt: "Frata Ingenieros – BIM-Beratung und Revit-Addins",
      ogLocale: "de_DE",
    },
    hero: {
      eyebrow: "BIM-Beratung · Peru → LATAM",
      heading: { line1: "BIM, das gebaut wird.", line2: "Nicht BIM, das nur präsentiert wird." },
      intro:
        "Beratung, Modellierung und Softwareentwicklung für Revit und Tekla. Wir helfen AEC-Unternehmen, BIM in echte Produktionskapazität zu verwandeln.",
      talkCta: "Kontakt aufnehmen",
      servicesCta: "Leistungen ansehen",
      stats: {
        bimtoolsUsers: "BIMtools-Nutzer",
        publishedAddins: "Veröffentlichte Addins",
        deliveredProjects: "Abgeschlossene BIM-Projekte",
      },
    },
    manifesto: {
      eyebrow: "Ansatz",
      heading: { line1: "Wir sind keine Zulieferer.", line2: "Wir sind Ihr technisches Team." },
      points: [
        "Wir setzen BIM in echten Bau- und Planungsprozessen um, nicht in Präsentationen.",
        "Wir modellieren Tragwerke und Fertigungsdetails mit Kontrolle und Nachverfolgbarkeit.",
        "Wir entwickeln eigene Addins, weil wir sie in unserer eigenen Produktion einsetzen.",
        "Wir bauen auf der Revit-API, IFC und offenen Workflows auf. Keine Blackboxes.",
      ],
    },
    services: {
      eyebrow: "Leistungen",
      heading: "Das Einzige, was wir anbieten: das, was wir gut können.",
      cta: "Leistung ansehen",
      items: [
        {
          index: "01",
          title: "BIM-Beratung",
          description:
            "Strategie, Standards, Koordination und Begleitung für Unternehmen, die ihre BIM-Arbeit strukturieren müssen.",
          href: "/services/bim-training-and-implementation",
        },
        {
          index: "02",
          title: "BIM-Modellierung",
          description:
            "Koordinierte Architektur-, Tragwerks- und TGA-Modelle für Planung, Bau, Mengenermittlung und Dokumentenkontrolle.",
          href: "/services/comprehensive-bim-modeling",
        },
        {
          index: "03",
          title: "Revit- und Tekla-Entwicklung",
          description:
            "Addins, Automatisierungen und technische Anwendungen, die manuelle Arbeit in Ihrem Produktionsablauf eliminieren.",
          href: "/services/custom-bim-software-development",
        },
        {
          index: "04",
          title: "BIM-Unterstützung vor Ort",
          description:
            "Direkte Unterstützung zur Lösung von Kollisionen, Modellprüfung und Verbindung des Modells mit der realen Ausführung.",
          href: "/services/on-site-bim-construction-support",
        },
      ],
    },
    projects: {
      eyebrow: "Projekte",
      heading: "Arbeit, die bereits gebaut ist.",
      viewAllCta: "Alle Referenzen ansehen",
    },
    process: {
      eyebrow: "Methode",
      heading: "Ein klarer Prozess, von der Diagnose bis zur Produktion.",
      steps: [
        {
          index: "01",
          title: "Technische Diagnose",
          description: "Wir prüfen Ihren BIM-Workflow, Schwachstellen, Software und Geschäftsziele.",
        },
        {
          index: "02",
          title: "Festlegung des Umfangs",
          description: "Wir priorisieren Leistungen, Standards, Automatisierung oder individuelle Entwicklung.",
        },
        {
          index: "03",
          title: "Umsetzung",
          description: "Wir führen Modellierung, Beratung, Support oder Entwicklung mit klarer Nachverfolgung durch.",
        },
        {
          index: "04",
          title: "Skalierung und Support",
          description:
            "Wir dokumentieren, schulen und legen eine Basis für Wachstum mit weniger manueller Abhängigkeit.",
        },
      ],
    },
    bimtools: {
      eyebrow: "Eigenes Produkt · BIMtools",
      heading: "Wir bauen die Werkzeuge, die wir selbst nutzen.",
      intro:
        "BIMtools entstand innerhalb unserer eigenen Projekte: Revit-Addins, die sich wiederholende Aufgaben, manuelle Exporte und Parameterkontrolle überflüssig machen. Heute setzen technische Teams in ganz Lateinamerika darauf.",
      exploreCta: "BIMtools entdecken",
      customDevCta: "Individuelle Entwicklung",
      imageAlt: "BIM-Softwareentwicklung für Revit und Tekla",
    },
  },
  fr: {
    meta: {
      titleAbsolute: "Frata Ingenieros · Conseil BIM et Addins Revit | Pérou LATAM",
      description:
        "Frata Ingenieros propose du conseil BIM, de la modélisation BIM, de la coordination numérique et des addins Revit, avec un focus sur la productivité et le contrôle technique pour les équipes AEC au Pérou et en Amérique latine.",
      ogTitle: "Frata Ingenieros · Conseil BIM et Addins Revit | Pérou LATAM",
      ogDescription:
        "Conseil BIM, modélisation BIM et développement d'addins Revit. Entreprise péruvienne avec une portée sur toute l'Amérique latine.",
      ogImageAlt: "Frata Ingenieros - Conseil BIM et Addins Revit",
      ogLocale: "fr_FR",
    },
    hero: {
      eyebrow: "Conseil BIM · Pérou → LATAM",
      heading: { line1: "Du BIM qui se construit.", line2: "Pas du BIM qui se présente." },
      intro:
        "Conseil, modélisation et développement logiciel pour Revit et Tekla. Nous aidons les entreprises AEC à transformer le BIM en réelle capacité de production.",
      talkCta: "Discutons-en",
      servicesCta: "Voir les services",
      stats: {
        bimtoolsUsers: "Utilisateurs de BIMtools",
        publishedAddins: "Addins publiés",
        deliveredProjects: "Projets BIM livrés",
      },
    },
    manifesto: {
      eyebrow: "Approche",
      heading: { line1: "Nous ne sommes pas des prestataires.", line2: "Nous sommes votre équipe technique." },
      points: [
        "Nous déployons le BIM dans de vrais processus de chantier et de bureau technique, pas dans des présentations.",
        "Nous modélisons les structures et les détails de fabrication avec contrôle et traçabilité.",
        "Nous développons nos propres addins parce que nous les utilisons dans notre propre production.",
        "Nous construisons sur l'API Revit, l'IFC et des flux ouverts. Sans boîtes noires.",
      ],
    },
    services: {
      eyebrow: "Services",
      heading: "La seule chose que nous proposons : ce que nous savons bien faire.",
      cta: "Voir le service",
      items: [
        {
          index: "01",
          title: "Conseil BIM",
          description:
            "Stratégie, standards, coordination et accompagnement pour les entreprises qui doivent structurer leur activité BIM.",
          href: "/services/bim-training-and-implementation",
        },
        {
          index: "02",
          title: "Modélisation BIM",
          description:
            "Modèles coordonnés d'architecture, de structure et de MEP pour la conception, le chantier, les métrés et le contrôle documentaire.",
          href: "/services/comprehensive-bim-modeling",
        },
        {
          index: "03",
          title: "Développement Revit et Tekla",
          description:
            "Addins, automatisations et applications techniques qui éliminent le travail manuel de votre flux de production.",
          href: "/services/custom-bim-software-development",
        },
        {
          index: "04",
          title: "Support BIM sur chantier",
          description:
            "Assistance directe pour résoudre les interférences, revoir les modèles et relier le modèle à l'exécution réelle.",
          href: "/services/on-site-bim-construction-support",
        },
      ],
    },
    projects: {
      eyebrow: "Projets",
      heading: "Un travail déjà construit.",
      viewAllCta: "Voir toutes les études de cas",
    },
    process: {
      eyebrow: "Méthode",
      heading: "Un processus clair, du diagnostic à la production.",
      steps: [
        {
          index: "01",
          title: "Diagnostic technique",
          description: "Nous examinons votre flux BIM, vos points de friction, vos logiciels et vos objectifs business.",
        },
        {
          index: "02",
          title: "Définition du périmètre",
          description: "Nous priorisons les livrables, les standards, l'automatisation ou le développement sur mesure.",
        },
        {
          index: "03",
          title: "Mise en œuvre",
          description: "Nous réalisons la modélisation, le conseil, le support ou le développement avec un suivi clair.",
        },
        {
          index: "04",
          title: "Montée en charge et support",
          description: "Nous documentons, formons et posons une base pour grandir avec moins de dépendance manuelle.",
        },
      ],
    },
    bimtools: {
      eyebrow: "Produit maison · BIMtools",
      heading: "Nous construisons les outils que nous utilisons.",
      intro:
        "BIMtools est né au sein de nos propres projets : des addins Revit qui suppriment les tâches répétitives, les exports manuels et le contrôle des paramètres. Aujourd'hui, des équipes techniques dans toute l'Amérique latine s'appuient dessus.",
      exploreCta: "Découvrir BIMtools",
      customDevCta: "Développement sur mesure",
      imageAlt: "Développement de logiciels BIM pour Revit et Tekla",
    },
  },
  it: {
    meta: {
      titleAbsolute: "Frata Ingenieros · Consulenza BIM e Addin per Revit | Perù LATAM",
      description:
        "Frata Ingenieros offre consulenza BIM, modellazione BIM, coordinamento digitale e addin per Revit, con un focus su produttività e controllo tecnico per i team AEC in Perù e in America Latina.",
      ogTitle: "Frata Ingenieros · Consulenza BIM e Addin per Revit | Perù LATAM",
      ogDescription:
        "Consulenza BIM, modellazione BIM e sviluppo di addin per Revit. Azienda peruviana con presenza in tutta l'America Latina.",
      ogImageAlt: "Frata Ingenieros - Consulenza BIM e Addin per Revit",
      ogLocale: "it_IT",
    },
    hero: {
      eyebrow: "Consulenza BIM · Perù → LATAM",
      heading: { line1: "BIM che si costruisce.", line2: "Non BIM che si presenta." },
      intro:
        "Consulenza, modellazione e sviluppo software per Revit e Tekla. Aiutiamo le aziende AEC a trasformare il BIM in una reale capacità produttiva.",
      talkCta: "Parliamone",
      servicesCta: "Vedi i servizi",
      stats: {
        bimtoolsUsers: "Utenti di BIMtools",
        publishedAddins: "Addin pubblicati",
        deliveredProjects: "Progetti BIM consegnati",
      },
    },
    manifesto: {
      eyebrow: "Approccio",
      heading: { line1: "Non siamo fornitori.", line2: "Siamo il vostro team tecnico." },
      points: [
        "Applichiamo il BIM in processi reali di cantiere e ufficio tecnico, non nelle presentazioni.",
        "Modelliamo strutture e dettagli di fabbricazione con controllo e tracciabilità.",
        "Sviluppiamo addin proprietari perché li utilizziamo nella nostra stessa produzione.",
        "Costruiamo su Revit API, IFC e flussi aperti. Nessuna scatola nera.",
      ],
    },
    services: {
      eyebrow: "Servizi",
      heading: "L'unica cosa che offriamo: ciò che sappiamo fare bene.",
      cta: "Vedi il servizio",
      items: [
        {
          index: "01",
          title: "Consulenza BIM",
          description:
            "Strategia, standard, coordinamento e affiancamento per aziende che devono strutturare la propria attività BIM.",
          href: "/services/bim-training-and-implementation",
        },
        {
          index: "02",
          title: "Modellazione BIM",
          description:
            "Modelli coordinati di architettura, strutture e impianti MEP per progettazione, cantiere, computi metrici e controllo documentale.",
          href: "/services/comprehensive-bim-modeling",
        },
        {
          index: "03",
          title: "Sviluppo Revit e Tekla",
          description:
            "Addin, automazioni e applicazioni tecniche che eliminano il lavoro manuale dal vostro flusso di produzione.",
          href: "/services/custom-bim-software-development",
        },
        {
          index: "04",
          title: "Supporto BIM in cantiere",
          description:
            "Assistenza diretta per risolvere interferenze, rivedere i modelli e collegare il modello all'esecuzione reale.",
          href: "/services/on-site-bim-construction-support",
        },
      ],
    },
    projects: {
      eyebrow: "Progetti",
      heading: "Lavoro già costruito.",
      viewAllCta: "Vedi tutti i casi studio",
    },
    process: {
      eyebrow: "Metodo",
      heading: "Un processo chiaro, dalla diagnosi alla produzione.",
      steps: [
        {
          index: "01",
          title: "Diagnosi tecnica",
          description: "Analizziamo il vostro flusso BIM, i punti critici, il software e gli obiettivi di business.",
        },
        {
          index: "02",
          title: "Definizione dell'ambito",
          description: "Definiamo le priorità tra deliverable, standard, automazione o sviluppo su misura.",
        },
        {
          index: "03",
          title: "Implementazione",
          description: "Eseguiamo modellazione, consulenza, supporto o sviluppo con un monitoraggio chiaro.",
        },
        {
          index: "04",
          title: "Scalabilità e supporto",
          description: "Documentiamo, formiamo e lasciamo una base per crescere con meno dipendenza manuale.",
        },
      ],
    },
    bimtools: {
      eyebrow: "Prodotto proprietario · BIMtools",
      heading: "Costruiamo gli strumenti che usiamo.",
      intro:
        "BIMtools è nato all'interno dei nostri stessi progetti: addin per Revit che eliminano attività ripetitive, esportazioni manuali e controllo dei parametri. Oggi sono utilizzati da team tecnici in tutta l'America Latina.",
      exploreCta: "Esplora BIMtools",
      customDevCta: "Sviluppo su misura",
      imageAlt: "Sviluppo di software BIM per Revit e Tekla",
    },
  },
  pt: {
    meta: {
      titleAbsolute: "Frata Ingenieros · Consultoria BIM e Addins para Revit | Peru LATAM",
      description:
        "A Frata Ingenieros oferece consultoria BIM, modelagem BIM, coordenação digital e addins para Revit, com foco em produtividade e controle técnico para equipes AEC no Peru e na América Latina.",
      ogTitle: "Frata Ingenieros · Consultoria BIM e Addins para Revit | Peru LATAM",
      ogDescription:
        "Consultoria BIM, modelagem BIM e desenvolvimento de addins para Revit. Empresa peruana com atuação em toda a América Latina.",
      ogImageAlt: "Frata Ingenieros - Consultoria BIM e Addins para Revit",
      ogLocale: "pt_BR",
    },
    hero: {
      eyebrow: "Consultoria BIM · Peru → LATAM",
      heading: { line1: "BIM que se constrói.", line2: "Não BIM que se apresenta." },
      intro:
        "Consultoria, modelagem e desenvolvimento de software para Revit e Tekla. Ajudamos empresas AEC a transformar BIM em capacidade real de produção.",
      talkCta: "Vamos conversar",
      servicesCta: "Ver serviços",
      stats: {
        bimtoolsUsers: "Usuários do BIMtools",
        publishedAddins: "Addins publicados",
        deliveredProjects: "Projetos BIM entregues",
      },
    },
    manifesto: {
      eyebrow: "Abordagem",
      heading: { line1: "Não somos fornecedores.", line2: "Somos sua equipe técnica." },
      points: [
        "Implementamos BIM em processos reais de obra e escritório técnico, não em apresentações.",
        "Modelamos estruturas e detalhamento de fabricação com controle e rastreabilidade.",
        "Desenvolvemos nossos próprios addins porque os usamos em nossa própria produção.",
        "Construímos sobre a API do Revit, IFC e fluxos abertos. Sem caixas-pretas.",
      ],
    },
    services: {
      eyebrow: "Serviços",
      heading: "A única coisa que oferecemos: o que sabemos fazer bem.",
      cta: "Ver serviço",
      items: [
        {
          index: "01",
          title: "Consultoria BIM",
          description:
            "Estratégia, padrões, coordenação e acompanhamento para empresas que precisam estruturar sua operação BIM.",
          href: "/services/bim-training-and-implementation",
        },
        {
          index: "02",
          title: "Modelagem BIM",
          description:
            "Modelos coordenados de arquitetura, estrutura e MEP para projeto, obra, quantitativos e controle documental.",
          href: "/services/comprehensive-bim-modeling",
        },
        {
          index: "03",
          title: "Desenvolvimento Revit e Tekla",
          description:
            "Addins, automações e aplicações técnicas que eliminam o trabalho manual do seu fluxo de produção.",
          href: "/services/custom-bim-software-development",
        },
        {
          index: "04",
          title: "Suporte BIM em obra",
          description:
            "Assistência direta para resolver interferências, revisar modelos e conectar o modelo à execução real.",
          href: "/services/on-site-bim-construction-support",
        },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      heading: "Trabalho que já está construído.",
      viewAllCta: "Ver todos os casos",
    },
    process: {
      eyebrow: "Método",
      heading: "Um processo claro, do diagnóstico à produção.",
      steps: [
        {
          index: "01",
          title: "Diagnóstico técnico",
          description: "Analisamos seu fluxo BIM, pontos de dor, software e objetivos de negócio.",
        },
        {
          index: "02",
          title: "Definição de escopo",
          description: "Priorizamos entregáveis, padrões, automação ou desenvolvimento sob medida.",
        },
        {
          index: "03",
          title: "Implementação",
          description: "Executamos modelagem, consultoria, suporte ou desenvolvimento com acompanhamento claro.",
        },
        {
          index: "04",
          title: "Escalonamento e suporte",
          description: "Documentamos, capacitamos e deixamos uma base para crescer com menos dependência manual.",
        },
      ],
    },
    bimtools: {
      eyebrow: "Produto próprio · BIMtools",
      heading: "Construímos as ferramentas que usamos.",
      intro:
        "O BIMtools nasceu dentro dos nossos próprios projetos: addins para Revit que eliminam tarefas repetitivas, exportações manuais e controle de parâmetros. Hoje equipes técnicas em toda a América Latina confiam neles.",
      exploreCta: "Explorar BIMtools",
      customDevCta: "Desenvolvimento sob medida",
      imageAlt: "Desenvolvimento de software BIM para Revit e Tekla",
    },
  },
  ru: {
    meta: {
      titleAbsolute: "Frata Ingenieros · BIM-консалтинг и аддины для Revit | Перу, Латинская Америка",
      description:
        "Frata Ingenieros предоставляет BIM-консалтинг, BIM-моделирование, цифровую координацию и аддины для Revit с фокусом на продуктивность и технический контроль для AEC-команд в Перу и Латинской Америке.",
      ogTitle: "Frata Ingenieros · BIM-консалтинг и аддины для Revit | Перу, Латинская Америка",
      ogDescription:
        "BIM-консалтинг, BIM-моделирование и разработка аддинов для Revit. Перуанская компания, работающая по всей Латинской Америке.",
      ogImageAlt: "Frata Ingenieros — BIM-консалтинг и аддины для Revit",
      ogLocale: "ru_RU",
    },
    hero: {
      eyebrow: "BIM-консалтинг · Перу → Латинская Америка",
      heading: { line1: "BIM, который строится.", line2: "А не BIM, который презентуют." },
      intro:
        "Консалтинг, моделирование и разработка ПО для Revit и Tekla. Мы помогаем AEC-компаниям превращать BIM в реальную производственную мощность.",
      talkCta: "Обсудим проект",
      servicesCta: "Смотреть услуги",
      stats: {
        bimtoolsUsers: "Пользователи BIMtools",
        publishedAddins: "Опубликованные аддины",
        deliveredProjects: "Реализованные BIM-проекты",
      },
    },
    manifesto: {
      eyebrow: "Подход",
      heading: { line1: "Мы не поставщики.", line2: "Мы ваша техническая команда." },
      points: [
        "Мы внедряем BIM в реальных процессах на стройплощадке и в техническом отделе, а не в презентациях.",
        "Мы моделируем конструкции и детали изготовления с контролем и прослеживаемостью.",
        "Мы разрабатываем собственные аддины, потому что используем их в собственном производстве.",
        "Мы строим решения на Revit API, IFC и открытых процессах. Никаких «чёрных ящиков».",
      ],
    },
    services: {
      eyebrow: "Услуги",
      heading: "Единственное, что мы предлагаем: то, что мы умеем делать хорошо.",
      cta: "Смотреть услугу",
      items: [
        {
          index: "01",
          title: "BIM-консалтинг",
          description:
            "Стратегия, стандарты, координация и сопровождение для компаний, которым нужно выстроить BIM-процессы.",
          href: "/services/bim-training-and-implementation",
        },
        {
          index: "02",
          title: "BIM-моделирование",
          description:
            "Скоординированные модели архитектуры, конструкций и инженерных систем для проектирования, строительства, подсчёта объёмов и контроля документации.",
          href: "/services/comprehensive-bim-modeling",
        },
        {
          index: "03",
          title: "Разработка для Revit и Tekla",
          description:
            "Аддины, автоматизация и технические приложения, устраняющие ручной труд в вашем производственном процессе.",
          href: "/services/custom-bim-software-development",
        },
        {
          index: "04",
          title: "BIM-поддержка на стройплощадке",
          description:
            "Прямая помощь в устранении коллизий, проверке моделей и связывании модели с реальным исполнением.",
          href: "/services/on-site-bim-construction-support",
        },
      ],
    },
    projects: {
      eyebrow: "Проекты",
      heading: "Работа, которая уже построена.",
      viewAllCta: "Смотреть все кейсы",
    },
    process: {
      eyebrow: "Метод",
      heading: "Понятный процесс — от диагностики до производства.",
      steps: [
        {
          index: "01",
          title: "Техническая диагностика",
          description: "Анализируем ваш BIM-процесс, проблемные места, ПО и бизнес-цели.",
        },
        {
          index: "02",
          title: "Определение объёма работ",
          description:
            "Расставляем приоритеты между результатами, стандартами, автоматизацией и индивидуальной разработкой.",
        },
        {
          index: "03",
          title: "Реализация",
          description: "Выполняем моделирование, консалтинг, поддержку или разработку с понятным контролем хода работ.",
        },
        {
          index: "04",
          title: "Масштабирование и поддержка",
          description:
            "Документируем, обучаем и закладываем основу для роста с меньшей зависимостью от ручного труда.",
        },
      ],
    },
    bimtools: {
      eyebrow: "Собственный продукт · BIMtools",
      heading: "Мы создаём инструменты, которыми пользуемся сами.",
      intro:
        "BIMtools родился внутри наших собственных проектов: аддины для Revit, устраняющие повторяющиеся задачи, ручной экспорт и контроль параметров. Сегодня ими пользуются технические команды по всей Латинской Америке.",
      exploreCta: "Изучить BIMtools",
      customDevCta: "Индивидуальная разработка",
      imageAlt: "Разработка BIM-программного обеспечения для Revit и Tekla",
    },
  },
  zh: {
    meta: {
      titleAbsolute: "Frata Ingenieros · BIM 咨询与 Revit 插件 | 秘鲁 · 拉丁美洲",
      description:
        "Frata Ingenieros 为秘鲁及拉丁美洲的 AEC 团队提供 BIM 咨询、BIM 建模、数字化协同与 Revit 插件开发服务，专注于提升生产力与技术管控。",
      ogTitle: "Frata Ingenieros · BIM 咨询与 Revit 插件 | 秘鲁 · 拉丁美洲",
      ogDescription: "BIM 咨询、BIM 建模与 Revit 插件开发。业务覆盖整个拉丁美洲的秘鲁企业。",
      ogImageAlt: "Frata Ingenieros - BIM 咨询与 Revit 插件",
      ogLocale: "zh_CN",
    },
    hero: {
      eyebrow: "BIM 咨询 · 秘鲁 → 拉丁美洲",
      heading: { line1: "真正建造出来的 BIM。", line2: "而不只是用来展示的 BIM。" },
      intro: "为 Revit 和 Tekla 提供咨询、建模与软件开发服务。我们帮助 AEC 企业将 BIM 转化为真正的生产能力。",
      talkCta: "联系我们",
      servicesCta: "查看服务",
      stats: {
        bimtoolsUsers: "BIMtools 用户数",
        publishedAddins: "已发布插件数",
        deliveredProjects: "已交付 BIM 项目数",
      },
    },
    manifesto: {
      eyebrow: "理念",
      heading: { line1: "我们不是供应商。", line2: "我们是您的技术团队。" },
      points: [
        "我们将 BIM 落实到真实的施工现场与技术办公流程中，而不是停留在演示文稿里。",
        "我们以可控与可追溯的方式对结构与加工细节进行建模。",
        "我们开发自有插件，因为我们自己也在实际生产中使用它们。",
        "我们基于 Revit API、IFC 和开放工作流构建方案，没有黑箱操作。",
      ],
    },
    services: {
      eyebrow: "服务",
      heading: "我们只提供一件事：我们真正擅长的事。",
      cta: "查看服务",
      items: [
        {
          index: "01",
          title: "BIM 咨询",
          description: "为需要规范 BIM 运作的企业提供战略、标准、协同与陪伴式支持。",
          href: "/services/bim-training-and-implementation",
        },
        {
          index: "02",
          title: "BIM 建模",
          description: "协同的建筑、结构与机电模型，服务于设计、施工、工程量计算与文档管控。",
          href: "/services/comprehensive-bim-modeling",
        },
        {
          index: "03",
          title: "Revit 与 Tekla 开发",
          description: "插件、自动化与技术应用，消除生产流程中的人工操作。",
          href: "/services/custom-bim-software-development",
        },
        {
          index: "04",
          title: "现场 BIM 支持",
          description: "提供直接支持，解决碰撞问题、审核模型，并将模型与实际施工相连接。",
          href: "/services/on-site-bim-construction-support",
        },
      ],
    },
    projects: {
      eyebrow: "项目",
      heading: "已经落地的实际项目。",
      viewAllCta: "查看全部案例",
    },
    process: {
      eyebrow: "方法",
      heading: "从诊断到生产的清晰流程。",
      steps: [
        {
          index: "01",
          title: "技术诊断",
          description: "评估您的 BIM 工作流程、痛点、软件与业务目标。",
        },
        {
          index: "02",
          title: "范围界定",
          description: "对交付物、标准、自动化或定制开发进行优先级排序。",
        },
        {
          index: "03",
          title: "实施",
          description: "以清晰的进度跟踪执行建模、咨询、支持或开发工作。",
        },
        {
          index: "04",
          title: "扩展与支持",
          description: "提供文档与培训，为在减少人工依赖的情况下持续发展打下基础。",
        },
      ],
    },
    bimtools: {
      eyebrow: "自研产品 · BIMtools",
      heading: "我们打造自己使用的工具。",
      intro:
        "BIMtools 诞生于我们自己的项目之中：这些 Revit 插件消除了重复性任务、手动导出与参数管控的负担。如今，拉丁美洲各地的技术团队都在使用它们。",
      exploreCta: "探索 BIMtools",
      customDevCta: "定制开发",
      imageAlt: "面向 Revit 与 Tekla 的 BIM 软件开发",
    },
  },
};

// Locale-neutral: literal tech names and the featured case-study slugs.
export const techStack = ["Revit API", "C#", ".NET 8", "WPF", "Dynamo", "IFC", "Open BIM"];
export const featuredCaseSlugs = ["estadio-chepen", "interoperabilidad-tekla-revit", "puente-beirut"];
