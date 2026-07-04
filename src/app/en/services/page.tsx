import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceContentEn } from "@/lib/service-content-en";

export const metadata: Metadata = {
  title: "BIM Services",
  description:
    "BIM consulting, modeling, remote teams, on-site support and custom Revit addin development. Frata Ingenieros services for AEC companies in Peru and LATAM.",
  alternates: {
    canonical: "https://www.frataingenieros.com/en/services",
  },
  openGraph: {
    title: "BIM Services | Frata Ingenieros",
    description:
      "BIM consulting, modeling, remote teams, on-site support and custom Revit addin development.",
    url: "https://www.frataingenieros.com/en/services",
    siteName: "Frata Ingenieros",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.frataingenieros.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

const PRICING = [
  {
    name: "BIM Assessment",
    price: "from USD 500",
    description:
      "We review your BIM operation, identify gaps and deliver a clear action plan with defined priorities.",
    cta: "Request assessment",
    href: "/en/#contact",
    highlight: false,
  },
  {
    name: "BIM Implementation",
    price: "Custom quote",
    description:
      "Strategy, standardization, training and follow-up to consolidate BIM in your company sustainably.",
    cta: "Talk to Frata",
    href: "/en/#contact",
    highlight: true,
  },
  {
    name: "Custom Addin",
    price: "from USD 1,500",
    description:
      "Purpose-built tools for Revit or Tekla that automate technical workflows and reduce manual work.",
    cta: "Request proposal",
    href: "/en/#contact",
    highlight: false,
  },
];

export default function ServicesEnPage() {
  const services = Object.values(serviceContentEn);

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b hero-gradient-animated">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsl(var(--primary)/0.12),_transparent_40%)]" />
        <div className="container mx-auto px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Services</p>
            <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              BIM capabilities for companies that operate with technical rigor.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              From consulting and modeling to custom software development. Each service is designed to solve
              a real problem in your company's BIM operation.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.slug}
              className="group rounded-2xl border-border/70 bg-card/75 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl"
            >
              <CardHeader>
                <CardTitle className="font-headline text-xl">{service.shortTitle}</CardTitle>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="px-0">
                  <Link href={`/en/services/${service.slug}`}>
                    View details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t bg-secondary/30">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Pricing</p>
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              How much does it cost to work with Frata?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Prices are indicative. Each project is quoted based on scope, complexity and duration.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-3xl border p-8 ${
                  plan.highlight
                    ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border/70 bg-card/75"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{plan.name}</p>
                <p className="mt-3 font-headline text-3xl font-bold">{plan.price}</p>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{plan.description}</p>
                <Button
                  asChild
                  className="mt-8 rounded-full"
                  variant={plan.highlight ? "default" : "outline"}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            * Prices in USD. Values shown are indicative; each proposal is tailored to the specific project scope.
          </p>
        </div>
      </section>

      <section className="border-t">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "More organized BIM teams with less operational friction.",
              "Coordinated models ready to document, review and deliver.",
              "Purpose-built software that automates high-volume repetitive tasks.",
              "BIM processes that hold even when the team changes.",
              "Technical deliverables aligned to client and project requirements.",
              "Production capacity that scales without depending on a single resource.",
            ].map((outcome) => (
              <div key={outcome} className="flex items-start gap-3 rounded-2xl border bg-card/75 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-sm leading-7 text-muted-foreground">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
