import PostShort from "../../components/PostShort/PostShort";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsPostLoading,
  selectPostById,
  selectPostBySlug,
  selectPostLoadingStatus,
} from "../../store/entities/post/selectors";
import Post from "../../components/Post/Post";
import { useEffect } from "react";
import { fetchPost } from "../../store/entities/post/thunk/fetchPost";
import { LOADING_STATUS } from "../../constants";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import { useParams } from "react-router-dom";

export default function PostContainer({ postId, showShort = false }) {
  const dispatch = useDispatch();
  const params = useParams();
  const { slug } = params;
  const isLoading = useSelector(selectIsPostLoading);
  const loadingStatus = useSelector(selectPostLoadingStatus);

  console.log("slug", slug);
  const postById = useSelector((state) => selectPostById(state, { postId }));
  const postBySlug = useSelector((state) => selectPostBySlug(state, { slug }));

  const post = postById ? postById : postBySlug;

  useEffect(() => {
    if (!post) dispatch(fetchPost({ postId, slug }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, post]);

  if (loadingStatus === LOADING_STATUS.rejected) return <NotFoundPage />;

  return showShort ? (
    <PostShort isLoading={!post || isLoading} post={post} key={postId} />
  ) : (
    <Post isLoading={!post || isLoading} post={post} key={postId} />
  );
}
