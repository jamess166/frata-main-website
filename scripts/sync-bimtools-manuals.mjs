import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const websiteRoot = process.cwd();
const defaultSourceRoot = "D:\\Developer\\Autodesk\\Revit\\frata-tools-revit\\frata-tools-revit";
const sourceRoot = process.env.FRATA_TOOLS_REPO || defaultSourceRoot;
const outputFile = path.join(websiteRoot, "src", "lib", "generated", "bimtools-manuals.ts");
const publicMediaRoot = path.join(websiteRoot, "public", "bimtools-media");
const supportedImageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);
const defaultActivationEmail = "info@frataingenieros.com";
const defaultPremiumTrialDays = 30;

const suiteMeta = {
  "Architecture.Create": {
    id: "architecture-create",
    label: "Architecture Create",
    description:
      "Automatizacion para convertir datos arquitectonicos del modelo en elementos constructivos con menos trabajo manual.",
    order: 1,
  },
  Manage: {
    id: "manage",
    label: "Manage",
    description:
      "Automatiza exportacion, parametros y configuracion centralizada para mantener tus modelos consistentes.",
    order: 2,
  },
  Navigate: {
    id: "navigate",
    label: "Navigate",
    description:
      "Herramientas para encontrar, abrir y seleccionar informacion del modelo con menos friccion.",
    order: 3,
  },
  "Structure.Create": {
    id: "structure-create",
    label: "Structure Create",
    description:
      "Automatizacion para crear armaduras y componentes estructurales con mayor velocidad y precision.",
    order: 4,
  },
  "Structure.Modify": {
    id: "structure-modify",
    label: "Structure Modify",
    description:
      "Utilidades para editar, sincronizar y visualizar refuerzo estructural en modelos complejos.",
    order: 5,
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

function findMediaFolder(addinDir) {
  const candidates = ["manual-assets", "media", "images"];

  for (const candidate of candidates) {
    const mediaDir = path.join(addinDir, candidate);
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

function collectMedia(addinDir, suiteId, slug) {
  const meta = readOptionalJson(path.join(addinDir, "manual.meta.json")) || {};
  const mediaDir = findMediaFolder(addinDir);
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

function discoverEntries(root) {
  const entries = [];

  for (const suiteName of Object.keys(suiteMeta)) {
    const addinsRoot = path.join(root, suiteName, "Addins");
    if (!fs.existsSync(addinsRoot)) continue;

    for (const addinName of fs.readdirSync(addinsRoot, { withFileTypes: true })) {
      if (!addinName.isDirectory()) continue;

      const addinDir = path.join(addinsRoot, addinName.name);
      const files = fs.readdirSync(addinDir);
      const esFile = files.find((file) => file.toLowerCase().endsWith("-es.md"));
      const enFile = files.find((file) => file.toLowerCase().endsWith("-en.md"));
      const genericFile = files.find((file) => file.toLowerCase().endsWith(".md"));
      if (!esFile && !genericFile) continue;

      const esSourceFile = esFile || genericFile;
      const enSourceFile = enFile || esSourceFile;
      const esDocument = readMarkdownDocument(path.join(addinDir, esSourceFile));
      const enDocument = readMarkdownDocument(path.join(addinDir, enSourceFile));
      const esMarkdown = esDocument.content;
      const enMarkdown = enDocument.content;
      const slug = createSlugFromDirectory(addinName.name);
      const media = collectMedia(addinDir, suiteMeta[suiteName].id, slug);
      const commerce = resolveCommerce(esDocument.data, enDocument.data, addinDir);

      entries.push({
        slug,
        addinName: addinName.name,
        suite: suiteMeta[suiteName],
        title: {
          es: extractTitle(esMarkdown, addinName.name),
          en: extractTitle(enMarkdown, addinName.name),
        },
        excerpt: {
          es: extractExcerpt(esMarkdown),
          en: extractExcerpt(enMarkdown),
        },
        markdown: {
          es: esMarkdown,
          en: enMarkdown,
        },
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
export type ManualLocale = "es" | "en";

export interface BimtoolsManualEntry {
  slug: string;
  addinName: string;
  suiteId: string;
  suiteLabel: string;
  title: Record<ManualLocale, string>;
  excerpt: Record<ManualLocale, string>;
  markdown: Record<ManualLocale, string>;
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
  description: string;
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
      media: entry.media,
      commerce: entry.commerce,
    })),
    null,
    2
  )} as const;
`;
}

if (!fs.existsSync(sourceRoot)) {
  throw new Error(`Source repository not found: ${sourceRoot}`);
}

const entries = discoverEntries(sourceRoot);

if (entries.length === 0) {
  throw new Error(`No manual entries discovered under: ${sourceRoot}`);
}

fs.rmSync(publicMediaRoot, { recursive: true, force: true });
fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, toTsModule(entries), "utf8");

console.log(`Generated ${entries.length} BIMtools manuals into ${outputFile}`);
