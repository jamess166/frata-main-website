import type { Locale } from "@/lib/locale";

export interface BimtoolsManualDetailContent {
  notFoundTitle: string;
  metaSuffix: string;
  backToBimtools: string;
  premiumLabel: string;
  freeLabel: string;
  trialSuffix: (days: number) => string;
  pricingLine: {
    monthly: string;
    quarterly: string;
    yearly: string;
    connector1: string;
    connector2: string;
    introNote: string;
  };
  buySubscriptionCta: string;
  downloadTrialCta: string;
  moreToolsLabel: string;
  galleryHeading: string;
  videoHeading: string;
  watchChannelCta: string;
  viewBimtoolsCta: string;
  downloadTrialShortCta: string;
  privacyLabel: string;
}

export const bimtoolsManualDetailContent: Record<Locale, BimtoolsManualDetailContent> = {
  es: {
    notFoundTitle: "Manual no encontrado",
    metaSuffix: "Manual BIMtools",
    backToBimtools: "Volver a BIMtools",
    premiumLabel: "Premium",
    freeLabel: "Gratis",
    trialSuffix: (days) => ` · Prueba de ${days} días`,
    pricingLine: {
      monthly: "USD 30/mes",
      quarterly: "USD 75/trimestre",
      yearly: "USD 250/año",
      connector1: "Accede a este addin y a todos los addins premium por",
      connector2: "o",
      introNote: "(precio de introducción 2026)",
    },
    buySubscriptionCta: "Comprar suscripción premium",
    downloadTrialCta: "Descargar instalador de prueba",
    moreToolsLabel: "Más herramientas de esta suite",
    galleryHeading: "Galería",
    videoHeading: "Video",
    watchChannelCta: "Ver canal",
    viewBimtoolsCta: "Ver BIMtools",
    downloadTrialShortCta: "Descargar prueba",
    privacyLabel: "Política de privacidad de BIMtools",
  },
  en: {
    notFoundTitle: "Manual not found",
    metaSuffix: "BIMtools Manual",
    backToBimtools: "Back to BIMtools",
    premiumLabel: "Premium",
    freeLabel: "Free",
    trialSuffix: (days) => ` · ${days}-day trial`,
    pricingLine: {
      monthly: "USD 30/month",
      quarterly: "USD 75/quarter",
      yearly: "USD 250/year",
      connector1: "Get this add-in and every premium add-in for",
      connector2: "or",
      introNote: "(2026 introductory price)",
    },
    buySubscriptionCta: "Buy premium subscription",
    downloadTrialCta: "Download trial installer",
    moreToolsLabel: "More tools in this suite",
    galleryHeading: "Gallery",
    videoHeading: "Video",
    watchChannelCta: "View channel",
    viewBimtoolsCta: "View BIMtools",
    downloadTrialShortCta: "Download trial",
    privacyLabel: "BIMtools privacy policy",
  },
  de: {
    notFoundTitle: "Handbuch nicht gefunden",
    metaSuffix: "BIMtools-Handbuch",
    backToBimtools: "Zurück zu BIMtools",
    premiumLabel: "Premium",
    freeLabel: "Kostenlos",
    trialSuffix: (days) => ` · ${days}-Tage-Testversion`,
    pricingLine: {
      monthly: "USD 30/Monat",
      quarterly: "USD 75/Quartal",
      yearly: "USD 250/Jahr",
      connector1: "Erhalten Sie Zugang zu diesem Addin und allen Premium-Addins für",
      connector2: "oder",
      introNote: "(Einführungspreis 2026)",
    },
    buySubscriptionCta: "Premium-Abo kaufen",
    downloadTrialCta: "Test-Installer herunterladen",
    moreToolsLabel: "Weitere Werkzeuge dieser Suite",
    galleryHeading: "Galerie",
    videoHeading: "Video",
    watchChannelCta: "Kanal ansehen",
    viewBimtoolsCta: "BIMtools ansehen",
    downloadTrialShortCta: "Testversion herunterladen",
    privacyLabel: "Datenschutzerklärung von BIMtools",
  },
  fr: {
    notFoundTitle: "Manuel introuvable",
    metaSuffix: "Manuel BIMtools",
    backToBimtools: "Retour à BIMtools",
    premiumLabel: "Premium",
    freeLabel: "Gratuit",
    trialSuffix: (days) => ` · Essai de ${days} jours`,
    pricingLine: {
      monthly: "30 USD/mois",
      quarterly: "75 USD/trimestre",
      yearly: "250 USD/an",
      connector1: "Accédez à cet addin et à tous les addins premium pour",
      connector2: "ou",
      introNote: "(prix de lancement 2026)",
    },
    buySubscriptionCta: "Acheter l'abonnement premium",
    downloadTrialCta: "Télécharger l'installateur d'essai",
    moreToolsLabel: "Autres outils de cette suite",
    galleryHeading: "Galerie",
    videoHeading: "Vidéo",
    watchChannelCta: "Voir la chaîne",
    viewBimtoolsCta: "Voir BIMtools",
    downloadTrialShortCta: "Télécharger l'essai",
    privacyLabel: "Politique de confidentialité de BIMtools",
  },
  it: {
    notFoundTitle: "Manuale non trovato",
    metaSuffix: "Manuale BIMtools",
    backToBimtools: "Torna a BIMtools",
    premiumLabel: "Premium",
    freeLabel: "Gratis",
    trialSuffix: (days) => ` · Prova di ${days} giorni`,
    pricingLine: {
      monthly: "USD 30/mese",
      quarterly: "USD 75/trimestre",
      yearly: "USD 250/anno",
      connector1: "Accedi a questo addin e a tutti gli addin premium per",
      connector2: "o",
      introNote: "(prezzo di lancio 2026)",
    },
    buySubscriptionCta: "Acquista abbonamento premium",
    downloadTrialCta: "Scarica l'installer di prova",
    moreToolsLabel: "Altri strumenti di questa suite",
    galleryHeading: "Galleria",
    videoHeading: "Video",
    watchChannelCta: "Guarda il canale",
    viewBimtoolsCta: "Vedi BIMtools",
    downloadTrialShortCta: "Scarica la prova",
    privacyLabel: "Informativa sulla privacy di BIMtools",
  },
  pt: {
    notFoundTitle: "Manual não encontrado",
    metaSuffix: "Manual BIMtools",
    backToBimtools: "Voltar ao BIMtools",
    premiumLabel: "Premium",
    freeLabel: "Gratuito",
    trialSuffix: (days) => ` · Teste de ${days} dias`,
    pricingLine: {
      monthly: "USD 30/mês",
      quarterly: "USD 75/trimestre",
      yearly: "USD 250/ano",
      connector1: "Acesse este addin e todos os addins premium por",
      connector2: "ou",
      introNote: "(preço de lançamento 2026)",
    },
    buySubscriptionCta: "Comprar assinatura premium",
    downloadTrialCta: "Baixar instalador de teste",
    moreToolsLabel: "Mais ferramentas desta suíte",
    galleryHeading: "Galeria",
    videoHeading: "Vídeo",
    watchChannelCta: "Ver canal",
    viewBimtoolsCta: "Ver BIMtools",
    downloadTrialShortCta: "Baixar versão de teste",
    privacyLabel: "Política de privacidade do BIMtools",
  },
  ru: {
    notFoundTitle: "Руководство не найдено",
    metaSuffix: "Руководство BIMtools",
    backToBimtools: "Назад к BIMtools",
    premiumLabel: "Премиум",
    freeLabel: "Бесплатно",
    trialSuffix: (days) => ` · Пробный период ${days} дней`,
    pricingLine: {
      monthly: "30 USD/мес",
      quarterly: "75 USD/квартал",
      yearly: "250 USD/год",
      connector1: "Получите доступ к этому и всем премиум-аддинам за",
      connector2: "или",
      introNote: "(вводная цена 2026)",
    },
    buySubscriptionCta: "Купить премиум-подписку",
    downloadTrialCta: "Скачать пробный установщик",
    moreToolsLabel: "Другие инструменты этого набора",
    galleryHeading: "Галерея",
    videoHeading: "Видео",
    watchChannelCta: "Смотреть канал",
    viewBimtoolsCta: "Смотреть BIMtools",
    downloadTrialShortCta: "Скачать пробную версию",
    privacyLabel: "Политика конфиденциальности BIMtools",
  },
  zh: {
    notFoundTitle: "未找到该手册",
    metaSuffix: "BIMtools 手册",
    backToBimtools: "返回 BIMtools",
    premiumLabel: "高级版",
    freeLabel: "免费",
    trialSuffix: (days) => ` · ${days} 天试用`,
    pricingLine: {
      monthly: "每月 30 美元",
      quarterly: "每季度 75 美元",
      yearly: "每年 250 美元",
      connector1: "订阅后即可使用此插件及全部高级插件，价格为",
      connector2: "或",
      introNote: "（2026年优惠价）",
    },
    buySubscriptionCta: "购买高级订阅",
    downloadTrialCta: "下载试用安装程序",
    moreToolsLabel: "该套件的更多工具",
    galleryHeading: "图库",
    videoHeading: "视频",
    watchChannelCta: "查看频道",
    viewBimtoolsCta: "查看 BIMtools",
    downloadTrialShortCta: "下载试用版",
    privacyLabel: "BIMtools 隐私政策",
  },
};
