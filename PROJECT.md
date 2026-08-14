# Home of Talent — Premium Johannesburg Home-Improvement Brand

## Project Brief (Wellington's words)
Premium Johannesburg home-improvement brand combining:
- Editorial architecture photography
- Bold modern typography
- Warm off-white surfaces
- Deep charcoal sections
- Restrained copper accents
- Generous whitespace
- Strong craftsmanship imagery
- Highly focused quote/WhatsApp conversion paths

**Clone target:** https://thecoloradohandyman.com
**Plan:** 12 phases guided by Wellington (ChatGPT plan). Phase status tracked at bottom.
**Folder:** C:\Users\DELL\OneDrive\Desktop\Home of Talent

---

## CLONE STUDY — thecoloradohandyman.com (completed 2026-08-14)

### Sitemap
```
/                        Homepage
/services/               Services hub (11 service cards)
/services/{slug}/        Service detail pages (narrative + pricing tables + FAQ + checklist)
/estimate/               Quote form page (THE conversion engine)
/blog/                   Articles (SEO guides, "Pro Tips")
/gallery/                Gallery
/projects/               Projects
/about/                  About (founder story)
/areas/                  Service area pages (local SEO)
Homeowner FAQ            FAQ page
```

### Homepage section flow (top to bottom)
1. **Utility bar** — phone number, hours, "✓ LICENSED & INSURED — $2M GENERAL LIABILITY"
2. **Header/nav** — logo, Home, Services (dropdown), Gallery, Projects, Pro Tips, FAQ, Areas (dropdown), About, "Get an Estimate" (CTA button)
3. **Hero (dark)** — kicker (small uppercase tracked gold), H1 serif, paragraph, trust badge pills (15+ Years / $2M Insured / Licensed / Flat-Rate), 2 CTAs (solid + outlined)
4. **Trust badges row** — 4 pill badges
5. **Services section (white)** — H2 + intro line, 3x3 grid of 9 service cards: image, small uppercase label, title, one-line description, "Learn more →" + "See All Services →"
6. **Founder story (alt bg)** — H2 "Built for Colorado. Not a Generic Contractor." + first-person narrative paragraph
7. **Blog guides (white)** — 3 article cards: image, category label, title, excerpt, author, "Read Guide →" + "View All Articles →"
8. **FAQ (alt bg)** — accordion cards on white, thin borders, ~5 questions
9. **Final CTA (dark)** — H2 + subline + 2 CTAs (form button + phone link)
10. **Footer (darker)** — logo, phone, email, socials, 3 link columns (Services / Service Areas / Resources), legal

### Services page
- Breadcrumb, H1 + intro, 11 cards in grid: image, title, 2-3 line local-specific description, "Free Estimate" + "Details →" per card
- Final CTA band

### Service detail page (pattern)
1. Breadcrumb, H1, intro paragraph, 2 CTAs
2. 2-3 paragraphs of local-expertise narrative (climate/water/regulation specifics)
3. Sub-service list (bold-lead bullets)
4. **Pricing table** (Scope | Typical Cost | Permit?) — 3 tiers
5. Cost-driver paragraphs with real local numbers
6. Timeline section
7. Permits/regulations section (local authority by name)
8. "Service Includes" checklist
9. FAQ accordion (5 questions)
10. Final CTA band

### Estimate page (conversion engine — STUDY HARD)
- Top bar: phone, hours, licensed badge, Call Now + Free Estimate buttons
- Breadcrumb, kicker ("No Obligation · Flat-Rate Pricing"), H1 "Get a Free Written Estimate", intro
- **Form fields:** Full Name*, Phone*, Email*, Property Address, Service Type* (select, 12 options), Approximate Budget (5 tiers), Project Description*, Preferred Timeline (5 options), How did you find us? (8 options), honeypot anti-spam
- Trust line under form: "We respond within 1 business day · No spam, no pressure · Your info stays private"
- **Sidebar:** Direct line, email, hours, "What Happens Next" 4-step process, service areas list

### Design language extracted
| Element | Target (Colorado) | Home of Talent (Joburg adaptation) |
|---|---|---|
| Primary dark | #1e351e forest green hero | Deep charcoal (#141414-ish) |
| Darkest | #0f1c0f footer | Near-black charcoal |
| Accent | #c07634 warm clay/ochre | Restrained copper (#b87333 family) |
| Light bg | #f4f6f4 pale sage | Warm off-white (#faf7f2 family) |
| Headings | Serif (Playfair-ish), bold | Bold modern — decided in design phase |
| Body | Sans (Inter-ish) | Sans |
| Badges | Pill, semi-transparent, thin border | Same language |
| Buttons | Rounded 4-6px, solid accent / outlined white | Same |
| Section rhythm | Alternating white / pale, 80-120px padding | Same generous whitespace |
| Cards | Image-top, uppercase label, title, one-liner | Same |

### Conversion path adaptation (CO → ZA)
- Phone call → **WhatsApp-first** (wa.me link + click-to-chat buttons), phone secondary
- US permits narrative → **Joburg/Gauteng specifics**: City of Joburg building plan approvals, NHBRC, complex/body-corporate rules, security estates (boom gates), load-shedding-proofing angle (solar, inverters, gas), Joburg climate (Highveld storms, hail), water restrictions, heritage homes (older suburbs)
- Suburbs targeting: Sandton, Bryanston, Randburg, Fourways, Rosebank, Parktown, Houghton, Saxonwold, Northcliff, Bedfordview, Edenvale, Sunninghill, Lonehill, Morningside
- Trust markers: registered builder, NHBRC, insurance, years of experience, references
- Currency: Rand. "Flat-rate / fixed quote" language works well in ZA.

---

## Tech approach (per standing rules)
- Static HTML/CSS/JS first. No database until proven necessary.
- Deploy target: TBD (previous projects used Cloudflare Pages).
- Quote form: static front-end + form handling decided in estimate phase (Netlify/Cloudflare Pages Forms/Formspree or WhatsApp deep-link with pre-filled message).
- Domain: TBD (Regery, PayPal — Wellington handles signups).

---

## PHASE TRACKER — DEVELOPMENT ORDER (from master brief, section 43)
Wellington's strategy phases 1-4 (objective, positioning, colour/type, logo) are LOCKED.
Build now proceeds autonomously through the brief's 12-phase dev order. One phase at a time, run, inspect, fix, continue (brief rule 44).

| Phase | Build target | Status | Notes |
|---|---|---|---|
| 1 | Project setup, design system, fonts, global CSS, header, footer, buttons, container | ✔ DONE | Next 16.3.1 + React 19 + Tailwind v4 + motion + lucide. QA: contrast cascade bug fixed (@layer base). |
| 2 | Homepage | ✔ DONE | All 10 sections + interactions. 18 editorial images curated (vision-QA'd, 4 rounds). Build passes. |
| 3 | Service pages (9) | ✔ DONE | Hub + 9 SSG detail pages, shared components (ServiceCard, ServiceHero, FaqList, ProcessSteps, Breadcrumbs). QA'd on 2 pages. |
| 4 | Project system | ✔ DONE | /projects hub + 4 SSG detail pages, ProjectCard shared, placeholder disclosure badges |
| 5 | Location pages (10: johannesburg + 9 areas) | ✔ DONE | Real local content (dolomite/mining awareness, estate protocols, per-area property types). QA'd flagship page. |
| 6 | Quote form (estimate system) | ✔ DONE | All brief s.18 fields + validation + honeypot + photo upload + exact success copy. WhatsApp deep-link delivery verified end-to-end. |
| 7 | WhatsApp integration | ✔ DONE | Built-in since Phase 1: wa.me deep-links site-wide from ONE config (site.ts). Prefilled message + form-to-WhatsApp pipeline verified. |
| 8 | Guides/blog (10 initial articles) | ✔ DONE | 10 full Joburg-relevant articles (~600w each, market-range pricing framed honestly). Hub + SSG pages + related links. |
| 9 | SEO (schema, OG, sitemap, robots, canonicals) | ✔ DONE | JSON-LD: Organization, LocalBusiness, Service, BreadcrumbList, FAQPage — verified in HTML. sitemap.xml + robots.txt live. Canonicals on all dynamic pages. |
| 10 | Performance (90+ Lighthouse) | IN PROGRESS | R1: A11y 96, BP 100, SEO 100, Perf 50. Fix: CSS-only reveals, server components, hydration cut. R2 auditing. |
| 11 | Mobile QA (375x812, 390x844, 430x932, 768x1024, 1440x900) | ⏳ | |
| 12 | Deployment (Vercel) | IN PROGRESS | Code on GitHub main (bb4541e+). First Vercel build cloned the pre-push snapshot (2999826) — fresh push triggers correct build. |

---

## MASTER BRIEF (received 2026-08-14, supersedes phase-by-phase prompting)
File: master brief.md (1,328 lines, ChatGPT-authored, Wellington-approved).

### Key deltas vs earlier phases (resolved)
1. **Hero headline**: "Your Home. Done Properly." (brief s.8) — the "WE FIX. WE BUILD. WE IMPROVE." line from Phase 3 was a typography-style EXAMPLE, not the hero. Locked: hero = "Your Home. Done Properly." + subline "Professional home improvement, repairs and maintenance services across Johannesburg."
2. **Logo**: brief s.6 suggested a text-only logo — Wellington's delivered emblem logo (Phase 4, already vectorized) SUPERSEDES that. It matches the brief's intent (geometric roof + wordmark).
3. **CTA labels**: brief is consistent: primary "Get a Free Quote", secondary "WhatsApp Us". The clone's "Get a Free Estimate" is dead for us.
4. **Tech stack**: Next.js 16+, TypeScript, Tailwind, Framer Motion (now "motion" package), Lucide icons, Vercel, GitHub. shadcn/ui "where useful" — decision: SKIP shadcn, hand-roll accessible components (leaner, better Lighthouse; brief bans over-engineering). Supabase optional/Phase 2 — quote form must work WITHOUT it first (WhatsApp-fallback delivery pattern planned for Phase 6).
5. **Nav**: Services, Projects, About, Areas We Serve, Guides + Get a Free Quote button.
6. **No invented facts**: no experience-year claims, no testimonials, no guarantee/licence/insurance claims until business confirms. Placeholders clearly marked. NO copying Colorado Handyman content/images/trademarks — structure and conversion principles only.

### Local competitor study — Rods Fix It (rodsfixit.co.za, brief-referenced)
The anti-pattern we avoid: yellow "CLICK ME TO CALL" box, cartoon tools illustration, phone-photo galleries, promo-code template, long scrolling homepage. Their strengths worth noting as LOCAL conversion norms (only adopt once business confirms): free site inspection, detailed written quote, 24-48h response commitment, rubble removal, 6-month labour guarantee. Our premium editorial aesthetic differentiates directly against this.

### Open blockers (need Wellington, don't stall build)
1. ~~WhatsApp/phone number~~ RESOLVED: 083 745 0681 (wa.me 27837450681), in site.ts.
2. Real project photos + team photos — brief demands clearly-marked placeholders until supplied. Curated editorial Pexels fills v1 (see IMAGE-SOURCES.md).
3. GitHub repo + Vercel account linking — Phase 12, Wellington handles signups.
4. Business facts (NHBRC, insurance, years, team) — placeholder policy applies.
5. Email address — hello@homeoftalent.co.za is still a placeholder.
6. Quote backend: v1 = WhatsApp deep-link delivery of form content; Supabase when Wellington decides (brief s.34).

---

## Content decisions log
- Business name: Home of Talent
- Hero display line: "Your Home. Done Properly." (master brief s.8)
- Hero subline: "Professional home improvement, repairs and maintenance services across Johannesburg."
- Positioning: locked in Phase 2

### Positioning
"Professional home improvements, repairs and maintenance for Johannesburg homes."

### Brand personality
Professional · Skilled · Reliable · Modern · Practical · Trustworthy · Clean · Premium without feeling expensive · Local

### Core message
"You have a problem with your home. We know how to fix it."

### Visual direction — DO
Modern architectural + craftsmanship. Think: premium home renovation company + modern Joburg property company + professional tradesman.

### Visual direction — DO NOT (hard constraints, verbatim)
- Bright construction yellow everywhere
- Cartoon tools
- Excessive gradients
- Cheap stock-photo aesthetics
- Huge rounded cards
- Excessive glassmorphism
- Excessive animations
- Generic AI-looking layouts

---

## PHASE 3 — Colour System & Typography (Wellington-specified, FINAL)

### Colour system
| Token | Value | Use |
|---|---|---|
| Charcoal | #171717 | Primary brand colour. Major sections (hero, CTA bands, footer). |
| Off-white | #F6F4EF | Secondary. DOMINANT page background. |
| Copper | #C56A32 | Accent. CTA buttons, small highlights, icons, active states, decorative lines. SPARINGLY. |
| Sage | #68745F | Secondary accent. Category labels, checkmarks, icon strokes, subtle highlights, alt-tint cast. |
| Ink | #202020 | Text on light. |
| Muted | #6B6B6B | Muted/secondary text. |
| Hairline | #E4E1DA | Borders, card edges, rules. |
| Copper-dark | #A8522A | Copper hover state. |
| Sage-dark | #57604F | Sage hover state. |
| Alt-tint | #EFECE5 | Alternating section tint (sits between off-white and hairline). |
| On-dark text | #F6F4EF | Headings on charcoal. |
| On-dark muted | #A9A59D | Body on charcoal. |

Hard rules: dominant background is warm off-white. Charcoal reserved for major sections. Copper never dominates — buttons, highlights, icons, active states, lines only. The site is never "orange".

### Typography (final)
- Headings: **Manrope** 700/800 (chosen over Plus Jakarta Sans — more compact at heavy weights). Tight tracking (-0.03em).
- Body: **Inter** 400/500, 1.6 line-height.
- Kickers/labels: Inter 600 uppercase, 0.14em tracking, 12-13px — copper on dark, charcoal or sage on light.
- Scale: hero display 52-64px desktop / H2 38-44 / H3 22-26 / body 17px.
- Strong hierarchy. Display lines bold, compact, uppercase where short ("WE FIX." style). Body headings sentence case.

### Hero copy direction (from Wellington's example)
Display: WE FIX. WE BUILD. WE IMPROVE.
Subline: Professional home improvement and handyman services across Johannesburg.

### Legacy notes (superseded)
Earlier draft tokens (Archivo, #FAF7F2, #B4753F, #55524E) are VOID. Phase 3 values rule. The anti-handyman constraints from Phase 2 remain in force (no yellow, no cartoon tools, no big radius, no heavy shadows/glass/gradients, restrained motion). Sage is the one new colour vs. the clone — it replaces the clone's pale-sage backgrounds with a proper accent role.

---

## PHASE 4 — Logo & Brand Assets (Wellington delivered JPG, vectorized)

### Source
Wellington's file: f208b88a-f188-4fcc-8c52-4225a6d3023e.jpg (640x640, flat art on #F7F7F7).
Copy kept at assets/logo-original.jpg.

### Logo palette (extracted from pixels — the JPG has ONLY these colours)
| Colour | Hex | Where |
|---|---|---|
| Chocolate brown | #693F26 | Roof peak blocks + all wordmark text |
| Terracotta | #D68546 | Lower roof slopes + upper-right accent wedges |
| Slate | #536A62 | Inner roof truss |
| Background | #F7F7F7 | (not a logo colour — replaced by transparent in SVG) |

Note: the "coral" accent some tools claim to see is actually terracotta wedges — verified by pixel extraction. Logo palette harmonizes with site tokens (terracotta ≈ copper #C56A32, slate ≈ sage #68745F).

### Produced assets (assets/)
- logo-light.svg — pixel-faithful vector rebuild (40 traced paths, evenodd holes). For off-white/light surfaces.
- logo-dark.svg — same geometry, chocolate #693F26 swapped to off-white #F6F4EF. For charcoal #171717 sections (header/footer variants).
- favicon.svg — emblem only (roof + truss, no wordmark), viewBox cropped 582x235. Works on both surfaces.
- logo-original.jpg — source reference.

### Fidelity verification (objective, pixel-level)
- Native 640px rasterize vs original mask: 1 missing pixel of 59,847 (0.002%).
- i-dot of "Construction" recovered (was dropped by size filter in v1).
- All variants visually verified on both #171717 and #F6F4EF.

### Usage rules
- Light surfaces (off-white #F6F4EF dominant bg): assets/logo-light.svg
- Charcoal surfaces (hero, CTA bands, footer): assets/logo-dark.svg
- Favicon: assets/favicon.svg (emblem reads at 16-32px)
- Never stretch, recolor, or drop-shadow the logo. Clear space = height of the "H" around all sides.
- Tooling kept at _vectorize.py (rebuilds SVGs from any replacement JPG Wellington drops in).

### Shape, spacing, elevation
- Corners: 2px on buttons/cards, 0px on image blocks. No big radius — brief bans huge rounded cards.
- Section padding: 96-120px desktop, 64px mobile.
- Elevation: flat design. Hairline borders, no drop shadows. On dark sections, 1px rgba(255,255,255,0.08) rules.
- Buttons: solid copper (primary), 1px outline off-white on dark / charcoal on light (secondary), 2px radius, 600 weight, uppercase 13px labels on nav CTAs optional.

### Imagery
- Editorial architecture photography: natural light, matte, high contrast, real Joburg homes (face-brick, mid-century, townhouses, estates).
- Avoid stocky posed-tradesman shots. Before/after pairs in gallery.
- Image treatment: full-bleed blocks, no rounded corners, thin hairline frame.

### Motion
- Subtle fade-up on scroll (once, 60-80px translate), 200-250ms hover states. Nothing else. No parallax gimmicks.

### What "handyman website" look means (and what we avoid instead)
Clone's pill badges / section rhythm / card anatomy are kept (they're good structure), but skin changes completely: no green/orange, no serif, no rounded-soft UI, flat + hairline + editorial photography + bold grotesque type.

---

## Content decisions log
- Business name: Home of Talent
- Hero display line: "Your Home. Done Properly." (master brief s.8)
- Hero subline: "Professional home improvement, repairs and maintenance services across Johannesburg."
- Positioning: locked in Phase 2
- Contact number: 083 745 0681 (+27837450681) — WhatsApp + calls. In site.ts (single config).
- Service line-up: 9 services per master brief s.10 (slugs in brief s.15)
- Copy rules: no invented facts, no testimonials, no copied clone content. Placeholders clearly marked.
