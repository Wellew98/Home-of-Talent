/**
 * Extra photo strip images per service page (example/placeholder photos).
 */
import type { StaticImageData } from "next/image";
import { images } from "@/lib/images";

export const servicePhotoExtras: Record<string, StaticImageData[]> = {
  "interior-remodeling": [images.project.kitchen, images.project.painting],
  "kitchen-bathroom": [images.project.kitchen, images.project.bathroom],
  "painting-finishes": [images.project.painting, images.service.interior],
  "exterior-maintenance": [images.service.exterior, images.service.seasonal],
  "garage-storage": [images.service.garage, images.service.repairs],
  "outdoor-living": [images.project.outdoor, images.service.outdoor],
  "repairs-maintenance": [images.service.repairs, images.tradesperson],
  "seasonal-maintenance": [images.service.seasonal, images.service.exterior],
  "smart-home": [images.service.smarthome, images.tradesperson],
};
