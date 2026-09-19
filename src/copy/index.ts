import type { MarketingLocale } from '@utils/locale';
import { en } from './en';
import { fr } from './fr';

/**
 * Copy module: one typed table of UI strings per marketing locale.
 *
 * `Copy` is the shape of the English table, so every other locale must
 * provide every key (missing or extra keys fail `astro check`). Components
 * read the current table from `Astro.locals.copy`; code that already has a
 * locale in hand (views, `getStaticPaths`) can call `getCopy(locale)`.
 */
export type Copy = typeof en;

const tables: Record<MarketingLocale, Copy> = { en, fr };

export function getCopy(locale: MarketingLocale): Copy {
  return tables[locale];
}
