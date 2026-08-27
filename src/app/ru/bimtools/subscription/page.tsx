import type { Metadata } from "next";
import { BimtoolsSubscriptionView } from "@/components/pages/bimtools-subscription-view";
import { subscriptionContent } from "@/content/bimtools-subscription";
import { localeAlternates } from "@/lib/locale";

const content = subscriptionContent.ru;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "https://www.frataingenieros.com/ru/bimtools/subscription",
    languages: localeAlternates("/bimtools/suscripcion"),
  },
};

export default function BimtoolsSubscriptionPageRu() {
  return <BimtoolsSubscriptionView locale="ru" content={content} />;
}
