import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';

interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}

export const PostItem: React.FC<PostItemProps> = ({ data, userId }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  
  const { data: currentUser } = useCurrentUser();

  const goToUser = useCallback((event: any) => {
    // stop propgation same-same as the Avatar component. stop forgetting this and looking it up every time, dummy
    event.stopPropagation(); // again, this is to prevent the onClick from bubbling up to the parent element
    router.push(`/users/${data.user.id}`)
  }, [router, data.user.id]);

  return (
    <div>PostItem</div>
  )
}

export default PostItem
