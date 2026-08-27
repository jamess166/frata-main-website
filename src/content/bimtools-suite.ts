import type { Locale } from "@/lib/locale";

export interface BimtoolsSuitePageContent {
  notFoundTitle: string;
  backToBimtools: string;
  eyebrow: string;
  subscribeCta: string;
  downloadCta: string;
  premiumLabel: string;
  freeLabel: string;
  viewManualCta: string;
}

export const bimtoolsSuiteContent: Record<Locale, BimtoolsSuitePageContent> = {
  es: {
    notFoundTitle: "Suite no encontrada",
    backToBimtools: "Volver a BIMtools",
    eyebrow: "Suite BIMtools",
    subscribeCta: "Suscribirse",
    downloadCta: "Descargar prueba",
    premiumLabel: "Premium",
    freeLabel: "Gratis",
    viewManualCta: "Ver manual",
  },
  en: {
    notFoundTitle: "Suite not found",
    backToBimtools: "Back to BIMtools",
    eyebrow: "BIMtools Suite",
    subscribeCta: "Subscribe",
    downloadCta: "Download trial",
    premiumLabel: "Premium",
    freeLabel: "Free",
    viewManualCta: "View manual",
  },
  de: {
    notFoundTitle: "Suite nicht gefunden",
    backToBimtools: "Zurück zu BIMtools",
    eyebrow: "BIMtools-Suite",
    subscribeCta: "Abonnieren",
    downloadCta: "Testversion herunterladen",
    premiumLabel: "Premium",
    freeLabel: "Kostenlos",
    viewManualCta: "Handbuch ansehen",
  },
  fr: {
    notFoundTitle: "Suite introuvable",
    backToBimtools: "Retour à BIMtools",
    eyebrow: "Suite BIMtools",
    subscribeCta: "S'abonner",
    downloadCta: "Télécharger l'essai",
    premiumLabel: "Premium",
    freeLabel: "Gratuit",
    viewManualCta: "Voir le manuel",
  },
  it: {
    notFoundTitle: "Suite non trovata",
    backToBimtools: "Torna a BIMtools",
    eyebrow: "Suite BIMtools",
    subscribeCta: "Abbonati",
    downloadCta: "Scarica la prova",
    premiumLabel: "Premium",
    freeLabel: "Gratis",
    viewManualCta: "Vedi il manuale",
  },
  pt: {
    notFoundTitle: "Suíte não encontrada",
    backToBimtools: "Voltar ao BIMtools",
    eyebrow: "Suíte BIMtools",
    subscribeCta: "Assinar",
    downloadCta: "Baixar versão de teste",
    premiumLabel: "Premium",
    freeLabel: "Gratuito",
    viewManualCta: "Ver manual",
  },
  ru: {
    notFoundTitle: "Набор не найден",
    backToBimtools: "Назад к BIMtools",
    eyebrow: "Набор BIMtools",
    subscribeCta: "Оформить подписку",
    downloadCta: "Скачать пробную версию",
    premiumLabel: "Премиум",
    freeLabel: "Бесплатно",
    viewManualCta: "Смотреть руководство",
  },
  zh: {
    notFoundTitle: "未找到该套件",
    backToBimtools: "返回 BIMtools",
    eyebrow: "BIMtools 套件",
    subscribeCta: "订阅",
    downloadCta: "下载试用版",
    premiumLabel: "高级版",
    freeLabel: "免费",
    viewManualCta: "查看手册",
  },
};
