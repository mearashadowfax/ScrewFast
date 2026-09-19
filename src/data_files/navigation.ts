/**
 * Navigation structure shared by every locale: stable ids, unlocalised paths
 * and social URLs. The label for each id lives in the copy tables
 * (`copy.nav.labels`, `copy.nav.footer.sections`), so translators never touch
 * a path and code never keys on a translated label.
 */
export type NavLinkId = 'home' | 'products' | 'services' | 'blog' | 'contact';

export const navLinks: { id: NavLinkId; path: string }[] = [
  { id: 'home', path: '/' },
  { id: 'products', path: '/products' },
  { id: 'services', path: '/services' },
  { id: 'blog', path: '/blog' },
  { id: 'contact', path: '/contact' },
];

export type FooterSectionId = 'ecosystem' | 'company';
export type FooterLinkId =
  | 'documentation'
  | 'tools'
  | 'services'
  | 'about'
  | 'blog'
  | 'careers'
  | 'customers';

export const footerSections: {
  id: FooterSectionId;
  links: { id: FooterLinkId; path: string; badge?: 'hiring' }[];
}[] = [
  {
    id: 'ecosystem',
    links: [
      { id: 'documentation', path: '/welcome-to-docs/' },
      { id: 'tools', path: '/products' },
      { id: 'services', path: '/services' },
    ],
  },
  {
    id: 'company',
    links: [
      { id: 'about', path: '#' },
      { id: 'blog', path: '/blog' },
      { id: 'careers', path: '#', badge: 'hiring' },
      { id: 'customers', path: '#' },
    ],
  },
];

export const socialLinks = {
  facebook: 'https://www.facebook.com/',
  x: 'https://twitter.com/',
  github: 'https://github.com/mearashadowfax/ScrewFast',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/',
};
