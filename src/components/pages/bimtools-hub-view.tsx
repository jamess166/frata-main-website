import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { HashScrollHandler } from "@/components/layout/hash-scroll-handler";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { Stat } from "@/components/site/stat";
import { getBimtoolsOverview, getBimtoolsSuitesWithManuals } from "@/lib/bimtools";
import { withLocale, type Locale } from "@/lib/locale";
import type { BimtoolsHubContent } from "@/content/bimtools-hub";

export function BimtoolsHubView({ locale, content }: { locale: Locale; content: BimtoolsHubContent }) {
  const suites = getBimtoolsSuitesWithManuals();
  const overview = getBimtoolsOverview();

  return (
    <>
      <HashScrollHandler />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
          <Reveal>
            <Eyebrow>BIMtools by Frata</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-headline text-display-lg font-black text-foreground">
              {content.hero.heading}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">{content.hero.intro}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                <Link href={withLocale(locale, "/bimtools/suscripcion")}>{content.hero.subscriptionCta}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
              >
                <Link href={withLocale(locale, "/download")}>{content.hero.downloadCta}</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
              <Stat value={overview.totalAddins} label={content.hero.stats.addins} />
              <Stat value={suites.length} label={content.hero.stats.areas} />
              <Stat value={overview.premiumAddins} label={content.hero.stats.premium} />
              <Stat value={overview.freeAddins} label={content.hero.stats.free} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Suites ───────────────────────────────────────────── */}
      <section id="suites" className="scroll-mt-24 border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>{content.suites.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              {content.suites.heading}
            </h2>
          </Reveal>

          <div className="mt-16">
            {suites.map((suite, i) => (
              <Reveal key={suite.id} delay={i * 60}>
                <Link href={withLocale(locale, `/bimtools/suite/${suite.id}`)} className="block">
                  <div className="group grid gap-6 border-t border-border py-10 md:grid-cols-[90px_1fr_auto] md:gap-8 lg:py-12">
                    <span className="font-code text-sm text-muted-foreground transition-colors group-hover:text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-headline text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                        {suite.label}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{suite.description[locale]}</p>
                      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                        {suite.manuals.map((manual) => (
                          <span
                            key={manual.slug}
                            className="inline-flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <AddinIcon icon={manual.icon} name={manual.addinName} size="sm" />
                            {manual.title[locale].split(" - ")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary md:flex">
                      {suite.manuals.length} {content.suites.addinsSuffix}
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gratis vs Premium ────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>{content.tiers.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              {content.tiers.heading}
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col bg-background p-8 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {content.tiers.free.badge}
                </p>
                <h3 className="mt-4 font-headline text-2xl font-bold text-foreground sm:text-3xl">
                  {content.tiers.free.title}
                </h3>
                <ul className="mt-8 flex-1 space-y-4 text-sm leading-7 text-muted-foreground">
                  {content.tiers.free.items.map((item) => (
                    <li key={item} className="border-t border-border pt-4">
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="mt-10 w-full rounded-none border-border text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary sm:w-auto"
                >
                  <Link href={withLocale(locale, "/download")}>{content.tiers.free.cta}</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={100} className="h-full">
              <div className="flex h-full flex-col bg-secondary p-8 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  {content.tiers.premium.badge}
                </p>
                <h3 className="mt-4 font-headline text-2xl font-bold text-foreground sm:text-3xl">
                  {content.tiers.premium.title}
                </h3>
                <ul className="mt-8 flex-1 space-y-4 text-sm leading-7 text-muted-foreground">
                  {content.tiers.premium.items.map((item) => (
                    <li key={item} className="border-t border-border pt-4">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                    <Link href={withLocale(locale, "/bimtools/suscripcion")}>
                      {content.tiers.premium.subscriptionCta}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-none border-border text-xs font-medium uppercase tracking-[0.14em] hover:bg-background"
                  >
                    <Link href={withLocale(locale, "/#contact")}>{content.tiers.premium.contactCta}</Link>
                  </Button>
                </div>
                <Link
                  href={withLocale(locale, "/bimtools/privacy")}
                  className="mt-6 inline-block text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary"
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
