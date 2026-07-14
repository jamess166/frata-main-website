import Image from "next/image";
import { Eyebrow } from "@/components/site/eyebrow";
import { Reveal } from "@/components/site/reveal";

interface SocialProofSectionProps {
  locale?: "es" | "en";
}

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

export function SocialProofSection({ locale = "es" }: SocialProofSectionProps) {
  const isEn = locale === "en";

  return (
    <section className="border-t border-border">
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <Reveal>
          <Eyebrow>{isEn ? "What our clients say" : "Lo que dicen nuestros clientes"}</Eyebrow>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <blockquote className="border-l border-primary/60 pl-6">
                <p className="text-sm leading-7 text-foreground/80">
                  “{isEn ? t.textEn : t.text}”
                </p>
                <footer className="mt-6">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {(isEn ? t.roleEn : t.role) ? `${isEn ? t.roleEn : t.role} · ` : ""}
                    {t.company}, {t.country}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        {CLIENT_LOGOS.length > 0 && (
          <div className="mt-20 border-t border-border pt-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {isEn ? "Used in projects at" : "Usado en proyectos de"}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-10">
              {CLIENT_LOGOS.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-50 grayscale invert transition hover:opacity-90"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
