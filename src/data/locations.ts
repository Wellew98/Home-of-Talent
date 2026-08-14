export type Location = {
  slug: string;
  name: string;
  region: string;
  title: string;
  heroLead: string;
  intro: string[];
  areaNotes: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
};

/**
 * MASTER LOCATION DATA (master brief s.16).
 * Genuinely useful local content per area — no thin doorway pages.
 * Facts are general local knowledge (property types, geography, common
 * maintenance realities). No invented business claims.
 */
export const locations: Location[] = [
  {
    slug: "johannesburg",
    name: "Johannesburg",
    region: "City-wide",
    title: "Home Improvement & Handyman Services in Johannesburg",
    heroLead:
      "Professional home improvements, repairs and maintenance across Johannesburg — from the CBD and older suburbs to the northern estates.",
    intro: [
      "Johannesburg homes are as varied as the city itself: Victorian and Edwardian houses in the older suburbs, mid-century face-brick homes, 1970s townhouse complexes, and modern estates on the city's edges. Each era of building brings its own maintenance realities, from original pressed ceilings and wooden floors in older homes to plaster and concrete construction in newer ones.",
      "On top of the building stock, Joburg's climate sets the maintenance calendar. Summer brings hard Highveld thunderstorms and hail, which test roofs, gutters and waterproofing. Winters are dry and cold, which shows up in cracking plaster and draughty windows. A home here needs attention all year round, and it needs work done properly the first time.",
    ],
    areaNotes: [
      {
        title: "Storm season preparation",
        text: "Highveld storms arrive suddenly between October and March, often with hail. Roof checks, gutter clearing and waterproofing done before the season saves expensive interior repairs later.",
      },
      {
        title: "Older homes, original character",
        text: "Many Johannesburg homes have original details worth keeping — pressed ceilings, parquet floors, steel window frames. Repair and restoration work needs tradespeople who respect the existing fabric rather than ripping it out.",
      },
      {
        title: "Complexes and estates",
        text: "A large share of Johannesburg living happens in sectional-title complexes and security estates. Work there needs to follow body corporate rules, and it helps to have a team that's used to that.",
      },
      {
        title: "Every suburb, one standard",
        text: "The same standard of workmanship applies whether the project is a Sandton apartment, a Randburg family home or a Boksburg fixer-upper.",
      },
    ],
    faqs: [
      {
        q: "Which parts of Johannesburg do you work in?",
        a: "We work across greater Johannesburg, including Sandton, Randburg, Fourways, Roodepoort, Bedfordview, Midrand, Boksburg, Germiston and Edenvale. If you're nearby, ask — we'll tell you straight whether we cover your street.",
      },
      {
        q: "Do you work in complexes and security estates?",
        a: "Yes. Complex and estate work is a normal part of Johannesburg projects. We work to body corporate requirements and handle the site access arrangements estates need.",
      },
    ],
    seoTitle: "Home Improvement & Handyman Services Johannesburg",
    seoDescription:
      "Professional home improvement, repair, renovation and maintenance services across Johannesburg. Clear quotes, proper workmanship, all suburbs.",
  },
  {
    slug: "sandton",
    name: "Sandton",
    region: "Northern suburbs",
    title: "Home Improvement & Handyman Services in Sandton",
    heroLead:
      "Professional home improvements and maintenance for Sandton apartments, cluster homes and estates.",
    intro: [
      "Sandton is Johannesburg's commercial heart, and its residential side is a mix of high-rise apartments, cluster complexes and larger estate homes. Much of the housing stock is sectional title, which means work often needs body corporate sign-off — and tradespeople who can work cleanly inside occupied buildings.",
      "Sandton properties also tend to be heavily used: apartments are often rented out or owned by busy professionals, so repairs and improvements usually need to happen efficiently, with minimal disruption to neighbours and building routines.",
    ],
    areaNotes: [
      {
        title: "Sectional title work",
        text: "Most Sandton homes are in complexes. We're used to body corporate rules, limited working hours, and leaving shared areas exactly as we found them.",
      },
      {
        title: "Apartment maintenance",
        text: "From fixing doors and taps to refreshing kitchens and bathrooms in compact footprints, apartment work is about efficient use of space and time.",
      },
      {
        title: "Pre-rental and pre-sale preparation",
        text: "Sandton has a fast-moving property market. Punch lists, repainting and small fixes before listing or handing over a unit pay for themselves in value.",
      },
      {
        title: "Security-conscious sites",
        text: "Access control, visitor protocols and working quietly are part of doing work in Sandton buildings properly.",
      },
    ],
    faqs: [
      {
        q: "Do you handle repairs in Sandton apartment blocks?",
        a: "Yes. Apartment and cluster-home work across Sandton is a standard part of what we do, including working around body corporate requirements.",
      },
      {
        q: "Can you help prepare a Sandton property for sale or rental?",
        a: "Yes — punch lists, touch-ups, repainting and repairs before a listing or a new tenant moves in.",
      },
    ],
    seoTitle: "Home Improvement & Handyman Services Sandton",
    seoDescription:
      "Home improvements, repairs and maintenance in Sandton: apartments, cluster homes and estates, handled professionally.",
  },
  {
    slug: "randburg",
    name: "Randburg",
    region: "Northern suburbs",
    title: "Home Improvement & Handyman Services in Randburg",
    heroLead:
      "Home improvements, repairs and renovations for Randburg's established family homes and growing complexes.",
    intro: [
      "Randburg is one of Johannesburg's largest residential areas, with a mix of older established homes, mature gardens, and a growing number of townhouse complexes and new builds. Many homes here date from the 1960s to 1980s and are now at the age where maintenance pays: roofs, plumbing, waterproofing and general upkeep.",
      "It's also an area where families add on: extra rooms, flatlets, home offices and entertainment areas are common projects. Older plumbing and electrical systems often need attention alongside any modernisation.",
    ],
    areaNotes: [
      {
        title: "Additions and flatlets",
        text: "Many Randburg homeowners extend rather than move — extra bedrooms, granny flats and rental cottages. Proper planning and building to code matter here.",
      },
      {
        title: "Ageing systems",
        text: "Homes from the 60s to 80s commonly need plumbing, geyser and electrical attention. We flag what we see during any project rather than working around it.",
      },
      {
        title: "Mature gardens, outdoor work",
        text: "Established gardens mean patios, pergolas, paving and boundary walls are as much part of the property as the house itself.",
      },
      {
        title: "Townhouse complexes",
        text: "Randburg's many complexes need the same body-corporate-aware approach as anywhere else in Joburg — clean, quiet, coordinated.",
      },
    ],
    faqs: [
      {
        q: "Do you do additions and flatlets in Randburg?",
        a: "Yes — extensions, flatlets and conversions are common Randburg projects. We plan and quote them properly before any work starts.",
      },
      {
        q: "Can you help with an older Randburg home's maintenance backlog?",
        a: "Yes. Multi-item repair lists on older homes are exactly the kind of job we handle — one quote, one team, the list done.",
      },
    ],
    seoTitle: "Home Improvement & Handyman Services Randburg",
    seoDescription:
      "Home improvements, additions, repairs and maintenance in Randburg — established homes and complexes, done properly.",
  },
  {
    slug: "fourways",
    name: "Fourways",
    region: "Northern suburbs",
    title: "Home Improvement & Handyman Services in Fourways",
    heroLead:
      "Home improvements and maintenance for Fourways estates, family homes and fast-growing developments.",
    intro: [
      "Fourways has grown from farmland into one of Johannesburg's busiest residential nodes — security estates, cluster developments and modern family homes dominate. The housing stock is newer than the city average, which shifts the work profile: less heritage repair, more finishing, customisation and upkeep of modern builds.",
      "Estates bring their own requirements — body corporate approvals, working-hour rules, and contractors who can pass access control without friction. Newer homes also benefit from regular preventive maintenance to stay in good shape.",
    ],
    areaNotes: [
      {
        title: "Estate protocols",
        text: "Fourways estate work means approvals, access protocols and working within complex rules. We handle this as part of the job, not an afterthought.",
      },
      {
        title: "Modern home customisation",
        text: "Built-in cupboards, entertainment areas, home offices, security upgrades — personalising newer homes is a Fourways staple.",
      },
      {
        title: "Preventive maintenance",
        text: "Newer homes still age: sealants, waterproofing, gutters and paint need checking before small issues become expensive ones.",
      },
      {
        title: "Landscaping-adjacent builds",
        text: "Patios, pergolas and outdoor entertainment areas suit Fourways' larger stands and indoor-outdoor lifestyle.",
      },
    ],
    faqs: [
      {
        q: "Do you work inside Fourways security estates?",
        a: "Yes. We're familiar with estate access and body corporate requirements and arrange approvals as part of the job.",
      },
      {
        q: "Do you handle new-home finishing and customisation?",
        a: "Yes — from built-ins and custom cupboards to entertainment areas and smart home installations.",
      },
    ],
    seoTitle: "Home Improvement & Handyman Services Fourways",
    seoDescription:
      "Home improvements and maintenance in Fourways estates and family homes — estate-aware, professional, properly quoted.",
  },
  {
    slug: "roodepoort",
    name: "Roodepoort",
    region: "West Rand",
    title: "Home Improvement & Handyman Services in Roodepoort",
    heroLead:
      "Home improvements, repairs and maintenance for Roodepoort's established West Rand suburbs.",
    intro: [
      "Roodepoort and the West Rand hold some of Johannesburg's older suburbs — established homes, large stands and a strong sense of community. Many properties date back several decades, and the maintenance reality of the area includes aging roofs, plumbing and boundary walls, plus garden-heavy properties that need ongoing attention.",
      "Parts of the West Rand sit on dolomitic ground, which is worth knowing when planning structural work. Any responsible contractor doing additions or alterations here should check the geology before breaking ground — we factor that into planning from the start.",
    ],
    areaNotes: [
      {
        title: "Established homes, established needs",
        text: "Older West Rand homes commonly need roof maintenance, waterproofing and repainting — preventive work that protects the property's value.",
      },
      {
        title: "Dolomite awareness",
        text: "Some West Rand areas sit on dolomite. For structural work and additions we check requirements first and plan accordingly — this is not a corner to cut.",
      },
      {
        title: "Large stands, outdoor work",
        text: "Big gardens mean boundary walls, gates, patios and garden structures are regular parts of the job list.",
      },
      {
        title: "Family home improvements",
        text: "Kitchens, bathrooms, bedrooms and living areas that have served one generation well and need a refresh for the next.",
      },
    ],
    faqs: [
      {
        q: "Do you work across the West Rand?",
        a: "Yes, including Roodepoort and surrounds. If you're nearby, ask us about your specific street.",
      },
      {
        q: "What about building on dolomite areas?",
        a: "Where dolomite applies, we check the specific requirements for your property and plan structural work around them properly.",
      },
    ],
    seoTitle: "Home Improvement & Handyman Services Roodepoort",
    seoDescription:
      "Home improvements, repairs and maintenance in Roodepoort and the West Rand — established homes, handled properly.",
  },
  {
    slug: "bedfordview",
    name: "Bedfordview",
    region: "East Rand",
    title: "Home Improvement & Handyman Services in Bedfordview",
    heroLead:
      "Home improvements, renovations and maintenance for Bedfordview's established eastern suburbs.",
    intro: [
      "Bedfordview is one of Johannesburg's most established eastern suburbs — tree-lined streets, larger family properties, and a housing stock that spans several decades. Homes here are often substantial, with the maintenance needs that come with age: roofs, waterproofing, repainting, and systems that have seen years of service.",
      "It's also an area where homeowners invest in their properties rather than move — renovations, extensions, kitchen and bathroom modernisation, and outdoor entertainment areas are all part of the local picture.",
    ],
    areaNotes: [
      {
        title: "Substantial homes, substantial upkeep",
        text: "Larger older properties reward consistent maintenance. We help homeowners stay ahead of the list rather than behind it.",
      },
      {
        title: "Renovation over relocation",
        text: "Bedfordview homeowners tend to improve in place — kitchens, bathrooms, extensions and reconfigurations are common projects.",
      },
      {
        title: "Outdoor living",
        text: "Pool areas, patios, lapa and entertainment spaces are part of the Bedfordview lifestyle and need maintenance like the house itself.",
      },
      {
        title: "Pre-sale preparation",
        text: "Bedfordview property values are strong. Pre-listing repairs and refreshes help sellers present the home at its best.",
      },
    ],
    faqs: [
      {
        q: "Do you work in Bedfordview and the surrounding eastern suburbs?",
        a: "Yes — Bedfordview, Edenvale and the surrounding eastern suburbs are within our service area.",
      },
      {
        q: "Do you handle full renovations in Bedfordview?",
        a: "Yes, renovations of any scale — from a single bathroom to a whole-home project.",
      },
    ],
    seoTitle: "Home Improvement & Handyman Services Bedfordview",
    seoDescription:
      "Home improvements, renovations and maintenance in Bedfordview — established eastern suburbs, professional service.",
  },
  {
    slug: "midrand",
    name: "Midrand",
    region: "Central",
    title: "Home Improvement & Handyman Services in Midrand",
    heroLead:
      "Home improvements and maintenance for Midrand's new estates, townhouses and family homes.",
    intro: [
      "Midrand sits between Johannesburg and Pretoria and has grown rapidly — new estates, townhouse developments and corporate parks dominate. The housing stock is among the newest in the region, which means the work profile leans towards finishing, customisation, and preventive maintenance on modern builds.",
      "As with all newer developments, Midrand homes benefit from consistent upkeep — sealants, waterproofing, painting and systems checks — before small defects become real problems. Estate protocols also apply to much of the area.",
    ],
    areaNotes: [
      {
        title: "New-build finishing",
        text: "Snag lists, finishing work and customisation after handover are common Midrand projects.",
      },
      {
        title: "Estate coordination",
        text: "Much of Midrand is sectional title or estate-managed. We handle approvals and access as part of the job.",
      },
      {
        title: "Preventive maintenance",
        text: "New homes age from day one. Regular checks on waterproofing, sealants and paint keep small issues small.",
      },
      {
        title: "Home office upgrades",
        text: "Midrand's working population often needs home offices, study conversions and connectivity-friendly renovations.",
      },
    ],
    faqs: [
      {
        q: "Do you work in Midrand estates and new developments?",
        a: "Yes — snag lists, finishing work and maintenance in Midrand estates and complexes are standard for us.",
      },
      {
        q: "Can you handle a new-home snag list?",
        a: "Yes. We work through snag lists methodically and document everything as we go.",
      },
    ],
    seoTitle: "Home Improvement & Handyman Services Midrand",
    seoDescription:
      "Home improvements, snag lists and maintenance in Midrand estates and new developments — professional and estate-aware.",
  },
  {
    slug: "boksburg",
    name: "Boksburg",
    region: "East Rand",
    title: "Home Improvement & Handyman Services in Boksburg",
    heroLead:
      "Home improvements, repairs and maintenance for Boksburg's established East Rand neighbourhoods.",
    intro: [
      "Boksburg is one of the East Rand's oldest towns, with established neighbourhoods, older homes and a residential mix shaped by decades of growth. Many properties are at the stage where thoughtful maintenance and renovation make a real difference — roofs, plumbing, waterproofing, repainting and boundary walls all feature heavily.",
      "Parts of the East Rand have a mining history, and older areas can sit near worked ground. For structural work and additions, checking the specific conditions of a property is part of planning properly — not an optional extra.",
    ],
    areaNotes: [
      {
        title: "Older homes, honest maintenance",
        text: "Boksburg's established houses reward systematic upkeep. We help owners prioritise what protects the home most.",
      },
      {
        title: "Mining-area awareness",
        text: "Parts of the East Rand sit over old workings. For structural projects we check site-specific conditions and plan accordingly.",
      },
      {
        title: "Family home improvements",
        text: "Kitchens, bathrooms, flooring and repainting modernise Boksburg homes while keeping their character.",
      },
      {
        title: "Rental and resale preparation",
        text: "Punch lists and refreshes before selling or letting a property are common and cost-effective projects.",
      },
    ],
    faqs: [
      {
        q: "Do you cover Boksburg and the East Rand?",
        a: "Yes. Boksburg, Germiston, Edenvale and surrounding East Rand areas are within our service area.",
      },
      {
        q: "Can you renovate an older Boksburg home?",
        a: "Yes — we renovate and repair older homes regularly, working with what's there rather than against it.",
      },
    ],
    seoTitle: "Home Improvement & Handyman Services Boksburg",
    seoDescription:
      "Home improvements, repairs and maintenance in Boksburg — established East Rand homes, properly quoted and properly done.",
  },
  {
    slug: "germiston",
    name: "Germiston",
    region: "East Rand",
    title: "Home Improvement & Handyman Services in Germiston",
    heroLead:
      "Home improvements, repairs and maintenance for Germiston's established residential suburbs.",
    intro: [
      "Germiston is one of the East Rand's older centres, with residential suburbs that have matured over generations. The housing stock includes long-established family homes, townhouse complexes and a large rental sector — all of which need ongoing maintenance and periodic modernisation to stay sound and comfortable.",
      "As with much of the East Rand, the area's mining heritage means structural work should always start with a proper look at site-specific conditions. For everything else — from roofs and waterproofing to kitchens and repainting — the usual rules apply: clear quotes, proper workmanship, no surprises.",
    ],
    areaNotes: [
      {
        title: "Established suburbs",
        text: "Older Germiston homes carry the standard maintenance list: roofs, gutters, waterproofing, boundary walls and repainting.",
      },
      {
        title: "Rental property support",
        text: "With a large rental market, landlords and agents need responsive repairs and pre-tenant preparation. We do both.",
      },
      {
        title: "Complex maintenance",
        text: "Townhouse complexes across Germiston need contractors who respect body corporate rules and shared spaces.",
      },
      {
        title: "Renovations that last",
        text: "Kitchens, bathrooms and flooring upgrades on older homes — planned properly and finished to standard.",
      },
    ],
    faqs: [
      {
        q: "Do you work with landlords and rental agents in Germiston?",
        a: "Yes. Pre-tenant preparation, repairs and maintenance for rental properties are a regular part of our work.",
      },
      {
        q: "Do you cover the whole East Rand from Germiston?",
        a: "Germiston and the surrounding East Rand are within our service area — ask about your specific suburb.",
      },
    ],
    seoTitle: "Home Improvement & Handyman Services Germiston",
    seoDescription:
      "Home improvements, repairs and rental maintenance in Germiston — established East Rand suburbs, professional service.",
  },
  {
    slug: "edenvale",
    name: "Edenvale",
    region: "East Rand",
    title: "Home Improvement & Handyman Services in Edenvale",
    heroLead:
      "Home improvements, repairs and maintenance for Edenvale's family homes and townhouses.",
    intro: [
      "Edenvale is a well-established eastern suburb between Johannesburg and OR Tambo — popular with families, commuters and, increasingly, younger buyers renovating older homes. The housing stock is largely mature, with tree-lined streets and a strong townhouse sector alongside freestanding family properties.",
      "That maturity means the maintenance list is well understood: roofs and gutters, waterproofing, repainting, boundary walls, and the steady modernisation of kitchens and bathrooms. It's also an area where pre-sale preparation and rental readiness matter — Edenvale's property market moves quickly.",
    ],
    areaNotes: [
      {
        title: "Mature homes, steady upkeep",
        text: "Roofs, waterproofing, painting and walls — Edenvale's established homes reward owners who stay ahead of maintenance.",
      },
      {
        title: "Townhouse expertise",
        text: "A large townhouse sector means body corporate-aware work is the norm: approvals, protocols, clean sites.",
      },
      {
        title: "Kitchen and bathroom modernisation",
        text: "The most common Edenvale renovation — updating the rooms that carry daily use.",
      },
      {
        title: "Pre-sale and rental preparation",
        text: "Punch lists, refreshes and repairs before listing or letting a property in a fast-moving market.",
      },
    ],
    faqs: [
      {
        q: "Do you cover Edenvale and surrounds?",
        a: "Yes. Edenvale is within our core service area, along with Bedfordview and the surrounding eastern suburbs.",
      },
      {
        q: "Do you do pre-sale repairs in Edenvale?",
        a: "Yes — pre-listing punch lists, touch-ups and repairs that help a home present at its best.",
      },
    ],
    seoTitle: "Home Improvement & Handyman Services Edenvale",
    seoDescription:
      "Home improvements, repairs and maintenance in Edenvale — family homes and townhouses, handled professionally.",
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
