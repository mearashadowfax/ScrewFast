import { SITE } from '@data/constants';
import { getCopy } from '@/copy';
import {
  LOCALE_INFO,
  MARKETING_LOCALES,
  alternatePaths,
  localePath,
  type MarketingLocale,
} from '@utils/locale';

/**
 * Page-metadata module.
 *
 * Turns the five things a page knows about itself (locale, path, title,
 * description, kind) into everything the `<head>` needs: title, description,
 * Open Graph fields, canonical, hreflang alternates and schema.org JSON-LD
 * with the site boilerplate filled in. Pages never hand-write schema.org
 * objects or the site URL.
 *
 * Pure: takes plain values, returns plain values, so it can be snapshot-tested.
 */

/** What kind of thing the page is, for JSON-LD. */
export type PageKind =
  | { type: 'WebPage' }
  | {
      type: 'BlogPosting';
      image: string;
      datePublished: Date;
      author: string;
    }
  | { type: 'Article'; image: string }
  | { type: 'Product' };

export interface PageMetadataInput {
  locale: MarketingLocale;
  /** Site-relative pathname of the page (`Astro.url.pathname`). */
  pathname: string;
  /** Page title without the site suffix. Omit on the home page. */
  title?: string;
  /** `<meta name="description">`; falls back to the site description. */
  description?: string;
  /** Open Graph / Twitter title; falls back to the site OG title. */
  ogTitle?: string;
  /**
   * Site section the page belongs to (e.g. "Blog"). When given and no
   * `ogTitle` is set, the OG title becomes `<title> | <section> | <site>`.
   */
  section?: string;
  kind?: PageKind;
}

export interface PageMetadata {
  lang: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogLocale: string;
  canonical: string;
  alternates: { hreflang: string; href: string }[];
  jsonLd: Record<string, unknown>;
}

/** Absolute URL on the marketing site; the root has no trailing slash. */
export function absoluteUrl(path: string): string {
  return path === '/' ? SITE.url : `${SITE.url}${path}`;
}

export function buildPageMetadata(input: PageMetadataInput): PageMetadata {
  const { locale, pathname, kind = { type: 'WebPage' } } = input;
  const copy = getCopy(locale);
  const info = LOCALE_INFO[locale];

  const title = input.title ? `${input.title} | ${SITE.title}` : SITE.title;
  const description = input.description ?? copy.site.description;
  const ogTitle =
    input.ogTitle ??
    (input.title && input.section
      ? `${input.title} | ${input.section} | ${SITE.title}`
      : copy.site.ogTitle);
  const ogDescription = input.description ?? copy.site.ogDescription;
  const canonical = absoluteUrl(pathname);

  const paths = alternatePaths(pathname);
  const alternates = MARKETING_LOCALES.map(alt => ({
    hreflang: LOCALE_INFO[alt].lang,
    href: absoluteUrl(paths[alt]),
  }));

  const publisher = {
    '@type': 'Organization',
    name: SITE.title,
    logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.ico` },
  };

  let jsonLd: Record<string, unknown>;
  switch (kind.type) {
    case 'BlogPosting':
      jsonLd = {
        '@type': 'BlogPosting',
        headline: input.title,
        image: kind.image,
        datePublished: kind.datePublished.toISOString(),
        author: { '@type': 'Person', name: kind.author },
        publisher,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      };
      break;
    case 'Article':
      jsonLd = {
        '@type': 'Article',
        headline: input.title,
        description,
        image: kind.image,
        author: { '@type': 'Organization', name: SITE.title },
        publisher,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      };
      break;
    case 'Product':
      jsonLd = {
        '@type': 'Product',
        '@id': canonical,
        name: input.title,
        description,
        brand: { '@type': 'Brand', name: SITE.title },
      };
      break;
    default:
      jsonLd = {
        '@type': 'WebPage',
        '@id': canonical,
        url: canonical,
        name: ogTitle,
        description,
        isPartOf: {
          '@type': 'WebSite',
          url: absoluteUrl(localePath(locale)),
          name: SITE.title,
          description: copy.site.descriptionShort,
        },
      };
  }

  return {
    lang: info.lang,
    title,
    description,
    ogTitle,
    ogDescription,
    ogLocale: info.ogLocale,
    canonical,
    alternates,
    jsonLd: {
      '@context': 'https://schema.org',
      ...jsonLd,
      inLanguage: info.inLanguage,
    },
  };
}
