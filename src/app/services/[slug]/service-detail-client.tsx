"use client"

import type { FC } from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { ServiceSlug } from "./page"

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

export const ServiceDetailClient: FC<ServiceDetailClientProps> = ({ serviceInfo }) => {
  const { t } = useLanguage()

  const title = t(serviceInfo.titleKey)
  const detail = t(serviceInfo.detailKey)

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
