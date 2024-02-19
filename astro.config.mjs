import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://screw-fast.vercel.app',
  integrations: [tailwind(), sitemap(), critters(), compressor({ gzip: false, brotli: true })],
  output: 'static',
  adapter: vercelStatic()
});