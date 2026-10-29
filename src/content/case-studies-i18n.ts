import type { Locale } from "@/lib/locale";

/**
 * Case-study and testimonial copy for the locales beyond Spanish and English
 * (those two live next to the data in src/lib/case-studies.ts and
 * src/components/home/social-proof-section.tsx). Metric labels follow the
 * order of each case's `metrics` array.
 */
export interface CaseStudyTranslation {
  client?: string;
  sector: string;
  service: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: string[];
}

type OtherLocale = Exclude<Locale, "es" | "en">;

export const caseStudyTranslations: Record<string, Record<OtherLocale, CaseStudyTranslation>> = {
  "estadio-chepen": {
    de: {
      client: "Stadion von Chepén",
      sector: "Sportinfrastruktur · öffentliche Investition",
      service: "BIM-Beratung für die Ausführungsplanung eines öffentlichen Investitionsprojekts",
      challenge:
        "Die Ausführungsplanung muss aus BIM-Modellen entstehen – mit abgestimmten Fachdisziplinen, konsistenten Plänen und Mengenermittlungen, die sich bei der Prüfung nachvollziehen lassen.",
      solution:
        "Als BIM-Berater übernehmen wir die BIM-Modellierung, die Mengenermittlung und die Planerstellung während der Ausarbeitung. Wir erstellen ein Modell pro Fachdisziplin: Tragwerk, Architektur, Elektroinstallation, Sanitärinstallation, Kommunikationstechnik sowie Fluchtwege und Beschilderung – alle in LOD 3, das Tragwerk bis zur Bewehrung. Gemeinsam mit den Fachplanern arbeiten wir mit eigenen Add-ins, die Modelldaten füllen und Mengen exportieren, und führen die Modelle zur Koordination in einem Koordinationsmodell zusammen. Die Modelle sind außerdem mit dem Terminplan verknüpft, um den Bauablauf in 4D zu simulieren.",
      result:
        "Das Projekt läuft noch. Pläne und Mengen werden mit Rückverfolgbarkeit bis zum einzelnen Bauteil aus den Modellen erzeugt, sodass die Unterlagen abgestimmt bleiben, während sich der Entwurf weiterentwickelt.",
      metrics: ["Modellierung bis zur Bewehrung", "Aufgabenbereiche: Modellierung, Mengen und Pläne"],
    },
    fr: {
      client: "Stade municipal de Chepén",
      sector: "Infrastructure sportive · investissement public",
      service: "Conseil BIM pour le dossier technique d'un projet d'investissement public",
      challenge:
        "Le dossier technique doit être produit à partir de maquettes BIM, avec une coordination entre disciplines, des plans cohérents et des métrés vérifiables lors de la revue.",
      solution:
        "En tant que consultants BIM, nous prenons en charge la modélisation BIM, les métrés et la production des plans pendant l'élaboration du dossier. Nous réalisons une maquette par discipline : structure, architecture, électricité, plomberie, courants faibles, et évacuation et signalétique, toutes en LOD 3 et, pour la structure, jusqu'aux armatures. Avec les ingénieurs concepteurs, nos propres add-ins renseignent les données des maquettes et exportent les métrés, et nous fédérons les maquettes pour les coordonner. Les maquettes sont aussi liées au planning pour simuler en 4D la séquence de construction.",
      result:
        "La mission est en cours. Les plans et les métrés sont générés depuis les maquettes avec une traçabilité par élément, ce qui garde la documentation coordonnée à mesure que le projet évolue.",
      metrics: ["modélisation jusqu'aux armatures", "volets pris en charge : modélisation, métrés et plans"],
    },
    it: {
      client: "Stadio municipale di Chepén",
      sector: "Infrastrutture sportive · investimento pubblico",
      service: "Consulenza BIM per il progetto esecutivo di un investimento pubblico",
      challenge:
        "Il progetto esecutivo deve nascere da modelli BIM, con coordinamento tra le discipline, tavole coerenti e computi verificabili in fase di revisione.",
      solution:
        "Come consulenti BIM curiamo la modellazione BIM, i computi e la produzione delle tavole durante l'elaborazione del progetto. Sviluppiamo un modello per disciplina: strutture, architettura, impianti elettrici, impianti idrico-sanitari, telecomunicazioni, ed esodo e segnaletica, tutti in LOD 3 e, per le strutture, fino alle armature. Insieme ai progettisti usiamo add-in proprietari che compilano i dati dei modelli ed esportano le quantità, e federiamo i modelli per coordinarli. I modelli sono inoltre collegati al cronoprogramma per simulare in 4D la sequenza costruttiva.",
      result:
        "L'incarico è in corso. Tavole e quantità sono generate dai modelli con tracciabilità per singolo elemento, mantenendo la documentazione coordinata mentre il progetto evolve.",
      metrics: ["modellazione fino alle armature", "ambiti seguiti: modellazione, computi e tavole"],
    },
    pt: {
      client: "Estádio Municipal de Chepén",
      sector: "Infraestrutura esportiva · investimento público",
      service: "Consultoria BIM para o projeto executivo de um investimento público",
      challenge:
        "O projeto executivo precisa ser produzido a partir de modelos BIM, com coordenação entre disciplinas, pranchas consistentes e quantitativos que possam ser verificados na revisão.",
      solution:
        "Como consultores BIM, assumimos a modelagem BIM, a extração de quantitativos e a geração de pranchas durante a elaboração do projeto. Desenvolvemos um modelo por disciplina: estruturas, arquitetura, instalações elétricas, instalações hidrossanitárias, comunicações, e evacuação e sinalização, todos em LOD 3 e, em estruturas, até a armadura. Junto com os projetistas, usamos add-ins próprios para preencher os dados dos modelos e exportar quantitativos, e federamos os modelos para coordená-los. Os modelos também são vinculados ao cronograma para simular em 4D a sequência construtiva.",
      result:
        "O serviço está em andamento. Pranchas e quantitativos são gerados a partir dos modelos com rastreabilidade por elemento, mantendo a documentação coordenada à medida que o projeto evolui.",
      metrics: ["modelagem até a armadura", "frentes sob nossa responsabilidade: modelagem, quantitativos e pranchas"],
    },
    ru: {
      client: "Муниципальный стадион Чепен",
      sector: "Спортивная инфраструктура · государственные инвестиции",
      service: "BIM-консалтинг для рабочей документации государственного инвестиционного проекта",
      challenge:
        "Рабочая документация должна создаваться на основе BIM-моделей: с координацией разделов, согласованными чертежами и объёмами работ, которые можно проверить при экспертизе.",
      solution:
        "Как BIM-консультанты мы ведём BIM-моделирование, подсчёт объёмов и выпуск чертежей в ходе разработки документации. Для каждого раздела создаётся своя модель: конструкции, архитектура, электроснабжение, водоснабжение и канализация, связь, а также эвакуация и знаки безопасности — все в LOD 3, а конструкции — вплоть до арматуры. Вместе с проектировщиками мы используем собственные надстройки для заполнения данных моделей и выгрузки объёмов и объединяем модели в сводную для координации. Модели также связаны с графиком для 4D-моделирования последовательности строительства.",
      result:
        "Работы продолжаются. Чертежи и объёмы формируются из моделей с прослеживаемостью до каждого элемента, поэтому документация остаётся согласованной по мере развития проекта.",
      metrics: ["моделирование вплоть до арматуры", "направления в нашей ответственности: модели, объёмы и чертежи"],
    },
    zh: {
      client: "Chepén 市立体育场",
      sector: "体育基础设施 · 公共投资",
      service: "公共投资项目施工图设计的 BIM 咨询",
      challenge: "施工图设计需要基于 BIM 模型完成：各专业协调一致，图纸前后统一，工程量在审查时可核对。",
      solution:
        "作为 BIM 顾问，我们在施工图编制期间负责 BIM 建模、工程量提取和出图。每个专业都有独立的模型：结构、建筑、电气、给排水、通信以及疏散与标识，全部达到 LOD 3，结构模型细化到钢筋。我们与设计专家协作，用自研插件填写模型信息、导出工程量，并将各专业模型整合为协调模型。这些模型还与进度计划关联，用于 4D 模拟施工顺序。",
      result: "服务正在进行中。图纸和工程量均由模型生成，并可追溯到每个构件，使文档在设计演进过程中保持协调。",
      metrics: ["建模细化到钢筋", "我们负责的工作：建模、工程量和图纸"],
    },
  },
  "oficinas-publicas": {
    de: {
      sector: "Institutionelles Bürogebäude",
      service: "BIM-Modellierung, Koordination und Mengenermittlung für eine Ausführungsplanung",
      challenge:
        "Die Ausführungsplanung war mit BIM nach einem BIM-Abwicklungsplan gemäß ISO 19650 zu erstellen: Vorentwurfsmodelle in LOD 2, Modelle aller Fachdisziplinen in LOD 3 für die endgültige Planung und Mengen aus dem Modell – in enger Abstimmung mit den Fachplanern.",
      solution:
        "Wir haben den BIM-Abwicklungsplan erstellt und ein eigenes Remote-BIM-Team aufgebaut, das die Fachplaner während des Entwurfs begleitet hat. In Revit haben wir Architektur, Tragwerk und Haustechnik modelliert, Kollisionen in Navisworks in Arbeitssitzungen mit den Fachdisziplinen koordiniert und Modelle und Dokumente in Trimble Connect als gemeinsame Datenumgebung geteilt. Die Mengen des Tragwerks stammen aus dem Modell, nach dem Leistungsverzeichnis in Excel geordnet und mit manuellen Mengen abgeglichen; außerdem haben wir das Modell mit dem Terminplan verknüpft, um den Bauablauf in 4D zu simulieren.",
      result:
        "Die Pläne der Ausführungsplanung entstanden aus koordinierten Modellen – mit besserer Abstimmung zwischen den Fachdisziplinen und Mengen, die sich auf das Modell zurückführen lassen, ohne die Nacharbeit eines reinen CAD-Ablaufs.",
      metrics: ["Modelle der endgültigen Planung", "Datenquelle: das Modell"],
    },
    fr: {
      sector: "Immeuble de bureaux institutionnel",
      service: "Modélisation BIM, coordination et métrés pour un dossier technique",
      challenge:
        "Le dossier technique devait être réalisé en BIM selon une convention BIM alignée sur l'ISO 19650 : maquettes d'avant-projet en LOD 2, maquettes de toutes les disciplines en LOD 3 pour le dossier définitif et métrés issus du modèle, en lien étroit avec les ingénieurs concepteurs.",
      solution:
        "Nous avons rédigé la convention BIM et constitué une équipe BIM à distance dédiée, aux côtés des concepteurs pendant toute la conception. Nous avons modélisé l'architecture, la structure et les réseaux dans Revit, coordonné les conflits dans Navisworks lors de séances de travail avec chaque discipline, et partagé maquettes et documents dans Trimble Connect comme environnement commun de données. Les métrés de structure ont été tirés du modèle, classés selon le bordereau du budget dans Excel et comparés aux métrés manuels ; nous avons aussi lié la maquette au planning pour simuler en 4D la séquence de construction.",
      result:
        "Les plans du dossier ont été produits à partir de maquettes coordonnées, avec une meilleure cohérence entre disciplines et des métrés traçables jusqu'au modèle, sans les reprises d'un processus uniquement CAO.",
      metrics: ["maquettes du dossier définitif", "source d'information unique : la maquette"],
    },
    it: {
      sector: "Edificio istituzionale per uffici",
      service: "Modellazione BIM, coordinamento e computi per un progetto esecutivo",
      challenge:
        "Il progetto esecutivo doveva essere sviluppato in BIM secondo un Piano di Gestione Informativa allineato alla ISO 19650: modelli del progetto preliminare in LOD 2, modelli di tutte le discipline in LOD 3 per il progetto definitivo e quantità ricavate dal modello, in stretto contatto con i progettisti.",
      solution:
        "Abbiamo redatto il Piano di Gestione Informativa e costituito un team BIM remoto dedicato che ha affiancato i progettisti durante tutta la progettazione. Abbiamo modellato in Revit architettura, strutture e impianti, coordinato le interferenze in Navisworks in sessioni di lavoro con ogni disciplina e condiviso modelli e documenti in Trimble Connect come ambiente di condivisione dati. Le quantità strutturali sono state ricavate dal modello, ordinate secondo l'elenco voci del computo in Excel e confrontate con i computi manuali; abbiamo inoltre collegato il modello al cronoprogramma per simulare in 4D la sequenza costruttiva.",
      result:
        "Le tavole del progetto sono state prodotte da modelli coordinati, con maggiore coerenza tra le discipline e quantità riconducibili al modello, evitando le rilavorazioni di un flusso solo CAD.",
      metrics: ["modelli del progetto definitivo", "unica fonte di informazione: il modello"],
    },
    pt: {
      sector: "Edifício institucional de escritórios",
      service: "Modelagem BIM, coordenação e quantitativos para um projeto executivo",
      challenge:
        "O projeto executivo precisava ser desenvolvido com BIM sob um Plano de Execução BIM alinhado à ISO 19650: modelos do anteprojeto em LOD 2, modelos de todas as disciplinas em LOD 3 para o projeto definitivo e quantitativos obtidos do modelo, em contato próximo com os projetistas.",
      solution:
        "Elaboramos o Plano de Execução BIM e montamos uma equipe BIM remota dedicada, que acompanhou os projetistas durante todo o projeto. Modelamos em Revit arquitetura, estruturas e instalações, coordenamos interferências no Navisworks em sessões de trabalho com cada disciplina e compartilhamos modelos e documentos no Trimble Connect como ambiente comum de dados. Os quantitativos de estruturas foram extraídos do modelo, organizados conforme a planilha orçamentária em Excel e conferidos com quantitativos manuais; também vinculamos o modelo ao cronograma para simular em 4D a sequência construtiva.",
      result:
        "As pranchas do projeto foram geradas a partir de modelos coordenados, com melhor compatibilização entre disciplinas e quantitativos rastreáveis até o modelo, evitando o retrabalho de um fluxo apenas em CAD.",
      metrics: ["modelos do projeto definitivo", "fonte única de informação: o modelo"],
    },
    ru: {
      sector: "Административное офисное здание",
      service: "BIM-моделирование, координация и подсчёт объёмов для рабочей документации",
      challenge:
        "Рабочую документацию требовалось выполнить в BIM по плану реализации BIM, соответствующему ISO 19650: модели эскизного проекта в LOD 2, модели всех разделов в LOD 3 для окончательной документации и объёмы из модели — в тесном взаимодействии с проектировщиками.",
      solution:
        "Мы разработали план реализации BIM и собрали выделенную удалённую BIM-команду, которая сопровождала проектировщиков на всём этапе проектирования. В Revit мы смоделировали архитектуру, конструкции и инженерные системы, координировали коллизии в Navisworks на рабочих встречах с каждым разделом и вели обмен моделями и документами в Trimble Connect как в среде общих данных. Объёмы по конструкциям получены из модели, упорядочены по перечню позиций сметы в Excel и сверены с ручным подсчётом; кроме того, мы связали модель с графиком для 4D-моделирования последовательности строительства.",
      result:
        "Чертежи документации выпущены из скоординированных моделей: разделы лучше согласованы, а объёмы прослеживаются до модели — без переделок, характерных для работы только в CAD.",
      metrics: ["модели окончательной документации", "единый источник данных — модель"],
    },
    zh: {
      sector: "机构办公楼",
      service: "施工图设计的 BIM 建模、协调与工程量计算",
      challenge:
        "施工图设计需在符合 ISO 19650 的 BIM 执行计划下以 BIM 完成：方案阶段模型为 LOD 2，最终施工图各专业模型为 LOD 3，工程量取自模型，并与设计专家保持紧密沟通。",
      solution:
        "我们编制了 BIM 执行计划，并组建专属远程 BIM 团队，在整个设计过程中配合设计专家。我们在 Revit 中完成建筑、结构和机电建模，在 Navisworks 中与各专业召开工作会议协调碰撞，并以 Trimble Connect 作为通用数据环境共享模型和文档。结构工程量取自模型，按预算清单在 Excel 中整理，并与人工算量核对；我们还将模型与进度计划关联，用于 4D 模拟施工顺序。",
      result: "施工图由协调后的模型生成，各专业更加一致，工程量可追溯到模型，避免了纯 CAD 流程的返工。",
      metrics: ["最终施工图模型", "唯一信息来源：模型"],
    },
  },
  "interoperabilidad-tekla-revit": {
    de: {
      client: "Unabhängiger Tragwerksplaner",
      sector: "Infrastruktur",
      service: "BIM-Automatisierung und Interoperabilität zwischen Plattformen",
      challenge:
        "Der Planer arbeitete seine Tragwerksmodellierung in Tekla, sein Auftraggeber verlangte jedoch die Abgabe in Revit. Es drohten doppelte Arbeit, neu aufgebaute Modelle und verlorene Geometrie- oder Attributdaten bei der Migration.",
      solution:
        "Wir haben ein individuelles Revit-Add-in entwickelt, das Geometrie und Attribute aus Tekla ausliest und die Bewehrung in Revit mit derselben Geometrie und den wichtigsten Parametern neu erzeugt. So musste das Modell nicht von Hand neu aufgebaut werden, die technischen Informationen blieben erhalten und der Arbeitsablauf des Planers passte sich den Anforderungen seines Auftraggebers an.",
      result:
        "Das Bewehrungsmodell wurde effizient von Tekla nach Revit übertragen, mit deutlich kürzeren Produktionszeiten und weniger Fehlern durch manuelle Nacharbeit. Die Automatisierung lieferte das Modell auf der geforderten Plattform, ohne den technischen Wert der bereits geleisteten Arbeit zu verlieren.",
      metrics: ["manuelle Neumodellierung", "individuelles Add-in (Tekla → Revit)"],
    },
    fr: {
      client: "Concepteur indépendant",
      sector: "Infrastructure",
      service: "Automatisation BIM et interopérabilité entre plateformes",
      challenge:
        "Le concepteur modélisait sa structure dans Tekla, mais son client exigeait une livraison dans Revit. Cela faisait craindre des efforts en double, des maquettes à refaire et une perte de géométrie ou d'attributs lors de la migration.",
      solution:
        "Nous avons développé un add-in Revit sur mesure qui extrait la géométrie et les attributs depuis Tekla et recrée les armatures dans Revit avec la même géométrie et les principaux paramètres. La maquette n'a pas eu à être refaite à la main, l'information technique a été conservée et le flux du concepteur s'est adapté aux exigences de son client.",
      result:
        "Le modèle d'armatures est passé de Tekla à Revit efficacement, avec des délais de production nettement réduits et moins d'erreurs de reprise manuelle. L'automatisation a permis de livrer la maquette sur la plateforme demandée sans perdre la valeur technique du travail déjà réalisé.",
      metrics: ["remodélisation manuelle", "add-in sur mesure (Tekla → Revit)"],
    },
    it: {
      client: "Progettista indipendente",
      sector: "Infrastrutture",
      service: "Automazione BIM e interoperabilità tra piattaforme",
      challenge:
        "Il progettista sviluppava la modellazione strutturale in Tekla, ma il suo cliente richiedeva la consegna in Revit. Si rischiava di duplicare il lavoro, rifare i modelli e perdere geometria o attributi durante la migrazione.",
      solution:
        "Abbiamo sviluppato un add-in per Revit su misura che estrae geometria e attributi da Tekla e ricrea le armature in Revit con la stessa geometria e i parametri principali. Il modello non è stato rifatto a mano, le informazioni tecniche sono state conservate e il flusso del progettista si è adattato ai requisiti del cliente.",
      result:
        "Il modello delle armature è passato da Tekla a Revit in modo efficiente, riducendo in modo significativo i tempi di produzione e gli errori di rilavorazione manuale. L'automazione ha consentito di consegnare il modello sulla piattaforma richiesta senza perdere il valore tecnico del lavoro già svolto.",
      metrics: ["rimodellazione manuale", "add-in su misura (Tekla → Revit)"],
    },
    pt: {
      client: "Projetista independente",
      sector: "Infraestrutura",
      service: "Automação BIM e interoperabilidade entre plataformas",
      challenge:
        "O projetista trabalhava a modelagem estrutural no Tekla, mas seu cliente exigia a entrega em Revit. Havia o risco de duplicar esforços, refazer modelos e perder geometria ou atributos durante a migração.",
      solution:
        "Desenvolvemos um add-in sob medida para Revit que extrai geometria e atributos do Tekla e recria as armaduras no Revit com a mesma geometria e os principais parâmetros. O modelo não precisou ser refeito à mão, as informações técnicas foram preservadas e o fluxo do projetista se adaptou aos requisitos do cliente.",
      result:
        "O modelo de armaduras foi transferido do Tekla para o Revit com eficiência, reduzindo significativamente os prazos de produção e os erros de retrabalho manual. A automação permitiu entregar o modelo na plataforma exigida sem perder o valor técnico do trabalho já realizado.",
      metrics: ["remodelagem manual", "add-in sob medida (Tekla → Revit)"],
    },
    ru: {
      client: "Независимый проектировщик",
      sector: "Инфраструктура",
      service: "BIM-автоматизация и совместимость платформ",
      challenge:
        "Проектировщик вёл конструктивную модель в Tekla, а заказчик требовал сдачу в Revit. Это грозило двойной работой, повторным моделированием и потерей геометрии или атрибутов при переносе.",
      solution:
        "Мы разработали собственную надстройку для Revit, которая извлекает геометрию и атрибуты из Tekla и воссоздаёт арматуру в Revit с той же геометрией и основными параметрами. Модель не пришлось перестраивать вручную, техническая информация сохранилась, а рабочий процесс проектировщика адаптировался к требованиям заказчика.",
      result:
        "Модель армирования была эффективно перенесена из Tekla в Revit: сроки выпуска заметно сократились, ошибок ручной переделки стало меньше. Автоматизация позволила сдать модель на требуемой платформе без потери технической ценности уже выполненной работы.",
      metrics: ["ручного перемоделирования", "собственная надстройка (Tekla → Revit)"],
    },
    zh: {
      client: "独立设计师",
      sector: "基础设施",
      service: "BIM 自动化与跨平台互操作",
      challenge: "设计师在 Tekla 中完成结构建模，但其客户要求以 Revit 交付，迁移过程中可能重复工作、重建模型并丢失几何或属性信息。",
      solution:
        "我们开发了定制的 Revit 插件，从 Tekla 中提取几何和属性，在 Revit 中以相同几何和主要参数重建钢筋。模型无需手动重建，技术信息得以保留，设计师的工作流程也适应了客户的要求。",
      result: "钢筋模型高效地从 Tekla 迁移到 Revit，大幅缩短了出图时间，减少了手动返工带来的错误。自动化让模型以客户要求的平台交付，同时保留了已完成工作的技术价值。",
      metrics: ["手动重建模", "定制插件（Tekla → Revit）"],
    },
  },
  "puente-beirut": {
    de: {
      client: "Goquete-Brücke · Beirut, Corosha, Bongará, Amazonas (Peru)",
      sector: "Brücken und Straßeninfrastruktur",
      service: "Ausführungsplanung einer Straßenbrücke aus BIM-Modellen",
      challenge:
        "Ersatzneubau der Straßenbrücke Goquete an der Regionalstraße AM-106 (km 08+905, Anexo Beirut, Distrikt Corosha, Provinz Bongará, Amazonas; Investitionscode CUI 2718725) für die Regionalregierung von Amazonas über die DRTC Amazonas. Die Planung umfasste eine Verbundbrücke mit 13,80 m Spannweite samt Zufahrten, Steinschüttung als Uferschutz und Beschilderung, bemessen nach dem Brückenhandbuch des peruanischen Verkehrsministeriums (MTC) und AASHTO LRFD – mit konsistenter Geometrie zwischen Modell und Plänen.",
      solution:
        "Wir haben die Bemessungsvorgaben des Planers in BIM-Modelle der Brücke umgesetzt: ein einfeldriger, frei aufgelagerter Überbau aus Stahlträgern und Betonplatte f'c=280 kg/cm², 6,00 m Fahrbahn für zwei Spuren, Gehwege und Stahlgeländer, Elastomerlager und Stahl-Dehnfugen; der Unterbau aus zwei Stahlbeton-Widerlagern und Fundamenten (f'c=280 kg/cm²) sowie Schleppplatten f'c=210 kg/cm². Aus diesen Modellen haben wir Längsschnitt, Regelquerschnitt, Ansichten und Pläne der Ausführungsplanung erzeugt und so die manuelle CAD-Arbeit reduziert.",
      result:
        "Ausführungsplanung mit Gesamtbaukosten von S/ 1.529.137,93 (direkte Kosten S/ 1.346.664,84 zuzüglich 13,55 % indirekter Kosten), Ausführung in Eigenregie des Bauherrn und 120 Kalendertage Bauzeit. Die Unterlagen wurden aus den Modellen erzeugt, mit abgestimmten Plänen, bereit für die technische Prüfung.",
      metrics: ["Spannweite, Stahl-Beton-Verbundquerschnitt", "Bemessungsverkehrslast, zwei Fahrstreifen", "Kalendertage Bauzeit"],
    },
    fr: {
      client: "Pont Goquete · Beirut, Corosha, Bongará, Amazonas (Pérou)",
      sector: "Ponts et infrastructures routières",
      service: "Dossier technique d'un pont routier réalisé à partir de maquettes BIM",
      challenge:
        "Remplacement du pont routier Goquete sur la route départementale AM-106 (PK 08+905, Anexo Beirut, district de Corosha, province de Bongará, Amazonas ; code d'investissement CUI 2718725) pour le Gouvernement régional d'Amazonas via la DRTC Amazonas. Le dossier portait sur un pont mixte de 13,80 m de portée avec ses accès, un enrochement de protection et la signalisation, dimensionné selon le Manuel des ponts du ministère péruvien des Transports (MTC) et l'AASHTO LRFD, en gardant la géométrie modélisée cohérente avec les plans.",
      solution:
        "Nous avons traduit les critères de conception du consultant en maquettes BIM du pont : une travée unique sur appuis simples avec poutres métalliques et dalle en béton f'c=280 kg/cm², une chaussée de 6,00 m à deux voies, trottoirs et garde-corps métalliques, appareils d'appui en élastomère et joints de dilatation métalliques ; une infrastructure de deux culées et semelles en béton armé (f'c=280 kg/cm²) et des dalles de transition f'c=210 kg/cm². À partir de ces maquettes, nous avons produit le profil en long, la coupe type, les vues et les plans du dossier, en réduisant le travail manuel en CAO.",
      result:
        "Dossier technique avec un budget total de travaux de S/ 1 529 137,93 (coût direct S/ 1 346 664,84 plus 13,55 % de coûts indirects), exécuté en régie par le maître d'ouvrage en 120 jours calendaires. La documentation a été produite depuis les maquettes, avec des plans coordonnés et prêts pour la revue technique.",
      metrics: ["de portée, section mixte acier–béton", "charge d'exploitation de calcul, deux voies", "jours calendaires de travaux"],
    },
    it: {
      client: "Ponte Goquete · Beirut, Corosha, Bongará, Amazonas (Perù)",
      sector: "Ponti e infrastrutture stradali",
      service: "Progetto esecutivo di un ponte stradale sviluppato da modelli BIM",
      challenge:
        "Rifacimento del ponte stradale Goquete sulla strada regionale AM-106 (km 08+905, Anexo Beirut, distretto di Corosha, provincia di Bongará, Amazonas; codice di investimento CUI 2718725) per il Governo Regionale di Amazonas tramite la DRTC Amazonas. Il progetto riguardava un ponte a sezione mista di 13,80 m di luce con accessi, scogliera di protezione e segnaletica, dimensionato secondo il Manuale dei ponti del Ministero dei Trasporti peruviano (MTC) e l'AASHTO LRFD, mantenendo coerenti geometria del modello e tavole.",
      solution:
        "Abbiamo tradotto i criteri progettuali del consulente in modelli BIM del ponte: una sola campata in semplice appoggio con travi in acciaio e soletta in calcestruzzo f'c=280 kg/cm², carreggiata di 6,00 m a due corsie, marciapiedi e parapetti metallici, appoggi in neoprene e giunti di dilatazione metallici; sottostruttura con due spalle e fondazioni in calcestruzzo armato (f'c=280 kg/cm²) e solette di transizione f'c=210 kg/cm². Da questi modelli abbiamo prodotto profilo longitudinale, sezione tipo, viste e tavole del progetto, riducendo il lavoro manuale in CAD.",
      result:
        "Progetto esecutivo con un importo totale dei lavori di S/ 1.529.137,93 (costo diretto S/ 1.346.664,84 più il 13,55 % di costi indiretti), da eseguire in amministrazione diretta in 120 giorni di calendario. La documentazione è stata generata dai modelli, con tavole coordinate e pronte per la revisione tecnica.",
      metrics: ["di luce, sezione mista acciaio–calcestruzzo", "carico di progetto, due corsie", "giorni di calendario di esecuzione"],
    },
    pt: {
      client: "Ponte Goquete · Beirut, Corosha, Bongará, Amazonas (Peru)",
      sector: "Pontes e infraestrutura viária",
      service: "Projeto executivo de uma ponte rodoviária desenvolvido a partir de modelos BIM",
      challenge:
        "Renovação da ponte rodoviária Goquete na via departamental AM-106 (km 08+905, Anexo Beirut, distrito de Corosha, província de Bongará, Amazonas; código de investimento CUI 2718725), para o Governo Regional do Amazonas por meio da DRTC Amazonas. O projeto abrangia uma ponte de seção mista com 13,80 m de vão, acessos, enrocamento de proteção e sinalização, dimensionada segundo o Manual de Pontes do Ministério dos Transportes do Peru (MTC) e a AASHTO LRFD, mantendo coerência entre a geometria modelada e as pranchas.",
      solution:
        "Transformamos os critérios de projeto do consultor em modelos BIM da ponte: superestrutura de vão único simplesmente apoiada, com vigas metálicas e laje de concreto f'c=280 kg/cm², pista de 6,00 m com duas faixas, passeios e guarda-corpos metálicos, aparelhos de apoio de neoprene e juntas de dilatação metálicas; infraestrutura com dois encontros e sapatas de concreto armado (f'c=280 kg/cm²) e lajes de transição f'c=210 kg/cm². A partir desses modelos geramos o perfil longitudinal, a seção típica, vistas e pranchas do projeto, reduzindo o trabalho manual em CAD.",
      result:
        "Projeto executivo com orçamento total de obra de S/ 1.529.137,93 (custo direto de S/ 1.346.664,84 mais 13,55 % de custos indiretos), com execução por administração direta e prazo de obra de 120 dias corridos. A documentação foi gerada a partir dos modelos, com pranchas coordenadas e prontas para revisão técnica.",
      metrics: ["de vão, seção mista aço–concreto", "carga móvel de projeto, duas faixas", "dias corridos de execução da obra"],
    },
    ru: {
      client: "Мост Гокете · Бейрут, Короша, Бонгара, Амасонас (Перу)",
      sector: "Мосты и дорожная инфраструктура",
      service: "Рабочая документация автомобильного моста на основе BIM-моделей",
      challenge:
        "Реконструкция автомобильного моста Гокете на региональной дороге AM-106 (км 08+905, Анексо Бейрут, округ Короша, провинция Бонгара, Амасонас; инвестиционный код CUI 2718725) для регионального правительства Амасонаса через DRTC Amazonas. Документация охватывала сталежелезобетонный мост пролётом 13,80 м с подходами, защитной каменной наброской и дорожными знаками, рассчитанный по Руководству по мостам Министерства транспорта Перу (MTC) и AASHTO LRFD, при согласованной геометрии модели и чертежей.",
      solution:
        "Мы перевели проектные решения консультанта в BIM-модели моста: однопролётное свободно опёртое пролётное строение из стальных балок и бетонной плиты f'c=280 кг/см², проезжая часть 6,00 м на две полосы, тротуары и металлические ограждения, резиновые опорные части и металлические деформационные швы; нижнее строение из двух железобетонных устоев и фундаментов (f'c=280 кг/см²) и переходные плиты f'c=210 кг/см². Из моделей мы выпустили продольный профиль, типовое поперечное сечение, виды и чертежи документации, сократив ручную работу в CAD.",
      result:
        "Рабочая документация с общей сметной стоимостью строительства S/ 1 529 137,93 (прямые затраты S/ 1 346 664,84 и косвенные 13,55 %), строительство хозяйственным способом за 120 календарных дней. Документация сформирована из моделей, чертежи скоординированы и готовы к экспертизе.",
      metrics: ["пролёт, сталежелезобетонное сечение", "расчётная временная нагрузка, две полосы", "календарных дней строительства"],
    },
    zh: {
      client: "Goquete 桥 · 秘鲁亚马孙大区 Bongará 省 Corosha 区 Beirut",
      sector: "桥梁与道路基础设施",
      service: "基于 BIM 模型完成的公路桥施工图设计",
      challenge:
        "为亚马孙大区政府（通过 DRTC Amazonas）重建 AM-106 省道（Km 08+905，Anexo Beirut，Corosha 区，Bongará 省，亚马孙大区；投资代码 CUI 2718725）上的 Goquete 公路桥。设计内容为一座跨径 13.80 m 的钢-混凝土组合梁桥及其引道、抛石护岸和交通标志，按秘鲁交通部（MTC）桥梁手册和 AASHTO LRFD 设计，并保证模型几何与图纸一致。",
      solution:
        "我们将顾问的设计要求转化为桥梁 BIM 模型：单跨简支上部结构，由钢梁和 f'c=280 kg/cm² 混凝土桥面板组成，车行道宽 6.00 m、双车道，设人行道和钢栏杆、氯丁橡胶支座和钢伸缩缝；下部结构为两座钢筋混凝土桥台及基础（f'c=280 kg/cm²），以及 f'c=210 kg/cm² 搭板。我们基于这些模型生成纵断面、标准横断面、视图和施工图，减少了 CAD 手工作业。",
      result: "施工图设计的工程总预算为 S/ 1,529,137.93（直接费 S/ 1,346,664.84，另加 13.55% 间接费），由业主自营实施，工期 120 个日历天。文档由模型生成，图纸协调一致，可直接提交技术审查。",
      metrics: ["跨径，钢-混凝土组合截面", "设计活载，双车道", "日历天施工工期"],
    },
  },
};

export interface TestimonialTranslation {
  text: string;
  role: string;
}

/** Keyed by testimonial author name. */
export const testimonialTranslations: Record<string, Record<OtherLocale, TestimonialTranslation>> = {
  "Mario Tello": {
    de: {
      text: "Wir haben mit Frata in der interdisziplinären BIM-Koordination zusammengearbeitet. Sie zeigen ein tiefes Verständnis der BIM-Methodik und automatisieren Prozesse mit den Werkzeugen, die sie selbst entwickeln.",
      role: "Leiter des technischen Büros",
    },
    fr: {
      text: "Nous avons collaboré avec Frata sur la coordination BIM interdisciplinaire. Ils maîtrisent la méthodologie BIM et parviennent à automatiser les processus grâce aux outils qu'ils développent.",
      role: "Responsable du bureau technique",
    },
    it: {
      text: "Abbiamo collaborato con Frata nel coordinamento BIM interdisciplinare. Dimostrano un'ampia conoscenza della metodologia BIM e riescono ad automatizzare i processi con gli strumenti che sviluppano.",
      role: "Responsabile dell'ufficio tecnico",
    },
    pt: {
      text: "Colaboramos com a Frata no trabalho colaborativo interdisciplinar. Eles demonstram amplo conhecimento da metodologia BIM e conseguem automatizar processos com as ferramentas que desenvolvem.",
      role: "Chefe do escritório técnico",
    },
    ru: {
      text: "Мы работали с Frata над междисциплинарной BIM-координацией. Они глубоко знают BIM-методологию и автоматизируют процессы с помощью инструментов, которые разрабатывают сами.",
      role: "Руководитель технического отдела",
    },
    zh: {
      text: "我们与 Frata 在跨专业 BIM 协同方面开展了合作。他们对 BIM 方法有深入的理解，并能用自研工具实现流程自动化。",
      role: "技术部负责人",
    },
  },
  "Edson Mamani": {
    de: {
      text: "Die Add-ins, die sie entwickelt haben, helfen mir enorm in meiner täglichen Arbeit und verbessern die Qualität und die Durchlaufzeit meiner Ergebnisse.",
      role: "Detailingenieur",
    },
    fr: {
      text: "Les add-ins qu'ils ont créés m'aident beaucoup au quotidien et améliorent la qualité et les délais de mes livrables.",
      role: "Ingénieur de détail",
    },
    it: {
      text: "Gli add-in che hanno creato mi aiutano molto nel lavoro quotidiano, migliorando qualità e tempi dei miei elaborati.",
      role: "Ingegnere di dettaglio",
    },
    pt: {
      text: "Os add-ins que eles criaram ajudam muito no meu dia a dia, melhorando a qualidade e os prazos das minhas entregas.",
      role: "Engenheiro de detalhamento",
    },
    ru: {
      text: "Надстройки, которые они создали, очень помогают мне в повседневной работе, улучшая качество и сроки моих результатов.",
      role: "Инженер по деталировке",
    },
    zh: {
      text: "他们开发的插件对我的日常工作帮助很大，提高了我交付成果的质量和效率。",
      role: "深化设计工程师",
    },
  },
  "Kautsky Neyra": {
    de: {
      text: "Die persönliche Betreuung und die ständigen Updates waren sehr zufriedenstellend. Dank der Kompatibilität mit verschiedenen Revit-Versionen kann ich ihre Add-ins in all meinen Projekten nutzen.",
      role: "",
    },
    fr: {
      text: "Le suivi personnalisé et les mises à jour constantes ont été très satisfaisants. La compatibilité entre versions de Revit me permet d'utiliser leurs add-ins sur tous mes projets.",
      role: "",
    },
    it: {
      text: "L'assistenza personalizzata e gli aggiornamenti costanti sono stati molto soddisfacenti. La compatibilità tra le versioni di Revit mi ha permesso di usare i loro add-in in tutti i miei progetti.",
      role: "",
    },
    pt: {
      text: "O atendimento personalizado e as atualizações constantes foram muito satisfatórios. A compatibilidade entre versões do Revit me permitiu usar os add-ins deles em todos os meus projetos.",
      role: "",
    },
    ru: {
      text: "Индивидуальная поддержка и постоянные обновления нас полностью устроили. Совместимость с разными версиями Revit позволила мне использовать их надстройки во всех моих проектах.",
      role: "",
    },
    zh: {
      text: "个性化的支持和持续的更新令人非常满意。插件兼容多个 Revit 版本，让我能在所有项目中使用。",
      role: "",
    },
  },
};
