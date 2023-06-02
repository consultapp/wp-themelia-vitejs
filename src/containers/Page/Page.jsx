import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPage } from "../../store/entities/page/thunk/fetchPage";
import { useParams } from "react-router-dom";
import Page from "../../components/Page/Page";
import {
  selectIsPageLoading,
  selectPageBySlug,
} from "../../store/entities/page/selectors";

export default function PageContainer() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const page = useSelector((state) => selectPageBySlug(state, { slug }));
  const isLoading = useSelector(selectIsPageLoading);

  useEffect(() => {
    dispatch(fetchPage(slug));
  }, [dispatch, slug]);

  return <Page page={page} isLoading={isLoading} />;
}
