import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

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
    languages: {
      es: "/",
      en: "/en",
    },
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
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Saltar al contenido principal
          </a>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
