import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
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
        <div className="container mx-auto px-5 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <Eyebrow>{content.hero.eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-4xl font-headline text-display-lg text-foreground">
            {content.hero.heading.line1}
            <br />
            {content.hero.heading.line2}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{content.hero.intro}</p>
        </div>
      </section>

      {/* ── Servicios ────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto grid gap-5 px-5 pb-20 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8 lg:pb-28">
          {services.map((service) => (
            <Reveal key={service.slug}>
              <Link
                href={withLocale(locale, `/services/${service.slug}`)}
                className="group flex h-full flex-col overflow-hidden rounded-tile bg-surface transition-transform duration-200 ease-out active:scale-[0.99]"
              >
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={1200}
                    height={750}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-headline text-title text-foreground">{service.shortTitle}</h2>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed text-muted-foreground">{service.description}</p>
                  <span className="link-more mt-auto pt-5 text-[1.0625rem]">
                    {content.index.serviceCta}
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Inversión ────────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>{content.pricing.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-headline text-display-lg text-foreground">{content.pricing.heading}</h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">{content.pricing.intro}</p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {content.pricing.plans.map((plan) => (
              <Reveal key={plan.name} className="h-full">
                <div
                  className={`flex h-full flex-col rounded-tile bg-card p-8 ${
                    plan.highlight ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <p className="text-[0.9375rem] font-semibold text-foreground">{plan.name}</p>
                  <p className="mt-3 font-headline text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-foreground">
                    {plan.price}
                  </p>
                  <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground">{plan.description}</p>
                  <Button asChild className="mt-8 w-full" variant={plan.highlight ? "default" : "secondary"}>
                    <Link href={withLocale(locale, plan.href)}>{plan.cta}</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">{content.pricing.disclaimer}</p>
        </div>
      </section>

      {/* ── Resultados ───────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <h2 className="font-headline text-display-lg text-foreground">{content.outcomes.eyebrow}</h2>
          </Reveal>
          <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.outcomes.items.map((outcome) => (
              <Reveal as="li" key={outcome} className="flex gap-3 text-[1.0625rem] leading-relaxed text-foreground">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                {outcome}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
