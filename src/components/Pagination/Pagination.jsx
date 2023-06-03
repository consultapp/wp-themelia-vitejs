import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostNav } from "../../store/entities/postNav/thunk/fetchPostNav";
import {
  selectIsPostNavLoading,
  selectPostNavCount,
} from "../../store/entities/postNav/selectors";

export default function PaginationContainer() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsPostNavLoading);
  const postsCount = useSelector(selectPostNavCount);

  useEffect(() => {
    dispatch(fetchPostNav());
  }, [dispatch]);

  console.log("postsCount", postsCount, isLoading);

  return <div>PostPageNav</div>;
}
