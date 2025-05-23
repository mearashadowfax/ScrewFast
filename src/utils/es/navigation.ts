// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/es" },
  { name: "Productos", url: "/es/products" },
  { name: "Servicios", url: "/es/services" },
  { name: "Blog", url: "/es/blog" },
  { name: "Contacto", url: "/es/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentación", url: "/es/welcome-to-docs/" },
      { name: "Herramientas y Equipos", url: "/es/products" },
      { name: "Servicios de Construcción", url: "/es/services" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Acerca de nosotros", url: "#" },
      { name: "Blog", url: "/es/blog" },
      { name: "Carreras", url: "#" },
      { name: "Clientes", url: "#" },
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