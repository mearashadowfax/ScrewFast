/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    /** Marketing locale of the current request; set in `src/middleware.ts`. */
    locale: import('@utils/locale').MarketingLocale;
    /** Copy table for `locale`; set in `src/middleware.ts`. */
    copy: import('@/copy').Copy;
  }
}
