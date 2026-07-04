import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceContent } from "@/lib/service-content";

export const metadata: Metadata = {
  title: "Servicios BIM",
  description:
    "Consultoría BIM, modelado, equipos remotos, soporte en obra y desarrollo de addins para Revit y Tekla. Servicios de Frata Ingenieros para empresas AEC en Perú y LATAM.",
  alternates: {
    canonical: "https://www.frataingenieros.com/services",
  },
  openGraph: {
    title: "Servicios BIM | Frata Ingenieros",
    description:
      "Consultoría BIM, modelado, equipos remotos, soporte en obra y desarrollo de addins para Revit y Tekla.",
    url: "https://www.frataingenieros.com/services",
    siteName: "Frata Ingenieros",
    locale: "es_PE",
    type: "website",
    images: [{ url: "https://www.frataingenieros.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

const PRICING = [
  {
    name: "Diagnóstico BIM",
    price: "desde USD 500",
    description:
      "Revisamos tu operación BIM, identificamos brechas y entregamos un plan de acción claro con prioridades.",
    cta: "Solicitar diagnóstico",
    href: "/#contact",
    highlight: false,
  },
  {
    name: "Implementación BIM",
    price: "A consultar",
    description:
      "Estrategia, estandarización, capacitación y acompañamiento para consolidar BIM en tu empresa de forma sostenible.",
    cta: "Hablar con Frata",
    href: "/#contact",
    highlight: true,
  },
  {
    name: "Addin a medida",
    price: "desde USD 1,500",
    description:
      "Desarrollo de herramientas personalizadas para Revit o Tekla que automatizan flujos técnicos y reducen trabajo manual.",
    cta: "Solicitar propuesta",
    href: "/#contact",
    highlight: false,
  },
];

export default function ServicesPage() {
  const services = Object.values(serviceContent);

  return (
    <div className="bg-background">
      {/* hero */}
      <section className="relative overflow-hidden border-b hero-gradient-animated">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsl(var(--primary)/0.12),_transparent_40%)]" />
        <div className="container mx-auto px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Servicios</p>
            <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Capacidades BIM para empresas que operan con criterio técnico.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Desde consultoría y modelado hasta desarrollo de software a medida. Cada servicio está diseñado
              para resolver un problema real en la operación BIM de tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* service list */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.slug}
              className="group rounded-2xl border-border/70 bg-card/75 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle className="font-headline text-xl">{service.shortTitle}</CardTitle>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="px-0">
                  <Link href={`/services/${service.slug}`}>
                    Ver detalle
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* pricing indicative */}
      <section className="border-t bg-secondary/30">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Inversión</p>
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Cuánto cuesta trabajar con Frata?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Los precios son referenciales. Cada proyecto se cotiza según alcance, complejidad y duración.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-3xl border p-8 ${
                  plan.highlight
                    ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border/70 bg-card/75"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{plan.name}</p>
                <p className="mt-3 font-headline text-3xl font-bold">{plan.price}</p>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{plan.description}</p>
                <Button
                  asChild
                  className={`mt-8 rounded-full ${plan.highlight ? "" : "variant-outline"}`}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            * Precios en USD. Los valores indicados son de referencia; cada propuesta se elabora según el alcance específico del proyecto.
          </p>
        </div>
      </section>

      {/* outcomes */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Equipos BIM más ordenados y con menos fricción operativa.",
              "Modelos coordinados listos para documentar, revisar y entregar.",
              "Software propio que automatiza tareas repetitivas de alto volumen.",
              "Procesos BIM que se mantienen aunque cambie el equipo.",
              "Entregables técnicos alineados al cliente y al proyecto real.",
              "Capacidad de producción que crece sin depender de un solo recurso.",
            ].map((outcome) => (
              <div key={outcome} className="flex items-start gap-3 rounded-2xl border bg-card/75 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-sm leading-7 text-muted-foreground">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
