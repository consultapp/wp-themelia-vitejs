import { Link } from "react-router-dom";
import { LOADING_STATUS } from "../../constants";
import Loading from "../Loading/Loading";
import styles from "./style.module.css";

export default function Search({ result, search, handleSearchChange }) {
  const { loadingStatus, data } = result;
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
        </label>{" "}
        {data.length > 0 && loadingStatus === LOADING_STATUS.fulfilled && (
          <ul className={styles.search}>
            {data.map((item) => {
              return (
                <li key={item.id} className={styles.searchLi}>
                  <Link
                    to={
                      item.type +
                      item.url.replace(import.meta.env.VITE_SITE_BASE_URL, "")
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {data.length === 0 && loadingStatus === LOADING_STATUS.fulfilled && (
          <div className={styles.search}>No results</div>
        )}
        {loadingStatus === LOADING_STATUS.pending && (
          <div className={styles.search}>
            <Loading />
          </div>
        )}
        {loadingStatus === LOADING_STATUS.rejected && (
          <div className={styles.search}>Loading error.</div>
        )}
      </form>
    </section>
  );
}
