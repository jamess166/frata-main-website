import Link from "next/link";
import { ArrowLeft, CreditCard } from "lucide-react";
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
    <div className={`flex h-full flex-col p-8 lg:p-12 ${plan.highlight ? "bg-secondary" : "bg-background"}`}>
      <p
        className={`text-xs font-medium uppercase tracking-[0.2em] ${
          plan.highlight ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {plan.badge}
      </p>
      <p className="mt-6 font-headline text-5xl font-black text-foreground">{plan.price}</p>
      <p className="mt-2 text-sm text-muted-foreground">{plan.period}</p>
      <ul className="mt-8 flex-1 space-y-4 text-sm leading-7 text-muted-foreground">
        {plan.items.map((item) => (
          <li key={item} className="border-t border-border pt-4">
            {item}
          </li>
        ))}
      </ul>
      <Button
        asChild
        variant={plan.highlight ? "default" : "outline"}
        className={`mt-10 w-full rounded-none text-xs font-medium uppercase tracking-[0.14em] sm:w-auto ${
          plan.highlight ? "" : "border-border hover:bg-secondary"
        }`}
      >
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
        <div className="container mx-auto px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <Reveal>
            <Link
              href={withLocale(locale, "/bimtools")}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              {content.backToBimtools}
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow className="mt-10">{content.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="mt-6 max-w-4xl font-headline text-display-lg font-black text-foreground">
              {content.heading.line1}
              <br />
              <span className="text-muted-foreground">{content.heading.line2}</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">{content.intro}</p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                <Link href={paypalUrl} target="_blank" rel="noreferrer">
                  {content.payWithPaypalCta}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
              >
                <Link href={`#${anchor}`}>{content.seeProcessCta}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Planes ───────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
            <Reveal className="h-full">
              <PlanCard plan={content.plans.monthly} anchor={anchor} />
            </Reveal>
            <Reveal delay={100} className="h-full">
              <PlanCard plan={content.plans.quarterly} anchor={anchor} />
            </Reveal>
            <Reveal delay={200} className="h-full">
              <PlanCard plan={content.plans.yearly} anchor={anchor} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Proceso ──────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>{content.process.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                {content.process.heading}
              </h2>
            </Reveal>
          </div>
          <div>
            {content.process.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <NumberedRow index={String(i + 1).padStart(2, "0")} title={step.title} description={step.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pago ─────────────────────────────────────────────── */}
      <section id={anchor} className="scroll-mt-24 border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>{content.payment.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                {content.payment.heading}
              </h2>
            </Reveal>
            <Reveal delay={200}>
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

          <Reveal delay={200}>
            <div className="border border-border bg-secondary p-8 lg:p-12">
              <h3 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
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
              <Button asChild size="lg" className="mt-10 w-full rounded-none text-xs font-medium uppercase tracking-[0.14em]">
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
