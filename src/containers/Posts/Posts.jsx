import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../store/entities/post/thunk/fetchPost";
import Posts from "../../components/Posts/Posts";
import {
  selectIsPostLoading,
  selectIsPostPageLoaded,
  selectPostsIdsByPageIndex,
} from "../../store/entities/post/selectors";
import { useParams } from "react-router-dom";

export default function PostsContainer() {
  const { pageIndex = 1 } = useParams();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsPostLoading);
  const isPostPageLoaded = useSelector((state) =>
    selectIsPostPageLoaded(state, { pageIndex })
  );

  const postIds = useSelector((state) => {
    return selectPostsIdsByPageIndex(state, { pageIndex });
  });

  useEffect(() => {
    if (!isPostPageLoaded) dispatch(fetchPost({ pageIndex }));
  }, [dispatch, pageIndex]);

  return <Posts isLoading={isLoading} postIds={postIds} />;
}
