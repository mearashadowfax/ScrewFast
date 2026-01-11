const navBarLinks = [
  { name: "Trang chủ", url: "/" },
  { name: "Sản phẩm", url: "/products" },
  { name: "Dịch vụ", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Liên hệ", url: "/contact" },
];

const footerLinks = [
  {
    section: "Hệ sinh thái",
    links: [
      { name: "Tài liệu", url: "/welcome-to-docs/" },
      { name: "Công cụ & Thiết bị", url: "/products" },
      { name: "Dịch vụ xây dựng", url: "/services" },
    ],
  },
  {
    section: "Công ty",
    links: [
      { name: "Về chúng tôi", url: "#" },
      { name: "Blog", url: "/blog" },
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
