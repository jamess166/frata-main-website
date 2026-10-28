import Link from "next/link";
import { Check, ChevronLeft, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";
import { withLocale, type Locale } from "@/lib/locale";
import {
  paypalUrl,
  type SubscriptionPageContent,
  type SubscriptionPlanCard,
} from "@/content/bimtools-subscription";

function PlanCard({ plan, anchor }: { plan: SubscriptionPlanCard; anchor: string }) {
  return (
    <div className={`flex h-full flex-col rounded-tile bg-surface p-8 ${plan.highlight ? "ring-2 ring-primary" : ""}`}>
      <p className={`text-[0.9375rem] font-semibold ${plan.highlight ? "text-primary" : "text-foreground"}`}>{plan.badge}</p>
      <p className="mt-4 font-headline text-5xl font-semibold tracking-[-0.03em] text-foreground">{plan.price}</p>
      <p className="mt-1 text-[0.9375rem] text-muted-foreground">{plan.period}</p>
      <ul className="mt-7 flex-1 space-y-3">
        {plan.items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-foreground">
            <Check className={`mt-0.5 h-5 w-5 shrink-0 ${plan.highlight ? "text-primary" : "text-muted-foreground"}`} aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <Button asChild size="lg" variant={plan.highlight ? "default" : "secondary"} className={`mt-9 w-full ${plan.highlight ? "" : "bg-card"}`}>
        <Link href={`#${anchor}`}>{plan.cta}</Link>
      </Button>
    </div>
  );
}

export function BimtoolsSubscriptionView({
  locale,
  content,
}: {
  locale: Locale;
  content: SubscriptionPageContent;
}) {
  const anchor = content.payment.anchorId;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <Reveal>
            <Link
              href={withLocale(locale, "/bimtools")}
              className="-ml-1 inline-flex items-center gap-0.5 text-[0.9375rem] text-primary hover:underline underline-offset-4"
            >
              <ChevronLeft className="h-4 w-4" />
              {content.backToBimtools}
            </Link>
          </Reveal>
          <Reveal>
            <Eyebrow className="mt-10">{content.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal>
            <h1 className="mt-3 max-w-4xl font-headline text-display-lg text-foreground">
              {content.heading.line1}
              <br />
              {content.heading.line2}
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{content.intro}</p>
          </Reveal>
          <Reveal>
            <p className="mt-3 max-w-2xl text-sm font-medium text-primary">
              {content.introPriceNote}
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={paypalUrl} target="_blank" rel="noreferrer">
                  {content.payWithPaypalCta}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
               
              >
                <Link href={`#${anchor}`}>{content.seeProcessCta}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Planes ───────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-5 lg:grid-cols-3">
            <Reveal className="h-full">
              <PlanCard plan={content.plans.monthly} anchor={anchor} />
            </Reveal>
            <Reveal className="h-full">
              <PlanCard plan={content.plans.quarterly} anchor={anchor} />
            </Reveal>
            <Reveal className="h-full">
              <PlanCard plan={content.plans.yearly} anchor={anchor} />
            </Reveal>
          </div>
          <Reveal>
            <p className="mt-10 max-w-2xl text-sm leading-7 text-muted-foreground">
              {content.customization.text}{" "}
              <Link
                href={withLocale(locale, "/#contact")}
                className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
              >
                {content.customization.ctaLabel}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Proceso ──────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto grid gap-14 px-5 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
          <div>
            <Reveal>
              <Eyebrow>{content.process.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="mt-3 font-headline text-display-lg text-foreground">
                {content.process.heading}
              </h2>
            </Reveal>
          </div>
          <div>
            {content.process.steps.map((step, i) => (
              <Reveal key={step.title}>
                <NumberedRow index={String(i + 1)} title={step.title} description={step.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pago ─────────────────────────────────────────────── */}
      <section id={anchor} className="scroll-mt-16">
        <div className="container mx-auto grid gap-14 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8 lg:py-28">
          <div>
            <Reveal>
              <Eyebrow>{content.payment.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 className="mt-3 font-headline text-display-lg text-foreground">
                {content.payment.heading}
              </h2>
            </Reveal>
            <Reveal>
              <ul className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
                <li className="border-t border-border pt-4">
                  <strong className="text-foreground">{content.payment.summary.monthlyLabel}</strong>{" "}
                  {content.plans.monthly.price}
                </li>
                <li className="border-t border-border pt-4">
                  <strong className="text-foreground">{content.payment.summary.quarterlyLabel}</strong>{" "}
                  {content.plans.quarterly.price}
                </li>
                <li className="border-t border-border pt-4">
                  <strong className="text-foreground">{content.payment.summary.yearlyLabel}</strong>{" "}
                  {content.plans.yearly.price}
                </li>
                <li className="border-t border-border pt-4">{content.payment.summary.afterPayment}</li>
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-tile bg-surface p-8 lg:p-10">
              <h3 className="font-headline text-2xl font-semibold text-foreground sm:text-3xl">
                {content.payment.card.heading}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{content.payment.card.intro}</p>
              <ul className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
                {content.payment.card.bullets.map((bullet) => (
                  <li key={bullet} className="border-t border-border pt-4">
                    {bullet}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-10 w-full text-sm font-medium">
                <Link href={paypalUrl} target="_blank" rel="noreferrer">
                  <CreditCard className="mr-2 h-4 w-4" />
                  {content.payment.card.cta}
                </Link>
              </Button>
              <p className="mt-4 text-xs leading-6 text-muted-foreground">{content.payment.card.disclaimer}</p>
              <Link
                href={withLocale(locale, "/bimtools/privacy")}
                className="mt-6 inline-block text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary"
              >
                {content.payment.card.privacyLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
