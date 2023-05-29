import PostsContainer from "../../containers/Posts/Posts";

export default function MainArea() {
  return (
    <main
      id="content"
      className="content grid-70 tablet-grid-66"
      role="main"
      tabIndex="-1"
    >
      <PostsContainer />
    </main>
  );
}
