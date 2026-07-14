import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Frata Ingenieros, a firm focused on BIM consulting, BIM modeling and technical development for Revit or Tekla.",
  alternates: {
    canonical: "https://www.frataingenieros.com/en/about",
  },
};

const values = [
  {
    index: "01",
    title: "Technical thinking",
    description: "We decide from the logic of production, coordination and information control.",
  },
  {
    index: "02",
    title: "Execution capability",
    description: "We don't stay in BIM discourse: we model, coordinate and build tools teams actually use.",
  },
  {
    index: "03",
    title: "Closeness to the real problem",
    description: "We work from concrete needs of technical offices, jobsites, fabrication and software.",
  },
];

const timeline = [
  {
    year: "Origin",
    title: "Born from BIM practice",
    description:
      "Frata was born from the need to solve real modeling, coordination and production problems in technical projects.",
  },
  {
    year: "Expansion",
    title: "From services to solutions",
    description:
      "We evolved from traditional BIM support into an offer combining consulting, modeling and automation.",
  },
  {
    year: "Today",
    title: "Engineering with our own software",
    description:
      "BIMtools and Revit/Tekla development define us: we don't just implement BIM, we build technical capacity.",
  },
];

const strengths = [
  "BIM consulting with an operational focus, not just documents.",
  "Comprehensive BIM modeling for architecture, structure and MEP.",
  "Our own addins and automation for Revit and Tekla.",
  "Support for teams in technical offices, jobsites and fabrication.",
];

export default function AboutPageEn() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
          <Reveal>
            <Eyebrow>About us</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-headline text-display-lg font-black text-foreground">
              BIM engineering with real development capacity.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              We are a Peruvian firm connecting BIM consulting, modeling, coordination and
              technical software. Our differentiator: the tools we offer are built and used
              in our own production.
            </p>
          </Reveal>
        </div>
        <Reveal delay={300}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <Image
                src="/images/quienesSomos.webp"
                alt="Frata Ingenieros team"
                width={1600}
                height={900}
                priority
                className="h-[320px] w-full object-cover grayscale sm:h-[420px] lg:h-[520px]"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="border-t border-border mt-24 lg:mt-32">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
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

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>Track record</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                From practice to product.
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

      {/* ── Strengths ────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
          <Reveal>
            <div className="overflow-hidden">
              <Image
                src="/images/equipoBIM2.webp"
                alt="Frata Ingenieros BIM capabilities"
                width={1200}
                height={900}
                className="h-80 w-full object-cover grayscale lg:h-[420px]"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Strengths</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                BIM that holds up on site, not on slides.
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
              Does your BIM operation need a real technical team?
            </h2>
          </Reveal>
          <Reveal delay={100}>
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
                <Link href="/en/bimtools">
                  View BIMtools
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
