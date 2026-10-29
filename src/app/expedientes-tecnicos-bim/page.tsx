import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { buildBreadcrumbs, buildServiceNode } from "@/lib/schema";

// Spanish-only landing page for public-investment technical packages in BIM
// (a Peru-specific service), so it has no alternates in other locales.
const PAGE_URL = "https://www.frataingenieros.com/expedientes-tecnicos-bim";
const WORK = "/images/blog/estadio-chepen";

const TITLE = "Expedientes técnicos de inversión pública con BIM";
const DESCRIPTION =
  "Elaboramos expedientes técnicos públicos con BIM según la Guía Nacional BIM y la NTP-ISO 19650: Plan de Ejecución BIM, modelado LOD 3, planos desde el modelo y metrados BIM para expedientes técnicos de obra pública.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Frata Ingenieros` },
  description: DESCRIPTION,
  keywords: [
    "expedientes técnicos de inversión pública con BIM",
    "expedientes técnicos públicos con BIM",
    "metrados BIM para expedientes técnicos de obra pública",
    "expediente técnico BIM",
    "Plan de Ejecución BIM",
    "Guía Nacional BIM",
    "BIM obra pública Perú",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Frata Ingenieros",
    locale: "es_PE",
    type: "website",
    images: [{ url: `https://www.frataingenieros.com${WORK}/render-tribuna.webp`, width: 2000, height: 1125 }],
  },
};

const INCLUDES = [
  {
    title: "Plan de Ejecución BIM (BEP)",
    text: "Usos BIM, nivel de información necesaria (LOD y LOI) por entregable, nomenclatura, entorno común de datos y control de calidad, alineados a la Guía Nacional BIM y a la NTP-ISO 19650.",
  },
  {
    title: "Modelado LOD 3 de todas las especialidades",
    text: "Arquitectura, estructuras, instalaciones sanitarias, eléctricas, mecánicas, comunicaciones y sistema contra incendios en Revit, con el concreto armado modelado hasta el acero de refuerzo.",
  },
  {
    title: "Planos generados desde el modelo",
    text: "Plantas, cortes, elevaciones, detalles y cuadros de todas las especialidades salen de los modelos, con la codificación de láminas del BEP y control de revisiones.",
  },
  {
    title: "Coordinación e interferencias",
    text: "Modelo federado en Navisworks, matriz de interferencias por gravedad y registro de cada conflicto hasta su cierre, antes de emitir el expediente.",
  },
  {
    title: "Metrados BIM y presupuesto",
    text: "Planillas de metrados en el formato estándar de obra pública, exportadas desde Revit con trazabilidad por elemento, listas para el presupuesto en Delphin.",
  },
  {
    title: "Entorno común de datos",
    text: "Toda la información del expediente organizada en BIMHILL según los estados de la ISO 19650, con acceso de solo lectura para la Entidad y la supervisión.",
  },
];

const METRADO_STEPS = [
  "Cada partida del presupuesto se vincula a los elementos del modelo que le corresponden.",
  "Nuestros add-ins completan en el modelo los datos que pide la planilla: ejes, ambientes, bloque, nivel, sector y partida.",
  "La planilla se exporta a Excel en el formato estándar de metrados de obra pública: ítem, descripción, unidad, cantidad, largo, ancho, alto, parcial y total.",
  "Cada línea lleva el ID del elemento en Revit, así la supervisión puede ubicar en el modelo de dónde sale cada cantidad.",
  "Los metrados pasan a Delphin para el presupuesto, los análisis de precios unitarios y las fórmulas polinómicas.",
];

const FAQ = [
  {
    q: "¿Qué es un expediente técnico público con BIM?",
    a: "Es el expediente técnico de un proyecto de inversión pública cuyos planos, metrados y documentos se obtienen de modelos BIM coordinados de todas las especialidades, en lugar de dibujarse y metrarse por separado. El contenido es el que exige la normativa; cambia la forma de producirlo y su nivel de coordinación.",
  },
  {
    q: "¿Todos los metrados salen del modelo?",
    a: "La mayoría de partidas se metran desde el modelo. Las que no se pueden obtener de forma confiable se metran manualmente, y el Plan de Ejecución BIM deja definido cuáles son desde el inicio.",
  },
  {
    q: "¿En qué formatos se entrega?",
    a: "Modelos nativos de Revit e IFC, planos en PDF y DWG, planillas de metrados en Excel y el resto de documentos del expediente en los formatos que pidan los Términos de Referencia.",
  },
  {
    q: "¿Pueden trabajar por entregables parciales?",
    a: "Sí. Organizamos los modelos, planos y metrados por entregable, de modo que cada parte del expediente pueda revisarse y aprobarse por separado según lo que pidan los Términos de Referencia.",
  },
];

export default function ExpedientesTecnicosBimPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildServiceNode(TITLE, DESCRIPTION, PAGE_URL, [
        "Expedientes técnicos de inversión pública con BIM",
        "Expedientes técnicos públicos con BIM",
        "Metrados BIM para expedientes técnicos de obra pública",
      ]),
      buildBreadcrumbs([
        { name: "Inicio", path: "/" },
        { name: "Expedientes técnicos con BIM", path: "/expedientes-tecnicos-bim" },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 pb-12 pt-16 sm:px-6 lg:px-10 lg:pb-16 lg:pt-24">
          <Eyebrow>Obra pública · Guía Nacional BIM</Eyebrow>
          <h1 className="mt-3 max-w-4xl font-headline text-display-lg text-foreground">{TITLE}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Elaboramos expedientes técnicos públicos con BIM para entidades, consorcios y proyectistas: del Plan de
            Ejecución BIM a los planos, los metrados y el presupuesto, todo obtenido de modelos coordinados.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button asChild size="lg">
              <Link href="/#contact">Cotizar un expediente</Link>
            </Button>
            <Link href="/blog/expediente-tecnico-obra-publica-bim" className="link-more text-lg">
              Ver cómo trabajamos en el Estadio de Chepén
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <div className="overflow-hidden rounded-tile bg-surface">
            <Image
              src={`${WORK}/render-tribuna.webp`}
              alt="Modelo BIM del Estadio Municipal de Chepén, expediente técnico de inversión pública"
              width={2000}
              height={1125}
              priority
              sizes="(min-width: 1400px) 1340px, 100vw"
              className="aspect-[16/10] w-full object-cover sm:aspect-[16/8]"
            />
          </div>
        </div>
      </section>

      {/* ── Qué incluye ──────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
          <Reveal className="max-w-3xl">
            <h2 className="font-headline text-display-lg text-foreground">
              Qué incluye un expediente técnico con BIM hecho por Frata
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INCLUDES.map((item) => (
              <Reveal key={item.title} className="rounded-tile bg-surface p-8">
                <h3 className="font-headline text-title text-foreground">{item.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metrados ─────────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
          <Reveal className="max-w-3xl">
            <Eyebrow>Revit · Excel · Delphin</Eyebrow>
            <h2 className="mt-3 font-headline text-display-lg text-foreground">
              Metrados BIM para expedientes técnicos de obra pública
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              El metrado es donde más tiempo se pierde y donde más observaciones recibe un expediente. Por eso lo
              automatizamos desde el modelo, sin perder el formato que la obra pública exige.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <Reveal>
              <Image
                src={`${WORK}/metrado-excel-ids.webp`}
                alt="Planilla de metrados de obra pública exportada desde Revit con el ID de cada elemento"
                width={1917}
                height={722}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="w-full rounded-xl shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] ring-1 ring-foreground/10"
              />
              <p className="mt-3 text-sm text-muted-foreground">
                Partida de concreto en muro de contención: cada línea es un elemento del modelo, con su ID de Revit.
              </p>
            </Reveal>
            <Reveal>
              <ol className="space-y-5">
                {METRADO_STEPS.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-headline text-title text-primary">{i + 1}</span>
                    <p className="pt-1 text-[1.0625rem] leading-relaxed text-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Caso ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto grid gap-12 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <Reveal>
            <div className="overflow-hidden rounded-tile bg-surface">
              <Image
                src={`${WORK}/modelo-acero-refuerzo.webp`}
                alt="Modelo de acero de refuerzo del Estadio de Chepén en Revit"
                width={1920}
                height={1028}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow>Proyecto en curso</Eyebrow>
            <h2 className="mt-3 font-headline text-display-md text-foreground">
              Estadio Municipal de Chepén, La Libertad
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              En este expediente técnico de inversión pública participamos como consultores BIM: asumimos el modelado
              BIM de las especialidades, la extracción de metrados y la generación de planos durante la elaboración
              del expediente. El servicio se encuentra en ejecución.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Plan de Ejecución BIM alineado a la Guía Nacional BIM",
                "Planos de todas las especialidades generados desde el modelo",
                "Metrados trazables por ID de elemento, exportados a Excel y Delphin",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[1.0625rem] leading-relaxed text-foreground">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/blog/expediente-tecnico-obra-publica-bim" className="link-more mt-7 text-[1.0625rem]">
              Ver cómo trabajamos
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Preguntas frecuentes ─────────────────────────────── */}
      <section className="bg-surface">
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
          <Reveal className="max-w-3xl">
            <h2 className="font-headline text-display-lg text-foreground">Preguntas frecuentes</h2>
          </Reveal>
          <dl className="mt-10 grid gap-5 md:grid-cols-2">
            {FAQ.map((item) => (
              <Reveal key={item.q} className="rounded-tile bg-card p-8">
                <dt className="font-headline text-xl font-semibold tracking-[-0.01em] text-foreground">{item.q}</dt>
                <dd className="mt-3 text-[1.0625rem] leading-relaxed text-muted-foreground">{item.a}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
