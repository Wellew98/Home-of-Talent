# Home of Talent

Premium Johannesburg home-improvement brand. Professional home improvements,
repairs and maintenance for Johannesburg homes.

Built with Next.js 16 (App Router, TypeScript, Tailwind CSS v4).

## Stack

- **Framework:** Next.js 16.3+, React 19
- **Styling:** Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- **Animation:** CSS reveals (server-rendered, zero JS cost)
- **Icons:** lucide-react
- **QA:** Playwright (mobile viewport matrix + interaction tests)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build
```

## Project structure

```
src/
  app/              # routes: /, /services, /projects, /areas, /guides, /quote, /about
  components/
    home/           # homepage sections
    layout/         # header, footer, sticky mobile bar
    services/       # service page sections
    ui/             # shared primitives
    seo/            # JSON-LD schemas
  data/             # services, locations, projects, guides, faqs (single sources)
  lib/              # site.ts (contact config), images.ts (build-time image imports)
  assets/images/    # editorial photography (placeholder Pexels, see IMAGE-SOURCES.md)
```

## Key conventions

- **Contact details:** ONE place — `src/lib/site.ts`. Every phone/WhatsApp link
  on the site reads from here.
- **Business facts:** nothing is invented. Placeholders are clearly marked.
  Real project photos, team details, NHBRC/insurance info replace them when supplied.
- **Conversion:** every CTA pair is Get a Free Quote + WhatsApp. The quote form
  delivers via WhatsApp deep-link (v1, no backend).
- **Copy rules:** no copied competitor content; Joburg-local knowledge only.
