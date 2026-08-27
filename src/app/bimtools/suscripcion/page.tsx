import type { Metadata } from "next";
import { BimtoolsSubscriptionView } from "@/components/pages/bimtools-subscription-view";
import { subscriptionContent } from "@/content/bimtools-subscription";
import { localeAlternates } from "@/lib/locale";

const content = subscriptionContent.es;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "https://www.frataingenieros.com/bimtools/suscripcion",
    languages: localeAlternates("/bimtools/suscripcion"),
  },
};

export default function BimtoolsSubscriptionPage() {
  return <BimtoolsSubscriptionView locale="es" content={content} />;
}
