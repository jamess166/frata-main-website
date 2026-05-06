"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const base = isEnglish ? "/en" : "";

  return (
    <footer className="border-t bg-secondary/55">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-headline text-lg font-semibold text-foreground">Frata Ingenieros</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {isEnglish
              ? "BIM consulting, BIM modeling and technical development for Revit or Tekla."
              : "Consultoria BIM, modelado BIM y desarrollo tecnico para Revit o Tekla."}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link href={base || "/"} className="transition-colors hover:text-foreground">
            {isEnglish ? "Home" : "Inicio"}
          </Link>
          <Link href={`${base}/about`} className="transition-colors hover:text-foreground">
            {isEnglish ? "About" : "Nosotros"}
          </Link>
          <Link href={`${base}/bimtools`} className="transition-colors hover:text-foreground">
            BIMtools
          </Link>
          <Link href={`${base}/#contact`} className="transition-colors hover:text-foreground">
            {isEnglish ? "Contact" : "Contacto"}
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          {isEnglish ? "© 2026 Frata Ingenieros. All rights reserved." : "© 2026 Frata Ingenieros. Todos los derechos reservados."}
        </p>
      </div>
    </footer>
  );
}
