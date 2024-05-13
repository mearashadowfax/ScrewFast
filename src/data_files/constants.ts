import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "CommerceQuest",
  tagline: "Your space for your Quest into Commerce",
  description: "Post your Spryker, Propel, Oryx or general Commerce questions. Hear from experts across the community to help you move forward.",
  description_short: "Post your Spryker, Propel, Oryx or general Commerce questions. Hear from experts across the community to help you move forward.",
  url: "https://commercequest.space/",
  author: "Guido X Jansen",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Community for Spryker, Propel and Oryx`,
  description: "Post your Spryker, Propel, Oryx or general Commerce questions. Hear from experts across the community to help you move forward.",
  image: ogImageSrc,
};
