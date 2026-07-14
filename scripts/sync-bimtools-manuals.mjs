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

const suiteMeta = {
  Architecture: {
    id: "architecture",
    label: "Architecture",
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
  Structure: {
    id: "structure",
    label: "Structure",
    description:
      "Automatizacion para crear, editar y sincronizar armaduras y componentes estructurales con mayor velocidad y precision.",
    order: 4,
  },
  Drawing2D: {
    id: "drawing2d",
    label: "Drawing 2D",
    description:
      "Herramientas para anotacion y produccion de planos 2D con menos trabajo manual.",
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
    const addinsRoot = path.join(root, "Modules", suiteName, "Addins");
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
      const icon = collectIcon(addinDir, suiteName, suiteMeta[suiteName].id, slug, addinName.name);
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
export type ManualLocale = "es" | "en";

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
