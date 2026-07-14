import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Frata Ingenieros, una firma orientada a consultoria BIM, modelado BIM y desarrollo tecnico para Revit o Tekla.",
  alternates: {
    canonical: "https://www.frataingenieros.com/about",
  },
};

const values = [
  {
    index: "01",
    title: "Pensamiento técnico",
    description: "Decidimos desde la lógica de producción, coordinación y control de información.",
  },
  {
    index: "02",
    title: "Capacidad de ejecución",
    description: "No nos quedamos en discurso BIM: modelamos, coordinamos y desarrollamos herramientas útiles.",
  },
  {
    index: "03",
    title: "Cercanía con el problema real",
    description: "Trabajamos desde necesidades concretas de oficina técnica, obra, fabricación y software.",
  },
];

const timeline = [
  {
    year: "Origen",
    title: "Nacimos desde la práctica BIM",
    description:
      "Frata surge de la necesidad de resolver problemas reales de modelado, coordinación y producción en proyectos técnicos.",
  },
  {
    year: "Expansión",
    title: "De servicios a soluciones",
    description:
      "Evolucionamos del soporte BIM tradicional hacia una oferta que combina consultoría, modelado y automatización.",
  },
  {
    year: "Hoy",
    title: "Ingeniería con software propio",
    description:
      "BIMtools y el desarrollo para Revit y Tekla nos definen: no solo implementamos BIM, construimos capacidad técnica.",
  },
];

const strengths = [
  "Consultoría BIM con foco operativo, no solo documental.",
  "Modelado BIM integral para arquitectura, estructura y MEP.",
  "Addins y automatizaciones propias para Revit y Tekla.",
  "Acompañamiento a equipos en oficina técnica, obra y fabricación.",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
          <Reveal>
            <Eyebrow>Nosotros</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-headline text-display-lg font-black text-foreground">
              Ingeniería BIM con capacidad real de desarrollo.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Somos una firma peruana que conecta consultoría BIM, modelado, coordinación y
              software técnico. Nuestro diferencial: las herramientas que ofrecemos las
              construimos y las usamos en producción propia.
            </p>
          </Reveal>
        </div>
        <Reveal delay={300}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <Image
                src="/images/quienesSomos.webp"
                alt="Equipo de Frata Ingenieros"
                width={1600}
                height={900}
                priority
                className="h-[320px] w-full object-cover grayscale sm:h-[420px] lg:h-[520px]"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Valores ──────────────────────────────────────────── */}
      <section className="border-t border-border mt-24 lg:mt-32">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Cómo trabajamos</Eyebrow>
          </Reveal>
          <div className="mt-12">
            {values.map((value, i) => (
              <Reveal key={value.index} delay={i * 80}>
                <NumberedRow
                  index={value.index}
                  title={value.title}
                  description={value.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trayectoria ──────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>Trayectoria</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                De la práctica al producto.
              </h2>
            </Reveal>
          </div>
          <div>
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="grid gap-3 border-t border-border py-8 sm:grid-cols-[120px_1fr] sm:gap-8 lg:py-10">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                    {item.year}
                  </p>
                  <div>
                    <h3 className="font-headline text-2xl font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fortalezas ───────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
          <Reveal>
            <div className="overflow-hidden">
              <Image
                src="/images/equipoBIM2.webp"
                alt="Capacidades BIM de Frata Ingenieros"
                width={1200}
                height={900}
                className="h-80 w-full object-cover grayscale lg:h-[420px]"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Fortalezas</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                BIM que se sostiene en obra, no en diapositivas.
              </h2>
            </Reveal>
            <div className="mt-10">
              {strengths.map((item, i) => (
                <Reveal key={item} delay={i * 80}>
                  <div className="border-t border-border py-5">
                    <p className="text-sm leading-7 text-foreground/80">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <h2 className="max-w-4xl font-headline text-display-lg font-bold text-foreground">
              ¿Tu operación BIM necesita un equipo técnico de verdad?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                <Link href="/#contact">Hablemos</Link>
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
      </section>
    </>
  );
}
