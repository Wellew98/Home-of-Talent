import type { StaticImageData } from "next/image";
import { images } from "@/lib/images";

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  shortDescription: string;
  description: string;
  image: StaticImageData;
  /** true once this service is illustrated with real Home of Talent photos */
  realPhotos?: boolean;
  features: string[];
  faqs: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
};

/**
 * MASTER SERVICE DATA (master brief s.10, s.15, s.32).
 * One source of truth for cards, service pages, and SEO metadata.
 */
export const services: Service[] = [
  {
    slug: "interior-remodeling",
    number: "01",
    title: "Interior Remodeling",
    shortTitle: "Interior Remodeling",
    shortDescription:
      "Kitchens, full renovations, flooring, drywall, and finish carpentry across Johannesburg homes.",
    description:
      "From a single room refresh to a full home renovation, we handle interior remodeling projects of every scale across Johannesburg.",
    image: images.service.interior,
    features: [
      "Kitchen renovations",
      "Open-plan conversions",
      "Flooring: laminate, vinyl, tile",
      "Drywall and ceiling work",
      "Built-in cupboards and carpentry",
      "Finish carpentry and trim",
    ],
    faqs: [
      {
        q: "Do you handle full home renovations?",
        a: "Yes. We manage interior remodeling projects from planning and demolition through to finishes and handover.",
      },
    ],
    seoTitle: "Interior Remodeling & Home Improvements Johannesburg",
    seoDescription:
      "Professional interior remodeling and home renovation services across Johannesburg. Kitchens, flooring, drywall and finish carpentry.",
  },
  {
    slug: "kitchen-bathroom",
    number: "02",
    title: "Kitchen & Bathroom",
    shortTitle: "Kitchen & Bathroom",
    shortDescription:
      "Custom kitchens, tile showers, vanity upgrades, and full bathroom renovations.",
    description:
      "Kitchens and bathrooms carry the most daily use of any room in a home. We renovate both to a standard that lasts.",
    image: images.service.kitchen,
    features: [
      "Custom kitchen installations",
      "Bathroom renovations",
      "Tub-to-shower conversions",
      "Custom tile work",
      "Vanity and fixture upgrades",
      "Waterproofing done properly",
    ],
    faqs: [
      {
        q: "Do you renovate bathrooms and kitchens?",
        a: "Yes — kitchens and bathrooms are two of the services we handle most, from single-unit refreshes to full renovations.",
      },
    ],
    seoTitle: "Bathroom & Kitchen Renovations Johannesburg",
    seoDescription:
      "Kitchen and bathroom renovations in Johannesburg. Custom kitchens, tile showers, vanities and waterproofing done properly.",
  },
  {
    slug: "painting-finishes",
    number: "03",
    title: "Painting & Finishes",
    shortTitle: "Painting & Finishes",
    shortDescription:
      "Interior painting and cabinet refinishing with clean lines and proper preparation.",
    description:
      "Interior and exterior painting done properly: surface preparation, quality coatings, and clean edges that hold up to Highveld weather.",
    image: images.service.painting,
    features: [
      "Full interior painting",
      "Exterior painting",
      "Cabinet refinishing",
      "Accent walls",
      "Ceilings and trims",
      "Surface preparation and repairs",
    ],
    faqs: [
      {
        q: "Do you provide painting services?",
        a: "Yes. Painting is a core service — interior, exterior, ceilings, trims and cabinet refinishing.",
      },
    ],
    seoTitle: "Painting & Finishing Services Johannesburg",
    seoDescription:
      "Interior and exterior painting services across Johannesburg. Clean lines, proper preparation and finishes that last.",
  },
  {
    slug: "exterior-maintenance",
    number: "04",
    title: "Exterior Maintenance",
    shortTitle: "Exterior Maintenance",
    shortDescription:
      "Facade repairs, waterproofing, gutters, and weatherproofing for Johannesburg homes.",
    description:
      "Johannesburg summers bring hard rain and hail; winters bring cold snaps. Exterior maintenance keeps the weather outside where it belongs.",
    image: images.service.exterior,
    features: [
      "Facade and wall repairs",
      "Roof and gutter maintenance",
      "Waterproofing and sealing",
      "Window and door repairs",
      "Fence and gate repairs",
      "Boundary wall maintenance",
    ],
    faqs: [
      {
        q: "Do you handle exterior and waterproofing work?",
        a: "Yes — facade repairs, waterproofing, gutters and general exterior maintenance are all part of the service.",
      },
    ],
    seoTitle: "Exterior Maintenance & Waterproofing Johannesburg",
    seoDescription:
      "Exterior home maintenance in Johannesburg: facades, waterproofing, gutters and weatherproofing before the storm season.",
  },
  {
    slug: "garage-storage",
    number: "05",
    title: "Garage & Storage",
    shortTitle: "Garage & Storage",
    shortDescription:
      "Shelving, wall systems, and storage built to fit your garage and your gear.",
    description:
      "Most Johannesburg garages are working spaces. We build storage that makes the space usable again.",
    image: images.service.garage,
    features: [
      "Custom shelving",
      "Overhead storage racks",
      "Wall panel systems",
      "Tool organisation",
      "Garage door repairs",
      "Workshop setups",
    ],
    faqs: [
      {
        q: "Can you build custom garage storage?",
        a: "Yes. We design and install shelving, racks and wall systems sized to your garage and what you need to store.",
      },
    ],
    seoTitle: "Garage Storage & Organisation Johannesburg",
    seoDescription:
      "Custom garage shelving, overhead racks and wall storage systems designed and installed across Johannesburg.",
  },
  {
    slug: "outdoor-living",
    number: "06",
    title: "Garden & Outdoor Living",
    shortTitle: "Outdoor Living",
    shortDescription:
      "Patios, pergolas, and custom outdoor builds made for Johannesburg summers.",
    description:
      "Outdoor space is where Joburg homes come alive. We build patios, pergolas and outdoor features that stand up to sun and storm.",
    image: images.service.outdoor,
    features: [
      "Patio and entertainment areas",
      "Pergolas and shade structures",
      "Outdoor braai and kitchen areas",
      "Deck construction and repair",
      "Garden structures",
      "Pool-side maintenance and repair",
    ],
    faqs: [
      {
        q: "Do you build outdoor entertainment areas?",
        a: "Yes — patios, pergolas, braai areas and outdoor structures are a big part of what we build.",
      },
    ],
    seoTitle: "Outdoor Living & Patio Builds Johannesburg",
    seoDescription:
      "Patios, pergolas, braai areas and outdoor living builds for Johannesburg homes, engineered for sun and storm.",
  },
  {
    slug: "repairs-maintenance",
    number: "07",
    title: "Repairs & Punch Lists",
    shortTitle: "Repairs & Punch Lists",
    shortDescription:
      "Small repairs, pre-sale punch lists, and multi-item to-do lists — one visit.",
    description:
      "A leaking tap, a sticking door, a long list of small fixes: we work through repairs methodically and leave the list done.",
    image: images.service.repairs,
    features: [
      "General home repairs",
      "Pre-sale and pre-rental punch lists",
      "Multi-item to-do lists",
      "Door and window repairs",
      "Fixture and fitting replacements",
      "Minor plumbing and electrical fixes",
    ],
    faqs: [
      {
        q: "Do you work on small repair jobs?",
        a: "Yes. Small repairs and multi-item punch lists are a core part of the service — no job is too small.",
      },
    ],
    seoTitle: "Handyman & Home Repairs Johannesburg",
    seoDescription:
      "Home repairs, punch lists and multi-item to-do lists handled properly across Johannesburg — one visit, list done.",
  },
  {
    slug: "seasonal-maintenance",
    number: "08",
    title: "Seasonal Maintenance",
    shortTitle: "Seasonal Maintenance",
    shortDescription:
      "Storm prep, gutter clearing, and seasonal check-ups for Johannesburg homes.",
    description:
      "Storm season, winter cold, and the in-between months all ask different things of a house. Seasonal maintenance keeps your home ahead of the weather.",
    image: images.service.seasonal,
    features: [
      "Pre-storm inspections",
      "Gutter clearing and repairs",
      "Roof and flashing checks",
      "Winter preparation",
      "Post-storm repairs",
      "Seasonal exterior checks",
    ],
    faqs: [
      {
        q: "What does seasonal maintenance include?",
        a: "Storm preparation, gutter clearing, roof checks, and exterior inspections timed to Johannesburg's seasons.",
      },
    ],
    seoTitle: "Seasonal Home Maintenance Johannesburg",
    seoDescription:
      "Seasonal maintenance for Johannesburg homes: storm preparation, gutter clearing and seasonal inspections.",
  },
  {
    slug: "smart-home",
    number: "09",
    title: "Smart Home & Water Monitoring",
    shortTitle: "Smart Home",
    shortDescription:
      "Smart installations and leak monitoring to protect your home while you're away.",
    description:
      "From smart locks to leak detection, we install technology that protects your home and makes everyday life easier.",
    image: images.service.smarthome,
    features: [
      "Smart lock and doorbell installation",
      "Security camera installation",
      "Leak and water monitoring",
      "Smart thermostat installation",
      "Appliance automation",
      "Wi-Fi and network setup",
    ],
    faqs: [
      {
        q: "Do you install smart home devices?",
        a: "Yes — smart locks, doorbells, cameras, thermostats and leak monitoring, installed and set up for you.",
      },
    ],
    seoTitle: "Smart Home Installation Johannesburg",
    seoDescription:
      "Smart home installation in Johannesburg: locks, cameras, thermostats and leak monitoring, set up properly.",
  },
  {
    slug: "roofing",
    number: "10",
    title: "Roofing & Waterproofing",
    shortTitle: "Roofing",
    shortDescription:
      "Trusses, sheeting, tiling, underlay and leak repairs \u2014 roofs built and repaired to take Highveld storms.",
    description:
      "A roof takes the worst of the Johannesburg weather. We handle roofing from the timber up \u2014 truss erection, battens and underlay, sheeting and tiling \u2014 as well as the repair work that keeps an existing roof watertight through summer storm season.",
    image: images.service.roofing,
    realPhotos: true,
    features: [
      "Timber truss erection",
      "Battens, underlay and sisalation",
      "IBR and corrugated sheeting",
      "Concrete and clay tile roofing",
      "Ridging, flashing and valley detailing",
      "Leak tracing and roof repairs",
      "Gutter and downpipe installation",
      "Roof waterproofing",
    ],
    faqs: [
      {
        q: "Do you repair existing roofs, or only build new ones?",
        a: "Both. We put up new roofs from the trusses through to the covering, and we take on repair work on existing roofs \u2014 leak tracing, replacing broken tiles or sheets, redoing flashing and ridging, and re-sealing problem areas.",
      },
      {
        q: "Can you work on both tile and sheet roofs?",
        a: "Yes. We work with concrete and clay tile as well as IBR and corrugated sheeting, including the underlay, battens and flashing details that go with each.",
      },
      {
        q: "When is the best time to have roof work done in Johannesburg?",
        a: "Ahead of the summer storm season, if you have the choice. Highveld storms find every weak point in a roof, so the work is far easier and less disruptive done in the dry months than in the middle of a downpour.",
      },
      {
        q: "How do I know whether my roof needs a repair or a re-roof?",
        a: "Usually it comes down to how widespread the problem is. Isolated leaks around a chimney, valley or flashing are repairs. Sagging, widespread cracked tiles or rusted-through sheeting point to a bigger job. Send us photos and we will tell you honestly which one you are looking at.",
      },
    ],
    seoTitle: "Roofing, Re-Roofing & Roof Repairs Johannesburg",
    seoDescription:
      "Roofing services across Johannesburg: timber trusses, IBR sheeting, tile roofing, underlay, flashing, gutters and leak repairs. Get a free quote from Home of Talent.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
