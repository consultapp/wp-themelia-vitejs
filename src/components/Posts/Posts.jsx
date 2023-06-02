import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import PostContainer from "../../containers/Post/Post";

export default function Posts({ isLoading, postIds }) {
  if (isLoading) return <Loading />;
  if (!postIds.length) {
    <div>Posts not found</div>;
  }

  return (
    <>
      {postIds.map((id) => {
        return <PostContainer postId={id} key={id} />;
      })}
      <Pagination />
    </>
  );
}
