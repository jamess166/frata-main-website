export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  service: string;
  technologies: string[];
  challenge: string;
  solution: string;
  result: string;
  image: string | null;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "estadio-chepen",
    client: "Consorcio Olímpico",
    sector: "Estadios e infraestructura deportiva",
    service: "Desarrollo de expediente técnico con metodología BIM",
    technologies: ["Revit", "FrataTools"],
    challenge:
      "El proyecto requería elaborar la documentación técnica del expediente a partir de modelos BIM, asegurando coordinación entre especialidades, precisión en los planos y reducción de reprocesos durante la etapa de diseño.",
    solution:
      "FRATA INGENIEROS conformó un equipo remoto especializado, dedicado exclusivamente al desarrollo BIM del proyecto. Este equipo trabajó de forma coordinada con los especialistas diseñadores, transformando sus bosquejos, criterios técnicos y esquemas iniciales en modelos BIM disciplinarios y documentación técnica lista para expediente. Este flujo permitió evitar el proceso tradicional de elaborar primero planos en CAD y luego modelarlos en BIM, reduciendo tiempos, duplicidad de trabajo y riesgos de incompatibilidades.",
    result:
      "Se desarrolló el expediente técnico bajo metodología BIM, logrando una documentación más ordenada, coordinada y trazable. El entregable final fue compatibilizado entre especialidades, reduciendo interferencias de diseño y fortaleciendo la calidad técnica del proyecto.",
    image: "/images/cases/estadio-chepen-01.webp",
  },
  {
    slug: "oficinas-publicas",
    client: "Consorcio Trece de Octubre",
    sector: "Oficinas públicas",
    service: "Modelado BIM y generación de documentación técnica",
    technologies: ["Revit", "FrataTools"],
    challenge:
      "El cliente necesitaba desarrollar la documentación técnica del expediente a partir de modelos BIM, manteniendo una comunicación fluida con los especialistas y asegurando que los planos respondieran directamente a la información del modelo.",
    solution:
      "Se implementó un equipo BIM remoto dedicado al proyecto, encargado de acompañar a los especialistas durante el proceso de diseño. A partir de sus esquemas, criterios técnicos y avances de especialidad, se desarrollaron los modelos BIM y se generó la documentación gráfica correspondiente. Este enfoque permitió centralizar la información del proyecto en modelos coordinados, evitando retrabajos derivados de flujos tradicionales basados únicamente en CAD.",
    result:
      "El expediente técnico fue desarrollado utilizando metodología BIM, mejorando la coordinación entre especialidades y optimizando la generación de planos. Como resultado, se obtuvo un entregable técnico más consistente, compatibilizado y alineado con los requerimientos del proyecto.",
    image: null,
  },
  {
    slug: "puente-beirut",
    client: "Consultor Independiente",
    sector: "Puentes e infraestructura vial",
    service: "Desarrollo de documentación técnica desde modelos BIM",
    technologies: ["Revit", "FrataTools"],
    challenge:
      "El proyecto requería transformar criterios de diseño y documentación técnica en modelos BIM capaces de sostener la generación del expediente técnico, asegurando coherencia entre la geometría modelada y los planos entregables.",
    solution:
      "FRATA INGENIEROS brindó soporte BIM especializado para convertir la información técnica del consultor en modelos digitales coordinados. A partir de estos modelos, se generaron planos, vistas y documentación técnica, manteniendo un flujo de trabajo más integrado y eficiente. La metodología aplicada permitió disminuir la dependencia de procesos manuales en CAD y aprovechar el modelo BIM como fuente principal de información del expediente.",
    result:
      "Se logró desarrollar la documentación técnica del expediente a partir de modelos BIM, reduciendo retrabajos y mejorando la compatibilización del proyecto. El resultado fue un entregable más confiable, coordinado y preparado para revisión técnica.",
    image: null,
  },
  {
    slug: "interoperabilidad-tekla-revit",
    client: "Diseñador Independiente",
    sector: "Infraestructura",
    service: "Automatización BIM e interoperabilidad entre plataformas",
    technologies: ["Revit", "Tekla", "C#"],
    challenge:
      "El diseñador trabajaba su flujo de modelado estructural en Tekla; sin embargo, su cliente requería que la información fuera entregada en Revit. Esto generaba el riesgo de duplicar esfuerzos, rehacer modelos y perder información geométrica o de atributos durante el proceso de migración.",
    solution:
      "Se desarrolló un add-in personalizado para Revit capaz de extraer información geométrica y atributos desde Tekla, permitiendo recrear los aceros de refuerzo en Revit con la misma geometría y parámetros principales. Esta solución evitó rehacer manualmente el modelo, conservó la información técnica relevante y permitió adaptar el flujo de trabajo del diseñador a los requerimientos específicos de su cliente.",
    result:
      "Se logró transferir el modelo de acero de Tekla a Revit de forma eficiente, reduciendo significativamente los tiempos de producción y minimizando errores por reproceso manual. La automatización permitió entregar el modelo en la plataforma requerida sin perder el valor técnico del trabajo previamente desarrollado.",
    image: null,
  },
];
