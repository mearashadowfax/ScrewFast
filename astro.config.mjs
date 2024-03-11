import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: 'https://screwfast.uk',
  image: {
    domains: ["images.unsplash.com"],
  },
  prefetch: true,
  integrations: [tailwind(), sitemap(), compressor({ gzip: false, brotli: true })],
  output: 'static',
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  },
  adapter: vercelStatic()
});