// An array of links for navigation bar
const navBarLinks = [
  { name: "Startseite", url: "/de" },
  { name: "Produkte", url: "/de/products" },
  { name: "Dienstleistungen", url: "/de/services" },
  { name: "Blog", url: "/de/blog" },
  { name: "Kontakt", url: "/de/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ökosystem",
    links: [
      { name: "Dokumentation", url: "/de/welcome-to-docs/" },
      { name: "Werkzeuge & Ausrüstung", url: "/de/products" },
      { name: "Bauleistungen", url: "/de/services" },
    ],
  },
  {
    section: "Unternehmen",
    links: [
      { name: "Über uns", url: "#" },
      { name: "Blog", url: "/de/blog" },
      { name: "Karriere", url: "#" },
      { name: "Kunden", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};