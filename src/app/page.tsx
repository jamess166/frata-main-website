import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Bot,
  Building2,
  Cable,
  CheckCircle2,
  Code2,
  Compass,
  HardHat,
  Layers3,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeContactSection } from "@/components/home/contact-section";

export const metadata: Metadata = {
  title: "Consultoria BIM, Modelado BIM y Desarrollo para Revit o Tekla",
  description:
    "Frata Ingenieros desarrolla consultoria BIM, modelado BIM, coordinacion digital y aplicaciones para Revit o Tekla con foco en productividad y control tecnico.",
  alternates: {
    canonical: "https://www.frataingenieros.com/",
  },
};

const services = [
  {
    title: "Consultoria BIM",
    description:
      "Estrategia, implementacion, estandares, coordinacion y acompanamiento para empresas que necesitan ordenar su operacion BIM.",
    icon: Compass,
    href: "/services/bim-training-and-implementation",
  },
  {
    title: "Modelado BIM",
    description:
      "Modelos coordinados de arquitectura, estructuras y MEP para diseno, obra, metrados, revision y control documental.",
    icon: Layers3,
    href: "/services/comprehensive-bim-modeling",
  },
  {
    title: "Desarrollo Revit y Tekla",
    description:
      "Addins, automatizaciones y aplicaciones tecnicas para procesos repetitivos, exportaciones, parametros y validaciones.",
    icon: Code2,
    href: "/services/custom-bim-software-development",
  },
  {
    title: "Soporte BIM en obra",
    description:
      "Asistencia directa para resolver interferencias, revisar modelos y conectar la informacion digital con la ejecucion real.",
    icon: HardHat,
    href: "/services/on-site-bim-construction-support",
  },
];

const proofPoints = [
  "Implementacion y consultoria BIM para procesos reales de obra y oficina tecnica.",
  "Modelado estructural y detallado para fabricacion con foco en control y trazabilidad.",
  "Desarrollo de addins BIMtools conectado a necesidades concretas de produccion.",
  "Capacidad para construir soluciones propias sobre Revit API, IFC y flujos tecnicos.",
];

const capabilities = [
  {
    title: "Estandares y coordinacion BIM",
    description: "Modelos mas ordenados, entregables mas consistentes y menos friccion entre disciplinas.",
    icon: ShieldCheck,
  },
  {
    title: "Automatizacion de tareas repetitivas",
    description: "Menos horas perdidas en procesos manuales, exportaciones y control de parametros.",
    icon: Bot,
  },
  {
    title: "Herramientas para equipos tecnicos",
    description: "Interfaces y utilidades pensadas para usuarios de Revit, Tekla y flujos de documentacion BIM.",
    icon: Blocks,
  },
];

const process = [
  {
    step: "01",
    title: "Diagnostico tecnico",
    description: "Revisamos tu flujo BIM, puntos de dolor, software y objetivos de negocio.",
  },
  {
    step: "02",
    title: "Definicion de alcance",
    description: "Priorizamos entregables, estandares, automatizaciones o desarrollo a medida.",
  },
  {
    step: "03",
    title: "Implementacion",
    description: "Ejecutamos modelado, consultoria, soporte o desarrollo con seguimiento claro.",
  },
  {
    step: "04",
    title: "Escalado y soporte",
    description: "Documentamos, capacitamos y dejamos una base para crecer con menos dependencia manual.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Frata Ingenieros",
    url: "https://www.frataingenieros.com",
    description:
      "Consultoria BIM, modelado BIM y desarrollo de aplicaciones para Revit o Tekla.",
    knowsAbout: [
      "Consultoria BIM",
      "Modelado BIM",
      "Coordinacion BIM",
      "Desarrollo Revit API",
      "Desarrollo Tekla",
      "Automatizacion BIM",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-background">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_75%_18%,_rgba(249,115,22,0.16),_transparent_24%)]" />
          <div className="container mx-auto px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  Frata Ingenieros
                </div>
                <h1 className="mt-6 font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl xl:text-7xl">
                  Consultoria BIM, modelado y desarrollo tecnico para equipos que necesitan avanzar en serio.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Ayudamos a empresas AEC a ordenar procesos BIM, modelar con criterio y desarrollar aplicaciones para
                  Revit o Tekla que reduzcan trabajo manual y mejoren la calidad de entrega.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-full px-7">
                    <Link href="#contact">Solicitar propuesta</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                    <Link href="/bimtools">
                      Explorar BIMtools
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-border/70 bg-card/70 p-5 shadow-sm">
                    <p className="text-3xl font-bold text-primary">BIM</p>
                    <p className="mt-2 text-sm text-muted-foreground">Consultoria, estandares y coordinacion digital.</p>
                  </div>
                  <div className="rounded-3xl border border-border/70 bg-card/70 p-5 shadow-sm">
                    <p className="text-3xl font-bold text-primary">Revit</p>
                    <p className="mt-2 text-sm text-muted-foreground">Addins, automatizacion y mejora de productividad.</p>
                  </div>
                  <div className="rounded-3xl border border-border/70 bg-card/70 p-5 shadow-sm">
                    <p className="text-3xl font-bold text-primary">Tekla</p>
                    <p className="mt-2 text-sm text-muted-foreground">Desarrollo tecnico para flujos estructurales y fabricacion.</p>
                  </div>
                </div>
              </div>

              <div className="relative lg:pl-10">
                <div className="absolute -left-4 top-8 hidden h-40 w-40 rounded-full bg-accent/15 blur-3xl lg:block" />
                <div className="grid gap-5">
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/25">
                    <Image
                      src="/images/ModeladoIntegral.jpg"
                      alt="Modelado BIM integral"
                      width={1200}
                      height={900}
                      className="h-[340px] w-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Operacion BIM</p>
                      <p className="mt-2 text-2xl font-semibold">Modelos coordinados, procesos claros y entregables trazables.</p>
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Card className="rounded-[1.75rem] border-primary/15 bg-card/85">
                      <CardContent className="p-6">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <ScanSearch className="h-5 w-5" />
                        </div>
                        <p className="mt-5 text-lg font-semibold">Diagnostico y control</p>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          Revisamos parametros, flujos, exportaciones y puntos criticos antes de escalar.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="rounded-[1.75rem] border-accent/15 bg-card/85">
                      <CardContent className="p-6">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                          <Cable className="h-5 w-5" />
                        </div>
                        <p className="mt-5 text-lg font-semibold">Desarrollo conectado al negocio</p>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          No solo programamos. Construimos herramientas utiles para equipos tecnicos y operativos.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y bg-secondary/45">
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Enfoque</p>
                <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                  Donde una web BIM debe demostrar autoridad.
                </h2>
              </div>
              <div className="grid gap-4">
                {proofPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border bg-background/80 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-sm leading-7 text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Servicios</p>
            <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Capacidades claras para empresas que trabajan con BIM de forma seria.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              La propuesta debe leerse desde negocio, no desde relleno. Estas son las lineas que hoy conviene reforzar
              para posicionar mejor tu marca y convertir mejor.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group rounded-[2rem] border-border/70 bg-card/75 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                      <CardDescription className="mt-3 text-sm leading-7 text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="px-0">
                    <Link href={service.href}>
                      Ver detalle del servicio
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="overflow-hidden border-y bg-slate-950 text-white">
          <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Software BIM</p>
              <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Desarrollo de aplicaciones para Revit o Tekla con criterio tecnico.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Esta linea es una ventaja competitiva real. No todas las consultoras pueden resolver problemas de
                produccion con software propio, y esa capacidad deberia ocupar un lugar central en tu web.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-white/90">
                  <Link href="/services/custom-bim-software-development">Explorar desarrollo BIM</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10">
                  <Link href="/bimtools">Ver BIMtools</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {capabilities.map((item) => (
                <Card key={item.title} className="rounded-[1.75rem] border-white/10 bg-white/5 text-white">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 sm:col-span-2">
                <Image
                  src="/images/softwareDeveloper.png"
                  alt="Desarrollo BIM para Revit o Tekla"
                  width={1200}
                  height={700}
                  className="h-64 w-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Metodo</p>
              <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Una forma de trabajar que convierte BIM en capacidad operativa.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Cuando un cliente llega a tu web, necesita entender rapido como trabajas y por que eso reduce riesgo.
              </p>
            </div>

            <div className="grid gap-5">
              {process.map((item) => (
                <div key={item.step} className="grid gap-4 rounded-[1.75rem] border bg-card/75 p-6 sm:grid-cols-[88px_1fr]">
                  <div className="font-headline text-4xl font-bold text-primary">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y bg-secondary/40">
          <div className="container mx-auto grid gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">BIMtools</p>
              <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Tu producto ya puede reforzar la venta de tus servicios.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                La nueva seccion de BIMtools y manuales ya conversa con tus addins reales. Eso te permite mostrar
                experiencia de producto, automatizacion y know-how tecnico dentro de la misma web comercial.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-[1.75rem] border bg-background/80 p-5">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-primary" />
                  <p className="font-medium">Mejor relato comercial</p>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Tus herramientas ya no se ven como extras sueltos, sino como parte de una oferta BIM madura.
                </p>
              </div>
              <div className="rounded-[1.75rem] border bg-background/80 p-5">
                <div className="flex items-center gap-3">
                  <Code2 className="h-5 w-5 text-primary" />
                  <p className="font-medium">Mas SEO long-tail</p>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Cada addin documentado abre espacio para palabras clave tecnicas vinculadas a Revit y productividad BIM.
                </p>
              </div>
              <Button asChild size="lg" className="mt-2 rounded-full px-7">
                <Link href="/bimtools/manual">
                  Explorar manuales BIMtools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <HomeContactSection />
      </div>
    </>
  );
}
