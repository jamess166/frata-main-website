import Image from "next/image";
import { Reveal } from "@/components/site/reveal";
import { resolveBilingual, type Locale } from "@/lib/locale";

interface SocialProofSectionProps {
  locale?: Locale;
}

const HEADINGS: Record<Locale, { testimonials: string; usedAt: string }> = {
  es: { testimonials: "Lo que dicen nuestros clientes", usedAt: "Usado en proyectos de" },
  en: { testimonials: "What our clients say", usedAt: "Used in projects at" },
  de: { testimonials: "Was unsere Kunden sagen", usedAt: "Im Einsatz bei Projekten von" },
  fr: { testimonials: "Ce que disent nos clients", usedAt: "Utilisé dans des projets de" },
  it: { testimonials: "Cosa dicono i nostri clienti", usedAt: "Utilizzato nei progetti di" },
  pt: { testimonials: "O que dizem nossos clientes", usedAt: "Usado em projetos de" },
  ru: { testimonials: "Что говорят наши клиенты", usedAt: "Используется в проектах" },
  zh: { testimonials: "客户评价", usedAt: "已应用于以下项目" },
};

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
  const headings = HEADINGS[locale];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-display-lg text-foreground">{headings.testimonials}</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => {
            const text = resolveBilingual(locale, t.text, t.textEn);
            const role = resolveBilingual(locale, t.role, t.roleEn);
            return (
              <Reveal key={t.name} className="h-full">
                <blockquote className="flex h-full flex-col rounded-tile bg-surface p-8">
                  <p className="text-[1.0625rem] leading-relaxed text-foreground">“{text}”</p>
                  <footer className="mt-auto pt-8">
                    <p className="text-[0.9375rem] font-semibold text-foreground">{t.name}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {role ? `${role} · ` : ""}
                      {t.company}, {t.country}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            );
          })}
        </div>

        {CLIENT_LOGOS.length > 0 && (
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">{headings.usedAt}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {CLIENT_LOGOS.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-60 grayscale transition-opacity hover:opacity-100 dark:invert"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
