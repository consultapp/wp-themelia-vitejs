import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../constants/index";
import { fetchPost } from "./thunk/fetchPost";

const postEntityAdapter = createEntityAdapter();

export const postSlice = createSlice({
  name: "post",
  initialState: postEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
    loadedPages: [],
  }),
  extraReducers: {
    [fetchPost.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.pending;
    },
    [fetchPost.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.fulfilled;

      if (
        payload &&
        payload.length &&
        payload[0].pageIndex &&
        !state.loadedPages.includes(Number(payload[0].pageIndex))
      )
        state.loadedPages.push(Number(payload[0].pageIndex));

      postEntityAdapter.setMany(state, payload);
    },
    [fetchPost.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.fulfilled
          : LOADING_STATUS.rejected;
    },
  },
});
