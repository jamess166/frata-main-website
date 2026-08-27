import type { Locale } from "@/lib/locale";

/**
 * Small inline SVG flags for the locale switcher. Emoji flags (🇵🇪, 🇺🇸, …)
 * render as bare two-letter country codes on Windows Chrome instead of
 * pictures — the OS emoji font doesn't draw regional-indicator glyphs as
 * flags there — so these are rendered as actual vector shapes to look
 * correct on every platform.
 */
const FLAGS: Record<Locale, React.ReactNode> = {
  es: (
    // Peru: vertical red-white-red
    <>
      <rect width="20" height="14" fill="#D91023" />
      <rect x="6.67" width="6.67" height="14" fill="#fff" />
    </>
  ),
  en: (
    // USA: simplified stripes + blue canton
    <>
      <rect width="20" height="14" fill="#fff" />
      <rect y="0" width="20" height="1.08" fill="#B22234" />
      <rect y="2.15" width="20" height="1.08" fill="#B22234" />
      <rect y="4.3" width="20" height="1.08" fill="#B22234" />
      <rect y="6.46" width="20" height="1.08" fill="#B22234" />
      <rect y="8.6" width="20" height="1.08" fill="#B22234" />
      <rect y="10.77" width="20" height="1.08" fill="#B22234" />
      <rect y="12.92" width="20" height="1.08" fill="#B22234" />
      <rect width="8.5" height="7.5" fill="#3C3B6E" />
    </>
  ),
  de: (
    // Germany: horizontal black-red-gold
    <>
      <rect width="20" height="4.67" fill="#000" />
      <rect y="4.67" width="20" height="4.67" fill="#DD0000" />
      <rect y="9.33" width="20" height="4.67" fill="#FFCE00" />
    </>
  ),
  fr: (
    // France: vertical blue-white-red
    <>
      <rect width="6.67" height="14" fill="#0055A4" />
      <rect x="6.67" width="6.67" height="14" fill="#fff" />
      <rect x="13.33" width="6.67" height="14" fill="#EF4135" />
    </>
  ),
  it: (
    // Italy: vertical green-white-red
    <>
      <rect width="6.67" height="14" fill="#009246" />
      <rect x="6.67" width="6.67" height="14" fill="#fff" />
      <rect x="13.33" width="6.67" height="14" fill="#CE2B37" />
    </>
  ),
  pt: (
    // Brazil: green field, yellow diamond, blue circle
    <>
      <rect width="20" height="14" fill="#009C3B" />
      <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FFDF00" />
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
    </>
  ),
  ru: (
    // Russia: horizontal white-blue-red
    <>
      <rect width="20" height="4.67" fill="#fff" />
      <rect y="4.67" width="20" height="4.67" fill="#0039A6" />
      <rect y="9.33" width="20" height="4.67" fill="#D52B1E" />
    </>
  ),
  zh: (
    // China: red field with a single simplified gold star
    <>
      <rect width="20" height="14" fill="#DE2910" />
      <polygon
        points="5,2.2 5.9,4.9 8.7,4.9 6.4,6.6 7.3,9.3 5,7.6 2.7,9.3 3.6,6.6 1.3,4.9 4.1,4.9"
        fill="#FFDE00"
      />
    </>
  ),
};

export function FlagIcon({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 14"
      width="18"
      height="13"
      className={`inline-block shrink-0 rounded-[2px] ring-1 ring-inset ring-white/15 ${className ?? ""}`}
      aria-hidden="true"
    >
      {FLAGS[locale]}
    </svg>
  );
}
