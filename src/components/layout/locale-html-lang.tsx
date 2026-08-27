"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { detectLocale, LOCALE_META } from "@/lib/locale";

/**
 * Sets <html lang> per locale on the client. This site is statically
 * exported (output: "export" for Firebase Hosting), so there's no server
 * to inspect the request path when the single shared root layout renders
 * <html> — headers()/middleware aren't available. Correcting the attribute
 * after mount is the standard workaround for this static-export limitation.
 */
export function LocaleHtmlLang() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    const { locale } = detectLocale(pathname);
    document.documentElement.lang = LOCALE_META[locale]?.htmlLang ?? "es";
  }, [pathname]);

  return null;
}
