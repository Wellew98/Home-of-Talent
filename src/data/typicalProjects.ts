import type { Service } from "./services";

/**
 * Typical projects per service (master brief s.15: "Typical projects" section).
 * Honest capability descriptions — no invented client names or claims.
 */
export const typicalProjects: Record<string, string[]> = {
  "interior-remodeling": [
    "Kitchen makeover with new cabinetry and countertops",
    "Open-plan conversion: removing a wall between kitchen and living area",
    "New flooring throughout a lounge and passage",
    "Custom built-in cupboards for bedrooms",
    "Ceiling replacement after water damage",
  ],
  "kitchen-bathroom": [
    "Full kitchen renovation with new layout",
    "Bathroom refresh: new tiling, basin, and fittings",
    "Tub-to-shower conversion",
    "Guest toilet upgrade",
    "En-suite renovation with heated towel rail",
  ],
  "painting-finishes": [
    "Full interior repaint before moving in",
    "Exterior repaint of boundary walls and facades",
    "Kitchen cabinet respray and refinishing",
    "Feature wall in a lounge or bedroom",
    "Ceiling and trim painting throughout",
  ],
  "exterior-maintenance": [
    "Roof inspection and minor repairs before storm season",
    "Gutter clearing and re-sealing",
    "Cracked boundary wall repairs",
    "Waterproofing around windows and doors",
    "Gate motor cover and entrance maintenance",
  ],
  "garage-storage": [
    "Custom shelving along one garage wall",
    "Overhead storage rack for seasonal items",
    "Tool wall with organised pegboard and hooks",
    "Garage floor clean-up and sealing",
    "Workshop corner setup",
  ],
  "outdoor-living": [
    "Covered patio for year-round entertaining",
    "Pergola over a seating area",
    "Outdoor braai area build",
    "Deck repair and refinishing",
    "Garden path and paving repairs",
  ],
  "repairs-maintenance": [
    "Pre-sale punch list before listing a property",
    "Doors that stick and windows that won't close",
    "Leaking taps and running toilets",
    "Shelving and curtain rail installation",
    "Loose tiles and skirting repairs",
  ],
  "seasonal-maintenance": [
    "Pre-storm roof and gutter inspection",
    "Winter check: windows, doors and insulation gaps",
    "Post-storm damage assessment and repairs",
    "Seasonal exterior wash-down and checks",
    "Holiday preparation checklist for the home",
  ],
  "smart-home": [
    "Smart lock and video doorbell installation",
    "Outdoor security camera setup",
    "Leak detection under sinks and at the geyser",
    "Smart thermostat installation",
    "Wi-Fi coverage improvements for the whole home",
  ],
};

export const getTypicalProjects = (service: Service): string[] =>
  typicalProjects[service.slug] ?? [];
