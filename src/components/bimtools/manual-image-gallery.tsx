"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ManualGalleryImage {
  src: string;
  alt: string;
}

export function ManualImageGallery({
  images,
  locale = "es",
}: {
  images: ManualGalleryImage[];
  locale?: "es" | "en";
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const labels = useMemo(
    () => ({
      expand: locale === "en" ? "Expand" : "Ampliar",
      previous: locale === "en" ? "Previous image" : "Imagen anterior",
      next: locale === "en" ? "Next image" : "Imagen siguiente",
    }),
    [locale]
  );

  const activeImage = images[activeIndex];

  if (!activeImage) {
    return null;
  }

  const goPrevious = () => setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  const goNext = () => setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));

  return (
    <div className="mt-6 space-y-4">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <div className="overflow-hidden rounded-[1.5rem] border border-border/80 bg-background/85 shadow-sm">
          <div className="flex items-center justify-between border-b border-border/70 bg-secondary/35 px-4 py-3">
            <div className="text-sm font-medium text-foreground">
              {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <Expand className="h-3.5 w-3.5" />
                {labels.expand}
              </button>
            </DialogTrigger>
          </div>

          <div className="relative bg-[linear-gradient(180deg,_rgba(15,23,42,0.02),_transparent)] px-4 py-4 sm:px-6 sm:py-6">
            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={goPrevious}
                  aria-label={labels.previous}
                  className="absolute left-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-sm transition-colors hover:border-primary/30 hover:text-primary sm:left-6"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label={labels.next}
                  className="absolute right-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-sm transition-colors hover:border-primary/30 hover:text-primary sm:right-6"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            ) : null}

            <button type="button" onClick={() => setIsOpen(true)} className="block w-full">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="mx-auto max-h-[34rem] w-full object-contain"
                loading="lazy"
              />
            </button>
          </div>
        </div>

        <DialogContent className="max-h-[92vh] max-w-6xl overflow-hidden border-border/80 bg-background p-0">
          <DialogTitle className="sr-only">{activeImage.alt}</DialogTitle>
          <div className="overflow-auto bg-secondary/25 p-4 sm:p-6">
            <img src={activeImage.src} alt={activeImage.alt} className="mx-auto max-h-[82vh] w-full object-contain" />
          </div>
        </DialogContent>
      </Dialog>

      {images.length > 1 ? (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-7">
          {images.map((image, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`overflow-hidden rounded-xl border bg-background/85 transition-all ${
                  isActive
                    ? "border-primary shadow-sm ring-1 ring-primary/30"
                    : "border-border/70 opacity-80 hover:border-primary/30 hover:opacity-100"
                }`}
                aria-label={`${locale === "en" ? "View image" : "Ver imagen"} ${index + 1}`}
              >
                <img src={image.src} alt={image.alt} className="h-20 w-full object-cover" loading="lazy" />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
