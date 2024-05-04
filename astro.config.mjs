import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://healthacademy.ro",
  image: {
    domains: ["images.unsplash.com"]
  },
  i18n: {
    defaultLocale: "ro",
    locales: ["ro"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  prefetch: true,
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "ro"
    }
  }), compressor({
    gzip: false,
    brotli: true
  })],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  },
});