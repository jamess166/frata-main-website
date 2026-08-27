import type { Locale } from "@/lib/locale";

export interface FooterContent {
  nextProject: string;
  heading: string;
  talkToUs: string;
  tagline: string;
  nav: {
    label: string;
    home: string;
    about: string;
    services: string;
    caseStudies: string;
    contact: string;
  };
  bimtools: {
    label: string;
    allAddins: string;
    privacy: string;
  };
  followUs: string;
  copyright: string;
  madeIn: string;
}

export const footerContent: Record<Locale, FooterContent> = {
  es: {
    nextProject: "Siguiente proyecto",
    heading: "¿Construimos juntos?",
    talkToUs: "Hablemos",
    tagline: "Consultoría BIM, modelado y desarrollo técnico para Revit y Tekla.",
    nav: {
      label: "Navegación",
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      caseStudies: "Casos",
      contact: "Contacto",
    },
    bimtools: { label: "BIMtools", allAddins: "Ver todos los addins", privacy: "Política de privacidad" },
    followUs: "Síguenos",
    copyright: "© 2026 Frata Ingenieros. Todos los derechos reservados.",
    madeIn: "Hecho en Perú para el mundo AEC.",
  },
  en: {
    nextProject: "Next project",
    heading: "Let's build together.",
    talkToUs: "Talk to us",
    tagline: "BIM consulting, modeling and technical development for Revit and Tekla.",
    nav: {
      label: "Navigation",
      home: "Home",
      about: "About",
      services: "Services",
      caseStudies: "Case Studies",
      contact: "Contact",
    },
    bimtools: { label: "BIMtools", allAddins: "All addins", privacy: "Privacy policy" },
    followUs: "Follow us",
    copyright: "© 2026 Frata Ingenieros. All rights reserved.",
    madeIn: "Made in Peru for the AEC world.",
  },
  de: {
    nextProject: "Nächstes Projekt",
    heading: "Bauen wir gemeinsam?",
    talkToUs: "Kontakt aufnehmen",
    tagline: "BIM-Beratung, Modellierung und technische Entwicklung für Revit und Tekla.",
    nav: {
      label: "Navigation",
      home: "Startseite",
      about: "Über uns",
      services: "Leistungen",
      caseStudies: "Referenzen",
      contact: "Kontakt",
    },
    bimtools: { label: "BIMtools", allAddins: "Alle Addins ansehen", privacy: "Datenschutzerklärung" },
    followUs: "Folgen Sie uns",
    copyright: "© 2026 Frata Ingenieros. Alle Rechte vorbehalten.",
    madeIn: "Made in Peru für die AEC-Welt.",
  },
  fr: {
    nextProject: "Prochain projet",
    heading: "On construit ensemble ?",
    talkToUs: "Parlons-en",
    tagline: "Conseil BIM, modélisation et développement technique pour Revit et Tekla.",
    nav: {
      label: "Navigation",
      home: "Accueil",
      about: "À propos",
      services: "Services",
      caseStudies: "Études de cas",
      contact: "Contact",
    },
    bimtools: { label: "BIMtools", allAddins: "Voir tous les addins", privacy: "Politique de confidentialité" },
    followUs: "Suivez-nous",
    copyright: "© 2026 Frata Ingenieros. Tous droits réservés.",
    madeIn: "Conçu au Pérou pour le monde AEC.",
  },
  it: {
    nextProject: "Prossimo progetto",
    heading: "Costruiamo insieme?",
    talkToUs: "Parliamone",
    tagline: "Consulenza BIM, modellazione e sviluppo tecnico per Revit e Tekla.",
    nav: {
      label: "Navigazione",
      home: "Home",
      about: "Chi siamo",
      services: "Servizi",
      caseStudies: "Casi studio",
      contact: "Contatti",
    },
    bimtools: { label: "BIMtools", allAddins: "Vedi tutti gli addin", privacy: "Informativa sulla privacy" },
    followUs: "Seguici",
    copyright: "© 2026 Frata Ingenieros. Tutti i diritti riservati.",
    madeIn: "Fatto in Perù per il mondo AEC.",
  },
  pt: {
    nextProject: "Próximo projeto",
    heading: "Vamos construir juntos?",
    talkToUs: "Fale conosco",
    tagline: "Consultoria BIM, modelagem e desenvolvimento técnico para Revit e Tekla.",
    nav: {
      label: "Navegação",
      home: "Início",
      about: "Sobre nós",
      services: "Serviços",
      caseStudies: "Casos de sucesso",
      contact: "Contato",
    },
    bimtools: { label: "BIMtools", allAddins: "Ver todos os addins", privacy: "Política de privacidade" },
    followUs: "Siga-nos",
    copyright: "© 2026 Frata Ingenieros. Todos os direitos reservados.",
    madeIn: "Feito no Peru para o mundo AEC.",
  },
  ru: {
    nextProject: "Следующий проект",
    heading: "Строим вместе?",
    talkToUs: "Связаться с нами",
    tagline: "BIM-консалтинг, моделирование и техническая разработка для Revit и Tekla.",
    nav: {
      label: "Навигация",
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      caseStudies: "Кейсы",
      contact: "Контакты",
    },
    bimtools: { label: "BIMtools", allAddins: "Все аддины", privacy: "Политика конфиденциальности" },
    followUs: "Мы в соцсетях",
    copyright: "© 2026 Frata Ingenieros. Все права защищены.",
    madeIn: "Сделано в Перу для мира AEC.",
  },
  zh: {
    nextProject: "下一个项目",
    heading: "一起来建造吧？",
    talkToUs: "联系我们",
    tagline: "为 Revit 和 Tekla 提供 BIM 咨询、建模与技术开发服务。",
    nav: {
      label: "导航",
      home: "首页",
      about: "关于我们",
      services: "服务",
      caseStudies: "案例",
      contact: "联系方式",
    },
    bimtools: { label: "BIMtools", allAddins: "查看所有插件", privacy: "隐私政策" },
    followUs: "关注我们",
    copyright: "© 2026 Frata Ingenieros. 保留所有权利。",
    madeIn: "秘鲁制造，服务全球 AEC 行业。",
  },
};
