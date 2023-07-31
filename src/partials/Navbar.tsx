import {
  NavbarTwoColumns,
  NavMenu,
  Section,
} from 'astro-boilerplate-components';

import { NavMenuItem } from '@/components/NavMenuItem';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <img
          src="/assets/images/appventurelabs-logo.png"
          style={{ maxWidth: '300px' }}
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blog</NavMenuItem>
        <NavMenuItem href="mailto:info@appventurelabs.com">Contact</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
