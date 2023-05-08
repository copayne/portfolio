import Link from 'next/link';

const ABOUT_MENU_ITEM = 'ABOUT';
const PROJECTS_MENU_ITEM = 'PROJECTS';
const CONTACT_MENU_ITEM = 'CONTACT';

const NAVBAR = [
  { id: ABOUT_MENU_ITEM, label: 'about' },
  { id: PROJECTS_MENU_ITEM, label: 'projects' },
  { id: CONTACT_MENU_ITEM, label: 'contact' },
];

const Navbar = () => (
  <div className="flex items-end mx-4">
    {
      NAVBAR.map(menuItem => (
        <p
          key={menuItem.id}
          className="mx-2 px-1 text-xs sm:text-lg underline cursor-pointer"
        >
          <Link href={`#${menuItem.label}`}>
            {menuItem.label}
          </Link>
        </p>
      ))
    }
  </div>
);

export default Navbar;