import { defineMiddleware } from 'astro:middleware';
import { resolveLocale } from '@utils/locale';
import { getCopy } from '@/copy';

/**
 * Resolve the marketing locale once per request and expose it (and its copy
 * table) on `Astro.locals`, so no component has to re-derive it. Runs at
 * build time for prerendered pages as well as in dev.
 */
export const onRequest = defineMiddleware((context, next) => {
  const locale = resolveLocale(context.url.pathname, context.currentLocale);
  context.locals.locale = locale;
  context.locals.copy = getCopy(locale);
  return next();
});
