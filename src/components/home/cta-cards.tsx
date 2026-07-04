import Link from "next/link";
import { ArrowRight, Code2, HardHat, Layers3 } from "lucide-react";

interface CtaCardsProps {
  locale?: "es" | "en";
}

const CARDS = [
  {
    icon: HardHat,
    titleEs: "Necesito consultoría BIM",
    titleEn: "I need BIM consulting",
    descEs: "Implementa BIM en tu empresa con método y acompañamiento real.",
    descEn: "Implement BIM in your company with a proven method and real support.",
    hrefEs: "#contact",
    hrefEn: "#contact",
    accent: "border-primary/25 hover:border-primary/60 hover:bg-primary/5",
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: Code2,
    titleEs: "Quiero un addin a medida",
    titleEn: "I want a custom addin",
    descEs: "Automatiza flujos en Revit o Tekla con desarrollo técnico propio.",
    descEn: "Automate Revit or Tekla workflows with purpose-built development.",
    hrefEs: "/services/custom-bim-software-development",
    hrefEn: "/en/services/custom-bim-software-development",
    accent: "border-accent/25 hover:border-accent/60 hover:bg-accent/5",
    iconClass: "bg-accent/10 text-accent",
  },
  {
    icon: Layers3,
    titleEs: "Explorar BIMtools gratis",
    titleEn: "Explore BIMtools free",
    descEs: "21 addins para Revit · 7 premium desde USD 20/mes.",
    descEn: "21 Revit addins · 7 premium from USD 20/month.",
    hrefEs: "/bimtools",
    hrefEn: "/en/bimtools",
    accent: "border-border/50 hover:border-border hover:bg-secondary/50",
    iconClass: "bg-secondary text-foreground",
  },
];

export function CtaCards({ locale = "es" }: CtaCardsProps) {
  const isEn = locale === "en";

  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-3">
      {CARDS.map((card) => {
        const Icon = card.icon;
        const href = isEn ? card.hrefEn : card.hrefEs;
        const title = isEn ? card.titleEn : card.titleEs;
        const desc = isEn ? card.descEs : card.descEs;

        return (
          <Link
            key={title}
            href={href}
            className={`group flex flex-col gap-3 rounded-2xl border bg-card/70 p-5 shadow-sm transition-all duration-200 ${card.accent}`}
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconClass}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold leading-snug">{title}</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">{isEn ? card.descEn : card.descEs}</p>
            </div>
            <ArrowRight className="mt-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </Link>
        );
      })}
    </div>
  );
}
