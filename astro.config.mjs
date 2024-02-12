import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://screw-fast.vercel.app',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  adapter: vercelStatic({
    imagesConfig: {
      sizes: [400, 600, 800, 1000, 1200, 1600, 2000],
    },
    imageService: true,
  }),
});