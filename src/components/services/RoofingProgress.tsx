import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StageScrubber, type Stage } from "@/components/progress/StageScrubber";
import { StageCompare } from "@/components/progress/StageCompare";
import { ToggleProjectCard } from "@/components/progress/ToggleProjectCard";
import { RoofStrip } from "@/components/progress/RoofStrip";
import { images } from "@/lib/images";
import { getProject } from "@/data/projects";

const roofStages: Stage[] = [
  {
    image: images.roof.explainerTrusses,
    title: "Trusses up",
    caption: "Trusses set out, braced and levelled across the span.",
    alt: "Timber roof trusses set out, braced and levelled across a roof span",
  },
  {
    image: images.roof.explainerBattens,
    title: "Battens and underlay",
    caption: "Underlay and battens fixed — the layer that keeps water out.",
    alt: "Underlay and battens fixed across a roof, the layer that keeps water out",
  },
  {
    image: images.roof.explainerCovering,
    title: "Covering on",
    caption: "Sheeting closed up, ridging and flashing sealed.",
    alt: "Roof sheeting closed up with ridging and flashing sealed",
  },
];

const gridSlugs = ["tiled-hip-roof", "sheet-metal-roof", "re-roof-underlay"] as const;
const gridProjects = gridSlugs.map((slug) => {
  const project = getProject(slug);
  if (!project?.toggle) {
    throw new Error(`RoofingProgress: missing toggle data for "${slug}"`);
  }
  return { ...project, toggle: project.toggle };
});

/**
 * The roofing service page's progress-component composition
 * (PROMPT-claude-code.md s.4.2). Rendered instead of the plain
 * <ServicePhotos> strip when a service opts in via `richLayout`.
 */
export function RoofingProgress() {
  return (
    <>
      <section className="bg-charcoal py-24 lg:py-32">
        <Container>
          <SectionHeading
            label="How a roof goes on"
            title="How A Roof Goes On."
            lead="These three stages aren't one project — they're frames from three different Home of Talent jobs, chosen to show what actually happens under a roof before it's watertight."
            dark
          />
          <Reveal delay={0.1}>
            <StageScrubber stages={roofStages} onDark badgeLabel="Step" />
          </Reveal>
        </Container>
      </section>

      <RoofStrip image={images.roof.sheeting} alt="Finished sheet-metal roof, aerial view" />

      <section className="bg-offwhite py-24 lg:py-32">
        <Container>
          <SectionHeading
            label="See the difference"
            title="See The Difference."
            lead="The same hip roof — purlins going on, then tiles bedded and pointed. The two frames don't share a viewpoint, so it's labelled by stage rather than as a matched before and after."
          />
          <Reveal delay={0.1}>
            <StageCompare
              before={{
                image: images.roof.comparePurlins,
                label: "Stage 01 · Purlins",
                alt: "Purlins fixed across a tiled hip roof, ready for tiling",
              }}
              after={{
                image: images.roof.compareTiled,
                label: "Stage 02 · Tiled",
                alt: "The same hip roof with tiles bedded and pointed",
              }}
              aspect="3/2"
              className="mx-auto mt-10 max-h-[640px] max-w-3xl"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-tint py-24 lg:py-32">
        <Container>
          <SectionHeading
            label="Work in this category"
            title="Work In This Category."
            lead="Every card carries two frames from the job — hover on desktop, tap on mobile."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gridProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
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
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
