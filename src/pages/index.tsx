import Header from '../components/Header';
import Form from '../components/Form';
import PostFeed from '../components/PostFeed';

export default function Home() {
  return (
    <>
      <Header />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  );
}
