// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Learning Hearts",
    links: [
      { name: "Mission", url: "/welcome-to-docs/" },
      { name: "Team", url: "/products" },
      { name: "Community", url: "/services" },
      { name: "Mindfulness", url: "/services" },
    ],
  },
  {
    section: "More info",
    links: [
      { name: "Contact", url: "#" },
      { name: "Pricing", url: "/blog" },
      { name: "Blog", url: "#" },
      { name: "Gallery", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  google: "https://www.google.com/"
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
