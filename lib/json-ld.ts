import { siteConfig } from "@/lib/site-config";

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.whatsapp.map((wa) => `+${wa.number}`),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "Puerto Montt",
      addressCountry: "CL",
    },
    areaServed: [
      { "@type": "Country", name: "Chile" },
      { "@type": "Place", name: "Latinoamérica" },
    ],
    description: siteConfig.description,
  };
}
