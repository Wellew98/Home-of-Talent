import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import { homepageFaqs } from "@/data/faqs";
import { servicePhotoExtras } from "@/data/servicePhotoExtras";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceDetails, ServicePhotos } from "@/components/services/ServiceSections";
import { RoofingProgress } from "@/components/services/RoofingProgress";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { CtaSection } from "@/components/home/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  // Per-service FAQ + shared quote/area questions (no duplicated claims)
  const sharedFaqs = homepageFaqs.filter(
    (f) => f.q === "Do you provide quotes?" || f.q === "Which Johannesburg areas do you serve?",
  );
  const faqs = [...service.faqs, ...sharedFaqs];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          serviceType: service.title,
          description: service.description,
          provider: { "@type": "HomeAndConstructionBusiness", name: site.name, url: site.url },
          areaServed: { "@type": "City", name: "Johannesburg" },
        }}
      />
      <ServiceHero service={service} />
      <ServiceDetails service={service} />
      {service.richLayout ? (
        <RoofingProgress />
      ) : (
        <ServicePhotos service={service} extras={servicePhotoExtras[service.slug] ?? []} />
      )}
      <ProcessSteps
        label="Process"
        title="How Your Project Runs"
        lead="The same clear process for every job — so you know exactly what happens next."
      />
      <section className="bg-tint py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div className="max-w-xl">
              <p className="kicker mb-4 text-sage">Common Questions</p>
              <h2 className="font-display text-[34px] font-extrabold tracking-tight sm:text-[40px]">
                {service.shortTitle} Questions
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">
                Straight answers about this service. Anything else — send a WhatsApp
                or request a quote.
              </p>
            </div>
            <FaqList faqs={faqs} />
          </div>
        </Container>
      </section>
      <CtaSection
        title={`Ready to Talk About Your ${service.shortTitle} Project?`}
        lead="Request a free quote or send a WhatsApp. Clear answers and a clear quote, without the run-around."
      />
    </>
  );
}
