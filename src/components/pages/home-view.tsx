import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeContactSection } from "@/components/home/contact-section";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";
import { Stat } from "@/components/site/stat";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";
import { withLocale, type Locale } from "@/lib/locale";
import { homeContent, techStack, featuredCaseSlugs, type HomePageContent } from "@/content/home";

function localizedCase(cs: CaseStudy, locale: Locale) {
  const isEn = locale === "en";
  return {
    sector: isEn ? cs.sectorEn ?? cs.sector : cs.sector,
    service: isEn ? cs.serviceEn ?? cs.service : cs.service,
    result: isEn ? cs.resultEn ?? cs.result : cs.result,
    metrics: (cs.metrics ?? []).map((m) => ({
      value: m.value,
      label: isEn ? m.labelEn ?? m.label : m.label,
    })),
  };
}

export function HomeView({ locale, content }: { locale: Locale; content: HomePageContent }) {
  const featured = featuredCaseSlugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="flex min-h-[85svh] flex-col justify-end">
        <div className="container mx-auto px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-20">
          <Reveal>
            <Eyebrow>{content.hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-5xl font-headline text-display-xl font-black text-foreground">
              {content.hero.heading.line1}
              <br />
              <span className="text-muted-foreground">{content.hero.heading.line2}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">{content.hero.intro}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                <Link href={withLocale(locale, "/#contact")}>{content.hero.talkCta}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
              >
                <Link href={withLocale(locale, "/services")}>{content.hero.servicesCta}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-primary/60 px-8 text-xs font-medium uppercase tracking-[0.14em] text-primary hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Link href={withLocale(locale, "/bimtools")}>
                  BIMtools
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* TODO owner: confirm real project count */}
              <Stat value={50} suffix="+" label={content.hero.stats.bimtoolsUsers} />
              <Stat value={21} label={content.hero.stats.publishedAddins} />
              <Stat value={30} suffix="+" label={content.hero.stats.deliveredProjects} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Manifesto ────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>{content.manifesto.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-4xl font-headline text-display-lg font-bold text-foreground">
              {content.manifesto.heading.line1}
              <br />
              <span className="text-muted-foreground">{content.manifesto.heading.line2}</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {content.manifesto.points.map((point, i) => (
              <Reveal key={point} delay={i * 100}>
                <div className="border-t border-border pt-6">
                  <p className="text-sm leading-7 text-foreground/80">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios ────────────────────────────────────────── */}
      <section id="services" className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <Reveal>
            <Eyebrow>{content.services.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 max-w-3xl font-headline text-display-md font-bold text-foreground">
              {content.services.heading}
            </h2>
          </Reveal>
          <div className="mt-16">
            {content.services.items.map((service, i) => (
              <Reveal key={service.index} delay={i * 80}>
                <NumberedRow
                  index={service.index}
                  title={service.title}
                  description={service.description}
                  href={withLocale(locale, service.href)}
                  cta={content.services.cta}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proyectos ────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <Eyebrow>{content.projects.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                  {content.projects.heading}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <Link
                href={withLocale(locale, "/casos")}
                className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
              >
                {content.projects.viewAllCta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 space-y-0">
            {featured.map((cs, i) => {
              const loc = localizedCase(cs, locale);
              return (
                <Reveal key={cs.slug} delay={i * 80}>
                  <Link href={withLocale(locale, "/casos")} className="block">
                    <article className="group grid gap-8 border-t border-border py-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                          {cs.client} · {loc.sector}
                        </p>
                        <h3 className="mt-4 font-headline text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                          {loc.service}
                        </h3>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{loc.result}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                          {cs.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col justify-between gap-8">
                        {cs.image ? (
                          <div className="overflow-hidden">
                            <Image
                              src={cs.image}
                              alt={loc.service}
                              width={900}
                              height={560}
                              className="h-56 w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 lg:h-64"
                            />
                          </div>
                        ) : null}
                        {loc.metrics.length > 0 && (
                          <div className="grid grid-cols-2 gap-6">
                            {loc.metrics.map((m) => (
                              <div key={m.label}>
                                <p className="font-headline text-3xl font-bold text-primary sm:text-4xl">{m.value}</p>
                                <p className="mt-2 text-xs leading-5 text-muted-foreground">{m.label}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Proceso ──────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>{content.process.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                {content.process.heading}
              </h2>
            </Reveal>
          </div>
          <div>
            {content.process.steps.map((step, i) => (
              <Reveal key={step.index} delay={i * 80}>
                <NumberedRow index={step.index} title={step.title} description={step.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIMtools ─────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>{content.bimtools.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                {content.bimtools.heading}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">{content.bimtools.intro}</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {techStack.map((tech) => (
                  <span key={tech} className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                  <Link href={withLocale(locale, "/bimtools")}>{content.bimtools.exploreCta}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
                >
                  <Link href={withLocale(locale, "/services/custom-bim-software-development")}>
                    {content.bimtools.customDevCta}
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="overflow-hidden">
              <Image
                src="/images/softwareDeveloper.webp"
                alt={content.bimtools.imageAlt}
                width={1200}
                height={800}
                loading="lazy"
                className="h-80 w-full object-cover grayscale lg:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SocialProofSection locale={locale} />

      <HomeContactSection locale={locale} />
    </>
  );
}
