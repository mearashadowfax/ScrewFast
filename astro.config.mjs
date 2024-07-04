import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import { fileURLToPath } from 'node:url';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://site.commercequest.space/",
  image: {
    domains: ["images.unsplash.com"]
  },
  prefetch: true,
  integrations: [tailwind(), sitemap(), starlight({
    title: "CommerceQuest Docs",
    editLink: {
      baseUrl: 'https://github.com/spryker-community/spryker-community.github.io/edit/main'
    },
    logo: {
      src: './src/images/starlight/CQ_logo.svg',
      replacesTitle: true
    },
    defaultLocale: "root",
    locales: {
      root: {
        label: "English",
        lang: "en"
      }
    },
    lastUpdated: true,
    // https://starlight.astro.build/guides/sidebar/
    sidebar: [{
      label: "Community Guides",
      autogenerate: {
        directory: "guides"
      }
    }, {
      label: "Community Projects",
      autogenerate: {
        directory: "tools"
      }
    }, {
      label: "Contributing",
      autogenerate: {
        directory: "contributing"
      }
    }, {
      label: "Event Blueprints",
      autogenerate: {
        directory: "events"
      }
    }, {
      label: "Other Resources",
      autogenerate: {
        directory: "other"
      }
    }
    /*         {
              label: "[Templates]]",
              autogenerate: { directory: "templates" },
            }, */],
    social: {
      github: "https://github.com/spryker-community"
    },
    disable404Route: true,
    customCss: ["./src/styles/starlight.css"],
    favicon: "/favicon.ico",
    components: {
      SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
      Head: "./src/components/ui/starlight/Head.astro",
      Page: "./src/components/ui/starlight/Page.astro"
    },
    head: [{
      tag: "meta",
      attrs: {
        property: "og:image",
        content: "https://commercequest.space/" + "/social.webp"
      }
    }, {
      tag: "meta",
      attrs: {
        property: "twitter:image",
        content: "https://commercequest.space/" + "/social.webp"
      }
    }]
  }), compressor({
    gzip: false,
    brotli: true
  }),
],
  output: "hybrid",
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  },
  outdir: "dist",
  // Add the default astro outdir path
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    },
    resolve: {
      alias: [{
        find: /^.*\/Page\.astro$/,
        replacement: fileURLToPath(new URL('./src/components/ui/starlight/Page.astro', import.meta.url))
      }]
    }
  },
  adapter: netlify()
});