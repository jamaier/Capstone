import { useRouter } from 'next/router';
import { FaDev } from 'react-icons/fa'; //TODO - replace with custom logo

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className="flex items-center justify-center p-4 rounded-full cursor-pointer mb-11 h-14 w-14 hover:bg-blue-300 hover:bg-opacity-10"
    >
      <FaDev size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
