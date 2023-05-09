import Image from 'next/image';

import useUser from '@/hooks/useUser';
import Avatar from '../Avatar';

interface UserHeroProps {
  userId: string;
}

const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
  const { data: fetchedUser } = useUser(userId);

  return (
    <div>
      <div className="relative bg-neutral-700 h-44">
        {fetchedUser?.coverImage && (
          <Image
            src={fetchedUser.coverImage}
            alt="Cover Image"
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        <div className='absolute -bottom-16 left-4'> // -bottom appends to override the default bottom value  
          <Avatar userId={userId} isLarge hasBorder />
        </div>
      </div>
    </div>
  );
};

export default UserHero;
