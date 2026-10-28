import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { withLocale, type Locale } from "@/lib/locale";
import type { BimtoolsSuiteWithManuals } from "@/lib/bimtools";
import type { BimtoolsSuitePageContent } from "@/content/bimtools-suite";

export function BimtoolsSuiteView({
  locale,
  suite,
  content,
}: {
  locale: Locale;
  suite: BimtoolsSuiteWithManuals;
  content: BimtoolsSuitePageContent;
}) {
  return (
    <>
      <section>
        <div className="container mx-auto px-5 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
          <Link
            href={withLocale(locale, "/bimtools")}
            className="-ml-1 inline-flex items-center gap-0.5 text-[0.9375rem] text-primary hover:underline underline-offset-4"
          >
            <ChevronLeft className="h-4 w-4" />
            {content.backToBimtools}
          </Link>
          <Eyebrow className="mt-10">{content.eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-4xl font-headline text-display-lg text-foreground">{suite.label}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{suite.description[locale]}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button asChild size="lg">
              <Link href={withLocale(locale, "/bimtools/suscripcion")}>{content.subscribeCta}</Link>
            </Button>
            <Link href={withLocale(locale, "/download")} className="link-more text-lg">
              {content.downloadCta}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto grid gap-5 px-5 pb-20 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8 lg:pb-28">
          {suite.manuals.map((manual) => (
            <Reveal key={manual.slug}>
              <Link
                href={withLocale(locale, `/bimtools/manual/${manual.slug}`)}
                className="group flex h-full flex-col rounded-tile bg-surface p-7 transition-transform duration-200 ease-out active:scale-[0.99]"
              >
                <div className="flex items-start justify-between gap-4">
                  <AddinIcon icon={manual.icon} name={manual.addinName} size="lg" />
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      manual.commerce.isPremium ? "bg-primary/10 text-primary" : "bg-card text-muted-foreground"
                    }`}
                  >
                    {manual.commerce.isPremium ? content.premiumLabel : content.freeLabel}
                  </span>
                </div>
                <h2 className="mt-5 font-headline text-xl font-semibold tracking-[-0.01em] text-foreground">
                  {manual.title[locale]}
                </h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{manual.excerpt[locale]}</p>
                <span className="link-more mt-auto pt-5 text-[0.9375rem]">
                  {content.viewManualCta}
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
