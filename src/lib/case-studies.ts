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
  /** Optional variant of `image` shown in dark mode. */
  imageDark?: string;
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
      "Como consultores BIM, asumimos el modelado BIM de las especialidades, la extracción de metrados y la generación de planos durante la elaboración del expediente. Trabajamos junto a los especialistas diseñadores, convirtiendo sus criterios técnicos en modelos LOD 3 hasta el acero de refuerzo, con add-ins propios para llenar la información del modelo y exportar los metrados. El modelo se vincula además al cronograma para la simulación 4D de la secuencia constructiva.",
    solutionEn:
      "As BIM consultants, we took on the BIM modeling of the disciplines, the quantity take-offs and the drawing production while the package is being developed. We work alongside the design specialists, turning their technical criteria into LOD 3 models down to the reinforcing steel, with our own add-ins to fill in model data and export quantities. The model is also linked to the schedule for a 4D simulation of the construction sequence.",
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
      "Elaboramos el Plan de Ejecución BIM y conformamos un equipo BIM remoto dedicado que acompañó a los especialistas durante el diseño. Modelamos en Revit arquitectura, estructuras e instalaciones, coordinamos interferencias en Navisworks en sesiones de trabajo con las especialidades y compartimos modelos y documentos en Trimble Connect como entorno común de datos. Los metrados de estructuras se obtuvieron del modelo, ordenados según el itemizado del presupuesto en Excel y contrastados con metrados manuales, y vinculamos el modelo al cronograma para la simulación 4D de la secuencia constructiva.",
    solutionEn:
      "We wrote the BIM Execution Plan and set up a dedicated remote BIM team that worked alongside the specialists throughout design. We modeled architecture, structures and MEP in Revit, coordinated clashes in Navisworks in working sessions with each discipline, and shared models and documents in Trimble Connect as the common data environment. Structural quantities were taken from the model, organized by the budget's item list in Excel and checked against manual take-offs, and we linked the model to the schedule for a 4D simulation of the construction sequence.",
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
    client: "Puente Goquete · Anexo Beirut, Corosha, Bongará, Amazonas",
    clientEn: "Goquete Bridge · Beirut, Corosha, Bongará, Amazonas (Peru)",
    sector: "Puentes e infraestructura vial",
    sectorEn: "Bridges and road infrastructure",
    service: "Expediente técnico de un puente vehicular desarrollado desde modelos BIM",
    serviceEn: "Technical package for a road bridge developed from BIM models",
    technologies: ["Revit", "FrataTools"],
    challenge:
      "Renovación del puente vehicular Goquete en la vía departamental AM-106 (Km 08+905, Anexo Beirut, distrito de Corosha, provincia de Bongará, Amazonas; CUI 2718725), para el Gobierno Regional de Amazonas a través de la DRTC Amazonas. El expediente debía resolver un puente de sección compuesta de 13.80 m de luz, con sus accesos, enrocado de protección y señalización, diseñado según el Manual de Puentes del MTC y AASHTO LRFD, manteniendo coherencia entre la geometría modelada y los planos.",
    challengeEn:
      "Replacement of the Goquete road bridge on regional road AM-106 (km 08+905, Beirut, Corosha district, Bongará province, Amazonas, Peru; public investment code 2718725) for the Regional Government of Amazonas. The package had to cover a 13.80 m composite-section bridge with its approaches, riprap protection and signage, designed to Peru's MTC Bridge Manual and AASHTO LRFD, keeping modeled geometry and drawings consistent.",
    solution:
      "Convertimos los criterios de diseño del consultor en modelos BIM del puente: superestructura simplemente apoyada de un tramo con vigas metálicas y losa de concreto f'c=280 kg/cm², calzada de 6.00 m para dos carriles, veredas y barandas metálicas, apoyos de neopreno y juntas metálicas; subestructura con dos estribos y zapatas de concreto armado f'c=280 kg/cm² y losas de aproximación f'c=210 kg/cm². Desde esos modelos generamos el perfil longitudinal, la sección típica, vistas y planos del expediente, reduciendo el trabajo manual en CAD.",
    solutionEn:
      "We turned the consultant's design criteria into BIM models of the bridge: a single simply supported span with steel girders and an f'c=280 kg/cm² concrete deck, a 6.00 m two-lane carriageway, sidewalks and steel railings, elastomeric bearings and steel expansion joints; a substructure of two reinforced-concrete abutments and footings (f'c=280 kg/cm²) and f'c=210 kg/cm² approach slabs. From those models we produced the longitudinal profile, typical section, views and drawings for the package, cutting manual CAD work.",
    result:
      "Expediente técnico con un presupuesto total de obra de S/ 1'529,137.93 (costo directo S/ 1'346,664.84 y costos indirectos de 13.55 %), con ejecución por administración directa y un plazo de obra de 120 días calendario. La documentación se generó desde los modelos, con planos coordinados y preparados para revisión técnica.",
    resultEn:
      "Technical package with a total construction budget of PEN 1,529,137.93 (direct cost PEN 1,346,664.84 plus 13.55 % indirect costs), to be built by direct administration in 120 calendar days. The documentation was produced from the models, with coordinated drawings ready for technical review.",
    metrics: [
      { value: "13.80 m", label: "de luz, sección compuesta acero–concreto", labelEn: "span, steel–concrete composite section" },
      { value: "HL-93", label: "sobrecarga de diseño, dos carriles", labelEn: "design live load, two lanes" },
      { value: "120", label: "días calendario de ejecución de obra", labelEn: "calendar days of construction" },
    ],
    image: "/images/casos/puente-bongora-claro.webp",
    imageDark: "/images/casos/puente-bongora-oscuro.webp",
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
