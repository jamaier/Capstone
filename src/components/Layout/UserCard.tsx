import Image from 'next/image';

import useCurrentUser from '@/hooks/useCurrentUser';

import Avatar from '../Avatar';

interface UserCardProps {
  userId?: string;
}

const UserCard: React.FC<UserCardProps> = ({ userId }) => {
  const { data: currentUser } = useCurrentUser();

  return (
    <div>
      <div className="relative bg-neutral-700 h-44 lg:block">
        {currentUser?.coverImage && (
          <Image
            src={currentUser.coverImage}
            alt="Cover Image"
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
        <div className="absolute -bottom-[9rem] left-8">
          {' '}
          {/* // (-)bottom appends to override the default bottom value   */}
          <Avatar userId={currentUser.id} isLarge hasBorder />
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-xl font-semibold text-white">
              {currentUser.name}
            </p>
            <p className="text-sm text-neutral-400">{currentUser.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
