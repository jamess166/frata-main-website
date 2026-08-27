import type { Locale } from "@/lib/locale";

export type ServiceSlug =
  | "global-remote-bim-teams"
  | "custom-bim-software-development"
  | "on-site-bim-construction-support"
  | "bim-for-manufacturing"
  | "bim-training-and-implementation"
  | "comprehensive-bim-modeling";

export interface ServiceContent {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  pillars: Array<{
    title: string;
    description: string;
  }>;
  process: Array<{
    title: string;
    description: string;
  }>;
  outcomes: string[];
}

export type ServiceContentBilingual = Record<Locale, ServiceContent>;

export const serviceContent: Record<ServiceSlug, ServiceContentBilingual> = {
  "global-remote-bim-teams": {
    "es": {
      "slug": "global-remote-bim-teams",
      "title": "Equipos BIM remotos para operaciones que necesitan capacidad inmediata",
      "shortTitle": "Equipos BIM remotos",
      "description": "Integramos modeladores, coordinadores y soporte BIM remoto para ampliar capacidad sin frenar la operacion.",
      "intro": "Cuando una empresa necesita escalar produccion BIM sin perder control tecnico, el problema no es solo contratar mas gente. Hace falta integrar un equipo que entienda tus estandares, tus plazos y tu forma de coordinar.",
      "image": "/images/equipoBIM.webp",
      "imageAlt": "Equipo BIM remoto colaborando",
      "pillars": [
        {
          "title": "Integracion operativa",
          "description": "Nos acoplamos a tus procesos, software, BEP, plantillas y forma de coordinacion."
        },
        {
          "title": "Escalado flexible",
          "description": "Puedes sumar capacidad puntual o establecer una celula BIM estable segun tu cartera de proyectos."
        },
        {
          "title": "Control de calidad",
          "description": "La produccion no se entrega como caja negra; se gestiona con seguimiento y criterios medibles."
        }
      ],
      "process": [
        {
          "title": "Diagnostico",
          "description": "Revisamos alcance, entregables, carga de trabajo y brechas del equipo actual."
        },
        {
          "title": "Armado del equipo",
          "description": "Definimos perfiles, responsabilidades y canales de coordinacion."
        },
        {
          "title": "Onboarding",
          "description": "Alineamos nomenclaturas, plantillas, estandares y entorno comun de datos."
        },
        {
          "title": "Operacion continua",
          "description": "Ejecutamos con seguimiento tecnico, reportes y mejora de flujo."
        }
      ],
      "outcomes": [
        "Mayor capacidad de produccion BIM sin ampliar estructura fija al mismo ritmo.",
        "Mejor continuidad entre modelado, coordinacion y documentacion.",
        "Menor friccion al incorporar recursos externos a proyectos exigentes."
      ]
    },
    "en": {
      "slug": "global-remote-bim-teams",
      "title": "Remote BIM teams for operations that need immediate capacity",
      "shortTitle": "Remote BIM teams",
      "description": "We integrate remote BIM modelers, coordinators and support profiles to expand production capacity without disrupting operations.",
      "intro": "When a company needs to scale BIM production without losing technical control, the problem is not only hiring more people. It requires an integrated team that understands your standards, deadlines and coordination workflow.",
      "image": "/images/equipoBIM.webp",
      "imageAlt": "Remote BIM team collaborating",
      "pillars": [
        {
          "title": "Operational integration",
          "description": "We adapt to your processes, software stack, BEP, templates and coordination dynamics."
        },
        {
          "title": "Flexible scaling",
          "description": "You can add targeted capacity or build a stable BIM cell depending on your project pipeline."
        },
        {
          "title": "Quality control",
          "description": "Production is managed with follow-up and measurable criteria, not delivered as a black box."
        }
      ],
      "process": [
        {
          "title": "Assessment",
          "description": "We review scope, deliverables, workload and current team gaps."
        },
        {
          "title": "Team setup",
          "description": "We define profiles, responsibilities and coordination channels."
        },
        {
          "title": "Onboarding",
          "description": "We align naming conventions, templates, standards and CDE practices."
        },
        {
          "title": "Continuous delivery",
          "description": "We operate with technical follow-up, reporting and process improvement."
        }
      ],
      "outcomes": [
        "Higher BIM production capacity without growing fixed structure at the same speed.",
        "Better continuity between modeling, coordination and documentation.",
        "Less friction when external resources join demanding projects."
      ]
    },
    "de": {
      "slug": "global-remote-bim-teams",
      "title": "Remote-BIM-Teams für Betriebe, die sofortige Kapazität benötigen",
      "shortTitle": "Remote-BIM-Teams",
      "description": "Wir integrieren Remote-BIM-Modellierer, Koordinatoren und Support-Profile, um die Produktionskapazität zu erweitern, ohne den Betrieb zu stören.",
      "intro": "Wenn ein Unternehmen BIM-Produktion skalieren muss, ohne die technische Kontrolle zu verlieren, geht es nicht nur darum, mehr Personal einzustellen. Es braucht ein integriertes Team, das Ihre Standards, Termine und Koordinationsabläufe versteht.",
      "image": "/images/equipoBIM.webp",
      "imageAlt": "Remote-BIM-Team bei der Zusammenarbeit",
      "pillars": [
        { "title": "Operative Integration", "description": "Wir passen uns Ihren Prozessen, Ihrer Software, BEP, Vorlagen und Ihrer Koordinationsweise an." },
        { "title": "Flexible Skalierung", "description": "Sie können gezielt zusätzliche Kapazität hinzufügen oder je nach Projektportfolio eine stabile BIM-Zelle aufbauen." },
        { "title": "Qualitätskontrolle", "description": "Die Produktion wird nicht als Blackbox geliefert; sie wird mit Nachverfolgung und messbaren Kriterien gesteuert." }
      ],
      "process": [
        { "title": "Diagnose", "description": "Wir prüfen Umfang, Leistungen, Arbeitslast und Lücken im aktuellen Team." },
        { "title": "Teamaufbau", "description": "Wir definieren Profile, Verantwortlichkeiten und Koordinationskanäle." },
        { "title": "Onboarding", "description": "Wir stimmen Nomenklaturen, Vorlagen, Standards und die gemeinsame Datenumgebung ab." },
        { "title": "Laufender Betrieb", "description": "Wir arbeiten mit technischer Nachverfolgung, Berichten und Prozessverbesserung." }
      ],
      "outcomes": [
        "Höhere BIM-Produktionskapazität, ohne die feste Struktur im gleichen Tempo auszubauen.",
        "Bessere Kontinuität zwischen Modellierung, Koordination und Dokumentation.",
        "Weniger Reibung bei der Einbindung externer Ressourcen in anspruchsvolle Projekte."
      ]
    },
    "fr": {
      "slug": "global-remote-bim-teams",
      "title": "Équipes BIM à distance pour des opérations qui ont besoin d'une capacité immédiate",
      "shortTitle": "Équipes BIM à distance",
      "description": "Nous intégrons des modélisateurs, coordinateurs et profils de support BIM à distance pour développer votre capacité sans freiner l'activité.",
      "intro": "Lorsqu'une entreprise doit accroître sa production BIM sans perdre le contrôle technique, le problème ne se résume pas à embaucher plus de monde. Il faut une équipe intégrée qui comprend vos standards, vos délais et votre façon de coordonner.",
      "image": "/images/equipoBIM.webp",
      "imageAlt": "Équipe BIM à distance en pleine collaboration",
      "pillars": [
        { "title": "Intégration opérationnelle", "description": "Nous nous adaptons à vos processus, logiciels, BEP, modèles et mode de coordination." },
        { "title": "Montée en puissance flexible", "description": "Vous pouvez ajouter une capacité ponctuelle ou constituer une cellule BIM stable selon votre portefeuille de projets." },
        { "title": "Contrôle qualité", "description": "La production n'est pas livrée en boîte noire ; elle est gérée avec suivi et critères mesurables." }
      ],
      "process": [
        { "title": "Diagnostic", "description": "Nous examinons le périmètre, les livrables, la charge de travail et les lacunes de l'équipe actuelle." },
        { "title": "Constitution de l'équipe", "description": "Nous définissons les profils, les responsabilités et les canaux de coordination." },
        { "title": "Intégration", "description": "Nous alignons nomenclatures, modèles, standards et environnement de données commun." },
        { "title": "Fonctionnement continu", "description": "Nous opérons avec un suivi technique, des rapports et une amélioration continue du flux." }
      ],
      "outcomes": [
        "Une capacité de production BIM accrue sans faire croître la structure fixe au même rythme.",
        "Une meilleure continuité entre modélisation, coordination et documentation.",
        "Moins de friction lors de l'intégration de ressources externes sur des projets exigeants."
      ]
    },
    "it": {
      "slug": "global-remote-bim-teams",
      "title": "Team BIM da remoto per operazioni che necessitano di capacità immediata",
      "shortTitle": "Team BIM da remoto",
      "description": "Integriamo modellatori, coordinatori e profili di supporto BIM da remoto per ampliare la capacità produttiva senza rallentare l'operatività.",
      "intro": "Quando un'azienda ha bisogno di scalare la produzione BIM senza perdere il controllo tecnico, il problema non è solo assumere più personale. Serve un team integrato che comprenda i tuoi standard, le tue scadenze e il tuo modo di coordinare.",
      "image": "/images/equipoBIM.webp",
      "imageAlt": "Team BIM da remoto al lavoro insieme",
      "pillars": [
        { "title": "Integrazione operativa", "description": "Ci adattiamo ai tuoi processi, software, BEP, template e modalità di coordinamento." },
        { "title": "Scalabilità flessibile", "description": "Puoi aggiungere capacità puntuale o costituire una cellula BIM stabile in base al tuo portafoglio progetti." },
        { "title": "Controllo qualità", "description": "La produzione non viene consegnata come una scatola nera; è gestita con monitoraggio e criteri misurabili." }
      ],
      "process": [
        { "title": "Diagnosi", "description": "Analizziamo ambito, deliverable, carico di lavoro e lacune del team attuale." },
        { "title": "Composizione del team", "description": "Definiamo profili, responsabilità e canali di coordinamento." },
        { "title": "Onboarding", "description": "Allineiamo nomenclature, template, standard e ambiente dati condiviso." },
        { "title": "Operatività continua", "description": "Lavoriamo con monitoraggio tecnico, reportistica e miglioramento del flusso." }
      ],
      "outcomes": [
        "Maggiore capacità di produzione BIM senza ampliare la struttura fissa allo stesso ritmo.",
        "Migliore continuità tra modellazione, coordinamento e documentazione.",
        "Minore attrito nell'inserire risorse esterne in progetti impegnativi."
      ]
    },
    "pt": {
      "slug": "global-remote-bim-teams",
      "title": "Equipes BIM remotas para operações que precisam de capacidade imediata",
      "shortTitle": "Equipes BIM remotas",
      "description": "Integramos modeladores, coordenadores e suporte BIM remoto para ampliar a capacidade sem travar a operação.",
      "intro": "Quando uma empresa precisa escalar a produção BIM sem perder controle técnico, o problema não é apenas contratar mais gente. É preciso integrar uma equipe que entenda seus padrões, prazos e forma de coordenação.",
      "image": "/images/equipoBIM.webp",
      "imageAlt": "Equipe BIM remota colaborando",
      "pillars": [
        { "title": "Integração operacional", "description": "Nos adaptamos aos seus processos, software, BEP, modelos e forma de coordenação." },
        { "title": "Escalonamento flexível", "description": "Você pode somar capacidade pontual ou montar uma célula BIM estável conforme sua carteira de projetos." },
        { "title": "Controle de qualidade", "description": "A produção não é entregue como caixa-preta; é gerenciada com acompanhamento e critérios mensuráveis." }
      ],
      "process": [
        { "title": "Diagnóstico", "description": "Revisamos escopo, entregáveis, carga de trabalho e lacunas da equipe atual." },
        { "title": "Montagem da equipe", "description": "Definimos perfis, responsabilidades e canais de coordenação." },
        { "title": "Onboarding", "description": "Alinhamos nomenclaturas, modelos, padrões e ambiente comum de dados." },
        { "title": "Operação contínua", "description": "Executamos com acompanhamento técnico, relatórios e melhoria de fluxo." }
      ],
      "outcomes": [
        "Maior capacidade de produção BIM sem ampliar a estrutura fixa no mesmo ritmo.",
        "Melhor continuidade entre modelagem, coordenação e documentação.",
        "Menos atrito ao incorporar recursos externos em projetos exigentes."
      ]
    },
    "ru": {
      "slug": "global-remote-bim-teams",
      "title": "Удалённые BIM-команды для операций, которым нужна немедленная мощность",
      "shortTitle": "Удалённые BIM-команды",
      "description": "Мы подключаем удалённых BIM-моделлеров, координаторов и специалистов поддержки, чтобы расширить производственную мощность без остановки операций.",
      "intro": "Когда компании нужно масштабировать BIM-производство, не теряя технического контроля, дело не только в найме большего числа людей. Нужна интегрированная команда, понимающая ваши стандарты, сроки и порядок координации.",
      "image": "/images/equipoBIM.webp",
      "imageAlt": "Совместная работа удалённой BIM-команды",
      "pillars": [
        { "title": "Операционная интеграция", "description": "Мы адаптируемся к вашим процессам, ПО, BEP, шаблонам и способу координации." },
        { "title": "Гибкое масштабирование", "description": "Вы можете добавить точечную мощность или сформировать стабильную BIM-ячейку в зависимости от портфеля проектов." },
        { "title": "Контроль качества", "description": "Производство не передаётся как «чёрный ящик»; оно управляется с отслеживанием и измеримыми критериями." }
      ],
      "process": [
        { "title": "Диагностика", "description": "Анализируем объём, результаты, загрузку и пробелы текущей команды." },
        { "title": "Формирование команды", "description": "Определяем профили, зоны ответственности и каналы координации." },
        { "title": "Онбординг", "description": "Согласовываем номенклатуру, шаблоны, стандарты и общую среду данных." },
        { "title": "Непрерывная работа", "description": "Работаем с техническим сопровождением, отчётностью и улучшением процессов." }
      ],
      "outcomes": [
        "Более высокая производственная мощность BIM без пропорционального роста штатной структуры.",
        "Лучшая непрерывность между моделированием, координацией и документацией.",
        "Меньше трений при подключении внешних ресурсов к требовательным проектам."
      ]
    },
    "zh": {
      "slug": "global-remote-bim-teams",
      "title": "为急需产能的运营提供远程 BIM 团队",
      "shortTitle": "远程 BIM 团队",
      "description": "我们整合远程 BIM 建模师、协调员与支持人员，在不影响运营的情况下扩大产能。",
      "intro": "当企业需要在不失去技术管控的前提下扩大 BIM 产能时，问题并不仅仅是招聘更多人员，而是需要一支了解您的标准、进度与协同方式的一体化团队。",
      "image": "/images/equipoBIM.webp",
      "imageAlt": "远程 BIM 团队协同工作",
      "pillars": [
        { "title": "运营整合", "description": "我们主动适配您的流程、软件、BEP、模板与协同方式。" },
        { "title": "灵活扩展", "description": "您可以按需增加临时产能，也可以根据项目组合建立稳定的 BIM 团队。" },
        { "title": "质量管控", "description": "生产过程并非黑箱交付，而是通过跟进与可量化标准进行管理。" }
      ],
      "process": [
        { "title": "诊断评估", "description": "评估范围、交付物、工作量及现有团队的差距。" },
        { "title": "组建团队", "description": "明确岗位、职责与协同渠道。" },
        { "title": "入场磨合", "description": "统一命名规范、模板、标准与通用数据环境。" },
        { "title": "持续运营", "description": "以技术跟进、报告与流程改进方式持续执行工作。" }
      ],
      "outcomes": [
        "在不同步扩大固定架构的情况下提升 BIM 产能。",
        "建模、协同与文档管理之间的衔接更加顺畅。",
        "将外部资源纳入高要求项目时的摩擦更少。"
      ]
    }
  },
  "custom-bim-software-development": {
    "es": {
      "slug": "custom-bim-software-development",
      "title": "Desarrollo BIM para Revit, Tekla y procesos tecnicos a medida",
      "shortTitle": "Desarrollo BIM",
      "description": "Creamos addins, automatizaciones y aplicaciones tecnicas para reducir trabajo manual y elevar productividad BIM.",
      "intro": "La diferencia entre una consultora tradicional y una consultora con software propio es enorme. En Frata convertimos problemas operativos en herramientas concretas para Revit, Tekla y flujos conectados.",
      "image": "/images/softwareDeveloper.webp",
      "imageAlt": "Desarrollo de software BIM para Revit o Tekla",
      "pillars": [
        {
          "title": "Ingenieria y software",
          "description": "No programamos a ciegas; entendemos lo que ocurre en modelado, coordinacion, obra y fabricacion."
        },
        {
          "title": "Automatizacion con sentido",
          "description": "Atacamos tareas repetitivas, validaciones, exportaciones y control de parametros que consumen horas."
        },
        {
          "title": "Soluciones escalables",
          "description": "Podemos construir desde una utilidad puntual hasta una suite de herramientas conectadas."
        }
      ],
      "process": [
        {
          "title": "Descubrimiento",
          "description": "Mapeamos el problema tecnico y el impacto real en el flujo del cliente."
        },
        {
          "title": "Diseno funcional",
          "description": "Definimos experiencia, reglas, casos limite y alcance del producto."
        },
        {
          "title": "Desarrollo y pruebas",
          "description": "Construimos, validamos y ajustamos sobre casos reales de uso."
        },
        {
          "title": "Despliegue y soporte",
          "description": "Entregamos version operativa, documentacion y mejora evolutiva."
        }
      ],
      "outcomes": [
        "Menos trabajo manual y menos errores en tareas de alto volumen.",
        "Mayor consistencia en exportaciones, datos y entregables BIM.",
        "Capacidad propia de software alineada al negocio del cliente."
      ]
    },
    "en": {
      "slug": "custom-bim-software-development",
      "title": "BIM software development for Revit, Tekla and technical workflows",
      "shortTitle": "BIM software development",
      "description": "We create add-ins, automations and technical applications that reduce manual work and improve BIM productivity.",
      "intro": "The difference between a traditional consultancy and one with its own software capability is significant. At Frata, we turn operational problems into practical tools for Revit, Tekla and connected technical workflows.",
      "image": "/images/softwareDeveloper.webp",
      "imageAlt": "BIM software development for Revit and Tekla",
      "pillars": [
        {
          "title": "Engineering plus software",
          "description": "We do not code blindly; we understand modeling, coordination, site work and fabrication realities."
        },
        {
          "title": "Meaningful automation",
          "description": "We target repetitive tasks, validations, exports and parameter control that consume valuable hours."
        },
        {
          "title": "Scalable solutions",
          "description": "We can build anything from a focused utility to a connected suite of BIM tools."
        }
      ],
      "process": [
        {
          "title": "Discovery",
          "description": "We map the technical problem and its real impact on the client workflow."
        },
        {
          "title": "Functional design",
          "description": "We define experience, rules, edge cases and product scope."
        },
        {
          "title": "Development and testing",
          "description": "We build, validate and refine against real use cases."
        },
        {
          "title": "Deployment and support",
          "description": "We deliver a working version, documentation and iterative improvement."
        }
      ],
      "outcomes": [
        "Less manual work and fewer errors in high-volume tasks.",
        "More consistency in exports, data structures and BIM deliverables.",
        "In-house software capability aligned with the client business."
      ]
    },
    "de": {
      "slug": "custom-bim-software-development",
      "title": "BIM-Softwareentwicklung für Revit, Tekla und technische Workflows",
      "shortTitle": "BIM-Softwareentwicklung",
      "description": "Wir entwickeln Addins, Automatisierungen und technische Anwendungen, die manuelle Arbeit reduzieren und die BIM-Produktivität steigern.",
      "intro": "Der Unterschied zwischen einer klassischen Beratung und einer mit eigener Softwarekompetenz ist enorm. Bei Frata verwandeln wir operative Probleme in konkrete Werkzeuge für Revit, Tekla und verbundene Abläufe.",
      "image": "/images/softwareDeveloper.webp",
      "imageAlt": "Entwicklung von BIM-Software für Revit oder Tekla",
      "pillars": [
        { "title": "Engineering und Software", "description": "Wir programmieren nicht blind; wir verstehen, was in Modellierung, Koordination, Bau und Fertigung geschieht." },
        { "title": "Sinnvolle Automatisierung", "description": "Wir greifen repetitive Aufgaben, Validierungen, Exporte und Parameterkontrolle an, die viel Zeit kosten." },
        { "title": "Skalierbare Lösungen", "description": "Wir bauen alles von einem gezielten Tool bis zu einer verbundenen Werkzeug-Suite." }
      ],
      "process": [
        { "title": "Discovery", "description": "Wir kartieren das technische Problem und seine reale Auswirkung auf den Kundenworkflow." },
        { "title": "Funktionales Design", "description": "Wir definieren Nutzererlebnis, Regeln, Grenzfälle und Produktumfang." },
        { "title": "Entwicklung und Tests", "description": "Wir bauen, validieren und optimieren anhand realer Anwendungsfälle." },
        { "title": "Rollout und Support", "description": "Wir liefern eine funktionsfähige Version, Dokumentation und laufende Weiterentwicklung." }
      ],
      "outcomes": [
        "Weniger manuelle Arbeit und weniger Fehler bei Aufgaben mit hohem Volumen.",
        "Mehr Konsistenz bei Exporten, Daten und BIM-Leistungen.",
        "Eigene Softwarekompetenz, abgestimmt auf das Geschäft des Kunden."
      ]
    },
    "fr": {
      "slug": "custom-bim-software-development",
      "title": "Développement logiciel BIM pour Revit, Tekla et flux techniques sur mesure",
      "shortTitle": "Développement BIM",
      "description": "Nous créons des addins, des automatisations et des applications techniques pour réduire le travail manuel et améliorer la productivité BIM.",
      "intro": "La différence entre un cabinet de conseil traditionnel et un cabinet doté de sa propre capacité logicielle est considérable. Chez Frata, nous transformons les problèmes opérationnels en outils concrets pour Revit, Tekla et les flux connectés.",
      "image": "/images/softwareDeveloper.webp",
      "imageAlt": "Développement de logiciels BIM pour Revit ou Tekla",
      "pillars": [
        { "title": "Ingénierie et logiciel", "description": "Nous ne codons pas à l'aveugle ; nous comprenons ce qui se passe en modélisation, coordination, chantier et fabrication." },
        { "title": "Automatisation pertinente", "description": "Nous ciblons les tâches répétitives, les validations, les exports et le contrôle des paramètres qui consomment des heures." },
        { "title": "Solutions évolutives", "description": "Nous pouvons construire aussi bien un utilitaire ponctuel qu'une suite d'outils connectés." }
      ],
      "process": [
        { "title": "Découverte", "description": "Nous cartographions le problème technique et son impact réel sur le flux du client." },
        { "title": "Conception fonctionnelle", "description": "Nous définissons l'expérience, les règles, les cas limites et le périmètre du produit." },
        { "title": "Développement et tests", "description": "Nous construisons, validons et ajustons sur des cas d'usage réels." },
        { "title": "Déploiement et support", "description": "Nous livrons une version opérationnelle, la documentation et une amélioration continue." }
      ],
      "outcomes": [
        "Moins de travail manuel et moins d'erreurs sur les tâches à fort volume.",
        "Une plus grande cohérence dans les exports, les données et les livrables BIM.",
        "Une capacité logicielle propre, alignée sur l'activité du client."
      ]
    },
    "it": {
      "slug": "custom-bim-software-development",
      "title": "Sviluppo software BIM per Revit, Tekla e processi tecnici su misura",
      "shortTitle": "Sviluppo BIM",
      "description": "Creiamo addin, automazioni e applicazioni tecniche per ridurre il lavoro manuale e aumentare la produttività BIM.",
      "intro": "La differenza tra una società di consulenza tradizionale e una con software proprio è enorme. In Frata trasformiamo problemi operativi in strumenti concreti per Revit, Tekla e flussi connessi.",
      "image": "/images/softwareDeveloper.webp",
      "imageAlt": "Sviluppo di software BIM per Revit o Tekla",
      "pillars": [
        { "title": "Ingegneria e software", "description": "Non programmiamo alla cieca; comprendiamo ciò che accade in modellazione, coordinamento, cantiere e produzione." },
        { "title": "Automazione con criterio", "description": "Affrontiamo attività ripetitive, validazioni, esportazioni e controllo dei parametri che consumano molte ore." },
        { "title": "Soluzioni scalabili", "description": "Possiamo costruire da un'utility puntuale fino a una suite di strumenti connessi." }
      ],
      "process": [
        { "title": "Discovery", "description": "Mappiamo il problema tecnico e il suo reale impatto sul flusso del cliente." },
        { "title": "Progettazione funzionale", "description": "Definiamo esperienza, regole, casi limite e ambito del prodotto." },
        { "title": "Sviluppo e test", "description": "Costruiamo, validiamo e affiniamo su casi d'uso reali." },
        { "title": "Rilascio e supporto", "description": "Consegniamo una versione operativa, documentazione e miglioramento evolutivo." }
      ],
      "outcomes": [
        "Meno lavoro manuale e meno errori nelle attività ad alto volume.",
        "Maggiore coerenza in esportazioni, dati e deliverable BIM.",
        "Capacità software propria allineata al business del cliente."
      ]
    },
    "pt": {
      "slug": "custom-bim-software-development",
      "title": "Desenvolvimento BIM para Revit, Tekla e processos técnicos sob medida",
      "shortTitle": "Desenvolvimento BIM",
      "description": "Criamos addins, automações e aplicações técnicas para reduzir o trabalho manual e elevar a produtividade BIM.",
      "intro": "A diferença entre uma consultoria tradicional e uma consultoria com software próprio é enorme. Na Frata, transformamos problemas operacionais em ferramentas concretas para Revit, Tekla e fluxos conectados.",
      "image": "/images/softwareDeveloper.webp",
      "imageAlt": "Desenvolvimento de software BIM para Revit ou Tekla",
      "pillars": [
        { "title": "Engenharia e software", "description": "Não programamos às cegas; entendemos o que acontece na modelagem, coordenação, obra e fabricação." },
        { "title": "Automação com propósito", "description": "Atacamos tarefas repetitivas, validações, exportações e controle de parâmetros que consomem horas." },
        { "title": "Soluções escaláveis", "description": "Podemos construir desde um utilitário pontual até uma suíte de ferramentas conectadas." }
      ],
      "process": [
        { "title": "Descoberta", "description": "Mapeamos o problema técnico e o impacto real no fluxo do cliente." },
        { "title": "Design funcional", "description": "Definimos experiência, regras, casos-limite e escopo do produto." },
        { "title": "Desenvolvimento e testes", "description": "Construímos, validamos e ajustamos com base em casos reais de uso." },
        { "title": "Implantação e suporte", "description": "Entregamos versão operacional, documentação e melhoria contínua." }
      ],
      "outcomes": [
        "Menos trabalho manual e menos erros em tarefas de alto volume.",
        "Maior consistência em exportações, dados e entregáveis BIM.",
        "Capacidade própria de software alinhada ao negócio do cliente."
      ]
    },
    "ru": {
      "slug": "custom-bim-software-development",
      "title": "Разработка BIM-решений для Revit, Tekla и индивидуальных технических процессов",
      "shortTitle": "Разработка BIM-решений",
      "description": "Мы создаём аддины, автоматизацию и технические приложения, снижающие объём ручного труда и повышающие продуктивность BIM.",
      "intro": "Разница между традиционной консалтинговой компанией и компанией с собственной разработкой огромна. В Frata мы превращаем операционные проблемы в конкретные инструменты для Revit, Tekla и связанных процессов.",
      "image": "/images/softwareDeveloper.webp",
      "imageAlt": "Разработка BIM-программного обеспечения для Revit или Tekla",
      "pillars": [
        { "title": "Инженерия и разработка", "description": "Мы не пишем код вслепую — мы понимаем, что происходит в моделировании, координации, на стройке и в производстве." },
        { "title": "Осмысленная автоматизация", "description": "Мы устраняем повторяющиеся задачи, проверки, экспорт и контроль параметров, отнимающие много времени." },
        { "title": "Масштабируемые решения", "description": "Мы можем создать как точечную утилиту, так и целый пакет взаимосвязанных инструментов." }
      ],
      "process": [
        { "title": "Исследование", "description": "Определяем техническую проблему и её реальное влияние на процессы клиента." },
        { "title": "Функциональное проектирование", "description": "Определяем пользовательский опыт, правила, граничные случаи и объём продукта." },
        { "title": "Разработка и тестирование", "description": "Создаём, проверяем и дорабатываем решение на реальных сценариях использования." },
        { "title": "Внедрение и поддержка", "description": "Передаём рабочую версию, документацию и обеспечиваем дальнейшее развитие." }
      ],
      "outcomes": [
        "Меньше ручного труда и ошибок в задачах большого объёма.",
        "Более высокая согласованность экспорта, данных и BIM-результатов.",
        "Собственная разработка, соответствующая бизнесу клиента."
      ]
    },
    "zh": {
      "slug": "custom-bim-software-development",
      "title": "面向 Revit、Tekla 及定制技术流程的 BIM 软件开发",
      "shortTitle": "BIM 软件开发",
      "description": "我们开发插件、自动化方案与技术应用，减少人工操作并提升 BIM 生产效率。",
      "intro": "传统咨询公司与拥有自研软件能力的咨询公司之间差异巨大。在 Frata，我们将运营问题转化为面向 Revit、Tekla 及关联流程的实用工具。",
      "image": "/images/softwareDeveloper.webp",
      "imageAlt": "面向 Revit 或 Tekla 的 BIM 软件开发",
      "pillars": [
        { "title": "工程与软件并重", "description": "我们不会盲目编写代码，而是深刻理解建模、协同、施工与加工中的实际情况。" },
        { "title": "有针对性的自动化", "description": "我们聚焦于耗时的重复性任务、校验、导出与参数管控。" },
        { "title": "可扩展的解决方案", "description": "从单一实用工具到成套联动工具，我们都能构建。" }
      ],
      "process": [
        { "title": "需求发现", "description": "梳理技术问题及其对客户流程的实际影响。" },
        { "title": "功能设计", "description": "定义使用体验、规则、边界情况与产品范围。" },
        { "title": "开发与测试", "description": "基于真实使用场景进行构建、验证与调整。" },
        { "title": "部署与支持", "description": "交付可运行版本、文档，并持续迭代改进。" }
      ],
      "outcomes": [
        "减少大批量任务中的人工操作与错误。",
        "导出、数据与 BIM 交付物的一致性更高。",
        "拥有与客户业务相匹配的自研软件能力。"
      ]
    }
  },
  "on-site-bim-construction-support": {
    "es": {
      "slug": "on-site-bim-construction-support",
      "title": "Acompanamiento BIM en obra para conectar modelo y ejecucion",
      "shortTitle": "Soporte BIM en obra",
      "description": "Llevamos criterio BIM al frente de obra para resolver interferencias, validar informacion y acelerar decisiones.",
      "intro": "El modelo vale poco si no conversa con lo que sucede en campo. Nuestro acompanamiento BIM en obra ayuda a traducir informacion digital en acciones utiles para supervision, produccion y control.",
      "image": "/images/BIMObra.webp",
      "imageAlt": "Acompanamiento BIM en obra",
      "pillars": [
        {
          "title": "Respuesta inmediata",
          "description": "Resolucion tecnica mas rapida cuando aparecen dudas, desajustes o interferencias."
        },
        {
          "title": "Coordinacion entre frentes",
          "description": "El modelo se usa como herramienta de comunicacion real entre diseno, oficina tecnica y obra."
        },
        {
          "title": "Validacion continua",
          "description": "Detectamos inconsistencias antes de que se conviertan en retrabajo o demora."
        }
      ],
      "process": [
        {
          "title": "Revision de contexto",
          "description": "Analizamos hitos, equipos, modelo disponible y riesgos principales."
        },
        {
          "title": "Despliegue",
          "description": "Definimos presencia, responsables y dinamica de soporte con el cliente."
        },
        {
          "title": "Acompañamiento",
          "description": "Resolvemos incidencias y coordinamos sobre el avance real del proyecto."
        },
        {
          "title": "Retroalimentacion",
          "description": "Documentamos ajustes para fortalecer procesos futuros."
        }
      ],
      "outcomes": [
        "Menos fricciones entre lo modelado y lo ejecutado.",
        "Mejor capacidad de decision tecnica en momentos criticos.",
        "Mayor aprovechamiento del modelo durante la construccion."
      ]
    },
    "en": {
      "slug": "on-site-bim-construction-support",
      "title": "On-site BIM support to connect model and execution",
      "shortTitle": "On-site BIM support",
      "description": "We bring BIM criteria to the jobsite to solve clashes, validate information and accelerate technical decisions.",
      "intro": "A model has limited value if it does not connect with what happens on site. Our on-site BIM support translates digital information into practical action for supervision, production and control teams.",
      "image": "/images/BIMObra.webp",
      "imageAlt": "On-site BIM support",
      "pillars": [
        {
          "title": "Immediate response",
          "description": "Faster technical resolution when clashes, questions or inconsistencies appear."
        },
        {
          "title": "Coordination across teams",
          "description": "The model becomes a real communication tool between design, technical office and field execution."
        },
        {
          "title": "Continuous validation",
          "description": "We detect inconsistencies before they become rework or delay."
        }
      ],
      "process": [
        {
          "title": "Context review",
          "description": "We analyze milestones, teams, available model and main project risks."
        },
        {
          "title": "Deployment",
          "description": "We define presence, responsibilities and support dynamics with the client."
        },
        {
          "title": "Field support",
          "description": "We resolve incidents and coordinate according to real project progress."
        },
        {
          "title": "Feedback loop",
          "description": "We document adjustments to strengthen future processes."
        }
      ],
      "outcomes": [
        "Less friction between modeled intent and field execution.",
        "Better technical decision-making in critical moments.",
        "Higher value extracted from the BIM model during construction."
      ]
    },
    "de": {
      "slug": "on-site-bim-construction-support",
      "title": "BIM-Begleitung vor Ort zur Verbindung von Modell und Ausführung",
      "shortTitle": "BIM-Support auf der Baustelle",
      "description": "Wir bringen BIM-Kriterien direkt auf die Baustelle, um Kollisionen zu lösen, Informationen zu validieren und Entscheidungen zu beschleunigen.",
      "intro": "Ein Modell hat wenig Wert, wenn es nicht mit dem übereinstimmt, was vor Ort passiert. Unsere BIM-Begleitung auf der Baustelle hilft, digitale Informationen in nützliche Maßnahmen für Bauleitung, Produktion und Kontrolle zu übersetzen.",
      "image": "/images/BIMObra.webp",
      "imageAlt": "BIM-Begleitung auf der Baustelle",
      "pillars": [
        { "title": "Sofortige Reaktion", "description": "Schnellere technische Lösung bei auftretenden Fragen, Abweichungen oder Kollisionen." },
        { "title": "Koordination zwischen den Bereichen", "description": "Das Modell wird als echtes Kommunikationswerkzeug zwischen Planung, Planungsbüro und Baustelle genutzt." },
        { "title": "Laufende Validierung", "description": "Wir erkennen Unstimmigkeiten, bevor sie zu Nacharbeit oder Verzögerung führen." }
      ],
      "process": [
        { "title": "Kontextprüfung", "description": "Wir analysieren Meilensteine, Teams, verfügbares Modell und Hauptrisiken." },
        { "title": "Einsatz", "description": "Wir legen Präsenz, Verantwortliche und Support-Dynamik mit dem Kunden fest." },
        { "title": "Begleitung", "description": "Wir lösen Vorfälle und koordinieren entlang des realen Projektfortschritts." },
        { "title": "Rückmeldung", "description": "Wir dokumentieren Anpassungen, um künftige Prozesse zu stärken." }
      ],
      "outcomes": [
        "Weniger Reibung zwischen Modellierung und Ausführung.",
        "Bessere technische Entscheidungsfähigkeit in kritischen Momenten.",
        "Höherer Nutzen des Modells während der Bauausführung."
      ]
    },
    "fr": {
      "slug": "on-site-bim-construction-support",
      "title": "Accompagnement BIM sur chantier pour relier modèle et exécution",
      "shortTitle": "Support BIM sur chantier",
      "description": "Nous apportons une expertise BIM directement sur le chantier pour résoudre les interférences, valider les informations et accélérer les décisions.",
      "intro": "Un modèle a peu de valeur s'il ne dialogue pas avec ce qui se passe sur le terrain. Notre accompagnement BIM sur chantier aide à traduire l'information numérique en actions utiles pour la supervision, la production et le contrôle.",
      "image": "/images/BIMObra.webp",
      "imageAlt": "Accompagnement BIM sur chantier",
      "pillars": [
        { "title": "Réponse immédiate", "description": "Résolution technique plus rapide lorsque des doutes, écarts ou interférences apparaissent." },
        { "title": "Coordination entre les fronts", "description": "Le modèle devient un véritable outil de communication entre conception, bureau technique et chantier." },
        { "title": "Validation continue", "description": "Nous détectons les incohérences avant qu'elles ne deviennent des reprises ou des retards." }
      ],
      "process": [
        { "title": "Revue de contexte", "description": "Nous analysons les jalons, les équipes, le modèle disponible et les principaux risques." },
        { "title": "Déploiement", "description": "Nous définissons présence, responsables et dynamique de support avec le client." },
        { "title": "Accompagnement", "description": "Nous résolvons les incidents et coordonnons selon l'avancement réel du projet." },
        { "title": "Retour d'expérience", "description": "Nous documentons les ajustements pour renforcer les processus futurs." }
      ],
      "outcomes": [
        "Moins de friction entre ce qui est modélisé et ce qui est exécuté.",
        "Une meilleure capacité de décision technique dans les moments critiques.",
        "Une meilleure exploitation du modèle pendant la construction."
      ]
    },
    "it": {
      "slug": "on-site-bim-construction-support",
      "title": "Affiancamento BIM in cantiere per collegare modello ed esecuzione",
      "shortTitle": "Supporto BIM in cantiere",
      "description": "Portiamo il criterio BIM in prima linea di cantiere per risolvere interferenze, validare le informazioni e accelerare le decisioni.",
      "intro": "Il modello vale poco se non dialoga con ciò che accade sul campo. Il nostro affiancamento BIM in cantiere aiuta a tradurre l'informazione digitale in azioni utili per supervisione, produzione e controllo.",
      "image": "/images/BIMObra.webp",
      "imageAlt": "Affiancamento BIM in cantiere",
      "pillars": [
        { "title": "Risposta immediata", "description": "Risoluzione tecnica più rapida quando emergono dubbi, disallineamenti o interferenze." },
        { "title": "Coordinamento tra i fronti", "description": "Il modello viene usato come strumento di comunicazione reale tra progettazione, ufficio tecnico e cantiere." },
        { "title": "Validazione continua", "description": "Individuiamo le incongruenze prima che diventino rilavorazioni o ritardi." }
      ],
      "process": [
        { "title": "Revisione del contesto", "description": "Analizziamo milestone, team, modello disponibile e rischi principali." },
        { "title": "Avvio", "description": "Definiamo presenza, responsabili e dinamiche di supporto con il cliente." },
        { "title": "Affiancamento", "description": "Risolviamo le criticità e coordiniamo in base all'avanzamento reale del progetto." },
        { "title": "Retroazione", "description": "Documentiamo gli aggiustamenti per rafforzare i processi futuri." }
      ],
      "outcomes": [
        "Meno attriti tra ciò che è modellato e ciò che viene eseguito.",
        "Migliore capacità decisionale tecnica nei momenti critici.",
        "Maggiore valorizzazione del modello durante la costruzione."
      ]
    },
    "pt": {
      "slug": "on-site-bim-construction-support",
      "title": "Acompanhamento BIM em obra para conectar modelo e execução",
      "shortTitle": "Suporte BIM em obra",
      "description": "Levamos critério BIM para a frente de obra para resolver interferências, validar informações e acelerar decisões.",
      "intro": "O modelo vale pouco se não dialoga com o que acontece em campo. Nosso acompanhamento BIM em obra ajuda a traduzir informação digital em ações úteis para supervisão, produção e controle.",
      "image": "/images/BIMObra.webp",
      "imageAlt": "Acompanhamento BIM em obra",
      "pillars": [
        { "title": "Resposta imediata", "description": "Resolução técnica mais rápida quando surgem dúvidas, desajustes ou interferências." },
        { "title": "Coordenação entre frentes", "description": "O modelo é usado como ferramenta real de comunicação entre projeto, escritório técnico e obra." },
        { "title": "Validação contínua", "description": "Detectamos inconsistências antes que se tornem retrabalho ou atraso." }
      ],
      "process": [
        { "title": "Revisão de contexto", "description": "Analisamos marcos, equipes, modelo disponível e principais riscos." },
        { "title": "Implantação", "description": "Definimos presença, responsáveis e dinâmica de suporte com o cliente." },
        { "title": "Acompanhamento", "description": "Resolvemos incidências e coordenamos conforme o avanço real do projeto." },
        { "title": "Retroalimentação", "description": "Documentamos ajustes para fortalecer processos futuros." }
      ],
      "outcomes": [
        "Menos atritos entre o que é modelado e o que é executado.",
        "Melhor capacidade de decisão técnica em momentos críticos.",
        "Maior aproveitamento do modelo durante a construção."
      ]
    },
    "ru": {
      "slug": "on-site-bim-construction-support",
      "title": "Сопровождение BIM на стройплощадке для связи модели с реальным исполнением",
      "shortTitle": "BIM-поддержка на стройплощадке",
      "description": "Мы применяем BIM-подход непосредственно на объекте, чтобы устранять коллизии, проверять информацию и ускорять принятие решений.",
      "intro": "Модель мало полезна, если она не соотносится с тем, что происходит на площадке. Наше сопровождение BIM на стройке помогает превращать цифровую информацию в полезные действия для контроля, производства и надзора.",
      "image": "/images/BIMObra.webp",
      "imageAlt": "Сопровождение BIM на стройплощадке",
      "pillars": [
        { "title": "Мгновенная реакция", "description": "Более быстрое техническое решение при возникновении вопросов, несоответствий или коллизий." },
        { "title": "Координация между направлениями", "description": "Модель используется как реальный инструмент коммуникации между проектированием, техотделом и стройкой." },
        { "title": "Постоянная проверка", "description": "Мы выявляем несоответствия до того, как они превратятся в переделки или задержки." }
      ],
      "process": [
        { "title": "Анализ контекста", "description": "Изучаем этапы, команды, доступную модель и основные риски." },
        { "title": "Развёртывание", "description": "Определяем присутствие, ответственных и порядок поддержки совместно с клиентом." },
        { "title": "Сопровождение", "description": "Решаем возникающие вопросы и координируем работу по реальному прогрессу проекта." },
        { "title": "Обратная связь", "description": "Документируем корректировки для усиления будущих процессов." }
      ],
      "outcomes": [
        "Меньше расхождений между смоделированным и построенным.",
        "Более уверенные технические решения в критичные моменты.",
        "Более эффективное использование модели в ходе строительства."
      ]
    },
    "zh": {
      "slug": "on-site-bim-construction-support",
      "title": "现场 BIM 支持，实现模型与施工的有效衔接",
      "shortTitle": "现场 BIM 支持",
      "description": "我们将 BIM 理念带到施工一线，用于解决碰撞问题、核实信息并加快决策速度。",
      "intro": "如果模型无法与现场实际情况相印证，其价值就十分有限。我们的现场 BIM 支持服务，帮助将数字信息转化为对监理、生产与管控有实际帮助的行动。",
      "image": "/images/BIMObra.webp",
      "imageAlt": "现场 BIM 支持",
      "pillars": [
        { "title": "即时响应", "description": "在出现疑问、偏差或碰撞时提供更快速的技术解决方案。" },
        { "title": "多方协同", "description": "模型成为设计、技术办公室与施工现场之间真正的沟通工具。" },
        { "title": "持续核验", "description": "在问题演变为返工或延误之前及时发现不一致之处。" }
      ],
      "process": [
        { "title": "背景审查", "description": "分析里程碑、团队、可用模型及主要风险。" },
        { "title": "现场部署", "description": "与客户共同确定驻场安排、责任人与支持机制。" },
        { "title": "现场陪伴", "description": "解决现场问题，并根据项目实际进度进行协同。" },
        { "title": "经验反馈", "description": "记录调整内容，为未来流程提供参考。" }
      ],
      "outcomes": [
        "减少建模内容与实际施工之间的摩擦。",
        "在关键时刻具备更强的技术决策能力。",
        "施工期间更充分地发挥模型价值。"
      ]
    }
  },
  "bim-for-manufacturing": {
    "es": {
      "slug": "bim-for-manufacturing",
      "title": "Detallado BIM para fabricacion y rebar con alto control tecnico",
      "shortTitle": "BIM para fabricacion",
      "description": "Modelado detallado y documentacion lista para fabricacion, con foco en acero de refuerzo, trazabilidad y prefabricacion.",
      "intro": "En fabricacion el error cuesta mucho mas. Por eso trabajamos modelos y entregables orientados a precision, secuencia y aprovechamiento real en taller y montaje.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "Detallado BIM para fabricacion",
      "pillars": [
        {
          "title": "Precision de modelado",
          "description": "Desarrollamos modelos con criterio constructivo y nivel de detalle util para produccion."
        },
        {
          "title": "Documentacion trazable",
          "description": "Planos, listados y salidas que permiten controlar fabricacion y montaje con menos ambiguedad."
        },
        {
          "title": "Compatibilidad operativa",
          "description": "Preparamos informacion para requerimientos del cliente, taller o maquinaria asociada."
        }
      ],
      "process": [
        {
          "title": "Analisis tecnico",
          "description": "Estudiamos planos, restricciones y objetivos de fabricacion."
        },
        {
          "title": "Modelado y detallado",
          "description": "Construimos geometria, refuerzo y logica de documentacion."
        },
        {
          "title": "Coordinacion",
          "description": "Revisamos interferencias y consistencia con otras disciplinas."
        },
        {
          "title": "Entrega productiva",
          "description": "Emitimos salidas listas para fabricacion, control o montaje."
        }
      ],
      "outcomes": [
        "Reduccion de incertidumbre antes de taller o montaje.",
        "Mejor control de cantidades, piezas y documentacion.",
        "Mayor valor del modelo en fases de produccion real."
      ]
    },
    "en": {
      "slug": "bim-for-manufacturing",
      "title": "BIM detailing for fabrication and rebar with strong technical control",
      "shortTitle": "BIM for fabrication",
      "description": "Detailed modeling and fabrication-ready documentation focused on reinforcement, traceability and prefabrication.",
      "intro": "In fabrication, errors are far more expensive. That is why we develop models and deliverables oriented to precision, sequence and real usefulness in workshop and assembly environments.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "BIM detailing for fabrication",
      "pillars": [
        {
          "title": "Modeling precision",
          "description": "We produce models with constructability logic and the level of detail required for production."
        },
        {
          "title": "Traceable documentation",
          "description": "Drawings, listings and outputs that support fabrication and assembly control with less ambiguity."
        },
        {
          "title": "Operational compatibility",
          "description": "We prepare information for client requirements, workshop workflows or associated machinery."
        }
      ],
      "process": [
        {
          "title": "Technical analysis",
          "description": "We study drawings, constraints and fabrication objectives."
        },
        {
          "title": "Modeling and detailing",
          "description": "We build geometry, reinforcement logic and documentation structure."
        },
        {
          "title": "Coordination",
          "description": "We review clashes and consistency with other disciplines."
        },
        {
          "title": "Production delivery",
          "description": "We issue outputs ready for fabrication, control or assembly."
        }
      ],
      "outcomes": [
        "Less uncertainty before workshop or assembly starts.",
        "Better control of quantities, pieces and documentation.",
        "More value extracted from the model during real production phases."
      ]
    },
    "de": {
      "slug": "bim-for-manufacturing",
      "title": "BIM-Detaillierung für Fertigung und Bewehrung mit hoher technischer Kontrolle",
      "shortTitle": "BIM für Fertigung",
      "description": "Detaillierte Modellierung und fertigungsfähige Dokumentation mit Fokus auf Bewehrungsstahl, Rückverfolgbarkeit und Vorfertigung.",
      "intro": "In der Fertigung kostet ein Fehler deutlich mehr. Deshalb arbeiten wir mit Modellen und Leistungen, die auf Präzision, Ablaufplanung und echten Nutzen in Werkstatt und Montage ausgerichtet sind.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "BIM-Detaillierung für die Fertigung",
      "pillars": [
        { "title": "Modellierungspräzision", "description": "Wir entwickeln Modelle mit baulichem Verständnis und dem für die Produktion notwendigen Detaillierungsgrad." },
        { "title": "Rückverfolgbare Dokumentation", "description": "Pläne, Listen und Ausgaben, die Fertigung und Montage mit weniger Unklarheit steuerbar machen." },
        { "title": "Betriebliche Kompatibilität", "description": "Wir bereiten Informationen für Kundenanforderungen, Werkstatt oder zugehörige Maschinen vor." }
      ],
      "process": [
        { "title": "Technische Analyse", "description": "Wir untersuchen Pläne, Randbedingungen und Fertigungsziele." },
        { "title": "Modellierung und Detaillierung", "description": "Wir erstellen Geometrie, Bewehrung und Dokumentationslogik." },
        { "title": "Koordination", "description": "Wir prüfen Kollisionen und Konsistenz mit anderen Fachbereichen." },
        { "title": "Produktive Übergabe", "description": "Wir liefern fertigungs-, kontroll- oder montagefertige Ausgaben." }
      ],
      "outcomes": [
        "Weniger Unsicherheit vor Werkstatt oder Montage.",
        "Bessere Kontrolle von Mengen, Teilen und Dokumentation.",
        "Höherer Nutzen des Modells in Phasen der realen Produktion."
      ]
    },
    "fr": {
      "slug": "bim-for-manufacturing",
      "title": "Détail BIM pour la fabrication et le ferraillage avec un contrôle technique élevé",
      "shortTitle": "BIM pour la fabrication",
      "description": "Modélisation détaillée et documentation prête pour la fabrication, axée sur les armatures, la traçabilité et la préfabrication.",
      "intro": "Dans la fabrication, une erreur coûte bien plus cher. C'est pourquoi nous concevons des modèles et des livrables orientés vers la précision, la séquence et une réelle utilité en atelier et au montage.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "Détail BIM pour la fabrication",
      "pillars": [
        { "title": "Précision de modélisation", "description": "Nous développons des modèles avec une logique de constructibilité et le niveau de détail utile à la production." },
        { "title": "Documentation traçable", "description": "Plans, listes et sorties qui permettent de contrôler la fabrication et le montage avec moins d'ambiguïté." },
        { "title": "Compatibilité opérationnelle", "description": "Nous préparons l'information selon les exigences du client, de l'atelier ou des machines associées." }
      ],
      "process": [
        { "title": "Analyse technique", "description": "Nous étudions les plans, les contraintes et les objectifs de fabrication." },
        { "title": "Modélisation et détail", "description": "Nous construisons la géométrie, la logique d'armature et de documentation." },
        { "title": "Coordination", "description": "Nous vérifions les interférences et la cohérence avec les autres disciplines." },
        { "title": "Livraison productive", "description": "Nous produisons des sorties prêtes pour la fabrication, le contrôle ou le montage." }
      ],
      "outcomes": [
        "Moins d'incertitude avant l'atelier ou le montage.",
        "Un meilleur contrôle des quantités, des pièces et de la documentation.",
        "Une plus grande valeur du modèle dans les phases de production réelle."
      ]
    },
    "it": {
      "slug": "bim-for-manufacturing",
      "title": "Dettaglio BIM per la fabbricazione e le armature con elevato controllo tecnico",
      "shortTitle": "BIM per la fabbricazione",
      "description": "Modellazione dettagliata e documentazione pronta per la fabbricazione, con focus su armature, tracciabilità e prefabbricazione.",
      "intro": "Nella fabbricazione l'errore costa molto di più. Per questo lavoriamo con modelli ed elaborati orientati a precisione, sequenza e reale utilità in officina e montaggio.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "Dettaglio BIM per la fabbricazione",
      "pillars": [
        { "title": "Precisione di modellazione", "description": "Sviluppiamo modelli con criterio costruttivo e il livello di dettaglio utile alla produzione." },
        { "title": "Documentazione tracciabile", "description": "Elaborati, elenchi e output che consentono di controllare fabbricazione e montaggio con minore ambiguità." },
        { "title": "Compatibilità operativa", "description": "Prepariamo le informazioni secondo i requisiti del cliente, dell'officina o dei macchinari associati." }
      ],
      "process": [
        { "title": "Analisi tecnica", "description": "Studiamo elaborati, vincoli e obiettivi di fabbricazione." },
        { "title": "Modellazione e dettaglio", "description": "Costruiamo geometria, armature e logica documentale." },
        { "title": "Coordinamento", "description": "Verifichiamo interferenze e coerenza con le altre discipline." },
        { "title": "Consegna produttiva", "description": "Emettiamo output pronti per fabbricazione, controllo o montaggio." }
      ],
      "outcomes": [
        "Minore incertezza prima di officina o montaggio.",
        "Migliore controllo di quantità, pezzi e documentazione.",
        "Maggiore valore del modello nelle fasi di produzione reale."
      ]
    },
    "pt": {
      "slug": "bim-for-manufacturing",
      "title": "Detalhamento BIM para fabricação e armadura com alto controle técnico",
      "shortTitle": "BIM para fabricação",
      "description": "Modelagem detalhada e documentação pronta para fabricação, com foco em aço de reforço, rastreabilidade e pré-fabricação.",
      "intro": "Na fabricação, o erro custa muito mais caro. Por isso trabalhamos com modelos e entregáveis voltados à precisão, sequência e real aproveitamento em oficina e montagem.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "Detalhamento BIM para fabricação",
      "pillars": [
        { "title": "Precisão de modelagem", "description": "Desenvolvemos modelos com critério construtivo e o nível de detalhe útil para a produção." },
        { "title": "Documentação rastreável", "description": "Plantas, listagens e saídas que permitem controlar fabricação e montagem com menos ambiguidade." },
        { "title": "Compatibilidade operacional", "description": "Preparamos informações conforme requisitos do cliente, oficina ou maquinário associado." }
      ],
      "process": [
        { "title": "Análise técnica", "description": "Estudamos plantas, restrições e objetivos de fabricação." },
        { "title": "Modelagem e detalhamento", "description": "Construímos geometria, armadura e lógica de documentação." },
        { "title": "Coordenação", "description": "Revisamos interferências e consistência com outras disciplinas." },
        { "title": "Entrega produtiva", "description": "Emitimos saídas prontas para fabricação, controle ou montagem." }
      ],
      "outcomes": [
        "Redução de incerteza antes da oficina ou montagem.",
        "Melhor controle de quantidades, peças e documentação.",
        "Maior valor do modelo nas fases de produção real."
      ]
    },
    "ru": {
      "slug": "bim-for-manufacturing",
      "title": "BIM-детализация для производства и армирования с высоким уровнем технического контроля",
      "shortTitle": "BIM для производства",
      "description": "Детальное моделирование и готовая к производству документация с акцентом на арматуру, прослеживаемость и предварительное изготовление.",
      "intro": "В производстве ошибка обходится значительно дороже. Поэтому мы создаём модели и результаты, ориентированные на точность, последовательность и реальную пользу в цехе и при монтаже.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "BIM-детализация для производства",
      "pillars": [
        { "title": "Точность моделирования", "description": "Мы создаём модели с учётом технологичности и уровня детализации, необходимого для производства." },
        { "title": "Прослеживаемая документация", "description": "Чертежи, спецификации и результаты, обеспечивающие контроль производства и монтажа с меньшей неопределённостью." },
        { "title": "Операционная совместимость", "description": "Мы готовим информацию с учётом требований клиента, цеха или связанного оборудования." }
      ],
      "process": [
        { "title": "Технический анализ", "description": "Изучаем чертежи, ограничения и цели производства." },
        { "title": "Моделирование и детализация", "description": "Создаём геометрию, логику армирования и документации." },
        { "title": "Координация", "description": "Проверяем коллизии и согласованность с другими разделами." },
        { "title": "Передача в производство", "description": "Выпускаем результаты, готовые к производству, контролю или монтажу." }
      ],
      "outcomes": [
        "Меньше неопределённости перед началом работы цеха или монтажа.",
        "Более точный контроль количеств, деталей и документации.",
        "Более высокая ценность модели на этапах реального производства."
      ]
    },
    "zh": {
      "slug": "bim-for-manufacturing",
      "title": "面向加工制造与钢筋深化的高技术管控 BIM 详图服务",
      "shortTitle": "面向制造的 BIM 服务",
      "description": "提供以钢筋、可追溯性与预制为核心、可直接用于加工制造的详细建模与文档。",
      "intro": "在加工制造环节，错误的代价要高得多。因此我们所打造的模型与交付物，专注于精度、工序与在车间及安装环节的实际可用性。",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "面向加工制造的 BIM 详图",
      "pillars": [
        { "title": "建模精度", "description": "我们以可施工性为原则进行建模，并达到生产所需的详细程度。" },
        { "title": "可追溯的文档", "description": "图纸、清单与输出成果可降低歧义，便于管控加工与安装。" },
        { "title": "运营兼容性", "description": "根据客户要求、车间流程或相关设备准备所需信息。" }
      ],
      "process": [
        { "title": "技术分析", "description": "研究图纸、限制条件与加工目标。" },
        { "title": "建模与深化", "description": "构建几何形态、钢筋逻辑与文档结构。" },
        { "title": "协同校核", "description": "核查碰撞及与其他专业的一致性。" },
        { "title": "生产交付", "description": "输出可直接用于加工、管控或安装的成果。" }
      ],
      "outcomes": [
        "在进入车间或安装前降低不确定性。",
        "更好地管控数量、构件与文档。",
        "在实际生产阶段中充分发挥模型价值。"
      ]
    }
  },
  "bim-training-and-implementation": {
    "es": {
      "slug": "bim-training-and-implementation",
      "title": "Implementacion BIM y capacitacion para consolidar una operacion sostenible",
      "shortTitle": "Implementacion BIM",
      "description": "Ayudamos a empresas y entidades a adoptar BIM con metodo, estandares y formacion aplicada a su realidad.",
      "intro": "Implementar BIM no es dar un curso y listo. Se necesita diagnostico, definicion de procesos, acompasamiento de equipos y una ruta clara para que la adopcion se sostenga en el tiempo.",
      "image": "/images/Capacitacion.webp",
      "imageAlt": "Capacitacion e implementacion BIM",
      "pillars": [
        {
          "title": "Diagnostico de madurez",
          "description": "Identificamos en que punto esta la organizacion y donde conviene priorizar cambios."
        },
        {
          "title": "Formacion aplicada",
          "description": "Capacitamos con casos, procesos y herramientas vinculadas a proyectos reales."
        },
        {
          "title": "Implementacion gradual",
          "description": "Aterrizamos BIM con decisiones operativas, no solo teoricas."
        }
      ],
      "process": [
        {
          "title": "Diagnostico",
          "description": "Revisamos capacidades, brechas y objetivos de la organizacion."
        },
        {
          "title": "Diseno del plan",
          "description": "Definimos estandares, prioridades y estructura de adopcion."
        },
        {
          "title": "Capacitacion",
          "description": "Entrenamos perfiles tecnicos y de gestion con enfoque practico."
        },
        {
          "title": "Acompanamiento",
          "description": "Seguimos la implementacion hasta convertirla en rutina operativa."
        }
      ],
      "outcomes": [
        "Mayor claridad en roles, flujos y estandares BIM.",
        "Capacidad interna mas fuerte para sostener la metodologia.",
        "Adopcion menos caotica y mas alineada a negocio."
      ]
    },
    "en": {
      "slug": "bim-training-and-implementation",
      "title": "BIM implementation and training for a sustainable operation",
      "shortTitle": "BIM implementation",
      "description": "We help companies and institutions adopt BIM with method, standards and training tied to their real operational context.",
      "intro": "Implementing BIM is not just delivering a course. It requires diagnosis, process definition, team alignment and a clear roadmap so adoption becomes sustainable over time.",
      "image": "/images/Capacitacion.webp",
      "imageAlt": "BIM training and implementation",
      "pillars": [
        {
          "title": "Maturity assessment",
          "description": "We identify where the organization stands and what should be prioritized first."
        },
        {
          "title": "Applied training",
          "description": "We train through cases, processes and tools connected to real projects."
        },
        {
          "title": "Progressive implementation",
          "description": "We land BIM through operational decisions, not only theory."
        }
      ],
      "process": [
        {
          "title": "Assessment",
          "description": "We review capabilities, gaps and organizational goals."
        },
        {
          "title": "Plan design",
          "description": "We define standards, priorities and the adoption structure."
        },
        {
          "title": "Training",
          "description": "We train technical and management profiles with a practical focus."
        },
        {
          "title": "Support",
          "description": "We follow implementation until it becomes an operational routine."
        }
      ],
      "outcomes": [
        "More clarity in BIM roles, workflows and standards.",
        "Stronger internal capability to sustain the methodology.",
        "A less chaotic and more business-aligned adoption process."
      ]
    },
    "de": {
      "slug": "bim-training-and-implementation",
      "title": "BIM-Implementierung und Schulung für einen nachhaltigen Betrieb",
      "shortTitle": "BIM-Implementierung",
      "description": "Wir helfen Unternehmen und Institutionen, BIM mit Methode, Standards und praxisnaher Schulung einzuführen.",
      "intro": "BIM einzuführen bedeutet nicht nur, einen Kurs zu geben. Es braucht Diagnose, Prozessdefinition, Team-Begleitung und einen klaren Weg, damit die Einführung dauerhaft trägt.",
      "image": "/images/Capacitacion.webp",
      "imageAlt": "BIM-Schulung und -Implementierung",
      "pillars": [
        { "title": "Reifegrad-Diagnose", "description": "Wir identifizieren, wo die Organisation steht und wo Veränderungen priorisiert werden sollten." },
        { "title": "Praxisnahe Schulung", "description": "Wir schulen mit Fällen, Prozessen und Werkzeugen aus realen Projekten." },
        { "title": "Schrittweise Einführung", "description": "Wir setzen BIM mit operativen Entscheidungen um, nicht nur theoretisch." }
      ],
      "process": [
        { "title": "Diagnose", "description": "Wir prüfen Fähigkeiten, Lücken und Ziele der Organisation." },
        { "title": "Planentwicklung", "description": "Wir definieren Standards, Prioritäten und die Struktur der Einführung." },
        { "title": "Schulung", "description": "Wir schulen technische und Management-Profile praxisorientiert." },
        { "title": "Begleitung", "description": "Wir begleiten die Umsetzung, bis sie zur operativen Routine wird." }
      ],
      "outcomes": [
        "Mehr Klarheit bei Rollen, Abläufen und BIM-Standards.",
        "Stärkere interne Kompetenz, um die Methodik zu tragen.",
        "Weniger chaotische, stärker geschäftsorientierte Einführung."
      ]
    },
    "fr": {
      "slug": "bim-training-and-implementation",
      "title": "Implémentation et formation BIM pour une exploitation durable",
      "shortTitle": "Implémentation BIM",
      "description": "Nous aidons les entreprises et les institutions à adopter le BIM avec méthode, standards et formation adaptée à leur réalité.",
      "intro": "Implémenter le BIM ne se résume pas à dispenser une formation. Il faut un diagnostic, une définition des processus, un accompagnement des équipes et une feuille de route claire pour que l'adoption dure dans le temps.",
      "image": "/images/Capacitacion.webp",
      "imageAlt": "Formation et implémentation BIM",
      "pillars": [
        { "title": "Diagnostic de maturité", "description": "Nous identifions où en est l'organisation et où prioriser les changements." },
        { "title": "Formation appliquée", "description": "Nous formons avec des cas, des processus et des outils liés à des projets réels." },
        { "title": "Implémentation progressive", "description": "Nous ancrons le BIM par des décisions opérationnelles, pas seulement théoriques." }
      ],
      "process": [
        { "title": "Diagnostic", "description": "Nous examinons les capacités, les écarts et les objectifs de l'organisation." },
        { "title": "Conception du plan", "description": "Nous définissons standards, priorités et structure d'adoption." },
        { "title": "Formation", "description": "Nous formons les profils techniques et managériaux avec une approche pratique." },
        { "title": "Accompagnement", "description": "Nous suivons l'implémentation jusqu'à ce qu'elle devienne une routine opérationnelle." }
      ],
      "outcomes": [
        "Plus de clarté dans les rôles, les flux et les standards BIM.",
        "Une capacité interne plus solide pour soutenir la méthodologie.",
        "Une adoption moins chaotique et mieux alignée sur l'activité."
      ]
    },
    "it": {
      "slug": "bim-training-and-implementation",
      "title": "Implementazione BIM e formazione per consolidare un'operatività sostenibile",
      "shortTitle": "Implementazione BIM",
      "description": "Aiutiamo aziende ed enti ad adottare il BIM con metodo, standard e formazione applicata alla loro realtà.",
      "intro": "Implementare il BIM non significa solo tenere un corso. Servono diagnosi, definizione dei processi, affiancamento dei team e un percorso chiaro perché l'adozione si mantenga nel tempo.",
      "image": "/images/Capacitacion.webp",
      "imageAlt": "Formazione e implementazione BIM",
      "pillars": [
        { "title": "Diagnosi di maturità", "description": "Identifichiamo a che punto si trova l'organizzazione e dove conviene dare priorità ai cambiamenti." },
        { "title": "Formazione applicata", "description": "Formiamo con casi, processi e strumenti collegati a progetti reali." },
        { "title": "Implementazione graduale", "description": "Portiamo il BIM sul campo con decisioni operative, non solo teoriche." }
      ],
      "process": [
        { "title": "Diagnosi", "description": "Analizziamo capacità, lacune e obiettivi dell'organizzazione." },
        { "title": "Progettazione del piano", "description": "Definiamo standard, priorità e struttura di adozione." },
        { "title": "Formazione", "description": "Formiamo profili tecnici e manageriali con un approccio pratico." },
        { "title": "Affiancamento", "description": "Seguiamo l'implementazione finché non diventa routine operativa." }
      ],
      "outcomes": [
        "Maggiore chiarezza in ruoli, flussi e standard BIM.",
        "Capacità interna più solida per sostenere la metodologia.",
        "Adozione meno caotica e più allineata al business."
      ]
    },
    "pt": {
      "slug": "bim-training-and-implementation",
      "title": "Implementação BIM e capacitação para consolidar uma operação sustentável",
      "shortTitle": "Implementação BIM",
      "description": "Ajudamos empresas e instituições a adotar o BIM com método, padrões e capacitação aplicada à sua realidade.",
      "intro": "Implementar BIM não é apenas dar um curso. É preciso diagnóstico, definição de processos, acompanhamento das equipes e um caminho claro para que a adoção se sustente ao longo do tempo.",
      "image": "/images/Capacitacion.webp",
      "imageAlt": "Capacitação e implementação BIM",
      "pillars": [
        { "title": "Diagnóstico de maturidade", "description": "Identificamos em que ponto está a organização e onde priorizar mudanças." },
        { "title": "Capacitação aplicada", "description": "Capacitamos com casos, processos e ferramentas ligados a projetos reais." },
        { "title": "Implementação gradual", "description": "Colocamos o BIM em prática com decisões operacionais, não apenas teóricas." }
      ],
      "process": [
        { "title": "Diagnóstico", "description": "Revisamos capacidades, lacunas e objetivos da organização." },
        { "title": "Desenho do plano", "description": "Definimos padrões, prioridades e estrutura de adoção." },
        { "title": "Capacitação", "description": "Treinamos perfis técnicos e de gestão com foco prático." },
        { "title": "Acompanhamento", "description": "Seguimos a implementação até que se torne rotina operacional." }
      ],
      "outcomes": [
        "Maior clareza em papéis, fluxos e padrões BIM.",
        "Capacidade interna mais forte para sustentar a metodologia.",
        "Adoção menos caótica e mais alinhada ao negócio."
      ]
    },
    "ru": {
      "slug": "bim-training-and-implementation",
      "title": "Внедрение BIM и обучение для устойчивой работы",
      "shortTitle": "Внедрение BIM",
      "description": "Мы помогаем компаниям и организациям внедрять BIM с методологией, стандартами и обучением, применимым к их реальности.",
      "intro": "Внедрение BIM — это не просто проведение курса. Требуется диагностика, определение процессов, сопровождение команд и чёткий план, чтобы внедрение сохранялось со временем.",
      "image": "/images/Capacitacion.webp",
      "imageAlt": "Обучение и внедрение BIM",
      "pillars": [
        { "title": "Диагностика зрелости", "description": "Определяем текущий уровень организации и приоритетные направления изменений." },
        { "title": "Прикладное обучение", "description": "Обучаем на реальных кейсах, процессах и инструментах, связанных с реальными проектами." },
        { "title": "Постепенное внедрение", "description": "Внедряем BIM через операционные, а не только теоретические решения." }
      ],
      "process": [
        { "title": "Диагностика", "description": "Оцениваем возможности, пробелы и цели организации." },
        { "title": "Разработка плана", "description": "Определяем стандарты, приоритеты и структуру внедрения." },
        { "title": "Обучение", "description": "Обучаем технических и управленческих специалистов с практическим уклоном." },
        { "title": "Сопровождение", "description": "Сопровождаем внедрение, пока оно не станет операционной нормой." }
      ],
      "outcomes": [
        "Больше ясности в ролях, процессах и стандартах BIM.",
        "Более сильная внутренняя компетенция для поддержки методологии.",
        "Менее хаотичное внедрение, более согласованное с бизнесом."
      ]
    },
    "zh": {
      "slug": "bim-training-and-implementation",
      "title": "BIM 实施与培训，构建可持续的运营体系",
      "shortTitle": "BIM 实施",
      "description": "我们帮助企业与机构以科学方法、标准与贴合自身实际的培训来落地 BIM。",
      "intro": "实施 BIM 并非只是开设一次培训课程，而是需要诊断、流程定义、团队陪伴与清晰的路径，才能让落地成果长期保持。",
      "image": "/images/Capacitacion.webp",
      "imageAlt": "BIM 培训与实施",
      "pillars": [
        { "title": "成熟度诊断", "description": "评估组织当前所处阶段，并明确优先推进的变革方向。" },
        { "title": "实战型培训", "description": "结合真实项目中的案例、流程与工具开展培训。" },
        { "title": "渐进式实施", "description": "以实际运营决策而非纸上谈兵的方式落地 BIM。" }
      ],
      "process": [
        { "title": "诊断评估", "description": "评估组织能力、差距与目标。" },
        { "title": "方案设计", "description": "确定标准、优先事项与实施结构。" },
        { "title": "培训赋能", "description": "以实践为导向培训技术与管理岗位人员。" },
        { "title": "持续陪伴", "description": "持续跟进实施，直至成为常态化运营流程。" }
      ],
      "outcomes": [
        "角色、流程与 BIM 标准更加清晰。",
        "内部能力更强，可持续支撑该方法论。",
        "落地过程更有序，且与业务目标更加契合。"
      ]
    }
  },
  "comprehensive-bim-modeling": {
    "es": {
      "slug": "comprehensive-bim-modeling",
      "title": "Modelado BIM integral para arquitectura, estructuras y MEP",
      "shortTitle": "Modelado BIM integral",
      "description": "Desarrollamos modelos coordinados y utiles para diseno, documentacion, control y coordinacion multidisciplinaria.",
      "intro": "Un buen modelo BIM no solo se ve bien: ordena informacion, ayuda a detectar conflictos y sirve como base para decisiones tecnicas. Nuestro enfoque busca que el modelo sea realmente operativo.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "Modelado BIM integral",
      "pillars": [
        {
          "title": "Coordinacion entre disciplinas",
          "description": "Integramos arquitectura, estructura y MEP para detectar conflictos con anticipacion."
        },
        {
          "title": "Modelos ricos en informacion",
          "description": "No trabajamos solo geometria; estructuramos datos utiles para documentar y controlar."
        },
        {
          "title": "Base para decisiones",
          "description": "El modelo se convierte en una plataforma para revisar, medir y planificar mejor."
        }
      ],
      "process": [
        {
          "title": "Levantamiento",
          "description": "Recibimos informacion base, criterios de modelado y objetivos del proyecto."
        },
        {
          "title": "Desarrollo",
          "description": "Construimos modelos por disciplina con orden y consistencia."
        },
        {
          "title": "Coordinacion",
          "description": "Revisamos interferencias y ajustamos el modelo federado."
        },
        {
          "title": "Entrega",
          "description": "Entregamos un modelo util para documentacion, control y fases siguientes."
        }
      ],
      "outcomes": [
        "Menor riesgo de interferencias descubiertas tarde.",
        "Mejor calidad de informacion para coordinar y documentar.",
        "Mayor valor del modelo para clientes, proyectistas y obra."
      ]
    },
    "en": {
      "slug": "comprehensive-bim-modeling",
      "title": "Comprehensive BIM modeling for architecture, structure and MEP",
      "shortTitle": "Comprehensive BIM modeling",
      "description": "We develop coordinated models that support design, documentation, control and multidisciplinary collaboration.",
      "intro": "A good BIM model should do more than look correct: it should organize information, support clash detection and help teams make better technical decisions. Our approach focuses on operational value.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "Comprehensive BIM modeling",
      "pillars": [
        {
          "title": "Multidisciplinary coordination",
          "description": "We integrate architecture, structure and MEP to identify conflicts earlier."
        },
        {
          "title": "Information-rich models",
          "description": "We work beyond geometry, structuring data useful for documentation and control."
        },
        {
          "title": "Decision-ready base",
          "description": "The model becomes a platform to review, measure and plan more effectively."
        }
      ],
      "process": [
        {
          "title": "Input gathering",
          "description": "We collect base information, modeling criteria and project goals."
        },
        {
          "title": "Model development",
          "description": "We build disciplined models with consistency and structure."
        },
        {
          "title": "Coordination",
          "description": "We review clashes and adjust the federated model."
        },
        {
          "title": "Delivery",
          "description": "We issue a model ready for documentation, control and downstream phases."
        }
      ],
      "outcomes": [
        "Lower risk of late-stage clashes.",
        "Better information quality for coordination and documentation.",
        "Higher model value for clients, designers and construction teams."
      ]
    },
    "de": {
      "slug": "comprehensive-bim-modeling",
      "title": "Integrale BIM-Modellierung für Architektur, Tragwerk und TGA",
      "shortTitle": "Integrale BIM-Modellierung",
      "description": "Wir entwickeln koordinierte Modelle, die Planung, Dokumentation, Kontrolle und interdisziplinäre Koordination unterstützen.",
      "intro": "Ein gutes BIM-Modell sieht nicht nur gut aus: Es ordnet Informationen, hilft bei der Konflikterkennung und dient als Grundlage für technische Entscheidungen. Unser Ansatz zielt darauf ab, dass das Modell wirklich operativ nutzbar ist.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "Integrale BIM-Modellierung",
      "pillars": [
        { "title": "Koordination zwischen Fachbereichen", "description": "Wir integrieren Architektur, Tragwerk und TGA, um Konflikte frühzeitig zu erkennen." },
        { "title": "Informationsreiche Modelle", "description": "Wir arbeiten nicht nur mit Geometrie; wir strukturieren nützliche Daten für Dokumentation und Kontrolle." },
        { "title": "Grundlage für Entscheidungen", "description": "Das Modell wird zu einer Plattform, um besser zu prüfen, zu messen und zu planen." }
      ],
      "process": [
        { "title": "Aufnahme", "description": "Wir erhalten Basisinformationen, Modellierungskriterien und Projektziele." },
        { "title": "Entwicklung", "description": "Wir bauen fachspezifische Modelle mit Ordnung und Konsistenz." },
        { "title": "Koordination", "description": "Wir prüfen Kollisionen und passen das föderierte Modell an." },
        { "title": "Übergabe", "description": "Wir liefern ein Modell, das für Dokumentation, Kontrolle und Folgephasen nutzbar ist." }
      ],
      "outcomes": [
        "Geringeres Risiko spät entdeckter Kollisionen.",
        "Bessere Informationsqualität für Koordination und Dokumentation.",
        "Höherer Modellwert für Kunden, Planer und Baustelle."
      ]
    },
    "fr": {
      "slug": "comprehensive-bim-modeling",
      "title": "Modélisation BIM globale pour l'architecture, la structure et le MEP",
      "shortTitle": "Modélisation BIM globale",
      "description": "Nous développons des modèles coordonnés utiles à la conception, la documentation, le contrôle et la coordination pluridisciplinaire.",
      "intro": "Un bon modèle BIM ne se contente pas d'être esthétique : il organise l'information, aide à détecter les conflits et sert de base aux décisions techniques. Notre approche vise à rendre le modèle réellement opérationnel.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "Modélisation BIM globale",
      "pillars": [
        { "title": "Coordination entre disciplines", "description": "Nous intégrons architecture, structure et MEP pour détecter les conflits en amont." },
        { "title": "Modèles riches en information", "description": "Nous ne travaillons pas seulement la géométrie ; nous structurons des données utiles à la documentation et au contrôle." },
        { "title": "Base pour les décisions", "description": "Le modèle devient une plateforme pour mieux réviser, mesurer et planifier." }
      ],
      "process": [
        { "title": "Recueil des données", "description": "Nous recevons les informations de base, les critères de modélisation et les objectifs du projet." },
        { "title": "Développement", "description": "Nous construisons des modèles par discipline avec ordre et cohérence." },
        { "title": "Coordination", "description": "Nous vérifions les interférences et ajustons le modèle fédéré." },
        { "title": "Livraison", "description": "Nous livrons un modèle utile à la documentation, au contrôle et aux phases suivantes." }
      ],
      "outcomes": [
        "Un risque réduit d'interférences découvertes tardivement.",
        "Une meilleure qualité d'information pour la coordination et la documentation.",
        "Une plus grande valeur du modèle pour les clients, les concepteurs et le chantier."
      ]
    },
    "it": {
      "slug": "comprehensive-bim-modeling",
      "title": "Modellazione BIM integrale per architettura, strutture e impianti MEP",
      "shortTitle": "Modellazione BIM integrale",
      "description": "Sviluppiamo modelli coordinati e utili per progettazione, documentazione, controllo e coordinamento multidisciplinare.",
      "intro": "Un buon modello BIM non si limita ad avere un bell'aspetto: organizza le informazioni, aiuta a individuare i conflitti e funge da base per le decisioni tecniche. Il nostro approccio mira a rendere il modello realmente operativo.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "Modellazione BIM integrale",
      "pillars": [
        { "title": "Coordinamento tra discipline", "description": "Integriamo architettura, strutture e impianti MEP per individuare i conflitti in anticipo." },
        { "title": "Modelli ricchi di informazioni", "description": "Non lavoriamo solo sulla geometria; strutturiamo dati utili per documentare e controllare." },
        { "title": "Base per le decisioni", "description": "Il modello diventa una piattaforma per rivedere, misurare e pianificare meglio." }
      ],
      "process": [
        { "title": "Rilievo", "description": "Riceviamo informazioni di base, criteri di modellazione e obiettivi del progetto." },
        { "title": "Sviluppo", "description": "Costruiamo modelli per disciplina con ordine e coerenza." },
        { "title": "Coordinamento", "description": "Verifichiamo le interferenze e adeguiamo il modello federato." },
        { "title": "Consegna", "description": "Consegniamo un modello utile per documentazione, controllo e fasi successive." }
      ],
      "outcomes": [
        "Minore rischio di interferenze scoperte in ritardo.",
        "Migliore qualità delle informazioni per coordinamento e documentazione.",
        "Maggiore valore del modello per clienti, progettisti e cantiere."
      ]
    },
    "pt": {
      "slug": "comprehensive-bim-modeling",
      "title": "Modelagem BIM integral para arquitetura, estruturas e MEP",
      "shortTitle": "Modelagem BIM integral",
      "description": "Desenvolvemos modelos coordenados e úteis para projeto, documentação, controle e coordenação multidisciplinar.",
      "intro": "Um bom modelo BIM não é só esteticamente correto: ele organiza informações, ajuda a detectar conflitos e serve como base para decisões técnicas. Nossa abordagem busca tornar o modelo realmente operacional.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "Modelagem BIM integral",
      "pillars": [
        { "title": "Coordenação entre disciplinas", "description": "Integramos arquitetura, estrutura e MEP para detectar conflitos antecipadamente." },
        { "title": "Modelos ricos em informação", "description": "Não trabalhamos apenas geometria; estruturamos dados úteis para documentar e controlar." },
        { "title": "Base para decisões", "description": "O modelo se torna uma plataforma para revisar, medir e planejar melhor." }
      ],
      "process": [
        { "title": "Levantamento", "description": "Recebemos informações base, critérios de modelagem e objetivos do projeto." },
        { "title": "Desenvolvimento", "description": "Construímos modelos por disciplina com ordem e consistência." },
        { "title": "Coordenação", "description": "Revisamos interferências e ajustamos o modelo federado." },
        { "title": "Entrega", "description": "Entregamos um modelo útil para documentação, controle e fases seguintes." }
      ],
      "outcomes": [
        "Menor risco de interferências descobertas tardiamente.",
        "Melhor qualidade de informação para coordenar e documentar.",
        "Maior valor do modelo para clientes, projetistas e obra."
      ]
    },
    "ru": {
      "slug": "comprehensive-bim-modeling",
      "title": "Комплексное BIM-моделирование для архитектуры, конструкций и инженерных систем",
      "shortTitle": "Комплексное BIM-моделирование",
      "description": "Мы создаём скоординированные модели, полезные для проектирования, документирования, контроля и междисциплинарной координации.",
      "intro": "Хорошая BIM-модель — это не просто внешне корректный результат: она упорядочивает информацию, помогает выявлять коллизии и служит основой для технических решений. Наш подход направлен на то, чтобы модель действительно работала на практике.",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "Комплексное BIM-моделирование",
      "pillars": [
        { "title": "Координация между разделами", "description": "Мы объединяем архитектуру, конструкции и инженерные системы, чтобы заранее выявлять конфликты." },
        { "title": "Информационно насыщенные модели", "description": "Мы работаем не только с геометрией — мы структурируем данные, полезные для документирования и контроля." },
        { "title": "Основа для решений", "description": "Модель становится платформой для более качественной проверки, измерений и планирования." }
      ],
      "process": [
        { "title": "Сбор исходных данных", "description": "Получаем базовую информацию, критерии моделирования и цели проекта." },
        { "title": "Разработка", "description": "Создаём модели по разделам с порядком и согласованностью." },
        { "title": "Координация", "description": "Проверяем коллизии и корректируем объединённую модель." },
        { "title": "Передача", "description": "Передаём модель, готовую к документированию, контролю и последующим этапам." }
      ],
      "outcomes": [
        "Меньше риск позднего обнаружения коллизий.",
        "Более высокое качество информации для координации и документирования.",
        "Более высокая ценность модели для заказчиков, проектировщиков и строителей."
      ]
    },
    "zh": {
      "slug": "comprehensive-bim-modeling",
      "title": "面向建筑、结构与机电（MEP）的综合 BIM 建模",
      "shortTitle": "综合 BIM 建模",
      "description": "我们打造协同一致、真正实用的模型，支持设计、文档编制、管控与多专业协同。",
      "intro": "优秀的 BIM 模型不仅仅是外观正确：它能有效组织信息、帮助发现冲突，并为技术决策提供依据。我们的方法致力于让模型真正具备可运营价值。",
      "image": "/images/Ingenieria_Detalle.webp",
      "imageAlt": "综合 BIM 建模",
      "pillars": [
        { "title": "多专业协同", "description": "整合建筑、结构与机电专业，提前发现潜在冲突。" },
        { "title": "信息丰富的模型", "description": "我们不仅关注几何形态，还构建有助于文档编制与管控的结构化数据。" },
        { "title": "决策支持基础", "description": "模型成为审查、测算与规划的有效平台。" }
      ],
      "process": [
        { "title": "资料收集", "description": "获取基础信息、建模标准与项目目标。" },
        { "title": "模型开发", "description": "按专业构建有序、一致的模型。" },
        { "title": "协同校核", "description": "核查碰撞问题并调整整合模型。" },
        { "title": "成果交付", "description": "交付可用于文档编制、管控及后续阶段的模型。" }
      ],
      "outcomes": [
        "降低后期才发现碰撞的风险。",
        "提升协同与文档编制所需的信息质量。",
        "为客户、设计方与施工方带来更高的模型价值。"
      ]
    }
  }
};
