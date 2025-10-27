import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED = ['es', 'en'];
const DEFAULT = 'es';

function detectLocale(acceptLang?: string | null) {
  if (!acceptLang) return DEFAULT;
  const langs = acceptLang.split(',').map(l => l.split(';')[0].trim().toLowerCase());
  for (const l of langs) {
    const code = l.split('-')[0];
    if (SUPPORTED.includes(code)) return code;
  }
  return DEFAULT;
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;

  // skip static, api, _next, assets, locales already present
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/images') ||
    SUPPORTED.some(s => pathname.startsWith(`/${s}/`)) ||
    SUPPORTED.includes(pathname.replace(/^\/+/, ''))
  ) {
    return NextResponse.next();
  }

  // only redirect root or paths without locale prefix
  const accept = req.headers.get('accept-language');
  const locale = detectLocale(accept);

  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

// apply middleware to all routes (you can narrow with matcher)
export const config = {
  matcher: ['/((?!_next|api|static|images).*)'],
};