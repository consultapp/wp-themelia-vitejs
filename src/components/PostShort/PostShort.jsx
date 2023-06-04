import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { trimLinkReadNext } from "../../utils/functions";

export default function PostShort({ isLoading, post }) {
  console.log("PostShort");

  if (isLoading) return <Loading />;
  if (!post) return <div>Error???</div>;

  const { id, excerpt, slug, title } = post;

  const postTitle = title?.rendered || "";
  const postExcerpt = trimLinkReadNext(excerpt.rendered);

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
          <Link
            to={`/post/${slug}`}
            rel="bookmark"
            itemProp="url"
            dangerouslySetInnerHTML={{ __html: postTitle }}
          ></Link>
        </h2>
      </header>
      <div className="entry-summary" itemProp="description">
        <p dangerouslySetInnerHTML={{ __html: postExcerpt }}></p>
        <Link to={`/post/${slug}`} className="entry-more-link">
          <span>Читать далее</span>
          <span className="screen-reader-text">{postTitle}</span>
        </Link>
      </div>
    </div>
  );
}
