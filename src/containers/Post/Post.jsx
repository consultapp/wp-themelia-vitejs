import PostShort from "../../components/PostShort/PostShort";
import { useSelector } from "react-redux";
import {
  selectIsPostLoading,
  selectPostById,
  selectPostLoadingStatus,
} from "../../store/entities/post/selectors";
import Post from "../../components/Post/Post";

export default function PostContainer({ postId, loadFull = false }) {
  // const dispatch = useDispatch();

  const isLoading = useSelector(selectIsPostLoading);
  const post = useSelector((state) => selectPostById(state, { postId }));

  // useEffect(() => {
  //   if (!post) dispatch(fetchPost({ postId, loadFull }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch, post]);

  return loadFull ? (
    <Post
      isLoading={!post || isLoading}
      post={post}
      key={postId}
      loadingStatus={loadingStatus}
    />
  ) : (
    <PostShort isLoading={!post || isLoading} post={post} key={postId} />
  );
}
