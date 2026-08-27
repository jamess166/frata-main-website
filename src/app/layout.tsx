import type { Metadata } from "next";
import { Archivo, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { LocaleHtmlLang } from "@/components/layout/locale-html-lang";
import { SkipToContentLink } from "@/components/layout/skip-to-content-link";
import { localeAlternates } from "@/lib/locale";

// Neither font ships a Cyrillic or CJK subset — Russian and Chinese text
// fall back to the browser's system font stack, which is standard practice
// for brand-Latin-font sites (see the i18n expansion plan for details).
// latin-ext covers German/French/Italian/Portuguese diacritics.
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Consultoria BIM, Modelado BIM y Desarrollo Revit | Frata Ingenieros",
    template: "%s | Frata Ingenieros",
  },
  description:
    "Consultoria BIM, modelado BIM, coordinacion digital y desarrollo de aplicaciones para Revit o Tekla. Frata Ingenieros impulsa proyectos AEC con automatizacion y tecnologia BIM.",
  keywords: [
    "consultoria BIM",
    "modelado BIM",
    "coordinacion BIM",
    "desarrollo Revit",
    "desarrollo Tekla",
    "automatizacion BIM",
    "addins Revit",
    "servicios BIM Peru",
  ],
  metadataBase: new URL("https://www.frataingenieros.com"),
  alternates: {
    canonical: "/",
    languages: localeAlternates("/"),
  },
  // The site already ships native, human-translated content in 8 languages
  // (see src/lib/locale.ts) — opt out of the browser's own machine
  // translation so it doesn't re-translate an already-translated page (which
  // also breaks the language switcher's own labels and re-locks the visible
  // language regardless of which locale link is actually clicked).
  other: {
    google: "notranslate",
  },
  openGraph: {
    title: "Frata Ingenieros",
    description: "Consultoria BIM, modelado BIM y desarrollo de aplicaciones para Revit o Tekla.",
    url: "https://www.frataingenieros.com/",
    siteName: "Frata Ingenieros",
    images: [
      {
        url: "https://www.frataingenieros.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frata Ingenieros - Consultoria BIM",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frata Ingenieros",
    description: "Consultoria BIM, modelado BIM y desarrollo de aplicaciones para Revit o Tekla.",
    images: ["https://www.frataingenieros.com/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" translate="no" className={`notranslate ${archivo.variable} ${instrumentSans.variable}`}>
      <body className="font-body antialiased bg-background text-foreground">
        <LocaleHtmlLang />
        <SkipToContentLink />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
