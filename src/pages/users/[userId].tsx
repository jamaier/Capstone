import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';

import Header from '@/components/Header';
import useUser from '@/hooks/useUser';
import UserHero from '@/components/users/UserHero';

const UserView = () => {
  const router = useRouter();
  const { userId } = useRouter().query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex items-center justify-center h-full">
        <ClipLoader color="lightgreen" size={80} />
      </div>
    );
  } else {
    return (
      <>
        <Header showBackArrow label={fetchedUser?.name} />
        <UserHero userId= {userId as string} />
      </>
    );
  }
};

export default UserView;
