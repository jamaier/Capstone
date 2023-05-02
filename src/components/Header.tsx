import { useRouter } from "next/router";
import { useCallback } from "react";

interface HeaderProps {
  label: string;
}

const Header: React.FC<HeaderProps> = ({ label }) => {
  const router = useRouter();

  const HandleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div>
        <h1 className="text-white">{label}</h1>
    </div>
  );
};

export default Header;