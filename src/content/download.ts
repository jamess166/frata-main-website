import type { Locale } from "@/lib/locale";

export interface DownloadPageContent {
  metaTitle: string;
  searching: string;
  errorFallback: string;
  badge: string;
  heading: string;
  latestInstallerTitle: string;
  latestInstallerBody: string;
  autoRedirectTitle: string;
  autoRedirectBody: string;
  openManuallyCta: string;
}

export const downloadContent: Record<Locale, DownloadPageContent> = {
  es: {
    metaTitle: "Descarga BIMtools",
    searching: "Buscando la ultima version disponible del instalador...",
    errorFallback: "No pudimos resolver automaticamente el ultimo instalador. Redirigiendo a la ultima release...",
    badge: "Descarga en proceso",
    heading: "Preparando tu instalador BIMtools",
    latestInstallerTitle: "Ultimo instalador",
    latestInstallerBody:
      "Estamos ubicando la release mas reciente de BIMtools para que no tengas que actualizar enlaces manualmente.",
    autoRedirectTitle: "Redireccion automatica",
    autoRedirectBody: "Si no se puede resolver el instalador directo, abriremos la pagina de la ultima release en GitHub.",
    openManuallyCta: "Abrir ultima release manualmente",
  },
  en: {
    metaTitle: "BIMtools Download",
    searching: "Searching for the latest installer release...",
    errorFallback: "We could not resolve the latest installer automatically. Redirecting to the latest release page...",
    badge: "Download in progress",
    heading: "Preparing your BIMtools installer",
    latestInstallerTitle: "Latest installer",
    latestInstallerBody:
      "We are locating the most recent BIMtools release so you do not need to update links manually.",
    autoRedirectTitle: "Automatic redirect",
    autoRedirectBody: "If the direct installer cannot be resolved, we will open the latest GitHub release page.",
    openManuallyCta: "Open latest release manually",
  },
  de: {
    metaTitle: "BIMtools herunterladen",
    searching: "Suche nach der neuesten Installer-Version...",
    errorFallback: "Der neueste Installer konnte nicht automatisch ermittelt werden. Weiterleitung zur neuesten Release-Seite...",
    badge: "Download läuft",
    heading: "Ihr BIMtools-Installer wird vorbereitet",
    latestInstallerTitle: "Neuester Installer",
    latestInstallerBody: "Wir suchen die aktuellste BIMtools-Version, damit Sie Links nicht manuell aktualisieren müssen.",
    autoRedirectTitle: "Automatische Weiterleitung",
    autoRedirectBody: "Falls der direkte Installer nicht gefunden werden kann, öffnen wir die neueste GitHub-Release-Seite.",
    openManuallyCta: "Neueste Version manuell öffnen",
  },
  fr: {
    metaTitle: "Télécharger BIMtools",
    searching: "Recherche de la dernière version de l'installateur...",
    errorFallback: "Nous n'avons pas pu identifier automatiquement le dernier installateur. Redirection vers la page de la dernière version...",
    badge: "Téléchargement en cours",
    heading: "Préparation de votre installateur BIMtools",
    latestInstallerTitle: "Dernier installateur",
    latestInstallerBody:
      "Nous recherchons la version la plus récente de BIMtools afin que vous n'ayez pas à mettre à jour les liens manuellement.",
    autoRedirectTitle: "Redirection automatique",
    autoRedirectBody: "Si l'installateur direct ne peut pas être identifié, nous ouvrirons la page de la dernière version sur GitHub.",
    openManuallyCta: "Ouvrir la dernière version manuellement",
  },
  it: {
    metaTitle: "Scarica BIMtools",
    searching: "Ricerca dell'ultima versione dell'installer in corso...",
    errorFallback: "Non è stato possibile individuare automaticamente l'ultimo installer. Reindirizzamento alla pagina dell'ultima release...",
    badge: "Download in corso",
    heading: "Preparazione dell'installer BIMtools",
    latestInstallerTitle: "Ultimo installer",
    latestInstallerBody: "Stiamo individuando la release più recente di BIMtools per evitarti di aggiornare i link manualmente.",
    autoRedirectTitle: "Reindirizzamento automatico",
    autoRedirectBody: "Se l'installer diretto non può essere individuato, apriremo la pagina dell'ultima release su GitHub.",
    openManuallyCta: "Apri manualmente l'ultima release",
  },
  pt: {
    metaTitle: "Baixar BIMtools",
    searching: "Procurando a versão mais recente do instalador...",
    errorFallback: "Não conseguimos identificar automaticamente o instalador mais recente. Redirecionando para a página da última versão...",
    badge: "Download em andamento",
    heading: "Preparando seu instalador do BIMtools",
    latestInstallerTitle: "Instalador mais recente",
    latestInstallerBody:
      "Estamos localizando a versão mais recente do BIMtools para que você não precise atualizar links manualmente.",
    autoRedirectTitle: "Redirecionamento automático",
    autoRedirectBody: "Se o instalador direto não puder ser identificado, abriremos a página da versão mais recente no GitHub.",
    openManuallyCta: "Abrir a versão mais recente manualmente",
  },
  ru: {
    metaTitle: "Скачать BIMtools",
    searching: "Поиск последней версии установщика...",
    errorFallback: "Не удалось автоматически определить последний установщик. Перенаправление на страницу последнего релиза...",
    badge: "Загрузка выполняется",
    heading: "Подготовка установщика BIMtools",
    latestInstallerTitle: "Последний установщик",
    latestInstallerBody: "Мы находим самую свежую версию BIMtools, чтобы вам не пришлось обновлять ссылки вручную.",
    autoRedirectTitle: "Автоматическое перенаправление",
    autoRedirectBody: "Если прямой установщик не удастся определить, мы откроем страницу последнего релиза на GitHub.",
    openManuallyCta: "Открыть последний релиз вручную",
  },
  zh: {
    metaTitle: "下载 BIMtools",
    searching: "正在查找最新版安装程序...",
    errorFallback: "未能自动获取最新安装程序，正在跳转到最新发布页面...",
    badge: "正在下载",
    heading: "正在准备您的 BIMtools 安装程序",
    latestInstallerTitle: "最新安装程序",
    latestInstallerBody: "我们正在查找最新的 BIMtools 版本，您无需手动更新链接。",
    autoRedirectTitle: "自动跳转",
    autoRedirectBody: "如果无法直接获取安装程序，我们将为您打开最新的 GitHub 发布页面。",
    openManuallyCta: "手动打开最新版本",
  },
};
