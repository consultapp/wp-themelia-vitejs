import { useEffect, useMemo } from "react";
import PostShort from "../../components/PostShort/PostShort";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../store/entities/post/thunk/fetchPost";
import {
  selectIfPostIdInIds,
  selectIsPostLoading,
  selectPostById,
} from "../../store/entities/post/selectors";
import Post from "../../components/Post/Post";
import { useParams } from "react-router-dom";

export default function PostContainer({ postId, loadFull = false }) {
  const dispatch = useDispatch();
  const postIdParams = useParams();

  let currentPostId = postIdParams?.postId ? postIdParams.postId : postId;

  // const isPostAlredyLoaded = useSelector((state) =>
  //   selectIfPostIdInIds(state, { postId: currentPostId })
  // );

  const isLoading = useSelector(selectIsPostLoading);
  const post = useSelector((state) =>
    selectPostById(state, { postId: currentPostId })
  );

  console.log("currentPostId", currentPostId, isLoading, post);

  useEffect(() => {
    if (!post) dispatch(fetchPost({ postId: currentPostId, loadFull }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, post]);

  const render = useMemo(
    () =>
      loadFull ? (
        <Post isLoading={!post || isLoading} post={post} key={currentPostId} />
      ) : (
        <PostShort
          isLoading={!post || isLoading}
          post={post}
          key={currentPostId}
        />
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, currentPostId, loadFull, post]
  );

  return render;
}
