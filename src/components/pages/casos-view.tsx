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
        <div className="container mx-auto px-5 pb-12 pt-16 sm:px-6 lg:px-10 lg:pb-16 lg:pt-24">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-4xl font-headline text-display-lg text-foreground">
            {content.heading.line1}
            <br />
            {content.heading.line2}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{content.intro}</p>
        </div>
      </section>

      <section>
        <div className="container mx-auto space-y-12 px-5 pb-8 sm:px-6 lg:space-y-20 lg:px-10">
          {caseStudies.map((cs) => (
            <Reveal key={cs.slug}>
              <CaseStudyCard caseStudy={cs} locale={locale} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
