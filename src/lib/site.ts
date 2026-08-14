/**
 * SINGLE POINT OF CONTACT CONFIG (master brief s.19).
 * Every phone/WhatsApp link on the site reads from here.
 * Update these values when Wellington supplies real details.
 */

/**
 * Canonical origin, used for metadataBase, sitemap.xml, robots.txt and all
 * JSON-LD urls. Resolved in priority order so canonicals always point at a
 * domain that actually resolves:
 *
 *   1. NEXT_PUBLIC_SITE_URL — explicit override, set this to force a domain.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — injected by Vercel. Always the
 *      PRODUCTION domain (never the per-deploy preview URL), and switches to
 *      the custom domain by itself once one is attached to the project, so
 *      going live on homeoftalent.co.za needs no code change.
 *   3. localhost — local dev only.
 *
 * Every consumer of site.url is a server component, route handler or metadata
 * export, so non-NEXT_PUBLIC_ vars are readable here.
 */
const resolvedUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/+$/, "");

export const site = {
  name: "Home of Talent",
  legalName: "Home of Talent Construction Company",
  tagline: "Professional home improvement and handyman services in Johannesburg.",
  description:
    "Home of Talent provides professional home improvement, handyman, repair, renovation, painting and maintenance services across Johannesburg, Gauteng.",
  url: resolvedUrl, // see resolvedUrl above — env-driven, no longer hardcoded
  // Contact details (WhatsApp/phone confirmed by Wellington 2026-08-14)
  phoneDisplay: "083 745 0681", // display format
  phoneTel: "+27837450681",
  whatsapp: "27837450681", // digits only, no + — used for wa.me links
  whatsappMessage: "Hi Home of Talent, I'd like a quote for a home improvement project.",
  email: "hello@homeoftalent.co.za", // placeholder
  address: {
    street: "Johannesburg", // placeholder until real address supplied
    city: "Johannesburg",
    region: "Gauteng",
    country: "ZA",
  },
  hours: "Mon–Fri 7:00–17:00 · Sat 8:00–13:00", // placeholder
  social: {
    facebook: "#", // placeholder
    instagram: "#", // placeholder
  },
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message ?? site.whatsappMessage)}`;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Areas We Serve", href: "/areas/johannesburg" },
  { label: "Guides", href: "/guides" },
] as const;
