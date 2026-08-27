import type { Metadata } from "next";
import { AboutView } from "@/components/pages/about-view";
import { aboutContent } from "@/content/about";
import { localeAlternates } from "@/lib/locale";

const content = aboutContent.en;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "https://www.frataingenieros.com/en/about",
    languages: localeAlternates("/about"),
  },
};

export default function AboutPageEn() {
  return <AboutView locale="en" content={content} />;
}
