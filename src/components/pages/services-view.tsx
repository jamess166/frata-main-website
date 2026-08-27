import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";
import { serviceContent } from "@/lib/service-content";
import { withLocale, type Locale } from "@/lib/locale";
import type { ServicesPageContent } from "@/content/services";

export function ServicesView({ locale, content }: { locale: Locale; content: ServicesPageContent }) {
  const services = Object.values(serviceContent).map((entry) => entry[locale]);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
          <Reveal>
            <Eyebrow>{content.hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-headline text-display-lg font-black text-foreground">
              {content.hero.heading.line1}
              <br />
              <span className="text-muted-foreground">{content.hero.heading.line2}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">{content.hero.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Índice 01–06 ─────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <NumberedRow
                index={String(i + 1).padStart(2, "0")}
                title={service.shortTitle}
                description={service.description}
                href={withLocale(locale, `/services/${service.slug}`)}
                cta={content.index.serviceCta}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Inversión ────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>{content.pricing.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              {content.pricing.heading}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{content.pricing.intro}</p>
          </Reveal>

          <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-3">
            {content.pricing.plans.map((plan, i) => (
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
                    <Link href={withLocale(locale, plan.href)}>{plan.cta}</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">{content.pricing.disclaimer}</p>
        </div>
      </section>

      {/* ── Resultados ───────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>{content.outcomes.eyebrow}</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.outcomes.items.map((outcome, i) => (
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
