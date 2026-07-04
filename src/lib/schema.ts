const BASE_URL = "https://www.frataingenieros.com";

const ORGANIZATION = {
  "@type": "Organization",
  name: "Frata Ingenieros",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo-light.svg`,
  description:
    "Consultoría BIM, modelado BIM y desarrollo de aplicaciones para Revit o Tekla. Empresa peruana con alcance LATAM.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
  },
  areaServed: [
    { "@type": "Country", name: "Peru" },
    { "@type": "Place", name: "LATAM" },
  ],
  knowsAbout: [
    "Consultoría BIM",
    "Modelado BIM",
    "Coordinación BIM",
    "Desarrollo Revit API",
    "Desarrollo Tekla",
    "Automatización BIM",
    "BIMtools",
    "Addins para Revit",
  ],
} as const;

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    ...ORGANIZATION,
  };
}

export function buildSoftwareApplicationSchema(totalAddins: number, premiumAddins: number) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BIMtools",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows",
    description: `Suite de ${totalAddins} addins para Revit con herramientas para exportación, navegación, estructuras, parámetros y automatización BIM. ${premiumAddins} addins premium disponibles.`,
    url: `${BASE_URL}/bimtools`,
    offers: {
      "@type": "Offer",
      price: "20",
      priceCurrency: "USD",
      description: "Acceso mensual a los addins premium de BIMtools",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "20",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
    creator: ORGANIZATION,
  };
}

export function buildServiceSchema(name: string, description: string, serviceUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: serviceUrl,
    provider: ORGANIZATION,
    areaServed: [
      { "@type": "Country", name: "Peru" },
      { "@type": "Place", name: "LATAM" },
    ],
  };
}
