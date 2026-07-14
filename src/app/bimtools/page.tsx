import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { HashScrollHandler } from "@/components/layout/hash-scroll-handler";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { Stat } from "@/components/site/stat";
import { getBimtoolsOverview, getBimtoolsSuitesWithManuals } from "@/lib/bimtools";
import { buildSoftwareApplicationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "BIMtools — Suite de Addins para Revit | Frata Ingenieros",
  },
  description:
    "BIMtools es la suite de addins para Revit de Frata Ingenieros: 21 herramientas para exportación, navegación, estructuras, parámetros y automatización BIM. 7 premium a USD 20/mes.",
  keywords: [
    "addins revit",
    "plugins revit",
    "automatizacion bim",
    "consultoria bim",
    "desarrollo revit api",
    "manuales revit",
    "herramientas bim",
    "BIMtools",
    "suite revit",
  ],
  alternates: {
    canonical: "https://www.frataingenieros.com/bimtools",
  },
  openGraph: {
    title: "BIMtools — Suite de Addins para Revit | Frata Ingenieros",
    description:
      "21 addins para Revit, 7 premium a USD 20/mes. Exportación, navegación, estructuras, parámetros y automatización de flujos BIM.",
    url: "https://www.frataingenieros.com/bimtools",
    siteName: "Frata Ingenieros",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "https://www.frataingenieros.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BIMtools - Suite de Addins para Revit por Frata Ingenieros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIMtools — Suite de Addins para Revit | Frata Ingenieros",
    description:
      "21 addins para Revit, 7 premium a USD 20/mes. Exportación, navegación, estructuras, parámetros y automatización de flujos BIM.",
    images: ["https://www.frataingenieros.com/images/og-image.jpg"],
  },
};

const suites = getBimtoolsSuitesWithManuals();
const overview = getBimtoolsOverview();

export default function BimtoolsPage() {
  const jsonLd = buildSoftwareApplicationSchema(overview.totalAddins, overview.premiumAddins);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HashScrollHandler />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
          <Reveal>
            <Eyebrow>BIMtools by Frata</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-headline text-display-lg font-black text-foreground">
              Addins para Revit hechos en producción, no en laboratorio.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Herramientas que aceleran tareas repetitivas, ordenan la información del modelo
              y mejoran la productividad de equipos que trabajan en Revit todos los días.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                <Link href="/bimtools/suscripcion">Suscripción premium</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
              >
                <Link href="/download">Descargar instalador</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
              <Stat value={overview.totalAddins} label="Addins documentados" />
              <Stat value={suites.length} label="Áreas de trabajo" />
              <Stat value={overview.premiumAddins} label="Herramientas premium" />
              <Stat value={overview.freeAddins} label="Herramientas gratis" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Suites ───────────────────────────────────────────── */}
      <section id="suites" className="scroll-mt-24 border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Suites</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              Elige una suite y entra a sus addins.
            </h2>
          </Reveal>

          <div className="mt-16">
            {suites.map((suite, i) => (
              <Reveal key={suite.id} delay={i * 60}>
                <Link href={`/bimtools/suite/${suite.id}`} className="block">
                  <div className="group grid gap-6 border-t border-border py-10 md:grid-cols-[90px_1fr_auto] md:gap-8 lg:py-12">
                    <span className="font-code text-sm text-muted-foreground transition-colors group-hover:text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-headline text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                        {suite.label}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                        {suite.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                        {suite.manuals.map((manual) => (
                          <span
                            key={manual.slug}
                            className="inline-flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <AddinIcon icon={manual.icon} name={manual.addinName} size="sm" />
                            {manual.title.es.split(" - ")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary md:flex">
                      {suite.manuals.length} addins
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gratis vs Premium ────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Gratis vs Premium</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              Empieza gratis. Escala cuando lo necesites.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col bg-background p-8 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Gratis · Sin costo
                </p>
                <h3 className="mt-4 font-headline text-2xl font-bold text-foreground sm:text-3xl">
                  Explora BIMtools
                </h3>
                <ul className="mt-8 flex-1 space-y-4 text-sm leading-7 text-muted-foreground">
                  <li className="border-t border-border pt-4">Acceso a addins gratuitos dentro de la suite</li>
                  <li className="border-t border-border pt-4">Instalación y exploración del entorno BIMtools</li>
                  <li className="border-t border-border pt-4">Revisión de manuales y funciones</li>
                  <li className="border-t border-border pt-4">Base para decidir si Premium encaja con tu equipo</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="mt-10 w-full rounded-none border-border text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary sm:w-auto"
                >
                  <Link href="/download">Descargar prueba</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={100} className="h-full">
              <div className="flex h-full flex-col bg-secondary p-8 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Premium · USD 20/mes o USD 100/año
                </p>
                <h3 className="mt-4 font-headline text-2xl font-bold text-foreground sm:text-3xl">
                  Todos los addins premium
                </h3>
                <ul className="mt-8 flex-1 space-y-4 text-sm leading-7 text-muted-foreground">
                  <li className="border-t border-border pt-4">Acceso a todos los addins premium con una sola suscripción</li>
                  <li className="border-t border-border pt-4">Automatización avanzada para modelado, gestión y estructuras</li>
                  <li className="border-t border-border pt-4">Mayor velocidad en tareas repetitivas y control del modelo</li>
                  <li className="border-t border-border pt-4">Activación de acceso premium después del pago</li>
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                    <Link href="/bimtools/suscripcion">Ver suscripción premium</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-none border-border text-xs font-medium uppercase tracking-[0.14em] hover:bg-background"
                  >
                    <Link href="/#contact">Consultar activación</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
