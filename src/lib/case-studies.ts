export interface CaseMetric {
  value: string;
  label: string;
  labelEn: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
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
}

// TODO owner: confirm metric figures before publishing campaigns around them.
export const caseStudies: CaseStudy[] = [
  {
    slug: "estadio-chepen",
    client: "Consorcio Olímpico",
    sector: "Estadios e infraestructura deportiva",
    sectorEn: "Stadiums and sports infrastructure",
    service: "Desarrollo de expediente técnico con metodología BIM",
    serviceEn: "Technical documentation package developed with BIM methodology",
    technologies: ["Revit", "FrataTools"],
    challenge:
      "El proyecto requería elaborar la documentación técnica del expediente a partir de modelos BIM, asegurando coordinación entre especialidades, precisión en los planos y reducción de reprocesos durante la etapa de diseño.",
    challengeEn:
      "The project required producing the technical documentation package directly from BIM models, ensuring coordination between disciplines, drawing accuracy and fewer reworks during the design stage.",
    solution:
      "FRATA INGENIEROS conformó un equipo remoto especializado, dedicado exclusivamente al desarrollo BIM del proyecto. Este equipo trabajó de forma coordinada con los especialistas diseñadores, transformando sus bosquejos, criterios técnicos y esquemas iniciales en modelos BIM disciplinarios y documentación técnica lista para expediente. Este flujo permitió evitar el proceso tradicional de elaborar primero planos en CAD y luego modelarlos en BIM, reduciendo tiempos, duplicidad de trabajo y riesgos de incompatibilidades.",
    solutionEn:
      "FRATA INGENIEROS assembled a dedicated remote team focused exclusively on the project's BIM development. The team worked side by side with the design specialists, turning their sketches, technical criteria and early schematics into discipline BIM models and documentation ready for the package. This flow skipped the traditional CAD-first process, cutting time, duplicated work and incompatibility risks.",
    result:
      "Se desarrolló el expediente técnico bajo metodología BIM, logrando una documentación más ordenada, coordinada y trazable. El entregable final fue compatibilizado entre especialidades, reduciendo interferencias de diseño y fortaleciendo la calidad técnica del proyecto.",
    resultEn:
      "The technical package was delivered under BIM methodology, with cleaner, coordinated and traceable documentation. The final deliverable was reconciled across disciplines, reducing design clashes and strengthening the project's technical quality.",
    metrics: [
      { value: "100%", label: "del expediente generado desde el modelo", labelEn: "of the package generated from the model" },
      { value: "0", label: "planos CAD previos al modelo", labelEn: "CAD drawings before the model" },
    ],
    image: "/images/cases/estadio-chepen-01.webp",
  },
  {
    slug: "oficinas-publicas",
    client: "Consorcio Trece de Octubre",
    sector: "Oficinas públicas",
    sectorEn: "Public offices",
    service: "Modelado BIM y generación de documentación técnica",
    serviceEn: "BIM modeling and technical documentation",
    technologies: ["Revit", "FrataTools"],
    challenge:
      "El cliente necesitaba desarrollar la documentación técnica del expediente a partir de modelos BIM, manteniendo una comunicación fluida con los especialistas y asegurando que los planos respondieran directamente a la información del modelo.",
    challengeEn:
      "The client needed the package's technical documentation developed from BIM models, keeping fluid communication with the specialists and ensuring drawings answered directly to model information.",
    solution:
      "Se implementó un equipo BIM remoto dedicado al proyecto, encargado de acompañar a los especialistas durante el proceso de diseño. A partir de sus esquemas, criterios técnicos y avances de especialidad, se desarrollaron los modelos BIM y se generó la documentación gráfica correspondiente. Este enfoque permitió centralizar la información del proyecto en modelos coordinados, evitando retrabajos derivados de flujos tradicionales basados únicamente en CAD.",
    solutionEn:
      "A dedicated remote BIM team accompanied the specialists throughout design. From their schematics, technical criteria and discipline progress, we built the BIM models and generated the corresponding drawing documentation. The approach centralized project information in coordinated models, avoiding reworks typical of CAD-only workflows.",
    result:
      "El expediente técnico fue desarrollado utilizando metodología BIM, mejorando la coordinación entre especialidades y optimizando la generación de planos. Como resultado, se obtuvo un entregable técnico más consistente, compatibilizado y alineado con los requerimientos del proyecto.",
    resultEn:
      "The technical package was developed with BIM methodology, improving coordination between disciplines and streamlining drawing production. The result: a more consistent, reconciled deliverable aligned with project requirements.",
    metrics: [
      { value: "1", label: "fuente de información: el modelo", labelEn: "single source of truth: the model" },
    ],
    image: null,
  },
  {
    slug: "puente-beirut",
    client: "Consultor Independiente",
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
