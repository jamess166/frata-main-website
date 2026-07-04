import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CaseStudyCard } from "@/components/cases/case-study-card";
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
    <div className="bg-background">
      <section className="relative overflow-hidden border-b hero-gradient-animated">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsl(var(--primary)/0.12),_transparent_40%)]" />
        <div className="container mx-auto px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
          <div className="mt-6 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Casos de éxito
            </p>
            <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Proyectos reales con resultados concretos.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Proyectos de consultoría BIM, modelado y desarrollo de addins implementados por Frata
              Ingenieros en infraestructura, edificaciones e interoperabilidad de plataformas.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} locale="es" />
          ))}
        </div>
      </section>
    </div>
  );
}
