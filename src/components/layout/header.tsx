"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { headerContent } from "@/content/header";
import { serviceContent } from "@/lib/service-content";
import { detectLocale, withLocale, type Locale } from "@/lib/locale";

function isActive(href: string, pathname: string, isHome: boolean): boolean {
  if (isHome) return pathname === href;
  return pathname.startsWith(href);
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
      className={`text-xs font-medium uppercase tracking-[0.14em] transition-colors hover:text-foreground ${
        active ? "text-primary" : "text-muted-foreground"
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
          className={`flex items-center gap-1 text-xs font-medium uppercase tracking-[0.14em] transition-colors hover:text-foreground focus:outline-none ${
            active ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {t.services}
          <ChevronDown className="h-3 w-3 opacity-60 transition-transform duration-200 [[data-state=open]>&]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-80 border-border bg-popover p-0">
        <DropdownMenuItem asChild className="rounded-none border-b border-border px-4 py-3">
          <Link
            href={withLocale(locale, "/services")}
            className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.14em] text-primary"
          >
            {t.allServices}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </DropdownMenuItem>
        {items.map((service, i) => (
          <DropdownMenuItem key={service.slug} asChild className="rounded-none px-4 py-3">
            <Link href={withLocale(locale, `/services/${service.slug}`)} className="flex items-baseline gap-3">
              <span className="font-code text-[10px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm">{service.shortTitle}</span>
            </Link>
          </DropdownMenuItem>
        ))}
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
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const t = headerContent[locale];
  const homeHref = withLocale(locale, "/");
  const aboutHref = withLocale(locale, "/about");
  const servicesHref = withLocale(locale, "/services");
  const casosHref = withLocale(locale, "/casos");
  const bimtoolsHref = withLocale(locale, "/bimtools");
  const manualsHref = withLocale(locale, "/bimtools/manual");
  const contactHref = withLocale(locale, "/#contact");

  const mobileNavItems = [
    { href: homeHref, label: t.home, isHome: true },
    { href: aboutHref, label: t.about, isHome: false },
    { href: servicesHref, label: t.services, isHome: false },
    { href: casosHref, label: t.casos, isHome: false },
    { href: bimtoolsHref, label: t.bimtools, isHome: false },
    { href: manualsHref, label: t.manuals, isHome: false },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-border transition-colors duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md" : "bg-background"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href={homeHref} className="flex items-center opacity-90 transition-opacity hover:opacity-100">
            <Image
              src="/images/logo-light.svg"
              alt="Frata Ingenieros"
              width={87}
              height={29}
              priority
            />
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            <NavLink href={homeHref} pathname={pathname} isHome>{t.home}</NavLink>
            <NavLink href={aboutHref} pathname={pathname}>{t.about}</NavLink>
            <ServicesDropdown locale={locale} pathname={pathname} />
            <NavLink href={casosHref} pathname={pathname}>{t.casos}</NavLink>
            <NavLink href={bimtoolsHref} pathname={pathname}>{t.bimtools}</NavLink>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LocaleSwitcher />
            <Button asChild size="sm" className="rounded-none px-5 text-xs font-medium uppercase tracking-[0.14em]">
              <Link href={contactHref}>{t.contact}</Link>
            </Button>
          </div>

          {/* mobile: hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
            aria-label={t.openMenuAria}
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ─────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-background transition-opacity duration-300 md:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-4 sm:px-6">
          <Link href={homeHref} onClick={() => setMobileOpen(false)}>
            <Image src="/images/logo-light.svg" alt="Frata Ingenieros" width={80} height={27} />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center text-foreground"
            aria-label={t.closeMenuAria}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-8 sm:px-6">
          {mobileNavItems.map(({ href, label, isHome }, i) => {
            const active = isActive(href, pathname, isHome);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-baseline gap-4 border-b border-border py-5"
              >
                <span className="font-code text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-headline text-3xl font-bold tracking-tight transition-colors ${
                    active ? "text-primary" : "text-foreground group-hover:text-primary"
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border px-4 py-6 sm:px-6">
          <div className="mb-4">
            <LocaleSwitcher variant="full" />
          </div>
          <Button asChild className="w-full rounded-none text-xs font-medium uppercase tracking-[0.14em]" size="lg">
            <Link href={contactHref} onClick={() => setMobileOpen(false)}>
              {t.contact}
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
