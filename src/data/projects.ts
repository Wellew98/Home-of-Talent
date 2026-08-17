import type { StaticImageData } from "next/image";
import type { Stage } from "@/components/progress/StageScrubber";
import { images } from "@/lib/images";
import { buildStages } from "@/data/buildStages";

export type Project = {
  slug: string;
  name: string;
  category: string;
  /** "Location to confirm" until the client verifies where a job was shot */
  location: string;
  shortDescription: string;
  status: "in-progress" | "complete";
  /** cover image — grid fallback, OG image, related-project thumbnails */
  image: StaticImageData;
  /** present when the project has a genuine two-frame pair for CompareProjectCard */
  toggle?: {
    a: StaticImageData;
    altA: string;
    b: StaticImageData;
    altB: string;
    flagLabel?: string;
  };
  /** present when the project has a multi-stage build sequence for StageScrubber */
  stages?: Stage[];
};

/**
 * Real Home of Talent projects (master brief s.13; PROMPT-claude-code.md s.4.3).
 * Every location is unconfirmed — none of these were shot in Johannesburg.
 * Nothing is captioned "completed" unless a photograph shows it finished.
 */
export const projects: Project[] = [
  {
    slug: "double-storey-build",
    name: "Double-Storey Build",
    category: "Double-Storey Build",
    location: "Location to confirm",
    shortDescription:
      "A round double-storey structure, documented in five stages from the steel columns through to the poured suspended slab. Still on site — not yet identified as a home.",
    status: "in-progress",
    image: images.buildStages[4],
    stages: buildStages,
  },
  {
    slug: "tiled-hip-roof",
    name: "Tiled Hip Roof",
    category: "Roofing",
    location: "Location to confirm",
    shortDescription: "Purlins going on, then tiles bedded and pointed across a tiled hip roof.",
    status: "complete",
    image: images.roof.compareTiled,
    toggle: {
      a: images.roof.comparePurlins,
      altA: "Purlins fixed across a tiled hip roof, ready for tiling",
      b: images.roof.compareTiled,
      altB: "The same hip roof with tiles bedded and pointed",
    },
  },
  {
    slug: "sheet-metal-roof",
    name: "Sheet-Metal Roof",
    category: "Roofing",
    location: "Location to confirm",
    shortDescription: "Truss erection through to closed IBR sheeting on a new sheet-metal roof.",
    status: "complete",
    image: images.roof.explainerCovering,
    toggle: {
      a: images.roof.sheetmetalTrusses,
      altA: "Roof trusses erected and braced, ready for sheeting",
      b: images.roof.explainerCovering,
      altB: "The same roof with sheeting closed up and flashing sealed",
    },
  },
  {
    slug: "re-roof-underlay",
    name: "Re-Roof & Underlay",
    category: "Roofing & Waterproofing",
    location: "Location to confirm",
    shortDescription: "Underlay and battens fixed, then tiles loaded and ready to lay on a re-roof.",
    status: "complete",
    image: images.roof.reroofTiled,
    toggle: {
      a: images.roof.explainerBattens,
      altA: "Underlay and battens fixed across a re-roof, ready for tiling",
      b: images.roof.reroofTiled,
      altB: "The same re-roof with tiles loaded on the battens ready to lay",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
