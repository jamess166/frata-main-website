export interface CaseMetric {
  value: string;
  label: string;
  labelEn: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  clientEn?: string;
  sector: string;
  sectorEn?: string;
  service: string;
  serviceEn?: string;
  technologies: string[];
  challenge: string;
  challengeEn?: string;
  solution: string;
  solutionEn?: string;
  result: string;
  resultEn?: string;
  metrics?: CaseMetric[];
  image: string | null;
  /** Optional blog write-up with the full story of the project. */
  articleHref?: string;
}

// TODO owner: confirm metric figures before publishing campaigns around them.
export const caseStudies: CaseStudy[] = [
  {
    slug: "estadio-chepen",
    client: "Estadio Municipal de Chepén",
    clientEn: "Chepén Municipal Stadium",
    sector: "Infraestructura deportiva · inversión pública",
    sectorEn: "Sports infrastructure · public investment",
    service: "Consultoría BIM para un expediente técnico de inversión pública",
    serviceEn: "BIM consulting for a public-investment technical package",
    technologies: ["Revit", "Navisworks", "Dynamo", "FrataTools"],
    challenge:
      "El expediente técnico debe elaborarse a partir de modelos BIM, con coordinación entre especialidades, planos consistentes y metrados que puedan verificarse durante la revisión.",
    challengeEn:
      "The technical package has to be produced from BIM models, with coordination between disciplines, consistent drawings and quantity take-offs that can be checked during review.",
    solution:
      "Como consultores BIM, asumimos el modelado BIM de las especialidades, la extracción de metrados y la generación de planos durante la elaboración del expediente. Trabajamos junto a los especialistas diseñadores, convirtiendo sus criterios técnicos en modelos LOD 3 hasta el acero de refuerzo, con add-ins propios para llenar la información del modelo y exportar los metrados.",
    solutionEn:
      "As BIM consultants, we took on the BIM modeling of the disciplines, the quantity take-offs and the drawing production while the package is being developed. We work alongside the design specialists, turning their technical criteria into LOD 3 models down to the reinforcing steel, with our own add-ins to fill in model data and export quantities.",
    result:
      "El servicio se encuentra en ejecución. Los planos y metrados se generan desde los modelos, con trazabilidad por elemento, lo que facilita mantener la documentación coordinada a medida que el diseño evoluciona.",
    resultEn:
      "The engagement is ongoing. Drawings and quantities are generated from the models with element-level traceability, which keeps the documentation coordinated as the design evolves.",
    metrics: [
      { value: "LOD 3", label: "modelado hasta el acero de refuerzo", labelEn: "modeling down to reinforcing steel" },
      { value: "3", label: "frentes a cargo: modelado, metrados y planos", labelEn: "workstreams we own: modeling, quantities and drawings" },
    ],
    image: "/images/blog/estadio-chepen/render-cabina-prensa.webp",
    articleHref: "/blog/expediente-tecnico-obra-publica-bim",
  },
  {
    slug: "oficinas-publicas",
    client: "Consorcio Trece de Octubre",
    sector: "Edificio institucional de oficinas",
    sectorEn: "Institutional office building",
    service: "Modelado BIM, coordinación y metrados para expediente técnico",
    serviceEn: "BIM modeling, coordination and quantity take-offs for a technical package",
    technologies: ["Revit", "Navisworks", "Trimble Connect", "FrataTools"],
    challenge:
      "El expediente técnico debía desarrollarse con metodología BIM bajo un Plan de Ejecución BIM alineado a la ISO 19650: modelos de anteproyecto en LOD 2, modelos del expediente definitivo en LOD 3 para todas las especialidades y metrados obtenidos del modelo, todo con comunicación fluida con los especialistas diseñadores.",
    challengeEn:
      "The technical package had to be developed with BIM under a BIM Execution Plan aligned with ISO 19650: LOD 2 models for the preliminary design, LOD 3 models of every discipline for the final package, and quantities taken from the model, all in close contact with the design specialists.",
    solution:
      "Elaboramos el Plan de Ejecución BIM y conformamos un equipo BIM remoto dedicado que acompañó a los especialistas durante el diseño. Modelamos en Revit arquitectura, estructuras e instalaciones, coordinamos interferencias en Navisworks en sesiones de trabajo con las especialidades y compartimos modelos y documentos en Trimble Connect como entorno común de datos. Los metrados de estructuras se obtuvieron del modelo, ordenados según el itemizado del presupuesto en Excel y contrastados con metrados manuales.",
    solutionEn:
      "We wrote the BIM Execution Plan and set up a dedicated remote BIM team that worked alongside the specialists throughout design. We modeled architecture, structures and MEP in Revit, coordinated clashes in Navisworks in working sessions with each discipline, and shared models and documents in Trimble Connect as the common data environment. Structural quantities were taken from the model, organized by the budget's item list in Excel and checked against manual take-offs.",
    result:
      "La documentación gráfica del expediente se generó desde modelos coordinados, con mejor compatibilidad entre especialidades y metrados trazables al modelo, evitando los retrabajos de un flujo basado solo en CAD.",
    resultEn:
      "The package's drawings were produced from coordinated models, with better consistency between disciplines and quantities traceable to the model, avoiding the rework of a CAD-only workflow.",
    metrics: [
      { value: "LOD 3", label: "modelos del expediente definitivo", labelEn: "models for the final package" },
      { value: "1", label: "fuente de información: el modelo", labelEn: "single source of truth: the model" },
    ],
    image: "/images/casos/oficinas-modelo-3d.webp",
  },
  {
    slug: "puente-beirut",
    client: "Consultor Independiente",
    clientEn: "Independent Consultant",
    sector: "Puentes e infraestructura vial",
    sectorEn: "Bridges and road infrastructure",
    service: "Desarrollo de documentación técnica desde modelos BIM",
    serviceEn: "Technical documentation developed from BIM models",
    technologies: ["Revit", "FrataTools"],
    challenge:
      "El proyecto requería transformar criterios de diseño y documentación técnica en modelos BIM capaces de sostener la generación del expediente técnico, asegurando coherencia entre la geometría modelada y los planos entregables.",
    challengeEn:
      "The project required turning design criteria and technical documentation into BIM models able to sustain the package's production, keeping modeled geometry and deliverable drawings consistent.",
    solution:
      "FRATA INGENIEROS brindó soporte BIM especializado para convertir la información técnica del consultor en modelos digitales coordinados. A partir de estos modelos, se generaron planos, vistas y documentación técnica, manteniendo un flujo de trabajo más integrado y eficiente. La metodología aplicada permitió disminuir la dependencia de procesos manuales en CAD y aprovechar el modelo BIM como fuente principal de información del expediente.",
    solutionEn:
      "FRATA INGENIEROS provided specialized BIM support to turn the consultant's technical information into coordinated digital models. From those models we produced drawings, views and technical documentation in a more integrated, efficient workflow, reducing dependence on manual CAD work and using the BIM model as the package's main information source.",
    result:
      "Se logró desarrollar la documentación técnica del expediente a partir de modelos BIM, reduciendo retrabajos y mejorando la compatibilización del proyecto. El resultado fue un entregable más confiable, coordinado y preparado para revisión técnica.",
    resultEn:
      "The package's technical documentation was produced from BIM models, cutting rework and improving project reconciliation. The deliverable was more reliable, coordinated and ready for technical review.",
    metrics: [
      { value: "BIM", label: "como única fuente del expediente", labelEn: "as the package's single source" },
    ],
    image: null,
  },
  {
    slug: "interoperabilidad-tekla-revit",
    client: "Diseñador Independiente",
    clientEn: "Independent Designer",
    sector: "Infraestructura",
    sectorEn: "Infrastructure",
    service: "Automatización BIM e interoperabilidad entre plataformas",
    serviceEn: "BIM automation and cross-platform interoperability",
    technologies: ["Revit", "Tekla", "C#"],
    challenge:
      "El diseñador trabajaba su flujo de modelado estructural en Tekla; sin embargo, su cliente requería que la información fuera entregada en Revit. Esto generaba el riesgo de duplicar esfuerzos, rehacer modelos y perder información geométrica o de atributos durante el proceso de migración.",
    challengeEn:
      "The designer's structural workflow lived in Tekla, but the client required delivery in Revit — risking duplicated effort, remodeled work and lost geometry or attribute data during migration.",
    solution:
      "Se desarrolló un add-in personalizado para Revit capaz de extraer información geométrica y atributos desde Tekla, permitiendo recrear los aceros de refuerzo en Revit con la misma geometría y parámetros principales. Esta solución evitó rehacer manualmente el modelo, conservó la información técnica relevante y permitió adaptar el flujo de trabajo del diseñador a los requerimientos específicos de su cliente.",
    solutionEn:
      "We built a custom Revit add-in that extracts geometry and attributes from Tekla, recreating the reinforcement steel in Revit with the same geometry and key parameters. No manual remodeling, no lost technical information — the designer's workflow adapted to the client's platform requirement.",
    result:
      "Se logró transferir el modelo de acero de Tekla a Revit de forma eficiente, reduciendo significativamente los tiempos de producción y minimizando errores por reproceso manual. La automatización permitió entregar el modelo en la plataforma requerida sin perder el valor técnico del trabajo previamente desarrollado.",
    resultEn:
      "The steel model moved from Tekla to Revit efficiently, significantly cutting production time and manual-rework errors. Automation delivered the model on the required platform without losing the technical value of the work already done.",
    metrics: [
      { value: "0", label: "remodelado manual", labelEn: "manual remodeling" },
      { value: "1", label: "add-in a medida (Tekla → Revit)", labelEn: "custom add-in (Tekla → Revit)" },
    ],
    image: null,
  },
];
