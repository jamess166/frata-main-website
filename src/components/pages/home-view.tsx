import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeContactSection } from "@/components/home/contact-section";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { Stat } from "@/components/site/stat";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";
import { serviceContent, type ServiceSlug } from "@/lib/service-content";
import { withLocale, resolveBilingual, type Locale } from "@/lib/locale";
import { techStack, featuredCaseSlugs, type HomePageContent } from "@/content/home";

const WORK = "/images/blog/estadio-chepen";

// Per-case-study detail text only ever has Spanish/English content; every
// other locale falls back to English (see resolveBilingual).
function localizedCase(cs: CaseStudy, locale: Locale) {
  return {
    client: resolveBilingual(locale, cs.client, cs.clientEn),
    sector: resolveBilingual(locale, cs.sector, cs.sectorEn),
    service: resolveBilingual(locale, cs.service, cs.serviceEn),
    result: resolveBilingual(locale, cs.result, cs.resultEn),
    metrics: (cs.metrics ?? []).map((m) => ({
      value: m.value,
      label: resolveBilingual(locale, m.label, m.labelEn),
    })),
  };
}

// Caption under the hero render, linking to the write-up of that project.
const HERO_CAPTION: Record<Locale, string> = {
  es: "Estadio Municipal de Chepén · expediente técnico en desarrollo con BIM",
  en: "Chepén Municipal Stadium · technical package in development with BIM",
  de: "Stadion von Chepén · Ausführungsplanung in Arbeit mit BIM",
  fr: "Stade municipal de Chepén · dossier technique en cours avec le BIM",
  it: "Stadio municipale di Chepén · progetto esecutivo in corso con il BIM",
  pt: "Estádio Municipal de Chepén · projeto executivo em desenvolvimento com BIM",
  ru: "Муниципальный стадион Чепен · рабочая документация в разработке в BIM",
  zh: "Chepén 市立体育场 · 正在采用 BIM 编制施工图设计",
};

const TEAM_PHOTO_ALT: Record<Locale, string> = {
  es: "Desarrollo de herramientas BIM en Frata Ingenieros",
  en: "Building BIM tools at Frata Ingenieros",
  de: "Entwicklung von BIM-Werkzeugen bei Frata Ingenieros",
  fr: "Développement d'outils BIM chez Frata Ingenieros",
  it: "Sviluppo di strumenti BIM in Frata Ingenieros",
  pt: "Desenvolvimento de ferramentas BIM na Frata Ingenieros",
  ru: "Разработка BIM-инструментов в Frata Ingenieros",
  zh: "Frata Ingenieros 正在开发 BIM 工具",
};

function serviceImage(href: string, locale: Locale) {
  const slug = href.split("/").pop() as ServiceSlug;
  return serviceContent[slug]?.[locale] ?? serviceContent[slug]?.es;
}

export function HomeView({ locale, content }: { locale: Locale; content: HomePageContent }) {
  const featured = featuredCaseSlugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="overflow-hidden">
        <div className="container mx-auto px-5 pt-16 text-center sm:px-6 lg:px-8 lg:pt-24">
          <Eyebrow>{content.hero.eyebrow}</Eyebrow>
          <h1 className="mx-auto mt-4 max-w-4xl font-headline text-display-xl text-foreground">
            {content.hero.heading.line1}
            <br />
            {content.hero.heading.line2}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{content.hero.intro}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            <Button asChild size="lg">
              <Link href={withLocale(locale, "/#contact")}>{content.hero.talkCta}</Link>
            </Button>
            <Link href={withLocale(locale, "/services")} className="link-more text-lg">
              {content.hero.servicesCta}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="container mx-auto mt-14 px-5 sm:px-6 lg:mt-20 lg:px-8">
          <figure>
            <div className="overflow-hidden rounded-tile bg-surface">
              <Image
                src={`${WORK}/render-tribuna.webp`}
                alt={HERO_CAPTION[locale]}
                width={2000}
                height={1125}
                priority
                sizes="(min-width: 1400px) 1340px, 100vw"
                className="aspect-[16/10] w-full object-cover sm:aspect-[16/8]"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              <Link href="/blog/expediente-tecnico-obra-publica-bim" className="hover:text-foreground hover:underline underline-offset-4">
                {HERO_CAPTION[locale]}
              </Link>
            </figcaption>
          </figure>
        </div>

        <div className="container mx-auto px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-border">
            <Stat value={50} suffix="+" label={content.hero.stats.bimtoolsUsers} />
            <Stat value={21} label={content.hero.stats.publishedAddins} />
          </div>
        </div>
      </section>

      {/* ── Manifesto ────────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="container mx-auto grid gap-12 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <Reveal>
            <div className="overflow-hidden rounded-tile bg-card">
              <Image
                src="/images/frata-desarrollo.webp"
                alt={TEAM_PHOTO_ALT[locale]}
                width={1280}
                height={813}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[1280/813] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow>{content.manifesto.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-headline text-display-lg text-foreground">
              {content.manifesto.heading.line1}
              {content.manifesto.heading.line2 && (
                <>
                  <br />
                  {content.manifesto.heading.line2}
                </>
              )}
            </h2>
            <ul className="mt-8 space-y-4">
              {content.manifesto.points.map((point) => (
                <li key={point} className="flex gap-3 text-[1.0625rem] leading-relaxed text-foreground">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios ────────────────────────────────────────── */}
      <section id="services">
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal className="max-w-3xl">
            <Eyebrow>{content.services.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-headline text-display-lg text-foreground">{content.services.heading}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {content.services.items.map((service) => {
              const detail = serviceImage(service.href, locale);
              return (
                <Reveal key={service.index}>
                  <Link
                    href={withLocale(locale, service.href)}
                    className="group flex h-full flex-col overflow-hidden rounded-tile bg-surface transition-transform duration-200 ease-out active:scale-[0.99]"
                  >
                    <div className="p-8 pb-6 lg:p-10 lg:pb-7">
                      <h3 className="font-headline text-title text-foreground">{service.title}</h3>
                      <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted-foreground">{service.description}</p>
                      <span className="link-more mt-4 text-[1.0625rem]">
                        {content.services.cta}
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                    {detail?.image && (
                      <div className="mt-auto overflow-hidden px-8 lg:px-10">
                        <Image
                          src={detail.image}
                          alt={detail.imageAlt}
                          width={1200}
                          height={700}
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="aspect-[16/9] w-full rounded-t-xl object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Proyectos ────────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Eyebrow>{content.projects.eyebrow}</Eyebrow>
              <h2 className="mt-3 font-headline text-display-lg text-foreground">{content.projects.heading}</h2>
            </div>
            <Link href={withLocale(locale, "/casos")} className="link-more text-[1.0625rem]">
              {content.projects.viewAllCta}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {featured.map((cs, i) => {
              const loc = localizedCase(cs, locale);
              const wide = i === 0 && cs.image;
              return (
                <Reveal key={cs.slug} className={wide ? "lg:col-span-2" : undefined}>
                  <Link
                    href={withLocale(locale, "/casos")}
                    className={`group grid h-full overflow-hidden rounded-tile bg-card transition-transform duration-200 ease-out active:scale-[0.99] ${
                      wide ? "lg:grid-cols-2" : ""
                    }`}
                  >
                    <div className="flex flex-col p-8 lg:p-10">
                      <p className="text-sm text-muted-foreground">
                        {loc.client} · {loc.sector}
                      </p>
                      <h3 className="mt-2 font-headline text-title text-foreground">{loc.service}</h3>
                      <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted-foreground">{loc.result}</p>
                      {loc.metrics.length > 0 && (
                        <div className="mt-8 grid grid-cols-2 gap-6">
                          {loc.metrics.map((m) => (
                            <div key={m.label}>
                              <p className="font-headline text-4xl font-semibold tracking-[-0.03em] text-foreground">{m.value}</p>
                              <p className="mt-1 text-sm leading-snug text-muted-foreground">{m.label}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="mt-auto flex flex-wrap gap-2 pt-8">
                        {cs.technologies.map((tech) => (
                          <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {wide && (
                      <div className="relative min-h-[260px] overflow-hidden">
                        <Image
                          src={cs.image!}
                          alt={loc.service}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Proceso ──────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal className="max-w-3xl">
            <Eyebrow>{content.process.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-headline text-display-lg text-foreground">{content.process.heading}</h2>
          </Reveal>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {content.process.steps.map((step, i) => (
              <Reveal as="li" key={step.index} className="border-t border-foreground/15 pt-5">
                <span className="font-headline text-title text-primary">{i + 1}</span>
                <h3 className="mt-3 font-headline text-xl font-semibold tracking-[-0.01em] text-foreground">{step.title}</h3>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-muted-foreground">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── BIMtools ─────────────────────────────────────────── */}
      <section className="px-3 sm:px-4">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-tile bg-neutral-950 text-white dark:bg-card">
          <div className="container mx-auto grid gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12 lg:py-24">
            <Reveal>
              <p className="text-[0.9375rem] font-semibold text-sky-400">{content.bimtools.eyebrow}</p>
              <h2 className="mt-3 font-headline text-display-lg text-white">{content.bimtools.heading}</h2>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-white/70">{content.bimtools.intro}</p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <li key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Button asChild size="lg">
                  <Link href={withLocale(locale, "/bimtools")}>{content.bimtools.exploreCta}</Link>
                </Button>
                <Link
                  href={withLocale(locale, "/services/custom-bim-software-development")}
                  className="link-more text-[1.0625rem] text-sky-400"
                >
                  {content.bimtools.customDevCta}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal>
              <Image
                src={`${WORK}/planos-revit-arquitectura.webp`}
                alt={content.bimtools.imageAlt}
                width={1920}
                height={1028}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="w-full rounded-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <SocialProofSection locale={locale} />

      <HomeContactSection locale={locale} />
    </>
  );
}
