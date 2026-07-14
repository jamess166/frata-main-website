import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { getBimtoolsSuiteWithManuals, getBimtoolsSuitesWithManuals } from "@/lib/bimtools";

interface SuitePageProps {
  params: Promise<{
    suiteId: string;
  }>;
}

export async function generateStaticParams() {
  return getBimtoolsSuitesWithManuals().map((suite) => ({ suiteId: suite.id }));
}

export async function generateMetadata({ params }: SuitePageProps): Promise<Metadata> {
  const { suiteId } = await params;
  const suite = getBimtoolsSuiteWithManuals(suiteId);

  if (!suite) {
    return { title: "Suite not found" };
  }

  return {
    title: `${suite.label} | BIMtools`,
    description: suite.description,
    alternates: {
      canonical: `https://www.frataingenieros.com/en/bimtools/suite/${suite.id}`,
    },
  };
}

export default async function BimtoolsSuitePageEn({ params }: SuitePageProps) {
  const { suiteId } = await params;
  const suite = getBimtoolsSuiteWithManuals(suiteId);

  if (!suite) notFound();

  return (
    <>
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
            <Eyebrow className="mt-10">BIMtools Suite</Eyebrow>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="mt-6 max-w-4xl font-headline text-display-lg font-black text-foreground">
              {suite.label}
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">{suite.description}</p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                <Link href="/en/bimtools/subscription">Subscribe</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
              >
                <Link href="/en/download">Download trial</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          {suite.manuals.map((manual, i) => (
            <Reveal key={manual.slug} delay={i * 50}>
              <Link href={`/en/bimtools/manual/${manual.slug}`} className="block">
                <div className="group grid gap-6 border-t border-border py-10 md:grid-cols-[90px_1fr_auto] md:items-start md:gap-8">
                  <span className="font-code text-sm text-muted-foreground transition-colors group-hover:text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-4">
                      <AddinIcon icon={manual.icon} name={manual.addinName} size="lg" />
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                          {manual.addinName} ·{" "}
                          <span className={manual.commerce.isPremium ? "text-primary" : ""}>
                            {manual.commerce.isPremium ? "Premium" : "Free"}
                          </span>
                        </p>
                        <h3 className="mt-2 font-headline text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                          {manual.title.en}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {manual.excerpt.en}
                    </p>
                  </div>
                  <span className="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary md:flex">
                    View manual
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
