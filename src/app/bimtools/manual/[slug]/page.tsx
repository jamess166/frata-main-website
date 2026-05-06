import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { ArrowLeft, ArrowRight, CreditCard, Download, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
    <div className="bg-background">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <Link
          href="/bimtools/manual"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a manuales BIMtools
        </Link>
      </div>

      <div className="container mx-auto grid gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:px-8">
        <aside className="h-fit rounded-3xl border bg-secondary/40 p-6 lg:sticky lg:top-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{manual.suiteLabel}</p>
          <h1 className="mt-3 font-headline text-3xl font-bold leading-tight">{manual.title.es}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant={manual.commerce.isPremium ? "default" : "outline"} className="rounded-full">
              {manual.commerce.isPremium ? (
                <>
                  <Star className="mr-1 h-3 w-3" />
                  Premium
                </>
              ) : (
                "Gratis"
              )}
            </Badge>
            {manual.commerce.isPremium ? (
              <Badge variant="secondary" className="rounded-full">
                Prueba de {manual.commerce.trialDays} dias
              </Badge>
            ) : null}
          </div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{manual.excerpt.es}</p>

          <div className="mt-6 space-y-3">
            {manual.commerce.isPremium ? (
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                <p className="text-sm font-semibold text-foreground">Suscripcion premium BIMtools</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Accede a este addin y a todos los addins premium por <strong>USD 20 al mes</strong> o <strong>USD 100 al año</strong>.
                </p>
              </div>
            ) : null}
            {manual.commerce.isPremium && manual.commerce.purchaseUrl ? (
              <Link
                href="/bimtools/suscripcion"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <CreditCard className="h-4 w-4" />
                Comprar suscripcion premium
              </Link>
            ) : null}
            <Link
              href="/download"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Descargar instalador de prueba
            </Link>
          </div>

          {currentSuite ? (
            <div className="mt-8 border-t pt-6">
              <p className="text-sm font-semibold text-foreground">Mas herramientas de esta suite</p>
              <div className="mt-4 space-y-2">
                {currentSuite.manuals.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/bimtools/manual/${entry.slug}`}
                    className={`block rounded-2xl border px-4 py-3 text-sm transition-colors ${
                      entry.slug === manual.slug
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border bg-background/70 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                    }`}
                  >
                    {entry.title.es}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </aside>

        <article className="min-w-0">
          <div className="rounded-[2rem] border bg-card/60 p-6 shadow-sm sm:p-10">
            <div
              className="prose prose-slate max-w-none prose-headings:font-headline prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: renderedMarkdown.toString() }}
            />
          </div>

          {manual.media.images.length > 0 ? (
            <section className="mt-10 rounded-[2rem] border bg-card/60 p-6 shadow-sm sm:p-10">
              <h2 className="font-headline text-2xl font-bold text-foreground">Galeria</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {manual.media.images.map((image) => (
                  <figure key={image.src} className="overflow-hidden rounded-3xl border bg-background/70">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          {youtubeEmbedUrl ? (
            <section className="mt-10 rounded-[2rem] border bg-card/60 p-6 shadow-sm sm:p-10">
              <h2 className="font-headline text-2xl font-bold text-foreground">Video</h2>
              <div className="mt-6 overflow-hidden rounded-3xl border bg-background/70">
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

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/bimtools"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
            >
              Ver BIMtools
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
            >
              Descargar prueba
            </Link>
            {manual.commerce.isPremium && manual.commerce.purchaseUrl ? (
              <Link
                href="/bimtools/suscripcion"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Comprar suscripcion premium
              </Link>
            ) : null}
          </div>
        </article>
      </div>
    </div>
  );
}
