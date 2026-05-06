"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function toEnglishPath(pathname: string) {
  if (pathname === "/") return "/en";
  if (pathname.startsWith("/en")) return pathname;
  return `/en${pathname}`;
}

function toSpanishPath(pathname: string) {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.replace(/^\/en/, "") || "/";
  return pathname;
}

export function LocaleSwitcher() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  return (
    <div className="inline-flex items-center rounded-full border bg-background/70 p-1 text-sm">
      <Link
        href={toSpanishPath(pathname)}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          !isEnglish ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ES
      </Link>
      <Link
        href={toEnglishPath(pathname)}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          isEnglish ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
