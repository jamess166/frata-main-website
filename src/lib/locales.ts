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
    service4Title: 'BIM for Manufacturing (Rebar Detailing)',
    service4Desc: 'We specialize in creating detailed fabrication models, including precise rebar detailing, to streamline manufacturing and assembly.',
    service4Detail: `Our 3D rebar detailing services revolutionize construction by enhancing precision and efficiency at every stage. We provide high-level-of-detail (LOD 400) models ready for fabrication, specializing in complex reinforced concrete structures.
---SPLIT---
### Avoiding the Pitfalls of 2D
Traditional 2D drawings pose significant challenges. With details spread across multiple sheets, clashes are often only discovered during construction. Visualizing a 3D space from 2D is difficult, leading to specification errors and coordination issues. Our 3D approach identifies and resolves these issues in the digital phase, before they become costly on-site problems.
---SPLIT---
### Benefits During Tender & Pre-construction
Scaling: Accurate Tonnage Estimation: Our detailed 3D models allow for swift and precise rebar tonnage estimation (within a 3% margin), providing confidence for project bids and fixed-price contracts.
ListChecks: Early Material Ordering: Plan and order bar diameters and quantities in advance, optimizing logistics and procurement.
TrendingUp: Optimized Buildability Planning: Identify potential construction challenges early, allowing for better planning and resource allocation.
---SPLIT---
### Benefits During Design Stage
AlertTriangle: Feasibility of Design Intent: We verify that the structural design is practical and buildable, preventing downstream issues.
Repeat: Seamless Model Exchange: We develop details through direct model exchange, ensuring all stakeholders are working with the latest information.
CheckCircle: Live Model-Drawing Links: Our drawings are linked to the live model, making checks faster, clearer, and more reliable.
Users: Early Trade Coordination: Fostering early interactions with other trades (like MEP) to reduce conflicts and rework.
---SPLIT---
### Benefits During Construction
HardHat: Reduced On-Site Rework: By identifying issues in the model, we reduce on-site cutting and bending and minimize delays from drawing errors.
FileText: On-Site Model Accessibility: Rebar models are accessible on-site via tablets, phones, or AR/MR devices, enhancing clarity and communication.
Wrench: Interactive Status Updates: Color-coded models show rebar status (e.g., delivered, fixed), providing real-time progress tracking for all stakeholders.
---SPLIT---
### Deliverables
Our service provides a comprehensive package of actionable, data-rich deliverables:
- **Clash-Free 3D Rebar Models:** Fully coordinated models ready for construction sequencing (4D) and cost estimation (5D).
- **Buildability & Clash Reports:** Detailed reports identifying conflicts with other elements (cast-in items, MEP) and resolving buildability issues early.
- **2D to 3D Model Conversion:** We convert existing 2D drawings into an intelligent Level 2 BIM model with rich attribute data.
- **Detailed Fabrication Drawings:** Clear, accurate shop drawings and bar bending schedules (BBS) generated directly from the approved model.
---SPLIT---
### Our Collaborative Process
A collaborative approach is key. We use industry-leading platforms like Trimble Connect to enable seamless collaboration among all stakeholders—rebar fixers, contractors, engineers, and designers.
- **Centralized Data:** Everyone has access to the same, up-to-date information.
- **Enhanced Visualization:** Clear, color-coded models make complex details easy to understand.
- **Streamlined Workflow:** To-do lists and status tracking keep the project moving efficiently.
- **Real-Time Communication:** Instant feedback loops minimize delays and enhance buildability.
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
    service4Title: 'BIM para Fabricación (Detallado de Acero)',
    service4Desc: 'Nos especializamos en la creación de modelos de fabricación detallados, incluyendo el detallado de acero de refuerzo (rebar), para optimizar la manufactura.',
    service4Detail: `Nuestros servicios de detallado 3D de armaduras revolucionan la construcción al mejorar la precisión y la eficiencia en cada etapa. Proporcionamos modelos de alto nivel de detalle (LOD 400) listos para la fabricación, especializándonos en estructuras complejas de hormigón armado.
---SPLIT---
### Evitando las Trampas del 2D
Los planos 2D tradicionales plantean desafíos significativos. Con detalles dispersos en múltiples hojas, las interferencias a menudo solo se descubren durante la construcción. Visualizar un espacio 3D a partir de 2D es difícil, lo que conduce a errores de especificación y problemas de coordinación. Nuestro enfoque 3D identifica y resuelve estos problemas en la fase digital, antes de que se conviertan en costosos problemas en obra.
---SPLIT---
### Beneficios en Licitación y Pre-construcción
Scaling: Estimación Precisa de Tonelaje: Nuestros modelos 3D detallados permiten una estimación rápida y precisa del tonelaje de armadura (con un margen del 3%), proporcionando confianza para licitaciones y contratos a precio fijo.
ListChecks: Pedidos de Material Tempranos: Planifique y ordene diámetros y cantidades de barras con antelación, optimizando la logística y las adquisiciones.
TrendingUp: Planificación Optimizada de la Constructibilidad: Identifique posibles desafíos de construcción de forma temprana, permitiendo una mejor planificación y asignación de recursos.
---SPLIT---
### Beneficios en la Etapa de Diseño
AlertTriangle: Viabilidad del Diseño: Verificamos que el diseño estructural sea práctico y construible, previniendo problemas posteriores.
Repeat: Intercambio de Modelos Fluido: Desarrollamos detalles a través del intercambio directo de modelos, asegurando que todos los interesados trabajen con la información más reciente.
CheckCircle: Vínculos Vivos Modelo-Plano: Nuestros planos están vinculados al modelo vivo, haciendo que las comprobaciones sean más rápidas, claras y fiables.
Users: Coordinación Temprana con Otras Especialidades: Fomentamos interacciones tempranas con otras especialidades (como MEP) para reducir conflictos y retrabajos.
---SPLIT---
### Beneficios Durante la Construcción
HardHat: Reducción de Retrabajos en Obra: Al identificar problemas en el modelo, reducimos el corte y doblado en obra y minimizamos los retrasos por errores en los planos.
FileText: Acceso al Modelo en Obra: Los modelos de armadura son accesibles en obra a través de tabletas, teléfonos o dispositivos AR/MR, mejorando la claridad y la comunicación.
Wrench: Actualizaciones de Estado Interactivas: Los modelos codificados por colores muestran el estado de la armadura (ej., entregada, instalada), proporcionando un seguimiento del progreso en tiempo real.
---SPLIT---
### Entregables
Nuestro servicio proporciona un paquete completo de entregables procesables y ricos en datos:
- **Modelos 3D de Armaduras Sin Interferencias:** Modelos totalmente coordinados listos para la secuenciación de la construcción (4D) y la estimación de costos (5D).
- **Informes de Constructibilidad e Interferencias:** Informes detallados que identifican conflictos con otros elementos (embebidos, MEP) y resuelven problemas de constructibilidad de manera temprana.
- **Conversión de Modelos 2D a 3D:** Convertimos planos 2D existentes en un modelo BIM inteligente de Nivel 2 con datos de atributos enriquecidos.
- **Planos de Fabricación Detallados:** Planos de taller claros y precisos y listados de despiece de barras (BBS) generados directamente desde el modelo aprobado.
---SPLIT---
### Nuestro Proceso Colaborativo
Un enfoque colaborativo es clave. Utilizamos plataformas líderes en la industria como Trimble Connect para permitir una colaboración perfecta entre todos los interesados: montadores, contratistas, ingenieros y diseñadores.
- **Datos Centralizados:** Todos tienen acceso a la misma información actualizada.
- **Visualización Mejorada:** Modelos claros y codificados por colores que facilitan la comprensión de detalles complejos.
- **Flujo de Trabajo Optimizado:** Listas de tareas y seguimiento del estado que mantienen el proyecto en movimiento de manera eficiente.
- **Comunicación en Tiempo Real:** Ciclos de retroalimentación instantáneos que minimizan los retrasos y mejoran la constructibilidad.
---SPLIT---
¿Listo para mejorar la precisión, eficiencia y colaboración de su próximo proyecto? Hablemos de cómo nuestros servicios de detallado 3D de armaduras pueden dar vida a su visión.`,
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
    benefitsTenderTitle: 'Beneficios en Licitación y Pre-construcción',
    benefitsDesignTitle: 'Beneficios en la Etapa de Diseño',
    benefitsConstructionTitle: 'Beneficios Durante la Construcción',
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
