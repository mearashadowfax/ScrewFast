import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Kasumi CRM",
  tagline: "Centralize your chats with Kasumi CRM",
  description: "Seamlessly manage conversations across WhatsApp, Facebook, and Instagram from a single, intuitive platform.",
  description_short: "Centralize your chats into columns, automatically assign them to your sales and customer support teams.",
  url: "https://kasumi.app",
  author: "Rick Dev",
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
  title: `${SITE.title}: : Seamlessly manage conversations across WhatsApp, Facebook`,
  description: "Streamline your communication with our centralized messaging system. Manage WhatsApp conversations, send mass messages, and organize contacts using tags—all from one intuitive platform.",
  image: ogImageSrc,
};
