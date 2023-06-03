import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPage } from "../../store/entities/page/thunk/fetchPage";
import { useParams } from "react-router-dom";
import Page from "../../components/Page/Page";
import {
  selectIsPageLoading,
  selectPageBySlug,
  selectPageLoadingStatus,
} from "../../store/entities/page/selectors";
import { LOADING_STATUS } from "../../constants";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";

export default function PageContainer() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const page = useSelector((state) => selectPageBySlug(state, { slug }));
  const isLoading = useSelector(selectIsPageLoading);
  const loadingStatus = useSelector(selectPageLoadingStatus);

  useEffect(() => {
    dispatch(fetchPage(slug));
  }, [dispatch, slug]);

  if (loadingStatus === LOADING_STATUS.rejected) return <NotFoundPage />;

  return <Page page={page} isLoading={isLoading} />;
}
