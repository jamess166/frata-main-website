import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const websiteRoot = process.cwd();
const defaultSourceRoot = "D:\\Developer\\Autodesk\\Revit\\frata-tools-revit\\frata-tools-revit\\frata-tools-revit";
const sourceRoot = process.env.FRATA_TOOLS_REPO || defaultSourceRoot;
const outputFile = path.join(websiteRoot, "src", "lib", "generated", "bimtools-manuals.ts");
const publicMediaRoot = path.join(websiteRoot, "public", "bimtools-media");
const publicIconRoot = path.join(websiteRoot, "public", "bimtools-icons");
const supportedImageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);
const defaultActivationEmail = "info@frataingenieros.com";
const defaultPremiumTrialDays = 30;

// Suite descriptions are translated into all 8 site locales (src/lib/locale.ts) so every
// BIMtools page (hub, manual index, suite detail) can show the real language instead of
// falling back to Spanish.
const suiteMeta = {
  Architecture: {
    id: "architecture",
    label: "Architecture",
    description: {
      es: "Automatizacion para convertir datos arquitectonicos del modelo en elementos constructivos con menos trabajo manual.",
      en: "Automation to turn architectural room data into modeled floor elements with less manual setup.",
      de: "Automatisierung, um architektonische Raumdaten aus dem Modell mit weniger manuellem Aufwand in modellierte Geschosselemente umzuwandeln.",
      fr: "Automatisation pour transformer les données de pièces architecturales du modèle en éléments de plancher modélisés avec moins de configuration manuelle.",
      it: "Automazione per trasformare i dati dei vani architettonici del modello in elementi di piano modellati con meno configurazione manuale.",
      pt: "Automação para transformar dados de ambientes arquitetônicos do modelo em elementos de piso modelados com menos configuração manual.",
      ru: "Автоматизация преобразования архитектурных данных помещений модели в смоделированные элементы перекрытий с меньшим объёмом ручной настройки.",
      zh: "将模型中的建筑房间数据自动转换为已建模的楼板构件，减少手动设置。",
    },
    order: 1,
  },
  Manage: {
    id: "manage",
    label: "Manage",
    description: {
      es: "Automatiza exportacion, parametros y configuracion centralizada para mantener tus modelos consistentes.",
      en: "Automation for exports, parameters and centralized settings.",
      de: "Automatisierung für Export, Parameter und zentrale Einstellungen.",
      fr: "Automatisation pour l'export, les paramètres et les réglages centralisés.",
      it: "Automazione per esportazione, parametri e impostazioni centralizzate.",
      pt: "Automação para exportação, parâmetros e configurações centralizadas.",
      ru: "Автоматизация экспорта, параметров и централизованных настроек.",
      zh: "实现导出、参数与集中设置的自动化。",
    },
    order: 2,
  },
  Navigate: {
    id: "navigate",
    label: "Navigate",
    description: {
      es: "Herramientas para encontrar, abrir y seleccionar informacion del modelo con menos friccion.",
      en: "Tools to find, open and select model information faster.",
      de: "Werkzeuge, um Modellinformationen schneller zu finden, zu öffnen und auszuwählen.",
      fr: "Outils pour trouver, ouvrir et sélectionner plus rapidement les informations du modèle.",
      it: "Strumenti per trovare, aprire e selezionare più velocemente le informazioni del modello.",
      pt: "Ferramentas para encontrar, abrir e selecionar informações do modelo com mais rapidez.",
      ru: "Инструменты для более быстрого поиска, открытия и выбора информации модели.",
      zh: "更快查找、打开并选择模型信息的工具。",
    },
    order: 3,
  },
  Structure: {
    id: "structure",
    label: "Structure",
    description: {
      es: "Automatizacion para crear, editar y sincronizar armaduras y componentes estructurales con mayor velocidad y precision.",
      en: "Automation to create, edit and synchronize reinforcement and structural components faster.",
      de: "Automatisierung zum schnelleren Erstellen, Bearbeiten und Synchronisieren von Bewehrung und Tragwerkskomponenten.",
      fr: "Automatisation pour créer, modifier et synchroniser plus rapidement les armatures et les composants structurels.",
      it: "Automazione per creare, modificare e sincronizzare più velocemente armature e componenti strutturali.",
      pt: "Automação para criar, editar e sincronizar armaduras e componentes estruturais com mais rapidez.",
      ru: "Автоматизация для более быстрого создания, редактирования и синхронизации арматуры и конструктивных элементов.",
      zh: "更快创建、编辑并同步钢筋与结构构件的自动化工具。",
    },
    order: 4,
  },
  Drawing2D: {
    id: "drawing2d",
    label: "Drawing 2D",
    description: {
      es: "Herramientas para anotacion y produccion de planos 2D con menos trabajo manual.",
      en: "Tools for 2D annotation and drawing production with less manual work.",
      de: "Werkzeuge für 2D-Beschriftung und Planerstellung mit weniger manuellem Aufwand.",
      fr: "Outils pour l'annotation 2D et la production de plans avec moins de travail manuel.",
      it: "Strumenti per l'annotazione 2D e la produzione di elaborati con meno lavoro manuale.",
      pt: "Ferramentas para anotação 2D e produção de pranchas com menos trabalho manual.",
      ru: "Инструменты для 2D-аннотирования и оформления чертежей с меньшим объёмом ручной работы.",
      zh: "用于二维标注与图纸制作的工具，减少手动操作。",
    },
    order: 5,
  },
  MEP: {
    id: "mep",
    label: "MEP",
    description: {
      es: "Automatizacion para crear, ajustar y limpiar redes de tuberia en proyectos MEP con menos trabajo manual.",
      en: "Automation to create, adjust and clean up piping systems in MEP projects with less manual work.",
      de: "Automatisierung zum Erstellen, Anpassen und Bereinigen von Rohrleitungssystemen in MEP-Projekten mit weniger manuellem Aufwand.",
      fr: "Automatisation pour créer, ajuster et nettoyer les réseaux de tuyauterie dans les projets MEP avec moins de travail manuel.",
      it: "Automazione per creare, regolare e ripulire le reti di tubazioni nei progetti MEP con meno lavoro manuale.",
      pt: "Automação para criar, ajustar e organizar redes de tubulação em projetos MEP com menos trabalho manual.",
      ru: "Автоматизация создания, настройки и очистки трубопроводных систем в MEP-проектах с меньшим объёмом ручной работы.",
      zh: "用于创建、调整与整理机电（MEP）项目管道系统的自动化工具，减少手动操作。",
    },
    order: 6,
  },
};

function normalizeNewlines(value) {
  return value.replace(/\r\n/g, "\n").trim();
}

function repairEncoding(value) {
  if (!/[Ãâ�]/.test(value)) {
    return value;
  }

  try {
    const repaired = Buffer.from(value, "latin1").toString("utf8");
    return repaired.includes("�") ? value : repaired;
  } catch {
    return value;
  }
}

function readMarkdownFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return normalizeNewlines(repairEncoding(raw));
}

function readMarkdownDocument(filePath) {
  const document = matter(readMarkdownFile(filePath));

  return {
    content: normalizeNewlines(document.content),
    data: document.data && typeof document.data === "object" ? document.data : {},
  };
}

function extractTitle(markdown, fallback) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

function extractExcerpt(markdown) {
  const lines = normalizeNewlines(markdown)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    if (line.startsWith("#")) continue;
    if (line.startsWith("##")) continue;
    if (line.startsWith("###")) continue;
    return line;
  }

  return "";
}

function createSlugFromDirectory(dirName) {
  return dirName
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function readOptionalJson(filePath) {
  if (!fs.existsSync(filePath)) return null;

  try {
    const raw = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
    return JSON.parse(raw);
  } catch (error) {
    throw new Error(`Invalid JSON file: ${filePath}\n${error}`);
  }
}

function findMediaFolder(manualDir) {
  const candidates = ["manual-assets", "media", "images"];

  for (const candidate of candidates) {
    const mediaDir = path.join(manualDir, candidate);
    if (fs.existsSync(mediaDir) && fs.statSync(mediaDir).isDirectory()) {
      return mediaDir;
    }
  }

  return null;
}

function toHumanLabel(value) {
  return value
    .replace(/\.[^.]+$/, "")
    .replace(/^[0-9]+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeLookupValue(value) {
  return String(value || "")
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
}

function toLowerCamelCase(value) {
  if (!value) return "";
  return value.charAt(0).toLowerCase() + value.slice(1);
}

function findReferencedIconFile(addinDir) {
  const queue = [addinDir];

  while (queue.length > 0) {
    const current = queue.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);

      if (entry.isDirectory()) {
        queue.push(fullPath);
        continue;
      }

      if (!entry.isFile() || path.extname(entry.name).toLowerCase() !== ".cs") {
        continue;
      }

      const source = readTextFile(fullPath);
      const largeImageMatch = source.match(/SetLargeImage\(".*?\/Resources\/img\/([^"]+)"\)/);
      if (largeImageMatch?.[1]) {
        return largeImageMatch[1].trim();
      }

      const imageMatch = source.match(/SetImage\(".*?\/Resources\/img\/([^"]+)"\)/);
      if (imageMatch?.[1]) {
        return imageMatch[1].trim();
      }
    }
  }

  return "";
}

function collectIcon(addinDir, suiteName, suiteId, slug, addinName) {
  // Icons live per-addin (Addins/<Addin>/Resources/img); older layouts kept them at suite level.
  const iconDirs = [
    path.join(addinDir, "Resources", "img"),
    path.join(sourceRoot, "Modules", suiteName, "Resources", "img"),
  ].filter((dir) => fs.existsSync(dir) && fs.statSync(dir).isDirectory());

  const files = iconDirs.flatMap((dir) =>
    fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && supportedImageExtensions.has(path.extname(entry.name).toLowerCase()))
      .map((entry) => ({ dir, name: entry.name }))
  );

  if (files.length === 0) {
    return null;
  }

  const referencedFile = findReferencedIconFile(addinDir);
  const aliasSeeds = [
    addinName,
    addinName.replace(/Tools$/i, ""),
    toLowerCamelCase(addinName),
    toLowerCamelCase(addinName.replace(/Tools$/i, "")),
  ].filter(Boolean);

  const preferredBaseNames = [
    referencedFile,
    ...aliasSeeds.flatMap((seed) => [
      `${seed}512`,
      `${seed}IconBig`,
      `${seed}Big`,
      `${seed}Icon`,
      seed,
      `${seed}32`,
    ]),
    "icon",
  ]
    .map(normalizeLookupValue)
    .filter(Boolean);

  let selectedFile =
    files.find((file) => normalizeLookupValue(file.name) === normalizeLookupValue(referencedFile)) || null;

  if (!selectedFile) {
    for (const preferred of preferredBaseNames) {
      const exact = files.find((file) => normalizeLookupValue(file.name) === preferred);
      if (exact) {
        selectedFile = exact;
        break;
      }
    }
  }

  if (!selectedFile) {
    const addinKey = normalizeLookupValue(addinName);
    const containsMatches = files.filter((file) => normalizeLookupValue(file.name).includes(addinKey));

    selectedFile =
      containsMatches.find((file) => /512|iconbig|big/.test(normalizeLookupValue(file.name))) ||
      containsMatches.find((file) => /icon/.test(normalizeLookupValue(file.name))) ||
      containsMatches[0] ||
      null;
  }

  if (!selectedFile) {
    return null;
  }

  const ext = path.extname(selectedFile.name).toLowerCase();
  const outputDir = path.join(publicIconRoot, suiteId);
  const outputFilePath = path.join(outputDir, `${slug}${ext}`);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.copyFileSync(path.join(selectedFile.dir, selectedFile.name), outputFilePath);

  return {
    src: `/bimtools-icons/${suiteId}/${slug}${ext}`,
    alt: `${addinName} icon`,
  };
}

function collectMedia(manualDir, suiteId, slug) {
  const meta = readOptionalJson(path.join(manualDir, "manual.meta.json")) || {};
  const mediaDir = findMediaFolder(manualDir);
  const images = [];

  if (mediaDir) {
    const outputDir = path.join(publicMediaRoot, suiteId, slug);
    fs.mkdirSync(outputDir, { recursive: true });

    const files = fs
      .readdirSync(mediaDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && supportedImageExtensions.has(path.extname(entry.name).toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

    for (const file of files) {
      const sourceFile = path.join(mediaDir, file.name);
      const targetFile = path.join(outputDir, file.name);
      fs.copyFileSync(sourceFile, targetFile);

      images.push({
        src: `/bimtools-media/${suiteId}/${slug}/${file.name}`,
        alt: toHumanLabel(file.name) || slug,
      });
    }
  }

  return {
    images,
    youtubeUrl: typeof meta.youtubeUrl === "string" ? meta.youtubeUrl.trim() : "",
    youtubeId: typeof meta.youtubeId === "string" ? meta.youtubeId.trim() : "",
  };
}

function readTextFile(filePath) {
  return fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
}

function findCommandMetadata(addinDir) {
  const queue = [addinDir];
  let isPremium = false;
  let isFree = false;
  let paymentUrl = "";

  while (queue.length > 0) {
    const current = queue.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);

      if (entry.isDirectory()) {
        queue.push(fullPath);
        continue;
      }

      if (!entry.isFile() || path.extname(entry.name).toLowerCase() !== ".cs") {
        continue;
      }

      const source = readTextFile(fullPath);

      if (/:\s*PremiumFrataCommand\b/.test(source)) {
        isPremium = true;
      }

      if (/:\s*FrataCommand\b/.test(source)) {
        isFree = true;
      }

      if (!paymentUrl) {
        const paymentMatch = source.match(/PaymentUrl\s*=>\s*"([^"]+)"/);
        if (paymentMatch) {
          paymentUrl = paymentMatch[1].trim();
        }
      }
    }
  }

  return {
    isPremium,
    isFree,
    paymentUrl,
  };
}

function normalizeTier(value) {
  if (typeof value !== "string") return "";

  const normalized = value.trim().toLowerCase();

  if (["premium", "paid", "pro"].includes(normalized)) return "premium";
  if (["free", "gratis", "gratuito"].includes(normalized)) return "free";
  return "";
}

function pickString(...values) {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return "";
}

function pickNumber(...values) {
  for (const value of values) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
  }

  return 0;
}

function resolveCommerce(esData, enData, addinDir) {
  const commandMetadata = findCommandMetadata(addinDir);
  const manualTier =
    normalizeTier(esData.tier) ||
    normalizeTier(enData.tier) ||
    normalizeTier(esData.plan) ||
    normalizeTier(enData.plan);

  const tier = manualTier || (commandMetadata.isPremium ? "premium" : "free");
  const purchaseUrl = pickString(esData.purchaseUrl, enData.purchaseUrl, commandMetadata.paymentUrl);
  const trialDays = pickNumber(esData.trialDays, enData.trialDays, tier === "premium" ? defaultPremiumTrialDays : 0);
  const activationEmail = pickString(esData.activationEmail, enData.activationEmail, defaultActivationEmail);

  return {
    tier,
    purchaseUrl,
    trialDays,
    activationEmail,
    isPremium: tier === "premium",
    isFree: tier === "free" || (!commandMetadata.isPremium && commandMetadata.isFree),
  };
}

// Extra locales beyond the original es/en pair. Keys match the site-wide Locale type
// (src/lib/locale.ts) exactly — short codes, not full BCP-47 — so the generated
// ManualLocale union can be indexed directly with a site Locale value everywhere.
const extraLocales = ["de", "fr", "it", "pt", "ru", "zh"];

// Manual files live in a per-addin Manual/ subfolder, one file per locale, named by the
// full culture code (e.g. Manual/de-DE.md). The dictionary keys used throughout this
// script and the website stay short ("de", not "de-DE") to match src/lib/locale.ts.
const LOCALE_FILENAMES = {
  es: "es-ES.md",
  en: "en-US.md",
  de: "de-DE.md",
  fr: "fr-FR.md",
  it: "it-IT.md",
  pt: "pt-BR.md",
  ru: "ru-RU.md",
  zh: "zh-CN.md",
};

function discoverEntries(root) {
  const entries = [];

  for (const suiteName of Object.keys(suiteMeta)) {
    const addinsRoot = path.join(root, "Modules", suiteName, "Addins");
    if (!fs.existsSync(addinsRoot)) continue;

    for (const addinName of fs.readdirSync(addinsRoot, { withFileTypes: true })) {
      if (!addinName.isDirectory()) continue;

      const addinDir = path.join(addinsRoot, addinName.name);
      const manualDir = path.join(addinDir, "Manual");
      if (!fs.existsSync(manualDir) || !fs.statSync(manualDir).isDirectory()) continue;

      const esPath = path.join(manualDir, LOCALE_FILENAMES.es);
      const enPath = path.join(manualDir, LOCALE_FILENAMES.en);
      const esExists = fs.existsSync(esPath);
      const enExists = fs.existsSync(enPath);
      if (!esExists && !enExists) continue;

      // Each locale falls back to whichever of es/en actually exists when its own file is
      // missing, so a partially translated addin still renders instead of breaking.
      const esDocument = readMarkdownDocument(esExists ? esPath : enPath);
      const enDocument = readMarkdownDocument(enExists ? enPath : esPath);
      const esMarkdown = esDocument.content;
      const enMarkdown = enDocument.content;
      const slug = createSlugFromDirectory(addinName.name);
      const media = collectMedia(manualDir, suiteMeta[suiteName].id, slug);
      const icon = collectIcon(addinDir, suiteName, suiteMeta[suiteName].id, slug, addinName.name);
      const commerce = resolveCommerce(esDocument.data, enDocument.data, addinDir);

      const title = {
        es: extractTitle(esMarkdown, addinName.name),
        en: extractTitle(enMarkdown, addinName.name),
      };
      const excerpt = {
        es: extractExcerpt(esMarkdown),
        en: extractExcerpt(enMarkdown),
      };
      const markdown = {
        es: esMarkdown,
        en: enMarkdown,
      };

      // Extra locales fall back to the English document when their own file is missing,
      // so an addin that hasn't been translated yet still renders instead of breaking.
      for (const locale of extraLocales) {
        const localePath = path.join(manualDir, LOCALE_FILENAMES[locale]);
        const document = fs.existsSync(localePath) ? readMarkdownDocument(localePath) : enDocument;
        const localeMarkdown = document.content;

        title[locale] = extractTitle(localeMarkdown, addinName.name);
        excerpt[locale] = extractExcerpt(localeMarkdown);
        markdown[locale] = localeMarkdown;
      }

      entries.push({
        slug,
        addinName: addinName.name,
        suite: suiteMeta[suiteName],
        title,
        excerpt,
        markdown,
        icon,
        media,
        commerce,
      });
    }
  }

  return entries.sort((a, b) => {
    if (a.suite.order !== b.suite.order) return a.suite.order - b.suite.order;
    return a.title.es.localeCompare(b.title.es);
  });
}

function toTsModule(entries) {
  const suites = Object.values(suiteMeta)
    .sort((a, b) => a.order - b.order)
    .map((suite) => ({
      id: suite.id,
      label: suite.label,
      description: suite.description,
      addins: entries.filter((entry) => entry.suite.id === suite.id).map((entry) => entry.slug),
    }));

  return `/* eslint-disable */
export type ManualLocale = "es" | "en" | "de" | "fr" | "it" | "pt" | "ru" | "zh";

export interface BimtoolsManualEntry {
  slug: string;
  addinName: string;
  suiteId: string;
  suiteLabel: string;
  title: Record<ManualLocale, string>;
  excerpt: Record<ManualLocale, string>;
  markdown: Record<ManualLocale, string>;
  icon: {
    src: string;
    alt: string;
  } | null;
  media: {
    images: Array<{
      src: string;
      alt: string;
    }>;
    youtubeUrl: string;
    youtubeId: string;
  };
  commerce: {
    tier: "free" | "premium";
    purchaseUrl: string;
    trialDays: number;
    activationEmail: string;
    isPremium: boolean;
    isFree: boolean;
  };
}

export interface BimtoolsSuite {
  id: string;
  label: string;
  description: Record<ManualLocale, string>;
  addins: string[];
}

export const bimtoolsSuites: BimtoolsSuite[] = ${JSON.stringify(suites, null, 2)} as const;

export const bimtoolsManuals: BimtoolsManualEntry[] = ${JSON.stringify(
    entries.map((entry) => ({
      slug: entry.slug,
      addinName: entry.addinName,
      suiteId: entry.suite.id,
      suiteLabel: entry.suite.label,
      title: entry.title,
      excerpt: entry.excerpt,
      markdown: entry.markdown,
      icon: entry.icon,
      media: entry.media,
      commerce: entry.commerce,
    })),
    null,
    2
  )} as const;
`;
}

function skipSync(reason) {
  console.warn(`[sync-bimtools-manuals] Skipping regeneration: ${reason}`);
  console.warn(`[sync-bimtools-manuals] Keeping existing ${outputFile}`);
}

if (!fs.existsSync(sourceRoot)) {
  skipSync(`source repository not found at ${sourceRoot}`);
  process.exit(0);
}

// Clean stale assets BEFORE discovery — discoverEntries copies fresh icons/media into these folders.
fs.rmSync(publicMediaRoot, { recursive: true, force: true });
fs.rmSync(publicIconRoot, { recursive: true, force: true });

const entries = discoverEntries(sourceRoot);

if (entries.length === 0) {
  skipSync(`no manual entries discovered under ${sourceRoot} (folder layout may have changed)`);
  process.exit(0);
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, toTsModule(entries), "utf8");

console.log(`Generated ${entries.length} BIMtools manuals into ${outputFile}`);
