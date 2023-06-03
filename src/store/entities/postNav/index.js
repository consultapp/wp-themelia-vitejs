import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../constants/index";
import { fetchPostNav } from "./thunk/fetchPostNav";

const postNavEntityAdapter = createEntityAdapter();

export const postNavSlice = createSlice({
  name: "postNav",
  initialState: postNavEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
    postsCount: 0,
  }),
  extraReducers: {
    [fetchPostNav.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.pending;
    },
    [fetchPostNav.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.fulfilled;
      state.postsCount = payload.length || 0;
      postNavEntityAdapter.setAll(state, payload);
    },
    [fetchPostNav.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.fulfilled
          : LOADING_STATUS.rejected;
    },
  },
});
