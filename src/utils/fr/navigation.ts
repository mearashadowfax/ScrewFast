const navBarLinks = [
  { name: "Trang chủ", url: "/fr" },
  { name: "Sản phẩm", url: "/fr/products" },
  { name: "Dịch vụ", url: "/fr/services" },
  { name: "Blog", url: "/fr/blog" },
  { name: "Liên hệ", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "Hệ sinh thái",
    links: [
      { name: "Tài liệu", url: "/fr/welcome-to-docs/" },
      { name: "Công cụ & Thiết bị", url: "/fr/products" },
      { name: "Dịch vụ xây dựng", url: "/fr/services" },
    ],
  },
  {
    section: "Công ty",
    links: [
      { name: "Về chúng tôi", url: "#" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Tuyển dụng", url: "#" },
      { name: "Khách hàng", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
