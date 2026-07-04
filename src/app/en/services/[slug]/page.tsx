import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceContentEn } from "@/lib/service-content-en";
import type { ServiceSlug } from "@/lib/service-content";

interface ServicePageProps {
  params: Promise<{
    slug: ServiceSlug;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceContentEn).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceContentEn[slug];
  if (!service) return { title: "Service not found" };
  return {
    title: service.shortTitle,
    description: service.description,
    alternates: {
      canonical: `https://www.frataingenieros.com/en/services/${service.slug}`,
    },
  };
}

export default async function ServicePageEn({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceContentEn[slug];
  if (!service) notFound();

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-blueprint-grid opacity-60 [mask-image:linear-gradient(180deg,black,transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsl(var(--primary)/0.16),_transparent_45%)]" />
        <div className="container mx-auto px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <Link href="/en/#services" className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </Link>

          <div className="relative z-10 mt-8 grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">BIM service</p>
              <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{service.title}</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{service.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-md px-7">
                  <Link href="/en/#contact">Request proposal</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-md px-7">
                  <Link href="/en/bimtools">
                    View BIMtools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/20">
              <Image src={service.image} alt={service.imageAlt} width={1200} height={850} className="h-[360px] w-full object-cover opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">{service.shortTitle}</p>
                <p className="mt-2 text-lg text-slate-200">{service.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Pillars</p>
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">What this service solves</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {service.pillars.map((pillar) => (
            <Card key={pillar.title} className="rounded-xl border-border/70 bg-card/75">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-secondary/45">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Method</p>
              <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">How we execute this kind of work</h2>
            </div>
            <div className="grid gap-5">
              {service.process.map((item, index) => (
                <div key={item.title} className="grid gap-4 rounded-xl border bg-background/80 p-6 sm:grid-cols-[72px_1fr]">
                  <div className="font-headline text-3xl font-bold text-primary">{`0${index + 1}`}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Outcomes</p>
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">Impact a client should expect</h2>
        </div>
        <div className="mt-10 grid gap-4">
          {service.outcomes.map((outcome) => (
            <div key={outcome} className="flex items-start gap-3 rounded-2xl border bg-card/75 p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <p className="text-sm leading-7 text-muted-foreground">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-[linear-gradient(180deg,_transparent,_hsl(var(--primary)/0.05))]">
        <div className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            If your BIM operation needs stronger processes or custom software capability, this is the next step.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We can support you through consulting, modeling, on-site assistance or technical development for Revit and Tekla.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-md px-7">
            <Link href="/en/#contact">Talk to Frata</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
