import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";
import { serviceContentEn } from "@/lib/service-content-en";

export const metadata: Metadata = {
  title: "BIM Services",
  description:
    "BIM consulting, modeling, remote teams, on-site support and custom Revit addin development. Frata Ingenieros services for AEC companies in Peru and LATAM.",
  alternates: {
    canonical: "https://www.frataingenieros.com/en/services",
  },
  openGraph: {
    title: "BIM Services | Frata Ingenieros",
    description:
      "BIM consulting, modeling, remote teams, on-site support and custom Revit addin development.",
    url: "https://www.frataingenieros.com/en/services",
    siteName: "Frata Ingenieros",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.frataingenieros.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

const PRICING = [
  {
    name: "BIM Assessment",
    price: "from USD 500",
    description:
      "We review your BIM operation, identify gaps and deliver a clear action plan with defined priorities.",
    cta: "Request assessment",
    href: "/en/#contact",
    highlight: false,
  },
  {
    name: "BIM Implementation",
    price: "Custom quote",
    description:
      "Strategy, standardization, training and follow-up to consolidate BIM in your company sustainably.",
    cta: "Talk to Frata",
    href: "/en/#contact",
    highlight: true,
  },
  {
    name: "Custom Addin",
    price: "from USD 1,500",
    description:
      "Purpose-built tools for Revit or Tekla that automate technical workflows and reduce manual work.",
    cta: "Request proposal",
    href: "/en/#contact",
    highlight: false,
  },
];

const outcomes = [
  "More organized BIM teams with less operational friction.",
  "Coordinated models ready to document, review and deliver.",
  "Purpose-built software that automates high-volume repetitive tasks.",
  "BIM processes that hold even when the team changes.",
  "Technical deliverables aligned to client and project requirements.",
  "Production capacity that scales without depending on a single resource.",
];

export default function ServicesEnPage() {
  const services = Object.values(serviceContentEn);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-headline text-display-lg font-black text-foreground">
              Our specialties.
              <br />
              <span className="text-muted-foreground">The only thing we offer.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              From consulting and modeling to custom software. Each service solves a real
              problem in your company&apos;s BIM operation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Index 01–06 ──────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <NumberedRow
                index={String(i + 1).padStart(2, "0")}
                title={service.shortTitle}
                description={service.description}
                href={`/en/services/${service.slug}`}
                cta="View service"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              How much does it cost to work with Frata?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              Prices are indicative. Each project is quoted based on scope, complexity and duration.
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
            * Prices in USD. Values shown are indicative; each proposal is tailored to the specific project scope.
          </p>
        </div>
      </section>

      {/* ── Outcomes ─────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Outcomes</Eyebrow>
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
