"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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

function ServicesMenu({ isMobile = false, locale = "es" }: { isMobile?: boolean; locale?: "es" | "en" }) {
  const items = services[locale];
  const labels = {
    es: { services: "Servicios" },
    en: { services: "Services" },
  } as const;

  if (isMobile) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="services" className="border-b-0">
          <AccordionTrigger className="flex w-full items-center py-2 text-lg font-semibold hover:no-underline">
            {labels[locale].services}
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-1 pl-4">
              {items.map((service) => (
                <Link
                  key={service.slug}
                  href={`${locale === "en" ? "/en" : ""}/services/${service.slug}`}
                  className="block rounded-md py-2 text-muted-foreground hover:text-foreground"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 font-medium text-foreground/80 hover:bg-transparent hover:text-primary">
          {labels[locale].services}
          <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-72">
        {items.map((service) => (
          <DropdownMenuItem key={service.slug} asChild>
            <Link href={`${locale === "en" ? "/en" : ""}/services/${service.slug}`}>{service.title}</Link>
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
  const labels = {
    es: { home: "Inicio", about: "Nosotros", bimtools: "BIMtools", contact: "Contacto" },
    en: { home: "Home", about: "About", bimtools: "BIMtools", contact: "Contact" },
  } as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <div className="hidden items-center md:flex">
          <Link href={base || "/"} className="mr-6 flex items-center space-x-2">
            <Image src="/images/logo-dark.svg" alt="Frata BIM Logo" width={87} height={29} className="dark:hidden" />
            <Image src="/images/logo-light.svg" alt="Frata BIM Logo" width={87} height={29} className="hidden dark:block" />
          </Link>
          <nav className="flex items-center space-x-6 text-sm">
            <Link href={base || "/"} className="font-medium text-foreground/80 transition-colors hover:text-primary">
              {labels[locale].home}
            </Link>
            <Link href={`${base}/about`} className="font-medium text-foreground/80 transition-colors hover:text-primary">
              {labels[locale].about}
            </Link>
            <ServicesMenu locale={locale} />
            <Link href={`${base}/bimtools`} className="font-medium text-foreground/80 transition-colors hover:text-primary">
              {labels[locale].bimtools}
            </Link>
            <Link href={`${base}/#contact`} className="font-medium text-foreground/80 transition-colors hover:text-primary">
              {labels[locale].contact}
            </Link>
          </nav>
        </div>

        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetHeader className="p-4">
                <SheetTitle className="sr-only">Navegacion</SheetTitle>
              </SheetHeader>
              <Link href={base || "/"} className="flex items-center px-4">
                <Image src="/images/logo-dark.svg" alt="Frata BIM Logo" width={87} height={29} className="dark:hidden" />
                <Image src="/images/logo-light.svg" alt="Frata BIM Logo" width={87} height={29} className="hidden dark:block" />
              </Link>
              <div className="grid gap-2 px-4 py-6">
                <Link href={base || "/"} className="flex w-full items-center py-2 text-lg font-semibold">
                  {labels[locale].home}
                </Link>
                <Link href={`${base}/about`} className="flex w-full items-center py-2 text-lg font-semibold">
                  {labels[locale].about}
                </Link>
                <ServicesMenu isMobile locale={locale} />
                <Link href={`${base}/bimtools`} className="flex w-full items-center py-2 text-lg font-semibold">
                  {labels[locale].bimtools}
                </Link>
                <Link href={`${base}/#contact`} className="flex w-full items-center py-2 text-lg font-semibold">
                  {labels[locale].contact}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-center md:hidden">
          <Link href={base || "/"} className="flex items-center space-x-2">
            <Image src="/images/logo-dark.svg" alt="Frata BIM Logo" width={87} height={29} className="dark:hidden" />
            <Image src="/images/logo-light.svg" alt="Frata BIM Logo" width={87} height={29} className="hidden dark:block" />
          </Link>
        </div>

        <div className="ml-auto flex items-center">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
