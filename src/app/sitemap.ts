import type { MetadataRoute } from "next";
import { serviceContent } from "@/lib/service-content";
import { getBimtoolsSuitesWithManuals } from "@/lib/bimtools";
import { getAllPosts } from "@/lib/blog";
import { localeAlternates, withLocale, LOCALES } from "@/lib/locale";

export const dynamic = "force-static";

const SITE_URL = "https://www.frataingenieros.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const suites = getBimtoolsSuitesWithManuals();

  // Spanish-canonical paths that exist in all 8 locales.
  const localizedPaths = [
    "/",
    "/about",
    "/services",
    ...Object.keys(serviceContent).map((slug) => `/services/${slug}`),
    "/casos",
    "/bimtools",
    ...suites.map((suite) => `/bimtools/suite/${suite.id}`),
    "/bimtools/manual",
    ...suites.flatMap((suite) => suite.manuals).map((manual) => `/bimtools/manual/${manual.slug}`),
    "/bimtools/suscripcion",
    "/bimtools/privacy",
  ];

  const localizedEntries = localizedPaths.flatMap((path) => {
    const languages = localeAlternates(path);
    return LOCALES.map((locale) => ({
      url: `${SITE_URL}${withLocale(locale, path)}`,
      alternates: { languages },
    }));
  });

  // The blog is Spanish-only.
  const posts = await getAllPosts();
  const blogEntries = [
    { url: `${SITE_URL}/blog` },
    ...posts.map((post) => ({ url: `${SITE_URL}/blog/${post.slug}`, lastModified: post.date })),
  ];

  return [...localizedEntries, ...blogEntries];
}
