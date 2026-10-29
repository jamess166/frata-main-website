import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { HashScrollHandler } from "@/components/layout/hash-scroll-handler";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { Stat } from "@/components/site/stat";
import { getBimtoolsOverview, getBimtoolsSuitesWithManuals } from "@/lib/bimtools";
import { withLocale, type Locale } from "@/lib/locale";
import type { BimtoolsHubContent } from "@/content/bimtools-hub";
import { bimtoolsManualDetailContent } from "@/content/bimtools-manual-detail";

export function BimtoolsHubView({ locale, content }: { locale: Locale; content: BimtoolsHubContent }) {
  const suites = getBimtoolsSuitesWithManuals();
  const overview = getBimtoolsOverview();
  const freeLabel = bimtoolsManualDetailContent[locale].freeLabel;

  return (
    <>
      <HashScrollHandler />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="overflow-hidden">
        <div className="container mx-auto px-5 pt-16 text-center sm:px-6 lg:px-10 lg:pt-24">
          <p className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-sm font-medium text-primary">
            {content.hero.offerBadge}
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl font-headline text-display-xl text-foreground">{content.hero.heading}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{content.hero.intro}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            <Button asChild size="lg">
              <Link href={withLocale(locale, "/bimtools/suscripcion")}>{content.hero.subscriptionCta}</Link>
            </Button>
            <Link href={withLocale(locale, "/download")} className="link-more text-lg">
              {content.hero.downloadCta}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="container mx-auto mt-14 px-5 sm:px-6 lg:mt-20 lg:px-10">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-xl shadow-[0_40px_100px_-30px_rgba(0,0,0,0.45)] ring-1 ring-foreground/10">
            <Image
              src="/images/blog/estadio-chepen/planos-revit-arquitectura.webp"
              alt="BIMtools en la cinta de Revit"
              width={1920}
              height={1028}
              priority
              sizes="(min-width: 1200px) 1150px, 100vw"
              className="w-full"
            />
          </div>
        </div>

        <div className="container mx-auto px-5 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-y-10 sm:grid-cols-4 sm:divide-x sm:divide-border">
            <Stat value={overview.totalAddins} label={content.hero.stats.addins} />
            <Stat value={suites.length} label={content.hero.stats.areas} />
            <Stat value={overview.premiumAddins} label={content.hero.stats.premium} />
            <Stat value={overview.freeAddins} label={content.hero.stats.free} />
          </div>
        </div>
      </section>

      {/* ── Suites ───────────────────────────────────────────── */}
      <section id="suites" className="scroll-mt-16 bg-surface">
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
          <Reveal className="max-w-3xl">
            <Eyebrow>{content.suites.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-headline text-display-lg text-foreground">{content.suites.heading}</h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {suites.map((suite) => (
              <Reveal key={suite.id}>
                <Link
                  href={withLocale(locale, `/bimtools/suite/${suite.id}`)}
                  className="group flex h-full flex-col rounded-tile bg-card p-8 transition-transform duration-200 ease-out active:scale-[0.99] lg:p-10"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-headline text-title text-foreground">{suite.label}</h3>
                    <span className="shrink-0 text-sm text-muted-foreground">
                      {suite.manuals.length} {content.suites.addinsSuffix}
                    </span>
                  </div>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed text-muted-foreground">{suite.description[locale]}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {suite.manuals.map((manual) => (
                      <li
                        key={manual.slug}
                        className="inline-flex items-center gap-1.5 rounded-full bg-secondary py-1 pl-1.5 pr-3 text-xs text-foreground/80"
                      >
                        <AddinIcon icon={manual.icon} name={manual.addinName} size="xs" />
                        {manual.title[locale].split(" - ")[0]}
                        {manual.commerce.isFree ? <span className="text-muted-foreground">· {freeLabel}</span> : null}
                      </li>
                    ))}
                  </ul>
                  <span className="link-more mt-auto pt-6 text-[1.0625rem]">
                    {suite.label}
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gratis vs Premium ────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>{content.tiers.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-headline text-display-lg text-foreground">{content.tiers.heading}</h2>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col rounded-tile bg-surface p-8 lg:p-10">
                <p className="text-sm text-muted-foreground">{content.tiers.free.badge}</p>
                <h3 className="mt-2 font-headline text-display-md text-foreground">{content.tiers.free.title}</h3>
                <ul className="mt-7 flex-1 space-y-3">
                  {content.tiers.free.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-foreground">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="secondary" size="lg" className="mt-9 w-full bg-card sm:w-auto">
                  <Link href={withLocale(locale, "/download")}>{content.tiers.free.cta}</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal className="h-full">
              <div className="flex h-full flex-col rounded-tile bg-surface p-8 ring-2 ring-primary lg:p-10">
                <p className="text-sm font-medium text-primary">{content.tiers.premium.badge}</p>
                <h3 className="mt-2 font-headline text-display-md text-foreground">{content.tiers.premium.title}</h3>
                <ul className="mt-7 flex-1 space-y-3">
                  {content.tiers.premium.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-foreground">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {content.tiers.premium.customizationNote}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Button asChild size="lg">
                    <Link href={withLocale(locale, "/bimtools/suscripcion")}>
                      {content.tiers.premium.subscriptionCta}
                    </Link>
                  </Button>
                  <Link href={withLocale(locale, "/#contact")} className="link-more text-[1.0625rem]">
                    {content.tiers.premium.contactCta}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <Link
                  href={withLocale(locale, "/bimtools/privacy")}
                  className="mt-6 inline-block text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                >
                  {content.tiers.premium.privacyLabel}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
