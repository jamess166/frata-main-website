import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/cases/case-study-card";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Casos de Éxito BIM",
  description:
    "Proyectos reales de consultoría BIM, modelado y desarrollo de addins para Revit realizados por Frata Ingenieros en Perú y LATAM.",
  alternates: {
    canonical: "https://www.frataingenieros.com/casos",
  },
  openGraph: {
    title: "Casos de Éxito BIM | Frata Ingenieros",
    description:
      "Proyectos reales de consultoría BIM, modelado y desarrollo de addins para Revit realizados por Frata Ingenieros.",
    url: "https://www.frataingenieros.com/casos",
    siteName: "Frata Ingenieros",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "https://www.frataingenieros.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casos de Éxito BIM - Frata Ingenieros",
      },
    ],
  },
};

export default function CasosPage() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
          <Reveal>
            <Eyebrow>Casos de éxito</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-headline text-display-lg font-black text-foreground">
              Proyectos reales.
              <br />
              <span className="text-muted-foreground">Resultados concretos.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Consultoría BIM, modelado y desarrollo de addins en infraestructura,
              edificaciones e interoperabilidad de plataformas.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 60}>
              <CaseStudyCard caseStudy={cs} index={String(i + 1).padStart(2, "0")} locale="es" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
