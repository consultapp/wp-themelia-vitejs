import { LOADING_STATUS } from "../../../constants";

export const selectPostModule = (state) => state.post;

export const selectPostById = (state, { postId }) =>
  selectPostModule(state).entities[postId];

export const selectPostIds = (state) => selectPostModule(state).ids;

export const selectIfPostIdInIds = (state, { postId }) =>
  selectPostIds(state).includes(postId);

export const selectPostLoadingStatus = (state) =>
  selectPostModule(state).loadingStatus;

export const selectIsPostLoading = (state) =>
  selectPostLoadingStatus(state) === LOADING_STATUS.pending;

export const selectPostsByPageIndex = (state, { pageIndex = 1 }) =>
  Object.values(selectPostModule(state).entities || {}).filter(
    (item) => item?.pageIndex === pageIndex
  );
export const selectPostsIdsByPageIndex = (state, { pageIndex = 1 }) =>
  Object.values(selectPostModule(state).entities || {}).map((item) => {
    if (item?.pageIndex === pageIndex) return item.id;
  });

export const selectLoadedPostsPages = (state) =>
  selectPostModule(state).loadedPages;

export const selectIsPostPageLoaded = (state, { pageIndex }) =>
  selectLoadedPostsPages(state).includes(pageIndex);
