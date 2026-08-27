"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadContent } from "@/content/download";
import type { Locale } from "@/lib/locale";

const latestReleasePage = "https://github.com/FRATA-Ingenieros/frata-tools-revit-installer/releases/latest";
const latestReleaseApi = "https://api.github.com/repos/FRATA-Ingenieros/frata-tools-revit-installer/releases/latest";

export function LatestReleaseRedirect({ locale = "es" }: { locale?: Locale }) {
  const t = downloadContent[locale];
  const [message, setMessage] = useState(t.searching);

  useEffect(() => {
    let active = true;

    async function resolveLatestAsset() {
      try {
        const response = await fetch(latestReleaseApi, {
          headers: {
            Accept: "application/vnd.github+json",
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const release = await response.json();
        const exeAsset = Array.isArray(release.assets)
          ? release.assets.find((asset: { name?: string; browser_download_url?: string }) =>
              typeof asset.name === "string" && asset.name.toLowerCase().endsWith(".exe")
            )
          : null;

        const target = exeAsset?.browser_download_url || latestReleasePage;
        window.location.href = target;
      } catch {
        if (!active) return;
        setMessage(t.errorFallback);
        window.location.href = latestReleasePage;
      }
    }

    resolveLatestAsset();

    return () => {
      active = false;
    };
  }, [locale, t.errorFallback]);

  return (
    <section>
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center text-primary">
            <LoaderCircle className="h-8 w-8 animate-spin" />
          </div>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-primary">{t.badge}</p>
          <h1 className="mt-4 font-headline text-display-md font-bold text-foreground">{t.heading}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{message}</p>

          <div className="mx-auto mt-14 grid max-w-2xl gap-10 text-left sm:grid-cols-2">
            <div className="border-t border-border pt-5">
              <div className="flex items-center gap-2 text-primary">
                <Download className="h-4 w-4" />
                <p className="text-sm font-medium text-foreground">{t.latestInstallerTitle}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.latestInstallerBody}</p>
            </div>
            <div className="border-t border-border pt-5">
              <div className="flex items-center gap-2 text-primary">
                <ArrowRight className="h-4 w-4" />
                <p className="text-sm font-medium text-foreground">{t.autoRedirectTitle}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{t.autoRedirectBody}</p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="rounded-none border-border text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
            >
              <a href={latestReleasePage} target="_blank" rel="noreferrer">
                {t.openManuallyCta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
