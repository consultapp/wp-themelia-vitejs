import { useEffect, useMemo } from "react";
import PostShort from "../../components/PostShort/PostShort";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../store/entities/post/thunk/fetchPost";
import {
  selectIfPostIdInIds,
  selectIsPostLoading,
  selectPostById,
} from "../../store/entities/post/selectors";

export default function PostShortContainer({ postId }) {
  const dispatch = useDispatch();

  const isPostAlredyLoaded = useSelector((state) =>
    selectIfPostIdInIds(state, { postId })
  );

  const isLoading = useSelector(selectIsPostLoading);
  const post = useSelector((state) => selectPostById(state, { postId }));

  useEffect(() => {
    if (!isPostAlredyLoaded) dispatch(fetchPost({ postId }));
  }, [dispatch, postId, isPostAlredyLoaded]);

  const render = useMemo(
    () => <PostShort isLoading={isLoading} post={post} key={postId} />,
    [isLoading, postId]
  );

  return render;
}
