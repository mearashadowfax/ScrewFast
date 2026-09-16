# ScrewFast

![ScrewFast landing page](https://github.com/mearashadowfax/ScrewFast/assets/125820963/cdf299bd-414a-4a2d-baf0-d188bb4709c7)

ScrewFast is an open-source website template built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [Preline UI](https://preline.co/). You get a landing page, blog, product pages, and a full documentation site in one repo, so you can launch a complete web presence by editing content and props instead of building pages from scratch. Unlike single-purpose landing or blog themes, it ships with SEO metadata, i18n, security headers, and CI already wired up.

Live demo: [screwfast.uk](https://screwfast.uk)

- **Four site types in one.** Landing page, blog, product catalog, and [Starlight](https://starlight.astro.build/) docs, all sharing one layout, navbar, and footer.
- **79 ready-made components.** 19 page sections (hero, features, pricing, testimonials, FAQ, mega menu) and 57 UI pieces (cards, forms, modals, buttons, icons).
- **Multilingual out of the box.** English and French marketing pages; docs in 7 languages (en, de, es, fa, fr, ja, zh-CN) with RTL support.
- **SEO handled.** Centralized title/description/Open Graph config, JSON-LD structured data, generated sitemap and `robots.txt`.
- **Production-hardened.** Content Security Policy and other security headers via `vercel.json`, post-build HTML minification, and a CI pipeline that type-checks, builds, and smoke-tests every push.
- **Current stack.** Astro 7, Tailwind CSS 4, Preline 5, TypeScript 6. Dependabot keeps it that way.
- **AI-assistant friendly.** [`AI_GUIDE.md`](AI_GUIDE.md) tells Cursor, Copilot, and Claude where things live and which conventions to follow.
- **MIT licensed.** 1.4k stars and 380+ forks on GitHub.

Pages are composed from sections with plain props:

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import HeroSection from '@components/sections/landing/HeroSection.astro';
---

<MainLayout title="Acme Tools">
  <HeroSection
    title="Equip Your Projects with Acme"
    subTitle="Top-quality hardware tools for every project need."
    primaryBtn="Start Exploring"
    primaryBtnURL="/products"
  />
</MainLayout>
<!-- Renders a full page with navbar, hero, and footer -->
```

---

## Table of Contents

- [Getting Started](#getting-started)
- [Make It Yours](#make-it-yours)
  - [Site name, SEO, and Open Graph](#site-name-seo-and-open-graph)
  - [Navigation and footer](#navigation-and-footer)
  - [Pages and sections](#pages-and-sections)
  - [Blog, products, and insights](#blog-products-and-insights)
  - [Documentation (Starlight)](#documentation-starlight)
  - [Languages](#languages)
  - [Icons](#icons)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Under the Hood](#under-the-hood)
  - [Smooth scrolling (Lenis)](#smooth-scrolling-lenis)
  - [Animations (GSAP)](#animations-gsap)
  - [Hidden scrollbar](#hidden-scrollbar)
  - [SEO and structured data](#seo-and-structured-data)
  - [robots.txt and sitemap](#robotstxt-and-sitemap)
  - [Markdown, MDX, and image pasting](#markdown-mdx-and-image-pasting)
  - [HTML minification](#html-minification)
  - [Security headers](#security-headers)
  - [Formatting](#formatting)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

You need **Node.js 22** and **pnpm 9 or newer** (the versions CI uses).

**1. Create your repo.** Click **Use this template** at the top of the [GitHub page](https://github.com/mearashadowfax/ScrewFast), or clone directly:

```bash
git clone https://github.com/mearashadowfax/ScrewFast.git my-site
cd my-site
```

**2. Install dependencies:**

```bash
pnpm install
```

**3. Start the dev server:**

```bash
pnpm dev
```

Open <http://localhost:4321>. Edits to any file reload the page.

**4. Build for production:**

```bash
pnpm build
```

This runs `astro check` (type-checking), builds the site into `dist/`, and minifies the HTML. Preview the result with `pnpm preview`, or run `pnpm test:smoke` to serve `dist/` and verify the key routes respond.

> [!TIP]
> Only need one language? The [`monolingual-site`](https://github.com/mearashadowfax/ScrewFast/tree/monolingual-site) branch has the French pages and i18n plumbing removed.

---

## Make It Yours

### Site name, SEO, and Open Graph

Everything site-wide lives in [`src/data_files/constants.ts`](src/data_files/constants.ts):

```ts
export const SITE = {
  title: 'ScrewFast',
  tagline: 'Top-quality Hardware Tools',
  description: '...',
  url: 'https://screwfast.uk',
  author: 'Emil Gulamov',
};

export const SEO = { title: SITE.title, description: SITE.description, structuredData: { ... } };
export const OG = { locale: 'en_US', type: 'website', title: `${SITE.title}: ...`, image: ogImageSrc, ... };
```

Change `SITE`, and the `<Meta>` component picks it up on every page. Also update `site` in [`astro.config.mjs`](astro.config.mjs) so the sitemap and `robots.txt` point at your domain.

### Navigation and footer

Edit [`src/utils/navigation.ts`](src/utils/navigation.ts) (and [`src/utils/fr/navigation.ts`](src/utils/fr/navigation.ts) for French):

```ts
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/products' },
  { name: 'Blog', url: '/blog' },
];

const footerLinks = [
  { section: 'Ecosystem', links: [{ name: 'Documentation', url: '/welcome-to-docs/' }] },
  { section: 'Company', links: [{ name: 'About us', url: '#' }] },
];

const socialLinks = { facebook: '#', x: '#', github: '#', ... };
```

Two navbars are included in `src/components/sections/navbar&footer/`: `Navbar.astro` (standard) and `NavbarMegaMenu.astro` (mega menu, links in `src/data_files/mega_link.ts`). Swap them in [`src/layouts/MainLayout.astro`](src/layouts/MainLayout.astro).

![ScrewFast mega menu](https://github.com/user-attachments/assets/690482af-f1a4-4ebf-be58-eca0b5862973)

### Pages and sections

Pages in `src/pages/` compose sections from `src/components/sections/` and pass content as props, exactly like the example above. Open [`src/pages/index.astro`](src/pages/index.astro) to see the full homepage, then edit the props or remove sections you don't need.

Sections take all their copy as props, so page files are the single place to edit text. Reusable data such as FAQs, features, and pricing tiers lives as JSON in `src/data_files/` and is passed in the same way.

### Blog, products, and insights

Content is Markdown/MDX in `src/content/{blog,products,insights}/{en,fr}/`. Schemas are defined in [`src/content.config.ts`](src/content.config.ts). A blog post looks like:

```md
---
title: "Maximizing Efficiency with ScrewFast's Cutting-Edge Tools"
description: 'Innovating Construction Efficiency with Precision Tools & Support'
author: 'Jacob'
authorImage: '@/images/blog/jacob.avif'
pubDate: 2024-02-06
cardImage: '@/images/blog/post-1.avif'
readTime: 4
tags: ['tools', 'construction', 'workflow']
---

Post body here.
```

Blog posts get social share buttons, a `localStorage` bookmark button, and a feedback widget (UI only, no back end). Insight pages get a table of contents with a scroll-progress indicator.

### Documentation (Starlight)

Docs live in `src/content/docs/` and are served by [Starlight](https://starlight.astro.build/) at `/welcome-to-docs/`. Sidebar, locales, and custom components are configured in the `starlight()` block of [`astro.config.mjs`](astro.config.mjs). Starlight brings search, dark mode, code highlighting, and responsive navigation.

> [!IMPORTANT]
> If the docs sidebar won't scroll, remove the Lenis `<script>` from `src/components/ui/starlight/Head.astro`.

### Languages

Marketing pages are file-based: `src/pages/` for English, `src/pages/fr/` for French. A `LanguagePicker` component switches between them. Use `getMarketingLocale()` from [`src/utils/locale.ts`](src/utils/locale.ts) when you need the current locale in a component. Docs locales are configured in Starlight; guides and the welcome page are translated, other docs sections fall back to English.

### Icons

SVG icons are centralized in [`src/components/ui/icons/icons.ts`](src/components/ui/icons/icons.ts) (38 included). Render one with:

```astro
<Icon name="tools" />
```

Add an entry to `icons.ts` to register a new icon.

---

## Deployment

`pnpm build` produces a static site in `dist/` that any static host can serve.

- **Vercel:** [Deploy with Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmearashadowfax%2FScrewFast). The included [`vercel.json`](vercel.json) adds security headers and caching rules.
- **Netlify:** [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/mearashadowfax/ScrewFast).

---

## Project Structure

```
src/
├── assets/
│   ├── scripts/            # Lenis smooth scroll, demo form handlers
│   └── styles/             # global.css, lenis.css, Starlight overrides
├── components/
│   ├── Meta.astro          # SEO, Open Graph, JSON-LD
│   ├── ThemeIcon.astro     # Light/dark toggle
│   ├── sections/           # Page sections: landing, features, pricing, navbar&footer, ...
│   └── ui/                 # Buttons, cards, forms, icons, banners, ...
├── content/
│   ├── blog/  products/  insights/   # en/ and fr/ subfolders
│   └── docs/                          # Starlight docs + translated locales
├── data_files/             # constants.ts (SITE/SEO/OG), faqs.json, features.json, pricing.json
├── images/                 # Imported and optimized by Astro
├── layouts/
│   └── MainLayout.astro    # Navbar + slot + footer, Meta, Lenis, Preline
├── pages/                  # File-based routes; fr/ for French
│   ├── index.astro  blog/  products/  insights/  contact.astro  services.astro
│   ├── 404.astro
│   └── robots.txt.ts  manifest.json.ts  favicon.ico.ts
├── utils/                  # navigation.ts, locale.ts, helpers
└── content.config.ts       # Content collection schemas

public/                     # Served as-is
process-html.mjs            # Post-build HTML minifier
scripts/smoke.mjs           # Serves dist/ and checks key routes
vercel.json                 # Security headers and caching
AI_GUIDE.md                 # Conventions for AI coding assistants
```

Path aliases (`@components/*`, `@data/*`, `@images/*`, `@scripts/*`, `@styles/*`, `@utils/*`, `@/*`) are defined in [`tsconfig.json`](tsconfig.json).

---

## Under the Hood

### Smooth scrolling (Lenis)

[Lenis](https://lenis.dev/) is loaded from `src/assets/scripts/lenisSmoothScroll.js` in `MainLayout.astro` and in `src/components/ui/starlight/Head.astro`. Smooth scrolling can affect accessibility and performance on some devices, so test it with your audience.

To go back to native scrolling, delete this from both files:

```astro
<script>
  import '@scripts/lenisSmoothScroll.js';
</script>
```

### Animations (GSAP)

[GSAP](https://gsap.com/) animates product and insight detail pages on load. The setup is in the `<script>` blocks of `src/components/sections/products/ProductDetail.astro` and `src/components/sections/insights/InsightDetail.astro`. Tweak the `gsap.from()` calls, or delete the script blocks to drop GSAP.

### Hidden scrollbar

The scrollbar is hidden for a cleaner look. This can hurt usability for some users; to restore it, remove the `scrollbar-hide` class from `<html>` in `MainLayout.astro` and delete the `.scrollbar-hide` styles at the bottom of that file. For styled scrollbars, [tailwind-scrollbar](https://adoxography.github.io/tailwind-scrollbar/) is a good fit.

### SEO and structured data

`MainLayout` passes `title`, `meta`, `structuredData`, `customDescription`, and `customOgTitle` to [`Meta.astro`](src/components/Meta.astro), falling back to `constants.ts` when a page doesn't override them:

```astro
---
import { SITE } from '@data/constants';
---

<MainLayout
  title={`Example Page | ${SITE.title}`}
  structuredData={{
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Example Page',
    url: `${SITE.url}/example`,
  }}
>
  ...
</MainLayout>
```

Add more tags to `Meta.astro` (article dates, Twitter-specific fields) if you need them, or swap in an integration like [astro-seo](https://github.com/jonasmerlin/astro-seo).

### robots.txt and sitemap

[`src/pages/robots.txt.ts`](src/pages/robots.txt.ts) generates `robots.txt` at build time and links to the sitemap produced by `@astrojs/sitemap`. Both derive the domain from `site` in `astro.config.mjs`.

### Markdown, MDX, and image pasting

`@astrojs/mdx` is enabled, so content files can be `.md` or `.mdx`. The included [`.vscode/settings.json`](.vscode/settings.json) lets you paste or drag an image into a content file while holding <kbd>Shift</kbd>: VS Code copies it to `src/images/content/<file-name>/` and inserts the Markdown link.

### HTML minification

`pnpm build` finishes by running [`process-html.mjs`](process-html.mjs), which minifies every HTML file in the build output with `html-minifier-terser`.

### Security headers

[`vercel.json`](vercel.json) sets `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and caching headers. Adjust the CSP if you add third-party scripts or image hosts.

### Formatting

Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss` (class sorting) is configured in [`.prettierrc`](.prettierrc). Run `pnpm format:fix` locally; CI runs `pnpm format:check`.

---

## Contributing

- **Bugs and ideas:** open an [issue](https://github.com/mearashadowfax/ScrewFast/issues) or start a [discussion](https://github.com/mearashadowfax/ScrewFast/discussions/new/choose).
- **Pull requests:** welcome. Run `pnpm format:fix` and `pnpm build` before submitting.

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## License

MIT. See [LICENSE](LICENSE).

The company, products, and logos shown are fictional or used for demonstration only and should be replaced in your site.
