import type { Metadata } from "next";
import Link from "next/link";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { getBimtoolsSuitesWithManuals } from "@/lib/bimtools";

export const metadata: Metadata = {
  title: "BIMtools Manuals | Revit Add-in Documentation",
  description:
    "User manuals for Frata BIMtools add-ins in Revit. Explore documentation for exports, parameters, navigation and structural tools.",
  alternates: {
    canonical: "https://www.frataingenieros.com/en/bimtools/manual",
  },
};

const suites = getBimtoolsSuitesWithManuals();

const suiteDescriptions: Record<string, string> = {
  architecture: "Automation to turn architectural room data into modeled floor elements with less manual setup.",
  manage: "Automation for exports, parameters and centralized settings.",
  navigate: "Tools to find, open and select model information faster.",
  structure: "Automation to create, edit and synchronize reinforcement and structural components faster.",
  drawing2d: "Tools for 2D annotation and drawing production with less manual work.",
};

export default function ManualPageEn() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
          <Reveal>
            <Eyebrow>BIMtools manuals</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-headline text-display-lg font-black text-foreground">
              Documentation per add-in.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Review each tool separately: features, scope and usage procedure, taken from
              the add-ins&apos; real documentation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Accordion type="multiple">
            {suites.map((suite, i) => (
              <AccordionItem
                key={suite.id}
                value={suite.id}
                className="border-b-0 border-t border-border"
              >
                <AccordionTrigger className="py-8 hover:no-underline lg:py-10">
                  <div className="grid min-w-0 flex-1 gap-4 text-left md:grid-cols-[90px_1fr_auto] md:items-baseline md:gap-8">
                    <span className="font-code text-sm text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        {suite.label}
                      </h2>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                        {suiteDescriptions[suite.id] ?? suite.description}
                      </p>
                    </div>
                    <span className="hidden text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground md:block">
                      {suite.manuals.length} manuals
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-10">
                  <div className="md:ml-[122px]">
                    {suite.manuals.map((manual) => (
                      <Link
                        key={manual.slug}
                        href={`/en/bimtools/manual/${manual.slug}`}
                        className="group flex items-center gap-4 border-t border-border py-4 transition-colors hover:bg-secondary/50"
                      >
                        <AddinIcon icon={manual.icon} name={manual.addinName} size="md" />
                        <p className="min-w-0 flex-1 truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                          {manual.addinName}
                        </p>
                        <span
                          className={`text-[11px] font-medium uppercase tracking-[0.14em] ${
                            manual.commerce.isPremium ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {manual.commerce.isPremium ? "Premium" : "Free"}
                        </span>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
