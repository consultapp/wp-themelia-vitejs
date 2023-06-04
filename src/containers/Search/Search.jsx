import { useCallback, useEffect, useRef, useState } from "react";
import Search from "../../components/Plugins/Search";
import { LOADING_STATUS } from "../../constants";
import { useLocation } from "react-router-dom";

const initialState = { loadingStatus: LOADING_STATUS.idle, data: [] };

async function searchByText(text) {
  // https://consultapp.ru/wp-json/wp/v2/search?per_page=10&search=1c

  if (!text) return;

  const regexp = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
  const url = new URL("search", import.meta.env.VITE_API_BASE_URL);
  url.searchParams.set("per_page", import.meta.env.VITE_SEARCH_PER_PAGE || 5);
  url.searchParams.set("search", text.replaceAll(regexp, ""));

  const response = await fetch(url);
  return response.json();
}

export default function SearchContainer() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(initialState);
  const { pathname } = useLocation();
  const timer = useRef();

  const handleSearchChange = useCallback((event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }, []);

  useEffect(() => {
    if (search.length < 1) {
      if (timer) clearTimeout(timer.current);
      setResult(initialState);
      return;
    }

    if (timer) clearTimeout(timer.current);
    setResult({ ...initialState, loadingStatus: LOADING_STATUS.pending });

    timer.current = setTimeout(() => {
      searchByText(search)
        .then((data) => {
          setResult({ data, loadingStatus: LOADING_STATUS.fulfilled });
        })
        .catch(() => {
          setResult({
            ...initialState,
            loadingStatus: LOADING_STATUS.rejected,
          });
        });
    }, 300);
  }, [search]);

  useEffect(() => {
    setResult(initialState);
    setSearch("");
  }, [pathname]);

  return (
    <Search
      handleSearchChange={handleSearchChange}
      search={search}
      result={result}
    />
  );
}
