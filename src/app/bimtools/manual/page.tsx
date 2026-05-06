import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenText, Layers3, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getBimtoolsSuitesWithManuals } from "@/lib/bimtools";

export const metadata: Metadata = {
  title: "Manuales BIMtools | Documentacion de addins Revit",
  description:
    "Manuales de uso para los addins BIMtools de Frata en Revit. Documentacion real de exportacion, parametros, navegacion y herramientas estructurales.",
  alternates: {
    canonical: "https://www.frataingenieros.com/bimtools/manual",
  },
};

const suites = getBimtoolsSuitesWithManuals();

export default function ManualPage() {
  return (
    <div className="bg-background">
      <section className="border-b bg-[linear-gradient(180deg,_rgba(8,145,178,0.08),_transparent_55%)]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <BookOpenText className="h-4 w-4" />
              Manuales BIMtools
            </div>
            <h1 className="mt-6 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Documentacion por addin, dentro de la suite BIMtools.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Consulta cada herramienta por separado para revisar funciones, alcance y procedimiento de uso a partir
              de la documentacion real de tus addins.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          {suites.map((suite) => (
            <div key={suite.id}>
              <div className="flex flex-col gap-4 border-b pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Layers3 className="h-5 w-5" />
                    </div>
                    <h2 className="font-headline text-3xl font-bold">{suite.label}</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground">{suite.description}</p>
                </div>
                <p className="text-sm text-muted-foreground">{suite.manuals.length} manuales disponibles</p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {suite.manuals.map((manual) => (
                  <Link key={manual.slug} href={`/bimtools/manual/${manual.slug}`} className="block h-full">
                    <Card className="h-full border-border/70 bg-card/70 transition-colors hover:border-primary/40">
                      <CardHeader>
                        <div className="flex flex-wrap items-center gap-2">
                          <CardDescription>{manual.addinName}</CardDescription>
                          <Badge variant={manual.commerce.isPremium ? "default" : "outline"} className="rounded-full">
                            {manual.commerce.isPremium ? (
                              <>
                                <Star className="mr-1 h-3 w-3" />
                                Premium
                              </>
                            ) : (
                              "Gratis"
                            )}
                          </Badge>
                        </div>
                        <CardTitle className="font-headline text-2xl leading-tight">{manual.title.es}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex h-full flex-col">
                        <p className="flex-grow text-sm leading-7 text-muted-foreground">{manual.excerpt.es}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
