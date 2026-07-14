import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";
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

const outcomes = [
  "Equipos BIM más ordenados y con menos fricción operativa.",
  "Modelos coordinados listos para documentar, revisar y entregar.",
  "Software propio que automatiza tareas repetitivas de alto volumen.",
  "Procesos BIM que se mantienen aunque cambie el equipo.",
  "Entregables técnicos alineados al cliente y al proyecto real.",
  "Capacidad de producción que crece sin depender de un solo recurso.",
];

export default function ServicesPage() {
  const services = Object.values(serviceContent);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-headline text-display-lg font-black text-foreground">
              Nuestras especialidades.
              <br />
              <span className="text-muted-foreground">Lo único que ofrecemos.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Desde consultoría y modelado hasta software a medida. Cada servicio resuelve
              un problema real en la operación BIM de tu empresa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Índice 01–06 ─────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <NumberedRow
                index={String(i + 1).padStart(2, "0")}
                title={service.shortTitle}
                description={service.description}
                href={`/services/${service.slug}`}
                cta="Ver servicio"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Inversión ────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Inversión</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              ¿Cuánto cuesta trabajar con Frata?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              Los precios son referenciales. Cada proyecto se cotiza según alcance,
              complejidad y duración.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-3">
            {PRICING.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 80} className="h-full">
                <div className={`flex h-full flex-col bg-background p-8 lg:p-10 ${plan.highlight ? "bg-secondary" : ""}`}>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{plan.name}</p>
                  <p className="mt-4 font-headline text-3xl font-bold text-foreground">{plan.price}</p>
                  <p className="mt-5 flex-1 text-sm leading-7 text-muted-foreground">{plan.description}</p>
                  <Button
                    asChild
                    className="mt-8 w-full rounded-none text-xs font-medium uppercase tracking-[0.14em]"
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            * Precios en USD. Los valores indicados son de referencia; cada propuesta se elabora según el alcance específico del proyecto.
          </p>
        </div>
      </section>

      {/* ── Resultados ───────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Resultados</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome, i) => (
              <Reveal key={outcome} delay={i * 60}>
                <div className="border-t border-border pt-6">
                  <p className="text-sm leading-7 text-foreground/80">{outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
