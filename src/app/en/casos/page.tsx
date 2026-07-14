import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/cases/case-study-card";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
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
    <>
      <section>
        <div className="container mx-auto px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
          <Reveal>
            <Eyebrow>Case studies</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-headline text-display-lg font-black text-foreground">
              Real projects.
              <br />
              <span className="text-muted-foreground">Concrete results.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              BIM consulting, modeling and addin development across infrastructure,
              buildings and platform interoperability.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 60}>
              <CaseStudyCard caseStudy={cs} index={String(i + 1).padStart(2, "0")} locale="en" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
