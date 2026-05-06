import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CreditCard, Download, Mail, ShieldCheck, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="bg-background">
      <section className="border-b bg-[linear-gradient(180deg,_rgba(8,145,178,0.08),_transparent_55%)]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link
            href="/en/bimtools"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to BIMtools
          </Link>

          <div className="mt-8 max-w-4xl">
            <Badge className="rounded-full">
              <Star className="mr-1 h-3 w-3" />
              Premium subscription
            </Badge>
            <h1 className="mt-6 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Access every premium BIMtools add-in with one subscription
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              BIMtools Premium is built for professionals and teams who need real Revit automation, faster production
              workflows, and full access to the premium ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full">
                <Link href={paypalUrl} target="_blank" rel="noreferrer">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pay with PayPal
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="#payment">View full process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/70 bg-card/70">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Monthly plan</CardTitle>
              <CardDescription>Best for starting quickly and measuring time savings in real projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-foreground">USD 20</div>
              <p className="mt-1 text-sm text-muted-foreground">per month</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>Access to every premium add-in</li>
                <li>Lower commitment to get started</li>
                <li>Full premium ecosystem included</li>
              </ul>
              <Button asChild className="mt-6 rounded-full">
                <Link href="#payment">Subscribe monthly</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/30 bg-card/80 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Yearly plan</CardTitle>
              <CardDescription>Best value if BIMtools is already part of your daily workflow.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-foreground">USD 100</div>
              <p className="mt-1 text-sm text-muted-foreground">per year</p>
              <p className="mt-3 text-sm font-medium text-foreground">Best value for teams and continuous usage.</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>Access to every premium add-in</li>
                <li>Best pricing for long-term use</li>
                <li>One subscription for the full premium stack</li>
              </ul>
              <Button asChild className="mt-6 rounded-full">
                <Link href="#payment">Subscribe yearly</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y bg-secondary/40">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Process</p>
            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              How purchase and activation work
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                  <Download className="h-5 w-5 text-primary" />
                  1. Try the installer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  If you want to review the BIMtools environment first, download and install the trial version.
                </p>
                <Button asChild variant="outline" size="sm" className="mt-5 rounded-full">
                  <Link href="/en/download">Download trial</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                  <CreditCard className="h-5 w-5 text-primary" />
                  2. Pay with PayPal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  In your payment, specify whether you want the <strong>USD 20 monthly</strong> access or the{" "}
                  <strong>USD 100 yearly</strong> access.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  3. Request activation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  After payment, email {activationEmail} to request activation for your premium access.
                </p>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="mt-5 rounded-full px-0 text-primary hover:text-primary"
                >
                  <Link href={`mailto:${activationEmail}?subject=BIMtools%20Premium%20Activation`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send activation email
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="payment" className="container mx-auto scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Payment</p>
            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Buy your premium access
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Before you complete the payment, make sure your plan is clear:
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
              <li>
                <strong>Monthly:</strong> USD 20
              </li>
              <li>
                <strong>Yearly:</strong> USD 100
              </li>
              <li>After payment, send your activation email to {activationEmail}</li>
            </ul>
          </div>

          <Card className="border-primary/30 bg-card/85 shadow-xl lg:min-h-[32rem]">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Pay with PayPal</CardTitle>
              <CardDescription>
                Open PayPal, complete the purchase, then email {activationEmail} and indicate whether your payment
                corresponds to the monthly or yearly plan.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col justify-between space-y-6">
              <div className="rounded-[1.75rem] border border-primary/20 bg-primary/10 p-6">
                <p className="text-sm font-semibold text-foreground">Before paying</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>If you want monthly access, choose the USD 20 plan</li>
                  <li>If you want yearly access, choose the USD 100 plan</li>
                  <li>Then request activation by email</li>
                </ul>
              </div>

              <div className="space-y-4">
                <Button asChild className="w-full rounded-full py-6 text-base">
                  <Link href={paypalUrl} target="_blank" rel="noreferrer">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Open PayPal payment
                  </Link>
                </Button>
                <p className="text-xs leading-6 text-muted-foreground">
                  If the payment does not clearly state the plan, include it in your activation email together with
                  your payment receipt.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4">
        <div className="container mx-auto flex justify-end">
          <Button asChild className="pointer-events-auto rounded-full px-6 shadow-xl">
            <Link href={paypalUrl} target="_blank" rel="noreferrer">
              <CreditCard className="mr-2 h-4 w-4" />
              Pay with PayPal
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
