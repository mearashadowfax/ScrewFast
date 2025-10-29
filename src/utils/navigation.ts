// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Testimonials", url: "/testimonials" },
  { name: "Services", url: "/services" },
  { name: "Programmes", url: "/programmes" },
  // { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Company",
    links: [
      { name: "Mission", url: "/about" },
      { name: "Methodology", url: "/about#features" },
      { name: "Testimonials", url: "/testimonials" },
      { name: "Team", url: "/about#team" },
    ],
  },
  {
    section: "Services",
    links: [
      { name: "Mindfulness", url: "/programmes#mindfulness" },
      { name: "Lit/Geog workshop", url: "/programmes#workshop" },
    ],
  },
  {
    section: "More info",
    links: [
      { name: "Contact", url: "/contact" },
      { name: "Pricing", url: "/services" },
      // { name: "Blog", url: "#" },
      { name: "Gallery", url: "/contact#gallery" },
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
