import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Post({ isLoading, post, loadingStatus }) {
  if (isLoading) return <Loading />;
  if (!post) return <div>Post Error???</div>;

  const { id, content, slug, title } = post;

  const postTitle = title?.rendered || "";
  const postContent = content?.rendered;

  return (
    <div
      id={id}
      className="entry author-consultapp post-1543 post type-post status-publish format-standard has-post-thumbnail category-stati"
      itemScope="itemScope"
      itemType="http://schema.org/BlogPosting"
      itemProp="blogPost"
    >
      <header className="entry-header">
        <h2 className="entry-title font-headlines" itemProp="headline">
          <Link to={`/post/${slug}`} rel="bookmark" itemProp="url">
            {postTitle}
          </Link>
        </h2>
      </header>
      <div className="entry-summary" itemProp="description">
        <p dangerouslySetInnerHTML={{ __html: postContent }}></p>
        <Link to={`/post/${slug}`} className="entry-more-link">
          <span>Читать далее</span>
          <span className="screen-reader-text">{postTitle}</span>
        </Link>
      </div>
    </div>
  );
}
