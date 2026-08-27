import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { ManualImageGallery } from "@/components/bimtools/manual-image-gallery";
import { getYoutubeEmbedUrl } from "@/lib/youtube";
import { withLocale, type Locale } from "@/lib/locale";
import type { BimtoolsManualEntry } from "@/lib/generated/bimtools-manuals";
import type { BimtoolsSuiteWithManuals } from "@/lib/bimtools";
import type { BimtoolsManualDetailContent } from "@/content/bimtools-manual-detail";

export async function BimtoolsManualDetailView({
  locale,
  manual,
  currentSuite,
  content,
}: {
  locale: Locale;
  manual: BimtoolsManualEntry;
  currentSuite: BimtoolsSuiteWithManuals | undefined;
  content: BimtoolsManualDetailContent;
}) {
  const renderedMarkdown = await remark().use(html).process(manual.markdown[locale]);
  const youtubeEmbedUrl = getYoutubeEmbedUrl(manual.media.youtubeUrl, manual.media.youtubeId);

  return (
    <>
      <div className="container mx-auto px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <a
          href={withLocale(locale, "/bimtools#suites")}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          {content.backToBimtools}
        </a>
      </div>

      <div className="container mx-auto grid gap-14 px-4 py-14 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:px-8 lg:py-20">
        <aside className="h-fit lg:sticky lg:top-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{manual.suiteLabel}</p>
          <div className="mt-5 flex items-start gap-4">
            <AddinIcon icon={manual.icon} name={manual.addinName} size="lg" />
            <h1 className="min-w-0 font-headline text-3xl font-bold leading-tight tracking-tight text-foreground">
              {manual.title[locale]}
            </h1>
          </div>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {manual.commerce.isPremium ? (
              <>
                <span className="text-primary">{content.premiumLabel}</span>
                {manual.commerce.trialDays ? content.trialSuffix(manual.commerce.trialDays) : null}
              </>
            ) : (
              content.freeLabel
            )}
          </p>
          <p className="mt-5 border-t border-border pt-5 text-sm leading-7 text-muted-foreground">
            {manual.excerpt[locale]}
          </p>

          <div className="mt-8 space-y-3">
            {manual.commerce.isPremium ? (
              <p className="text-sm leading-7 text-muted-foreground">
                {content.pricingLine.connector1}{" "}
                <strong className="text-foreground">{content.pricingLine.monthly}</strong>,{" "}
                <strong className="text-foreground">{content.pricingLine.quarterly}</strong>{" "}
                {content.pricingLine.connector2}{" "}
                <strong className="text-foreground">{content.pricingLine.yearly}</strong>.
              </p>
            ) : null}
            {manual.commerce.isPremium && manual.commerce.purchaseUrl ? (
              <Link
                href={withLocale(locale, "/bimtools/suscripcion")}
                className="inline-flex w-full items-center justify-center bg-primary px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                {content.buySubscriptionCta}
              </Link>
            ) : null}
            <Link
              href={withLocale(locale, "/download")}
              className="inline-flex w-full items-center justify-center border border-border px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {content.downloadTrialCta}
            </Link>
          </div>

          {currentSuite ? (
            <div className="mt-10 border-t border-border pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {content.moreToolsLabel}
              </p>
              <div className="mt-4">
                {currentSuite.manuals.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={withLocale(locale, `/bimtools/manual/${entry.slug}`)}
                    className={`flex items-center gap-3 border-t border-border py-3 text-sm transition-colors ${
                      entry.slug === manual.slug ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <AddinIcon icon={entry.icon} name={entry.addinName} size="sm" />
                    <span className="truncate">{entry.addinName}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </aside>

        <article className="min-w-0">
          <div
            className="prose prose-invert max-w-none prose-headings:font-headline prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: renderedMarkdown.toString() }}
          />

          {manual.media.images.length > 0 ? (
            <section className="mt-14 border-t border-border pt-10">
              <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground">
                {content.galleryHeading}
              </h2>
              <ManualImageGallery images={manual.media.images} locale={locale} />
            </section>
          ) : null}

          {youtubeEmbedUrl ? (
            <section className="mt-14 border-t border-border pt-10">
              <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground">
                {content.videoHeading}
              </h2>
              <div className="mt-6 overflow-hidden border border-border">
                <div className="aspect-video">
                  <iframe
                    src={youtubeEmbedUrl}
                    title={`${manual.title[locale]} video`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>
          ) : null}

          <div className="mt-14 flex flex-wrap gap-4 border-t border-border pt-10">
            <Link
              href={withLocale(locale, "/bimtools")}
              className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {content.viewBimtoolsCta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={withLocale(locale, "/download")}
              className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {content.downloadTrialShortCta}
            </Link>
            {manual.commerce.isPremium && manual.commerce.purchaseUrl ? (
              <Link
                href={withLocale(locale, "/bimtools/suscripcion")}
                className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                {content.buySubscriptionCta}
              </Link>
            ) : null}
          </div>
          <Link
            href={withLocale(locale, "/bimtools/privacy")}
            className="mt-6 inline-block text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            {content.privacyLabel}
          </Link>
        </article>
      </div>
    </>
  );
}
