import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';

import usePost from '@/hooks/usePost';

import Header from '@/components/Header';
import Form from '@/components/Form';
import PostItem from '@/components/posts/PostItem';

const PostView = () => {
  const router = useRouter();
  const { postId } = router.query;

  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex items-center justify-center h-full">
        <ClipLoader color="lightgreen" size={80} />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label="Post" />
      <PostItem data={fetchedPost} />
      <Form
        postId={postId as string}
        isComment
        placeholder="Leave a comment..."
      />
    </>
  );
};

export default PostView;
