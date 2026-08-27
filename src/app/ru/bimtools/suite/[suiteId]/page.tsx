import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BimtoolsSuiteView } from "@/components/pages/bimtools-suite-view";
import { bimtoolsSuiteContent } from "@/content/bimtools-suite";
import { getBimtoolsSuiteWithManuals, getBimtoolsSuitesWithManuals } from "@/lib/bimtools";
import { localeAlternates } from "@/lib/locale";

const content = bimtoolsSuiteContent.ru;

interface SuitePageProps {
  params: Promise<{
    suiteId: string;
  }>;
}

export async function generateStaticParams() {
  return getBimtoolsSuitesWithManuals().map((suite) => ({ suiteId: suite.id }));
}

export async function generateMetadata({ params }: SuitePageProps): Promise<Metadata> {
  const { suiteId } = await params;
  const suite = getBimtoolsSuiteWithManuals(suiteId);

  if (!suite) {
    return { title: content.notFoundTitle };
  }

  return {
    title: `${suite.label} | BIMtools`,
    description: suite.description.ru,
    alternates: {
      canonical: `https://www.frataingenieros.com/ru/bimtools/suite/${suite.id}`,
      languages: localeAlternates(`/bimtools/suite/${suite.id}`),
    },
  };
}

export default async function BimtoolsSuitePageRu({ params }: SuitePageProps) {
  const { suiteId } = await params;
  const suite = getBimtoolsSuiteWithManuals(suiteId);

  if (!suite) notFound();

  return <BimtoolsSuiteView locale="ru" suite={suite} content={content} />;
}
