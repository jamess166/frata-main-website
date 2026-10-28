const BASE_URL = "https://www.frataingenieros.com";
const ORGANIZATION_ID = `${BASE_URL}/#organization`;

const AREA_SERVED = [
  { "@type": "Country", name: "Peru" },
  { "@type": "Place", name: "LATAM" },
];

const ORGANIZATION = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Frata Ingenieros",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo-frata.png`,
  image: `${BASE_URL}/images/og-image.jpg`,
  email: "info@frataingenieros.com",
  description:
    "Consultoría BIM, expedientes técnicos de inversión pública con BIM, metrados BIM, modelado BIM y desarrollo de aplicaciones para Revit o Tekla. Empresa peruana con alcance LATAM.",
  sameAs: [
    "https://pe.linkedin.com/company/frata-ingenieros",
    "https://www.facebook.com/Frataingenieros/",
    "https://www.instagram.com/FRATA_INGENIEROS/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@frataingenieros.com",
    availableLanguage: ["Spanish", "English"],
  },
  areaServed: AREA_SERVED,
  knowsAbout: [
    "Consultoría BIM",
    "Expedientes técnicos de inversión pública con BIM",
    "Expedientes técnicos públicos con BIM",
    "Metrados BIM para expedientes técnicos de obra pública",
    "Plan de Ejecución BIM",
    "Guía Nacional BIM",
    "ISO 19650",
    "Modelado BIM",
    "Coordinación BIM",
    "Desarrollo Revit API",
    "Desarrollo Tekla",
    "Automatización BIM",
    "BIMtools",
    "Addins para Revit",
  ],
} as const;

// Pages other than the home page refer to the organization by @id instead of repeating it.
const ORGANIZATION_REF = { "@id": ORGANIZATION_ID } as const;

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ORGANIZATION,
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Frata Ingenieros",
        inLanguage: ["es", "en", "de", "fr", "it", "pt", "ru", "zh"],
        publisher: ORGANIZATION_REF,
      },
    ],
  };
}

export function buildSoftwareApplicationSchema(totalAddins: number, premiumAddins: number) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BIMtools",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows",
    description: `Suite de ${totalAddins} addins para Revit con herramientas para exportación, navegación, estructuras, parámetros, MEP y automatización BIM. ${premiumAddins} addins premium disponibles.`,
    url: `${BASE_URL}/bimtools`,
    offers: {
      "@type": "Offer",
      price: "30",
      priceCurrency: "USD",
      description: "Acceso mensual a los addins premium de BIMtools",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "30",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
    creator: ORGANIZATION,
  };
}

export function buildServiceNode(name: string, description: string, serviceUrl: string, serviceType?: string[]) {
  return {
    "@type": "Service",
    name,
    description,
    url: serviceUrl,
    ...(serviceType ? { serviceType } : {}),
    provider: ORGANIZATION,
    areaServed: AREA_SERVED,
  };
}

export function buildServiceSchema(name: string, description: string, serviceUrl: string) {
  return { "@context": "https://schema.org", ...buildServiceNode(name, description, serviceUrl) };
}

export function buildBlogPostingSchema(post: {
  slug: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  author: string;
}) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        url,
        headline: post.title,
        description: post.summary,
        image: post.image.startsWith("http") ? post.image : `${BASE_URL}${post.image}`,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "es",
        author: { "@type": "Organization", name: post.author, url: BASE_URL },
        publisher: ORGANIZATION,
      },
      buildBreadcrumbs([
        { name: "Inicio", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
    ],
  };
}

export function buildBreadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
