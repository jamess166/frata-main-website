"use client";

import { Moon, Sun } from "lucide-react";
import { applyTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

/**
 * Switches between light and dark. Both icons are rendered and CSS shows the
 * right one, so the server HTML never disagrees with the theme set before paint.
 */
export function ThemeToggle({
  labels,
  className,
}: {
  labels: { toLight: string; toDark: string };
  className?: string;
}) {
  const toggle = () => {
    const next: Theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Cross-fade the whole page instead of an abrupt brightness jump, where supported.
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !reduceMotion) {
      doc.startViewTransition(() => applyTheme(next));
    } else {
      applyTheme(next);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "relative inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground/70 transition-[background-color,color,transform] duration-200 hover:bg-foreground/[0.06] hover:text-foreground active:scale-[0.92]",
        className
      )}
    >
      <span className="sr-only dark:hidden">{labels.toDark}</span>
      <span className="sr-only hidden dark:inline">{labels.toLight}</span>
      <Moon className="h-[18px] w-[18px] dark:hidden" aria-hidden />
      <Sun className="hidden h-[18px] w-[18px] dark:block" aria-hidden />
    </button>
  );
}
