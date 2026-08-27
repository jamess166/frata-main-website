"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { bimtoolsSuites } from "@/lib/generated/bimtools-manuals";
import { detectLocale, withLocale } from "@/lib/locale";
import { footerContent } from "@/content/footer";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://pe.linkedin.com/company/frata-ingenieros" },
  { label: "Facebook", href: "https://www.facebook.com/Frataingenieros/" },
  { label: "Instagram", href: "https://www.instagram.com/FRATA_INGENIEROS/" },
];

export function Footer() {
  const pathname = usePathname() || "/";
  const { locale } = detectLocale(pathname);
  const t = footerContent[locale];
  const to = (path: string) => withLocale(locale, path);

  return (
    <footer className="border-t border-border bg-background">
      {/* big statement + CTA */}
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{t.nextProject}</p>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-3xl font-headline text-display-lg font-bold text-foreground">{t.heading}</h2>
          <Link
            href={to("/#contact")}
            className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.14em] text-primary transition-colors hover:text-foreground"
          >
            {t.talkToUs}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* link columns */}
      <div className="border-t border-border">
        <div className="container mx-auto grid gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="font-headline text-base font-bold text-foreground">Frata Ingenieros</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{t.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{t.nav.label}</p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li><Link href={to("/")} className="transition-colors hover:text-primary">{t.nav.home}</Link></li>
              <li><Link href={to("/about")} className="transition-colors hover:text-primary">{t.nav.about}</Link></li>
              <li><Link href={to("/services")} className="transition-colors hover:text-primary">{t.nav.services}</Link></li>
              <li><Link href={to("/casos")} className="transition-colors hover:text-primary">{t.nav.caseStudies}</Link></li>
              <li><Link href={to("/#contact")} className="transition-colors hover:text-primary">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{t.bimtools.label}</p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li>
                <Link href={to("/bimtools")} className="transition-colors hover:text-primary">
                  {t.bimtools.allAddins}
                </Link>
              </li>
              {bimtoolsSuites.map((suite) => (
                <li key={suite.id}>
                  <Link href={to(`/bimtools/suite/${suite.id}`)} className="transition-colors hover:text-primary">
                    {suite.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={to("/bimtools/privacy")} className="transition-colors hover:text-primary">
                  {t.bimtools.privacy}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{t.followUs}</p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                  >
                    {label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground">{t.copyright}</p>
          <p className="text-xs text-muted-foreground">{t.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
