
export const locales = ['en', 'es'] as const;
export type Locale = typeof locales[number];

export const translations = {
  en: {
    // Header
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    portfolio: 'Portfolio',
    bimTools: 'BIMtools',
    contact: 'Contact',
    learnMore: 'Learn More',
    viewDetails: 'View Details',
    benefits: 'Benefits',
    benefitsByPhase: 'Key Benefits by Phase',
    quantifiedAdvantagesTitle: 'Quantified Advantages',
    ourProcess: 'Our Efficient Process',
    whyChooseUs: 'Why Choose Us?',
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
    timelineEvent2Title: 'International Expansion',
    timelineEvent2Desc: 'We expanded our operations beyond Peruvian borders, bringing our expertise in digital transformation to international markets and establishing key strategic alliances.',
    timelineEvent3Title: 'Innovation Leadership',
    timelineEvent3Desc: 'We established ourselves as leaders in implementing emerging technologies in the construction sector, developing our own solutions and innovative methodologies.',
    missionTitle: 'Our Mission',
    missionDesc: 'To provide high-value engineering solutions through the application of cutting-edge technology and a focus on collaborative work, driving the success of our clients.',
    visionTitle: 'Our Vision',
    visionDesc: 'To be global leaders in the digital transformation of the construction and engineering sector, recognized for our innovation, quality, and commitment.',
    valuesTitle: 'Our Values',
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
    service1Detail: `Access the world's best BIM talent. We provide specialized remote teams that seamlessly integrate with your workflow, ensuring exceptional quality and smooth collaboration from any location.
---SPLIT---
Key Advantages
---SPLIT---
1. Global Talent Access: We connect you with a network of certified BIM professionals from around the world, ensuring you get the right expertise for your project.
2. Flexible Scalability: Adjust the size of your team according to project needs, from a single specialist to a full team. We scale with you.
3. Cost Reduction: Optimize your budget by avoiding the costs associated with hiring, training, and maintaining a full-time in-house team.
4. Guaranteed Quality: Our rigorous selection process and continuous project management ensure that every deliverable meets the highest quality standards.
---SPLIT---
Our Services
---SPLIT---
1. Dedicated BIM Teams: We assign complete and dedicated teams exclusively to your project, with professionals specialized in your industry and type of construction. This includes senior and junior BIM modelers, certified BIM coordinators, and dedicated project managers.
2. Seamless Collaboration: Advanced technological infrastructure that allows for real-time collaboration, regardless of geographical location. We use the most widely used CDE platforms worldwide for fluid communication and centralized version management.
3. Expert Talent Selection: A rigorous selection process ensures that only the best BIM professionals work on your projects. We verify certifications, experience in similar projects, and communication skills.
---SPLIT---
Our Implementation Process
---SPLIT---
1. Requirements Analysis: We evaluate your specific needs, timeline, budget, and technical project requirements.
2. Team Selection: We identify and select the perfect professionals for your project based on experience and specialization.
3. Rapid Onboarding: We integrate the team with your processes, standards, tools, and methodologies quickly and efficiently.
4. Execution and Monitoring: Continuous project management with regular reports, quality control, and adjustments as needed.`,
    service2Title: 'Custom BIM Software Development',
    service2Desc: 'We create tailored software solutions and add-ins to automate your processes, enhance your BIM workflows, and boost productivity.',
    service2Detail: `Tailored Software That Drives Your Business. We craft custom software solutions designed for the real-world challenges of the AEC and manufacturing sectors, enhancing your workflows, productivity, and revenue.
---SPLIT---
The Frata Difference: Engineers Who Code
---SPLIT---
We aren't just software developers; we are industry veterans. Our team combines deep expertise in AEC and manufacturing workflows with cutting-edge software engineering. We understand your processes, speak your language, and build solutions that solve your specific problems, not just write code.
---SPLIT---
Our Custom Solutions
---SPLIT---
1. BIM Platform Add-ins: Custom tools for Revit, Tekla, and Navisworks to automate repetitive tasks, enforce standards, and streamline complex modeling processes.
2. Web Applications & IFC Viewers: Innovative web apps and cloud-based viewers that make BIM data accessible to all stakeholders, anywhere, on any device.
3. Process Automation: Bespoke scripts and applications that connect disparate systems, automate data transfer, and eliminate manual, error-prone tasks.
---SPLIT---
Our Development Process
---SPLIT---
1. Discovery & Strategy: We start by understanding your goals, challenges, and existing workflows to define a clear project roadmap.
2. Prototyping & Design: We create mockups and prototypes to validate the concept and ensure the user experience is intuitive and efficient.
3. Agile Development: We build the solution in iterative sprints, providing regular updates and incorporating your feedback along the way.
4. Testing & QA: Rigorous testing is performed to ensure the software is robust, reliable, and bug-free.
5. Deployment & Support: We assist with deployment and provide ongoing support and maintenance to ensure your solution continues to deliver value.
---SPLIT---
What Our Customers Say`,
    service3Title: 'On-Site BIM Construction Support',
    service3Desc: 'Our experts provide hands-on BIM support directly on your construction site, ensuring perfect implementation and immediate problem-solving.',
    service3Detail: `Bridge the gap between the digital model and physical construction. Our experts provide practical BIM support directly on your construction site, ensuring perfect implementation and immediate problem-solving.
---SPLIT---
Why choose our On-Site BIM Support?
---SPLIT---
1. On-Site Experts: Our BIM specialists work directly at your construction site, providing immediate technical assistance and resolving issues in real time. Key benefits include direct coordination with teams and adaptation to real conditions.
2. Practical Implementation: We translate BIM models into concrete actions, ensuring that digital information is correctly materialized in the physical construction. This includes model vs. reality verification and continuous quality control.
3. Immediate Response: We eliminate waiting times with our on-site team, guaranteeing continuity in the construction processes. This means instant technical support and fast, well-founded decisions.
4. Knowledge Transfer: We train your team as we work together, ensuring they acquire the necessary BIM skills for future projects. This fosters internal capabilities and progressive autonomy.
---SPLIT---
Our Support Process
---SPLIT---
1. Initial Analysis: We evaluate the current state of the project, identify specific needs, and define the objectives for our support.
2. Team Deployment: We assign BIM specialists with proven experience in your type of project to work directly on-site.
3. Active Implementation: We work side-by-side with your team, solving problems, optimizing processes, and ensuring BIM quality.
4. Continuous Monitoring: We constantly supervise the implementation, make necessary adjustments, and document lessons learned.
---SPLIT---
Proven Results
---SPLIT---
1. Significant Error Reduction: Fewer clashes and coordination issues thanks to direct on-site support.
2. Time Savings: Immediate problem resolution prevents delays and accelerates construction processes.
3. Increased Quality: Continuous quality control and expert supervision ensure a higher quality final product.
4. Empowered Teams: Your team gains the skills and confidence to manage BIM autonomously in the future.`,
    service4Title: 'BIM for Manufacturing: High-Impact Rebar Detailing',
    service4Desc: 'We specialize in creating detailed fabrication models, including precise rebar detailing, to streamline manufacturing and assembly.',
    service4Detail: `Our 3D rebar detailing service transforms the planning and execution of complex reinforced concrete structures using high-detail BIM models, ready for fabrication. We are experts who solve problems before construction begins, from bidding to on-site work.
---SPLIT---
The Limitations of 2D… No Longer an Option. Traditional 2D drawings fragment information, leading to clashes, errors, and costly rework discovered only on-site. With 3D modeling, we identify clashes before they cost money, visualize every detail with clarity, and coordinate with all disciplines to ensure construction proceeds without surprises, avoiding costly rework and delays.
---SPLIT---
Key Benefits by Phase
---SPLIT---
Pre-construction: Accurate tonnage estimation (±3%), smart procurement, and proactive buildability analysis.
Design & Coordination: Feasibility validation, seamless model exchange, and live drawing links for faster checks.
Fabrication & Assembly: Data export in the client's required format and optimized prefabrication.
Documentation & Handover: Updated "As-Built" models and complete traceability.
---SPLIT---
Quantified Advantages
---SPLIT---
Our Efficient Process
---SPLIT---
1. Initial Assessment: Analysis of drawings, BIM goals, and modeling requirements.
2. 3D Modeling: Structural and parametric detailing with leading BIM software like Revit and Tekla.
3. Detailing: Generation of drawings and listings in the required format, adapting to the standards of bending machines or client's request.
4. BIM Coordination: Clash detection and harmonization across disciplines.
5. Fabrication Support: Data export for workshop, prefabrication, and logistics.
6. Final Delivery: "As-Built" model update and complete documentation.
---SPLIT---
Why Choose Us?
---SPLIT---
1. Experienced Team: Our team has decades of combined experience in BIM and structural reinforcement.
2. Cutting-Edge Technology: Advanced mastery of Tekla, Revit, Navisworks, and Trimble Connect.
3. Professional Approach: Clear methodology with measurable and traceable deliverables.
4. Real Savings: Significant reduction in time and money through BIM optimization.
5. Specialized Dedication: Unlike generalists, our exclusive focus on rebar detailing ensures a superior level of quality and expertise in every project.`,
    service5Title: 'BIM Training & Implementation',
    service5Desc: 'We offer comprehensive training programs and strategic implementation support to empower your team with the latest BIM skills and technologies.',
    service5Detail: 'Empower your team with the knowledge to succeed. We offer customized training programs for all skill levels, from basic BIM principles to advanced software techniques. Our implementation support helps your organization smoothly transition to BIM, establishing standards, workflows, and best practices to ensure you get the maximum return on your technology investment.',
    service6Title: 'Comprehensive BIM Modeling',
    service6Desc: 'We develop detailed, coordinated models for all disciplines: architecture, structures, and MEP.',
    service6Detail: 'Our BIM modeling service is the cornerstone of any successful digital construction project. We create accurate, data-rich 3D models for all disciplines: Architecture, Structures, and MEP (Mechanical, Electrical, and Plumbing). By centralizing all information, we guarantee seamless coordination, early clash detection, and a unified vision of the project, which translates into significant savings in time and resources during the construction phase.',
    quantifiedAdvantages: `30%; Higher Productivity; Faster than traditional 2D methods
95%; Error Reduction; Less rework and material waste
100%; Project Control; Full traceability and automated deliveries`,
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
    home: 'Inicio',
    about: 'Quiénes Somos',
    services: 'Servicios',
    portfolio: 'Portafolio',
    bimTools: 'BIMtools',
    contact: 'Contacto',
    learnMore: 'Conoce Más',
    viewDetails: 'Ver Detalles',
    benefits: 'Beneficios',
    benefitsByPhase: 'Beneficios Clave por Fase',
    quantifiedAdvantagesTitle: 'Ventajas Cuantificadas',
    ourProcess: 'Nuestro Proceso Eficiente',
    whyChooseUs: '¿Por Qué Elegirnos?',
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
    timelineEvent2Title: 'Expansión Internacional',
    timelineEvent2Desc: 'Expandimos nuestras operaciones más allá de las fronteras peruanas, llevando nuestra expertise en transformación digital a mercados internacionales y estableciendo alianzas estratégicas clave.',
    timelineEvent3Title: 'Liderazgo en Innovación',
    timelineEvent3Desc: 'Nos consolidamos como referentes en la implementación de tecnologías emergentes en el sector construcción, desarrollando soluciones propias y metodologías innovadoras.',
    missionTitle: 'Nuestra Misión',
    missionDesc: 'Aportar soluciones de ingeniería de alto valor mediante la aplicación de tecnología de punta y un enfoque en el trabajo colaborativo, impulsando el éxito de nuestros clientes.',
    visionTitle: 'Nuestra Visión',
    visionDesc: 'Ser líderes globales en la transformación digital del sector de la construcción e ingeniería, reconocidos por nuestra innovación, calidad y compromiso.',
    valuesTitle: 'Nuestros Valores',
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
    service1Detail: `Accede al mejor talento BIM del mundo. Proporcionamos equipos remotos especializados que se integran perfectamente con tu flujo de trabajo, garantizando calidad excepcional y colaboración fluida desde cualquier ubicación.
---SPLIT---
Ventajas Clave
---SPLIT---
1. Acceso a Talento Global: Te conectamos con una red de profesionales BIM certificados de todo el mundo, asegurando que obtengas la experiencia adecuada para tu proyecto.
2. Escalabilidad Flexible: Ajusta el tamaño de tu equipo según las necesidades del proyecto, desde un solo especialista hasta un equipo completo. Crecemos contigo.
3. Reducción de Costos: Optimiza tu presupuesto evitando los costos asociados a la contratación, capacitación y mantenimiento de un equipo interno a tiempo completo.
4. Calidad Garantizada: Nuestro riguroso proceso de selección y la gestión continua de proyectos aseguran que cada entregable cumpla con los más altos estándares de calidad.
---SPLIT---
Nuestros Servicios
---SPLIT---
1. Equipos BIM Dedicados: Asignamos equipos completos y dedicados exclusivamente a tu proyecto, con profesionales especializados en tu industria y tipo de construcción. Incluye modeladores BIM senior y junior, coordinadores BIM certificados y gestores de proyecto dedicados.
2. Colaboración Sin Fronteras: Infraestructura tecnológica avanzada que permite colaboración en tiempo real, independientemente de la ubicación geográfica. Usamos las plataformas CDE más usadas a nivel mundial para una comunicación fluida y gestión centralizada de versiones.
3. Selección de Talento Experta: Proceso riguroso de selección que garantiza que solo los mejores profesionales BIM trabajen en tus proyectos. Verificamos certificaciones, experiencia en proyectos similares y habilidades de comunicación.
---SPLIT---
Nuestro Proceso de Implementación
---SPLIT---
1. Análisis de Requisitos: Evaluamos tus necesidades específicas, cronograma, presupuesto y requisitos técnicos del proyecto.
2. Selección de Equipo: Identificamos y seleccionamos a los profesionales perfectos para tu proyecto basándonos en experiencia y especialización.
3. Onboarding Rápido: Integramos al equipo con tus procesos, estándares, herramientas y metodologías de forma rápida y eficiente.
4. Ejecución y Monitoreo: Gestión continua del proyecto con reportes regulares, control de calidad y ajustes según sea necesario.`,
    service2Title: 'Desarrollo de Software BIM a Medida',
    service2Desc: 'Creamos soluciones de software y add-ins personalizados para automatizar sus procesos, mejorar sus flujos de trabajo BIM e impulsar la productividad.',
    service2Detail: `Software a Medida que Impulsa tu Negocio. Creamos soluciones de software personalizadas, diseñadas para los desafíos del mundo real en los sectores AEC y de manufactura, mejorando tus flujos de trabajo, productividad e ingresos.
---SPLIT---
La Diferencia Frata: Ingenieros que Programan
---SPLIT---
No somos solo desarrolladores de software; somos veteranos de la industria. Nuestro equipo combina una profunda experiencia en los flujos de trabajo de AEC y manufactura con ingeniería de software de vanguardia. Entendemos tus procesos, hablamos tu idioma y construimos soluciones que resuelven tus problemas específicos, no solo escribimos código.
---SPLIT---
Nuestras Soluciones a Medida
---SPLIT---
1. Add-ins para Plataformas BIM: Herramientas personalizadas para Revit, Tekla y Navisworks para automatizar tareas repetitivas, aplicar estándares y agilizar procesos de modelado complejos.
2. Aplicaciones Web y Visores IFC: Aplicaciones web innovadoras y visores en la nube que hacen que los datos BIM sean accesibles para todos los interesados, en cualquier lugar y en cualquier dispositivo.
3. Automatización de Procesos: Scripts y aplicaciones a medida que conectan sistemas dispares, automatizan la transferencia de datos y eliminan tareas manuales propensas a errores.
---SPLIT---
Nuestro Proceso de Desarrollo
---SPLIT---
1. Descubrimiento y Estrategia: Comenzamos por entender tus objetivos, desafíos y flujos de trabajo existentes para definir una hoja de ruta clara del proyecto.
2. Prototipado y Diseño: Creamos maquetas y prototipos para validar el concepto y asegurar que la experiencia de usuario sea intuitiva y eficiente.
3. Desarrollo Ágil: Construimos la solución en sprints iterativos, proporcionando actualizaciones regulares e incorporando tus comentarios en el camino.
4. Pruebas y QA: Se realizan pruebas rigurosas para asegurar que el software sea robusto, confiable y libre de errores.
5. Despliegue y Soporte: Asistimos en el despliegue y proporcionamos soporte y mantenimiento continuo para asegurar que tu solución siga aportando valor.
---SPLIT---
Lo que Dicen Nuestros Clientes`,
    service3Title: 'Acompañamiento BIM en Obra',
    service3Desc: 'Nuestros expertos brindan soporte BIM práctico directamente en su obra, asegurando una implementación perfecta y resolución inmediata de problemas.',
    service3Detail: `Cierre la brecha entre el modelo digital y la construcción física. Nuestros expertos brindan soporte BIM práctico directamente en su obra, asegurando una implementación perfecta y resolución inmediata de problemas.
---SPLIT---
¿Por qué elegir nuestro Acompañamiento BIM?
---SPLIT---
1. Expertos en Obra: Nuestros especialistas BIM trabajan directamente en su obra, proporcionando asistencia técnica inmediata y resolviendo problemas en tiempo real. Los beneficios clave incluyen la coordinación directa con los equipos y la adaptación a las condiciones reales.
2. Implementación Práctica: Traducimos los modelos BIM en acciones concretas, asegurando que la información digital se materialice correctamente en la construcción física. Esto incluye la verificación de modelos vs. realidad y el control de calidad continuo.
3. Respuesta Inmediata: Eliminamos los tiempos de espera con nuestro equipo presente en obra, garantizando la continuidad en los procesos constructivos. Esto se traduce en soporte técnico instantáneo y decisiones rápidas y fundamentadas.
4. Transferencia de Conocimiento: Capacitamos a su equipo mientras trabajamos juntos, asegurando que adquieran las competencias BIM necesarias para futuros proyectos. Esto fomenta las capacidades internas y la autonomía progresiva.
---SPLIT---
Nuestro Proceso de Acompañamiento
---SPLIT---
1. Análisis Inicial: Evaluamos el estado actual del proyecto, identificamos necesidades específicas y definimos los objetivos del acompañamiento.
2. Despliegue de Equipo: Asignamos especialistas BIM con experiencia comprobada en su tipo de proyecto para trabajar directamente en obra.
3. Implementación Activa: Trabajamos codo a codo con su equipo, resolviendo problemas, optimizando procesos y garantizando la calidad BIM.
4. Monitoreo Continuo: Supervisamos constantemente la implementación, realizamos los ajustes necesarios y documentamos las lecciones aprendidas.
---SPLIT---
Resultados Comprobados
---SPLIT---
1. Reducción Significativa de Errores: Menos conflictos y problemas de coordinación gracias al acompañamiento directo en obra.
2. Ahorro de Tiempos: La resolución inmediata de problemas evita retrasos y acelera los procesos constructivos.
3. Aumento de la Calidad: El control de calidad continuo y la supervisión experta aseguran un producto final de mayor calidad.
4. Equipos Empoderados: Su equipo adquiere las competencias y la confianza para gestionar BIM de forma autónoma en el futuro.`,
    service4Title: 'BIM para Fabricación: Detallado de Acero de Alto Impacto',
    service4Desc: 'Nos especializamos en la creación de modelos de fabricación detallados, incluyendo el detallado de acero de refuerzo (rebar), para optimizar la manufactura.',
    service4Detail: `Nuestro servicio de detallado 3D de armaduras transforma la planificación y ejecución de estructuras de hormigón armado complejas mediante modelos BIM de alto detalle, listos para fabricación. Somos expertos que resolvemos problemas antes de construir, desde la licitación hasta la obra.
---SPLIT---
Las Limitaciones del 2D… Ya No Son una Opción. Los planos 2D tradicionales fragmentan la información, llevando a interferencias, errores y costosos retrabajos descubiertos solo en obra. Con el modelado 3D, identificamos interferencias antes de que cuesten dinero, visualizamos cada detalle con claridad y coordinamos con todas las disciplinas para asegurar una construcción sin sorpresas, evitando costosos retrabajos y retrasos.
---SPLIT---
Beneficios Clave por Fase
---SPLIT---
Pre-construcción: Estimación de tonelaje precisa (±3%), compras inteligentes y análisis proactivo de constructibilidad.
Diseño y Coordinación: Validación de viabilidad, flujo de modelos sin fricción y planos vivos vinculados al modelo para chequeos rápidos.
Fabricación y Montaje: Exportación de datos en el formato requerido por el cliente y prefabricación optimizada.
Documentación y Cierre: Entrega de modelos "As-Built" actualizados y trazabilidad completa.
---SPLIT---
Ventajas Cuantificadas
---SPLIT---
Nuestro Proceso Eficiente
---SPLIT---
1. Evaluación Inicial: Análisis de planos, objetivos BIM y requerimientos de modelado.
2. Modelado 3D: Detallado estructural y paramétrico con software BIM líder del mercado como Revit y Tekla.
3. Detallado: Generación de planos y listados en el formato requerido, adecuándonos a los estándares de las máquinas de doblado o a lo solicitado por el cliente.
4. Coordinación BIM: Detección de interferencias y armonización entre disciplinas.
5. Soporte a Fabricación: Exportación de datos para taller, prefabricación y logística.
6. Entrega Final: Actualización de modelo "As-Built" y documentación completa.
---SPLIT---
¿Por Qué Elegirnos?
---SPLIT---
1. Equipo Experimentado: Nuestro equipo cuenta con décadas de experiencia combinada en BIM y refuerzo estructural.
2. Tecnología de Punta: Dominio avanzado de Tekla, Revit, Navisworks y Trimble Connect.
3. Enfoque Profesional: Metodología clara con entregables medibles y trazables.
4. Ahorro Real: Reducción significativa de tiempo y dinero gracias a la optimización BIM.
5. Dedicación Especializada: A diferencia de los generalistas, nuestro enfoque exclusivo en el detallado de acero garantiza un nivel de calidad y expertise superior en cada proyecto.`,
    service5Title: 'Capacitación e Implementación BIM',
    service5Desc: 'Ofrecemos programas de capacitación integrales y soporte estratégico para capacitar a su equipo con las últimas tecnologías y habilidades BIM.',
    service5Detail: 'Capacite a su equipo con el conocimiento para tener éxito. Ofrecemos programas de formación personalizados para todos los niveles, desde principios básicos de BIM hasta técnicas avanzadas de software. Nuestro soporte de implementación ayuda a su organización a realizar una transición fluida a BIM, estableciendo estándares, flujos de trabajo y mejores prácticas para garantizar que obtenga el máximo rendimiento de su inversión en tecnología.',
    service6Title: 'Modelado BIM Integral',
    service6Desc: 'Desarrollamos modelos detallados y coordinados para todas las especialidades: arquitectura, estructuras e instalaciones (MEP).',
    service6Detail: 'Nuestro servicio de modelado BIM es la piedra angular de cualquier proyecto de construcción digital exitoso. Creamos modelos 3D precisos y ricos en datos para todas las disciplinas: Arquitectura, Estructuras e Instalaciones (MEP: Mecánica, Eléctrica y Sanitaria). Al centralizar toda la información, garantizamos una coordinación perfecta, una detección temprana de interferencias y una visión unificada del proyecto, lo que se traduce en ahorros significativos de tiempo y recursos en la fase de construcción.',
    quantifiedAdvantages: `30%; Mayor Productividad; Más rápido que los métodos 2D tradicionales
95%; Reducción de Errores; Menos retrabajo y desperdicio de material
100%; Control del Proyecto; Trazabilidad total y entregas automatizadas`,
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

    
