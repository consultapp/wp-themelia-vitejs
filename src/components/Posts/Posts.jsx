import Loading from "../Loading/Loading";

export default function Posts({ isLoading }) {
  if (isLoading) return <Loading />;
  return <div>Posts</div>;
}
