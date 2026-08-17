import serviceInterior from "@/assets/images/service-interior.jpg";
import serviceKitchen from "@/assets/images/service-kitchen.jpg";
import servicePainting from "@/assets/images/service-painting.jpg";
import serviceExterior from "@/assets/images/service-exterior.jpg";
import serviceGarage from "@/assets/images/service-garage.jpg";
import serviceOutdoor from "@/assets/images/service-outdoor.jpg";
import serviceRepairs from "@/assets/images/service-repairs.jpg";
import serviceSeasonal from "@/assets/images/service-seasonal.jpg";
import serviceSmarthome from "@/assets/images/service-smarthome.jpg";
import featured from "@/assets/images/featured.jpg";
import projectKitchen from "@/assets/images/project-kitchen.jpg";
import projectPainting from "@/assets/images/project-painting.jpg";
import projectOutdoor from "@/assets/images/project-outdoor.jpg";
import projectBathroom from "@/assets/images/project-bathroom.jpg";
import serviceRoofing from "@/assets/images/service-roofing.jpg";
import roofTrusses from "@/assets/images/roof-trusses.jpg";
import roofSheeting from "@/assets/images/roof-sheeting.jpg";

// Real Home of Talent photography (client-supplied, 14 Aug 2026; graded for
// a consistent look via prototype/home-of-talent-treated-photos.zip/grade.py).
// Filenames stay stable — recleaned versions get dropped back in under the
// same name (see PROMPT-claude-code.md s.5).
import roofer from "@/assets/images/roofer-setting-trusses.jpg";
import buildStage01 from "@/assets/images/build-stage-01-setting-out.jpg";
import buildStage02 from "@/assets/images/build-stage-02-walls-up.jpg";
import buildStage03 from "@/assets/images/build-stage-03-closing-the-circle.jpg";
import buildStage04 from "@/assets/images/build-stage-04-deck-reinforced.jpg";
import buildStage05 from "@/assets/images/build-stage-05-slab-poured.jpg";
import roofExplainerTrusses from "@/assets/images/roof-explainer-trusses-up.jpg";
import roofExplainerBattens from "@/assets/images/roof-explainer-battens-underlay.jpg";
import roofExplainerCovering from "@/assets/images/roof-explainer-covering-on.jpg";
import roofComparePurlins from "@/assets/images/roof-compare-purlins.jpg";
import roofCompareTiled from "@/assets/images/roof-compare-tiled.jpg";
import roofSheetmetalTrusses from "@/assets/images/roof-sheetmetal-trusses.jpg";
import roofReroofTiled from "@/assets/images/roof-reroof-tiled.jpg";

/**
 * Build-time optimized images (master brief s.29: WebP/AVIF via next/image).
 * Static imports = sharp runs at build, not per-request — no runtime
 * optimizer failures, images ship as static assets from the CDN.
 */
export const images = {
  featured,
  roofer,
  service: {
    interior: serviceInterior,
    kitchen: serviceKitchen,
    painting: servicePainting,
    exterior: serviceExterior,
    garage: serviceGarage,
    outdoor: serviceOutdoor,
    repairs: serviceRepairs,
    seasonal: serviceSeasonal,
    smarthome: serviceSmarthome,
    roofing: serviceRoofing,
  },
  project: {
    kitchen: projectKitchen,
    painting: projectPainting,
    outdoor: projectOutdoor,
    bathroom: projectBathroom,
  },
  roof: {
    trusses: roofTrusses,
    sheeting: roofSheeting,
    explainerTrusses: roofExplainerTrusses,
    explainerBattens: roofExplainerBattens,
    explainerCovering: roofExplainerCovering,
    comparePurlins: roofComparePurlins,
    compareTiled: roofCompareTiled,
    sheetmetalTrusses: roofSheetmetalTrusses,
    reroofTiled: roofReroofTiled,
  },
  buildStages: [buildStage01, buildStage02, buildStage03, buildStage04, buildStage05],
} as const;

export type SiteImage = (typeof images.service)[keyof typeof images.service];
