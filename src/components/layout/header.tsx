"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Briefcase,
  ChevronDown,
  FolderOpen,
  Home,
  Layers3,
  Menu,
  MessageSquare,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
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
      className={`relative font-medium transition-colors hover:text-primary ${
        active ? "text-primary" : "text-foreground/70"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-[22px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
          active ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
    </Link>
  );
}

function ServicesDropdown({ locale, pathname }: { locale: "es" | "en"; pathname: string }) {
  const items = services[locale];
  const base = locale === "en" ? "/en" : "";
  const label = locale === "en" ? "Services" : "Servicios";
  const allLabel = locale === "en" ? "All services →" : "Ver todos →";
  const active = pathname.includes("/services");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`relative flex items-center gap-1 font-medium transition-colors hover:text-primary focus:outline-none ${
            active ? "text-primary" : "text-foreground/70"
          }`}
        >
          {label}
          <ChevronDown className="h-3 w-3 opacity-60 transition-transform duration-200 [[data-state=open]>&]:rotate-180" />
          <span
            className={`absolute -bottom-[22px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
              active ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-72 rounded-2xl p-2 shadow-xl">
        <DropdownMenuItem asChild className="rounded-xl">
          <Link href={`${base}/services`} className="font-semibold text-primary">
            {allLabel}
          </Link>
        </DropdownMenuItem>
        <div className="my-1 h-px bg-border/60" />
        {items.map((service) => (
          <DropdownMenuItem key={service.slug} asChild className="rounded-xl">
            <Link href={`${base}/services/${service.slug}`}>{service.title}</Link>
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
      casos: "Casos", contact: "Contacto", ctaLabel: "Solicitar propuesta",
      navSection: "Navegación", productsSection: "Productos",
    },
    en: {
      home: "Home", about: "About", bimtools: "BIMtools",
      casos: "Case Studies", contact: "Contact", ctaLabel: "Request proposal",
      navSection: "Navigation", productsSection: "Products",
    },
  } as const;

  const t = labels[locale];

  const mainNavItems = [
    { href: base || "/", label: t.home, Icon: Home },
    { href: `${base}/about`, label: t.about, Icon: Users },
    { href: `${base}/casos`, label: t.casos, Icon: FolderOpen },
  ];

  const productNavItems = [
    { href: `${base}/bimtools`, label: t.bimtools, Icon: Layers3 },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-background/96 shadow-sm backdrop-blur-lg"
            : "bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">

          {/* desktop: logo + nav */}
          <div className="hidden items-center md:flex flex-1">
            <Link href={base || "/"} className="mr-8 flex items-center group">
              <Image
                src="/images/logo-dark.svg"
                alt="Frata BIM Logo"
                width={87}
                height={29}
                className="dark:hidden opacity-90 transition-opacity group-hover:opacity-100"
                priority
              />
              <Image
                src="/images/logo-light.svg"
                alt="Frata BIM Logo"
                width={87}
                height={29}
                className="hidden dark:block opacity-90 transition-opacity group-hover:opacity-100"
                priority
              />
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <NavLink href={base || "/"} pathname={pathname}>{t.home}</NavLink>
              <NavLink href={`${base}/about`} pathname={pathname}>{t.about}</NavLink>
              <ServicesDropdown locale={locale} pathname={pathname} />
              <NavLink href={`${base}/bimtools`} pathname={pathname}>{t.bimtools}</NavLink>
              <NavLink href={`${base}/casos`} pathname={pathname}>{t.casos}</NavLink>
            </nav>
          </div>

          {/* desktop: right side */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <LocaleSwitcher />
            <ThemeToggle />
            <Button asChild size="sm" className="px-5">
              <Link href={`${base}/#contact`}>{t.contact}</Link>
            </Button>
          </div>

          {/* mobile: hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-card/80 text-foreground/70 transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary md:hidden"
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-4 w-4" />
          </button>

          {/* mobile: centered logo */}
          <div className="flex flex-1 items-center justify-center md:hidden">
            <Link href={base || "/"}>
              <Image src="/images/logo-dark.svg" alt="Frata BIM Logo" width={80} height={27} className="dark:hidden" priority />
              <Image src="/images/logo-light.svg" alt="Frata BIM Logo" width={80} height={27} className="hidden dark:block" priority />
            </Link>
          </div>

          {/* mobile: right actions */}
          <div className="flex items-center gap-2 md:hidden ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ─────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* drawer panel */}
        <div
          className={`absolute inset-y-0 left-0 flex w-[300px] flex-col bg-card shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* top accent strip */}
          <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-accent/60 flex-shrink-0" />

          {/* drawer header */}
          <div className="flex items-center justify-between border-b px-5 py-4">
            <Link href={base || "/"} onClick={() => setMobileOpen(false)}>
              <Image src="/images/logo-dark.svg" alt="Frata BIM Logo" width={80} height={27} className="dark:hidden" />
              <Image src="/images/logo-light.svg" alt="Frata BIM Logo" width={80} height={27} className="hidden dark:block" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Cerrar menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* nav items */}
          <nav className="flex-1 overflow-y-auto px-3 py-4">

            {/* main nav group */}
            <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/60">
              {t.navSection}
            </p>
            <div className="space-y-0.5">
              {mainNavItems.map(({ href, label, Icon }) => {
                const active = isActive(href, pathname);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
                        active ? "bg-primary/15" : "bg-secondary"
                      }`}
                    >
                      <Icon className={`h-3.5 w-3.5 ${active ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    {label}
                    {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />}
                  </Link>
                );
              })}

              {/* services accordion inside main nav */}
              <Accordion type="single" collapsible>
                <AccordionItem value="services" className="border-0">
                  <AccordionTrigger
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium hover:no-underline transition-all ${
                      pathname.includes("/services")
                        ? "text-primary [&>svg]:text-primary"
                        : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <div className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${pathname.includes("/services") ? "bg-primary/15" : "bg-secondary"}`}>
                      <Briefcase className={`h-3.5 w-3.5 ${pathname.includes("/services") ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    {locale === "en" ? "Services" : "Servicios"}
                  </AccordionTrigger>
                  <AccordionContent className="pb-1 pt-0">
                    <div className="ml-10 space-y-0.5 border-l-2 border-primary/15 pl-3">
                      <Link
                        href={`${base}/services`}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/5 transition-colors"
                      >
                        {locale === "en" ? "All services →" : "Ver todos →"}
                      </Link>
                      {services[locale].map((service) => (
                        <Link
                          key={service.slug}
                          href={`${base}/services/${service.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-lg px-3 py-2 text-xs transition-colors ${
                            pathname === `${base}/services/${service.slug}`
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                          }`}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* products group */}
            <p className="mb-1.5 mt-4 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/60">
              {t.productsSection}
            </p>
            <div className="space-y-0.5">
              {productNavItems.map(({ href, label, Icon }) => {
                const active = isActive(href, pathname);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
                        active ? "bg-primary/15" : "bg-secondary"
                      }`}
                    >
                      <Icon className={`h-3.5 w-3.5 ${active ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    {label}
                    {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />}
                  </Link>
                );
              })}

              <Link
                href={`${base}/bimtools/manual`}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  pathname.includes("/bimtools/manual")
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                }`}
              >
                <div className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${pathname.includes("/bimtools/manual") ? "bg-primary/15" : "bg-secondary"}`}>
                  <BookOpen className={`h-3.5 w-3.5 ${pathname.includes("/bimtools/manual") ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                {locale === "en" ? "BIMtools manuals" : "Manuales BIMtools"}
                {pathname.includes("/bimtools/manual") && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />}
              </Link>
            </div>
          </nav>

          {/* drawer footer */}
          <div className="border-t bg-background/40 px-4 py-4 space-y-3">
            <Button asChild className="w-full rounded-xl gap-2" size="sm">
              <Link href={`${base}/#contact`} onClick={() => setMobileOpen(false)}>
                <MessageSquare className="h-4 w-4" />
                {t.ctaLabel}
              </Link>
            </Button>
            <div className="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/50 px-3 py-2">
              <LocaleSwitcher />
              <span className="text-xs font-medium text-muted-foreground">ES / EN</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
