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

export const serviceContent: Record<ServiceSlug, ServiceContent> = {
  "global-remote-bim-teams": {
    slug: "global-remote-bim-teams",
    title: "Equipos BIM remotos para operaciones que necesitan capacidad inmediata",
    shortTitle: "Equipos BIM remotos",
    description:
      "Integramos modeladores, coordinadores y soporte BIM remoto para ampliar capacidad sin frenar la operacion.",
    intro:
      "Cuando una empresa necesita escalar produccion BIM sin perder control tecnico, el problema no es solo contratar mas gente. Hace falta integrar un equipo que entienda tus estandares, tus plazos y tu forma de coordinar.",
    image: "/images/equipoBIM.webp",
    imageAlt: "Equipo BIM remoto colaborando",
    pillars: [
      {
        title: "Integracion operativa",
        description: "Nos acoplamos a tus procesos, software, BEP, plantillas y forma de coordinacion.",
      },
      {
        title: "Escalado flexible",
        description: "Puedes sumar capacidad puntual o establecer una celula BIM estable segun tu cartera de proyectos.",
      },
      {
        title: "Control de calidad",
        description: "La produccion no se entrega como caja negra; se gestiona con seguimiento y criterios medibles.",
      },
    ],
    process: [
      { title: "Diagnostico", description: "Revisamos alcance, entregables, carga de trabajo y brechas del equipo actual." },
      { title: "Armado del equipo", description: "Definimos perfiles, responsabilidades y canales de coordinacion." },
      { title: "Onboarding", description: "Alineamos nomenclaturas, plantillas, estandares y entorno comun de datos." },
      { title: "Operacion continua", description: "Ejecutamos con seguimiento tecnico, reportes y mejora de flujo." },
    ],
    outcomes: [
      "Mayor capacidad de produccion BIM sin ampliar estructura fija al mismo ritmo.",
      "Mejor continuidad entre modelado, coordinacion y documentacion.",
      "Menor friccion al incorporar recursos externos a proyectos exigentes.",
    ],
  },
  "custom-bim-software-development": {
    slug: "custom-bim-software-development",
    title: "Desarrollo BIM para Revit, Tekla y procesos tecnicos a medida",
    shortTitle: "Desarrollo BIM",
    description:
      "Creamos addins, automatizaciones y aplicaciones tecnicas para reducir trabajo manual y elevar productividad BIM.",
    intro:
      "La diferencia entre una consultora tradicional y una consultora con software propio es enorme. En Frata convertimos problemas operativos en herramientas concretas para Revit, Tekla y flujos conectados.",
    image: "/images/softwareDeveloper.webp",
    imageAlt: "Desarrollo de software BIM para Revit o Tekla",
    pillars: [
      {
        title: "Ingenieria y software",
        description: "No programamos a ciegas; entendemos lo que ocurre en modelado, coordinacion, obra y fabricacion.",
      },
      {
        title: "Automatizacion con sentido",
        description: "Atacamos tareas repetitivas, validaciones, exportaciones y control de parametros que consumen horas.",
      },
      {
        title: "Soluciones escalables",
        description: "Podemos construir desde una utilidad puntual hasta una suite de herramientas conectadas.",
      },
    ],
    process: [
      { title: "Descubrimiento", description: "Mapeamos el problema tecnico y el impacto real en el flujo del cliente." },
      { title: "Diseno funcional", description: "Definimos experiencia, reglas, casos limite y alcance del producto." },
      { title: "Desarrollo y pruebas", description: "Construimos, validamos y ajustamos sobre casos reales de uso." },
      { title: "Despliegue y soporte", description: "Entregamos version operativa, documentacion y mejora evolutiva." },
    ],
    outcomes: [
      "Menos trabajo manual y menos errores en tareas de alto volumen.",
      "Mayor consistencia en exportaciones, datos y entregables BIM.",
      "Capacidad propia de software alineada al negocio del cliente.",
    ],
  },
  "on-site-bim-construction-support": {
    slug: "on-site-bim-construction-support",
    title: "Acompanamiento BIM en obra para conectar modelo y ejecucion",
    shortTitle: "Soporte BIM en obra",
    description:
      "Llevamos criterio BIM al frente de obra para resolver interferencias, validar informacion y acelerar decisiones.",
    intro:
      "El modelo vale poco si no conversa con lo que sucede en campo. Nuestro acompanamiento BIM en obra ayuda a traducir informacion digital en acciones utiles para supervision, produccion y control.",
    image: "/images/BIMObra.webp",
    imageAlt: "Acompanamiento BIM en obra",
    pillars: [
      {
        title: "Respuesta inmediata",
        description: "Resolucion tecnica mas rapida cuando aparecen dudas, desajustes o interferencias.",
      },
      {
        title: "Coordinacion entre frentes",
        description: "El modelo se usa como herramienta de comunicacion real entre diseno, oficina tecnica y obra.",
      },
      {
        title: "Validacion continua",
        description: "Detectamos inconsistencias antes de que se conviertan en retrabajo o demora.",
      },
    ],
    process: [
      { title: "Revision de contexto", description: "Analizamos hitos, equipos, modelo disponible y riesgos principales." },
      { title: "Despliegue", description: "Definimos presencia, responsables y dinamica de soporte con el cliente." },
      { title: "Acompañamiento", description: "Resolvemos incidencias y coordinamos sobre el avance real del proyecto." },
      { title: "Retroalimentacion", description: "Documentamos ajustes para fortalecer procesos futuros." },
    ],
    outcomes: [
      "Menos fricciones entre lo modelado y lo ejecutado.",
      "Mejor capacidad de decision tecnica en momentos criticos.",
      "Mayor aprovechamiento del modelo durante la construccion.",
    ],
  },
  "bim-for-manufacturing": {
    slug: "bim-for-manufacturing",
    title: "Detallado BIM para fabricacion y rebar con alto control tecnico",
    shortTitle: "BIM para fabricacion",
    description:
      "Modelado detallado y documentacion lista para fabricacion, con foco en acero de refuerzo, trazabilidad y prefabricacion.",
    intro:
      "En fabricacion el error cuesta mucho mas. Por eso trabajamos modelos y entregables orientados a precision, secuencia y aprovechamiento real en taller y montaje.",
    image: "/images/Ingenieria_Detalle.webp",
    imageAlt: "Detallado BIM para fabricacion",
    pillars: [
      {
        title: "Precision de modelado",
        description: "Desarrollamos modelos con criterio constructivo y nivel de detalle util para produccion.",
      },
      {
        title: "Documentacion trazable",
        description: "Planos, listados y salidas que permiten controlar fabricacion y montaje con menos ambiguedad.",
      },
      {
        title: "Compatibilidad operativa",
        description: "Preparamos informacion para requerimientos del cliente, taller o maquinaria asociada.",
      },
    ],
    process: [
      { title: "Analisis tecnico", description: "Estudiamos planos, restricciones y objetivos de fabricacion." },
      { title: "Modelado y detallado", description: "Construimos geometria, refuerzo y logica de documentacion." },
      { title: "Coordinacion", description: "Revisamos interferencias y consistencia con otras disciplinas." },
      { title: "Entrega productiva", description: "Emitimos salidas listas para fabricacion, control o montaje." },
    ],
    outcomes: [
      "Reduccion de incertidumbre antes de taller o montaje.",
      "Mejor control de cantidades, piezas y documentacion.",
      "Mayor valor del modelo en fases de produccion real.",
    ],
  },
  "bim-training-and-implementation": {
    slug: "bim-training-and-implementation",
    title: "Implementacion BIM y capacitacion para consolidar una operacion sostenible",
    shortTitle: "Implementacion BIM",
    description:
      "Ayudamos a empresas y entidades a adoptar BIM con metodo, estandares y formacion aplicada a su realidad.",
    intro:
      "Implementar BIM no es dar un curso y listo. Se necesita diagnostico, definicion de procesos, acompasamiento de equipos y una ruta clara para que la adopcion se sostenga en el tiempo.",
    image: "/images/Capacitacion.webp",
    imageAlt: "Capacitacion e implementacion BIM",
    pillars: [
      {
        title: "Diagnostico de madurez",
        description: "Identificamos en que punto esta la organizacion y donde conviene priorizar cambios.",
      },
      {
        title: "Formacion aplicada",
        description: "Capacitamos con casos, procesos y herramientas vinculadas a proyectos reales.",
      },
      {
        title: "Implementacion gradual",
        description: "Aterrizamos BIM con decisiones operativas, no solo teoricas.",
      },
    ],
    process: [
      { title: "Diagnostico", description: "Revisamos capacidades, brechas y objetivos de la organizacion." },
      { title: "Diseno del plan", description: "Definimos estandares, prioridades y estructura de adopcion." },
      { title: "Capacitacion", description: "Entrenamos perfiles tecnicos y de gestion con enfoque practico." },
      { title: "Acompanamiento", description: "Seguimos la implementacion hasta convertirla en rutina operativa." },
    ],
    outcomes: [
      "Mayor claridad en roles, flujos y estandares BIM.",
      "Capacidad interna mas fuerte para sostener la metodologia.",
      "Adopcion menos caotica y mas alineada a negocio.",
    ],
  },
  "comprehensive-bim-modeling": {
    slug: "comprehensive-bim-modeling",
    title: "Modelado BIM integral para arquitectura, estructuras y MEP",
    shortTitle: "Modelado BIM integral",
    description:
      "Desarrollamos modelos coordinados y utiles para diseno, documentacion, control y coordinacion multidisciplinaria.",
    intro:
      "Un buen modelo BIM no solo se ve bien: ordena informacion, ayuda a detectar conflictos y sirve como base para decisiones tecnicas. Nuestro enfoque busca que el modelo sea realmente operativo.",
    image: "/images/Ingenieria_Detalle.webp",
    imageAlt: "Modelado BIM integral",
    pillars: [
      {
        title: "Coordinacion entre disciplinas",
        description: "Integramos arquitectura, estructura y MEP para detectar conflictos con anticipacion.",
      },
      {
        title: "Modelos ricos en informacion",
        description: "No trabajamos solo geometria; estructuramos datos utiles para documentar y controlar.",
      },
      {
        title: "Base para decisiones",
        description: "El modelo se convierte en una plataforma para revisar, medir y planificar mejor.",
      },
    ],
    process: [
      { title: "Levantamiento", description: "Recibimos informacion base, criterios de modelado y objetivos del proyecto." },
      { title: "Desarrollo", description: "Construimos modelos por disciplina con orden y consistencia." },
      { title: "Coordinacion", description: "Revisamos interferencias y ajustamos el modelo federado." },
      { title: "Entrega", description: "Entregamos un modelo util para documentacion, control y fases siguientes." },
    ],
    outcomes: [
      "Menor riesgo de interferencias descubiertas tarde.",
      "Mejor calidad de informacion para coordinar y documentar.",
      "Mayor valor del modelo para clientes, proyectistas y obra.",
    ],
  },
};
