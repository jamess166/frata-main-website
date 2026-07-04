"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { bimtoolsSuites } from "@/lib/generated/bimtools-manuals";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://pe.linkedin.com/company/frata-ingenieros",
    Icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Frataingenieros/",
    Icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/FRATA_INGENIEROS/",
    Icon: Instagram,
  },
];

export function Footer() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const base = isEnglish ? "/en" : "";

  return (
    <footer className="border-t bg-secondary/55">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* main grid: 1 col mobile → 2 cols sm → 4 cols lg */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* col 1: brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-headline text-lg font-semibold text-foreground">Frata Ingenieros</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {isEnglish
                ? "BIM consulting, modeling and technical development for Revit and Tekla."
                : "Consultoría BIM, modelado y desarrollo técnico para Revit y Tekla."}
            </p>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* col 2: navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              {isEnglish ? "Navigation" : "Navegación"}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={base || "/"} className="transition-colors hover:text-primary">
                  {isEnglish ? "Home" : "Inicio"}
                </Link>
              </li>
              <li>
                <Link href={`${base}/about`} className="transition-colors hover:text-primary">
                  {isEnglish ? "About" : "Nosotros"}
                </Link>
              </li>
              <li>
                <Link href={`${base}/casos`} className="transition-colors hover:text-primary">
                  {isEnglish ? "Case Studies" : "Casos"}
                </Link>
              </li>
              <li>
                <Link href={`${base}/services/bim-training-and-implementation`} className="transition-colors hover:text-primary">
                  {isEnglish ? "Services" : "Servicios"}
                </Link>
              </li>
              <li>
                <Link href={`${base}/#contact`} className="transition-colors hover:text-primary">
                  {isEnglish ? "Contact" : "Contacto"}
                </Link>
              </li>
            </ul>
          </div>

          {/* col 3: BIMtools suites */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">BIMtools</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`${base}/bimtools`} className="font-medium transition-colors hover:text-primary">
                  {isEnglish ? "All addins" : "Ver todos los addins"}
                </Link>
              </li>
              {bimtoolsSuites.map((suite) => (
                <li key={suite.id}>
                  <Link
                    href={`${base}/bimtools/suite/${suite.id}`}
                    className="transition-colors hover:text-primary"
                  >
                    {suite.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* col 4: legal / made in Peru */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {isEnglish ? "Legal" : "Legal"}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href={`${base}/bimtools`} className="transition-colors hover:text-primary">
                    {isEnglish ? "Terms of use" : "Términos de uso"}
                  </Link>
                </li>
              </ul>
            </div>
            <p className="mt-8 text-xs text-muted-foreground lg:mt-0">
              {isEnglish ? "Made in 🇵🇪 Peru for the AEC world." : "Hecho en Perú 🇵🇪 para el mundo AEC."}
            </p>
          </div>

        </div>

        {/* bottom bar */}
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            {isEnglish
              ? "© 2026 Frata Ingenieros. All rights reserved."
              : "© 2026 Frata Ingenieros. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
}
