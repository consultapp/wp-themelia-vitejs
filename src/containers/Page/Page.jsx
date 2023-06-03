import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPage } from "../../store/entities/page/thunk/fetchPage";
import { useParams } from "react-router-dom";
import Page from "../../components/Page/Page";
import {
  selectIsPageLoading,
  selectIsPageNotFound,
  selectPageBySlug,
} from "../../store/entities/page/selectors";
import { pageSlice } from "../../store/entities/page/index";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";

export default function PageContainer() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const page = useSelector((state) => selectPageBySlug(state, { slug }));
  const isLoading = useSelector(selectIsPageLoading);
  const isNotFound = useSelector(selectIsPageNotFound);

  useEffect(() => {
    if (page && isNotFound) dispatch(pageSlice.actions.reset404());
  }, [dispatch, page, isNotFound]);

  useEffect(() => {
    if (!page) dispatch(fetchPage(slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page, slug]);

  if (isNotFound) return <NotFoundPage />;

  return <Page page={page} isLoading={isLoading} />;
}
