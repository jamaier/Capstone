

interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}

export const PostItem: React.FC<PostItemProps> = ({ data, userId }) => {
  return (
    <div>PostItem</div>
  )
}

export default PostItem
