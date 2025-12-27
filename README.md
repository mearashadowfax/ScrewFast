# i18n-prototype Branch

This branch contains a prototype implementation of full internationalization (i18n) support across the main site, including:

- Multilingual support for 7 languages (en, fr, de, es, fa, ja, zh-cn)
- Language-prefixed URLs (e.g., `/en/`, `/fr/`)
- Localized content for blog posts, product pages, landing, services, and contact pages
- Navigation and routing updated to respect language context

## Status

This branch was created from PR [#454](https://github.com/mearashadowfax/ScrewFast/pull/454) and is **not merged into the `main` branch**.

It was archived because the main site is only intended to demonstrate limited bilingual support (English and French), and this implementation exceeded the current project scope.

However, the work here may be useful in the future or for contributors interested in extending the i18n support.

## How to Use

If you'd like to implement full multilingual support on top of the current site, this branch is a great starting point.

You can:
- Cherry-pick components or structure from this branch
- Use the `astro.config.mjs` setup as a reference
- Review `src/pages`, `src/content`, and `src/components` to see how language-specific logic is implemented

## Credits

Originally contributed by [@michaelgiraldo](https://github.com/michaelgiraldo) in PR #454.
