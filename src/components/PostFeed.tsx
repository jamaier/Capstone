

interface PostFeedProps {
  userId: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <div>PostFeed</div>
  )
}

export default PostFeed