export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About Us',
    href: '/About Us',
    children: [
      {
        label: 'Documentation',
        href: '/About Us#documentation'
      },
      {
        label: 'Our Mission',
        href: '/About Us#mission'
      },
      {
        label: 'Blog',
        href: '/About Us#blog'
      }
    ]
  },
  {
    label: 'Learning Lab',
    href: '/Learning Lab'
  }
];
