import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Eyebrow } from "@/components/site/eyebrow";
import { getBimtoolsSuitesWithManuals } from "@/lib/bimtools";
import { withLocale, type Locale } from "@/lib/locale";
import type { BimtoolsManualIndexContent } from "@/content/bimtools-manual-index";

export function BimtoolsManualIndexView({
  locale,
  content,
}: {
  locale: Locale;
  content: BimtoolsManualIndexContent;
}) {
  const suites = getBimtoolsSuitesWithManuals();

  return (
    <>
      <section>
        <div className="container mx-auto px-5 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-4xl font-headline text-display-lg text-foreground">{content.heading}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{content.intro}</p>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <Accordion type="multiple" className="space-y-3">
            {suites.map((suite) => (
              <AccordionItem key={suite.id} value={suite.id} className="overflow-hidden rounded-2xl border-b-0 bg-surface">
                <AccordionTrigger className="px-6 py-6 hover:no-underline lg:px-8">
                  <div className="flex min-w-0 flex-1 flex-col gap-1 text-left md:flex-row md:items-baseline md:gap-6">
                    <h2 className="font-headline text-title text-foreground">{suite.label}</h2>
                    <p className="min-w-0 flex-1 text-[0.9375rem] text-muted-foreground">{suite.description[locale]}</p>
                    <span className="shrink-0 pr-4 text-sm text-muted-foreground">
                      {suite.manuals.length} {content.manualsSuffix}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-3 pb-3 lg:px-4">
                  <div className="overflow-hidden rounded-xl bg-card">
                    {suite.manuals.map((manual) => (
                      <Link
                        key={manual.slug}
                        href={withLocale(locale, `/bimtools/manual/${manual.slug}`)}
                        className="group flex items-center gap-4 border-t border-border px-4 py-3 transition-colors first:border-t-0 hover:bg-accent/60 active:bg-accent"
                      >
                        <AddinIcon icon={manual.icon} name={manual.addinName} size="md" />
                        <p className="min-w-0 flex-1 truncate text-[0.9375rem] text-foreground">{manual.addinName}</p>
                        <span
                          className={`text-xs font-medium ${manual.commerce.isPremium ? "text-primary" : "text-muted-foreground"}`}
                        >
                          {manual.commerce.isPremium ? content.premiumLabel : content.freeLabel}
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground/60" aria-hidden />
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
