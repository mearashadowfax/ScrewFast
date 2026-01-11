const navBarLinks = [
  { name: "Trang chủ", url: "/vn" },
  { name: "Sản phẩm", url: "/vn/products" },
  { name: "Dịch vụ", url: "/vn/services" },
  { name: "Blog", url: "/vn/blog" },
  { name: "Liên hệ", url: "/vn/contact" },
];

const footerLinks = [
  {
    section: "Hệ sinh thái",
    links: [
      { name: "Tài liệu", url: "/vn/welcome-to-docs/" },
      { name: "Công cụ & Thiết bị", url: "/vn/products" },
      { name: "Dịch vụ xây dựng", url: "/vn/services" },
    ],
  },
  {
    section: "Công ty",
    links: [
      { name: "Về chúng tôi", url: "#" },
      { name: "Blog", url: "/vn/blog" },
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
