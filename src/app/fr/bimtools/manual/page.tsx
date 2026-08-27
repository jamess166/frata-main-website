import type { Metadata } from "next";
import { BimtoolsManualIndexView } from "@/components/pages/bimtools-manual-index-view";
import { bimtoolsManualIndexContent } from "@/content/bimtools-manual-index";
import { localeAlternates } from "@/lib/locale";

const content = bimtoolsManualIndexContent.fr;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "https://www.frataingenieros.com/fr/bimtools/manual",
    languages: localeAlternates("/bimtools/manual"),
  },
};

export default function ManualPageFr() {
  return <BimtoolsManualIndexView locale="fr" content={content} />;
}
