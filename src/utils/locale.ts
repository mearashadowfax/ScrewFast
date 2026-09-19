/**
 * Marketing-site locale module.
 *
 * Owns everything the marketing pages (`src/pages/` and `src/pages/fr/`)
 * need to know about locales: which ones exist, how to resolve the current
 * one from a request, how to localise a path, and how to find the same page
 * in another locale. Nothing else in the codebase should parse `/fr` out of
 * a pathname or hard-code a locale prefix.
 *
 * Docs (Starlight) have their own locale handling; this module is not used
 * there.
 *
 * Every function here is pure so it can be unit-tested without Astro.
 */

export const MARKETING_LOCALES = ['en', 'fr'] as const;
export type MarketingLocale = (typeof MARKETING_LOCALES)[number];

export const DEFAULT_LOCALE: MarketingLocale = 'en';

/** Locales that carry a URL prefix (every locale except the default). */
const PREFIXED_LOCALES: readonly MarketingLocale[] = MARKETING_LOCALES.filter(
  locale => locale !== DEFAULT_LOCALE
);

/** Per-locale constants: display label, language tags and Intl tag. */
export const LOCALE_INFO: Record<
  MarketingLocale,
  {
    /** Human label for the language picker. */
    label: string;
    /** `<html lang>` and `hreflang` value. */
    lang: string;
    /** `og:locale` value. */
    ogLocale: string;
    /** schema.org `inLanguage` value. */
    inLanguage: string;
    /** BCP 47 tag for `Intl` formatting. */
    intl: string;
  }
> = {
  en: {
    label: 'English',
    lang: 'en',
    ogLocale: 'en_US',
    inLanguage: 'en-US',
    intl: 'en-US',
  },
  fr: {
    label: 'Français',
    lang: 'fr',
    ogLocale: 'fr_FR',
    inLanguage: 'fr',
    intl: 'fr-FR',
  },
};

export function isMarketingLocale(value: unknown): value is MarketingLocale {
  return (
    typeof value === 'string' &&
    (MARKETING_LOCALES as readonly string[]).includes(value)
  );
}

/**
 * Split a pathname into the locale it is prefixed with and the rest of the
 * path. The default locale has no prefix.
 *
 *   '/fr/blog/post-1/' -> { locale: 'fr', path: '/blog/post-1/' }
 *   '/fr'              -> { locale: 'fr', path: '/' }
 *   '/blog/'           -> { locale: 'en', path: '/blog/' }
 */
export function splitLocale(pathname: string): {
  locale: MarketingLocale;
  path: string;
} {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  for (const locale of PREFIXED_LOCALES) {
    const prefix = `/${locale}`;
    if (normalized === prefix) return { locale, path: '/' };
    if (normalized.startsWith(`${prefix}/`)) {
      return { locale, path: normalized.slice(prefix.length) };
    }
  }
  return { locale: DEFAULT_LOCALE, path: normalized };
}

/**
 * Resolve the locale of the current request. The pathname is authoritative
 * for marketing pages; `Astro.currentLocale` (driven by Starlight's i18n
 * config) is only a fallback.
 */
export function resolveLocale(
  pathname: string,
  currentLocale?: string | undefined
): MarketingLocale {
  const { locale } = splitLocale(pathname);
  if (locale !== DEFAULT_LOCALE) return locale;
  if (isMarketingLocale(currentLocale)) return currentLocale;
  return DEFAULT_LOCALE;
}

/**
 * Build a site-relative path for a locale.
 *
 *   localePath('fr', '/products')  -> '/fr/products'
 *   localePath('en', '/products')  -> '/products'
 *   localePath('fr')               -> '/fr'
 *   localePath('fr', '#')          -> '#'   (fragments and absolute URLs pass through)
 */
export function localePath(locale: MarketingLocale, path = '/'): string {
  if (path.startsWith('#') || /^[a-z]+:/i.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  if (clean === '/') return `/${locale}`;
  return `/${locale}${clean}`;
}

/**
 * The same page in every marketing locale, for hreflang links and the
 * language picker. Works from any localised or unlocalised pathname.
 */
export function alternatePaths(
  pathname: string
): Record<MarketingLocale, string> {
  const { path } = splitLocale(pathname);
  return Object.fromEntries(
    MARKETING_LOCALES.map(locale => [locale, localePath(locale, path)])
  ) as Record<MarketingLocale, string>;
}
