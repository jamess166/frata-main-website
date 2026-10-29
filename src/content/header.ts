import type { Locale } from "@/lib/locale";

export interface HeaderContent {
  home: string;
  about: string;
  bimtools: string;
  casos: string;
  blog: string;
  contact: string;
  services: string;
  manuals: string;
  allServices: string;
  openMenuAria: string;
  closeMenuAria: string;
  themeToLight: string;
  themeToDark: string;
}

export const headerContent: Record<Locale, HeaderContent> = {
  es: {
    home: "Inicio",
    about: "Nosotros",
    bimtools: "BIMtools",
    casos: "Casos",
    blog: "Blog",
    contact: "Contacto",
    services: "Servicios",
    manuals: "Manuales",
    allServices: "Ver todos",
    openMenuAria: "Abrir menú",
    closeMenuAria: "Cerrar menú",
    themeToLight: "Cambiar a modo claro",
    themeToDark: "Cambiar a modo oscuro",
  },
  en: {
    home: "Home",
    about: "About",
    bimtools: "BIMtools",
    casos: "Case Studies",
    blog: "Blog",
    contact: "Contact",
    services: "Services",
    manuals: "Manuals",
    allServices: "All services",
    openMenuAria: "Open menu",
    closeMenuAria: "Close menu",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    bimtools: "BIMtools",
    casos: "Referenzen",
    blog: "Blog",
    contact: "Kontakt",
    services: "Leistungen",
    manuals: "Handbücher",
    allServices: "Alle Leistungen ansehen",
    openMenuAria: "Menü öffnen",
    closeMenuAria: "Menü schließen",
    themeToLight: "Zum hellen Modus wechseln",
    themeToDark: "Zum dunklen Modus wechseln",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    bimtools: "BIMtools",
    casos: "Études de cas",
    blog: "Blog",
    contact: "Contact",
    services: "Services",
    manuals: "Manuels",
    allServices: "Voir tous les services",
    openMenuAria: "Ouvrir le menu",
    closeMenuAria: "Fermer le menu",
    themeToLight: "Passer en mode clair",
    themeToDark: "Passer en mode sombre",
  },
  it: {
    home: "Home",
    about: "Chi siamo",
    bimtools: "BIMtools",
    casos: "Casi studio",
    blog: "Blog",
    contact: "Contatti",
    services: "Servizi",
    manuals: "Manuali",
    allServices: "Vedi tutti i servizi",
    openMenuAria: "Apri il menu",
    closeMenuAria: "Chiudi il menu",
    themeToLight: "Passa alla modalità chiara",
    themeToDark: "Passa alla modalità scura",
  },
  pt: {
    home: "Início",
    about: "Sobre nós",
    bimtools: "BIMtools",
    casos: "Casos de sucesso",
    blog: "Blog",
    contact: "Contato",
    services: "Serviços",
    manuals: "Manuais",
    allServices: "Ver todos os serviços",
    openMenuAria: "Abrir menu",
    closeMenuAria: "Fechar menu",
    themeToLight: "Mudar para o modo claro",
    themeToDark: "Mudar para o modo escuro",
  },
  ru: {
    home: "Главная",
    about: "О нас",
    bimtools: "BIMtools",
    casos: "Кейсы",
    blog: "Блог",
    contact: "Контакты",
    services: "Услуги",
    manuals: "Руководства",
    allServices: "Смотреть все услуги",
    openMenuAria: "Открыть меню",
    closeMenuAria: "Закрыть меню",
    themeToLight: "Включить светлую тему",
    themeToDark: "Включить тёмную тему",
  },
  zh: {
    home: "首页",
    about: "关于我们",
    bimtools: "BIMtools",
    casos: "案例",
    blog: "博客",
    contact: "联系方式",
    services: "服务",
    manuals: "手册",
    allServices: "查看全部服务",
    openMenuAria: "打开菜单",
    closeMenuAria: "关闭菜单",
    themeToLight: "切换到浅色模式",
    themeToDark: "切换到深色模式",
  },
};
