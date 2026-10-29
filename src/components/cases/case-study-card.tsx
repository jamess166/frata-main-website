import { ThemedImage } from "@/components/site/themed-image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { localizeCase, type CaseStudy } from "@/lib/case-studies";
import { type Locale } from "@/lib/locale";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  locale?: Locale;
}

const LABELS: Record<Locale, { challenge: string; solution: string; result: string; article: string }> = {
  es: { challenge: "Desafío", solution: "Solución", result: "Resultado", article: "Leer el caso completo" },
  en: { challenge: "Challenge", solution: "Solution", result: "Result", article: "Read the full story" },
  de: { challenge: "Herausforderung", solution: "Lösung", result: "Ergebnis", article: "Ganze Fallstudie lesen" },
  fr: { challenge: "Défi", solution: "Solution", result: "Résultat", article: "Lire l'étude complète" },
  it: { challenge: "Sfida", solution: "Soluzione", result: "Risultato", article: "Leggi il caso completo" },
  pt: { challenge: "Desafio", solution: "Solução", result: "Resultado", article: "Ler o caso completo" },
  ru: { challenge: "Задача", solution: "Решение", result: "Результат", article: "Читать полностью" },
  zh: { challenge: "挑战", solution: "解决方案", result: "成果", article: "阅读完整案例" },
};

export function CaseStudyCard({ caseStudy, locale = "es" }: CaseStudyCardProps) {
  const labels = LABELS[locale];
  const cs = caseStudy;

  const { client, sector, service, challenge, solution, result, metrics } = localizeCase(cs, locale);

  return (
    <article className="overflow-hidden rounded-tile bg-surface">
      {/* Title first, so the image below reads as part of this project */}
      <header className="px-6 pt-8 sm:px-8 lg:px-12 lg:pt-12">
        <p className="text-sm text-muted-foreground">
          {client} · {sector}
        </p>
        <h2 className="mt-2 max-w-3xl font-headline text-display-md text-foreground">{service}</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {cs.technologies.map((tech) => (
            <li key={tech} className="rounded-full bg-card px-3 py-1 text-xs text-muted-foreground">
              {tech}
            </li>
          ))}
        </ul>
      </header>

      {cs.image && (
        <div className="mt-8 px-3 sm:px-4 lg:px-6">
          <ThemedImage
            src={cs.image}
            darkSrc={cs.imageDark}
            alt={`${client} — ${sector}`}
            width={2000}
            height={1125}
            sizes="(min-width: 1200px) 1150px, 100vw"
            className="aspect-[16/10] w-full rounded-2xl object-cover sm:aspect-[21/9]"
          />
        </div>
      )}

      <div className="px-6 pb-8 pt-8 sm:px-8 lg:px-12 lg:pb-12">
        {metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="font-headline text-5xl font-semibold tracking-[-0.03em] text-foreground">{m.value}</p>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-3">
          {[
            [labels.challenge, challenge],
            [labels.solution, solution],
            [labels.result, result],
          ].map(([title, text]) => (
            <div key={title}>
              <h3 className="text-[1.0625rem] font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        {cs.articleHref && (
          <Link href={cs.articleHref} className="link-more mt-8 text-[1.0625rem]">
            {labels.article}
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </article>
  );
}
