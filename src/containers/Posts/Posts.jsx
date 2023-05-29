import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../store/entities/post/thunk/fetchPost";
import Posts from "../../components/Posts/Posts";
import { selectIsPostLoading } from "../../store/entities/post/selectors";

export default function PostsContainer() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsPostLoading);

  console.log("isLoading", isLoading);

  useEffect(() => {
    dispatch(fetchPost({}));
  }, []);

  return <Posts isLoading={isLoading} />;
}
