import type { FC } from "react"
import { translations } from "@/lib/locales"
import { ServiceDetailClient } from "./service-detail-client"

// Define a type for the valid service slugs
export type ServiceSlug = 
  | 'global-remote-bim-teams'
  | 'custom-bim-software-development'
  | 'on-site-bim-construction-support'
  | 'bim-for-manufacturing'
  | 'bim-training-and-implementation'
  | 'comprehensive-bim-modeling';

// Define a type for the translation keys related to services
type ServiceTitleKey = `service${1|2|3|4|5|6}Title`;
type ServiceDetailKey = `service${1|2|3|4|5|6}Detail`;

// Map slugs to translation keys
export const serviceMap: Record<ServiceSlug, { titleKey: ServiceTitleKey, detailKey: ServiceDetailKey, dataAiHint: string }> = {
  'global-remote-bim-teams': { titleKey: 'service1Title', detailKey: 'service1Detail', dataAiHint: 'global network collaboration' },
  'custom-bim-software-development': { titleKey: 'service2Title', detailKey: 'service2Detail', dataAiHint: 'software code screen' },
  'on-site-bim-construction-support': { titleKey: 'service3Title', detailKey: 'service3Detail', dataAiHint: 'construction site meeting' },
  'bim-for-manufacturing': { titleKey: 'service4Title', detailKey: 'service4Detail', dataAiHint: 'robotic arm factory' },
  'bim-training-and-implementation': { titleKey: 'service5Title', detailKey: 'service5Detail', dataAiHint: 'business training session' },
  'comprehensive-bim-modeling': { titleKey: 'service6Title', detailKey: 'service6Detail', dataAiHint: 'architectural blueprint design' },
};

interface ServicePageProps {
  params: {
    slug: ServiceSlug
  }
}

const ServicePage: FC<ServicePageProps> = ({ params }) => {
  const { slug } = params
  const serviceInfo = serviceMap[slug];

  if (!serviceInfo) {
    return <div>Service not found</div>
  }
  
  // We pass the raw keys to the client component, so it can handle translation
  return <ServiceDetailClient serviceInfo={serviceInfo} />
}

export default ServicePage

// This function can be used with Next.js to generate static pages for each service
export async function generateStaticParams() {
  const slugs = Object.keys(serviceMap);
  return slugs.map(slug => ({
    slug,
  }));
}
