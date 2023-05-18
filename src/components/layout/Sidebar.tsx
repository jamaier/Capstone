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
    <div className="w-full pl-11 border-y">
      <div className="flex flex-row items-center justify-center">
        <div className='mx-10'>
          <SidebarLogo />
        </div>
        {items.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            alert={item.alert}
            />
        ))}
        {currentUser && (
          <SidebarItem
            onClick={() => signOut()}
            icon={BiLogOut}
            label="logOut"
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
