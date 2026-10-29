"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { headerContent } from "@/content/header";
import { serviceContent } from "@/lib/service-content";
import { detectLocale, withLocale, type Locale } from "@/lib/locale";

function isActive(href: string, pathname: string, isHome: boolean): boolean {
  if (isHome) return pathname === href;
  return pathname.startsWith(href);
}

function Logo({ width = 84 }: { width?: number }) {
  const height = Math.round(width * 0.315);
  return (
    <>
      <Image src="/images/logo-dark.svg" alt="Frata Ingenieros" width={width} height={height} priority className="dark:hidden" />
      <Image
        src="/images/logo-light.svg"
        alt="Frata Ingenieros"
        width={width}
        height={height}
        priority
        className="hidden dark:block"
      />
    </>
  );
}

function NavLink({
  href,
  children,
  pathname,
  isHome = false,
}: {
  href: string;
  children: React.ReactNode;
  pathname: string;
  isHome?: boolean;
}) {
  const active = isActive(href, pathname, isHome);
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`text-[0.8125rem] transition-colors duration-200 hover:text-foreground ${
        active ? "text-foreground" : "text-foreground/70"
      }`}
    >
      {children}
    </Link>
  );
}

function ServicesDropdown({ locale, pathname }: { locale: Locale; pathname: string }) {
  const items = Object.values(serviceContent).map((entry) => entry[locale]);
  const t = headerContent[locale];
  const active = pathname.includes("/services");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex items-center gap-1 text-[0.8125rem] transition-colors duration-200 hover:text-foreground focus:outline-none ${
            active ? "text-foreground" : "text-foreground/70"
          }`}
        >
          {t.services}
          <ChevronDown className="h-3 w-3 opacity-60 transition-transform duration-200 [[data-state=open]>&]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={14} className="w-72">
        {/* Spanish-only page: Peruvian public-works packages */}
        {locale === "es" && (
          <DropdownMenuItem asChild>
            <Link href="/expedientes-tecnicos-bim" className="text-[0.875rem]">
              Expedientes técnicos de obra pública
            </Link>
          </DropdownMenuItem>
        )}
        {items.map((service) => (
          <DropdownMenuItem key={service.slug} asChild>
            <Link href={withLocale(locale, `/services/${service.slug}`)} className="text-[0.875rem]">
              {service.shortTitle}
            </Link>
          </DropdownMenuItem>
        ))}
        <div className="my-1 h-px bg-border/70" />
        <DropdownMenuItem asChild>
          <Link href={withLocale(locale, "/services")} className="text-[0.875rem] text-primary focus:text-primary">
            {t.allServices}
            <ChevronRight className="ml-auto h-3.5 w-3.5" />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const pathname = usePathname() || "/";
  const { locale } = detectLocale(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (!mobileOpen) return () => { document.body.style.overflow = ""; };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const t = headerContent[locale];
  const homeHref = withLocale(locale, "/");
  const aboutHref = withLocale(locale, "/about");
  const servicesHref = withLocale(locale, "/services");
  const casosHref = withLocale(locale, "/casos");
  // The blog is Spanish-only, so every locale links to the same /blog.
  const blogHref = "/blog";
  const bimtoolsHref = withLocale(locale, "/bimtools");
  const manualsHref = withLocale(locale, "/bimtools/manual");
  const contactHref = withLocale(locale, "/#contact");

  const mobileNavItems = [
    { href: homeHref, label: t.home, isHome: true },
    { href: aboutHref, label: t.about, isHome: false },
    { href: servicesHref, label: t.services, isHome: false },
    { href: casosHref, label: t.casos, isHome: false },
    { href: blogHref, label: t.blog, isHome: false },
    { href: bimtoolsHref, label: t.bimtools, isHome: false },
    { href: manualsHref, label: t.manuals, isHome: false },
  ];

  return (
    <>
      <header
        className={`material sticky top-0 z-50 w-full transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_hsl(var(--border)/0.8)]" : ""
        }`}
      >
        <div className="container mx-auto flex h-[52px] items-center justify-between px-5 sm:px-6 lg:px-10">
          <Link href={homeHref} className="flex items-center" aria-label="Frata Ingenieros">
            <Logo />
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            <NavLink href={homeHref} pathname={pathname} isHome>{t.home}</NavLink>
            <NavLink href={aboutHref} pathname={pathname}>{t.about}</NavLink>
            <ServicesDropdown locale={locale} pathname={pathname} />
            <NavLink href={casosHref} pathname={pathname}>{t.casos}</NavLink>
            <NavLink href={blogHref} pathname={pathname}>{t.blog}</NavLink>
            <NavLink href={bimtoolsHref} pathname={pathname}>{t.bimtools}</NavLink>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle labels={{ toLight: t.themeToLight, toDark: t.themeToDark }} />
            <LocaleSwitcher />
            <Button asChild size="sm">
              <Link href={contactHref}>{t.contact}</Link>
            </Button>
          </div>

          {/* mobile: theme toggle + two-line menu toggle that morphs into a close mark */}
          <div className="-mr-2 flex items-center md:hidden">
            <ThemeToggle labels={{ toLight: t.themeToLight, toDark: t.themeToDark }} className="h-11 w-11" />
            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="relative flex h-11 w-11 items-center justify-center text-foreground"
              aria-label={mobileOpen ? t.closeMenuAria : t.openMenuAria}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`absolute h-[1.5px] w-[18px] rounded-full bg-current transition-transform duration-300 ease-out ${
                  mobileOpen ? "rotate-45" : "-translate-y-[3.5px]"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-[18px] rounded-full bg-current transition-transform duration-300 ease-out ${
                  mobileOpen ? "-rotate-45" : "translate-y-[3.5px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu: grows down out of the header it was opened from ── */}
      <div
        id="mobile-menu"
        aria-hidden={!mobileOpen}
        className={`fixed inset-x-0 bottom-0 top-[52px] z-40 overflow-y-auto bg-background transition-[opacity,visibility] duration-300 ease-out md:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="px-8 pb-8 pt-4">
          {mobileNavItems.map(({ href, label, isHome }, i) => {
            const active = isActive(href, pathname, isHome);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                tabIndex={mobileOpen ? undefined : -1}
                style={{ transitionDelay: mobileOpen ? `${40 + i * 25}ms` : "0ms" }}
                className={`block py-2.5 font-headline text-[1.75rem] font-semibold tracking-[-0.015em] transition-[opacity,transform,color] duration-300 ease-out motion-reduce:transform-none ${
                  mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                } ${active ? "text-foreground" : "text-foreground/75 active:text-foreground"}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="space-y-3 px-8 pb-10">
          <LocaleSwitcher variant="full" />
          <Button asChild className="w-full" size="lg" tabIndex={mobileOpen ? undefined : -1}>
            <Link href={contactHref} onClick={() => setMobileOpen(false)}>
              {t.contact}
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
