// An array of links for navigation bar
const navBarLinks = [
  { name: "خانه", url: "/fa" },
  { name: "محصولات", url: "/fa/products" },
  { name: "خدمات", url: "/fa/services" },
  { name: "بلاگ", url: "/fa/blog" },
  { name: "تماس", url: "/fa/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "اکوسیستم",
    links: [
      { name: "مستندات", url: "/fa/welcome-to-docs/" },
      { name: "ابزار و تجهیزات", url: "/fa/products" },
      { name: "خدمات ساخت و ساز", url: "/fa/services" },
    ],
  },
  {
    section: "شرکت",
    links: [
      { name: "درباره ما", url: "#" },
      { name: "بلاگ", url: "/fa/blog" },
      { name: "فرصت‌های شغلی", url: "#" },
      { name: "مشتریان", url: "#" },
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