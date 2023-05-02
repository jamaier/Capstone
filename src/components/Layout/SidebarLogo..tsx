import { useRouter } from "next/router";
import { FaDev } from "react-icons/fa";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <FaDev size={32} />
    </div>
  );
};

export default SidebarLogo;
