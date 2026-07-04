import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, Download, Layers3, Mail, Sparkles, Star } from "lucide-react";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { HashScrollHandler } from "@/components/layout/hash-scroll-handler";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
const activationEmail =
  suites.flatMap((suite) => suite.manuals).find((manual) => manual.commerce.activationEmail)?.commerce.activationEmail ||
  "info@frataingenieros.com";

export default function BimtoolsPage() {
  const jsonLd = buildSoftwareApplicationSchema(overview.totalAddins, overview.premiumAddins);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-background">
      <HashScrollHandler />
      <section className="relative overflow-hidden border-b hero-gradient-animated bg-[radial-gradient(circle_at_top_left,_rgba(8,145,178,0.24),_transparent_32%),linear-gradient(180deg,_hsl(var(--background)),_hsl(var(--secondary)))] dark:bg-none">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                BIMtools by Frata
              </div>
              <h1 className="mt-6 max-w-3xl font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Addins BIM para Revit pensados para productividad real en consultoria, modelado y estructuras.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                BIMtools agrupa herramientas desarrolladas para acelerar tareas repetitivas, ordenar informacion del
                modelo y mejorar la productividad de equipos que trabajan en Revit todos los dias.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-sm">
                  <Star className="mr-1 h-3.5 w-3.5" />
                  {overview.premiumAddins} premium
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 text-sm">
                  {overview.freeAddins} gratis
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 text-sm">
                  Suscripcion premium mensual o anual
                </Badge>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-foreground">
                  <strong>USD 20/mes</strong>
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-foreground">
                  <strong>USD 100/anual</strong>
                </span>
                <span className="rounded-full border px-4 py-2">Acceso a todos los addins premium</span>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/bimtools/suscripcion">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Comprar suscripcion premium
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/download">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar instalador de prueba
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="border-primary/20 bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Un entorno de trabajo mas rapido y controlado</CardTitle>
                <CardDescription>
                  BIMtools ayuda a reducir tareas manuales, ordenar informacion del modelo y dar mas control a equipos
                  que trabajan en Revit todos los dias.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border bg-background/70 p-4">
                  <div className="text-3xl font-bold text-primary">{overview.totalAddins}</div>
                  <p className="mt-1 text-sm text-muted-foreground">addins documentados</p>
                </div>
                <div className="rounded-2xl border bg-background/70 p-4">
                  <div className="text-3xl font-bold text-primary">{suites.length}</div>
                  <p className="mt-1 text-sm text-muted-foreground">areas de trabajo</p>
                </div>
                <div className="rounded-2xl border bg-background/70 p-4">
                  <div className="text-3xl font-bold text-primary">{overview.premiumAddins}</div>
                  <p className="mt-1 text-sm text-muted-foreground">herramientas premium</p>
                </div>
                <div className="rounded-2xl border bg-background/70 p-4">
                  <div className="text-3xl font-bold text-primary">{overview.freeAddins}</div>
                  <p className="mt-1 text-sm text-muted-foreground">herramientas gratis</p>
                </div>
                <div className="col-span-2 rounded-2xl border bg-background/70 p-4">
                  <p className="text-sm font-medium text-foreground">Pensado para equipos que necesitan producir mas</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Exportacion, parametros, seleccion inteligente, control de niveles, herramientas estructurales y
                    automatizacion aplicada a procesos BIM reales.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="suites" className="container mx-auto scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Suites</p>
          <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Elige una suite y entra a sus addins
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cada suite agrupa herramientas para un tipo de flujo BIM. Al entrar veras los addins de esa suite y su
            documentacion.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {suites.map((suite) => (
            <Link key={suite.id} href={`/bimtools/suite/${suite.id}`} className="block h-full">
              <Card className="h-full border-border/70 bg-card/70 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Layers3 className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-2xl">{suite.label}</CardTitle>
                      <CardDescription>{suite.manuals.length} addins documentados</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{suite.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {suite.manuals.map((manual) => (
                      <span
                        key={manual.slug}
                        className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-sm text-foreground"
                      >
                        <AddinIcon icon={manual.icon} name={manual.addinName} size="sm" />
                        {manual.title.es.split(" - ")[0]}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                    Ver suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t bg-secondary/40">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Gratis vs Premium</p>
            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Entiende rapido la diferencia entre acceso gratis y acceso premium
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Primero decides entre trabajar con herramientas gratuitas o ir por el ecosistema premium completo. Luego,
              si eliges Premium, defines si tu acceso sera mensual o anual desde la pagina de suscripcion.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="rounded-full">Gratis</Badge>
                  <span className="text-sm text-muted-foreground">Sin costo</span>
                </div>
                <CardTitle className="font-headline text-3xl">Empieza y explora BIMtools</CardTitle>
                <CardDescription>
                  Pensado para instalar la suite, revisar el entorno y trabajar con herramientas gratuitas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-semibold text-foreground">Que obtienes</p>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>Acceso a addins gratuitos dentro de la suite</li>
                  <li>Instalacion y exploracion del entorno BIMtools</li>
                  <li>Revision de manuales y funciones</li>
                  <li>Base para decidir si Premium encaja con tu equipo</li>
                </ul>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/download">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar prueba
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-card/80 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge className="rounded-full">
                    <Star className="mr-1 h-3 w-3" />
                    Premium
                  </Badge>
                  <span className="text-sm text-primary">USD 20/mes o USD 100/anual</span>
                </div>
                <CardTitle className="font-headline text-3xl">Desbloquea todos los addins premium</CardTitle>
                <CardDescription>
                  Una sola suscripcion te da acceso al ecosistema premium completo de BIMtools.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-semibold text-foreground">Que obtienes</p>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>Acceso a todos los addins premium con una sola suscripcion</li>
                  <li>Automatizacion mas avanzada para modelado, gestion y estructuras</li>
                  <li>Mayor velocidad en tareas repetitivas y control del modelo</li>
                  <li>Activacion de acceso premium despues del pago</li>
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild className="">
                    <Link href="/bimtools/suscripcion">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Ver suscripcion premium
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="px-0 text-primary hover:text-primary">
                    <Link href="/#contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Consultar activacion
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
