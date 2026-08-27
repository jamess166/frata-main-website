import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BimtoolsSuiteView } from "@/components/pages/bimtools-suite-view";
import { bimtoolsSuiteContent } from "@/content/bimtools-suite";
import { getBimtoolsSuiteWithManuals, getBimtoolsSuitesWithManuals } from "@/lib/bimtools";
import { localeAlternates } from "@/lib/locale";

const content = bimtoolsSuiteContent.pt;

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
    description: suite.description.pt,
    alternates: {
      canonical: `https://www.frataingenieros.com/pt/bimtools/suite/${suite.id}`,
      languages: localeAlternates(`/bimtools/suite/${suite.id}`),
    },
  };
}

export default async function BimtoolsSuitePagePt({ params }: SuitePageProps) {
  const { suiteId } = await params;
  const suite = getBimtoolsSuiteWithManuals(suiteId);

  if (!suite) notFound();

  return <BimtoolsSuiteView locale="pt" suite={suite} content={content} />;
}
