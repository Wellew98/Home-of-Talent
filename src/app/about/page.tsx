import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/home/CtaSection";
import { locations } from "@/data/locations";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "About Home of Talent",
  description:
    "Home of Talent is a Johannesburg home improvement company — professional repairs, renovations and maintenance, done properly.",
};

const approach = [
  {
    title: "Clear quotes",
    text: "Every project starts with an itemised quote: scope, cost and timeline in writing, before any work begins.",
  },
  {
    title: "Honest communication",
    text: "You know what's happening on your project and who to talk to. If something changes, you hear it from us first.",
  },
  {
    title: "Proper workmanship",
    text: "Correct preparation, quality materials and finishes done to a standard we'd accept in our own homes.",
  },
  {
    title: "A clean site",
    text: "Your home is respected while we work in it — protected surfaces, tidy work areas, and a clean site at the end of every day.",
  },
];

export default function AboutPage() {
  const areaLinks = locations.filter((l) => l.slug !== "johannesburg").slice(0, 9);

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-16 lg:py-24">
        <Container>
          <div className="text-ondark-muted">
            <Breadcrumbs items={[{ label: "About" }]} />
          </div>
          <div className="mt-10 max-w-3xl">
            <p className="kicker mb-5 text-copper">About · Home of Talent</p>
            <h1 className="font-display text-[38px] font-extrabold leading-[1.03] tracking-tight text-ondark sm:text-[54px]">
              Good Work Starts With Good People.
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ondark-muted">
              Home of Talent is a Johannesburg home improvement company built
              around a simple idea: homeowners deserve work done properly, by
              people who communicate clearly and care about the result.
            </p>
            <div className="mt-9">
              <Button href="/quote" size="lg">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Who we are */}
      <section className="bg-offwhite py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <p className="kicker mb-4 text-sage">Who we are</p>
              <h2 className="font-display text-[30px] font-extrabold tracking-tight sm:text-[36px]">
                A team built around doing it right
              </h2>
            </div>
            <div className="max-w-2xl space-y-5">
              <p className="text-[17px] leading-relaxed text-muted">
                Home of Talent brings together skilled tradespeople across the
                disciplines Johannesburg homes actually need — building,
                painting, tiling, waterproofing, carpentry, repairs and
                maintenance. One team, one standard, one point of contact for
                the whole house.
              </p>
              <p className="text-[17px] leading-relaxed text-muted">
                We work with homeowners, landlords, letting agents and property
                managers across greater Johannesburg — from single repairs to
                full renovations, from older established suburbs to new estate
                homes.
              </p>
              <p className="text-[15px] text-muted">
                Team photographs and the full company story are being added to
                this page.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="bg-tint py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="kicker mb-4 text-sage">What we do</p>
              <h2 className="font-display text-[30px] font-extrabold tracking-tight sm:text-[36px]">
                Nine services, one standard
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

      {/* Our approach */}
      <section className="bg-offwhite py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="kicker mb-4 text-sage">Our approach</p>
            <h2 className="font-display text-[30px] font-extrabold tracking-tight sm:text-[36px]">
              How we work
            </h2>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {approach.map((item, i) => (
              <div key={item.title} className="border-l border-hairline pl-6">
                <span className="kicker text-copper">0{i + 1}</span>
                <h3 className="mt-3 font-display text-[20px] font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality & workmanship */}
      <section className="bg-charcoal py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <p className="kicker mb-4 text-copper">Quality & workmanship</p>
              <h2 className="font-display text-[30px] font-extrabold tracking-tight text-ondark sm:text-[36px]">
                The standard we hold ourselves to
              </h2>
            </div>
            <ul className="space-y-4">
              {[
                "Correct preparation before any finish — the part of the job you can't see is the part that makes it last",
                "Quality materials specified for Johannesburg conditions: UV, hail, hard water and seasonal movement",
                "Workmanship checked against the quote at the end of the job — you walk the work with us before we leave",
                "No shortcuts on waterproofing, structure or safety, ever",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-ondark-muted">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-[2px] border border-copper/50">
                    <Check className="h-3.5 w-3.5 text-copper" strokeWidth={2.5} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Service areas */}
      <section className="bg-tint py-16 lg:py-20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="kicker mb-4 text-sage">Service areas</p>
              <h2 className="font-display text-[30px] font-extrabold tracking-tight sm:text-[36px]">
                Where we work
              </h2>
            </div>
            <Link
              href="/areas/johannesburg"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink hover:text-copper"
            >
              All Areas
              <ArrowRight className="h-4 w-4 text-copper transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {areaLinks.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="rounded-[2px] border border-hairline bg-offwhite px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted transition-colors hover:border-copper hover:text-copper"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
