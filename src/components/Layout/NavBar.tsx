import { signOut } from 'next-auth/react';

import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import SidebarItem from '@/components/layout/NavBarItem';
import SidebarLogo from '@/components/layout/NavBarLogo';

import useCurrentUser from '@/hooks/useCurrentUser';

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      label: 'Home',
      href: '/',
      icon: BsHouseFill
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: BsBellFill
    },
    {
      label: 'Profile',
      href: '/users/123',
      icon: FaUser
    }
  ];

  return (
    <div
      className="relative h-full col-span-1 pr-4 md:pr-6"
      style={{ minHeight: '100vh' }}
    >
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[175px]">
          <SidebarLogo />
          <div className="pt-10">
            {items.map((item) => (
              <SidebarItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </div>
          <div className="absolute bottom-0 z-10 flex logout-container py-11">
            {currentUser && (
              <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="logOut" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
