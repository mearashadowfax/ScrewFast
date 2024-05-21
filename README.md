                         
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
<a href="https://spryker-community.github.io/"><strong>Explore the website »</strong></a> | <a href="https://spryker-community.github.io/guides/intro/"><strong>Explore the docs »</strong></a>
<br/>
<br/>
<a href="https://github.com/spryker-community/spryker-community.github.io/issues">Report an issue</a>
</p>
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
- [ScrewFast Monolingual template](https://github.com/mearashadowfax/ScrewFast/tree/monolingual-site)
- Turbine's Hamburgers 🍔 & Club-Mate 🧃

> [!IMPORTANT]
> Note that this repo contains the [website](https://spryker-community.github.io/) and the [docs](https://spryker-community.github.io/guides/intro/) contained within that website, NOT the [CommerceQuest forum](https://commercequest.space/).

 ## Roadmap
See the [open issues](https://github.com/spryker-community/spryker-community.github.io/issues) for a full list of known issues 🪲 and proposed features.

 ## Contributing 

Contributions are what make our open community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated** 🙇.

Option A: Contribute content
Option B: Contribute code

### A. Content contributions
If you simply want to update any of [our existing docs](https://spryker-community.github.io/guides/intro/):
1. Go to [/src/content/docs](https://github.com/spryker-community/spryker-community.github.io/tree/monolingual-site/src/content/docs) and select a folder (these act as categories);
2. Click on the .MDX file you want to edit;
3. On the new page, click on the "Edit this file" Pencil ✏️ in the top right;
4. Make your edits, but leave the frontmatter intact (the text on top of the page between the --- lines);
5. Click the green "Commit changes" button in the top right.

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

import {
Tabs,
TabItem,
} from "@astrojs/starlight/components";

Your article content goes here.
```
5. Click the green "Commit changes" button in the top right.

### B. Code contributions

If you have a suggestion that would make our community website better, please fork the repo and create a pull request. You can also simply open an issue with the tag "bug" or "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project;
2. Create your Feature Branch;
3. Commit your Changes;
4. Push to the Branch;
5. Open a Pull Request.

> [!NOTE]
> In your local environment, you can use `➜  ~ npm install` to get Astro installed and   `➜  ~ npm run dev` to start your local environment.

## Contact 📬

Guido X Jansen\
Global Business & Technology Evangelist @ [Spryker](https://www.spryker.com)\
[@gxjansen](https://github.com/gxjansen) - guido.jansen@spryker.com