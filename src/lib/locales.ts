export const locales = ['en', 'es'] as const;
export type Locale = typeof locales[number];

export const translations = {
  en: {
    // Header
    services: 'Services',
    portfolio: 'Portfolio',
    bimTools: 'BIMtools',
    contact: 'Contact',
    // Hero
    heroHeadline: 'Advanced BIM Solutions for Engineering',
    heroSubhead: 'We transform complex projects into digital realities with precision and efficiency. Discover the future of construction with Frata Ingenieros.',
    heroCTA: 'Get in Touch',
    // Services
    servicesTitle: 'Our Services',
    service1Title: 'BIM Modeling',
    service1Desc: 'Creation of detailed and accurate 3D models for all project phases.',
    service2Title: 'Clash Detection',
    service2Desc: 'Identification and resolution of conflicts before construction begins, saving time and costs.',
    service3Title: '4D Simulation',
    service3Desc: 'Integration of scheduling with 3D models to visualize construction progress over time.',
    service4Title: 'Facility Management',
    service4Desc: 'BIM models enriched with data for efficient building operation and maintenance.',
    // Portfolio
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
    bimToolsDesc: 'Download our custom Revit applications and add-ins to enhance your workflow.',
    tool1Title: 'Element Renumbering Tool',
    tool1Desc: 'Automate the process of renumbering Revit elements based on custom rules.',
    tool2Title: 'Sheet Manager Pro',
    tool2Desc: 'Efficiently manage and organize sheets in your Revit projects.',
    download: 'Download',
    viewManual: 'View Manual',
    // Footer
    footerText: '© 2024 Frata Ingenieros. All rights reserved.',
    // FAQ
    faqTitle: 'Intelligent FAQ',
    faqButton: 'Ask a Question'
  },
  es: {
    // Header
    services: 'Servicios',
    portfolio: 'Portafolio',
    bimTools: 'BIMtools',
    contact: 'Contacto',
    // Hero
    heroHeadline: 'Soluciones BIM Avanzadas para Ingeniería',
    heroSubhead: 'Transformamos proyectos complejos en realidades digitales con precisión y eficiencia. Descubra el futuro de la construcción con Frata Ingenieros.',
    heroCTA: 'Contáctanos',
    // Services
    servicesTitle: 'Nuestros Servicios',
    service1Title: 'Modelado BIM',
    service1Desc: 'Creación de modelos 3D detallados y precisos para todas las fases del proyecto.',
    service2Title: 'Detección de Interferencias',
    service2Desc: 'Identificación y resolución de conflictos antes de que comience la construcción, ahorrando tiempo y costos.',
    service3Title: 'Simulación 4D',
    service3Desc: 'Integración de la planificación con modelos 3D para visualizar el progreso de la construcción en el tiempo.',
    service4Title: 'Gestión de Activos',
    service4Desc: 'Modelos BIM enriquecidos con datos para una operación y mantenimiento eficientes del edificio.',
    // Portfolio
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
    bimToolsDesc: 'Descargue nuestras aplicaciones y complementos personalizados para Revit para mejorar su flujo de trabajo.',
    tool1Title: 'Herramienta de Renumeración',
    tool1Desc: 'Automatice el proceso de renumeración de elementos de Revit según reglas personalizadas.',
    tool2Title: 'Gestor de Planos Pro',
    tool2Desc: 'Gestione y organice eficientemente los planos en sus proyectos de Revit.',
    download: 'Descargar',
    viewManual: 'Ver Manual',
    // Footer
    footerText: '© 2024 Frata Ingenieros. Todos los derechos reservados.',
    // FAQ
    faqTitle: 'FAQ Inteligente',
    faqButton: 'Haz una Pregunta'
  }
};
