import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ToggleProjectCard } from "@/components/progress/ToggleProjectCard";
import { projects } from "@/data/projects";

/**
 * Project showcase — large editorial cards (master brief s.13).
 * Projects with a genuine two-frame pair use the toggle card; the
 * in-progress double-storey build uses the plain card with its
 * "On site now" badge.
 */
export function ProjectShowcase() {
  return (
    <section className="bg-offwhite py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            number="04"
            label="Projects"
            title="Recent Work"
            lead="A selection of recent Home of Talent projects. Locations are being confirmed and the full portfolio is still growing."
          />
          <Link
            href="/projects"
            className="group hidden items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:text-copper lg:inline-flex"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
              {project.toggle ? (
                <ToggleProjectCard
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
                <ProjectCard project={project} />
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
