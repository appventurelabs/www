type INavMenuItemProps = {
  href: string;
  children: string;
};

const NavMenuItem = (props: INavMenuItemProps) => (
  <li className="hover:text-white">
    <a className="p-3 text-xl" href={props.href}>
      {props.children}
    </a>
  </li>
);

export { NavMenuItem };
