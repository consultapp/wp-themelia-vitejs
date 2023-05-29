import { useEffect } from "react";
import PostShort from "../../components/PostShort/PostShort";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../store/entities/post/thunk/fetchPost";
import { selectIsPostLoading } from "../../store/entities/post/selectors";

export default function PostShortContainer({ postId }) {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsPostLoading);

  useEffect(() => {
    dispatch(fetchPost({ postId }));
  }, [dispatch, postId]);

  return <PostShort isLoading={isLoading} />;
}
