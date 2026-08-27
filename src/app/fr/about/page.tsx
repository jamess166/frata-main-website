import type { Metadata } from "next";
import { AboutView } from "@/components/pages/about-view";
import { aboutContent } from "@/content/about";
import { localeAlternates } from "@/lib/locale";

const content = aboutContent.fr;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "https://www.frataingenieros.com/fr/about",
    languages: localeAlternates("/about"),
  },
};

export default function AboutPageFr() {
  return <AboutView locale="fr" content={content} />;
}
