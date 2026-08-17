import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { StageScrubber } from "@/components/progress/StageScrubber";
import { buildStages } from "@/data/buildStages";

/**
 * "Watch it go up." — replaces the old stock-photo BeforeAfter slider.
 * Five real photographs of one building, months apart, presented as a
 * continuous scrub instead of a two-image toggle (master brief s.14;
 * PROMPT-claude-code.md s.4.1).
 */
export function BuildProgress() {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          <p className="kicker mb-4 text-copper">05 · On site</p>
          <h2 className="font-display text-[34px] font-extrabold tracking-tight text-ondark sm:text-[44px]">
            Watch It Go Up.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ondark-muted">
            Five photographs of one building, taken in order over several
            months — from the steel columns going in to the suspended slab
            being poured. Drag through them, or step stage by stage.
          </p>
        </div>

        <Reveal delay={0.1}>
          <StageScrubber stages={buildStages} onDark />
        </Reveal>
      </Container>
    </section>
  );
}
