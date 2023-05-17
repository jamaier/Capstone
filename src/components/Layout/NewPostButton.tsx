import { useCallback } from "react";
import { SiStarship } from "react-icons/si";
import { useRouter } from "next/router";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const NewPostButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push('/');
  }, [loginModal, router, currentUser]);

  return (
    <div onClick={onClick}>
      <div className="flex items-center justify-center p-4 mt-6 transition bg-green-500 rounded-full cursor-pointer lg:hidden h-14 w-14 hover:bg-opacity-80">
        <SiStarship size={24} color="white" />
      </div>
      <div className="hidden px-4 py-2 mt-6 bg-green-500 rounded-full cursor-pointer lg:block hover:bg-opacity-90">
        <p 
          className="
            hidden 
            lg:block 
            text-center
            font-semibold
            text-white 
            text-[20px]
        ">
          New Post
        </p>
      </div>
    </div>
  );
};

export default NewPostButton;
