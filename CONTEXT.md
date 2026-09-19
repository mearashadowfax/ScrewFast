# ScrewFast domain glossary

Names for the concepts this codebase is built around. Use these terms in code, docs and reviews.

## Marketing site

The Astro pages under `src/pages/` (landing, services, contact, blog, products, insights) plus their French twins under `src/pages/fr/`. Distinct from the **Docs**, which are Starlight pages under `src/content/docs/` with their own locale handling.

## Marketing Locale

One of the languages the marketing site is published in: `en` (default, no URL prefix) or `fr` (`/fr/…`). Owned by `src/utils/locale.ts`, which is the only place that knows the locale list, how to resolve a locale from a request, how to localise a path, and how to find the same page in another locale. Exposed per request as `Astro.locals.locale`.

## Copy Table

The typed table of every user-facing string for one Marketing Locale (`src/copy/en.ts`, `src/copy/fr.ts`). The English table defines the shape (`Copy`); other locales must satisfy it, so a missing translation is a type error. Exposed per request as `Astro.locals.copy`. Logic keys on stable ids in the table (e.g. `badge: 'hiring'`), never on translated labels.

## View

The implementation of one route for any locale (`src/views/*View.astro`). Its interface is the locale (or a Content Entry, whose locale is its own). The route files in `src/pages/` and `src/pages/fr/` are one-line shells that render the view for their locale.

## Content Entry

A Markdown/MDX document in one of the localised collections (`blog`, `insights`, `products`), stored as `src/content/<collection>/<locale>/<slug>.md`. `src/utils/content.ts` owns the rule that an entry's id is `<locale>/<slug>`, the route each collection is served from, and each collection's default ordering; callers ask it for an entry's locale, slug, path and siblings.

## Page Metadata

Everything a page's `<head>` needs (title, description, Open Graph, canonical, hreflang alternates, schema.org JSON-LD), derived by `src/utils/metadata.ts` from the five things a page knows about itself: locale, path, title, description and **Page Kind** (`WebPage`, `BlogPosting`, `Article`, `Product`). Rendered by `Meta.astro`.

## Demo Form

A placeholder form in the template (contact, newsletter, sign-in/up/recover) that is not wired to a backend. `DemoForm.astro` owns the behaviour: it intercepts submit, validates, shows a locale-specific success message and resets.

## Icon

A named SVG glyph from `src/components/ui/icons/icons.ts`, holding geometry only. The call site decides size, colour (via `text-*` classes) and state classes. Names are typed (`IconName`).
