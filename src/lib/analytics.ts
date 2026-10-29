/**
 * Google Analytics 4 measurement ID (looks like "G-XXXXXXXXXX").
 * Get it in Google Analytics → Admin → Data streams → your web stream.
 * While it is empty, no analytics script is loaded.
 */
export const GA_MEASUREMENT_ID = "";

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

/** Sends a GA4 event; does nothing when analytics is not configured or not loaded yet. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") return;
  (window as GtagWindow).gtag?.("event", name, params);
}
