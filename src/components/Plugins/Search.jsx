export default function Search({ result, search, handleSearchChange }) {
  return (
    <section id="search-2" className="widget widget_search">
      <form role="search" className="search-form" action="/">
        <label className="font-secondary label-search">
          <span className="screen-reader-text">Поиск:</span>
          <input
            type="search"
            className="search-field font-primary"
            placeholder="Поиск…"
            value={search}
            onChange={handleSearchChange}
          />
        </label>
      </form>
      {Boolean(result.length) &&
        result.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
    </section>
  );
}
