import { LOADING_STATUS } from "../../../constants";

export const selectPageModule = (state) => state.page;

// ID
export const selectPageById = (state, { pageId }) =>
  selectPageModule(state).entities[pageId];

// Slug
export const selectPageSlugToId = (state) =>
  selectPageModule(state).slugToId || {};
export const selectPageBySlug = (state, { slug }) =>
  selectPageById(state, {
    pageId: selectPageSlugToId(state)[encodeURI(slug).toLowerCase()],
  });
export const selectIsPageLoaded = (state, { slug }) =>
  Boolean(selectPageSlugToId(state)[encodeURI(slug).toLowerCase()]);

//  Status
export const selectPageLoadingStatus = (state) =>
  selectPageModule(state).loadingStatus;
export const selectIsPageLoading = (state) =>
  selectPageLoadingStatus(state) === LOADING_STATUS.pending;

export const selectIsPageStatus404 = (state) =>
  selectPageModule(state).status404;

export const selectIsPageNotFound = (state) =>
  selectPageLoadingStatus(state) === LOADING_STATUS.rejected &&
  selectIsPageStatus404(state);
