import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";
import { withLocale, type Locale } from "@/lib/locale";

export function PrivacySection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 border-t border-border py-10 md:grid-cols-[90px_1fr] md:gap-8 lg:py-12">
      <span className="text-sm text-muted-foreground">{index}</span>
      <div>
        <h2 className="font-headline text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

export interface PrivacyPageStrings {
  backToBimtools: string;
  eyebrow: string;
  heading: string;
  intro: React.ReactNode;
  lastUpdated: string;
}

export function BimtoolsPrivacyView({
  locale,
  strings,
  children,
}: {
  locale: Locale;
  strings: PrivacyPageStrings;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <Reveal>
            <Link
              href={withLocale(locale, "/bimtools")}
              className="-ml-1 inline-flex items-center gap-0.5 text-[0.9375rem] text-primary hover:underline underline-offset-4"
            >
              <ChevronLeft className="h-4 w-4" />
              {strings.backToBimtools}
            </Link>
          </Reveal>
          <Reveal>
            <Eyebrow className="mt-10">{strings.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal>
            <h1 className="mt-3 max-w-4xl font-headline text-display-lg text-foreground">
              {strings.heading}
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">{strings.intro}</p>
          </Reveal>
          <Reveal>
            <p className="mt-4 max-w-2xl text-xs text-muted-foreground">{strings.lastUpdated}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Cuerpo ───────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 py-4 sm:px-6 lg:px-8">{children}</div>
      </section>
    </>
  );
}
