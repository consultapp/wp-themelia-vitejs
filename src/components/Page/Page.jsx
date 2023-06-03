import Loading from "../Loading/Loading";

export default function Page({ page, isLoading }) {
  if (isLoading) return <Loading />;
  if (!page) return <div>Error of loading</div>;

  const { id, title, content } = page;
  const renderTitle = title?.rendered;
  const renderContent = content?.rendered;

  return (
    <article
      id={id}
      className="entry author-consultapp page type-page status-publish"
      itemScope="itemscope"
      itemType="http://schema.org/CreativeWork"
    >
      <header className="entry-header">
        <h1 className="entry-title font-headlines" itemProp="headline">
          {renderTitle}
        </h1>
      </header>
      <div
        className="entry-content"
        itemProp="text"
        dangerouslySetInnerHTML={{ __html: renderContent }}
      ></div>
      <footer className="entry-footer small font-secondary"></footer>
    </article>
  );
}
