import { LOADING_STATUS } from "../../../constants";

export const selectPostNavModule = (state) => state.postNav;

// Status
export const selectPostNavLoadingStatus = (state) =>
  selectPostNavModule(state).loadingStatus;
export const selectIsPostNavLoading = (state) =>
  selectPostNavLoadingStatus(state) === LOADING_STATUS.pending;

// Count
export const selectPostNavCount = (state) =>
  selectPostNavModule(state).postsCount;
