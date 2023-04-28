import Sidebar from "./Layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
