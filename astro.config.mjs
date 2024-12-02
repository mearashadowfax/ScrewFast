import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://mario-guerra.github.io",
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap(),
    starlight({
      title: "ScrewFast Docs",
      sidebar: [
        {
          label: "Quick Start Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Tools & Equipment",
          items: [
            { label: "Tool Guides", link: "tools/tool-guides/" },
            { label: "Equipment Care", link: "tools/equipment-care/" },
          ],
        },
        {
          label: "Construction Services",
          autogenerate: { directory: "construction" },
        },
        {
          label: "Advanced Topics",
          autogenerate: { directory: "advanced" },
        },
      ],
      social: {
        github: "https://github.com/mearashadowfax/ScrewFast",
      },
      disable404Route: true,
      favicon: "/favicon.ico",
      customCss: ["./src/assets/styles/starlight.css"],
    }),
    compressor({ brotli: true }),
  ],
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
});
