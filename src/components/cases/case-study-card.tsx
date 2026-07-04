import Image from "next/image";
import { CheckCircle2, Building2, Wrench, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  locale?: "es" | "en";
}

const LABELS = {
  es: {
    challenge: "Desafío",
    solution: "Solución implementada",
    result: "Resultado",
    imagePlaceholder: "Imagen del proyecto",
  },
  en: {
    challenge: "Challenge",
    solution: "Solution",
    result: "Result",
    imagePlaceholder: "Project image",
  },
} as const;

export function CaseStudyCard({ caseStudy, locale = "es" }: CaseStudyCardProps) {
  const labels = LABELS[locale];
  const { client, sector, service, technologies, challenge, solution, result, image } = caseStudy;

  return (
    <article className="overflow-hidden rounded-3xl border bg-card/75 shadow-sm">
      {/* image or placeholder */}
      {image ? (
        <div className="relative h-56 w-full overflow-hidden sm:h-64">
          <Image
            src={image}
            alt={`${client} — ${sector}`}
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      ) : (
        <div className="flex h-56 w-full items-center justify-center bg-secondary/60 sm:h-64">
          <Building2 className="h-12 w-12 text-muted-foreground/30" />
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* header */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{sector}</p>
            <h3 className="mt-1 font-headline text-xl font-bold sm:text-2xl">{client}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{service}</p>
          </div>
        </div>

        {/* tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* content sections */}
        <div className="mt-6 grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Lightbulb className="h-4 w-4 text-accent" />
              {labels.challenge}
            </div>
            <p className="text-sm leading-7 text-muted-foreground">{challenge}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Wrench className="h-4 w-4 text-primary" />
              {labels.solution}
            </div>
            <p className="text-sm leading-7 text-muted-foreground">{solution}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {labels.result}
            </div>
            <p className="text-sm leading-7 text-muted-foreground">{result}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
