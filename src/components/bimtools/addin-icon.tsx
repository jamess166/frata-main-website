"use client";

import { useEffect, useRef, useState } from "react";

interface AddinIconProps {
  icon: {
    src: string;
    alt: string;
  } | null;
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
} as const;

export function AddinIcon({ icon, name, size = "md" }: AddinIconProps) {
  const sizeClass = sizeClasses[size];
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    // Static-export pages hydrate after the browser may have already
    // attempted (and failed) the image request, so the onError event
    // can fire before this listener is attached. Catch that case on mount.
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, [icon?.src]);

  if (!icon?.src || failed) {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-md border border-border bg-secondary/60 text-xs font-semibold text-muted-foreground ${sizeClass}`}
        aria-hidden="true"
      >
        {name.slice(0, 1).toUpperCase()}
      </span>
    );
  }

  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-md border border-border bg-background p-1 ${sizeClass}`}>
      <img
        ref={imgRef}
        src={icon.src}
        alt={icon.alt}
        className="h-full w-full object-contain"
        onError={() => setFailed(true)}
      />
    </span>
  );
}
