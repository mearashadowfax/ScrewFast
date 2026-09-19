import { LOCALE_INFO, type MarketingLocale } from '@utils/locale';

/** Format a date for display in the given marketing locale, e.g. "Sep 20, 2026". */
function formatDate(date: Date, locale: MarketingLocale): string {
  return new Date(date).toLocaleDateString(LOCALE_INFO[locale].intl, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/** Capitalize the first letter. */
function capitalize(str: string): string {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { formatDate, capitalize };
