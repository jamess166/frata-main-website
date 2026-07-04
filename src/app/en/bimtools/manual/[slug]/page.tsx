import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { ArrowLeft, ArrowRight, CreditCard, Download, Star } from "lucide-react";
import { AddinIcon } from "@/components/bimtools/addin-icon";
import { ManualImageGallery } from "@/components/bimtools/manual-image-gallery";
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
  if (!manual) return { title: "Manual not found" };

  return {
    title: `${manual.title.en} | BIMtools Manual`,
    description: manual.excerpt.en,
    alternates: {
      canonical: `https://www.frataingenieros.com/en/bimtools/manual/${manual.slug}`,
    },
  };
}

export default async function ManualDetailPageEn({ params }: ManualDetailPageProps) {
  const { slug } = await params;
  const manual = getBimtoolManual(slug);
  const suites = getBimtoolsSuitesWithManuals();
  if (!manual) notFound();

  const renderedMarkdown = await remark().use(html).process(manual.markdown.en);
  const currentSuite = suites.find((suite) => suite.id === manual.suiteId);
  const youtubeEmbedUrl = getYoutubeEmbedUrl(manual.media.youtubeUrl, manual.media.youtubeId);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <a
          href="/en/bimtools#suites"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to BIMtools
        </a>
      </div>

      <div className="container mx-auto grid gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:px-8">
        <aside className="h-fit rounded-3xl border bg-secondary/40 p-6 lg:sticky lg:top-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{manual.suiteLabel}</p>
          <div className="mt-4 flex items-start gap-4">
            <AddinIcon icon={manual.icon} name={manual.addinName} size="lg" />
            <div className="min-w-0">
              <h1 className="font-headline text-3xl font-bold leading-tight">{manual.title.en}</h1>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant={manual.commerce.isPremium ? "default" : "outline"} className="rounded-full">
              {manual.commerce.isPremium ? (
                <>
                  <Star className="mr-1 h-3 w-3" />
                  Premium
                </>
              ) : (
                "Free"
              )}
            </Badge>
            {manual.commerce.isPremium ? (
              <Badge variant="secondary" className="rounded-full">
                {manual.commerce.trialDays}-day trial
              </Badge>
            ) : null}
          </div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{manual.excerpt.en}</p>

          <div className="mt-6 space-y-3">
            {manual.commerce.isPremium ? (
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                <p className="text-sm font-semibold text-foreground">BIMtools premium subscription</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Access this add-in and every premium add-in for <strong>USD 20/month</strong> or <strong>USD 100/year</strong>.
                </p>
              </div>
            ) : null}
            {manual.commerce.isPremium && manual.commerce.purchaseUrl ? (
              <Link
                href="/en/bimtools/subscription"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <CreditCard className="h-4 w-4" />
                Buy premium subscription
              </Link>
            ) : null}
            <Link
              href="/en/download"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Download trial installer
            </Link>
          </div>

          {currentSuite ? (
            <div className="mt-8 border-t pt-6">
              <p className="text-sm font-semibold text-foreground">More tools in this suite</p>
              <div className="mt-4 space-y-2">
                {currentSuite.manuals.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/en/bimtools/manual/${entry.slug}`}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                      entry.slug === manual.slug
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border bg-background/70 text-muted-foreground hover:border-primary/30 hover:text-foreground"
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
          <div className="rounded-2xl border bg-card/60 p-6 shadow-sm sm:p-10">
            <div
              className="prose prose-slate max-w-none prose-headings:font-headline prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: renderedMarkdown.toString() }}
            />
          </div>

          {manual.media.images.length > 0 ? (
            <section className="mt-10 rounded-2xl border bg-card/60 p-6 shadow-sm sm:p-10">
              <h2 className="font-headline text-2xl font-bold text-foreground">Gallery</h2>
              <ManualImageGallery images={manual.media.images} locale="en" />
            </section>
          ) : null}

          {youtubeEmbedUrl ? (
            <section className="mt-10 rounded-2xl border bg-card/60 p-6 shadow-sm sm:p-10">
              <h2 className="font-headline text-2xl font-bold text-foreground">Video</h2>
              <div className="mt-6 overflow-hidden rounded-3xl border bg-background/70">
                <div className="aspect-video">
                  <iframe
                    src={youtubeEmbedUrl}
                    title={`${manual.title.en} video`}
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
              href="/en/bimtools"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
            >
              View BIMtools
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/en/download"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
            >
              Download trial
            </Link>
            {manual.commerce.isPremium && manual.commerce.purchaseUrl ? (
              <Link
                href="/en/bimtools/subscription"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Buy premium subscription
              </Link>
            ) : null}
          </div>
        </article>
      </div>
    </div>
  );
}
