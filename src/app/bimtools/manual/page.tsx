import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenText, Layers3, Star } from "lucide-react";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
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
        <Accordion type="multiple" className="space-y-4">
          {suites.map((suite) => (
            <AccordionItem
              key={suite.id}
              value={suite.id}
              className="overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/60 px-6 shadow-sm"
            >
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="flex min-w-0 flex-1 items-center gap-4 text-left">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Layers3 className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h2 className="font-headline text-2xl font-bold text-foreground">{suite.label}</h2>
                      <span className="text-sm text-muted-foreground">{suite.manuals.length} manuales</span>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">{suite.description}</p>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-6">
                <div className="grid gap-3">
                  {suite.manuals.map((manual) => (
                    <Link
                      key={manual.slug}
                      href={`/bimtools/manual/${manual.slug}`}
                      className="flex items-center gap-4 rounded-xl border border-border/70 bg-background/75 px-4 py-3 transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      <AddinIcon icon={manual.icon} name={manual.addinName} size="md" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="truncate font-medium text-foreground">{manual.addinName}</p>
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
                      </div>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
