import type { Metadata } from "next";
import { HomeView } from "@/components/pages/home-view";
import { homeContent } from "@/content/home";
import { localeAlternates } from "@/lib/locale";
import { buildOrganizationSchema } from "@/lib/schema";

const content = homeContent.es;

export const metadata: Metadata = {
  title: { absolute: content.meta.titleAbsolute },
  description: content.meta.description,
  alternates: {
    canonical: "https://www.frataingenieros.com/",
    languages: localeAlternates("/"),
  },
  openGraph: {
    title: content.meta.ogTitle,
    description: content.meta.ogDescription,
    url: "https://www.frataingenieros.com/",
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
  twitter: {
    card: "summary_large_image",
    title: content.meta.ogTitle,
    description: content.meta.ogDescription,
    images: ["https://www.frataingenieros.com/images/og-image.jpg"],
  },
};

export default function Home() {
  const jsonLd = buildOrganizationSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomeView locale="es" content={content} />
    </>
  );
}
