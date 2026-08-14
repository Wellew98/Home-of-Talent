import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { FaqList } from "@/components/ui/FaqList";
import { CtaSection } from "@/components/home/CtaSection";
import { locations, getLocation } from "@/data/locations";
import { services } from "@/data/services";
import { homepageFaqs } from "@/data/faqs";
import { whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: location.seoTitle,
    description: location.seoDescription,
    alternates: { canonical: `/areas/${location.slug}` },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const otherAreas = locations
    .filter((l) => l.slug !== location.slug && l.slug !== "johannesburg")
    .slice(0, 6);

  const sharedFaqs = homepageFaqs.filter(
    (f) => f.q === "How do I request a quote?" || f.q === "Do you provide quotes?",
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-16 lg:py-24">
        <Container>
          <div className="text-ondark-muted">
            <Breadcrumbs
              items={[
                { label: "Areas We Serve", href: "/areas/johannesburg" },
                { label: location.name },
              ]}
            />
          </div>
          <div className="mt-10 max-w-3xl">
            <p className="kicker mb-5 flex items-center gap-2 text-copper">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {location.region} · Home of Talent
            </p>
            <h1 className="font-display text-[36px] font-extrabold leading-[1.03] tracking-tight text-ondark sm:text-[50px]">
              {location.title}
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ondark-muted">
              {location.heroLead}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote" size="lg">
                Get a Free Quote
              </Button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-ondark/50 px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.08em] text-ondark transition-colors hover:border-copper hover:text-copper"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-offwhite py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <p className="kicker mb-4 text-sage">About the area</p>
              <h2 className="font-display text-[30px] font-extrabold tracking-tight sm:text-[36px]">
                Homes in {location.name}
              </h2>
            </div>
            <div className="max-w-2xl space-y-5">
              {location.intro.map((para) => (
                <p key={para.slice(0, 40)} className="text-[17px] leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Area notes */}
      <section className="bg-tint py-20 lg:py-28">
        <Container>
          <p className="kicker mb-4 text-sage">What matters here</p>
          <h2 className="max-w-2xl font-display text-[30px] font-extrabold tracking-tight sm:text-[36px]">
            Local knowledge, built into how we work
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {location.areaNotes.map((note, i) => (
              <div key={note.title} className="border-l border-hairline pl-6">
                <span className="kicker text-copper">0{i + 1}</span>
                <h3 className="mt-3 font-display text-[20px] font-bold tracking-tight">
                  {note.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{note.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services available */}
      <section className="bg-offwhite py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="kicker mb-4 text-sage">What we do in {location.name}</p>
              <h2 className="font-display text-[30px] font-extrabold tracking-tight sm:text-[36px]">
                Services Available
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink hover:text-copper"
            >
              All Services
              <ArrowRight className="h-4 w-4 text-copper transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-[2px] border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug} className="bg-offwhite">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-white"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="kicker text-copper">{service.number}</span>
                    <span className="text-[15px] font-semibold text-ink transition-colors group-hover:text-copper">
                      {service.title}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-copper" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-tint py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div className="max-w-xl">
              <p className="kicker mb-4 text-sage">Common Questions</p>
              <h2 className="font-display text-[30px] font-extrabold tracking-tight sm:text-[36px]">
                {location.name} Questions
              </h2>
            </div>
            <FaqList faqs={[...location.faqs, ...sharedFaqs]} />
          </div>
        </Container>
      </section>

      {/* Other areas */}
      {otherAreas.length > 0 && (
        <section className="bg-offwhite py-16 lg:py-20">
          <Container>
            <div className="flex flex-wrap gap-3">
              {otherAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="rounded-[2px] border border-hairline px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted transition-colors hover:border-copper hover:text-copper"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaSection
        title={`Planning Work at Your ${location.name} Property?`}
        lead="Request a free quote or send a WhatsApp. Local knowledge, clear quotes, proper workmanship."
      />
    </>
  );
}
