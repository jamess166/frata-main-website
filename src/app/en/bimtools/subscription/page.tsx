import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "BIMtools Premium Subscription | Frata",
  description:
    "BIMtools Premium subscription for Revit. Access every premium add-in for USD 20 per month or USD 100 per year.",
  alternates: {
    canonical: "https://www.frataingenieros.com/en/bimtools/subscription",
  },
};

const activationEmail = "info@frataingenieros.com";
const paypalUrl = "https://www.paypal.com/ncp/payment/Y38JM4SMMDME2";

export default function BimtoolsSubscriptionPageEn() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <Reveal>
            <Link
              href="/en/bimtools"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to BIMtools
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow className="mt-10">Premium subscription</Eyebrow>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="mt-6 max-w-4xl font-headline text-display-lg font-black text-foreground">
              Every premium add-in.
              <br />
              <span className="text-muted-foreground">One subscription.</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              For professionals and teams who want real automation in Revit, faster
              production and full access to the premium ecosystem.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                <Link href={paypalUrl} target="_blank" rel="noreferrer">
                  Pay with PayPal
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
              >
                <Link href="#payment">See full process</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Plans ────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-px border border-border bg-border lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col bg-background p-8 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Monthly plan</p>
                <p className="mt-6 font-headline text-5xl font-black text-foreground">USD 20</p>
                <p className="mt-2 text-sm text-muted-foreground">per month</p>
                <ul className="mt-8 flex-1 space-y-4 text-sm leading-7 text-muted-foreground">
                  <li className="border-t border-border pt-4">Access to every premium add-in</li>
                  <li className="border-t border-border pt-4">Great for starting without a yearly commitment</li>
                  <li className="border-t border-border pt-4">Same full premium ecosystem</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="mt-10 w-full rounded-none border-border text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary sm:w-auto"
                >
                  <Link href="#payment">Subscribe monthly</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={100} className="h-full">
              <div className="flex h-full flex-col bg-secondary p-8 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Yearly plan · Best value
                </p>
                <p className="mt-6 font-headline text-5xl font-black text-foreground">USD 100</p>
                <p className="mt-2 text-sm text-muted-foreground">per year</p>
                <ul className="mt-8 flex-1 space-y-4 text-sm leading-7 text-muted-foreground">
                  <li className="border-t border-border pt-4">Access to every premium add-in</li>
                  <li className="border-t border-border pt-4">Best value for continuous use</li>
                  <li className="border-t border-border pt-4">One access for the whole premium stack</li>
                </ul>
                <Button asChild className="mt-10 w-full rounded-none text-xs font-medium uppercase tracking-[0.14em] sm:w-auto">
                  <Link href="#payment">Subscribe yearly</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>Process</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                How purchase and activation work.
              </h2>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <NumberedRow
                index="01"
                title="Try the installer"
                description="If you want to review the BIMtools environment first, download and install the trial version."
              />
            </Reveal>
            <Reveal delay={80}>
              <NumberedRow
                index="02"
                title="Pay with PayPal"
                description="During payment, indicate whether you want monthly access at USD 20 or yearly access at USD 100."
              />
            </Reveal>
            <Reveal delay={160}>
              <NumberedRow
                index="03"
                title="Request activation"
                description={`After payment, send an email to ${activationEmail} requesting activation of your premium access.`}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Payment ──────────────────────────────────────────── */}
      <section id="payment" className="scroll-mt-24 border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>Payment</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                Buy your premium access.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
                <li className="border-t border-border pt-4">
                  <strong className="text-foreground">Monthly:</strong> USD 20
                </li>
                <li className="border-t border-border pt-4">
                  <strong className="text-foreground">Yearly:</strong> USD 100
                </li>
                <li className="border-t border-border pt-4">
                  After payment, send the activation email to {activationEmail}
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="border border-border bg-secondary p-8 lg:p-12">
              <h3 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
                Pay with PayPal
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Open PayPal, complete your purchase, then write to {activationEmail}{" "}
                indicating whether your payment corresponds to the monthly or yearly plan.
              </p>
              <ul className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
                <li className="border-t border-border pt-4">For monthly access, choose the USD 20 plan</li>
                <li className="border-t border-border pt-4">For yearly access, choose the USD 100 plan</li>
                <li className="border-t border-border pt-4">Then request activation by email</li>
              </ul>
              <Button asChild size="lg" className="mt-10 w-full rounded-none text-xs font-medium uppercase tracking-[0.14em]">
                <Link href={paypalUrl} target="_blank" rel="noreferrer">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Open PayPal payment
                </Link>
              </Button>
              <p className="mt-4 text-xs leading-6 text-muted-foreground">
                If the payment doesn&apos;t make the plan clear, mention it in the activation email along with your receipt.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
