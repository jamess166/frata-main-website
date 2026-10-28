import Image from "next/image";
import Link from "next/link";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";
import { ThemedImage } from "@/components/site/themed-image";
import { withLocale, type Locale } from "@/lib/locale";
import type { ServiceContent } from "@/lib/service-content";
import type { ServiceDetailPageContent } from "@/content/services";

// The page closes on the footer's call to action, so it has no CTA of its own.
export function ServiceDetailView({
  locale,
  service,
  content,
}: {
  locale: Locale;
  service: ServiceContent;
  content: ServiceDetailPageContent;
}) {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
          <Link
            href={withLocale(locale, "/services")}
            className="-ml-1 inline-flex items-center gap-0.5 text-[0.9375rem] text-primary hover:underline underline-offset-4"
          >
            <ChevronLeft className="h-4 w-4" />
            {content.backToServices}
          </Link>
          <Eyebrow className="mt-10">{content.eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-4xl font-headline text-display-lg text-foreground">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{service.intro}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button asChild size="lg">
              <Link href={withLocale(locale, "/#contact")}>{content.proposalCta}</Link>
            </Button>
            <Link href={withLocale(locale, "/bimtools")} className="link-more text-lg">
              {content.bimtoolsCta}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-tile bg-surface">
            <ThemedImage
              src={service.image}
              darkSrc={service.imageDark}
              alt={service.imageAlt}
              width={1920}
              height={1080}
              priority
              sizes="(min-width: 1400px) 1340px, 100vw"
              className="aspect-[16/10] w-full object-cover sm:aspect-[16/8]"
            />
          </div>
        </div>
      </section>

      {/* ── Pilares ──────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal className="max-w-3xl">
            <Eyebrow>{content.pillars.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-headline text-display-lg text-foreground">{content.pillars.heading}</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {service.pillars.map((pillar) => (
              <Reveal key={pillar.title} className="rounded-tile bg-surface p-8">
                <h3 className="font-headline text-title text-foreground">{pillar.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted-foreground">{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Láminas de ejemplo ───────────────────────────────── */}
      {service.drawings && service.drawings.length > 0 && (
        <section className="bg-surface">
          <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="max-w-3xl">
              <Eyebrow>{content.drawings.eyebrow}</Eyebrow>
              <h2 className="mt-3 font-headline text-display-lg text-foreground">{content.drawings.heading}</h2>
            </Reveal>
            <div className="mt-10 space-y-5">
              {service.drawings.map((drawing) => (
                <Reveal key={drawing.src}>
                  <figure className="overflow-hidden rounded-tile bg-white p-3 ring-1 ring-foreground/10 sm:p-6">
                    <Image
                      src={drawing.src}
                      alt={drawing.alt}
                      width={drawing.width}
                      height={drawing.height}
                      sizes="(min-width: 1400px) 1340px, 100vw"
                      className="w-full"
                    />
                    <figcaption className="mt-3 text-sm text-neutral-500">{drawing.alt}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Método ───────────────────────────────────────────── */}
      <section className={service.drawings?.length ? undefined : "bg-surface"}>
        <div className="container mx-auto grid gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
          <Reveal>
            <Eyebrow>{content.method.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-headline text-display-lg text-foreground">{content.method.heading}</h2>
          </Reveal>
          <div>
            {service.process.map((item, index) => (
              <Reveal key={item.title}>
                <NumberedRow index={String(index + 1)} title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resultados ───────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal className="max-w-3xl">
            <Eyebrow>{content.outcomes.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-headline text-display-lg text-foreground">{content.outcomes.heading}</h2>
          </Reveal>
          <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {service.outcomes.map((outcome) => (
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
