// An array of links for navigation bar
const navBarLinks = [
  { name: "首页", url: "/zh-cn" },
  { name: "产品", url: "/zh-cn/products" },
  { name: "服务", url: "/zh-cn/services" },
  { name: "博客", url: "/zh-cn/blog" },
  { name: "联系我们", url: "/zh-cn/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "生态系统",
    links: [
      { name: "文档", url: "/zh-cn/welcome-to-docs/" },
      { name: "工具设备", url: "/zh-cn/products" },
      { name: "建筑服务", url: "/zh-cn/services" },
    ],
  },
  {
    section: "公司",
    links: [
      { name: "关于我们", url: "#" },
      { name: "博客", url: "/zh-cn/blog" },
      { name: "招聘", url: "#" },
      { name: "客户", url: "#" },
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