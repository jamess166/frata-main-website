import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, Download, Layers3, Mail, Sparkles, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getBimtoolsOverview, getBimtoolsSuitesWithManuals } from "@/lib/bimtools";

export const metadata: Metadata = {
  title: "BIMtools for Revit | BIM Automation by Frata",
  description:
    "A suite of Revit add-ins with tools for exports, navigation, structures, parameters and BIM workflow automation.",
  alternates: {
    canonical: "https://www.frataingenieros.com/en/bimtools",
  },
};

const suites = getBimtoolsSuitesWithManuals();
const overview = getBimtoolsOverview();
const activationEmail =
  suites.flatMap((suite) => suite.manuals).find((manual) => manual.commerce.activationEmail)?.commerce.activationEmail ||
  "info@frataingenieros.com";

export default function BimtoolsPageEn() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b bg-[radial-gradient(circle_at_top_left,_rgba(8,145,178,0.24),_transparent_32%),linear-gradient(180deg,_hsl(var(--background)),_hsl(var(--secondary)))]">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                BIMtools by Frata
              </div>
              <h1 className="mt-6 max-w-3xl font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Revit add-ins built for real productivity in consulting, modeling and structural workflows.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                BIMtools brings together applications designed to accelerate repetitive work, structure model
                information and improve day-to-day efficiency inside Revit.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-sm">
                  <Star className="mr-1 h-3.5 w-3.5" />
                  {overview.premiumAddins} premium
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 text-sm">
                  {overview.freeAddins} free
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 text-sm">
                  Monthly or yearly premium subscription
                </Badge>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-foreground">
                  <strong>USD 20/month</strong>
                </span>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-foreground">
                  <strong>USD 100/year</strong>
                </span>
                <span className="rounded-full border px-4 py-2">Access to all premium add-ins</span>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/en/bimtools/subscription">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Buy premium subscription
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/en/download">
                    <Download className="mr-2 h-4 w-4" />
                    Download trial installer
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="border-primary/20 bg-card/80 shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">A faster, more controlled way to work in Revit</CardTitle>
                <CardDescription>
                  BIMtools helps teams reduce manual work, organize model information, and keep more control over
                  day-to-day production inside Revit.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border bg-background/70 p-4">
                  <div className="text-3xl font-bold text-primary">{overview.totalAddins}</div>
                  <p className="mt-1 text-sm text-muted-foreground">documented add-ins</p>
                </div>
                <div className="rounded-2xl border bg-background/70 p-4">
                  <div className="text-3xl font-bold text-primary">{suites.length}</div>
                  <p className="mt-1 text-sm text-muted-foreground">work areas</p>
                </div>
                <div className="rounded-2xl border bg-background/70 p-4">
                  <div className="text-3xl font-bold text-primary">{overview.premiumAddins}</div>
                  <p className="mt-1 text-sm text-muted-foreground">premium tools</p>
                </div>
                <div className="rounded-2xl border bg-background/70 p-4">
                  <div className="text-3xl font-bold text-primary">{overview.freeAddins}</div>
                  <p className="mt-1 text-sm text-muted-foreground">free tools</p>
                </div>
                <div className="col-span-2 rounded-2xl border bg-background/70 p-4">
                  <p className="text-sm font-medium text-foreground">Built for teams that need to deliver more with less friction</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Exports, parameter control, smart selection, level workflows, structural tools, and automation
                    applied to real BIM production tasks.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Suites</p>
          <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Choose a suite and enter its add-ins
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Each suite groups tools for a specific BIM workflow. Entering a suite takes you straight to its add-ins and
            documentation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {suites.map((suite) => (
            <Link key={suite.id} href={`/en/bimtools/suite/${suite.id}`} className="block h-full">
              <Card className="h-full border-border/70 bg-card/70 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Layers3 className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-2xl">{suite.label}</CardTitle>
                      <CardDescription>{suite.manuals.length} documented add-ins</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{suite.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {suite.manuals.map((manual) => (
                      <span key={manual.slug} className="rounded-full border px-3 py-1.5 text-sm text-foreground">
                        {manual.title.en.split(" - ")[0]}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                    View suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t bg-secondary/40">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Free vs Premium</p>
            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Understand the difference between free access and premium access
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              First choose between working with free tools or going with the full premium ecosystem. If you choose
              Premium, you can then define whether your access will be monthly or yearly from the subscription page.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="rounded-full">Free</Badge>
                  <span className="text-sm text-muted-foreground">No cost</span>
                </div>
                <CardTitle className="font-headline text-3xl">Start and explore BIMtools</CardTitle>
                <CardDescription>
                  Built for installing the suite, reviewing the environment, and working with free tools.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-semibold text-foreground">What you get</p>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>Access to free add-ins inside the suite</li>
                  <li>Installer access and BIMtools environment setup</li>
                  <li>Manual and feature review</li>
                  <li>A clear base for deciding whether Premium fits your team</li>
                </ul>
                <Button asChild variant="outline" className="mt-4 rounded-full">
                  <Link href="/en/download">
                    <Download className="mr-2 h-4 w-4" />
                    Download trial
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-card/80 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Badge className="rounded-full">
                    <Star className="mr-1 h-3 w-3" />
                    Premium
                  </Badge>
                  <span className="text-sm text-primary">USD 20/month or USD 100/year</span>
                </div>
                <CardTitle className="font-headline text-3xl">Unlock every premium add-in</CardTitle>
                <CardDescription>
                  One subscription gives you access to the full BIMtools premium ecosystem.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-semibold text-foreground">What you get</p>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>Access to every premium add-in with one subscription</li>
                  <li>Advanced automation for modeling, management, and structures</li>
                  <li>Faster repetitive work and stronger model control</li>
                  <li>Premium access activation after payment</li>
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild className="rounded-full">
                    <Link href="/en/bimtools/subscription">
                      <CreditCard className="mr-2 h-4 w-4" />
                      View premium subscription
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="rounded-full px-0 text-primary hover:text-primary">
                    <Link href={`mailto:${activationEmail}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Ask about activation
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
