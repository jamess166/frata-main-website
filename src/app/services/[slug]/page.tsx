// This file will be created
"use client"

import type { FC } from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/locales"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Define a type for the valid service slugs
type ServiceSlug = 
  | 'global-remote-bim-teams'
  | 'custom-bim-software-development'
  | 'on-site-bim-construction-support'
  | 'bim-for-manufacturing'
  | 'bim-training-and-implementation'
  | '4d-and-5d-simulation';

// Define a type for the translation keys related to services
type ServiceTitleKey = `service${1|2|3|4|5|6}Title`;
type ServiceDetailKey = `service${1|2|3|4|5|6}Detail`;

// Map slugs to translation keys
const serviceMap: Record<ServiceSlug, { titleKey: ServiceTitleKey, detailKey: ServiceDetailKey, dataAiHint: string }> = {
  'global-remote-bim-teams': { titleKey: 'service1Title', detailKey: 'service1Detail', dataAiHint: 'global network collaboration' },
  'custom-bim-software-development': { titleKey: 'service2Title', detailKey: 'service2Detail', dataAiHint: 'software code screen' },
  'on-site-bim-construction-support': { titleKey: 'service3Title', detailKey: 'service3Detail', dataAiHint: 'construction site meeting' },
  'bim-for-manufacturing': { titleKey: 'service4Title', detailKey: 'service4Detail', dataAiHint: 'robotic arm factory' },
  'bim-training-and-implementation': { titleKey: 'service5Title', detailKey: 'service5Detail', dataAiHint: 'business training session' },
  '4d-and-5d-simulation': { titleKey: 'service6Title', detailKey: 'service6Detail', dataAiHint: 'futuristic data visualization' },
};

interface ServicePageProps {
  params: {
    slug: ServiceSlug
  }
}

const ServicePage: FC<ServicePageProps> = ({ params }) => {
  const { slug } = params
  const { language, t } = useLanguage()

  const serviceInfo = serviceMap[slug];

  if (!serviceInfo) {
    return <div>Service not found</div>
  }

  const title = translations[language][serviceInfo.titleKey];
  const detail = translations[language][serviceInfo.detailKey];

  return (
    <div className="py-16 sm:py-24 space-y-16">
      <div className="relative">
        <Button asChild variant="ghost">
          <Link href="/#services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {detail}
          </p>
           <Button asChild size="lg" className="mt-4">
            <Link href="/#contact">{t('heroCTA')}</Link>
          </Button>
        </div>
        <div className="relative h-96 lg:h-full min-h-[24rem]">
          <Image
            src={`https://placehold.co/800x600.png`}
            data-ai-hint={serviceInfo.dataAiHint}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default ServicePage

// This function can be used with Next.js to generate static pages for each service
export async function generateStaticParams() {
  const slugs = Object.keys(serviceMap);
  return slugs.map(slug => ({
    slug,
  }));
}
