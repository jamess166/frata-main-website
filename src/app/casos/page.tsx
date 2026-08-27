import type { Metadata } from "next";
import { CasosView } from "@/components/pages/casos-view";
import { casosContent } from "@/content/casos";
import { localeAlternates } from "@/lib/locale";

const content = casosContent.es;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "https://www.frataingenieros.com/casos",
    languages: localeAlternates("/casos"),
  },
  openGraph: {
    title: content.meta.ogTitle,
    description: content.meta.ogDescription,
    url: "https://www.frataingenieros.com/casos",
    siteName: "Frata Ingenieros",
    locale: content.meta.ogLocale,
    type: "website",
    images: [
      {
        url: "https://www.frataingenieros.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: content.meta.ogImageAlt,
      },
    ],
  },
};

export default function CasosPage() {
  return <CasosView locale="es" content={content} />;
}
