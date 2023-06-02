import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../constants/index";
import { fetchPage } from "./thunk/fetchPage";

const pageEntityAdapter = createEntityAdapter();

export const pageSlice = createSlice({
  name: "page",
  initialState: pageEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
    slugToId: {},
  }),
  extraReducers: {
    [fetchPage.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.pending;
    },
    [fetchPage.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.fulfilled;
      payload.forEach((item) => {
        if (item.slug) state.slugToId[item.slug] = item.id;
      });

      pageEntityAdapter.setMany(state, payload);
    },
    [fetchPage.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.fulfilled
          : LOADING_STATUS.rejected;
    },
  },
});
