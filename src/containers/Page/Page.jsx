import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPage } from "../../store/entities/page/thunk/fetchPage";
import { redirect, useParams } from "react-router-dom";
import Page from "../../components/Page/Page";
import {
  selectIsPageLoading,
  selectIsPageNotFound,
  selectPageBySlug,
} from "../../store/entities/page/selectors";

export default function PageContainer() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const page = useSelector((state) => selectPageBySlug(state, { slug }));
  const isLoading = useSelector(selectIsPageLoading);
  const isNotFound = useSelector(selectIsPageNotFound);

  useEffect(() => {
    if (!page) dispatch(fetchPage(slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  // if (isNotFound) return redirect("/404");

  return <Page page={page} isLoading={isLoading} />;
}
