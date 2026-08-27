import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailView } from "@/components/pages/service-detail-view";
import { serviceContent, type ServiceSlug } from "@/lib/service-content";
import { serviceDetailContent } from "@/content/services";
import { buildServiceSchema } from "@/lib/schema";
import { localeAlternates } from "@/lib/locale";

const detailContent = serviceDetailContent.en;

interface ServicePageProps {
  params: Promise<{
    slug: ServiceSlug;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceContent[slug]?.en;

  if (!service) {
    return { title: detailContent.notFoundTitle };
  }

  const pageTitle = detailContent.metaTitleOverrides[slug] ?? service.shortTitle;

  return {
    title: pageTitle,
    description: service.description,
    alternates: {
      canonical: `https://www.frataingenieros.com/en/services/${service.slug}`,
      languages: localeAlternates(`/services/${service.slug}`),
    },
    openGraph: {
      title: `${pageTitle} | Frata Ingenieros`,
      description: service.description,
      url: `https://www.frataingenieros.com/en/services/${service.slug}`,
      siteName: "Frata Ingenieros",
      locale: detailContent.ogLocale,
      type: "website",
      images: [
        {
          url: "https://www.frataingenieros.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${pageTitle} - Frata Ingenieros`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | Frata Ingenieros`,
      description: service.description,
      images: ["https://www.frataingenieros.com/images/og-image.jpg"],
    },
  };
}

export default async function ServicePageEn({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceContent[slug]?.en;

  if (!service) notFound();

  const jsonLd = buildServiceSchema(
    service.title,
    service.description,
    `https://www.frataingenieros.com/en/services/${slug}`
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceDetailView locale="en" service={service} content={detailContent} />
    </>
  );
}
