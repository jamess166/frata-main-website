import type { Locale } from "@/lib/locale";

export interface BimtoolsManualIndexContent {
  meta: { title: string; description: string };
  eyebrow: string;
  heading: string;
  intro: string;
  manualsSuffix: string;
  premiumLabel: string;
  freeLabel: string;
}

export const bimtoolsManualIndexContent: Record<Locale, BimtoolsManualIndexContent> = {
  es: {
    meta: {
      title: "Manuales BIMtools | Documentacion de addins Revit",
      description:
        "Manuales de uso para los addins BIMtools de Frata en Revit. Documentacion real de exportacion, parametros, navegacion y herramientas estructurales.",
    },
    eyebrow: "Manuales BIMtools",
    heading: "Documentación por addin.",
    intro:
      "Consulta cada herramienta por separado para revisar funciones, alcance y procedimiento de uso a partir de la documentación real de los addins.",
    manualsSuffix: "manuales",
    premiumLabel: "Premium",
    freeLabel: "Gratis",
  },
  en: {
    meta: {
      title: "BIMtools Manuals | Revit Add-in Documentation",
      description:
        "User manuals for Frata BIMtools add-ins in Revit. Explore documentation for exports, parameters, navigation and structural tools.",
    },
    eyebrow: "BIMtools manuals",
    heading: "Documentation per add-in.",
    intro:
      "Review each tool separately: features, scope and usage procedure, taken from the add-ins' real documentation.",
    manualsSuffix: "manuals",
    premiumLabel: "Premium",
    freeLabel: "Free",
  },
  de: {
    meta: {
      title: "BIMtools-Handbücher | Dokumentation der Revit-Addins",
      description:
        "Benutzerhandbücher für die Frata-BIMtools-Addins in Revit. Dokumentation zu Export, Parametern, Navigation und Tragwerkswerkzeugen.",
    },
    eyebrow: "BIMtools-Handbücher",
    heading: "Dokumentation pro Addin.",
    intro:
      "Sehen Sie sich jedes Werkzeug einzeln an, um Funktionen, Umfang und Verwendung anhand der tatsächlichen Addin-Dokumentation zu prüfen.",
    manualsSuffix: "Handbücher",
    premiumLabel: "Premium",
    freeLabel: "Kostenlos",
  },
  fr: {
    meta: {
      title: "Manuels BIMtools | Documentation des addins Revit",
      description:
        "Manuels d'utilisation des addins BIMtools de Frata pour Revit. Documentation sur l'export, les paramètres, la navigation et les outils structurels.",
    },
    eyebrow: "Manuels BIMtools",
    heading: "Documentation par addin.",
    intro:
      "Consultez chaque outil séparément pour ses fonctionnalités, son périmètre et sa procédure d'utilisation, d'après la documentation réelle des addins.",
    manualsSuffix: "manuels",
    premiumLabel: "Premium",
    freeLabel: "Gratuit",
  },
  it: {
    meta: {
      title: "Manuali BIMtools | Documentazione degli addin Revit",
      description:
        "Manuali d'uso per gli addin BIMtools di Frata in Revit. Documentazione su esportazione, parametri, navigazione e strumenti strutturali.",
    },
    eyebrow: "Manuali BIMtools",
    heading: "Documentazione per addin.",
    intro:
      "Consulta ogni strumento separatamente per funzionalità, ambito e procedura d'uso, tratti dalla documentazione reale degli addin.",
    manualsSuffix: "manuali",
    premiumLabel: "Premium",
    freeLabel: "Gratis",
  },
  pt: {
    meta: {
      title: "Manuais BIMtools | Documentação dos addins Revit",
      description:
        "Manuais de uso para os addins BIMtools da Frata no Revit. Documentação sobre exportação, parâmetros, navegação e ferramentas estruturais.",
    },
    eyebrow: "Manuais BIMtools",
    heading: "Documentação por addin.",
    intro:
      "Consulte cada ferramenta separadamente para revisar funções, escopo e procedimento de uso a partir da documentação real dos addins.",
    manualsSuffix: "manuais",
    premiumLabel: "Premium",
    freeLabel: "Gratuito",
  },
  ru: {
    meta: {
      title: "Руководства BIMtools | Документация аддинов Revit",
      description:
        "Руководства пользователя по аддинам BIMtools от Frata для Revit. Документация по экспорту, параметрам, навигации и инструментам для конструкций.",
    },
    eyebrow: "Руководства BIMtools",
    heading: "Документация по каждому аддину.",
    intro:
      "Изучите каждый инструмент отдельно: функции, охват и порядок использования — на основе реальной документации аддинов.",
    manualsSuffix: "руководств",
    premiumLabel: "Премиум",
    freeLabel: "Бесплатно",
  },
  zh: {
    meta: {
      title: "BIMtools 手册 | Revit 插件文档",
      description: "Frata BIMtools Revit 插件的使用手册，涵盖导出、参数、导航与结构工具的实际文档说明。",
    },
    eyebrow: "BIMtools 手册",
    heading: "按插件分类的文档。",
    intro: "根据插件的真实文档，逐个查看每款工具的功能、适用范围与使用步骤。",
    manualsSuffix: "本手册",
    premiumLabel: "高级版",
    freeLabel: "免费",
  },
};
