import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Author from "../Author/Author";
import styles from "./style.module.css";

export default function PostShort({ isLoading, post }) {
  if (isLoading) return <Loading />;
  if (!post) return <div>Error???</div>;

  const { id, excerpt, slug, title, date } = post;

  return (
    <div
      id={id}
      className={`entry author-consultapp post type-post status-publish format-standard has-post-thumbnail category-stati ${styles.line}`}
      itemScope="itemScope"
      itemType="http://schema.org/BlogPosting"
      itemProp="blogPost"
    >
      <Author date={date} />
      <header className="entry-header">
        <h2 className="entry-title font-headlines" itemProp="headline">
          <Link
            to={`/post/${slug}`}
            rel="bookmark"
            itemProp="url"
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
        </h2>
      </header>
      <div className="entry-summary" itemProp="description">
        <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
        <Link to={`/post/${slug}`} className="entry-more-link">
          <span>Читать далее</span>
          <span className="screen-reader-text">{title}</span>
        </Link>
      </div>
    </div>
  );
}
