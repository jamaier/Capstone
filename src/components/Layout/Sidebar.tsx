import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";


import SidebarLogo from "./SidebarLogo";

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: FaUser,
    },
  ];

  return (
    <div>
      <SidebarLogo />
    </div>
  );
};

export default Sidebar;
