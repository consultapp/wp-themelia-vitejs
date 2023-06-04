import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostNav } from "../../store/entities/postNav/thunk/fetchPostNav";
import {
  selectIsPostNavLoading,
  selectPostNavCount,
} from "../../store/entities/postNav/selectors";
import Pagination from "../../components/Pagination/Pagination";
import { useParams } from "react-router-dom";

export default function PaginationContainer() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsPostNavLoading);
  const postsCount = useSelector(selectPostNavCount);

  const { pageIndex = 1 } = useParams();

  useEffect(() => {
    dispatch(fetchPostNav());
  }, [dispatch]);

  return <Pagination postsCount={postsCount} pageIndex={Number(pageIndex)} />;
}
