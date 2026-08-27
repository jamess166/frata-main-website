import type { Metadata } from "next";
import { ServicesView } from "@/components/pages/services-view";
import { servicesContent } from "@/content/services";
import { localeAlternates } from "@/lib/locale";

const content = servicesContent.fr;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "https://www.frataingenieros.com/fr/services",
    languages: localeAlternates("/services"),
  },
  openGraph: {
    title: content.meta.ogTitle,
    description: content.meta.ogDescription,
    url: "https://www.frataingenieros.com/fr/services",
    siteName: "Frata Ingenieros",
    locale: content.meta.ogLocale,
    type: "website",
    images: [{ url: "https://www.frataingenieros.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicesPageFr() {
  return <ServicesView locale="fr" content={content} />;
}
