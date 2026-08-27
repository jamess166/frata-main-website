import { CaseStudyCard } from "@/components/cases/case-study-card";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { caseStudies } from "@/lib/case-studies";
import type { Locale } from "@/lib/locale";
import type { CasosPageContent } from "@/content/casos";

export function CasosView({ locale, content }: { locale: Locale; content: CasosPageContent }) {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
          <Reveal>
            <Eyebrow>{content.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-headline text-display-lg font-black text-foreground">
              {content.heading.line1}
              <br />
              <span className="text-muted-foreground">{content.heading.line2}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">{content.intro}</p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 60}>
              <CaseStudyCard caseStudy={cs} index={String(i + 1).padStart(2, "0")} locale={locale} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
