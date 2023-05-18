import { useRouter } from 'next/router';
import { SiStarship } from 'react-icons/si'; //TODO - replace with custom logo

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className="flex items-center justify-center p-4 rounded-full cursor-pointer h-14 w-14 hover:bg-green-300 hover:bg-opacity-60"
    >
      <SiStarship size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
