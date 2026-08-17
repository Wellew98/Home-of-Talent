import hero from "@/assets/images/hero.jpg";
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
import tradesperson from "@/assets/images/tradesperson.jpg";
import projectKitchen from "@/assets/images/project-kitchen.jpg";
import projectPainting from "@/assets/images/project-painting.jpg";
import projectOutdoor from "@/assets/images/project-outdoor.jpg";
import projectBathroom from "@/assets/images/project-bathroom.jpg";
import before from "@/assets/images/before.jpg";
import after from "@/assets/images/after.jpg";
import serviceRoofing from "@/assets/images/service-roofing.jpg";
import roofTrusses from "@/assets/images/roof-trusses.jpg";
import roofSheeting from "@/assets/images/roof-sheeting.jpg";

/**
 * Build-time optimized images (master brief s.29: WebP/AVIF via next/image).
 * Static imports = sharp runs at build, not per-request — no runtime
 * optimizer failures, images ship as static assets from the CDN.
 */
export const images = {
  hero,
  featured,
  tradesperson,
  before,
  after,
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
  },
} as const;

export type SiteImage = (typeof images.service)[keyof typeof images.service];
