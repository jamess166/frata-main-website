import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { LocaleHtmlLang } from "@/components/layout/locale-html-lang";
import { SkipToContentLink } from "@/components/layout/skip-to-content-link";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Consultoría BIM, Modelado BIM y Desarrollo Revit | Frata Ingenieros",
    template: "%s | Frata Ingenieros",
  },
  description:
    "Consultoría BIM, modelado BIM, coordinación digital y desarrollo de aplicaciones para Revit o Tekla. Frata Ingenieros impulsa proyectos AEC con automatización y tecnologia BIM.",
  keywords: [
    "consultoría BIM",
    "expedientes técnicos de inversión pública con BIM",
    "expedientes técnicos públicos con BIM",
    "metrados BIM para expedientes técnicos de obra pública",
    "modelado BIM",
    "coordinación BIM",
    "desarrollo Revit",
    "desarrollo Tekla",
    "automatización BIM",
    "addins Revit",
    "servicios BIM Peru",
  ],
  // No site-wide canonical here: a layout-level canonical is inherited by any
  // page that doesn't declare its own, telling Google that page is a
  // duplicate of the homepage. Each page sets its own alternates.canonical.
  metadataBase: new URL("https://www.frataingenieros.com"),
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
    description: "Consultoría BIM, modelado BIM y desarrollo de aplicaciones para Revit o Tekla.",
    url: "https://www.frataingenieros.com/",
    siteName: "Frata Ingenieros",
    images: [
      {
        url: "https://www.frataingenieros.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frata Ingenieros - Consultoría BIM",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frata Ingenieros",
    description: "Consultoría BIM, modelado BIM y desarrollo de aplicaciones para Revit o Tekla.",
    images: ["https://www.frataingenieros.com/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-theme is set by THEME_INIT_SCRIPT before hydration, hence suppressHydrationWarning.
    <html lang="es" translate="no" className="notranslate" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
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
