import Image from "next/image";
import { Check } from "lucide-react";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import type { Locale } from "@/lib/locale";
import type { AboutPageContent } from "@/content/about";

const WORK = "/images/blog/estadio-chepen";

// The page closes on the footer's call to action, so it has no CTA of its own.
export function AboutView({ content }: { locale: Locale; content: AboutPageContent }) {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <Eyebrow>{content.hero.eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-4xl font-headline text-display-lg text-foreground">{content.hero.heading}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{content.hero.intro}</p>
        </div>
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-tile bg-surface">
            <Image
              src={`${WORK}/render-tribuna.webp`}
              alt={content.hero.imageAlt}
              width={2000}
              height={1125}
              priority
              sizes="(min-width: 1400px) 1340px, 100vw"
              className="aspect-[16/10] w-full object-cover sm:aspect-[16/8]"
            />
          </div>
        </div>
      </section>

      {/* ── Valores ──────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <h2 className="font-headline text-display-lg text-foreground">{content.values.eyebrow}</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.values.items.map((value, i) => (
              <Reveal key={value.index} className="rounded-tile bg-surface p-8">
                <span className="font-headline text-title text-primary">{i + 1}</span>
                <h3 className="mt-4 font-headline text-title text-foreground">{value.title}</h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted-foreground">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trayectoria ──────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="container mx-auto grid gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
          <Reveal>
            <Eyebrow>{content.timeline.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-headline text-display-lg text-foreground">{content.timeline.heading}</h2>
          </Reveal>
          <ol className="relative space-y-10 border-l border-foreground/15 pl-8">
            {content.timeline.items.map((item) => (
              <Reveal as="li" key={item.title} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-surface" />
                <p className="text-sm font-semibold text-primary">{item.year}</p>
                <h3 className="mt-1 font-headline text-title text-foreground">{item.title}</h3>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-muted-foreground">{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Fortalezas ───────────────────────────────────────── */}
      <section>
        <div className="container mx-auto grid gap-12 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <Reveal>
            <div className="overflow-hidden rounded-tile bg-surface">
              <Image
                src="/images/frata-desarrollo.webp"
                alt={content.strengths.imageAlt}
                width={1280}
                height={813}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[1280/813] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow>{content.strengths.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-headline text-display-md text-foreground">{content.strengths.heading}</h2>
            <ul className="mt-8 space-y-4">
              {content.strengths.items.map((item) => (
                <li key={item} className="flex gap-3 text-[1.0625rem] leading-relaxed text-foreground">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
