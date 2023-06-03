import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Author from "../Author/Author";

export default function Post({ isLoading, post, loadingStatus }) {
  if (isLoading) return <Loading />;
  if (!post) return <div>Post Error???</div>;

  const { id, content, slug, title } = post;

  const postTitle = title?.rendered || "";
  const postContent = content?.rendered;

  return (
    <article
      id={id}
      className="entry author-consultapp post-1070 post type-post status-publish format-standard has-post-thumbnail category-telegram category-telegram-bots category-stati"
      itemScope="itemScope"
      itemType="http://schema.org/BlogPosting"
      itemProp="blogPost"
    >
      <header className="entry-header">
        <Author />
        <h1 className="entry-title font-headlines" itemProp="headline">
          <Link
            to={`/post/${slug}`}
            rel="bookmark"
            itemProp="url"
            dangerouslySetInnerHTML={{ __html: postTitle }}
          ></Link>
        </h1>
      </header>
      <div className="entry-summary" itemProp="description">
        <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
        <Link to={`/post/${slug}`} className="entry-more-link">
          <span>Читать далее</span>
          <span className="screen-reader-text">{postTitle}</span>
        </Link>
      </div>
    </article>
  );
}
