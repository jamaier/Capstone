import React from 'react';

import FollowBar from '@/components/layout/FollowBar';
import Sidebar from '@/components/layout/Sidebar';
import UserCard from '@/components/layout/UserCard';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-neutral-900">
      <div className="container h-full max-w-6xl mx-auto xl:px-30">
        <Sidebar />
        <div className="grid h-full grid-cols-5 md:col-span-3">
          <div>
            <UserCard />
          </div>
          <div
            className="
              col-span-3 
              lg:col-span-3
              border-x-[1px]  
              border-neutral-800
          "
          >
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
