import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ToggleProjectCard } from "@/components/progress/ToggleProjectCard";
import { CtaSection } from "@/components/home/CtaSection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Recent Work",
  description:
    "Recent home improvement and renovation projects by Home of Talent across Johannesburg.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-charcoal py-16 lg:py-24">
        <Container>
          <div className="text-ondark-muted">
            <Breadcrumbs items={[{ label: "Projects" }]} />
          </div>
          <div className="mt-10 max-w-3xl">
            <p className="kicker mb-5 text-copper">Projects · Home of Talent</p>
            <h1 className="font-display text-[38px] font-extrabold leading-[1.03] tracking-tight text-ondark sm:text-[52px]">
              Recent Work
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ondark-muted">
              A growing portfolio of Home of Talent projects. Locations are
              being confirmed as the gallery grows.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2">
            {projects.map((project) =>
              project.toggle ? (
                <ToggleProjectCard
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  a={project.toggle.a}
                  altA={project.toggle.altA}
                  b={project.toggle.b}
                  altB={project.toggle.altB}
                  flagLabel={project.toggle.flagLabel}
                  category={project.category}
                  title={project.name}
                  meta={`${project.shortDescription} · ${project.location}`}
                />
              ) : (
                <ProjectCard key={project.slug} project={project} />
              ),
            )}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
