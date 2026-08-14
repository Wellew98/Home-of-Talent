import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaSection } from "@/components/home/CtaSection";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Homeowner Guides & Tips",
  description:
    "Practical homeowner guides for Johannesburg: renovation costs, maintenance checklists, painting, kitchens, bathrooms and choosing a handyman.",
};

export default function GuidesPage() {
  return (
    <>
      <section className="bg-charcoal py-16 lg:py-24">
        <Container>
          <div className="text-ondark-muted">
            <Breadcrumbs items={[{ label: "Guides" }]} />
          </div>
          <div className="mt-10 max-w-3xl">
            <p className="kicker mb-5 text-copper">Guides · Home of Talent</p>
            <h1 className="font-display text-[38px] font-extrabold leading-[1.03] tracking-tight text-ondark sm:text-[52px]">
              Homeowner Guides
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ondark-muted">
              Practical, no-fluff guides for Johannesburg homeowners — costs,
              maintenance, renovations and how to hire well.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20 lg:py-28">
        <Container>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <article key={guide.slug} className="group">
                <Link href={`/guides/${guide.slug}`} className="block">
                  <p className="kicker text-sage">{guide.category}</p>
                  <h2 className="mt-3 font-display text-[21px] font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-copper">
                    {guide.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {guide.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink">
                    <span className="transition-colors group-hover:text-copper">Read Guide</span>
                    <ArrowRight className="h-4 w-4 text-copper transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Want Help With Something You Read About?"
        lead="Send a WhatsApp or request a quote — we'll talk you through your specific project."
      />
    </>
  );
}
