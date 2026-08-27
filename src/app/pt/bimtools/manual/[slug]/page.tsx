import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BimtoolsManualDetailView } from "@/components/pages/bimtools-manual-detail-view";
import { bimtoolsManualDetailContent } from "@/content/bimtools-manual-detail";
import { getBimtoolManual, getBimtoolsSuitesWithManuals } from "@/lib/bimtools";
import { localeAlternates } from "@/lib/locale";

const content = bimtoolsManualDetailContent.pt;

interface ManualDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getBimtoolsSuitesWithManuals()
    .flatMap((suite) => suite.manuals)
    .map((manual) => ({ slug: manual.slug }));
}

export async function generateMetadata({ params }: ManualDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const manual = getBimtoolManual(slug);

  if (!manual) {
    return { title: content.notFoundTitle };
  }

  return {
    title: `${manual.title.en} | ${content.metaSuffix}`,
    description: manual.excerpt.en,
    alternates: {
      canonical: `https://www.frataingenieros.com/pt/bimtools/manual/${manual.slug}`,
      languages: localeAlternates(`/bimtools/manual/${manual.slug}`),
    },
  };
}

export default async function ManualDetailPagePt({ params }: ManualDetailPageProps) {
  const { slug } = await params;
  const manual = getBimtoolManual(slug);
  const suites = getBimtoolsSuitesWithManuals();

  if (!manual) notFound();

  const currentSuite = suites.find((suite) => suite.id === manual.suiteId);

  return <BimtoolsManualDetailView locale="pt" manual={manual} currentSuite={currentSuite} content={content} />;
}
