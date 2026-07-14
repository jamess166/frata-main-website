import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";
import { serviceContent, type ServiceSlug } from "@/lib/service-content";
import { buildServiceSchema } from "@/lib/schema";

interface ServicePageProps {
  params: Promise<{
    slug: ServiceSlug;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceContent).map((slug) => ({
    slug,
  }));
}

const META_TITLE_OVERRIDES: Partial<Record<ServiceSlug, string>> = {
  "custom-bim-software-development": "Desarrollo de Addins Revit a Medida",
  "bim-training-and-implementation": "Implementación BIM para Empresas AEC",
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceContent[slug];

  if (!service) {
    return { title: "Servicio no encontrado" };
  }

  const pageTitle = META_TITLE_OVERRIDES[slug] ?? service.shortTitle;

  return {
    title: pageTitle,
    description: service.description,
    alternates: {
      canonical: `https://www.frataingenieros.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${pageTitle} | Frata Ingenieros`,
      description: service.description,
      url: `https://www.frataingenieros.com/services/${service.slug}`,
      siteName: "Frata Ingenieros",
      locale: "es_PE",
      type: "website",
      images: [
        {
          url: "https://www.frataingenieros.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${pageTitle} - Frata Ingenieros`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | Frata Ingenieros`,
      description: service.description,
      images: ["https://www.frataingenieros.com/images/og-image.jpg"],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceContent[slug];

  if (!service) notFound();

  const jsonLd = buildServiceSchema(
    service.title,
    service.description,
    `https://www.frataingenieros.com/services/${slug}`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a servicios
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow className="mt-10">Servicio BIM</Eyebrow>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="mt-6 max-w-4xl font-headline text-display-lg font-black text-foreground">
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">{service.intro}</p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                <Link href="/#contact">Solicitar propuesta</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
              >
                <Link href="/bimtools">
                  Ver BIMtools
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={300}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={1600}
                height={900}
                priority
                className="h-[300px] w-full object-cover grayscale sm:h-[400px] lg:h-[480px]"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Pilares ──────────────────────────────────────────── */}
      <section className="mt-24 border-t border-border lg:mt-32">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Pilares</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              Qué resuelve este servicio.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {service.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 80}>
                <div className="border-t border-border pt-6">
                  <h3 className="font-headline text-xl font-bold tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Método ───────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>Método</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                Cómo trabajamos este tipo de encargo.
              </h2>
            </Reveal>
          </div>
          <div>
            {service.process.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <NumberedRow
                  index={`0${index + 1}`}
                  title={item.title}
                  description={item.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resultados ───────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Resultados</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              Impacto que puedes esperar.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {service.outcomes.map((outcome, i) => (
              <Reveal key={outcome} delay={i * 60}>
                <div className="border-t border-border pt-6">
                  <p className="text-sm leading-7 text-foreground/80">{outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <h2 className="max-w-4xl font-headline text-display-lg font-bold text-foreground">
              ¿Este es el problema que necesitas resolver?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Button asChild size="lg" className="mt-10 rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
              <Link href="/#contact">Hablar con Frata</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
