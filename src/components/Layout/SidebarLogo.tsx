import { useRouter } from "next/router";
import { FaDev } from "react-icons/fa"; //TODO - replace with custom logo

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}>
      <FaDev size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
