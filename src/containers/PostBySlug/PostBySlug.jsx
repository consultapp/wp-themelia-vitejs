import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsPostLoading,
  selectPostBySlug,
  selectPostLoadingStatus,
} from "../../store/entities/post/selectors";
import Post from "../../components/Post/Post";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../store/entities/post/thunk/fetchPost";

export default function PostBySlugContainer() {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const isLoading = useSelector(selectIsPostLoading);
  const loadingStatus = useSelector(selectPostLoadingStatus);

  const post = useSelector((state) => selectPostBySlug(state, { slug }));

  useEffect(() => {
    if (!post && !isLoading) dispatch(fetchPost({ slug }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, post]);

  return (
    <Post
      isLoading={!post || isLoading}
      post={post}
      key={slug}
      loadingStatus={loadingStatus}
    />
  );
}
