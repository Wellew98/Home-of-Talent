# Task: Bring the prototype's interactive progress components into the real site

## 1. Context

**Project:** Home of Talent — a premium Johannesburg home-improvement / handyman site.
**Repo root:** `C:\Users\DELL\OneDrive\Desktop\Home of Talent`
**Stack:** Next.js 16.3.1 (App Router, RSC) · React 19 · TypeScript strict · Tailwind CSS v4 · `motion` (Framer Motion successor) · lucide-react · deploys to Vercel.

The site is built and working. Ten services, ten area pages, ten guides, a quote form, full
SEO/schema. What it lacks is any use of the client's **real photography**, and any of the
interactive progress components that were designed and validated for it.

**Read these before writing any code:**

| File | Why |
|---|---|
| `prototype/home-of-talent-progress-components.html` | **The single most important file.** A complete, working, QA'd prototype of every component you are about to build. Open it, read the CSS and the `<script>` block in full, and interact with it in a browser. You are porting this, not reinventing it. |
| `PROJECT.md` | Design system, colour tokens, typography, motion rules, phase tracker |
| `master brief.md` | The client's locked brief. Sections 10, 13, 14, 25, 26, 27, 40, 45 are the binding ones here |
| `PHOTO-SHOT-LIST.md` | What photography exists and what is still missing |
| `src/data/services.ts`, `src/lib/images.ts` | Data shape you'll extend |
| `src/components/ui/ServiceCard.tsx` | Contains a `featured` variant added recently — follow its conventions |

---

## 2. The problem you are solving

The roofing service page (`/services/roofing`) was just added. It is the **only** page on the
site illustrated with genuine client photographs rather than stock. It currently renders
through the generic service template: hero, bullet list, a flat two-image grid, FAQ, CTA.

It is boring, and it wastes the one page where the site could prove the work is real.

Meanwhile the homepage `BeforeAfter` section still uses two unrelated stock images in a
drag-to-compare widget.

Your job is to build four reusable components from the prototype and deploy them across the
homepage, the roofing service page, and the projects section.

---

## 3. Components to build

Create these under `src/components/progress/`. All are `"use client"`. All must be **generic
and data-driven** — no hardcoded image paths, no page-specific logic inside them.

### 3.1 `StageScrubber.tsx` — the headline component

A horizontal track with N stops. Dragging moves continuously through the stages; the images
**crossfade** rather than cut; releasing snaps to the nearest stop with an eased animation.

```ts
type Stage = {
  image: StaticImageData;
  title: string;      // e.g. "Deck reinforced"
  caption: string;    // one line
  alt: string;
};

type StageScrubberProps = {
  stages: Stage[];          // 3–6
  badgeLabel?: string;      // default "Stage"
  className?: string;
  onDark?: boolean;         // switches rail/tick/knob colours
};
```

**Port these behaviours exactly from the prototype — do not re-derive them:**

- Continuous position `p ∈ [0, N-1]`. Every image is absolutely stacked; image `i` has
  `opacity = clamp(1 - |p - i|, 0, 1)`. This is what produces the crossfade.
- Snap-on-release uses an eased approach loop: `pos += (target - pos) * 0.24` per frame via
  `requestAnimationFrame`, settling when `|target - pos| < 0.002`.
- Pointer Events only (`pointerdown` / `pointermove` / `pointerup` / `pointercancel`) with
  `setPointerCapture`. The track needs `touch-action: none` so mobile drag doesn't scroll the
  page.
- Clicking anywhere on the track jumps to that position. Numbered tick dots (`01`, `02`, …)
  sit above the rail and fill copper up to the current stage.
- Prev / next buttons, disabled at the ends.
- Keyboard: `ArrowLeft`/`ArrowRight`/`ArrowUp`/`ArrowDown` step one stage, `Home`/`End` jump
  to the ends. Visible focus ring on the track.
- ARIA: `role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and a live
  `aria-valuetext` of the form `"Stage 3 of 5: Closing the circle"`.
- `prefers-reduced-motion: reduce` → skip the rAF easing entirely and jump straight to the
  target. No crossfade tween.

**Next.js specifics the prototype doesn't cover:**
- Use `next/image` with `fill` and a static import per stage. Wrap each in an absolutely
  positioned `<div>` and animate **the wrapper's** opacity, not the `<img>`.
- Give stage 0 `priority`; the rest default. Set `sizes="(min-width: 1024px) 1100px, 100vw"`.
- Reserve layout with a fixed `aspect-ratio` on the frame so there is no CLS.

### 3.2 `StageCompare.tsx` — the drag comparison

The two-image slider. This is the component the client specifically asked to see more of.

```ts
type StageCompareProps = {
  before: { image: StaticImageData; label: string; alt: string };
  after:  { image: StaticImageData; label: string; alt: string };
  aspect?: string;    // default "3/2"
  className?: string;
};
```

- Port `makeCompare()` from the prototype. Clip the top layer with
  `clipPath: inset(0 ${100 - p}% 0 0)`, clamp `p` to `[3, 97]`.
- Pointer drag, arrow-key support (±4%), `role="slider"` with `aria-valuenow`.
- Vertical divider line with a square grip (2px radius, per the brief's no-big-radius rule).
- Labels: left tag on charcoal, right tag on copper.

**Labelling rule — this matters.** Use "Before / After" **only** when both frames were shot
from the same camera position. When they weren't, label them "Stage 01 / Stage 02". The
component takes the labels as props precisely so the caller makes that call honestly.
Right now exactly one genuine matched pair exists.

### 3.3 `ToggleProjectCard.tsx` — cards that flip

An editorial card carrying two frames. Desktop hovers, mobile taps, keyboard activates with
Enter/Space. 450ms opacity crossfade.

```ts
type ToggleProjectCardProps = {
  a: StaticImageData; b: StaticImageData;
  altA: string; altB: string;
  category: string; title: string; meta: string;
  href?: string;
  flagLabel?: string;   // default "Hover / tap"
};
```

Card chrome must match the existing `ProjectCard.tsx` — hairline border, 2px radius, flat, no
drop shadows. The corner flag turns copper when flipped.

### 3.4 `RoofStrip.tsx` — full-bleed divider

A `100vw` letterboxed image band, `clamp(180px, 26vw, 330px)` tall, `object-cover`, no
border, no radius. Purely a palate cleanser between two heavy sections. Takes an image, an
alt, and an optional `priority` flag.

---

## 4. Where each one goes

### 4.1 Homepage — `src/app/page.tsx`

Current order: `Hero · TrustBar · ServicesGrid · FeaturedService · WhyUs · ProjectShowcase · BeforeAfter · ProcessSteps · FaqAccordion · CtaSection`

Changes:

1. **Delete `src/components/home/BeforeAfter.tsx`** and replace that slot with a new
   `src/components/home/BuildProgress.tsx` wrapping `StageScrubber`.
   - Charcoal section. Kicker `05 · On site`. Heading **"Watch it go up."**
   - Lede: explain that these are five photographs of one building over several months.
   - Five stages, in this order, from `prototype/home-of-talent-treated-photos.zip → stage-crops/`:

     | # | File | Title | Caption |
     |---|---|---|---|
     | 01 | `DS-11.jpg` | Setting out | Steel columns set, platform levelled. |
     | 02 | `DS-1.jpg` | Walls up | Block walls raised, timber shuttering braced. |
     | 03 | `DS-9.jpg` | Closing the circle | Walls closed and the steel roof spider set out. |
     | 04 | `DS-7.jpg` | Deck reinforced | Reinforcing tied across the full deck before the pour. |
     | 05 | `DS-4.jpg` | Slab poured | Suspended slab cast and floated. |

2. **Insert `RoofStrip`** between `WhyUs` (charcoal) and `ProjectShowcase` (off-white), using
   the finished sheet-metal roof. It breaks up two heavy sections.

3. **`ProjectShowcase.tsx`** — swap `ProjectCard` for `ToggleProjectCard` where a project has
   two frames. Also fix line ~22: the lede currently reads *"A selection of recent projects
   across Johannesburg"*, which is false for the real projects. Make it location-neutral until
   the client confirms actual locations.

4. **`Hero.tsx`** — swap the stock hero for the real one (carpenter setting trusses).

5. **`WhyUs.tsx`** — swap the stock tradesperson photo for the real roofer.

### 4.2 The roofing service page — the main event

`/services/roofing` must not render through the plain template. Extend
`src/app/services/[slug]/page.tsx` so a service can opt into a richer composition — do this
with a **data flag, not a slug check**. Add to the `Service` type:

```ts
richLayout?: boolean;   // renders the progress-component composition
```

When `richLayout` is true, compose:

```
ServiceHero
ServiceDetails            (features + typical projects — keep)
"How a roof goes on"      ← StageScrubber, 3 stages
RoofStrip                 ← full-bleed divider
"See the difference"      ← StageCompare, the one real matched pair
"Work in this category"   ← grid of ToggleProjectCards (replaces the flat 2-up)
ProcessSteps              (keep)
FAQ                       (keep)
CtaSection                (keep)
```

**"How a roof goes on" — read this carefully.** The three stage photos come from *three
different jobs*. Presenting them as one project would be a lie. Frame it honestly as an
explainer — heading "How a roof goes on", and a lede that states plainly the frames are from
different Home of Talent jobs. Done this way it is both truthful and genuinely useful to a
homeowner who doesn't know what they're paying for.

| # | Source | Title | Caption |
|---|---|---|---|
| 01 | `graded/P2-5.jpg` | Trusses up | Trusses set out, braced and levelled across the span. |
| 02 | `graded/P3-1.jpg` | Battens and underlay | Underlay and battens fixed — the layer that keeps water out. |
| 03 | `graded/P1-2.jpg` | Covering on | Sheeting closed up, ridging and flashing sealed. |

**StageCompare** uses `graded/P2-3.jpg` → `graded/P2-4.jpg`, the same red-brick house with
purlins going on and then tiles laid. Different viewpoints, so label them **"Stage 01 ·
Purlins"** and **"Stage 02 · Tiled"**, not Before/After.

**ToggleProjectCard grid** — three cards: the tiled hip roof (P2-3 → P2-4), the sheet-metal
roof (P1-3 → P1-2), and the re-roof (P3-1 → P3-2).

### 4.3 Projects

- Add `status: "in-progress" | "complete"` to the `Project` type in `src/data/projects.ts`.
- Replace the four placeholder projects with the real ones. The round double-storey is
  **in progress**, not complete — the photographs stop at the poured slab, so a "Completed"
  badge would be contradicted by the scrubber itself. Badge it "On site now" and make
  `StageScrubber` the centrepiece of its detail page.
- Every project's location is **unconfirmed**. Render "Location to confirm" or omit the field.
  Do not caption any of these as Johannesburg suburbs — they were not shot there.

---

## 5. Image assets

Three files already exist in `src/assets/images/`: `service-roofing.jpg`, `roof-trusses.jpg`,
`roof-sheeting.jpg`.

Everything else you need is in **`prototype/home-of-talent-treated-photos.zip`**:

- `graded/` — 19 photos with a consistent house colour grade already applied
- `stage-crops/` — the five build stages, pre-cropped to a matching 2.2:1 letterbox
- `grade.py` — the grading pipeline. **Re-run this on any new or replaced photo** so the set
  stays visually consistent. Do not hand-tune individual images.
- `clean.py` — crop / recede / vignette helpers

Unzip, copy what you need into `src/assets/images/` with descriptive kebab-case names
(`build-stage-01-setting-out.jpg`, `roof-underlay.jpg`, …), and register every one in
`src/lib/images.ts`. Static imports only — never `<img src="/...">`.

**Filenames must stay stable.** Some of these photos are going to be re-cleaned externally
(background shrubs and clutter removed) and dropped back in under the same names. Nothing in
the code should need to change when that happens.

---

## 6. Design system — non-negotiable

From `PROJECT.md`:

| Token | Hex | Role |
|---|---|---|
| charcoal | `#171717` | major sections |
| off-white | `#F6F4EF` | dominant background |
| copper | `#C56A32` | CTAs, active states, small highlights — **sparingly** |
| sage | `#68745F` | category labels, secondary accents |
| ink | `#202020` | text on light |
| muted | `#6B6B6B` | secondary text |
| hairline | `#E4E1DA` | borders |
| tint | `#EFECE5` | alternating section tint |

Type: **Manrope** 700/800 headings, tight `-0.03em` tracking · **Inter** 400/500 body ·
kickers Inter 600 uppercase `0.14em` at 12–13px.

Shape and motion: 2px radius on buttons and cards, 0px on image blocks. Flat — hairline
borders, no drop shadows. Section padding 96–120px desktop, 64px mobile. Transitions
200–250ms. Subtle fade-up on scroll, once.

**The brief explicitly bans:** bright construction yellow, cartoon tools, excessive
gradients, huge rounded cards, glassmorphism, excessive animation, emoji as icons, and
generic AI-looking layouts. Use lucide icons or inline SVG.

---

## 7. Honesty constraints — do not violate these

The client has been strict about this and it is the difference between the site working and
embarrassing him.

- **No invented business facts.** No years of experience, no testimonials, no client names,
  no guarantees, no licence or insurance or NHBRC claims. None have been confirmed.
- **No invented locations.** These photographs were not taken in Johannesburg suburbs.
  "Location to confirm" until the client says otherwise.
- **Nothing is "completed" unless a photograph shows it completed.**
- **"Before / After" only for matched viewpoints.** Otherwise "Stage 01 / Stage 02".
- The round double-storey has **not been identified** — it may not be a house. Do not
  describe it as a home, a residence, or a lodge. "Double-storey build" is safe.

---

## 8. Verification — required before you report done

1. `npx tsc --noEmit` — must be clean under `strict`.
2. `npm run build` — must exit 0. **The repo sits on a OneDrive-synced folder and the build
   is slow (several minutes). Let it finish; don't assume it has hung.**
3. `npm run start`, then check at **1440×900** and **390×844**:
   - Scrubber: drag it, click a tick, tab to it and use arrow keys. Images must crossfade,
     not cut. Release must snap.
   - Compare: drag it, arrow-key it.
   - Toggle cards: hover on desktop, tap on mobile, Enter on keyboard.
   - No horizontal overflow at 390px (`document.documentElement.scrollWidth === 390`).
   - No console errors, no hydration warnings.
4. Re-check with **reduced motion** on (DevTools → Rendering → Emulate
   `prefers-reduced-motion: reduce`). Everything must still be operable, just without tweens.
5. Lighthouse on `/` and `/services/roofing`. Performance is a known weak point at ~50 —
   **do not regress it.** Five stacked images in the scrubber is the main risk: only stage 0
   gets `priority`, set correct `sizes`, and keep the rendered dimensions modest.

---

## 9. Out of scope

Don't touch the quote form, the guides, the area pages, the schema/SEO, or the nine
non-roofing services. Don't add dependencies — `motion` and `lucide-react` are already there
and are enough. Don't refactor anything you weren't asked to.

---

## 10. Definition of done

- Four reusable components under `src/components/progress/`, each generic and typed.
- `BeforeAfter.tsx` deleted; `BuildProgress.tsx` in its place on the homepage.
- `/services/roofing` renders the rich composition via the `richLayout` data flag.
- Real photography on the hero, the Why Us section, and both project grids.
- The round double-storey exists as an in-progress project with the scrubber as its centrepiece.
- Typecheck clean, build green, both breakpoints verified, reduced motion verified,
  Lighthouse not regressed.
- A short summary of what changed and anything you deliberately left alone.
