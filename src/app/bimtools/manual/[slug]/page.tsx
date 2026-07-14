import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { ManualImageGallery } from "@/components/bimtools/manual-image-gallery";
import { getBimtoolManual, getBimtoolsSuitesWithManuals } from "@/lib/bimtools";

interface ManualDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getYoutubeEmbedUrl(youtubeUrl: string, youtubeId: string) {
  if (youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}`;
  }

  if (!youtubeUrl) {
    return "";
  }

  try {
    const url = new URL(youtubeUrl);

    if (url.hostname.includes("youtu.be")) {
      const id = url.pathname.replace("/", "").trim();
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }

    if (url.hostname.includes("youtube.com")) {
      const id = url.searchParams.get("v") || url.pathname.split("/").filter(Boolean).pop();
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }
  } catch {
    return "";
  }

  return "";
}

export async function generateStaticParams() {
  return getBimtoolsSuitesWithManuals()
    .flatMap((suite) => suite.manuals)
    .map((manual) => ({ slug: manual.slug }));
}

export async function generateMetadata({ params }: ManualDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const manual = getBimtoolManual(slug);

  if (!manual) {
    return {
      title: "Manual no encontrado",
    };
  }

  return {
    title: `${manual.title.es} | Manual BIMtools`,
    description: manual.excerpt.es,
    alternates: {
      canonical: `https://www.frataingenieros.com/bimtools/manual/${manual.slug}`,
    },
  };
}

export default async function ManualDetailPage({ params }: ManualDetailPageProps) {
  const { slug } = await params;
  const manual = getBimtoolManual(slug);
  const suites = getBimtoolsSuitesWithManuals();

  if (!manual) notFound();

  const renderedMarkdown = await remark().use(html).process(manual.markdown.es);
  const currentSuite = suites.find((suite) => suite.id === manual.suiteId);
  const youtubeEmbedUrl = getYoutubeEmbedUrl(manual.media.youtubeUrl, manual.media.youtubeId);

  return (
    <>
      <div className="container mx-auto px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <a
          href="/bimtools#suites"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a BIMtools
        </a>
      </div>

      <div className="container mx-auto grid gap-14 px-4 py-14 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:px-8 lg:py-20">
        <aside className="h-fit lg:sticky lg:top-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{manual.suiteLabel}</p>
          <div className="mt-5 flex items-start gap-4">
            <AddinIcon icon={manual.icon} name={manual.addinName} size="lg" />
            <h1 className="min-w-0 font-headline text-3xl font-bold leading-tight tracking-tight text-foreground">
              {manual.title.es}
            </h1>
          </div>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {manual.commerce.isPremium ? (
              <>
                <span className="text-primary">Premium</span>
                {manual.commerce.trialDays ? ` · Prueba de ${manual.commerce.trialDays} días` : null}
              </>
            ) : (
              "Gratis"
            )}
          </p>
          <p className="mt-5 border-t border-border pt-5 text-sm leading-7 text-muted-foreground">
            {manual.excerpt.es}
          </p>

          <div className="mt-8 space-y-3">
            {manual.commerce.isPremium ? (
              <p className="text-sm leading-7 text-muted-foreground">
                Accede a este addin y a todos los addins premium por{" "}
                <strong className="text-foreground">USD 20/mes</strong> o{" "}
                <strong className="text-foreground">USD 100/año</strong>.
              </p>
            ) : null}
            {manual.commerce.isPremium && manual.commerce.purchaseUrl ? (
              <Link
                href="/bimtools/suscripcion"
                className="inline-flex w-full items-center justify-center bg-primary px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Comprar suscripción premium
              </Link>
            ) : null}
            <Link
              href="/download"
              className="inline-flex w-full items-center justify-center border border-border px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Descargar instalador de prueba
            </Link>
          </div>

          {currentSuite ? (
            <div className="mt-10 border-t border-border pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Más herramientas de esta suite
              </p>
              <div className="mt-4">
                {currentSuite.manuals.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/bimtools/manual/${entry.slug}`}
                    className={`flex items-center gap-3 border-t border-border py-3 text-sm transition-colors ${
                      entry.slug === manual.slug
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <AddinIcon icon={entry.icon} name={entry.addinName} size="sm" />
                    <span className="truncate">{entry.addinName}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </aside>

        <article className="min-w-0">
          <div
            className="prose prose-invert max-w-none prose-headings:font-headline prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: renderedMarkdown.toString() }}
          />

          {manual.media.images.length > 0 ? (
            <section className="mt-14 border-t border-border pt-10">
              <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground">Galería</h2>
              <ManualImageGallery images={manual.media.images} locale="es" />
            </section>
          ) : null}

          {youtubeEmbedUrl ? (
            <section className="mt-14 border-t border-border pt-10">
              <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground">Video</h2>
              <div className="mt-6 overflow-hidden border border-border">
                <div className="aspect-video">
                  <iframe
                    src={youtubeEmbedUrl}
                    title={`${manual.title.es} video`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>
          ) : null}

          <div className="mt-14 flex flex-wrap gap-4 border-t border-border pt-10">
            <Link
              href="/bimtools"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ver BIMtools
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Descargar prueba
            </Link>
            {manual.commerce.isPremium && manual.commerce.purchaseUrl ? (
              <Link
                href="/bimtools/suscripcion"
                className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Comprar suscripción premium
              </Link>
            ) : null}
          </div>
        </article>
      </div>
    </>
  );
}
