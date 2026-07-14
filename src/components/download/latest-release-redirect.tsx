"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const latestReleasePage = "https://github.com/FRATA-Ingenieros/frata-tools-revit-installer/releases/latest";
const latestReleaseApi = "https://api.github.com/repos/FRATA-Ingenieros/frata-tools-revit-installer/releases/latest";

export function LatestReleaseRedirect({
  locale = "es",
}: {
  locale?: "es" | "en";
}) {
  const [message, setMessage] = useState(
    locale === "en"
      ? "Searching for the latest installer release..."
      : "Buscando la ultima version disponible del instalador..."
  );

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
        setMessage(
          locale === "en"
            ? "We could not resolve the latest installer automatically. Redirecting to the latest release page..."
            : "No pudimos resolver automaticamente el ultimo instalador. Redirigiendo a la ultima release..."
        );
        window.location.href = latestReleasePage;
      }
    }

    resolveLatestAsset();

    return () => {
      active = false;
    };
  }, [locale]);

  return (
    <section>
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center text-primary">
            <LoaderCircle className="h-8 w-8 animate-spin" />
          </div>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {locale === "en" ? "Download in progress" : "Descarga en proceso"}
          </p>
          <h1 className="mt-4 font-headline text-display-md font-bold text-foreground">
            {locale === "en" ? "Preparing your BIMtools installer" : "Preparando tu instalador BIMtools"}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{message}</p>

          <div className="mx-auto mt-14 grid max-w-2xl gap-10 text-left sm:grid-cols-2">
            <div className="border-t border-border pt-5">
              <div className="flex items-center gap-2 text-primary">
                <Download className="h-4 w-4" />
                <p className="text-sm font-medium text-foreground">
                  {locale === "en" ? "Latest installer" : "Ultimo instalador"}
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {locale === "en"
                  ? "We are locating the most recent BIMtools release so you do not need to update links manually."
                  : "Estamos ubicando la release mas reciente de BIMtools para que no tengas que actualizar enlaces manualmente."}
              </p>
            </div>
            <div className="border-t border-border pt-5">
              <div className="flex items-center gap-2 text-primary">
                <ArrowRight className="h-4 w-4" />
                <p className="text-sm font-medium text-foreground">
                  {locale === "en" ? "Automatic redirect" : "Redireccion automatica"}
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {locale === "en"
                  ? "If the direct installer cannot be resolved, we will open the latest GitHub release page."
                  : "Si no se puede resolver el instalador directo, abriremos la pagina de la ultima release en GitHub."}
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="rounded-none border-border text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
            >
              <a href={latestReleasePage} target="_blank" rel="noreferrer">
                {locale === "en" ? "Open latest release manually" : "Abrir ultima release manualmente"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
