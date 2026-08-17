import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CtaSection } from "@/components/home/CtaSection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Home Improvement Services Johannesburg",
  description:
    "Professional home improvement services in Johannesburg: interior remodeling, kitchens and bathrooms, painting, exterior maintenance, outdoor living and more.",
};

export default function ServicesPage() {
  const featured = services.find((s) => s.slug === "roofing");
  const rest = services.filter((s) => s.slug !== "roofing");

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-16 lg:py-24">
        <Container>
          <div className="text-ondark-muted">
            <Breadcrumbs items={[{ label: "Services" }]} />
          </div>
          <div className="mt-10 max-w-3xl">
            <p className="kicker mb-5 text-copper">Services · Home of Talent</p>
            <h1 className="font-display text-[38px] font-extrabold leading-[1.03] tracking-tight text-ondark sm:text-[52px]">
              Professional Home Improvement Services
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ondark-muted">
              Ten service areas across greater Johannesburg — every job handled
              properly, from the first message to the final walk-through.
            </p>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="bg-offwhite py-20 lg:py-28">
        <Container>
          {featured && (
            <div className="mb-16">
              <ServiceCard service={featured} featured />
            </div>
          )}
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
