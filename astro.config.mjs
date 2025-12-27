import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://screw-fast-git-i18n-prototype-emils-projects-69b3f1de.vercel.app/en/",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "de", "es", "fa", "ja", "zh-cn"],
    fallback: {
      fr: "en",
      de: "en",
      es: "en", 
      fa: "en",
      ja: "en",
      "zh-cn": "en",
    },
    routing: {
      prefixDefaultLocale: true,
    },
  },
  prefetch: true,
  integrations: [sitemap({
    i18n: {
      defaultLocale: "en", // All urls that don't contain language prefix after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
      locales: {
        en: "en", // The `defaultLocale` value must present in `locales` keys
        fr: "fr",
        de: "de",
        es: "es",
        fa: "fa",
        ja: "ja",
        "zh-cn": "zh-cn",
      },
      routing: {
        prefixDefaultLocale: true, // This enables the /en prefix
      },
    },
  }), starlight({
    title: "ScrewFast Docs",
    // Starlight will use the Astro i18n configuration automatically
    // https://starlight.astro.build/guides/sidebar/
    sidebar: [
      {
        label: "Quick Start Guides",
        translations: {
          de: "Schnellstartanleitungen",
          es: "Guías de Inicio Rápido",
          fa: "راهنمای شروع سریع",
          fr: "Guides de Démarrage Rapide",
          ja: "クイックスタートガイド",
          "zh-cn": "快速入门指南",
        },
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
    social: [
      { icon: "github", label: "GitHub", href: "https://github.com/mearashadowfax/ScrewFast" },
    ],
    disable404Route: true,
    customCss: ["./src/assets/styles/starlight.css"],
    favicon: "/favicon.ico",
    components: {
      SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
      Head: "./src/components/ui/starlight/Head.astro",
      MobileMenuFooter: "./src/components/ui/starlight/MobileMenuFooter.astro",
      ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
    },
    head: [
      {
        tag: "meta",
        attrs: {
          property: "og:image",
          content: "https://screwfast.uk" + "/social.webp",
        },
      },
      {
        tag: "meta",
        attrs: {
          property: "twitter:image",
          content: "https://screwfast.uk" + "/social.webp",
        },
      },
    ],
  }), compressor({
    gzip: false,
    brotli: true,
  }), mdx()],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

