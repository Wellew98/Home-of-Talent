import type { StaticImageData } from "next/image";
import { images } from "@/lib/images";

export type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  shortDescription: string;
  image: StaticImageData;
  placeholder: boolean;
};

/**
 * PLACEHOLDER PROJECTS (master brief s.13).
 * Real Home of Talent projects will replace these when supplied.
 * placeholder:true drives the "example" disclosure on the site.
 */
export const projects: Project[] = [
  {
    slug: "modern-kitchen-refresh",
    name: "Modern Kitchen Refresh",
    category: "Kitchen Renovation",
    location: "Johannesburg",
    shortDescription:
      "Full kitchen renovation with new cabinetry, countertops and flooring. Example project — placeholder.",
    image: images.project.kitchen,
    placeholder: true,
  },
  {
    slug: "interior-refresh",
    name: "Interior Refresh",
    category: "Painting & Finishes",
    location: "Sandton",
    shortDescription:
      "Complete interior repaint with wall repairs and new trims. Example project — placeholder.",
    image: images.project.painting,
    placeholder: true,
  },
  {
    slug: "outdoor-entertainment-area",
    name: "Outdoor Entertainment Area",
    category: "Outdoor Living",
    location: "Johannesburg",
    shortDescription:
      "Covered patio and braai area built for year-round entertaining. Example project — placeholder.",
    image: images.project.outdoor,
    placeholder: true,
  },
  {
    slug: "bathroom-upgrade",
    name: "Bathroom Upgrade",
    category: "Bathroom Renovation",
    location: "Randburg",
    shortDescription:
      "Bathroom renovation with new tiling, shower and fixtures. Example project — placeholder.",
    image: images.project.bathroom,
    placeholder: true,
  },
];
