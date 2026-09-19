import type { IconName } from '@components/ui/icons/icons';

/**
 * Structure of the optional mega menu (`NavbarMegaMenu.astro`): ids, icons
 * and URLs. Titles and descriptions live in `copy.nav.megaMenu`.
 */
export type MegaMenuServiceId =
  'guides' | 'integrations' | 'experts' | 'tools' | 'plans' | 'community';

export const megaMenuServices: {
  id: MegaMenuServiceId;
  icon: IconName;
  url: string;
}[] = [
  { id: 'guides', icon: 'guides', url: '#' },
  { id: 'integrations', icon: 'puzzle', url: '#' },
  { id: 'experts', icon: 'rocket', url: '#' },
  { id: 'tools', icon: 'hammer', url: '#' },
  { id: 'plans', icon: 'sparks', url: '#' },
  { id: 'community', icon: 'community', url: '#' },
];

export const megaMenuSuccessStory = {
  image:
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  learnMoreUrl: '#',
};
