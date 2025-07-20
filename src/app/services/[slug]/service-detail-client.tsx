"use client"

import type { FC } from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Layers, ListChecks, Repeat, TrendingUp, Wrench } from "lucide-react"
import Link from "next/link"

// Define a type for the translation keys related to services
type ServiceTitleKey = `service${1|2|3|4|5|6}Title`;
type ServiceDetailKey = `service${1|2|3|4|5|6}Detail`;

interface ServiceInfo {
  titleKey: ServiceTitleKey;
  detailKey: ServiceDetailKey;
  dataAiHint: string;
}

interface ServiceDetailClientProps {
  serviceInfo: ServiceInfo
}

const ServiceDetailContent: FC<{ content: string }> = () => {
  const sections = content.split('\n\n');

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {sections.map((section, index) => {
        if (section.startsWith('### ')) {
          const title = section.substring(4);
          return <h3 key={index} className="font-headline text-2xl mt-8 mb-4 text-primary">{title}</h3>;
        }
        if (section.startsWith('- ')) {
          const items = section.split('\n').map(item => item.substring(2));
          const icons = {
            "3D Rebar Modeling": Layers,
            "Rebar Shop Drawings": Wrench,
            "Bar Bending Schedules (BBS)": ListChecks,
            "As-Built Modeling": Repeat,
            "Enhanced Accuracy": CheckCircle,
            "Improved Visualization": Layers,
            "Efficient Material Management": TrendingUp,
            "Streamlined Construction": Wrench,
            "Requirement Analysis": ListChecks,
            "3D Modeling": Layers,
            "Clash Detection": CheckCircle,
            "Deliverables Generation": Wrench,
            "Quality Assurance": CheckCircle,
            "Modelado 3D de Armaduras": Layers,
            "Planos de Taller de Armaduras": Wrench,
            "Listas de Doblado de Barras (BBS)": ListChecks,
            "Modelado As-Built": Repeat,
            "Precisión Mejorada": CheckCircle,
            "Visualización Optimizada": Layers,
            "Gestión Eficiente de Materiales": TrendingUp,
            "Construcción Simplificada": Wrench,
            "Análisis de Requisitos": ListChecks,
            "Detección de Interferencias": CheckCircle,
            "Generación de Entregables": Wrench,
            "Control de Calidad": CheckCircle,
          };
          return (
            <ul key={index} className="space-y-3 p-0">
              {items.map((item, itemIndex) => {
                const [itemName] = item.split(':');
                const Icon = icons[itemName.trim() as keyof typeof icons] || CheckCircle;
                return (
                  <li key={itemIndex} className="flex items-start gap-3 p-0 my-2">
                     <div className="flex-shrink-0 mt-1">
                      <Icon className="h-5 w-5 text-primary" />
                     </div>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          );
        }
        return <p key={index} className="text-lg text-muted-foreground leading-relaxed">{section}</p>;
      })}
    </div>
  );
};


export const ServiceDetailClient: FC<ServiceDetailClientProps> = ({ serviceInfo }) => {
  const { t } = useLanguage()

  const title = t(serviceInfo.titleKey)
  const detail = t(serviceInfo.detailKey)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
       <div className="relative">
        <Button asChild variant="ghost" className="-ml-4">
          <Link href="/#services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>
      </div>

      <div className="grid lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-3 space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <ServiceDetailContent content={detail} />
        </div>
        <div className="lg:col-span-2 relative h-96 lg:h-full min-h-[24rem] lg:min-h-[36rem] sticky top-24">
          <Image
            src={`https://placehold.co/800x1000.png`}
            data-ai-hint={serviceInfo.dataAiHint}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
       <div className="text-center pt-16">
           <h2 className="font-headline text-3xl font-bold">{t('ctaTitle')}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {t('ctaDesc')}
            </p>
           <Button asChild size="lg" className="mt-8">
            <Link href="/#contact">{t('heroCTA')}</Link>
          </Button>
      </div>
    </div>
  )
}

    