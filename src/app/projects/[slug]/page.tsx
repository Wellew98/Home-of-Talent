import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/home/CtaSection";
import { projects, type Project } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.category}`,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      {/* Hero image */}
      <section className="bg-charcoal py-10 lg:py-14">
        <Container>
          <div className="text-ondark-muted">
            <Breadcrumbs
              items={[{ label: "Projects", href: "/projects" }, { label: project.name }]}
            />
          </div>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <p className="kicker mb-4 text-copper">{project.category}</p>
              <h1 className="font-display text-[34px] font-extrabold leading-[1.05] tracking-tight text-ondark sm:text-[46px]">
                {project.name}
              </h1>
              <p className="mt-3 flex items-center gap-1.5 text-[15px] text-ondark-muted">
                <MapPin className="h-4 w-4 text-copper" aria-hidden />
                {project.location}
              </p>
              {project.placeholder && (
                <p className="mt-6 inline-block rounded-[2px] border border-ondark/20 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ondark-muted">
                  Example project — placeholder. Real projects are being added.
                </p>
              )}
              <div className="mt-8">
                <Button href="/quote" size="lg">
                  Start a Similar Project
                </Button>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-ondark/15">
              <Image
                src={project.image}
                alt={`${project.name} — ${project.category}`}
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Description */}
      <section className="bg-offwhite py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="kicker mb-4 text-sage">About this project</p>
            <h2 className="font-display text-[28px] font-extrabold tracking-tight">
              The Brief
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-[17px] leading-relaxed text-muted">
              {project.shortDescription}
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              This is an example project entry used to shape the portfolio
              layout. When Home of Talent supplies real project details —
              scope, timeline, materials and photos — each project page will
              tell that full story here.
            </p>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="bg-tint py-16 lg:py-24">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-[28px] font-extrabold tracking-tight">
              More Projects
            </h2>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink hover:text-copper"
            >
              All Projects
              <ArrowRight className="h-4 w-4 text-copper transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {related.map((p) => (
              <ProjectCardMini key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}

function ProjectCardMini({ project }: { project: Project }) {
  return (
    <article className="group">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-hairline bg-tint">
          <Image
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-4 flex items-center justify-between gap-4">
          <h3 className="font-display text-[19px] font-bold tracking-tight text-ink transition-colors group-hover:text-copper">
            {project.name}
          </h3>
          <ArrowLeft className="h-4 w-4 text-copper opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <p className="text-[14px] text-muted">{project.category}</p>
      </Link>
    </article>
  );
}
