"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOCALES, LOCALE_META, detectLocale, withLocale } from "@/lib/locale";
import { FlagIcon } from "@/components/layout/flag-icon";

interface LocaleSwitcherProps {
  /**
   * "compact" (default): small pill trigger, used in the desktop navbar.
   * "full": full-width bar trigger with a chevron, used in the mobile
   * full-screen menu where a small pill is a cramped tap target.
   */
  variant?: "compact" | "full";
}

export function LocaleSwitcher({ variant = "compact" }: LocaleSwitcherProps) {
  const pathname = usePathname() || "/";
  const { locale: currentLocale, canonicalPath } = detectLocale(pathname);
  const isFull = variant === "full";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={
            isFull
              ? "flex w-full items-center justify-between gap-2 rounded-none border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              : "inline-flex items-center gap-1.5 rounded-full border bg-background/70 px-3 py-1.5 text-sm text-foreground transition-colors hover:text-primary"
          }
        >
          <span className="inline-flex items-center gap-2">
            <FlagIcon locale={currentLocale} />
            {LOCALE_META[currentLocale].nativeLabel}
          </span>
          {isFull && <ChevronDown className="h-4 w-4 opacity-60" />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isFull ? "center" : "end"}
        className={isFull ? "w-[var(--radix-dropdown-menu-trigger-width)]" : undefined}
      >
        {LOCALES.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={withLocale(locale, canonicalPath)}
              className={`flex items-center gap-2 ${isFull ? "py-2.5" : ""} ${
                locale === currentLocale ? "font-medium text-primary" : ""
              }`}
            >
              <FlagIcon locale={locale} />
              {LOCALE_META[locale].nativeLabel}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
