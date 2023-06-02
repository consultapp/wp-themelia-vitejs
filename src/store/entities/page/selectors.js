import { LOADING_STATUS } from "../../../constants";

export const selectPageModule = (state) => state.post;

export const selectPageSlugToId = (state) => selectPageModule(state).slugToId;

export const selectPageById = (state, { postId }) =>
  selectPageModule(state).entities[postId];

export const selectPageBySlug = (state, { slug }) =>
  selectPageById(state, { postId: (selectPageSlugToId(state) || {})[slug] });

export const selectPageLoadingStatus = (state) =>
  selectPageModule(state).loadingStatus;

export const selectIsPageLoading = (state) =>
  selectPageLoadingStatus(state) === LOADING_STATUS.pending;
