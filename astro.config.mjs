import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://screwfast.uk',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  adapter: vercelStatic(),
});