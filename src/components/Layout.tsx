import React from 'react';

import FollowBar from '@/components/layout/SecondaryBar';
import Sidebar from '@/components/layout/NavBar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen pt-5 bg-black">
      <div className="container h-full mx-auto max-w-8xl xl:px-30">
        <div className="grid h-full grid-cols-4">
          <Sidebar />
          <div
            className="
              col-span-3 
              lg:col-span-2 
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
