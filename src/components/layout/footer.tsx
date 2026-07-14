"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { bimtoolsSuites } from "@/lib/generated/bimtools-manuals";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://pe.linkedin.com/company/frata-ingenieros" },
  { label: "Facebook", href: "https://www.facebook.com/Frataingenieros/" },
  { label: "Instagram", href: "https://www.instagram.com/FRATA_INGENIEROS/" },
];

export function Footer() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const base = isEnglish ? "/en" : "";

  return (
    <footer className="border-t border-border bg-background">
      {/* big statement + CTA */}
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {isEnglish ? "Next project" : "Siguiente proyecto"}
        </p>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-3xl font-headline text-display-lg font-bold text-foreground">
            {isEnglish ? "Let's build together." : "¿Construimos juntos?"}
          </h2>
          <Link
            href={`${base}/#contact`}
            className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.14em] text-primary transition-colors hover:text-foreground"
          >
            {isEnglish ? "Talk to us" : "Hablemos"}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* link columns */}
      <div className="border-t border-border">
        <div className="container mx-auto grid gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="font-headline text-base font-bold text-foreground">Frata Ingenieros</p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              {isEnglish
                ? "BIM consulting, modeling and technical development for Revit and Tekla."
                : "Consultoría BIM, modelado y desarrollo técnico para Revit y Tekla."}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {isEnglish ? "Navigation" : "Navegación"}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li><Link href={base || "/"} className="transition-colors hover:text-primary">{isEnglish ? "Home" : "Inicio"}</Link></li>
              <li><Link href={`${base}/about`} className="transition-colors hover:text-primary">{isEnglish ? "About" : "Nosotros"}</Link></li>
              <li><Link href={`${base}/services`} className="transition-colors hover:text-primary">{isEnglish ? "Services" : "Servicios"}</Link></li>
              <li><Link href={`${base}/casos`} className="transition-colors hover:text-primary">{isEnglish ? "Case Studies" : "Casos"}</Link></li>
              <li><Link href={`${base}/#contact`} className="transition-colors hover:text-primary">{isEnglish ? "Contact" : "Contacto"}</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">BIMtools</p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li>
                <Link href={`${base}/bimtools`} className="transition-colors hover:text-primary">
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

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {isEnglish ? "Follow us" : "Síguenos"}
            </p>
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
          <p className="text-xs text-muted-foreground">
            {isEnglish
              ? "© 2026 Frata Ingenieros. All rights reserved."
              : "© 2026 Frata Ingenieros. Todos los derechos reservados."}
          </p>
          <p className="text-xs text-muted-foreground">
            {isEnglish ? "Made in Peru for the AEC world." : "Hecho en Perú para el mundo AEC."}
          </p>
        </div>
      </div>
    </footer>
  );
}
