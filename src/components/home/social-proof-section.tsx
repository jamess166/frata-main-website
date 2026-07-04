"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

interface SocialProofSectionProps {
  locale?: "es" | "en";
}

const COUNTERS = [
  {
    value: 50,
    suffix: "+",
    label: "Usuarios de BIMtools",
    labelEn: "BIMtools users",
  },
  {
    value: 21,
    suffix: "",
    label: "Addins disponibles",
    labelEn: "Available addins",
  },
  // TODO: replace with the real number of delivered BIM projects
  {
    value: 30,
    suffix: "+",
    label: "Proyectos BIM entregados",
    labelEn: "BIM projects delivered",
  },
];

const TESTIMONIALS = [
  {
    text: "Hemos colaborado con Frata en trabajo colaborativo interdisciplinario. Demuestran amplio conocimiento de la metodología BIM y logran automatizar procesos con las herramientas que desarrollan.",
    textEn:
      "We have collaborated with Frata on interdisciplinary BIM coordination. They demonstrate deep knowledge of BIM methodology and succeed in automating processes with the tools they develop.",
    name: "Mario Tello",
    role: "Jefe de Oficina Técnica",
    roleEn: "Head of Technical Office",
    company: "5yMas",
    country: "Perú",
  },
  {
    text: "Los addins que han creado son de mucha ayuda en mi trabajo del día a día, mejorando mis entregables en calidad y tiempos.",
    textEn:
      "The addins they have created are very helpful in my day-to-day work, improving my deliverables in quality and turnaround time.",
    name: "Edson Mamani",
    role: "Ingeniero de Detalle",
    roleEn: "Detailing Engineer",
    company: "Ferralia",
    country: "Perú",
  },
  {
    text: "La atención personalizada y las actualizaciones constantes han sido muy satisfactorias. La compatibilidad entre versiones de Revit me ha permitido usar sus addins en todos mis proyectos.",
    textEn:
      "The personalized support and constant updates have been very satisfying. The compatibility across Revit versions has allowed me to use their addins across all my projects.",
    name: "Kautsky Neyra",
    role: "",
    roleEn: "",
    company: "CASA",
    country: "Perú",
  },
];

const CLIENT_LOGOS: { src: string; alt: string }[] = [
  { src: "/images/clients/cincoymas.png", alt: "Cincoymas Estudio Técnico" },
  { src: "/images/clients/ferralia.png", alt: "Ferralia Group" },
  { src: "/images/clients/qcingenieros.PNG", alt: "QC Ingenieros" },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

const AVATAR_COLORS = [
  "bg-primary/20 text-primary",
  "bg-accent/20 text-accent",
  "bg-emerald-500/20 text-emerald-500",
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 1400;
          const startTime = Date.now();

          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out-cubic
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

export function SocialProofSection({ locale = "es" }: SocialProofSectionProps) {
  const isEn = locale === "en";

  return (
    <section className="border-y bg-secondary/30">
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            {isEn ? "Results" : "Resultados"}
          </p>
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            {isEn
              ? "Teams that trust Frata's work"
              : "Equipos que confían en el trabajo de Frata"}
          </h2>
        </div>

        {/* counters */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {COUNTERS.map((counter) => (
            <div
              key={counter.label}
              className="flex flex-col items-center rounded-3xl border bg-background/80 p-8 text-center"
            >
              <span className="font-headline text-5xl font-bold text-primary sm:text-6xl">
                <AnimatedCounter value={counter.value} suffix={counter.suffix} />
              </span>
              <span className="mt-3 text-sm font-medium text-muted-foreground">
                {isEn ? counter.labelEn : counter.label}
              </span>
            </div>
          ))}
        </div>

        {/* testimonials */}
        <div className="mt-16">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {isEn ? "What our clients say" : "Lo que dicen nuestros clientes"}
          </p>

          {/* mobile: horizontal snap scroll / desktop: grid */}
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className="gradient-border min-w-[80vw] snap-center rounded-3xl border bg-background/80 p-6 sm:min-w-0"
              >
                <Quote className="h-6 w-6 text-primary/50" />
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {isEn ? t.textEn : t.text}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                  >
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(isEn ? t.roleEn : t.role)
                        ? `${isEn ? t.roleEn : t.role} · `
                        : ""}
                      {t.company}, {t.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* client logos — renders only when logos are available */}
        {CLIENT_LOGOS.length > 0 && (
          <div className="mt-16 border-t pt-12">
            <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              {isEn ? "Used in projects at" : "Usado en proyectos de"}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {CLIENT_LOGOS.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
