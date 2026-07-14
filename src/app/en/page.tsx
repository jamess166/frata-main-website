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
    absolute: "Frata Ingenieros · BIM Consulting and Revit Addins | Peru LATAM",
  },
  description:
    "Frata Ingenieros delivers BIM consulting, BIM modeling, digital coordination and Revit addins focused on productivity and technical control for AEC teams in Peru and LATAM.",
  alternates: {
    canonical: "https://www.frataingenieros.com/en",
  },
  openGraph: {
    title: "Frata Ingenieros · BIM Consulting and Revit Addins | Peru LATAM",
    description:
      "BIM consulting, BIM modeling and Revit addin development. Peruvian firm serving AEC teams across LATAM.",
    url: "https://www.frataingenieros.com/en",
    siteName: "Frata Ingenieros",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.frataingenieros.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frata Ingenieros - BIM Consulting and Revit Addins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frata Ingenieros · BIM Consulting and Revit Addins | Peru LATAM",
    description:
      "BIM consulting, BIM modeling and Revit addin development. Peruvian firm serving AEC teams across LATAM.",
    images: ["https://www.frataingenieros.com/images/og-image.jpg"],
  },
};

const services = [
  {
    index: "01",
    title: "BIM consulting",
    description:
      "Strategy, standards, coordination and hands-on support for companies that need to structure their BIM operation.",
    href: "/en/services/bim-training-and-implementation",
  },
  {
    index: "02",
    title: "BIM modeling",
    description:
      "Coordinated architecture, structure and MEP models for design, construction, quantities and document control.",
    href: "/en/services/comprehensive-bim-modeling",
  },
  {
    index: "03",
    title: "Revit and Tekla development",
    description:
      "Addins, automation and technical applications that remove manual work from your production workflow.",
    href: "/en/services/custom-bim-software-development",
  },
  {
    index: "04",
    title: "On-site BIM support",
    description:
      "Direct assistance to resolve clashes, review models and connect the model with real execution.",
    href: "/en/services/on-site-bim-construction-support",
  },
];

const manifesto = [
  "We implement BIM in real construction and technical-office processes, not in slide decks.",
  "We model structures and fabrication detail with control and traceability.",
  "We build our own addins because we use them in our own production.",
  "We build on Revit API, IFC and open workflows. No black boxes.",
];

const process = [
  {
    index: "01",
    title: "Technical diagnosis",
    description: "We review your BIM workflow, pain points, software and business goals.",
  },
  {
    index: "02",
    title: "Scope definition",
    description: "We prioritize deliverables, standards, automation or custom development.",
  },
  {
    index: "03",
    title: "Implementation",
    description: "We execute modeling, consulting, support or development with clear tracking.",
  },
  {
    index: "04",
    title: "Scaling and support",
    description: "We document, train and leave a base to grow with less manual dependency.",
  },
];

const techStack = ["Revit API", "C#", ".NET 8", "WPF", "Dynamo", "IFC", "Open BIM"];

const featuredSlugs = ["estadio-chepen", "interoperabilidad-tekla-revit", "puente-beirut"];

export default function HomeEn() {
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
            <Eyebrow>BIM Consulting · Peru → LATAM</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-5xl font-headline text-display-xl font-black text-foreground">
              BIM that gets built.
              <br />
              <span className="text-muted-foreground">Not BIM that gets presented.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Consulting, modeling and software development for Revit and Tekla.
              We help AEC companies turn BIM into real production capacity.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                <Link href="/en/#contact">Let&apos;s talk</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
              >
                <Link href="/en/services">View services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-primary/60 px-8 text-xs font-medium uppercase tracking-[0.14em] text-primary hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Link href="/en/bimtools">
                  BIMtools
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* TODO owner: confirm real project count */}
              <Stat value={50} suffix="+" label="BIMtools users" />
              <Stat value={21} label="Published addins" />
              <Stat value={30} suffix="+" label="BIM projects delivered" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Manifesto ────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Approach</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-4xl font-headline text-display-lg font-bold text-foreground">
              We are not vendors.
              <br />
              <span className="text-muted-foreground">We are your technical team.</span>
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

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="services" className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              The only thing we offer: what we do well.
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
                  cta="View service"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <Eyebrow>Projects</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                  Work that is already built.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <Link
                href="/en/casos"
                className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
              >
                View all case studies
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 space-y-0">
            {featured.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 80}>
                <Link href="/en/casos" className="block">
                  <article className="group grid gap-8 border-t border-border py-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        {cs.client} · {cs.sectorEn ?? cs.sector}
                      </p>
                      <h3 className="mt-4 font-headline text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                        {cs.serviceEn ?? cs.service}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                        {cs.resultEn ?? cs.result}
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
                            alt={cs.serviceEn ?? cs.service}
                            width={900}
                            height={560}
                            className="h-56 w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 lg:h-64"
                          />
                        </div>
                      ) : null}
                      {cs.metrics && cs.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-6">
                          {cs.metrics.map((m) => (
                            <div key={m.labelEn}>
                              <p className="font-headline text-3xl font-bold text-primary sm:text-4xl">
                                {m.value}
                              </p>
                              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                                {m.labelEn}
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

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>Method</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                A clear process, from diagnosis to production.
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
              <Eyebrow>Own product · BIMtools</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                We build the tools we use.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                BIMtools was born inside our own projects: Revit addins that remove
                repetitive tasks, manual exports and parameter control. Today technical
                teams across LATAM rely on them.
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
                  <Link href="/en/bimtools">Explore BIMtools</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
                >
                  <Link href="/en/services/custom-bim-software-development">Custom development</Link>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="overflow-hidden">
              <Image
                src="/images/softwareDeveloper.webp"
                alt="BIM software development for Revit and Tekla"
                width={1200}
                height={800}
                loading="lazy"
                className="h-80 w-full object-cover grayscale lg:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SocialProofSection locale="en" />

      <HomeContactSection locale="en" />
    </>
  );
}
