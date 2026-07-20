/**
 * Marketing-site locale helpers.
 * Starlight drives Astro.currentLocale for docs, but file-based marketing
 * pages under `src/pages/fr/` should derive locale from the pathname so
 * nav/footer copy stays correct regardless of Starlight's generated i18n.
 */

export type MarketingLocale = 'en' | 'fr';

export function getMarketingLocale(
  pathname: string,
  currentLocale?: string | undefined
): MarketingLocale {
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  if (currentLocale === 'fr') return 'fr';
  return 'en';
}

export function localePath(locale: MarketingLocale, path = ''): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'fr') {
    if (clean === '/' || clean === '') return '/fr';
    return `/fr${clean}`;
  }
  return clean === '' ? '/' : clean;
}
