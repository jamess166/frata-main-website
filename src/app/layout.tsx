import type { Metadata } from "next";
import { Archivo, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
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
    <html lang="es" className={`${archivo.variable} ${instrumentSans.variable}`}>
      <body className="font-body antialiased bg-background text-foreground">
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
      </body>
    </html>
  );
}
