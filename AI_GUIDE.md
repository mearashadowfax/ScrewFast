# ScrewFast AI Guide

For AI assistants (Cursor, Copilot, Claude, ChatGPT): this file describes project structure, conventions, and where to find or add code. See [README.md](README.md) for human-facing setup and features, and [CONTEXT.md](CONTEXT.md) for the names of the main modules.

## Project Overview

ScrewFast is an Astro + Tailwind CSS + Preline UI template for landing pages, blogs, documentation, and product/content pages. Stack: Astro 7, Tailwind v4 (via `@tailwindcss/vite`), Preline (modals, accordions), Starlight (docs), Lenis (smooth scroll), GSAP (animations).

Marketing site locales: **en** and **fr**. Routes live under `src/pages/` and `src/pages/fr/`, but each route file is a one-line shell around a shared view in `src/views/` that takes the locale as a prop. Everything locale-related lives in [`src/utils/locale.ts`](src/utils/locale.ts); the current locale and its copy table are on `Astro.locals.locale` / `Astro.locals.copy` (set by [`src/middleware.ts`](src/middleware.ts)). Never parse `/fr` out of a pathname or hard-code a locale prefix elsewhere.

Docs (Starlight) locales: en, de, es, fa, fr, ja, zh-cn. Guides and welcome are translated; `construction/`, `tools/`, and `advanced/` fall back to English for non-root locales.

## Path Aliases

Use these imports so paths stay correct and consistent:

| Alias           | Resolves to            |
| --------------- | ---------------------- |
| `@/*`           | `src/*`                |
| `@components/*` | `src/components/*`     |
| `@content/*`    | `src/content/*`        |
| `@data/*`       | `src/data_files/*`     |
| `@images/*`     | `src/images/*`         |
| `@scripts/*`    | `src/assets/scripts/*` |
| `@styles/*`     | `src/assets/styles/*`  |
| `@utils/*`      | `src/utils/*`          |
| `@views/*`      | `src/views/*`          |

Example: `import { SITE } from "@data/constants";` – do not use `@/data_files/constants`.

Defined in [tsconfig.json](tsconfig.json).

## Key Folders

| Purpose                 | Path                               | Notes                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reusable UI & sections  | [src/components/](src/components/) | `sections/` for landing, features, navbar&footer, testimonials, pricing, misc; `ui/` for buttons, cards, forms, icons, etc.                                                                                                                                                                                                                                    |
| Layout                  | [src/layouts/](src/layouts/)       | [MainLayout.astro](src/layouts/MainLayout.astro) wraps Navbar, main slot, FooterSection and builds the whole `<head>` from `title`/`description`/`ogTitle`/`kind`.                                                                                                                                                                                             |
| Views                   | [src/views/](src/views/)           | One `.astro` per route (`HomeView`, `ServicesView`, `BlogPostView`, …). Interface: `locale` (or a content entry, whose locale is its own). All page copy comes from `src/copy/`.                                                                                                                                                                               |
| Pages                   | [src/pages/](src/pages/)           | Astro file-based routing; `fr/` mirrors it. Each file renders a view for its locale; `[id]` routes get `getStaticPaths` from `staticPathsFor()` in `@utils/content`.                                                                                                                                                                                           |
| Copy tables             | [src/copy/](src/copy/)             | `en.ts` defines the shape (`Copy`); `fr.ts` must match it or `astro check` fails. Every UI and page string lives here. Read via `Astro.locals.copy` or `getCopy(locale)`.                                                                                                                                                                                      |
| Content (collections)   | [src/content/](src/content/)       | `blog/`, `products/`, `insights/` with `en/` and `fr/` subfolders; `docs/` for Starlight. Use `entriesFor()`, `pathFor()`, `localeOf()` from [`src/utils/content.ts`](src/utils/content.ts), never parse `entry.id`.                                                                                                                                           |
| Static assets           | [public/](public/)                 | Served as-is.                                                                                                                                                                                                                                                                                                                                                  |
| Utilities               | [src/utils/](src/utils/)           | [locale.ts](src/utils/locale.ts) (locales, `resolveLocale`, `localePath`, `alternatePaths`), [content.ts](src/utils/content.ts), [metadata.ts](src/utils/metadata.ts) (`buildPageMetadata`), [utils.ts](src/utils/utils.ts).                                                                                                                                   |
| Site config & JSON data | [src/data_files/](src/data_files/) | [constants.ts](src/data_files/constants.ts): SITE, OG image, partnersData; [navigation.ts](src/data_files/navigation.ts) (nav/footer ids + paths, social URLs) and [mega_link.ts](src/data_files/mega_link.ts) (mega-menu ids/icons/URLs) — their labels live in `copy.nav`; faqs.json, features.json, pricing.json with `fr/` twins (exposed as `copy.data`). |
| Styles & scripts        | [src/assets/](src/assets/)         | `styles/` (global.css, lenis.css, starlight); `scripts/` e.g. [lenisSmoothScroll.js](src/assets/scripts/lenisSmoothScroll.js), [demoForms.ts](src/assets/scripts/demoForms.ts).                                                                                                                                                                                |
| Images (imported)       | [src/images/](src/images/)         | Use with `@images/`; processed by Astro.                                                                                                                                                                                                                                                                                                                       |

## Layout and Main Components

- **MainLayout** ([MainLayout.astro](src/layouts/MainLayout.astro)): Props `title?` (without site suffix), `description?`, `ogTitle?`, `section?` (OG title becomes `title | section | site`), `kind?` (`WebPage` | `BlogPosting` | `Article` | `Product`), `hideFooter?`. Passes them to `buildPageMetadata()` which produces title, description, OG/Twitter, canonical, hreflang and JSON-LD; [Meta.astro](src/components/Meta.astro) renders that plus favicons/manifest. Pages never hand-write schema.org objects.
- **Homepage** ([HomeView.astro](src/views/HomeView.astro)): Composes AnnouncementBanner, HeroSection, ClientsSection, FeaturesGeneral, FeaturesNavs, TestimonialsSection, PricingSection, FAQ; copy from `getCopy(locale).home`, JSON data from `copy.data`.
- **Icons** ([Icon.astro](src/components/ui/icons/Icon.astro)): `<Icon name="…" class="…" />`. `name` is typed (`IconName`); [icons.ts](src/components/ui/icons/icons.ts) holds geometry only, so size/colour/state classes are passed by the caller (colour with `text-*`).
- **404**: `NotFoundView` is built at `/404` (en) and `/fr/404/` (fr); `vercel.json` rewrites missing `/fr/…` paths to the French one.
- **Navbars**: `Navbar.astro` is used by MainLayout; `NavbarMegaMenu.astro` (mega menu on the Services link, links in `@data/mega_link`) is an alternative — swap the import in MainLayout to use it. Optional modules like this are template features even when nothing imports them; do not delete them.
- **Demo forms** ([DemoForm.astro](src/components/ui/forms/DemoForm.astro)): wrap placeholder forms in `<DemoForm successMessage={…}>`; it owns the submit interception and status element. Do not emit `data-demo-*` attributes by hand.

## Conventions

- **Locale:** `Astro.locals.locale` / `Astro.locals.copy` (set by the middleware from the URL) are the single source; MainLayout, Navbar, Footer and every leaf read them. Views receive `locale` as a prop only so the route shells are explicit; it always equals `Astro.locals.locale`. Build links with `localePath(locale, '/products')`.
- **Copy:** no user-facing strings in components or views; add a key to `src/copy/en.ts` and `src/copy/fr.ts`. Structure (paths, ids, URLs) lives in `src/data_files/`, labels in copy keyed by id; keys, not translated labels, drive logic (e.g. `badge: 'hiring'`).
- **Content URLs:** `pathFor(entry)` from `@utils/content`; cards take an entry and nothing else.
- **Styling:** Tailwind CSS only; use **Tailwind v4** syntax (refer to Tailwind v4 docs).
- **Interactive UI:** Preline for modals, dropdowns, accordions (script loaded in MainLayout).
- **Smooth scroll:** Lenis via [lenisSmoothScroll.js](src/assets/scripts/lenisSmoothScroll.js).
- **Content collections:** Schemas in [content.config.ts](src/content.config.ts) (blog, products, insights, docs).

## Development Commands

- `pnpm dev` – run dev server
- `pnpm build` – typecheck (`astro check`), build, then HTML processing ([process-html.mjs](process-html.mjs))
- `pnpm preview` – preview production build
- `pnpm test:smoke` – serve `dist/` and check every marketing route in both locales ([scripts/smoke.mjs](scripts/smoke.mjs))

## Recommendations for AI

- Use **path aliases** (`@components`, `@data`, `@images`, `@views`, etc.) in suggested code.
- To change a page, edit its view in [src/views/](src/views/) and its strings in [src/copy/](src/copy/); do not duplicate a page into `src/pages/fr/`.
- To add a locale: extend `MARKETING_LOCALES` and `LOCALE_INFO` in `locale.ts`, add `src/copy/<locale>.ts`, add `src/pages/<locale>/` shells, add content under `src/content/*/<locale>/`.
- Put new reusable components under [src/components/](src/components/) (choose `sections/` or `ui/` by purpose).
- Add or edit content in [src/content/](src/content/) and respect [content.config.ts](src/content.config.ts) schemas.
- Use **Tailwind v4** only; do not use Tailwind v3 syntax.
