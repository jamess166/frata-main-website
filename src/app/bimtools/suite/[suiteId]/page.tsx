import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CreditCard, Download, Layers3, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    return { title: "Suite no encontrada" };
  }

  return {
    title: `${suite.label} | BIMtools`,
    description: suite.description,
    alternates: {
      canonical: `https://www.frataingenieros.com/bimtools/suite/${suite.id}`,
    },
  };
}

export default async function BimtoolsSuitePage({ params }: SuitePageProps) {
  const { suiteId } = await params;
  const suite = getBimtoolsSuiteWithManuals(suiteId);

  if (!suite) notFound();

  return (
    <div className="bg-background">
      <section className="border-b bg-[linear-gradient(180deg,_rgba(8,145,178,0.08),_transparent_55%)]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link
            href="/bimtools"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a BIMtools
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Layers3 className="h-4 w-4" />
              {suite.label}
            </div>
            <h1 className="mt-6 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Addins de la suite {suite.label}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{suite.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full">
                  <Link href="/bimtools/suscripcion">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Suscribirse
                  </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/download">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar prueba
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {suite.manuals.map((manual) => (
            <Link key={manual.slug} href={`/bimtools/manual/${manual.slug}`} className="block h-full">
              <Card className="h-full border-border/70 bg-card/75 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <CardDescription>{manual.addinName}</CardDescription>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        manual.commerce.isPremium
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-background text-muted-foreground"
                      }`}
                    >
                      {manual.commerce.isPremium ? (
                        <>
                          <Star className="mr-1 h-3 w-3" />
                          Premium
                        </>
                      ) : (
                        "Gratis"
                      )}
                    </span>
                  </div>
                  <CardTitle className="font-headline text-2xl leading-tight">{manual.title.es}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">{manual.excerpt.es}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
