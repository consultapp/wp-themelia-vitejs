export default function Author({ date, author = "Дмитрий" }) {
  const d = new Date(date);
  return (
    <div className="entry-byline small font-secondary">
      <time
        className="entry-published updated"
        dateTime={d}
        itemProp="datePublished"
        title={d.toDateString()}
      >
        {d.toLocaleDateString()}
      </time>
      <span className="post-by"> by </span>
      <span
        className="entry-author"
        itemProp="author"
        itemScope="itemscope"
        itemType="http://schema.org/Person"
      >
        <span itemProp="name">{author}</span>
      </span>
      <span className="comments-sep no-comments"></span>
      <span className="comments-link zero-comments"></span>
    </div>
  );
}
