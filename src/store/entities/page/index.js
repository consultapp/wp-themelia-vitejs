import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../constants/index";
import { fetchPage } from "./thunk/fetchPage";

const pageEntityAdapter = createEntityAdapter();

export const pageSlice = createSlice({
  name: "page",
  initialState: pageEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
    status404: false,
    slugToId: {},
  }),
  extraReducers: {
    [fetchPage.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.pending;
      state.status404 = false;
    },
    [fetchPage.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.fulfilled;
      state.status404 = false;
      payload.forEach((item) => {
        if (item.slug) state.slugToId[item.slug] = item.id;
      });

      pageEntityAdapter.setMany(state, payload);
    },
    [fetchPage.rejected]: (state, { payload }) => {
      if (payload === LOADING_STATUS.notfound) {
        state.status404 = true;
        state.loadingStatus = LOADING_STATUS.rejected;
      } else {
        state.status404 = false;
        state.loadingStatus =
          payload === LOADING_STATUS.earlyAdded
            ? LOADING_STATUS.fulfilled
            : LOADING_STATUS.rejected;
      }
    },
  },
  reducers: {
    reset404: (state) => {
      return { ...state, status404: false };
    },
  },
});
