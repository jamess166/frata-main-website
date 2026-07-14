"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1400;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  );
}

export function Stat({
  value,
  suffix = "",
  label,
  className,
  animated = true,
}: {
  value: number | string;
  suffix?: string;
  label: string;
  className?: string;
  animated?: boolean;
}) {
  return (
    <div className={cn("border-t border-border pt-4", className)}>
      <p className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {animated && typeof value === "number" ? (
          <AnimatedCounter value={value} suffix={suffix} />
        ) : (
          <>
            {value}
            {suffix}
          </>
        )}
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
