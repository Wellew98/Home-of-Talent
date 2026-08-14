export type GuideSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  sections: GuideSection[];
};

/**
 * GUIDES (master brief s.23) — 10 initial articles, real substance.
 * Pricing figures are general Johannesburg market ranges, clearly framed
 * as typical — not Home of Talent rates. No invented business claims.
 */
export const guides: Guide[] = [
  {
    slug: "how-much-does-home-renovation-cost-johannesburg",
    title: "How Much Does Home Renovation Cost in Johannesburg?",
    category: "Pricing & Hiring",
    excerpt:
      "Realistic ranges for Johannesburg renovations — by room, by scope, and the factors that genuinely move the price.",
    date: "2026-08-01",
    sections: [
      {
        heading: "The honest answer first",
        paragraphs: [
          "Renovation costs in Johannesburg are best understood by scope, not by square metre alone. A kitchen in a Bryanston house and a kitchen in a Boksburg townhouse can cost very different amounts for the same finishes, because access, building age, and what lies behind the walls all differ. That said, Johannesburg homeowners typically see these ranges for common projects:",
        ],
        list: [
          "Cosmetic refresh (paint, fixtures, minor repairs): roughly R15,000 – R60,000",
          "Bathroom renovation: roughly R45,000 – R140,000",
          "Kitchen renovation: roughly R80,000 – R250,000+",
          "Full interior renovation of a 3-bed home: roughly R350,000 – R900,000+",
          "Extensions and additions: typically R8,000 – R15,000 per square metre",
        ],
      },
      {
        heading: "What actually moves the price",
        paragraphs: [
          "Three things move renovation pricing more than anything else. First, what's behind the surface: older Johannesburg homes often hide outdated plumbing, wiring, or non-compliant work that only appears once you open up. Budgeting for the unknown is realistic, not pessimistic.",
          "Second, the materials you choose. A standard vanity and a custom solid-wood one can be a R20,000 difference on the same bathroom. Third, access and site conditions — working on a third-floor apartment, in an estate with restricted hours, or around an occupied home all add time.",
        ],
      },
      {
        heading: "How to budget without surprises",
        paragraphs: [
          "Get itemised quotes, not lump sums. An itemised quote lets you see exactly where money goes — and lets you adjust scope before signing. Ask every contractor the same questions: what's included, what's excluded, and what happens when something unexpected is found.",
          "A realistic rule of thumb: keep a 10–15% contingency for anything that opens walls, floors or ceilings. On cosmetic work, contingency can be smaller. And be wary of quotes that are dramatically cheaper than the rest — the difference usually comes out in preparation, materials, or the finishing.",
        ],
      },
      {
        heading: "When a renovation pays for itself",
        paragraphs: [
          "Kitchens and bathrooms remain the highest-return rooms to renovate in Johannesburg, followed by outdoor entertainment areas and security upgrades. Paint and flooring refreshes consistently help a home sell faster, even when they don't add rand-for-rand value.",
        ],
      },
    ],
  },
  {
    slug: "how-much-does-a-handyman-cost-johannesburg",
    title: "How Much Does a Handyman Cost in Johannesburg?",
    category: "Pricing & Hiring",
    excerpt:
      "Hourly rates, call-out fees, and why the cheapest hourly rate is rarely the cheapest job.",
    date: "2026-08-01",
    sections: [
      {
        heading: "Typical rates in Johannesburg",
        paragraphs: [
          "Handyman work in Johannesburg is usually priced by the hour or by the job. Typical market rates sit around R250 – R600 per hour depending on the trade and complexity, with many providers adding a call-out or minimum-charge component for small jobs. By-the-job pricing is common for defined tasks like hanging doors, installing shelving, or painting a room.",
        ],
      },
      {
        heading: "Call-out fees and minimum charges",
        paragraphs: [
          "A call-out fee covers the cost of travelling to you and exists because a half-hour job still consumes an hour or two of the day with travel. It's a fair structure — but it means small jobs get cheaper per item when bundled. If you have six small things, send them as one list, not six call-outs.",
        ],
      },
      {
        heading: "Why the lowest hourly rate can cost the most",
        paragraphs: [
          "An hourly rate only tells you the speed of the meter, not the speed of the work or the quality of the result. A cheaper rate applied slowly, or a job redone because it wasn't done properly, costs more than a higher rate applied well. The better questions: what's included, what materials are used, and what happens if something isn't right afterwards.",
        ],
      },
      {
        heading: "Getting good value",
        paragraphs: [
          "Bundle small jobs. Describe the work accurately upfront — with photos if you can. Ask for a written quote on anything bigger than a single visit. And keep a running maintenance list on your phone: when a professional is already on site, adding one or two small items to the day usually costs far less than booking them separately.",
        ],
      },
    ],
  },
  {
    slug: "kitchen-renovation-ideas-johannesburg-homes",
    title: "Kitchen Renovation Ideas for Johannesburg Homes",
    category: "Kitchens",
    excerpt:
      "Practical, climate-appropriate kitchen ideas — from estate homes to older Joburg houses.",
    date: "2026-08-02",
    sections: [
      {
        heading: "Work with the home you have",
        paragraphs: [
          "Johannesburg kitchens span a wide range: galley kitchens in older townhouses, open-plan spaces in newer estates, and generous family kitchens in the established suburbs. The best renovations work with the room's bones rather than fighting them. In a narrow kitchen, for example, full-height cupboards and a single row of deep drawers often beat a cramped island.",
        ],
      },
      {
        heading: "Ideas that earn their space",
        paragraphs: [
          "The changes Johannesburg homeowners get the most value from:",
        ],
        list: [
          "Open shelving where it suits the space — but closed storage where the dust settles (Joburg's dry winters mean everything on open shelves needs wiping)",
          "Light-coloured cabinetry to lift rooms that don't get much natural light",
          "A breakfast nook or extended counter instead of a formal dining area in smaller homes",
          "Under-cabinet lighting — cheap to install, transforms the working area",
          "A dedicated appliance garage to keep counters clear",
        ],
      },
      {
        heading: "Finishes that survive local conditions",
        paragraphs: [
          "Highveld UV fades fabrics and can discolour certain finishes near north-facing windows. In the kitchen, choose UV-stable laminates for sun-facing cupboards. For countertops, quartz and granite remain the Johannesburg standards — they handle heat, scratching and daily use without the maintenance of wood or laminate.",
        ],
      },
      {
        heading: "Don't forget the plumbing and power",
        paragraphs: [
          "Before any kitchen renovation, check what the existing plumbing and electrical can support. Older homes often need a circuit or two added for modern appliances, and moving a sink or stove can add meaningfully to cost. A good contractor will flag this in the planning phase, not halfway through the job.",
        ],
      },
    ],
  },
  {
    slug: "bathroom-renovation-ideas",
    title: "Bathroom Renovation Ideas",
    category: "Bathrooms",
    excerpt:
      "Bathroom renovation ideas that balance budget, durability and daily comfort.",
    date: "2026-08-02",
    sections: [
      {
        heading: "Start with the waterproofing, not the tiles",
        paragraphs: [
          "The most important part of any bathroom renovation is the part you never see: proper waterproofing behind the tiles. Tile and grout resist water; they don't stop it. A correctly applied waterproofing membrane under the floor and up the walls is what keeps a bathroom renovation from leaking into the room below it years later.",
        ],
      },
      {
        heading: "Layout before finishes",
        paragraphs: [
          "The cheapest renovation is usually the one that keeps the existing layout — moving the toilet, shower or basin means moving plumbing, which adds real cost. If the layout works, invest in finishes instead. If it doesn't work, move it — but do it deliberately, knowing the extra cost.",
        ],
      },
      {
        heading: "Finishes that last",
        paragraphs: [
          "For Johannesburg homes, look for:",
        ],
        list: [
          "Large-format tiles — fewer grout lines, less maintenance",
          "Porcelain over ceramic for floors — harder wearing",
          "Wall-hung vanities — easier cleaning, feels more spacious",
          "A fixed shower screen instead of a curtain where budget allows",
          "Good extraction — Johannesburg winters trap moisture in unventilated bathrooms",
        ],
      },
      {
        heading: "Small bathrooms, big difference",
        paragraphs: [
          "In compact bathrooms, the biggest wins are a wall-hung vanity, a frameless glass shower panel, and a large mirror with good lighting. These three changes make a small bathroom feel twice its size without moving a single pipe.",
        ],
      },
    ],
  },
  {
    slug: "painting-your-home-interior-vs-exterior",
    title: "Painting Your Home: Interior vs Exterior",
    category: "Painting & Finishes",
    excerpt:
      "Why interior and exterior paint are different jobs — products, preparation and timing.",
    date: "2026-08-03",
    sections: [
      {
        heading: "Two different jobs",
        paragraphs: [
          "Interior and exterior painting share a brush but not much else. Exterior paint must handle UV, rain, hail and temperature swings; interior paint must handle scrubbing, scuffing and the aesthetics of daily life. The products, the preparation and the timing are all different — which is why treating them as one job usually compromises one of them.",
        ],
      },
      {
        heading: "Exterior painting in Johannesburg",
        paragraphs: [
          "The Highveld sun is brutal on exterior coatings — that's why quality exterior paint matters more than anywhere. Key points: schedule exterior work for the dry season (roughly May to September) where possible; repair cracks and waterproofing before paint, not after; and expect a proper wash-down and preparation phase. Paint over flaking or chalky surfaces simply fails early.",
        ],
      },
      {
        heading: "Interior painting considerations",
        paragraphs: [
          "Interior paint selection is about sheen and washability: matt for ceilings, eggshell or low-sheen for living areas, and washable finishes for kitchens, bathrooms and kids' rooms. Preparation still matters — patching, sanding and priming are what separate a paint job that looks good for a year from one that looks good for a decade.",
        ],
      },
      {
        heading: "Which one first?",
        paragraphs: [
          "If both need doing, exterior first — it's weather-dependent and protects the structure, while interior work can happen any season. And if you're renovating a room, paint last: after carpentry, tiling and fixture installation, not before.",
        ],
      },
    ],
  },
  {
    slug: "common-home-repairs-every-johannesburg-homeowner",
    title: "Common Home Repairs Every Johannesburg Homeowner Should Know",
    category: "Repairs",
    excerpt:
      "The repairs that come up most in Joburg homes — what causes them and how to stay ahead.",
    date: "2026-08-03",
    sections: [
      {
        heading: "The usual suspects",
        paragraphs: [
          "Across Johannesburg homes, a small set of repairs comes up again and again. Knowing them helps you spot problems early — when they're cheap — instead of late, when they're not.",
        ],
        list: [
          "Leaking taps and running toilets — washers and valves wear out; both waste water quietly",
          "Sticking or sagging doors — wood moves with humidity, hinges loosen, frames settle",
          "Loose or cracked tiles — grout fails first, then tiles crack under load",
          "Window seals and catches — draughts in winter, leaks in storm season",
          "Roof and gutter issues — the source of most ceiling stains in Joburg homes",
          "Cracked plaster and paint — seasonal movement is normal; the question is whether it's cosmetic or structural",
        ],
      },
      {
        heading: "Storm season is the honest auditor",
        paragraphs: [
          "Johannesburg's October-to-March storms find every weakness a house has. The gutter that overflowed in February, the flashing that lifted in November, the seal around the window that perished — all of them announce themselves during a downpour. The cheapest time to fix them is the dry season, before the storms return.",
        ],
      },
      {
        heading: "When to DIY and when to call someone",
        paragraphs: [
          "A fair DIY boundary: anything that can be fully understood from a YouTube video and undone without consequences — a tap washer, a door hinge, a bathroom seal. Anything involving electricity, mains plumbing, roofs, waterproofing or structural work is worth professional hands, both for safety and for the guarantee that the work was done to standard.",
        ],
      },
      {
        heading: "The value of a maintenance list",
        paragraphs: [
          "Keep a running list on your phone. When a professional is on site for one job, bundling two or three small items costs a fraction of booking them separately — and small problems never get a chance to grow.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-your-home-for-painting",
    title: "How to Prepare Your Home for Painting",
    category: "Painting & Finishes",
    excerpt:
      "A practical prep checklist — what to move, what to cover, and what to discuss before the painters arrive.",
    date: "2026-08-04",
    sections: [
      {
        heading: "Before the painters arrive",
        paragraphs: [
          "Good preparation on your side makes a paint job faster, cleaner and better. The essentials:",
        ],
        list: [
          "Move small furniture and décor out of the room entirely where possible",
          "Take down curtains, blinds, pictures and mirrors",
          "Push remaining furniture to the centre and cover it",
          "Protect floors — especially around doorways and skirting",
          "Clear the working areas the painters will use for staging",
          "Tell the painter about any specific concerns: lead paint on older homes, wall damage you want fixed, special finishes",
        ],
      },
      {
        heading: "Decide colours and finishes upfront",
        paragraphs: [
          "Colour and sheen decisions are best made before the job starts, not after the first coat is on the wall. If you're unsure between shades, paint large test patches and live with them for a few days in different light. Small samples on a colour card are misleading at wall scale.",
        ],
      },
      {
        heading: "What professional prep should include",
        paragraphs: [
          "The preparation your contractor does matters more than the paint itself. Expect: washing down walls, filling cracks and holes, sanding, priming bare or stained surfaces, and protecting floors and fittings. If a quote skips preparation, ask why — paint over unprepped surfaces is the classic way a cheap job becomes an expensive redo.",
        ],
      },
      {
        heading: "After the job",
        paragraphs: [
          "Let the paint cure properly — avoid scrubbing new paint for the first couple of weeks. Keep leftover paint, labelled with the room and finish, for touch-ups. And walk the job with the painter before they leave, noting any areas that need attention while they're still on site.",
        ],
      },
    ],
  },
  {
    slug: "bathroom-renovation-checklist",
    title: "Bathroom Renovation Checklist",
    category: "Bathrooms",
    excerpt:
      "Everything to decide, check and confirm before your bathroom renovation starts.",
    date: "2026-08-04",
    sections: [
      {
        heading: "Decisions to make first",
        paragraphs: [
          "The biggest bathroom renovation mistakes happen in the decisions that get skipped. Before you get quotes, settle:",
        ],
        list: [
          "Keep the layout or change it? (changing it means moving plumbing and real extra cost)",
          "Shower, bath or both? Walk-in shower conversions are the most common change",
          "Floor and wall finishes — tile, large format, stone look?",
          "Vanity: built-in, wall-hung, double basin?",
          "Storage: where do towels, toiletries and cleaning supplies live?",
          "Lighting: one overhead light or layered lighting around the mirror?",
          "Ventilation: window, extractor fan, or both?",
        ],
      },
      {
        heading: "The non-negotiables",
        paragraphs: [
          "Three things should be on every bathroom renovation checklist regardless of budget: proper waterproofing membrane under tiles and behind the shower, water-resistant board in wet areas, and a working extraction solution. These are the difference between a bathroom that lasts fifteen years and one that leaks in five.",
        ],
      },
      {
        heading: "Ask your contractor before work starts",
        paragraphs: [
          "A short list of questions that prevent most mid-project surprises: What's included and excluded in the quote? What happens if water damage or old plumbing is found behind the walls? Who supplies the fittings — you or the contractor? What's the realistic timeline, and what could move it? How do you protect the rest of the house during the work?",
        ],
      },
      {
        heading: "Final walk-through items",
        paragraphs: [
          "Before you accept the finished bathroom: run every tap and the shower, check drainage speed, look for grout gaps and silicone finish, open and close everything, and check that the extraction actually moves air. Small issues are easiest to fix while the team is still on site.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-a-handyman-johannesburg",
    title: "How to Choose a Handyman in Johannesburg",
    category: "Pricing & Hiring",
    excerpt:
      "The questions and red flags that separate dependable tradespeople from expensive regrets.",
    date: "2026-08-05",
    sections: [
      {
        heading: "Look for communication before craft",
        paragraphs: [
          "The single best predictor of a good experience is how the person communicates before they've won the job: do they answer questions directly, quote in writing, and show up when they say they will? Craftsmanship matters, but a skilled contractor who can't be reached is worse than an average one who can.",
        ],
      },
      {
        heading: "Questions worth asking",
        paragraphs: [
          "Ask every candidate the same set of questions so you can compare like with like:",
        ],
        list: [
          "Is the quote itemised, and what's included or excluded?",
          "Do you have recent references or completed projects I can see?",
          "Who actually does the work — you, or a team you supervise?",
          "What's your process if something goes wrong after the job is done?",
          "When can you start, and how long will it take?",
        ],
      },
      {
        heading: "Red flags that cost money",
        paragraphs: [
          "A few patterns to treat with caution: quotes that are dramatically cheaper than the others (the difference usually comes out in preparation or materials); requests for large upfront payments before work starts; reluctance to put anything in writing; and 'while we're here' scope creep that wasn't agreed upfront. None of these guarantee a bad outcome — but together they're a pattern worth walking away from.",
        ],
      },
      {
        heading: "Deposits and payments",
        paragraphs: [
          "Some deposit is normal, especially when materials must be ordered — but it should be proportional, clearly documented, and tied to the quote. The rest should follow progress, with a final payment held back until you've walked the work and are satisfied. Anyone demanding full payment upfront is asking you to take all the risk.",
        ],
      },
    ],
  },
  {
    slug: "home-maintenance-checklist-johannesburg",
    title: "Home Maintenance Checklist for Johannesburg Homeowners",
    category: "Maintenance",
    excerpt:
      "A season-by-season maintenance checklist built for the Highveld climate.",
    date: "2026-08-05",
    sections: [
      {
        heading: "Before storm season (August–September)",
        paragraphs: [
          "The dry months are the time to prepare for the wet ones. The essential pre-storm list:",
        ],
        list: [
          "Clear gutters and check downpipes run freely",
          "Inspect the roof: loose tiles, lifted flashing, perished waterproofing",
          "Check window and door seals; replace where perished",
          "Walk the boundary walls and gate for cracks or movement",
          "Trim branches that could reach the roof in a storm",
          "Test the drainage around the house — where does water pool?",
        ],
      },
      {
        heading: "Through summer (October–March)",
        paragraphs: [
          "Storm season is reactive: after each big storm, do a quick check for new leaks, ceiling stains, blocked gutters and loose fascia. The earlier you catch a leak, the cheaper it is. Keep an eye on paint and varnish too — Highveld UV works fast on exposed surfaces.",
        ],
      },
      {
        heading: "Winter checks (May–August)",
        paragraphs: [
          "Joburg winters are dry and cold, which shows up differently:",
        ],
        list: [
          "Check draughts around windows and doors — winter is when you feel them",
          "Service and test heaters before the first cold snap",
          "Look for cracking plaster and paint from seasonal movement",
          "Inspect geysers and insulation — winter is when weak points fail",
        ],
      },
      {
        heading: "Keep a running list",
        paragraphs: [
          "The most useful maintenance tool is a running list on your phone: every small thing you notice — the tap that drips, the door that sticks, the tile that moves. When a professional is on site for any job, working down that list costs a fraction of booking each item separately.",
        ],
      },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
