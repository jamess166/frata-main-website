import type { Locale } from "@/lib/locale";

export interface CasosPageContent {
  eyebrow: string;
  heading: { line1: string; line2: string };
  intro: string;
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    ogLocale: string;
  };
}

export const casosContent: Record<Locale, CasosPageContent> = {
  es: {
    eyebrow: "Casos de éxito",
    heading: { line1: "Proyectos reales.", line2: "Resultados concretos." },
    intro:
      "Consultoría BIM, modelado y desarrollo de addins en infraestructura, edificaciones e interoperabilidad de plataformas.",
    meta: {
      title: "Casos de Éxito BIM",
      description:
        "Proyectos reales de consultoría BIM, modelado y desarrollo de addins para Revit realizados por Frata Ingenieros en Perú y LATAM.",
      ogTitle: "Casos de Éxito BIM | Frata Ingenieros",
      ogDescription:
        "Proyectos reales de consultoría BIM, modelado y desarrollo de addins para Revit realizados por Frata Ingenieros.",
      ogImageAlt: "Casos de Éxito BIM - Frata Ingenieros",
      ogLocale: "es_PE",
    },
  },
  en: {
    eyebrow: "Case studies",
    heading: { line1: "Real projects.", line2: "Concrete results." },
    intro:
      "BIM consulting, modeling and addin development across infrastructure, buildings and platform interoperability.",
    meta: {
      title: "BIM Case Studies",
      description:
        "Real BIM consulting, modeling and Revit addin development projects delivered by Frata Ingenieros in Peru and LATAM.",
      ogTitle: "BIM Case Studies | Frata Ingenieros",
      ogDescription:
        "Real BIM consulting, modeling and Revit addin development projects delivered by Frata Ingenieros.",
      ogImageAlt: "BIM Case Studies - Frata Ingenieros",
      ogLocale: "en_US",
    },
  },
  de: {
    eyebrow: "Erfolgsgeschichten",
    heading: { line1: "Reale Projekte.", line2: "Konkrete Ergebnisse." },
    intro:
      "BIM-Beratung, Modellierung und Addin-Entwicklung für Infrastruktur, Gebäude und die Interoperabilität von Plattformen.",
    meta: {
      title: "BIM-Erfolgsgeschichten",
      description:
        "Reale Projekte in BIM-Beratung, Modellierung und Entwicklung von Revit-Addins, umgesetzt von Frata Ingenieros in Peru und Lateinamerika.",
      ogTitle: "BIM-Erfolgsgeschichten | Frata Ingenieros",
      ogDescription:
        "Reale Projekte in BIM-Beratung, Modellierung und Entwicklung von Revit-Addins, umgesetzt von Frata Ingenieros.",
      ogImageAlt: "BIM-Erfolgsgeschichten - Frata Ingenieros",
      ogLocale: "de_DE",
    },
  },
  fr: {
    eyebrow: "Études de cas",
    heading: { line1: "Des projets réels.", line2: "Des résultats concrets." },
    intro:
      "Conseil BIM, modélisation et développement d'addins pour les infrastructures, les bâtiments et l'interopérabilité des plateformes.",
    meta: {
      title: "Études de cas BIM",
      description:
        "Projets réels de conseil BIM, de modélisation et de développement d'addins Revit réalisés par Frata Ingenieros au Pérou et en Amérique latine.",
      ogTitle: "Études de cas BIM | Frata Ingenieros",
      ogDescription:
        "Projets réels de conseil BIM, de modélisation et de développement d'addins Revit réalisés par Frata Ingenieros.",
      ogImageAlt: "Études de cas BIM - Frata Ingenieros",
      ogLocale: "fr_FR",
    },
  },
  it: {
    eyebrow: "Casi di successo",
    heading: { line1: "Progetti reali.", line2: "Risultati concreti." },
    intro:
      "Consulenza BIM, modellazione e sviluppo di addin per infrastrutture, edifici e interoperabilità tra piattaforme.",
    meta: {
      title: "Casi di successo BIM",
      description:
        "Progetti reali di consulenza BIM, modellazione e sviluppo di addin Revit realizzati da Frata Ingenieros in Perù e America Latina.",
      ogTitle: "Casi di successo BIM | Frata Ingenieros",
      ogDescription:
        "Progetti reali di consulenza BIM, modellazione e sviluppo di addin Revit realizzati da Frata Ingenieros.",
      ogImageAlt: "Casi di successo BIM - Frata Ingenieros",
      ogLocale: "it_IT",
    },
  },
  pt: {
    eyebrow: "Casos de sucesso",
    heading: { line1: "Projetos reais.", line2: "Resultados concretos." },
    intro:
      "Consultoria BIM, modelagem e desenvolvimento de addins em infraestrutura, edificações e interoperabilidade de plataformas.",
    meta: {
      title: "Casos de Sucesso BIM",
      description:
        "Projetos reais de consultoria BIM, modelagem e desenvolvimento de addins para Revit realizados pela Frata Ingenieros no Peru e na América Latina.",
      ogTitle: "Casos de Sucesso BIM | Frata Ingenieros",
      ogDescription:
        "Projetos reais de consultoria BIM, modelagem e desenvolvimento de addins para Revit realizados pela Frata Ingenieros.",
      ogImageAlt: "Casos de Sucesso BIM - Frata Ingenieros",
      ogLocale: "pt_BR",
    },
  },
  ru: {
    eyebrow: "Успешные кейсы",
    heading: { line1: "Реальные проекты.", line2: "Конкретные результаты." },
    intro:
      "BIM-консалтинг, моделирование и разработка аддинов для инфраструктуры, зданий и совместимости платформ.",
    meta: {
      title: "Успешные BIM-кейсы",
      description:
        "Реальные проекты BIM-консалтинга, моделирования и разработки аддинов для Revit, реализованные Frata Ingenieros в Перу и Латинской Америке.",
      ogTitle: "Успешные BIM-кейсы | Frata Ingenieros",
      ogDescription:
        "Реальные проекты BIM-консалтинга, моделирования и разработки аддинов для Revit, реализованные Frata Ingenieros.",
      ogImageAlt: "Успешные BIM-кейсы - Frata Ingenieros",
      ogLocale: "ru_RU",
    },
  },
  zh: {
    eyebrow: "成功案例",
    heading: { line1: "真实项目。", line2: "切实成果。" },
    intro: "在基础设施、建筑与平台互操作性领域提供 BIM 咨询、建模与插件开发。",
    meta: {
      title: "BIM 成功案例",
      description: "Frata Ingenieros 在秘鲁及拉丁美洲完成的真实 BIM 咨询、建模与 Revit 插件开发项目。",
      ogTitle: "BIM 成功案例 | Frata Ingenieros",
      ogDescription: "Frata Ingenieros 完成的真实 BIM 咨询、建模与 Revit 插件开发项目。",
      ogImageAlt: "BIM 成功案例 - Frata Ingenieros",
      ogLocale: "zh_CN",
    },
  },
};
