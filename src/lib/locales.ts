export const locales = ['en', 'es'] as const;
export type Locale = typeof locales[number];

export const translations = {
  en: {
    // Header
    about: 'About Us',
    services: 'Services',
    portfolio: 'Portfolio',
    bimTools: 'BIMtools',
    contact: 'Contact',
    learnMore: 'Learn More',
    viewDetails: 'View Details',
    // Hero
    heroHeadline: 'Advanced BIM Solutions for Engineering',
    heroSubhead: 'We transform complex projects into digital realities with precision and efficiency. Discover the future of construction with Frata Ingenieros.',
    heroCTA: 'Get in Touch',
    // About Us
    aboutTitle: 'About Us',
    aboutHeadline: 'Driving the Digital Transformation of Construction',
    aboutDesc: 'Founded in Peru, Frata Ingenieros is a leading engineering consultancy dedicated to providing high-tech solutions. We are passionate about promoting the digitalization of construction, turning challenges into opportunities for innovation and efficiency.',
    aboutValue1: 'Mission: To innovate engineering with cutting-edge technology.',
    aboutValue2: 'Vision: To lead the digital transformation in the construction sector.',
    aboutValue3: 'Benefits',
    ourStoryTitle: 'Our Story',
    ourStoryHeadline: 'From Peru to the World',
    ourStoryDesc: 'Since our beginnings, we have been committed to innovation. What started as a local consultancy has grown into a company with a global reach, promoting the adoption of BIM technologies to revolutionize the way projects are designed, built, and managed.',
    missionTitle: 'Our Mission',
    missionDesc: 'To provide high-value engineering solutions through the application of cutting-edge technology and a focus on collaborative work, driving the success of our clients.',
    visionTitle: 'Our Vision',
    visionDesc: 'To be global leaders in the digital transformation of the construction and engineering sector, recognized for our innovation, quality, and commitment.',
    valuesTitle: 'Key Benefits',
    valuesDesc: 'We are guided by excellence, integrity, and collaboration in everything we do, building relationships of trust with our clients and partners.',
    teamTitle: 'Our Team',
    teamHeadline: 'Experts Passionate about Innovation',
    teamRole1: 'CEO & Founder',
    teamRole2: 'Lead BIM Manager',
    teamRole3: 'Head of Software Development',
    ctaTitle: 'Ready to build the future?',
    ctaDesc: 'Contact us to discover how our BIM solutions can transform your next project.',

    // Services
    servicesTitle: 'Our Services',
    service1Title: 'Global Remote BIM Teams',
    service1Desc: 'We provide dedicated remote BIM teams worldwide, ensuring seamless collaboration and access to top talent for your projects, no matter where you are.',
    service1Detail: 'Our global remote BIM teams integrate seamlessly into your existing workflows. We provide highly skilled and experienced BIM professionals who can handle everything from modeling and coordination to project management. This service allows you to scale your team on-demand, reduce overhead costs, and access specialized expertise without geographical limitations. We ensure clear communication and project alignment through robust digital collaboration platforms.',
    service2Title: 'Custom BIM Software Development',
    service2Desc: 'We create tailored software solutions and add-ins to automate your processes, enhance your BIM workflows, and boost productivity.',
    service2Detail: 'Unlock new levels of efficiency with our custom software development services. We specialize in creating bespoke add-ins for Revit, Navisworks, Tekla, and other BIM platforms. Whether you need to automate repetitive tasks, enforce company standards, or integrate BIM data with other systems, our development team can build a solution that perfectly fits your needs, saving you time and reducing errors.',
    service3Title: 'On-Site BIM Construction Support',
    service3Desc: 'Our experts provide hands-on BIM support directly on your construction site, ensuring perfect implementation and immediate problem-solving.',
    service3Detail: 'Bridge the gap between the digital model and physical construction with our on-site support. Our BIM specialists work alongside your construction team to ensure that the BIM execution plan is followed correctly. We assist with model validation, clash detection resolution in the field, layout using BIM data, and real-time problem-solving, minimizing rework and keeping your project on schedule.',
    service4Title: 'BIM for Manufacturing: High-Impact Rebar Detailing',
    service4Desc: 'We specialize in creating detailed fabrication models, including precise rebar detailing, to streamline manufacturing and assembly.',
    service4Detail: `Boost your project with millimeter precision and total coordination. Our 3D rebar detailing service transforms the planning and execution of complex reinforced concrete structures using LOD 400 BIM models, ready for fabrication. We are experts who solve problems before construction begins, from bidding to on-site work.
---SPLIT---
### The Limitations of 2D... No Longer an Option
Traditional 2D drawings fragment information: multiple sheets, scattered details, interpretation errors, and conflicts that remain invisible until it's too late. We work in 3D from the start. We detect conflicts before they cost money. We visualize every detail with clarity. We coordinate with all disciplines for construction without surprises.
---SPLIT---
### Benefits During Tender & Pre-construction
Scaling: Accurate Tonnage, Solid Decisions: Tonnage estimation with less than a 3% margin of error. Ideal for fixed-price bids.
ListChecks: Smart Procurement: Early and accurate orders for steel by diameter and quantity.
TrendingUp: Buildability without Trial-and-Error: Early detection of construction issues, with solutions before the first bar is placed.
---SPLIT---
### Benefits During Design Stage
AlertTriangle: Designs That Can Actually Be Built: We validate the practical feasibility of every structural detail.
Repeat: Frictionless Collaboration: Continuous model flow between teams, always with the latest version.
CheckCircle: Living Models: Live drawings linked to the 3D model for fast, clear, and unambiguous checks.
Users: Cross-Disciplinary Coordination: Early interaction with MEP and other disciplines to eliminate conflicts before construction.
---SPLIT---
### Benefits During Construction
HardHat: Zero Rework, Zero Improvisation: We reduce on-site cutting, bending, and errors.
FileText: Models Always at Hand: Access from tablets, phones, and AR/MR technology directly on site.
Wrench: Visual Progress Tracking: Color-coding in the model according to status: delivered, installed, pending.
---SPLIT---
### Professional and Actionable Deliverables
- **100% Coordinated 3D Rebar Models, ready for 4D and 5D.**
- **Clash and Constructability Reports.**
- **Conversion of 2D drawings to intelligent BIM with attributes.**
- **Shop Drawings and Bar Bending Schedules (BBS) generated directly from the approved model.**
---SPLIT---
### Our Collaborative Process
We use Trimble Connect and other leading platforms to ensure seamless integration among all project stakeholders. This means: centralized and accessible data, clear and friendly visualization, an agile workflow, and instant feedback.
---SPLIT---
Ready to enhance the precision, efficiency, and collaboration of your next project? Let's discuss how our 3D rebar detailing services can bring your vision to life.`,
    service5Title: 'BIM Training & Implementation',
    service5Desc: 'We offer comprehensive training programs and strategic implementation support to empower your team with the latest BIM skills and technologies.',
    service5Detail: 'Empower your team with the knowledge to succeed. We offer customized training programs for all skill levels, from basic BIM principles to advanced software techniques. Our implementation support helps your organization smoothly transition to BIM, establishing standards, workflows, and best practices to ensure you get the maximum return on your technology investment.',
    service6Title: 'Comprehensive BIM Modeling',
    service6Desc: 'We develop detailed, coordinated models for all disciplines: architecture, structures, and MEP.',
    service6Detail: 'Our BIM modeling service is the cornerstone of any successful digital construction project. We create accurate, data-rich 3D models for all disciplines: Architecture, Structures, and MEP (Mechanical, Electrical, and Plumbing). By centralizing all information, we guarantee seamless coordination, early clash detection, and a unified vision of the project, which translates into significant savings in time and resources during the construction phase.',
    // Portfolio
    portfolio: 'Portfolio',
    portfolioTitle: 'Our Projects',
    project1Title: 'Commercial Tower',
    project1Desc: 'Full BIM coordination for a 40-story skyscraper.',
    project2Title: 'Hospital Complex',
    project2Desc: 'MEP modeling and clash detection for a state-of-the-art healthcare facility.',
    project3Title: 'Industrial Plant',
    project3Desc: '4D simulation and construction planning for a large-scale industrial project.',
    // Contact
    contactTitle: 'Contact Us',
    contactDesc: 'Have a project in mind? Let\'s talk about how we can help you.',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formSubmit: 'Send Message',
    formSuccess: 'Message sent successfully!',
    formError: 'Something went wrong. Please try again.',
    // BIM Tools
    bimToolsTitle: 'BIMtools by Frata',
    bimToolsDesc: 'Download our custom Revit application to enhance your workflow with free and pro tools.',
    bimToolsFreeTitle: 'Free Version',
    bimToolsFreeDesc: 'Get started with our essential tools at no cost.',
    bimToolsProTitle: 'Pro Version',
    bimToolsProDesc: 'Unlock advanced features and premium support.',
    includedFeatures: 'Included Features',
    proFeatures: 'Pro Features',
    benefitsTenderTitle: 'Benefits During Tender & Pre-construction',
    benefitsDesignTitle: 'Benefits During Design Stage',
    benefitsConstructionTitle: 'Benefits During Construction',
    featureOpenModelFolder: 'Open Model Folder',
    featureSearchView: 'Search View',
    featureMergeParameter: 'Merge Parameter',
    featureFreezeElements: 'Freeze Elements',
    featureSuperMatch: 'Super Match',
    featureShowRebar: 'Show Rebar',
    featureSolidRebar: 'Solid Rebar',
    featureChangeParameter: 'Change Parameter',
    featureUngroupRebar: 'Ungroup Rebar',
    featureHostSync: 'Host Sync',
    featureSelectByParameter: 'Select By Parameter',
    featureApiAccess: 'API Access for Custom Scripts',
    featurePrioritySupport: 'Priority Support',
    downloadFree: 'Download Free Version',
    upgradeToPro: 'Upgrade to Pro',
    download: 'Download',
    viewManual: 'View Manual',
    // Manual
    manualCategoryGeneral: 'General',
    manualCategoryNavigation: 'Navigation',
    manualCategoryManagement: 'Management',
    manualCategoryStructures: 'Structures',
    manualSelect: 'Select a tool from the sidebar to view its manual.',
    manualStepsTitle: 'Steps',
    manualVideoTitle: 'Usage Video',
    manualSearchViewDesc: "The View Finder plugin is a powerful tool designed to quickly search and locate various types of views within the model. With this plugin, users can effortlessly find and open views such as floor plans, 3D views, schedules, and sheets, all with just a single keystroke. The View Finder plugin streamlines the workflow by eliminating the need to manually navigate through the project browser to find views. Its intuitive search functionality allows users to enter the name of the desired view, instantly presenting a list of relevant results. By simply pressing the Enter key, the selected view opens, providing immediate access to the desired information. Effortlessly discover and access views in your Revit model with the View Finder plugin, maximizing efficiency and enhancing productivity in your project workflow.",
    manualSearchViewStep1: 'Setting up the Keyboard Shortcut: To enable quick access to the View Finder, it is recommended to configure a custom keyboard shortcut. Open Revit, navigate to the "Keyboard Shortcuts" settings, locate the View Finder command, and assign the desired keyboard shortcut, such as "SV", for easy accessibility.',
    manualSearchViewStep2: 'Once the keyboard shortcut is configured, you can access the plugin by pressing "SV" and start typing the name of the view you want to search for.',
    manualSearchViewStep3: 'Additionally, you can also launch the application from the ribbon menu by navigating to the "Frata Tools" tab.',
    manualSearchViewStep4: 'Features: This version of the View Finder plugin is the initial release.',
    manualSearchViewStep5: 'Restrictions: There are currently no known restrictions or limitations associated with the View Finder plugin. It is designed to work seamlessly within Revit, providing efficient view searching and opening capabilities without any known constraints.',
    manualOpenModelFolderDesc: 'A simple tool to open the folder containing the current model.',
    manualMergeParameterDesc: 'Merge multiple parameter values into a single parameter.',
    manualFreezeElementsDesc: 'Lock elements in place to prevent accidental changes.',
    manualSuperMatchDesc: 'Quickly match properties between elements.',
    manualChangeParameterDesc: 'Batch edit parameter values for multiple elements.',
    manualSelectByParameterDesc: 'Select elements based on their parameter values.',
    manualShowRebarDesc: 'Control the visibility of rebar in your views.',
    manualSolidRebarDesc: 'Display rebar as solid in 3D views.',
    manualUngroupRebarDesc: 'Ungroup rebar sets for individual editing.',
    manualHostSyncDesc: 'Synchronize elements with their host.',
    // Footer
    footerText: '© 2024 Frata Ingenieros. All rights reserved.',
    // FAQ
    faqTitle: 'Intelligent FAQ',
    faqButton: 'Ask a Question'
  },
  es: {
    // Header
    about: 'Quiénes Somos',
    services: 'Servicios',
    portfolio: 'Portafolio',
    bimTools: 'BIMtools',
    contact: 'Contacto',
    learnMore: 'Conoce Más',
    viewDetails: 'Ver Detalles',
    // Hero
    heroHeadline: 'Soluciones BIM Avanzadas para Ingeniería',
    heroSubhead: 'Transformamos proyectos complejos en realidades digitales con precisión y eficiencia. Descubra el futuro de la construcción con Frata Ingenieros.',
    heroCTA: 'Contáctanos',
    // About Us
    aboutTitle: 'Quiénes Somos',
    aboutHeadline: 'Impulsando la Transformación Digital de la Construcción',
    aboutDesc: 'Fundada en Perú, Frata Ingenieros es una consultora de ingeniería líder dedicada a ofrecer soluciones de alta tecnología. Nos apasiona fomentar la digitalización de la construcción, convirtiendo desafíos en oportunidades de innovación y eficiencia.',
    aboutValue1: 'Misión: Innovar en la ingeniería con tecnología de vanguardia.',
    aboutValue2: 'Visión: Liderar la transformación digital en el sector de la construcción.',
    aboutValue3: 'Beneficios',
    ourStoryTitle: 'Nuestra Historia',
    ourStoryHeadline: 'De Perú para el Mundo',
    ourStoryDesc: 'Desde nuestros inicios, hemos apostado por la innovación. Lo que comenzó como una consultora local ha crecido hasta convertirse en una empresa con alcance global, impulsando la adopción de tecnologías BIM para revolucionar la forma en que se diseñan, construyen y gestionan los proyectos.',
    missionTitle: 'Nuestra Misión',
    missionDesc: 'Aportar soluciones de ingeniería de alto valor mediante la aplicación de tecnología de punta y un enfoque en el trabajo colaborativo, impulsando el éxito de nuestros clientes.',
    visionTitle: 'Nuestra Visión',
    visionDesc: 'Ser líderes globales en la transformación digital del sector de la construcción e ingeniería, reconocidos por nuestra innovación, calidad y compromiso.',
    valuesTitle: 'Beneficios Clave',
    valuesDesc: 'Nos guiamos por la excelencia, la integridad y la colaboración en todo lo que hacemos, construyendo relaciones de confianza con nuestros clientes y socios.',
    teamTitle: 'Nuestro Equipo',
    teamHeadline: 'Expertos Apasionados por la Innovación',
    teamRole1: 'CEO y Fundador',
    teamRole2: 'Líder de Proyectos BIM',
    teamRole3: 'Jefe de Desarrollo de Software',
    ctaTitle: '¿Listo para construir el futuro?',
    ctaDesc: 'Contáctanos para descubrir cómo nuestras soluciones BIM pueden transformar tu próximo proyecto.',

    // Services
    servicesTitle: 'Nuestros Servicios',
    service1Title: 'Equipos BIM Remotos Globales',
    service1Desc: 'Ofrecemos equipos BIM remotos dedicados en todo el mundo, garantizando una colaboración fluida y acceso a los mejores talentos para sus proyectos.',
    service1Detail: 'Nuestros equipos BIM remotos globales se integran perfectamente en sus flujos de trabajo existentes. Proporcionamos profesionales de BIM altamente cualificados y experimentados que pueden gestionar todo, desde el modelado y la coordinación hasta la gestión de proyectos. Este servicio le permite escalar su equipo bajo demanda, reducir los costos generales y acceder a conocimientos especializados sin limitaciones geográficas. Aseguramos una comunicación clara y una alineación del proyecto a través de sólidas plataformas de colaboración digital.',
    service2Title: 'Desarrollo de Software BIM a Medida',
    service2Desc: 'Creamos soluciones de software y add-ins personalizados para automatizar sus procesos, mejorar sus flujos de trabajo BIM e impulsar la productividad.',
    service2Detail: 'Desbloquee nuevos niveles de eficiencia con nuestros servicios de desarrollo de software a medida. Nos especializamos en la creación de complementos personalizados para Revit, Navisworks, Tekla y otras plataformas BIM. Ya sea que necesite automatizar tareas repetitivas, aplicar estándares de la empresa o integrar datos BIM con otros sistemas, nuestro equipo de desarrollo puede crear una solución que se adapte perfectamente a sus necesidades, ahorrándole tiempo y reduciendo errores.',
    service3Title: 'Acompañamiento BIM en Obra',
    service3Desc: 'Nuestros expertos brindan soporte BIM práctico directamente en su obra, asegurando una implementación perfecta y resolución inmediata de problemas.',
    service3Detail: 'Cierre la brecha entre el modelo digital y la construcción física con nuestro soporte en obra. Nuestros especialistas en BIM trabajan junto a su equipo de construcción para garantizar que el plan de ejecución de BIM se siga correctamente. Asistimos en la validación de modelos, la resolución de detección de conflictos en el campo, el diseño utilizando datos BIM y la resolución de problemas en tiempo real, minimizando el retrabajo y manteniendo su proyecto en el cronograma.',
    service4Title: 'BIM para Fabricación: Detallado de Acero de Alto Impacto',
    service4Desc: 'Nos especializamos en la creación de modelos de fabricación detallados, incluyendo el detallado de acero de refuerzo (rebar), para optimizar la manufactura.',
    service4Detail: `Impulsa tu proyecto con precisión milimétrica y coordinación total. Nuestro servicio de detallado 3D de armaduras transforma la planificación y ejecución de estructuras de hormigón armado complejas mediante modelos BIM de nivel de desarrollo LOD 400, listos para fabricación. Somos expertos que resolvemos antes de construir, desde la licitación hasta la obra.
---SPLIT---
### Las Limitaciones del 2D… Ya No Son una Opción
Los planos 2D tradicionales fragmentan la información: múltiples hojas, detalles dispersos, errores de interpretación y conflictos invisibles hasta que es demasiado tarde. Nosotros trabajamos en 3D desde el inicio. Detectamos conflictos antes de que cuesten dinero. Visualizamos cada detalle con claridad. Coordinamos con todas las disciplinas para una construcción sin sorpresas.
---SPLIT---
### Beneficios en Fase de Licitación y Preconstrucción
Scaling: Tonelajes Precisos, Decisiones Sólidas: Estimación de tonelaje con un margen de error menor al 3%. Ideal para licitaciones a precio fijo.
ListChecks: Compras Inteligentes: Pedidos tempranos y exactos de acero por diámetros y cantidades.
TrendingUp: Constructibilidad Sin Ensayo-Error: Detección anticipada de problemas constructivos, con soluciones antes de colocar la primera varilla.
---SPLIT---
### Beneficios en Fase de Diseño
AlertTriangle: Diseños Que Sí Se Pueden Construir: Validamos la viabilidad práctica de cada detalle estructural.
Repeat: Colaboración Sin Fricción: Flujo continuo de modelos entre equipos, siempre con la última versión.
CheckCircle: Modelos Que Respiran: Planos vivos vinculados al modelo 3D para chequeos rápidos, claros y sin ambigüedades.
Users: Coordinación Transversal: Interacción temprana con MEP y otras disciplinas para eliminar conflictos antes de obra.
---SPLIT---
### Beneficios en Fase de Construcción
HardHat: Cero Retrabajo, Cero Improvisación: Reducimos cortes, doblados y errores en campo.
FileText: Modelos Siempre a Mano: Acceso desde tablets, teléfonos y tecnología AR/MR directamente en obra.
Wrench: Seguimiento Visual del Progreso: Codificación por colores en el modelo según estado: entregado, instalado, pendiente.
---SPLIT---
### Entregables Profesionales y Accionables
- **Modelos 3D de armaduras 100% coordinados, listos para 4D y 5D.**
- **Informes de interferencias y constructibilidad.**
- **Conversión de planos 2D a BIM inteligente con atributos.**
- **Planos de taller y listados de despiece (BBS) generados directamente desde el modelo aprobado.**
---SPLIT---
### Nuestro Proceso Colaborativo
Usamos Trimble Connect y otras plataformas líderes para garantizar una integración perfecta entre todos los actores del proyecto. Esto se traduce en: datos centralizados y accesibles, visualización clara y amigable, un flujo de trabajo ágil y retroalimentación instantánea.
---SPLIT---
¿Listo para potenciar la precisión, eficiencia y colaboración de su próximo proyecto? Hablemos sobre cómo nuestros servicios de detallado 3D de armaduras pueden hacer realidad su visión.`,
    service5Title: 'Capacitación e Implementación BIM',
    service5Desc: 'Ofrecemos programas de capacitación integrales y soporte estratégico para capacitar a su equipo con las últimas tecnologías y habilidades BIM.',
    service5Detail: 'Capacite a su equipo con el conocimiento para tener éxito. Ofrecemos programas de formación personalizados para todos los niveles, desde principios básicos de BIM hasta técnicas avanzadas de software. Nuestro soporte de implementación ayuda a su organización a realizar una transición fluida a BIM, estableciendo estándares, flujos de trabajo y mejores prácticas para garantizar que obtenga el máximo rendimiento de su inversión en tecnología.',
    service6Title: 'Modelado BIM Integral',
    service6Desc: 'Desarrollamos modelos detallados y coordinados para todas las especialidades: arquitectura, estructuras e instalaciones (MEP).',
    service6Detail: 'Nuestro servicio de modelado BIM es la piedra angular de cualquier proyecto de construcción digital exitoso. Creamos modelos 3D precisos y ricos en datos para todas las disciplinas: Arquitectura, Estructuras e Instalaciones (MEP: Mecánica, Eléctrica y Sanitaria). Al centralizar toda la información, garantizamos una coordinación perfecta, una detección temprana de interferencias y una visión unificada del proyecto, lo que se traduce en ahorros significativos de tiempo y recursos en la fase de construcción.',
    // Portfolio
    portfolio: 'Portafolio',
    portfolioTitle: 'Nuestros Proyectos',
    project1Title: 'Torre Comercial',
    project1Desc: 'Coordinación BIM completa para un rascacielos de 40 pisos.',
    project2Title: 'Complejo Hospitalario',
    project2Desc: 'Modelado MEP y detección de interferencias para un centro de salud de vanguardia.',
    project3Title: 'Planta Industrial',
    project3Desc: 'Simulación 4D y planificación de la construcción para un proyecto industrial a gran escala.',
    // Contact
    contactTitle: 'Contáctenos',
    contactDesc: '¿Tiene un proyecto en mente? Hablemos de cómo podemos ayudarle.',
    formName: 'Nombre',
    formEmail: 'Correo Electrónico',
    formMessage: 'Mensaje',
    formSubmit: 'Enviar Mensaje',
    formSuccess: '¡Mensaje enviado con éxito!',
    formError: 'Algo salió mal. Por favor, inténtelo de nuevo.',
    // BIM Tools
    bimToolsTitle: 'BIMtools por Frata',
    bimToolsDesc: 'Descargue nuestra aplicación personalizada de Revit para mejorar su flujo de trabajo con herramientas gratuitas y profesionales.',
    bimToolsFreeTitle: 'Versión Gratuita',
    bimToolsFreeDesc: 'Comience con nuestras herramientas esenciales sin costo alguno.',
    bimToolsProTitle: 'Versión Pro',
    bimToolsProDesc: 'Desbloquee funciones avanzadas y soporte premium.',
    includedFeatures: 'Funciones Incluidas',
    proFeatures: 'Funciones Pro',
    benefitsTenderTitle: 'Beneficios en Fase de Licitación y Preconstrucción',
    benefitsDesignTitle: 'Beneficios en Fase de Diseño',
    benefitsConstructionTitle: 'Beneficios en Fase de Construcción',
    featureOpenModelFolder: 'Abrir Carpeta de Modelo',
    featureSearchView: 'Buscador de Vistas',
    featureMergeParameter: 'Unir Parámetros',
    featureFreezeElements: 'Congelar Elementos',
    featureSuperMatch: 'Super Match',
    featureShowRebar: 'Mostrar Acero de Refuerzo',
    featureSolidRebar: 'Acero de Refuerzo Sólido',
    featureChangeParameter: 'Cambiar Parámetro',
    featureUngroupRebar: 'Desagrupar Acero de Refuerzo',
    featureHostSync: 'Sincronizar Anfitrión',
    featureSelectByParameter: 'Seleccionar por Parámetro',
    featureApiAccess: 'Acceso API para Scripts',
    featurePrioritySupport: 'Soporte Prioritario',
    downloadFree: 'Descargar Versión Gratuita',
    upgradeToPro: 'Actualizar a Pro',
    download: 'Descargar',
    viewManual: 'Ver Manual',
     // Manual
    manualCategoryGeneral: 'General',
    manualCategoryNavigation: 'Navegación',
    manualCategoryManagement: 'Gestión',
    manualCategoryStructures: 'Estructuras',
    manualSelect: 'Selecciona una herramienta de la barra lateral para ver su manual.',
    manualStepsTitle: 'Pasos',
    manualVideoTitle: 'Video de Uso',
    manualSearchViewDesc: "El plugin View Finder es una potente herramienta diseñada para buscar y localizar rápidamente varios tipos de vistas dentro del modelo. Con este plugin, los usuarios pueden encontrar y abrir sin esfuerzo vistas como planos de planta, vistas 3D, tablas y planos, todo con una sola pulsación de tecla. El plugin View Finder agiliza el flujo de trabajo al eliminar la necesidad de navegar manualmente por el navegador de proyectos para encontrar vistas. Su intuitiva funcionalidad de búsqueda permite a los usuarios introducir el nombre de la vista deseada, presentando al instante una lista de resultados relevantes. Simplemente pulsando la tecla Enter, se abre la vista seleccionada, proporcionando acceso inmediato a la información deseada. Descubra y acceda sin esfuerzo a las vistas en su modelo de Revit con el plugin View Finder, maximizando la eficiencia y mejorando la productividad en su flujo de trabajo del proyecto.",
    manualSearchViewStep1: 'Configuración del atajo de teclado: Para permitir un acceso rápido al Buscador de Vistas, se recomienda configurar un atajo de teclado personalizado. Abra Revit, navegue a la configuración de "Atajos de teclado", localice el comando Buscador de Vistas y asigne el atajo de teclado deseado, como "SV", para una fácil accesibilidad.',
    manualSearchViewStep2: 'Una vez configurado el atajo de teclado, puede acceder al plugin pulsando "SV" y empezar a escribir el nombre de la vista que desea buscar.',
    manualSearchViewStep3: 'Además, también puede iniciar la aplicación desde el menú de la cinta de opciones navegando a la pestaña "Frata Tools".',
    manualSearchViewStep4: 'Características: Esta versión del plugin View Finder es la versión inicial.',
    manualSearchViewStep5: 'Restricciones: Actualmente no existen restricciones o limitaciones conocidas asociadas al plugin View Finder. Está diseñado para funcionar sin problemas dentro de Revit, proporcionando capacidades eficientes de búsqueda y apertura de vistas sin ninguna restricción conocida.',
    manualOpenModelFolderDesc: 'Una herramienta simple para abrir la carpeta que contiene el modelo actual.',
    manualMergeParameterDesc: 'Combina múltiples valores de parámetros en un solo parámetro.',
    manualFreezeElementsDesc: 'Bloquea elementos en su lugar para evitar cambios accidentales.',
    manualSuperMatchDesc: 'Iguala rápidamente propiedades entre elementos.',
    manualChangeParameterDesc: 'Edita en lote los valores de los parámetros para múltiples elementos.',
    manualSelectByParameterDesc: 'Selecciona elementos según los valores de sus parámetros.',
    manualShowRebarDesc: 'Controla la visibilidad del acero de refuerzo en tus vistas.',
    manualSolidRebarDesc: 'Muestra el acero de refuerzo como sólido en vistas 3D.',
    manualUngroupRebarDesc: 'Desagrupa conjuntos de acero de refuerzo para edición individual.',
    manualHostSyncDesc: 'Sincroniza elementos con su anfitrión.',
    // Footer
    footerText: '© 2024 Frata Ingenieros. Todos los derechos reservados.',
    // FAQ
    faqTitle: 'FAQ Inteligente',
    faqButton: 'Haz una Pregunta'
  }
};
