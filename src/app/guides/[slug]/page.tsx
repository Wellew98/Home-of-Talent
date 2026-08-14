import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaSection } from "@/components/home/CtaSection";
import { guides, getGuide } from "@/data/guides";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const others = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="bg-charcoal py-16 lg:py-20">
        <Container>
          <div className="text-ondark-muted">
            <Breadcrumbs
              items={[{ label: "Guides", href: "/guides" }, { label: guide.title }]}
            />
          </div>
          <div className="mt-10 max-w-3xl">
            <p className="kicker mb-5 text-copper">{guide.category}</p>
            <h1 className="font-display text-[34px] font-extrabold leading-[1.08] tracking-tight text-ondark sm:text-[46px]">
              {guide.title}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-[14px] text-ondark-muted">
              <Calendar className="h-4 w-4 text-copper" aria-hidden />
              {formatDate(guide.date)}
            </p>
          </div>
        </Container>
      </section>

      {/* Body */}
      <article className="bg-offwhite py-16 lg:py-24">
        <Container className="max-w-[820px]">
          <p className="text-[19px] leading-relaxed text-ink">{guide.excerpt}</p>
          {guide.sections.map((section) => (
            <div key={section.heading} className="mt-12">
              <h2 className="font-display text-[26px] font-extrabold tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((para) => (
                <p key={para.slice(0, 50)} className="mt-4 text-[16px] leading-relaxed text-muted">
                  {para}
                </p>
              ))}
              {section.list && (
                <ul className="mt-5 space-y-2.5 border-l border-copper/40 pl-6">
                  {section.list.map((item) => (
                    <li key={item} className="text-[16px] leading-relaxed text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-14 border-t border-hairline pt-8">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:text-copper"
            >
              <ArrowLeft className="h-4 w-4 text-copper" />
              All Guides
            </Link>
          </div>
        </Container>
      </article>

      {/* More guides */}
      <section className="bg-tint py-16 lg:py-20">
        <Container>
          <h2 className="font-display text-[26px] font-extrabold tracking-tight">
            More Guides
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {others.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group border-t border-hairline pt-5"
              >
                <p className="kicker text-sage">{g.category}</p>
                <p className="mt-2 font-display text-[17px] font-bold leading-snug text-ink transition-colors group-hover:text-copper">
                  {g.title}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink">
                  Read
                  <ArrowRight className="h-3.5 w-3.5 text-copper transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
