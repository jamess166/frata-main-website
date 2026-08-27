import type { Metadata } from "next";
import { BimtoolsManualIndexView } from "@/components/pages/bimtools-manual-index-view";
import { bimtoolsManualIndexContent } from "@/content/bimtools-manual-index";
import { localeAlternates } from "@/lib/locale";

const content = bimtoolsManualIndexContent.ru;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "https://www.frataingenieros.com/ru/bimtools/manual",
    languages: localeAlternates("/bimtools/manual"),
  },
};

export default function ManualPageRu() {
  return <BimtoolsManualIndexView locale="ru" content={content} />;
}
