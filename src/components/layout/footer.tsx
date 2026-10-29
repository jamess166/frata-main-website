"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bimtoolsSuites } from "@/lib/generated/bimtools-manuals";
import { detectLocale, withLocale } from "@/lib/locale";
import { footerContent } from "@/content/footer";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://pe.linkedin.com/company/frata-ingenieros",
  },
  { label: "Facebook", href: "https://www.facebook.com/Frataingenieros/" },
  { label: "Instagram", href: "https://www.instagram.com/FRATA_INGENIEROS/" },
];

const linkClass = "transition-colors hover:text-foreground hover:underline underline-offset-4";

export function Footer() {
  const pathname = usePathname() || "/";
  const { locale, canonicalPath } = detectLocale(pathname);
  const t = footerContent[locale];
  const to = (path: string) => withLocale(locale, path);

  return (
    <footer>
      {/* closing call to action (the home page already ends on its contact form) */}
      {canonicalPath !== "/" && (
        <div className="container mx-auto px-5 py-24 text-center sm:px-6 lg:px-10 lg:py-32">
          <p className="text-[0.9375rem] font-semibold text-primary">{t.nextProject}</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-headline text-display-lg text-foreground">{t.heading}</h2>
          <Button asChild size="lg" className="mt-9">
            <Link href={to("/#contact")}>{t.talkToUs}</Link>
          </Button>
        </div>
      )}

      {/* link columns */}
      <div className="bg-surface text-[0.8125rem] leading-6 text-muted-foreground">
        <div className="container mx-auto grid gap-10 px-5 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10">
          <div>
            <p className="font-semibold text-foreground">Frata Ingenieros</p>
            <p className="mt-2 max-w-xs">{t.tagline}</p>
          </div>

          <div>
            <p className="font-semibold text-foreground">{t.nav.label}</p>
            <ul className="mt-2 space-y-1.5">
              <li>
                <Link href={to("/")} className={linkClass}>
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={to("/about")} className={linkClass}>
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={to("/services")} className={linkClass}>
                  {t.nav.services}
                </Link>
              </li>
              {/* Spanish-only page: Peruvian public-works packages */}
              {locale === "es" && (
                <li>
                  <Link href="/expedientes-tecnicos-bim" className={linkClass}>
                    Expedientes técnicos con BIM
                  </Link>
                </li>
              )}
              <li>
                <Link href={to("/casos")} className={linkClass}>
                  {t.nav.caseStudies}
                </Link>
              </li>
              <li>
                <Link href="/blog" className={linkClass}>
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href={to("/#contact")} className={linkClass}>
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-foreground">{t.bimtools.label}</p>
            <ul className="mt-2 space-y-1.5">
              <li>
                <Link href={to("/bimtools")} className={linkClass}>
                  {t.bimtools.allAddins}
                </Link>
              </li>
              {bimtoolsSuites.map((suite) => (
                <li key={suite.id}>
                  <Link href={to(`/bimtools/suite/${suite.id}`)} className={linkClass}>
                    {suite.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={to("/bimtools/privacy")} className={linkClass}>
                  {t.bimtools.privacy}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-foreground">{t.followUs}</p>
            <ul className="mt-2 space-y-1.5">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 ${linkClass}`}
                  >
                    {label}
                    <ArrowUpRight className="h-3 w-3 opacity-60" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-1 border-t border-border py-5 text-xs sm:flex-row">
            <p>{t.copyright}</p>
            <p>{t.madeIn}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
