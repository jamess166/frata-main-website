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

const services = {
  es: [
    { slug: "global-remote-bim-teams", title: "Equipos BIM remotos" },
    { slug: "custom-bim-software-development", title: "Desarrollo BIM para Revit y Tekla" },
    { slug: "on-site-bim-construction-support", title: "Soporte BIM en obra" },
    { slug: "bim-for-manufacturing", title: "BIM para fabricacion" },
    { slug: "bim-training-and-implementation", title: "Implementacion BIM" },
    { slug: "comprehensive-bim-modeling", title: "Modelado BIM integral" },
  ],
  en: [
    { slug: "global-remote-bim-teams", title: "Remote BIM teams" },
    { slug: "custom-bim-software-development", title: "BIM development for Revit and Tekla" },
    { slug: "on-site-bim-construction-support", title: "On-site BIM support" },
    { slug: "bim-for-manufacturing", title: "BIM for fabrication" },
    { slug: "bim-training-and-implementation", title: "BIM implementation" },
    { slug: "comprehensive-bim-modeling", title: "Comprehensive BIM modeling" },
  ],
} as const;

function isActive(href: string, pathname: string): boolean {
  if (href === "/" || href === "/en") return pathname === href;
  return pathname.startsWith(href);
}

function NavLink({
  href,
  children,
  pathname,
}: {
  href: string;
  children: React.ReactNode;
  pathname: string;
}) {
  const active = isActive(href, pathname);
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

function ServicesDropdown({ locale, pathname }: { locale: "es" | "en"; pathname: string }) {
  const items = services[locale];
  const base = locale === "en" ? "/en" : "";
  const label = locale === "en" ? "Services" : "Servicios";
  const allLabel = locale === "en" ? "All services" : "Ver todos";
  const active = pathname.includes("/services");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex items-center gap-1 text-xs font-medium uppercase tracking-[0.14em] transition-colors hover:text-foreground focus:outline-none ${
            active ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {label}
          <ChevronDown className="h-3 w-3 opacity-60 transition-transform duration-200 [[data-state=open]>&]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-80 border-border bg-popover p-0">
        <DropdownMenuItem asChild className="rounded-none border-b border-border px-4 py-3">
          <Link href={`${base}/services`} className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.14em] text-primary">
            {allLabel}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </DropdownMenuItem>
        {items.map((service, i) => (
          <DropdownMenuItem key={service.slug} asChild className="rounded-none px-4 py-3">
            <Link href={`${base}/services/${service.slug}`} className="flex items-baseline gap-3">
              <span className="font-code text-[10px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm">{service.title}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const pathname = usePathname() || "/";
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  const base = locale === "en" ? "/en" : "";
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

  const labels = {
    es: {
      home: "Inicio", about: "Nosotros", bimtools: "BIMtools",
      casos: "Casos", contact: "Contacto", services: "Servicios",
      manuals: "Manuales",
    },
    en: {
      home: "Home", about: "About", bimtools: "BIMtools",
      casos: "Case Studies", contact: "Contact", services: "Services",
      manuals: "Manuals",
    },
  } as const;

  const t = labels[locale];

  const mobileNavItems = [
    { href: base || "/", label: t.home },
    { href: `${base}/about`, label: t.about },
    { href: `${base}/services`, label: t.services },
    { href: `${base}/casos`, label: t.casos },
    { href: `${base}/bimtools`, label: t.bimtools },
    { href: `${base}/bimtools/manual`, label: t.manuals },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-border transition-colors duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md" : "bg-background"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href={base || "/"} className="flex items-center opacity-90 transition-opacity hover:opacity-100">
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
            <NavLink href={base || "/"} pathname={pathname}>{t.home}</NavLink>
            <NavLink href={`${base}/about`} pathname={pathname}>{t.about}</NavLink>
            <ServicesDropdown locale={locale} pathname={pathname} />
            <NavLink href={`${base}/casos`} pathname={pathname}>{t.casos}</NavLink>
            <NavLink href={`${base}/bimtools`} pathname={pathname}>{t.bimtools}</NavLink>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LocaleSwitcher />
            <Button asChild size="sm" className="rounded-none px-5 text-xs font-medium uppercase tracking-[0.14em]">
              <Link href={`${base}/#contact`}>{t.contact}</Link>
            </Button>
          </div>

          {/* mobile: hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
            aria-label="Abrir menu"
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
          <Link href={base || "/"} onClick={() => setMobileOpen(false)}>
            <Image src="/images/logo-light.svg" alt="Frata Ingenieros" width={80} height={27} />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center text-foreground"
            aria-label="Cerrar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-8 sm:px-6">
          {mobileNavItems.map(({ href, label }, i) => {
            const active = isActive(href, pathname);
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
          <Button asChild className="w-full rounded-none text-xs font-medium uppercase tracking-[0.14em]" size="lg">
            <Link href={`${base}/#contact`} onClick={() => setMobileOpen(false)}>
              {t.contact}
            </Link>
          </Button>
          <div className="mt-4 flex justify-center">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
