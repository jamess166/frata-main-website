import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
// import { FaqChatButton } from '@/components/faq-chat-button';

export const metadata: Metadata = {
  title: {
    default: "Consultoría BIM y Modelamiento BIM en Perú | Frata Ingenieros",
    template: "%s | Frata Ingenieros",
  },
  description:
    "Especialistas en Consultoría BIM, Modelamiento BIM y Coordinación de proyectos en Lima y todo el Perú. Optimiza tu construcción con tecnología BIM.",
  keywords: [
    "Consultoría BIM Perú",
    "Modelamiento BIM",
    "Servicios BIM Perú",
    "Coordinación BIM",
    "Supervisión BIM",
    "Modelado BIM Estructuras"
  ],
  alternates: {
    canonical: "https://www.frataingenieros.com/",
    languages: {
      "es": "https://www.frataingenieros.com/",
      "en": "https://www.frataingenieros.com/en",
    }
  },
  openGraph: {
    title: "Frata Ingenieros",
    description:
      "Consultoría y modelamiento BIM en Perú — expertos en coordinación y supervisión BIM.",
    url: "https://www.frataingenieros.com/",
    siteName: "Frata Ingenieros",
    images: [
      {
        url: "https://www.frataingenieros.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frata Ingenieros - Consultoría BIM"
      }
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frata Ingenieros",
    description:
      "Consultoría y modelamiento BIM en Perú — expertos en coordinación y supervisión BIM.",
    images: ["https://www.frataingenieros.com/images/og-image.jpg"],
  }
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            {/* <FaqChatButton /> */}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
