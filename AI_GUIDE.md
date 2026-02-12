# ScrewFast AI Guide

For AI assistants (Cursor, Copilot, Claude, ChatGPT): this file describes project structure, conventions, and where to find or add code. See [README.md](README.md) for human-facing setup and features.

## Project Overview

ScrewFast is an Astro + Tailwind CSS + Preline UI template for landing pages, blogs, documentation, and product/content pages. Stack: Astro 5, Tailwind v4 (via `@tailwindcss/vite`), Preline (modals, accordions), Starlight (docs), Lenis (smooth scroll), GSAP (animations).

## Path Aliases

Use these imports so paths stay correct and consistent:

| Alias | Resolves to |
|-------|--------------|
| `@/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@content/*` | `src/content/*` |
| `@data/*` | `src/data_files/*` |
| `@images/*` | `src/images/*` |
| `@scripts/*` | `src/assets/scripts/*` |
| `@styles/*` | `src/assets/styles/*` |
| `@utils/*` | `src/utils/*` |

Example: `import { SITE } from "@data/constants";` — do not use `@/data_files/constants`.

Defined in [tsconfig.json](tsconfig.json).

## Key Folders

| Purpose | Path | Notes |
|---------|------|--------|
| Reusable UI & sections | [src/components/](src/components/) | `sections/` for landing, features, navbar&footer, testimonials, pricing, misc; `ui/` for buttons, cards, forms, icons, etc. |
| Layout | [src/layouts/](src/layouts/) | [MainLayout.astro](src/layouts/MainLayout.astro) wraps Navbar, main slot, FooterSection. |
| Pages | [src/pages/](src/pages/) | Astro file-based routing; `fr/` for French locale. |
| Content (collections) | [src/content/](src/content/) | `blog/`, `products/`, `insights/`; `docs/` for Starlight (i18n subdirs: guides, construction, tools, advanced, de, es, fa, fr, ja, zh-cn). |
| Static assets | [public/](public/) | Served as-is. |
| Navigation & UI helpers | [src/utils/](src/utils/) | [navigation.ts](src/utils/navigation.ts) exports default `{ navBarLinks, footerLinks, socialLinks }`; [fr/navigation.ts](src/utils/fr/navigation.ts) for French. Navbar/Footer use `Astro.currentLocale` to pick strings. |
| Site config & JSON data | [src/data_files/](src/data_files/) | [constants.ts](src/data_files/constants.ts): SITE, SEO, OG, partnersData; faqs.json, features.json, pricing.json, mega_link.ts; `fr/` for localized JSON. |
| Styles & scripts | [src/assets/](src/assets/) | `styles/` (global.css, lenis.css, starlight); `scripts/` e.g. [lenisSmoothScroll.js](src/assets/scripts/lenisSmoothScroll.js). |
| Images (imported) | [src/images/](src/images/) | Use with `@images/`; processed by Astro. |

## Layout and Main Components

- **MainLayout** ([MainLayout.astro](src/layouts/MainLayout.astro)): Props `title`, `meta`, `structuredData`, `lang`, `customDescription`, `customOgTitle`. Imports Meta, Navbar, FooterSection; includes Preline script and Lenis. Pages use `<MainLayout>…</MainLayout>` with content as default slot.
- **Homepage** ([src/pages/index.astro](src/pages/index.astro)): Composes AnnouncementBanner, HeroSection, ClientsSection, FeaturesGeneral, FeaturesNavs, TestimonialsSection, PricingSection, FAQ; data from `@data/*` and [constants.ts](src/data_files/constants.ts) (e.g. partnersData).
- **SEO**: [Meta.astro](src/components/Meta.astro) uses SITE/SEO/OG from `@data/constants`; per-page overrides via MainLayout props.

## Conventions

- **Props:** Passed inline in page files (see [index.astro](src/pages/index.astro)); no global state.
- **Styling:** Tailwind CSS only; use **Tailwind v4** syntax (refer to Tailwind v4 docs).
- **Interactive UI:** Preline for modals, dropdowns, accordions (script loaded in MainLayout).
- **Smooth scroll:** Lenis via [lenisSmoothScroll.js](src/assets/scripts/lenisSmoothScroll.js).
- **Content collections:** Schemas in [content.config.ts](src/content.config.ts) (blog, products, insights, docs); use `getCollection('blog')` etc. in pages.

## Development Commands

- `pnpm dev` — run dev server
- `pnpm build` — typecheck (`astro check`), build, then HTML processing ([process-html.mjs](process-html.mjs))
- `pnpm preview` — preview production build

## Recommendations for AI

- Use **path aliases** (`@components`, `@data`, `@images`, etc.) in suggested code.
- Put new reusable components under [src/components/](src/components/) (choose `sections/` or `ui/` by purpose).
- Add or edit content in [src/content/](src/content/) and respect [content.config.ts](src/content.config.ts) schemas.
- Follow [MainLayout.astro](src/layouts/MainLayout.astro) for layout and Meta/SEO.
- Use **Tailwind v4** only; do not use Tailwind v3 syntax.
- Navigation/footer copy: edit [src/utils/navigation.ts](src/utils/navigation.ts) (and [src/utils/fr/navigation.ts](src/utils/fr/navigation.ts) for French); Navbar/Footer receive the default export as `strings`.
