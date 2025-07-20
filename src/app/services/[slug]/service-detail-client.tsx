"use client"

import type { FC } from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Layers, ListChecks, Repeat, TrendingUp, Wrench, Users, AlertTriangle, FileText, Scaling, HardHat } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

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

const ServiceDetailContent: FC<{ content: string }> = ({ content }) => {
  const sections = content.split('\n\n');

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {sections.map((section, index) => {
        if (section.startsWith('### ')) {
          const title = section.substring(4);
          return <h3 key={index} className="font-headline text-2xl mt-8 mb-4 text-primary">{title}</h3>;
        }
        if (section.startsWith('## ')) {
            const title = section.substring(3);
            return <h2 key={index} className="font-headline text-3xl mt-12 mb-6 text-foreground text-center">{title}</h2>
        }
        if (section.startsWith('- ')) {
          const items = section.split('\n').map(item => item.substring(2));
          return (
            <ul key={index} className="space-y-3 p-0">
              {items.map((item, itemIndex) => {
                return (
                  <li key={itemIndex} className="flex items-start gap-3 p-0 my-2">
                     <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
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

const iconMap = {
    'Users': Users,
    'AlertTriangle': AlertTriangle,
    'FileText': FileText,
    'Scaling': Scaling,
    'HardHat': HardHat,
    'Layers': Layers,
    'CheckCircle': CheckCircle,
    'TrendingUp': TrendingUp,
    'Repeat': Repeat,
    'ListChecks': ListChecks,
    'Wrench': Wrench,
} as const;

type IconName = keyof typeof iconMap;

const BenefitsSection: FC<{ benefits: string[] }> = ({ benefits }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => {
                const [iconName, title, ...descriptionParts] = benefit.split(': ');
                const description = descriptionParts.join(': ');
                const IconComponent = iconMap[iconName as IconName] || CheckCircle;
                return (
                    <Card key={index} className="bg-secondary/50 border-0 shadow-none">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <IconComponent className="h-6 w-6" />
                            </div>
                            <CardTitle className="font-headline text-xl text-foreground">{title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{description}</p>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}


export const ServiceDetailClient: FC<ServiceDetailClientProps> = ({ serviceInfo }) => {
  const { t } = useLanguage()

  const title = t(serviceInfo.titleKey)
  const detail = t(serviceInfo.detailKey)
  
  const [
    intro, 
    problem, 
    benefitsTender, 
    benefitsDesign, 
    benefitsConstruction, 
    deliverables,
    process,
    cta
  ] = detail.split('---SPLIT---');

  const benefitsTenderItems = benefitsTender ? benefitsTender.trim().split('\n').slice(1) : [];
  const benefitsDesignItems = benefitsDesign ? benefitsDesign.trim().split('\n').slice(1) : [];
  const benefitsConstructionItems = benefitsConstruction ? benefitsConstruction.trim().split('\n').slice(1) : [];


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
       <div className="relative">
        <Button asChild variant="ghost" className="-ml-4">
          <Link href="/#services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('services')}
          </Link>
        </Button>
      </div>

      <header className="text-center max-w-4xl mx-auto">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
            {intro}
        </p>
      </header>

      {/* Problem Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 lg:h-full min-h-[24rem]">
            <Image
                src="https://placehold.co/800x600.png"
                data-ai-hint="2d blueprint drawing"
                alt="Traditional 2D rebar drawing"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
            />
        </div>
        <div className="space-y-6">
            <ServiceDetailContent content={problem} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary -mx-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
                 <h2 className="text-base font-bold uppercase tracking-widest text-primary">{t('aboutValue3')}</h2>
                 <p className="font-headline text-3xl font-bold text-foreground sm:text-4xl mt-2">{t('valuesTitle')}</p>
            </div>
            
            <h3 className="font-headline text-2xl mt-12 mb-4 text-center text-primary">{t('benefitsTenderTitle')}</h3>
            <BenefitsSection benefits={benefitsTenderItems} />
            
            <h3 className="font-headline text-2xl mt-12 mb-4 text-center text-primary">{t('benefitsDesignTitle')}</h3>
            <BenefitsSection benefits={benefitsDesignItems} />
            
            <h3 className="font-headline text-2xl mt-12 mb-4 text-center text-primary">{t('benefitsConstructionTitle')}</h3>
            <BenefitsSection benefits={benefitsConstructionItems} />
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
         <div className="relative h-96 lg:h-full min-h-[24rem] lg:order-last">
            <Image
                src="https://placehold.co/800x600.png"
                data-ai-hint="bim model on tablet"
                alt="BIM model being reviewed on a tablet"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
            />
        </div>
        <div className="space-y-6">
           <ServiceDetailContent content={deliverables} />
        </div>
      </section>

       {/* Process Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
         <div className="relative h-96 lg:h-full min-h-[24rem]">
            <Image
                src="https://placehold.co/800x600.png"
                data-ai-hint="bim collaboration meeting"
                alt="BIM Collaboration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
            />
        </div>
        <div className="space-y-6">
           <ServiceDetailContent content={process} />
        </div>
      </section>

       <div className="text-center pt-16 bg-primary/5 dark:bg-primary/10 rounded-lg p-10">
           <h2 className="font-headline text-3xl font-bold">{t('ctaTitle')}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {cta}
            </p>
           <Button asChild size="lg" className="mt-8">
            <Link href="/#contact">{t('heroCTA')}</Link>
          </Button>
      </div>
    </div>
  )
}
