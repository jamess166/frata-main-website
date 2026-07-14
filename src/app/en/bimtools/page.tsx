import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { HashScrollHandler } from "@/components/layout/hash-scroll-handler";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { Stat } from "@/components/site/stat";
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

export default function BimtoolsPageEn() {
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
              Revit add-ins built in production, not in a lab.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Tools that accelerate repetitive work, structure model information and improve
              day-to-day efficiency for teams working in Revit every day.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                <Link href="/en/bimtools/subscription">Premium subscription</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
              >
                <Link href="/en/download">Download installer</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
              <Stat value={overview.totalAddins} label="Documented add-ins" />
              <Stat value={suites.length} label="Work areas" />
              <Stat value={overview.premiumAddins} label="Premium tools" />
              <Stat value={overview.freeAddins} label="Free tools" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Suites ───────────────────────────────────────────── */}
      <section id="suites" className="scroll-mt-24 border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Suites</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              Choose a suite and enter its add-ins.
            </h2>
          </Reveal>

          <div className="mt-16">
            {suites.map((suite, i) => (
              <Reveal key={suite.id} delay={i * 60}>
                <Link href={`/en/bimtools/suite/${suite.id}`} className="block">
                  <div className="group grid gap-6 border-t border-border py-10 md:grid-cols-[90px_1fr_auto] md:gap-8 lg:py-12">
                    <span className="font-code text-sm text-muted-foreground transition-colors group-hover:text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-headline text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                        {suite.label}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                        {suite.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                        {suite.manuals.map((manual) => (
                          <span
                            key={manual.slug}
                            className="inline-flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <AddinIcon icon={manual.icon} name={manual.addinName} size="sm" />
                            {manual.title.en.split(" - ")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary md:flex">
                      {suite.manuals.length} add-ins
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free vs Premium ──────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>Free vs Premium</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              Start free. Scale when you need it.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col bg-background p-8 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Free · No cost
                </p>
                <h3 className="mt-4 font-headline text-2xl font-bold text-foreground sm:text-3xl">
                  Explore BIMtools
                </h3>
                <ul className="mt-8 flex-1 space-y-4 text-sm leading-7 text-muted-foreground">
                  <li className="border-t border-border pt-4">Access to free add-ins inside the suite</li>
                  <li className="border-t border-border pt-4">Installer access and BIMtools environment setup</li>
                  <li className="border-t border-border pt-4">Manual and feature review</li>
                  <li className="border-t border-border pt-4">A clear base for deciding whether Premium fits your team</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="mt-10 w-full rounded-none border-border text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary sm:w-auto"
                >
                  <Link href="/en/download">Download trial</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={100} className="h-full">
              <div className="flex h-full flex-col bg-secondary p-8 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Premium · USD 20/month or USD 100/year
                </p>
                <h3 className="mt-4 font-headline text-2xl font-bold text-foreground sm:text-3xl">
                  Every premium add-in
                </h3>
                <ul className="mt-8 flex-1 space-y-4 text-sm leading-7 text-muted-foreground">
                  <li className="border-t border-border pt-4">Access to every premium add-in with one subscription</li>
                  <li className="border-t border-border pt-4">Advanced automation for modeling, management and structures</li>
                  <li className="border-t border-border pt-4">Faster repetitive work and stronger model control</li>
                  <li className="border-t border-border pt-4">Premium access activation after payment</li>
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                    <Link href="/en/bimtools/subscription">View premium subscription</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-none border-border text-xs font-medium uppercase tracking-[0.14em] hover:bg-background"
                  >
                    <Link href="/en/#contact">Ask about activation</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
