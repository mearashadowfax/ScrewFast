// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Forum", url: "https://commercequest.space/" },
  { name: "Docs", url: "./guides/getting-started/" },
  { name: "Products", url: "/products" },
  { name: "Blog", url: "/blog" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "./guides/getting-started/" },
      { name: "Community Tools", url: "/products" },
      { name: "Code of Conduct", url: "https://spryker.com/sprykercodeofconduct/" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/about" },
      { name: "Forum", url: "https://commercequest.space/" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "https://spryker.com/career/" },
      { name: "Customers", url: "https://spryker.com/customer-overview/" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/Spryker/",
  x: "https://twitter.com/sprysys",
  github: "https://github.com/spryker-community",
  youtube: "https://www.youtube.com/channel/UC6lVOEbqXxUh0W5FMTvlPDQ",
  linkedin: "https://www.linkedin.com/company/spryker-systems-gmbh",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};