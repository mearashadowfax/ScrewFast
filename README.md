<br/>
<div align="center">
<a href="https://commercequest.space">
<img src="src/images/starlight/CQ_logo.svg" alt="CQ Logo" width="400" height="100">
</a>
<h3 align="center">Landingpage & Docs</h3>
<p align="center">
Welcome to our website & docs repo!
<br/>
<br/>
<a href="https://site.commercequest.space/"><strong>Explore the website »</strong></a> | <a href="https://site.commercequest.space/guides/intro/"><strong>Explore the docs »</strong></a>

  ![GitHub last commit](https://img.shields.io/github/last-commit/spryker-community/spryker-community.github.io?label=latest%20website%20update) [![Report an issue](https://img.shields.io/badge/Report%20an-issue-red?style=flat-square)](https://www.gui.do/presentation)
</div>

 ## Background:

### Challenge
At CommerceQuest, we're creating an increasing number of evergreen "community docs", e.g.:
- Hackathon/meetup blueprint;
- Guides on how to contribute to our Open Platform (Spryker/Propel/Oryx);
- Community Ranks (individual/company);
- Overview of community extensions;
- (historical) hackathon projects/logs;
- etc…

Unfortunately these docs...
- ...don't really fit the available [CQ forum](https://commercequest.space/discussions) format;
- ...can't go on other Spryker web properties like [www.spryker.com](https://www.spryker.com/) or [docs.spryker.com](https://docs.spryker.com/) because either the content doesn't fit, or we can't integrate these in short term because those other properties are currently being reworked.

So we needed an (at minimum temporary) solution.

### Solution

Create a new community website/landingpage that can host our (non Spryker/Propel/Oryx software related) community docs.

Prerequisites:
- Free & easy to host (e.g. Github);
- Easy to contribute to for Devs and Non-Devs (e.g. Markdown);
- Fast (SSG/ Flat file);
- CommerceQuest branded;
- Avoid confusion with other Spryker/Propel/Oryx websites;
- Some decent template available to get up-and running quickly.

So at our Turbine x Spryker hackathon in May 2024, this repo was created to make this happen 😊

 ### Built With...

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com/)
- [ScrewFast Monolingual template](https://github.com/mearashadowfax/ScrewFast/tree/monolingual-site)
- Turbine's Hamburgers 🍔 & Club-Mate 🧃 (as the first iteration of this site was made at the Spryker x Turbine hackathon)

> [!IMPORTANT]
> Note that this repo contains the [website](https://site.commercequest.space/) and the [docs](https://site.commercequest.space/guides/intro/) contained within that website, NOT the [CommerceQuest forum](https://commercequest.space/).

## Roadmap
See the [open issues](https://github.com/spryker-community/spryker-community.github.io/issues) for a full list of known issues 🪲 and proposed features.

## Contributing 
Contributions are what make our open community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated** 🙇.


### A. Content contributions
If you simply want to update any of [our existing docs](https://site.commercequest.space/guides/intro/):
1. Go to [the docs](https://site.commercequest.space/guides/intro/) and browse to the article you want to adjust;
2. On the bottom of the page, click "✏︎ Edit page"
4. Make your edits, but leave the frontmatter (= the text on top of the page between the --- lines) intact;
5. Click the green "Commit changes" button in the top right, add your commit message and click the green sign off button.

OR, if you want to create a new article:
1. Go to [/src/content/docs](https://github.com/spryker-community/spryker-community.github.io/tree/monolingual-site/src/content/docs) and create a new folder (these act as categories);
2. In the new folder, create a new .MDX document by clicking "Add file > Create a new file" in the top right;
3. Name your file (ideally the same as the label you use below);
4. Create your new article, starting with the frontmatter code below:
```
---
title: Title of your new page
description: Description of your new page 
sidebar:
    label: Short name for your page
    order: single or two digit number
---

Your article content goes here.
```
5. Click the green "Commit changes" button in the top right, add your commit message and click the green sign off button.

> [!TIP]
> If this is your first encounter with Markdown or you need a refresher, [Check out this video](https://youtu.be/_PPWWRV6gbA?si=pzZhA7JsL0wFk42U&t=60) and/or this [Markdown Cheatsheet](https://www.kdnuggets.com/publications/sheets/Markdown_Cheatsheet_KDnuggets.pdf)\
> If you feel the need to go the extra mile, Astro also has some bonus [Markdown features and even MDX](https://youtu.be/_PPWWRV6gbA?si=pzZhA7JsL0wFk42U&t=60).

### B. Code contributions

If you have a suggestion that would make our community website better, please fork the repo and create a pull request. You can also simply open an issue with the tag "bug" or "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project;
2. Create your Feature Branch;
3. Commit your Changes;
4. Push to the Branch;
5. Open a Pull Request.

## Installation

Once your cloned the repository to your computer, open your terminal and navigate to the project's root directory.

### Using Node.js (npm) on Your Host Machine

Start by installing the project dependencies by executing:

```bash
npm ci
```

This command will install all the necessary dependencies defined in the `package.lock` file.

### Using Docker

To use Docker for setting up your local environment, follow these steps:

1. Ensure Docker and Docker Compose are installed on your machine.
2. Build and start the Docker container by running the following command from the project's root directory:
3. Execute:
    ```bash
    docker compose up
    ```

This will build the Docker image and start the container with all necessary dependencies.

## Development Commands

With dependencies installed, you can utilize the following npm scripts to manage your project's development lifecycle:

- `npm run dev`: Starts a local development server with hot reloading enabled.
- `npm run preview`: Serves your build output locally for preview before deployment.
- `npm run build`: Bundles your site into static files for production.

For detailed help with Astro CLI commands, visit [Astro's documentation](https://docs.astro.build/en/reference/cli-reference/).

### Docker
To run these command you can either open a bash into the container by executing `docker exec -ti astro-commercequest /bin/bash` or use the proxy command `docker compose run -p 4321:4321 web <INSERT NPM COMMAND HERE>`.

**Note:** The `astro dev` and `astro build` commands currently not properly work within the container due to port conflicts.

## Deployment

### Building Your Site

Before deployment, you need to create a production build:

```bash
npm run build
```

This creates a `dist/` directory with your built site (configurable via [outDir in Astro](https://docs.astro.build/en/reference/configuration-reference/#outdir)).

## Project Structure

ScrewFast organizes modular components, content, and layouts to streamline development and content management.

```md

src/
├── components/           # Reusable components
│   ├── Meta.astro        # Meta component for SEO
│   ├── sections/         # Components for various sections of the website
│   ├── ThemeIcon.astro   # Component for toggling light/dark themes
│   └── ui/               # UI components categorized by functionality
├── content/              # Markdown files for blog posts, insights, products, and site configuration
│   ├── blog/
│   ├── docs/           
│   ├── insights/         
│   └── config.ts         # Contains site-wide configuration options
├── data_files/           # Strings stored as JSON files
├── images/               # Static image assets for use across the website
├── layouts/              # Components defining layout templates
│   └── MainLayout.astro  # The main wrapping layout for all pages
├── pages/                # Astro files representing individual pages and website sections
│   ├── 404.astro         # Custom 404 page
│   ├── blog/   
│   ├── fr/               # Localized content
│   ├── contact.astro     
│   ├── index.astro       # The landing/home page
│   ├── insights/         
│   ├── products/         
│   ├── robots.txt.ts     # Dynamically generates robots.txt
│   └── services.astro
├── styles/               # CSS styles
└── utils/                # Shared utility functions and helpers

```

### Static Assets and Public Resources

Static files served directly to the browser are within the `public` directory at the root of the project.

```md

public/
└── scripts/
    └── vendor/
        ├── gsap/ # Animations powered by GSAP (GreenSock Animation Platform)
        │   └── gsap.min.js 
        ├── lenis/ # Lenis script for smooth scrolling effects
        │   └── lenis.js
        └── preline/   # Preline UI plugins
            ├── accordion/
            ├── collapse/
            ├── dropdown/
            ├── overlay/
            └── tabs/


```

The scripts in the `public/scripts/vendor` directory are essential for the interactivity and aesthetic features of the website. Do not remove these unless you plan to replace their functionality.

## Contact 📬

Guido X Jansen\
Global Business & Technology Evangelist @ [Spryker](https://www.spryker.com)\
[@gxjansen](https://github.com/gxjansen) - guido.jansen@spryker.com
