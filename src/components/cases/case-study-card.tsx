import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";
import { resolveBilingual, type Locale } from "@/lib/locale";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: string;
  locale?: Locale;
}

const LABELS: Record<Locale, { challenge: string; solution: string; result: string }> = {
  es: { challenge: "Desafío", solution: "Solución", result: "Resultado" },
  en: { challenge: "Challenge", solution: "Solution", result: "Result" },
  de: { challenge: "Herausforderung", solution: "Lösung", result: "Ergebnis" },
  fr: { challenge: "Défi", solution: "Solution", result: "Résultat" },
  it: { challenge: "Sfida", solution: "Soluzione", result: "Risultato" },
  pt: { challenge: "Desafio", solution: "Solução", result: "Resultado" },
  ru: { challenge: "Задача", solution: "Решение", result: "Результат" },
  zh: { challenge: "挑战", solution: "解决方案", result: "成果" },
};

export function CaseStudyCard({ caseStudy, index, locale = "es" }: CaseStudyCardProps) {
  const labels = LABELS[locale];
  const cs = caseStudy;

  // Per-case-study detail text only ever has Spanish/English content; every
  // other locale falls back to English.
  const sector = resolveBilingual(locale, cs.sector, cs.sectorEn);
  const service = resolveBilingual(locale, cs.service, cs.serviceEn);
  const challenge = resolveBilingual(locale, cs.challenge, cs.challengeEn);
  const solution = resolveBilingual(locale, cs.solution, cs.solutionEn);
  const result = resolveBilingual(locale, cs.result, cs.resultEn);

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
              {cs.metrics.map((m) => {
                const label = resolveBilingual(locale, m.label, m.labelEn);
                return (
                  <div key={label} className="border-t border-border pt-4">
                    <p className="font-headline text-3xl font-bold text-primary sm:text-4xl">{m.value}</p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{label}</p>
                  </div>
                );
              })}
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
