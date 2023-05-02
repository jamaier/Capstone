import React from 'react';
import Sidebar from './Layout/Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <Sidebar />
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
