# ScrewFast: Simplified Landing & Blog Template

![ScrewFast](https://github.com/mearashadowfax/ScrewFast/assets/125820963/5c6ef8aa-b859-49ce-9468-cf548c33c8fc)

ScrewFast is a landing and blog template crafted with simplicity and ease of use in mind. Designed for small to medium-sized projects, ScrewFast provides a seamless setup experience for developers and content creators alike. It combines the power of [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [Preline UI](https://preline.co/) to deliver a less complex, yet functional and visually appealing web presence.

## Why Choose ScrewFast?

- **Simplified Architecture:** Whether you're building a portfolio, a company landing page, or a simple blog, ScrewFast's architecture is straightforward and easy to navigate, helping you get your project off the ground quickly.
- **Tailored for Smaller Projects:** With a focus on performance and minimal overhead, ScrewFast is ideal for projects that require a clean and professional online presence without the complexity of larger-scale solutions.
- **Customizable and Extensible:** While the core structure of the template prioritizes simplicity, it doesn't compromise on customizability. Tap into the potential of Astro's component-based architecture and Tailwind's utility-first styling to expand the template as needed.

## Features

- **Astro Framework:** A web framework for building content-driven websites efficiently.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Preline UI:** A set of accessible and reusable components that are both attractive and functional.
- **GSAP Integration:** Smooth, professional-grade animations to captivate your audience.
- **Markdown Content Collections:** Manage your product and blog content effortlessly with markdown.
- **SEO-Friendly:** Pages structured for optimal search engine performance.
- **Responsive Design:** Fully responsive layout to ensure your site looks great on all devices.

## Getting Started

This guide will help you set up the Astro project on your local machine and introduce you to some essential commands for development and deployment.

### Installation

To begin, you'll need to install all the dependencies required for the project. Open your terminal, navigate to the project's root directory, and run the following command:

```bash
npm install
```

This command will install all the dependencies listed in the project's `package.json` file.

### Development Commands

After installing the dependencies, you can use these npm scripts for the development lifecycle of your project:

- `npm run dev`: Launches a local server with hot reloading.
- `npm run preview`: Previews the build locally.
- `npm run astro`: Executes Astro CLI commands.
- `npm run astro --help`: Provides help information for Astro commands.

Learn more about Astro's CLI by referring to [Astro's documentation](https://docs.astro.build/).

## Deployment

### Building Your Site

Before deployment, you need to create a production build:

```bash
npm run build
```

This creates a `dist/` directory with your built site (configurable via [outDir in Astro](https://docs.astro.build/en/reference/configuration-reference/#outdir)).

### Deploying to Vercel

To deploy ScrewFast to Vercel, follow these steps:

1. Clone this repository to your GitHub account.
2. Click the button below to start deploying your forked copy on Vercel:

## Project Structure

<details>
<summary>
ScrewFast is organized into modular components, content, and layout systems, making development and content management a breeze. Here's a quick overview of the project's directory structure:
</summary>
<br>

```md

src/
├── components/           # Reusable components
│   ├── Meta.astro        # Meta component for SEO
│   ├── sections/         # Sectional components for various parts of the website
│   ├── ThemeIcon.astro   # Theme switcher icon component
│   └── ui/               # UI components categorized by their functionality
├── content/              # Content files in markdown for blog posts, insights, and products
│   ├── blog/             # Blog posts written in markdown
│   ├── insights/         # Insights articles
│   ├── products/         # Product details
│   └── config.ts         # Site configuration
├── images/               # Image assets for the website
├── layouts/              # Layout components
│   └── MainLayout.astro  # Main layout component
├── pages/                # Astro pages representing each website section or view
│   ├── 404.astro         # Custom 404 page
│   ├── blog/             # Blog listing and post pages
│   ├── contact.astro     # Contact page
│   ├── index.astro       # Home page
│   ├── insights/         # Insights listing and detail pages
│   ├── products/         # Product listing and detail pages
│   ├── robots.txt.ts     # Dynamic generation of robots.txt
│   └── services.astro    # Services offered
└── utils/                # Utility functions

```

</details>

## Static Assets and Public Resources

<details>
<summary>
The `public` directory contains all the static files that your project can serve directly to the browser. Here's a breakdown of the contents within the `public` folder:
</summary>
<br>
- Favicons and device icons (e.g., `favicon.ico`, `apple-touch-icon.png`)
- PWA (Progressive Web App) manifest and icons for improved mobile support (e.g., `manifest.webmanifest`, `icon-512.png`)
- `social.png`: An image for social media sharing previews
- `scripts`: Third-party libraries and scripts
  - `gsap`: GreenSock Animation Platform files for creating high-performance animations
  - `lenis`: Smooth scrolling library for improved scroll interactions
  - `preline`: Set of UI component scripts from Preline UI

Here's the layout of the `public` directory:

```md

public/
├── apple-touch-icon.png
├── favicon.ico
├── icon-192.png
├── icon-512.png
├── icon.svg
├── manifest.webmanifest
├── maskable_icon.png
├── maskable_icon_x512.png
├── scripts/
│   └── vendor/
│       ├── gsap/
│       │   └── gsap.min.js
│       ├── lenis/
│       │   └── lenis.js
│       └── preline/
│           ├── accordion/
│           ├── collapse/
│           ├── overlay/
│           └── tabs/
└── social.png

```

When adding or updating icons and favicons, ensure that they match the sizes expected by various devices and that they're referenced correctly in the head of your HTML document.

The scripts in the `public/scripts/vendor` directory are essential for the interactivity and aesthetic features of the website. Do not remove these unless you plan to replace their functionality.
</details>

## Integrations and Enhancements

<details>
<summary>
ScrewFast leverages the power of Astro and associated integrations to deliver exceptional site performance and a seamless user experience. Here are some notable integrations and enhancements included in the project:
</summary>
<br>

### Lenis for Smooth Scrolling

Experience buttery smooth scrolling with [Lenis](https://lenis.studiofreight.com/). We've integrated Lenis to provide an enhanced scrolling experience that's both fluid and responsive.

Here's how we set up Lenis in `src/layouts/MainLayout.astro`:

```html
<script is:inline src="/scripts/vendor/lenis/lenis.js"></script>
<script is:inline>
  // Script to handle Lenis library settings for smooth scrolling
  const lenis = new Lenis({
    smooth: true,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time); // Update Lenis on each animation frame
    requestAnimationFrame(raf); // Continuously invoke the raf function at refresh rate
  }
  requestAnimationFrame(raf); // Start the loop
</script>
<style>
html.lenis {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
}
.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>
```

Please note that smooth scrolling can affect accessibility and performance on some devices, so be sure to test it comprehensively across different environments.

If you would like to remove Lenis, just comment out or delete these lines, and the scrolling will return to the default behavior.

### GSAP Integration

 For individual product pages, [GSAP](https://gsap.com/) has been integrated to add engaging animations that execute as soon as the product page loads. You can find and modify the GSAP configuration in the script sections of the product page file located at `src/pages/products/[...slug].astro`:

```html
<script is:inline src="/scripts/vendor/gsap/gsap.min.js"></script>
<script>
  window.addEventListener("load", (event) => {
    if (window.gsap) {
      const gsap = window.gsap;
      // Initialize GSAP animations...
    }
  });
</script>
```

**Customizing Animations:**

Please tailor the GSAP animations within this script to fit your project's look and feel. The provided example is a starting point, representing how to leverage GSAP for immediate visual impact as a product page loads.

**Modifying or Removing Animations:**

This integration is designed for flexibility:

- To adjust an animation, modify the properties and parameters within the `gsap.from` method or add new GSAP calls as needed.
- If GSAP is not required or you wish to rely on a different methodology, remove the the relevant code.

We've chosen to keep the integration lean and focused, but GSAP's comprehensive documentation can be referred to for more intricate animation work: [GSAP Documentation](https://gsap.com/docs/v3/).

### Hiding Scrollbar

To achieve a cleaner and more spacious design, the default scrollbar has been visually removed. While this choice fits the aesthetic goals of the project, it's important to consider that hiding scrollbars can sometimes affect accessibility and user experience. We recommend evaluating this design decision within the context of your user base and their needs.

For those who prefer custom-styled scrollbars, we suggest using the [tailwind-scrollbar](https://adoxography.github.io/tailwind-scrollbar/) plugin, which adds Tailwind CSS utilities for scrollbar styles, allowing for more controlled customization that can also meet accessibility standards.

If you wish to return the default scrollbar, you can comment out or remove the following CSS from `src/layouts/MainLayout.astro`:

```html
<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
```

Additionally, update the `<html>` tag to remove the `scrollbar-hide` class, resulting in:

```html
<html lang="en" class="scroll-pt-16">
```

### SEO Configuration

The ScrewFast template includes a flexible SEO configuration that allows you to optimize each page for search engines and social media platforms effectively. By utilizing the `Meta.astro` component, you can easily customize important metadata such as page titles, descriptions, author information, and social media images.

The `Meta.astro` component is designed with default properties. However, you have the option to override these defaults by passing custom props. Furthermore, you can extend the metadata by adding additional properties as needed.

#### Customizing Metadata with Meta.astro

The `Meta.astro` component comes preset with default metadata, but you can override these defaults per page:

```astro
// Extract props with our default values
const { meta = "ScrewFast offers top-tier hardware tools and expert construction services.", structuredData } = Astro.props;
```

#### Applying Metadata in Layouts

In your `MainLayout.astro` (or other layout files), you'd set up the props that you want to pass to the `Meta` component:

```astro
---
const { meta, structuredData } = Astro.props;

interface Props {
  meta?: string;
  structuredData?: object;
}
---

<Meta meta={meta} structuredData={structuredData} />
```

#### Customizing Metadata on Individual Pages

Finally, for each page, you can pass custom metadata through the layout:

```astro
---
import MainLayout from '../layouts/MainLayout.astro';
---

<MainLayout meta="Find the perfect hardware tools with ScrewFast for all your construction needs.">
  <!-- Page content -->
</MainLayout>
```

With this setup, the Meta component receives the custom meta description and applies it to the page's metadata. If no custom value is passed, the default from `Meta.astro` will be used instead.

#### Extending Metadata for SEO

For a more robust SEO strategy, you can create additional properties in the `Meta.astro` component. For instance, you may want to include specific Open Graph tags for article publishing dates or tags for Twitter-specific metadata.

#### Structured Data and Rich Snippets

The `Meta.astro` component also handles structured data using JSON-LD format, enhancing how search engines interpret the content of your pages. This can improve how your content appears in search results with rich snippets. You can configure the structured data by modifying the `structuredData` property with relevant schema.org types and properties.

#### Using Astro SEO Integrations

While the template provides a custom SEO solution, you may choose to utilize an Astro integration such as [Astro SEO](https://github.com/jonasmerlin/astro-seo#readme) for additional SEO features and optimizations. Integrating such a package might provide more automated metadata management or additional SEO-focused functionality.

### Robots.txt

`robots.txt` is dynamically generated using the code found in src/pages/robots.txt.ts. This configuration follows the example from the Astro Docs:

```ts
import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
```

### Astro Integrations

Maximize your website's efficiency with these built-in Astro integrations:

- [Astro Compressor](https://github.com/sondr3/astro-compressor#readme): Automatically compresses your Astro-generated site using gzip or brotli, ensuring faster load times for your users.
Configure the compressor in your `astro.config.mjs` file:

```mjs
   export default defineConfig({
     // ...other Astro configurations
    integrations: [...other Astro integrations, compressor({ gzip: false, brotli: true })],
   });
```

- [Astro Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/): Automatically generates a sitemap for your website, which is vital for SEO and helping search engine bots crawl your pages effectively. Add the sitemap configuration to your astro.config.mjs, specifying your site's base URL and any additional options:

```mjs
   export default defineConfig({
  // ...
  site: 'https://example.com',
  integrations: [sitemap()],
});
```

### Flexibility with Integrations

The great thing about Astro is its rich ecosystem of integrations, allowing you to tailor project functionalities to your exact needs. Feel free to explore [Astro integrations page](https://astro.build/integrations/) and add additional capabilities as you see fit.
</details>

## Tools and Technologies

<details>
<summary>
This project is built using a variety of tools and technologies that enhance its performance, maintainability, and developer experience. Below is a list of the key tools and their roles in the project:
</summary>
<br>

### Preline UI

Interactive components such as navbars, modals, and accordions are based on Preline UI, a popular open-source component library.

### Tailwind CSS

Our project's styling is completely powered by Tailwind CSS's utility-first classes. This approach provides us with the flexibility to design custom layouts and components directly in our markup.

In our project configuration, we use `prettier-plugin-tailwindcss` in `.prettierrc` to ensure consistent styling:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Deployment and Security

The project is deployed on `Vercel`, leveraging the platform's capabilities for seamless CI/CD. Security headers and caching behavior are configured in `vercel.json` to ensure best practices in security and performance:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; [other-directives]"
        }
        // Additional security headers...
      ]
    }
  ]
}
```

### HTML Minification

To further enhance the site's performance, we use `process-html.mjs`, a [custom script](https://straffesites.com/en/blog/optimize-astro-html-post-build) that minifies HTML files after the build process.

```mjs
// Post-build HTML minification script snippet
// ...
await Promise.all(
  files.map(async (file) => {
    // Processing and minification logic here
  })
);
```

Please refer to the respective documentations for each tool:

- [Preline UI Documentation](https://preline.co/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [html-minifier Documentation](https://github.com/kangax/html-minifier)

</details>
