import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Blocks, Building2, Code2, Compass, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Nosotros | Frata Ingenieros",
  description:
    "Conoce a Frata Ingenieros, una firma orientada a consultoria BIM, modelado BIM y desarrollo tecnico para Revit o Tekla.",
  alternates: {
    canonical: "https://www.frataingenieros.com/about",
  },
};

const values = [
  {
    title: "Pensamiento tecnico",
    description: "Tomamos decisiones desde la logica de produccion, coordinacion y control de informacion.",
    icon: Compass,
  },
  {
    title: "Capacidad de ejecucion",
    description: "No nos quedamos en discurso BIM; modelamos, coordinamos y desarrollamos herramientas utiles.",
    icon: Blocks,
  },
  {
    title: "Cercania con el problema real",
    description: "Trabajamos desde necesidades concretas de oficina tecnica, obra, fabricacion y software.",
    icon: Users2,
  },
];

const timeline = [
  {
    year: "Origen",
    title: "Nacemos desde la practica BIM",
    description:
      "Frata surge desde la necesidad de resolver problemas reales de modelado, coordinacion y produccion en proyectos tecnicos.",
  },
  {
    year: "Expansion",
    title: "De servicios a soluciones",
    description:
      "La firma evoluciona desde soporte BIM tradicional hacia una oferta que combina consultoria, modelado y automatizacion.",
  },
  {
    year: "Hoy",
    title: "Ingenieria con software propio",
    description:
      "BIMtools y el desarrollo para Revit/Tekla refuerzan una posicion clara: no solo implementamos BIM, tambien construimos capacidad tecnica.",
  },
];

const strengths = [
  "Consultoria BIM con foco operativo y no solo documental.",
  "Modelado BIM integral para arquitectura, estructura y MEP.",
  "Desarrollo de addins y automatizaciones para Revit o Tekla.",
  "Capacidad para acompañar equipos en oficina tecnica, obra y fabricacion.",
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b hero-gradient-animated">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsl(var(--primary)/0.14),_transparent_32%),radial-gradient(circle_at_80%_16%,_hsl(var(--accent)/0.12),_transparent_22%)]" />
        <div className="container mx-auto px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="relative z-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Nosotros</p>
              <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Una firma BIM que combina criterio de ingenieria con capacidad real de desarrollo.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Frata Ingenieros no se posiciona solo como consultora. Nuestra fortaleza esta en conectar consultoria
                BIM, modelado, coordinacion y software tecnico para que los clientes puedan operar mejor.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="px-7">
                  <Link href="/#contact">Hablar con Frata</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-7">
                  <Link href="/bimtools">
                    Ver BIMtools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/20">
              <Image
                src="/images/quienesSomos.webp"
                alt="Equipo de Frata Ingenieros"
                width={1200}
                height={900}
                className="h-[360px] w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Frata Ingenieros</p>
                <p className="mt-2 text-lg text-slate-200">
                  Consultoria BIM, modelado y desarrollo tecnico para equipos que necesitan ejecutar mejor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="rounded-xl border-border/70 bg-card/75">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-2xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-secondary/45">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Trayectoria</p>
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Como hemos ido afinando nuestra posicion
            </h2>
          </div>
          <div className="grid gap-5">
            {timeline.map((item) => (
              <div key={item.title} className="grid gap-4 rounded-xl border bg-background/80 p-6 sm:grid-cols-[120px_1fr]">
                <div className="font-headline text-2xl font-bold text-primary">{item.year}</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl border shadow-xl">
            <Image
              src="/images/equipoBIM2.webp"
              alt="Capacidades BIM de Frata Ingenieros"
              width={1200}
              height={900}
              className="h-[380px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Fortalezas</p>
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Donde Frata puede diferenciarse de una consultora BIM promedio
            </h2>
            <div className="mt-8 grid gap-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border bg-card/70 p-4">
                  <Building2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y bg-slate-950 text-white">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Posicionamiento</p>
            <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              El desarrollo para Revit o Tekla debe ser parte central de tu identidad de marca.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Muchas firmas hablan de BIM. Pocas pueden demostrar que resuelven problemas tecnicos con software propio.
              Esa es una ventaja fuerte para tu narrativa comercial y para SEO.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Card className="rounded-xl border-white/10 bg-white/5 text-white">
              <CardContent className="p-6">
                <Code2 className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-xl font-semibold">Software propio</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  El producto refuerza la autoridad tecnica y la capacidad de automatizacion.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-xl border-white/10 bg-white/5 text-white">
              <CardContent className="p-6">
                <Blocks className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-xl font-semibold">Servicios mas creibles</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  La consultoria y el modelado ganan peso cuando se apoyan en herramientas reales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">
          Si quieres una firma mas moderna, la web tiene que mostrar esta mezcla de BIM y desarrollo con mucha mas claridad.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Esta pagina ya empuja esa direccion. El siguiente paso natural seria aplicar el mismo criterio a casos de
          exito, testimonios y paginas individuales de producto.
        </p>
        <Button asChild size="lg" className="mt-8 px-7">
          <Link href="/#contact">Solicitar reunion</Link>
        </Button>
      </section>
    </div>
  );
}
