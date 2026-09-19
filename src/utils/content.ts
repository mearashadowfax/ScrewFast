import { getCollection, type CollectionEntry } from 'astro:content';
import {
  DEFAULT_LOCALE,
  isMarketingLocale,
  localePath,
  type MarketingLocale,
} from '@utils/locale';

/**
 * Content module for the localised collections (`blog`, `insights`,
 * `products`).
 *
 * Entries live under `src/content/<collection>/<locale>/<slug>.md`, so an
 * entry's id is `<locale>/<slug>`. This module is the only place that knows
 * that rule and the route each collection is served from; cards and pages
 * take an entry and ask here for its locale, slug, path and siblings.
 */

export type LocalisedCollection = 'blog' | 'insights' | 'products';
export type LocalisedEntry<
  C extends LocalisedCollection = LocalisedCollection,
> = CollectionEntry<C>;

/** Unlocalised route prefix of each collection. */
const ROUTES: Record<LocalisedCollection, string> = {
  blog: '/blog',
  insights: '/insights',
  products: '/products',
};

/** Default ordering of each collection wherever it is listed. */
const SORTERS: {
  [C in LocalisedCollection]: (
    a: CollectionEntry<C>,
    b: CollectionEntry<C>
  ) => number;
} = {
  blog: (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  products: (a, b) => a.data.main.id - b.data.main.id,
  insights: () => 0,
};

/** The locale an entry was authored in, from its id prefix. */
export function localeOf(entry: LocalisedEntry): MarketingLocale {
  const prefix = entry.id.split('/')[0];
  return isMarketingLocale(prefix) ? prefix : DEFAULT_LOCALE;
}

/** The entry's id without its locale prefix; the route param for `[id]`. */
export function slugOf(entry: LocalisedEntry): string {
  return entry.id.replace(/^[^/]+\//, '');
}

/** Site-relative path of an entry's page, e.g. `/fr/blog/post-1/`. */
export function pathFor(entry: LocalisedEntry): string {
  return `${localePath(localeOf(entry), ROUTES[entry.collection])}/${slugOf(entry)}/`;
}

/** Entries of one collection in one locale, in that collection's order. */
export async function entriesFor<C extends LocalisedCollection>(
  collection: C,
  locale: MarketingLocale
): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(collection, ({ id }) =>
    id.startsWith(`${locale}/`)
  );
  return entries.sort(
    SORTERS[collection] as (
      a: CollectionEntry<C>,
      b: CollectionEntry<C>
    ) => number
  );
}

/** The same entry in another locale, if it has been translated. */
export async function siblingOf<C extends LocalisedCollection>(
  entry: CollectionEntry<C>,
  locale: MarketingLocale
): Promise<CollectionEntry<C> | undefined> {
  const siblings = (await entriesFor(
    entry.collection,
    locale
  )) as CollectionEntry<C>[];
  const slug = slugOf(entry);
  return siblings.find(candidate => slugOf(candidate) === slug);
}

/**
 * `getStaticPaths` result for one collection in one locale, so every
 * `[id].astro` route is a one-liner.
 */
export async function staticPathsFor<C extends LocalisedCollection>(
  collection: C,
  locale: MarketingLocale
) {
  const entries = await entriesFor(collection, locale);
  return entries.map(entry => ({
    params: { id: slugOf(entry) },
    props: { entry },
  }));
}
