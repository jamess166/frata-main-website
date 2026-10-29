export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "frata-theme";

const THEME_COLORS: Record<Theme, string> = { light: "#ffffff", dark: "#000000" };

/**
 * Inline script for <head>: sets data-theme on <html> before first paint so
 * there is no flash of the wrong theme. A saved choice wins; otherwise it
 * follows the OS setting, and keeps following it while no choice is saved.
 */
export const THEME_INIT_SCRIPT = `(function(){try{
var k=${JSON.stringify(THEME_STORAGE_KEY)},c=${JSON.stringify(THEME_COLORS)},r=document.documentElement,m=window.matchMedia("(prefers-color-scheme: dark)");
function a(t){r.dataset.theme=t;document.querySelectorAll('meta[name="theme-color"]').forEach(function(e){e.setAttribute("content",c[t])})}
var s=localStorage.getItem(k);a(s==="light"||s==="dark"?s:m.matches?"dark":"light");
m.addEventListener("change",function(e){if(!localStorage.getItem(k))a(e.matches?"dark":"light")});
}catch(e){}})()`;

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((meta) => meta.setAttribute("content", THEME_COLORS[theme]));
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode); the choice then lasts for this page only.
  }
}
