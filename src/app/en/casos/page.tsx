import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CaseStudyCard } from "@/components/cases/case-study-card";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "BIM Case Studies",
  description:
    "Real BIM consulting, modeling and Revit addin development projects delivered by Frata Ingenieros in Peru and LATAM.",
  alternates: {
    canonical: "https://www.frataingenieros.com/en/casos",
  },
  openGraph: {
    title: "BIM Case Studies | Frata Ingenieros",
    description:
      "Real BIM consulting, modeling and Revit addin development projects delivered by Frata Ingenieros.",
    url: "https://www.frataingenieros.com/en/casos",
    siteName: "Frata Ingenieros",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.frataingenieros.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BIM Case Studies - Frata Ingenieros",
      },
    ],
  },
};

export default function CasosEnPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b hero-gradient-animated">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsl(var(--primary)/0.12),_transparent_40%)]" />
        <div className="container mx-auto px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
          <Link
            href="/en"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <div className="mt-6 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Case studies
            </p>
            <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Real projects, concrete results.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              BIM consulting, modeling and addin development projects delivered by Frata Ingenieros
              across infrastructure, buildings and platform interoperability.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} locale="en" />
          ))}
        </div>
      </section>
    </div>
  );
}
