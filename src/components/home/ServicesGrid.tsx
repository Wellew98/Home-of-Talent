import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

/**
 * Services grid — 9 cards, 3 columns (master brief s.10).
 */
export function ServicesGrid() {
  // Roofing leads as a full-width featured card so the nine brief services
  // below keep their exact 3x3 grid (master brief s.10).
  const featured = services.find((s) => s.slug === "roofing");
  const rest = services.filter((s) => s.slug !== "roofing");

  return (
    <section className="bg-offwhite py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            number="01"
            label="Services"
            title="Everything Your Home Needs."
            lead="From small repairs to complete home improvements, Home of Talent handles the work from start to finish."
          />
          <Link
            href="/services"
            className="group hidden items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:text-copper lg:inline-flex"
          >
            See All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {featured && (
          <Reveal className="mt-16">
            <ServiceCard service={featured} featured />
          </Reveal>
        )}

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 lg:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-b border-copper pb-1 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink"
          >
            See All Services <ArrowRight className="h-4 w-4 text-copper" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
