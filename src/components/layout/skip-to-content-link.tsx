"use client";

import { usePathname } from "next/navigation";
import { detectLocale, type Locale } from "@/lib/locale";

const SKIP_TO_CONTENT: Record<Locale, string> = {
  es: "Saltar al contenido principal",
  en: "Skip to main content",
  de: "Zum Hauptinhalt springen",
  fr: "Aller au contenu principal",
  it: "Vai al contenuto principale",
  pt: "Pular para o conteúdo principal",
  ru: "Перейти к основному содержанию",
  zh: "跳转到主要内容",
};

export function SkipToContentLink() {
  const pathname = usePathname() || "/";
  const { locale } = detectLocale(pathname);

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
    >
      {SKIP_TO_CONTENT[locale]}
    </a>
  );
}
