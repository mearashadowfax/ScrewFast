// An array of links for navigation bar
const navBarLinks = [
  { name: "ホーム", url: "/ja" },
  { name: "製品", url: "/ja/products" },
  { name: "サービス", url: "/ja/services" },
  { name: "ブログ", url: "/ja/blog" },
  { name: "お問い合わせ", url: "/ja/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "エコシステム",
    links: [
      { name: "ドキュメント", url: "/ja/welcome-to-docs/" },
      { name: "ツール＆設備", url: "/ja/products" },
      { name: "建設サービス", url: "/ja/services" },
    ],
  },
  {
    section: "会社",
    links: [
      { name: "会社概要", url: "#" },
      { name: "ブログ", url: "/ja/blog" },
      { name: "採用情報", url: "#" },
      { name: "お客様", url: "#" },
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