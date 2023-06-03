import PostShort from "../../components/PostShort/PostShort";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsPostLoading,
  selectIsPostNotFound,
  selectPostById,
  selectPostBySlug,
} from "../../store/entities/post/selectors";
import Post from "../../components/Post/Post";
import { useEffect } from "react";
import { fetchPost } from "../../store/entities/post/thunk/fetchPost";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import { postSlice } from "../../store/entities/post";

export default function PostContainer({ postId, showShort = false }) {
  const dispatch = useDispatch();
  const params = useParams();
  const { slug } = params;

  const isLoading = useSelector(selectIsPostLoading);
  const isNotFound = useSelector(selectIsPostNotFound);

  const postById = useSelector((state) => selectPostById(state, { postId }));
  const postBySlug = useSelector((state) => selectPostBySlug(state, { slug }));
  const post = postById ? postById : postBySlug;

  useEffect(() => {
    if (post && isNotFound) dispatch(postSlice.actions.reset404());
  }, [dispatch, post, isNotFound]);

  useEffect(() => {
    if (!post) dispatch(fetchPost({ postId, slug }));
  }, [dispatch, post, postId, slug]);

  if (isNotFound) return <NotFoundPage />;

  return showShort ? (
    <PostShort isLoading={!post || isLoading} post={post} key={postId} />
  ) : (
    <Post isLoading={!post || isLoading} post={post} key={postId} />
  );
}
