export type Locale = "es" | "en" | "de" | "fr" | "it" | "pt" | "ru" | "zh";

export const LOCALES: Locale[] = ["es", "en", "de", "fr", "it", "pt", "ru", "zh"];

export interface LocaleMeta {
  /** URL prefix for this locale's route tree ("" for the default/root locale). */
  prefix: string;
  /** hreflang value used in alternates.languages — bare code for es/en (unchanged from before), full BCP-47 for the rest. */
  hreflang: string;
  /** og:locale value (underscore form). */
  ogLocale: string;
  /** <html lang> value. */
  htmlLang: string;
  /** Name shown in the locale switcher, in that language. */
  nativeLabel: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  es: { prefix: "", hreflang: "es", ogLocale: "es_PE", htmlLang: "es", nativeLabel: "Español" },
  en: { prefix: "/en", hreflang: "en", ogLocale: "en_US", htmlLang: "en", nativeLabel: "English" },
  de: { prefix: "/de", hreflang: "de-DE", ogLocale: "de_DE", htmlLang: "de", nativeLabel: "Deutsch" },
  fr: { prefix: "/fr", hreflang: "fr-FR", ogLocale: "fr_FR", htmlLang: "fr", nativeLabel: "Français" },
  it: { prefix: "/it", hreflang: "it-IT", ogLocale: "it_IT", htmlLang: "it", nativeLabel: "Italiano" },
  pt: { prefix: "/pt", hreflang: "pt-BR", ogLocale: "pt_BR", htmlLang: "pt", nativeLabel: "Português" },
  ru: { prefix: "/ru", hreflang: "ru-RU", ogLocale: "ru_RU", htmlLang: "ru", nativeLabel: "Русский" },
  zh: { prefix: "/zh", hreflang: "zh-CN", ogLocale: "zh_CN", htmlLang: "zh", nativeLabel: "中文" },
};

/**
 * Route segments that are translated away from the Spanish-canonical form.
 * Applies uniformly to every non-Spanish locale (we don't maintain a
 * separately-translated URL slug per language — every non-es locale uses
 * the English segment).
 */
export const LOCALIZED_SEGMENTS_ES_TO_OTHER: Record<string, string> = {
  suscripcion: "subscription",
};

export const LOCALIZED_SEGMENTS_OTHER_TO_ES: Record<string, string> = Object.fromEntries(
  Object.entries(LOCALIZED_SEGMENTS_ES_TO_OTHER).map(([es, other]) => [other, es])
);

/**
 * Given a canonical Spanish-form path (e.g. "/about", "/#contact",
 * "/bimtools/suscripcion"), returns the equivalent path for the given
 * locale. Views should always author links in the Spanish-canonical form
 * and call withLocale(locale, path) rather than hand-writing "/en/..." (or
 * "/de/...", etc.) ternaries.
 */
export function withLocale(locale: Locale, path: string): string {
  if (locale === "es") return path;

  const prefix = LOCALE_META[locale].prefix;
  if (path === "/") return prefix;

  const translated = path
    .split("/")
    .map((segment) => LOCALIZED_SEGMENTS_ES_TO_OTHER[segment] ?? segment)
    .join("/");
  return `${prefix}${translated}`;
}

/**
 * Inverse of withLocale: given the current pathname (in any locale),
 * detects which locale it belongs to and returns the Spanish-canonical
 * form of the path, so it can be re-localized into any other locale via
 * withLocale(targetLocale, canonicalPath). Used by the locale switcher.
 */
export function detectLocale(pathname: string): { locale: Locale; canonicalPath: string } {
  for (const locale of LOCALES) {
    if (locale === "es") continue;

    const prefix = LOCALE_META[locale].prefix;
    if (pathname === prefix) {
      return { locale, canonicalPath: "/" };
    }
    if (pathname.startsWith(`${prefix}/`)) {
      const rest = pathname.slice(prefix.length);
      const canonicalPath = rest
        .split("/")
        .map((segment) => LOCALIZED_SEGMENTS_OTHER_TO_ES[segment] ?? segment)
        .join("/");
      return { locale, canonicalPath: canonicalPath || "/" };
    }
  }

  return { locale: "es", canonicalPath: pathname || "/" };
}

const SITE_URL = "https://www.frataingenieros.com";

/** Builds a reciprocal alternates.languages map for page metadata, across all 8 locales. */
export function localeAlternates(canonicalEsPath: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const locale of LOCALES) {
    result[LOCALE_META[locale].hreflang] = `${SITE_URL}${withLocale(locale, canonicalEsPath)}`;
  }
  return result;
}

/**
 * Resolves per-item bilingual data (case studies, testimonials, BIMtools
 * manuals) that only ever has Spanish/English content: Spanish for the
 * "es" locale, English for every other locale (falling back to Spanish if
 * an English value isn't available). Centralizes the fallback so it isn't
 * hand-rolled per call site.
 */
export function resolveBilingual<T>(locale: Locale, es: T, en: T | null | undefined): T {
  if (locale === "es") return es;
  return (en ?? es) as T;
}
