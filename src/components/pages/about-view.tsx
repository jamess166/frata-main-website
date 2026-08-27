import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";
import { withLocale, type Locale } from "@/lib/locale";
import type { AboutPageContent } from "@/content/about";

export function AboutView({ locale, content }: { locale: Locale; content: AboutPageContent }) {
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
              {content.hero.heading}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">{content.hero.intro}</p>
          </Reveal>
        </div>
        <Reveal delay={300}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <Image
                src="/images/quienesSomos.webp"
                alt={content.hero.imageAlt}
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
            <Eyebrow>{content.values.eyebrow}</Eyebrow>
          </Reveal>
          <div className="mt-12">
            {content.values.items.map((value, i) => (
              <Reveal key={value.index} delay={i * 80}>
                <NumberedRow index={value.index} title={value.title} description={value.description} />
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
              <Eyebrow>{content.timeline.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                {content.timeline.heading}
              </h2>
            </Reveal>
          </div>
          <div>
            {content.timeline.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="grid gap-3 border-t border-border py-8 sm:grid-cols-[120px_1fr] sm:gap-8 lg:py-10">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{item.year}</p>
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
                alt={content.strengths.imageAlt}
                width={1200}
                height={900}
                className="h-80 w-full object-cover grayscale lg:h-[420px]"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>{content.strengths.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                {content.strengths.heading}
              </h2>
            </Reveal>
            <div className="mt-10">
              {content.strengths.items.map((item, i) => (
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
              {content.cta.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                <Link href={withLocale(locale, "/#contact")}>{content.cta.talkLabel}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
              >
                <Link href={withLocale(locale, "/bimtools")}>
                  {content.cta.bimtoolsLabel}
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
