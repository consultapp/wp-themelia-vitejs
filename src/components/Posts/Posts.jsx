import Loading from "../Loading/Loading";
import PostContainer from "../../containers/Post/Post";
import PaginationContainer from "../../containers/Pagination/Pagination";

export default function Posts({ isLoading, postIds }) {
  if (isLoading) return <Loading />;
  if (!postIds.length) {
    <div>Posts not found</div>;
  }

  return (
    <>
      {postIds
        .map((id) => {
          return <PostContainer postId={id} key={id} showShort={true} />;
        })
        .reverse()}
      <PaginationContainer />
    </>
  );
}
