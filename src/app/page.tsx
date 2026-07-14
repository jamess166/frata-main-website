import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeContactSection } from "@/components/home/contact-section";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";
import { Stat } from "@/components/site/stat";
import { buildOrganizationSchema } from "@/lib/schema";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: {
    absolute: "Frata Ingenieros · Consultoría BIM y Addins para Revit | Perú LATAM",
  },
  description:
    "Frata Ingenieros desarrolla consultoría BIM, modelado BIM, coordinación digital y aplicaciones para Revit o Tekla con foco en productividad y control técnico.",
  alternates: {
    canonical: "https://www.frataingenieros.com/",
  },
  openGraph: {
    title: "Frata Ingenieros · Consultoría BIM y Addins para Revit | Perú LATAM",
    description:
      "Consultoría BIM, modelado BIM y desarrollo de addins para Revit y Tekla. Empresa peruana con alcance LATAM.",
    url: "https://www.frataingenieros.com/",
    siteName: "Frata Ingenieros",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "https://www.frataingenieros.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frata Ingenieros - Consultoría BIM y Addins para Revit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frata Ingenieros · Consultoría BIM y Addins para Revit | Perú LATAM",
    description:
      "Consultoría BIM, modelado BIM y desarrollo de addins para Revit y Tekla. Empresa peruana con alcance LATAM.",
    images: ["https://www.frataingenieros.com/images/og-image.jpg"],
  },
};

const services = [
  {
    index: "01",
    title: "Consultoría BIM",
    description:
      "Estrategia, estándares, coordinación y acompañamiento para empresas que necesitan ordenar su operación BIM.",
    href: "/services/bim-training-and-implementation",
  },
  {
    index: "02",
    title: "Modelado BIM",
    description:
      "Modelos coordinados de arquitectura, estructuras y MEP para diseño, obra, metrados y control documental.",
    href: "/services/comprehensive-bim-modeling",
  },
  {
    index: "03",
    title: "Desarrollo Revit y Tekla",
    description:
      "Addins, automatizaciones y aplicaciones técnicas que eliminan trabajo manual en tu flujo de producción.",
    href: "/services/custom-bim-software-development",
  },
  {
    index: "04",
    title: "Soporte BIM en obra",
    description:
      "Asistencia directa para resolver interferencias, revisar modelos y conectar el modelo con la ejecución real.",
    href: "/services/on-site-bim-construction-support",
  },
];

const manifesto = [
  "Implementamos BIM en procesos reales de obra y oficina técnica, no en presentaciones.",
  "Modelamos estructuras y detalle de fabricación con control y trazabilidad.",
  "Desarrollamos addins propios porque los usamos en nuestra propia producción.",
  "Construimos sobre Revit API, IFC y flujos abiertos. Sin cajas negras.",
];

const process = [
  {
    index: "01",
    title: "Diagnóstico técnico",
    description: "Revisamos tu flujo BIM, puntos de dolor, software y objetivos de negocio.",
  },
  {
    index: "02",
    title: "Definición de alcance",
    description: "Priorizamos entregables, estándares, automatizaciones o desarrollo a medida.",
  },
  {
    index: "03",
    title: "Implementación",
    description: "Ejecutamos modelado, consultoría, soporte o desarrollo con seguimiento claro.",
  },
  {
    index: "04",
    title: "Escalado y soporte",
    description: "Documentamos, capacitamos y dejamos una base para crecer con menos dependencia manual.",
  },
];

const techStack = ["Revit API", "C#", ".NET 8", "WPF", "Dynamo", "IFC", "Open BIM"];

const featuredSlugs = ["estadio-chepen", "interoperabilidad-tekla-revit", "puente-beirut"];

export default function Home() {
  const jsonLd = buildOrganizationSchema();
  const featured = featuredSlugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="flex min-h-[85svh] flex-col justify-end">
        <div className="container mx-auto px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-20">
          <Reveal>
            <Eyebrow>Consultoría BIM · Perú → LATAM</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-5xl font-headline text-display-xl font-black text-foreground">
              BIM que se construye.
              <br />
              <span className="text-muted-foreground">No BIM que se presenta.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Consultoría, modelado y desarrollo de software para Revit y Tekla.
              Ayudamos a empresas AEC a convertir BIM en capacidad real de producción.
            </p>
          </Reveal>
          <Reveal delay={300}>
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
                <Link href="/services">Ver servicios</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-primary/60 px-8 text-xs font-medium uppercase tracking-[0.14em] text-primary hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Link href="/bimtools">
                  BIMtools
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* TODO owner: confirm real project count */}
              <Stat value={50} suffix="+" label="Usuarios de BIMtools" />
              <Stat value={21} label="Addins publicados" />
              <Stat value={30} suffix="+" label="Proyectos BIM entregados" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Manifesto ────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Enfoque</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-4xl font-headline text-display-lg font-bold text-foreground">
              No somos proveedores.
              <br />
              <span className="text-muted-foreground">Somos tu equipo técnico.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {manifesto.map((point, i) => (
              <Reveal key={point} delay={i * 100}>
                <div className="border-t border-border pt-6">
                  <p className="text-sm leading-7 text-foreground/80">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios ────────────────────────────────────────── */}
      <section id="services" className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              Lo único que ofrecemos: lo que sabemos hacer bien.
            </h2>
          </Reveal>
          <div className="mt-16">
            {services.map((service, i) => (
              <Reveal key={service.index} delay={i * 80}>
                <NumberedRow
                  index={service.index}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  cta="Ver servicio"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proyectos ────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <Eyebrow>Proyectos</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                  Trabajo que ya está construido.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <Link
                href="/casos"
                className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
              >
                Ver todos los casos
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 space-y-0">
            {featured.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 80}>
                <Link href="/casos" className="block">
                  <article className="group grid gap-8 border-t border-border py-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        {cs.client} · {cs.sector}
                      </p>
                      <h3 className="mt-4 font-headline text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                        {cs.service}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                        {cs.result}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {cs.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between gap-8">
                      {cs.image ? (
                        <div className="overflow-hidden">
                          <Image
                            src={cs.image}
                            alt={cs.service}
                            width={900}
                            height={560}
                            className="h-56 w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 lg:h-64"
                          />
                        </div>
                      ) : null}
                      {cs.metrics && cs.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-6">
                          {cs.metrics.map((m) => (
                            <div key={m.label}>
                              <p className="font-headline text-3xl font-bold text-primary sm:text-4xl">
                                {m.value}
                              </p>
                              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                                {m.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proceso ──────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>Método</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                Un proceso claro, de diagnóstico a producción.
              </h2>
            </Reveal>
          </div>
          <div>
            {process.map((step, i) => (
              <Reveal key={step.index} delay={i * 80}>
                <NumberedRow
                  index={step.index}
                  title={step.title}
                  description={step.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIMtools ─────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>Producto propio · BIMtools</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                Construimos las herramientas que usamos.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                BIMtools nació dentro de nuestros propios proyectos: addins para Revit que
                eliminan tareas repetitivas, exportaciones manuales y control de parámetros.
                Hoy los usan equipos técnicos en todo LATAM.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                  <Link href="/bimtools">Explorar BIMtools</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
                >
                  <Link href="/services/custom-bim-software-development">Desarrollo a medida</Link>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="overflow-hidden">
              <Image
                src="/images/softwareDeveloper.webp"
                alt="Desarrollo de software BIM para Revit y Tekla"
                width={1200}
                height={800}
                loading="lazy"
                className="h-80 w-full object-cover grayscale lg:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SocialProofSection locale="es" />

      <HomeContactSection />
    </>
  );
}
