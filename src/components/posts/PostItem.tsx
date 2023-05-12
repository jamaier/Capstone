import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { formatDistanceToNowStrict } from 'date-fns';

import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import { log } from 'console'; // Auto-imported for some reason? will look into why.

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

  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [router, data.id]); // data.id is the post id

  const onLike = useCallback(async (event: any) => {
    event.stopPropogation();

    loginModal.onOpen();
  }, [loginModal]);

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);

  return (
    <div>PostItem</div>
  )
}

export default PostItem
