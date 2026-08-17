import type { Stage } from "@/components/progress/StageScrubber";
import { images } from "@/lib/images";

/**
 * The double-storey build, documented in five stages over several months
 * (master brief context: PROMPT-claude-code.md s.4.1). Shared between the
 * homepage BuildProgress section and that project's own detail page so the
 * two never drift apart.
 */
export const buildStages: Stage[] = [
  {
    image: images.buildStages[0],
    title: "Setting out",
    caption: "Steel columns set, platform levelled.",
    alt: "Steel columns set out on a levelled platform for a round double-storey build",
  },
  {
    image: images.buildStages[1],
    title: "Walls up",
    caption: "Block walls raised, timber shuttering braced.",
    alt: "Block walls raised with timber shuttering braced around a curved structure",
  },
  {
    image: images.buildStages[2],
    title: "Closing the circle",
    caption: "Walls closed and the steel roof spider set out.",
    alt: "Circular walls closed up with a steel roof spider structure set out on top",
  },
  {
    image: images.buildStages[3],
    title: "Deck reinforced",
    caption: "Reinforcing tied across the full deck before the pour.",
    alt: "Steel reinforcing tied across the full deck ahead of the concrete pour",
  },
  {
    image: images.buildStages[4],
    title: "Slab poured",
    caption: "Suspended slab cast and floated.",
    alt: "Freshly poured and floated suspended concrete slab on a round double-storey build",
  },
];
