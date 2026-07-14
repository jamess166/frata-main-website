import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: string;
  locale?: "es" | "en";
}

const LABELS = {
  es: {
    challenge: "Desafío",
    solution: "Solución",
    result: "Resultado",
  },
  en: {
    challenge: "Challenge",
    solution: "Solution",
    result: "Result",
  },
} as const;

export function CaseStudyCard({ caseStudy, index, locale = "es" }: CaseStudyCardProps) {
  const labels = LABELS[locale];
  const isEn = locale === "en";
  const cs = caseStudy;

  const sector = isEn ? cs.sectorEn ?? cs.sector : cs.sector;
  const service = isEn ? cs.serviceEn ?? cs.service : cs.service;
  const challenge = isEn ? cs.challengeEn ?? cs.challenge : cs.challenge;
  const solution = isEn ? cs.solutionEn ?? cs.solution : cs.solution;
  const result = isEn ? cs.resultEn ?? cs.result : cs.result;

  return (
    <article className="border-t border-border py-14 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[90px_1fr] lg:gap-8">
        {index && <span className="font-code text-sm text-muted-foreground">{index}</span>}

        <div>
          {/* header */}
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {cs.client} · {sector}
          </p>
          <h3 className="mt-4 max-w-3xl font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {service}
          </h3>

          {/* tech */}
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {cs.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* image */}
          {cs.image && (
            <div className="mt-10 overflow-hidden">
              <Image
                src={cs.image}
                alt={`${cs.client} — ${sector}`}
                width={1400}
                height={700}
                loading="lazy"
                className="h-64 w-full object-cover grayscale transition duration-500 hover:grayscale-0 sm:h-80 lg:h-96"
              />
            </div>
          )}

          {/* metrics */}
          {cs.metrics && cs.metrics.length > 0 && (
            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
              {cs.metrics.map((m) => (
                <div key={isEn ? m.labelEn : m.label} className="border-t border-border pt-4">
                  <p className="font-headline text-3xl font-bold text-primary sm:text-4xl">{m.value}</p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {isEn ? m.labelEn : m.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* challenge / solution / result */}
          <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {labels.challenge}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{challenge}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {labels.solution}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{solution}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {labels.result}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{result}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
