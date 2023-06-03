export default function Author() {
  return (
    <div className="entry-byline small font-secondary">
      <time
        className="entry-published updated"
        dateTime="2020-04-12T17:24:26+03:00"
        itemProp="datePublished"
        title="Воскресенье, 12 апреля, 2020, 5:24 пп"
      >
        12.04.2020
      </time>
      <span className="post-by">by</span>
      <span
        className="entry-author"
        itemProp="author"
        itemScope="itemscope"
        itemType="http://schema.org/Person"
      >
        <span itemProp="name">Дмитрий</span>
      </span>
      <span className="comments-sep no-comments"></span>
      <span className="comments-link zero-comments"></span>
    </div>
  );
}
