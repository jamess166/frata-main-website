import type { Metadata } from "next";
import { BimtoolsHubView } from "@/components/pages/bimtools-hub-view";
import { bimtoolsHubContent } from "@/content/bimtools-hub";
import { getBimtoolsOverview } from "@/lib/bimtools";
import { localeAlternates } from "@/lib/locale";
import { buildSoftwareApplicationSchema } from "@/lib/schema";

const content = bimtoolsHubContent.zh;

export const metadata: Metadata = {
  title: { absolute: content.meta.titleAbsolute },
  description: content.meta.description,
  keywords: content.meta.keywords,
  alternates: {
    canonical: "https://www.frataingenieros.com/zh/bimtools",
    languages: localeAlternates("/bimtools"),
  },
  openGraph: {
    title: content.meta.ogTitle,
    description: content.meta.ogDescription,
    url: "https://www.frataingenieros.com/zh/bimtools",
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

export default function BimtoolsPageZh() {
  const overview = getBimtoolsOverview();
  const jsonLd = buildSoftwareApplicationSchema(overview.totalAddins, overview.premiumAddins);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BimtoolsHubView locale="zh" content={content} />
    </>
  );
}
