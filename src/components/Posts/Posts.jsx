import Loading from "../Loading/Loading";
import PostShortContainer from "../../containers/PostShort/PostShort";
import Pagination from "../Pagination/Pagination";

export default function Posts({ isLoading, postIds }) {
  if (isLoading) return <Loading />;
  if (!postIds || postIds.length) {
    <div>Posts not found</div>;
  }

  return (
    <>
      {postIds.map((id) => {
        return <PostShortContainer postId={id} key={id} />;
      })}
      <Pagination />
    </>
  );
}
