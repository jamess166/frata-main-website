import type { Locale } from "@/lib/locale";

export interface HeaderContent {
  home: string;
  about: string;
  bimtools: string;
  casos: string;
  contact: string;
  services: string;
  manuals: string;
  allServices: string;
  openMenuAria: string;
  closeMenuAria: string;
}

export const headerContent: Record<Locale, HeaderContent> = {
  es: {
    home: "Inicio",
    about: "Nosotros",
    bimtools: "BIMtools",
    casos: "Casos",
    contact: "Contacto",
    services: "Servicios",
    manuals: "Manuales",
    allServices: "Ver todos",
    openMenuAria: "Abrir menú",
    closeMenuAria: "Cerrar menú",
  },
  en: {
    home: "Home",
    about: "About",
    bimtools: "BIMtools",
    casos: "Case Studies",
    contact: "Contact",
    services: "Services",
    manuals: "Manuals",
    allServices: "All services",
    openMenuAria: "Open menu",
    closeMenuAria: "Close menu",
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    bimtools: "BIMtools",
    casos: "Referenzen",
    contact: "Kontakt",
    services: "Leistungen",
    manuals: "Handbücher",
    allServices: "Alle Leistungen ansehen",
    openMenuAria: "Menü öffnen",
    closeMenuAria: "Menü schließen",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    bimtools: "BIMtools",
    casos: "Études de cas",
    contact: "Contact",
    services: "Services",
    manuals: "Manuels",
    allServices: "Voir tous les services",
    openMenuAria: "Ouvrir le menu",
    closeMenuAria: "Fermer le menu",
  },
  it: {
    home: "Home",
    about: "Chi siamo",
    bimtools: "BIMtools",
    casos: "Casi studio",
    contact: "Contatti",
    services: "Servizi",
    manuals: "Manuali",
    allServices: "Vedi tutti i servizi",
    openMenuAria: "Apri il menu",
    closeMenuAria: "Chiudi il menu",
  },
  pt: {
    home: "Início",
    about: "Sobre nós",
    bimtools: "BIMtools",
    casos: "Casos de sucesso",
    contact: "Contato",
    services: "Serviços",
    manuals: "Manuais",
    allServices: "Ver todos os serviços",
    openMenuAria: "Abrir menu",
    closeMenuAria: "Fechar menu",
  },
  ru: {
    home: "Главная",
    about: "О нас",
    bimtools: "BIMtools",
    casos: "Кейсы",
    contact: "Контакты",
    services: "Услуги",
    manuals: "Руководства",
    allServices: "Смотреть все услуги",
    openMenuAria: "Открыть меню",
    closeMenuAria: "Закрыть меню",
  },
  zh: {
    home: "首页",
    about: "关于我们",
    bimtools: "BIMtools",
    casos: "案例",
    contact: "联系方式",
    services: "服务",
    manuals: "手册",
    allServices: "查看全部服务",
    openMenuAria: "打开菜单",
    closeMenuAria: "关闭菜单",
  },
};
