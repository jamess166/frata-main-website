import type { Metadata } from "next";
import { BimtoolsManualIndexView } from "@/components/pages/bimtools-manual-index-view";
import { bimtoolsManualIndexContent } from "@/content/bimtools-manual-index";
import { localeAlternates } from "@/lib/locale";

const content = bimtoolsManualIndexContent.pt;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "https://www.frataingenieros.com/pt/bimtools/manual",
    languages: localeAlternates("/bimtools/manual"),
  },
};

export default function ManualPagePt() {
  return <BimtoolsManualIndexView locale="pt" content={content} />;
}
