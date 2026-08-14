import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

/**
 * Organization + LocalBusiness (HomeAndConstructionBusiness) schema
 * for the site root (master brief s.17).
 * Contact details are placeholders until the business confirms them.
 */
export function BusinessSchema() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      email: site.email,
      telephone: site.phoneTel,
      description: site.description,
      areaServed: {
        "@type": "City",
        name: "Johannesburg",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: "ZA",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: site.name,
      url: site.url,
      telephone: site.phoneTel,
      email: site.email,
      description: site.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: "ZA",
      },
      areaServed: [
        "Johannesburg",
        "Sandton",
        "Randburg",
        "Fourways",
        "Roodepoort",
        "Bedfordview",
        "Midrand",
        "Boksburg",
        "Germiston",
        "Edenvale",
      ],
      priceRange: "$$",
    },
  ];
  return <JsonLd data={data} />;
}
