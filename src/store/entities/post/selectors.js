import { LOADING_STATUS } from "../../../constants";

export const selectPostModule = (state) => state.post;

// ID
export const selectPostIds = (state) => selectPostModule(state).ids;
export const selectPostById = (state, { postId }) =>
  selectPostModule(state).entities[postId];
export const selectIfPostAlreadyLoaded = (state, { postId }) =>
  selectPostIds(state).includes(postId);

// Slug
export const selectPostSlugToId = (state) =>
  selectPostModule(state).slugToId || {};
export const selectPostBySlug = (state, { slug }) =>
  selectPostById(state, {
    postId: selectPostSlugToId(state)[encodeURI(slug).toLowerCase()],
  });

// Loading
export const selectPostLoadingStatus = (state) =>
  selectPostModule(state).loadingStatus;
export const selectIsPostLoading = (state) =>
  selectPostLoadingStatus(state) === LOADING_STATUS.pending;

// pageIndex + Page
export const selectPostsByPageIndex = (state, { pageIndex = 1 }) =>
  Object.values(selectPostModule(state).entities || {}).filter(
    (item) => item?.pageIndex === Number(pageIndex)
  );
export const selectPostsIdsByPageIndex = (state, { pageIndex = 1 }) =>
  Object.values(selectPostModule(state).entities || {}).reduce((acc, item) => {
    if (item?.pageIndex === Number(pageIndex)) {
      acc.push(item.id);
    }
    return acc;
  }, []);

export const selectLoadedPostsPages = (state) =>
  selectPostModule(state).loadedPages;

export const selectIsPostPageLoaded = (state, { pageIndex }) =>
  selectLoadedPostsPages(state).includes(Number(pageIndex));
