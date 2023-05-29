import { LOADING_STATUS } from "../../../constants";

export const selectPostModule = (state) => state.post;

export const selectPostById = (state, { postId }) =>
  selectPostModule(state).entities[postId];

export const selectPostIds = (state) => selectPostModule(state).ids;

export const selectPostLoadingStatus = (state) =>
  selectPostModule(state).loadingStatus;

export const selectIsPostLoading = (state) =>
  selectPostLoadingStatus(state) === LOADING_STATUS.pending;
