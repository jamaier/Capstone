import { signOut } from 'next-auth/react';
import { BiLogOut } from 'react-icons/bi';
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

import useCurrentUser from '@/hooks/useCurrentUser';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/'
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
      alert: currentUser?.hasNotification
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      auth: true
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
                alert={item.alert}
              />
            ))}
          </div>
          <div className="absolute bottom-0 z-10 flex logout-container py-11">
            {currentUser && (
              <SidebarItem
                onClick={() => signOut()}
                icon={BiLogOut}
                label="logOut"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
