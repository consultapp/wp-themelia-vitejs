import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../constants/index";
import { fetchPost } from "./thunk/fetchPost";

const postEntityAdapter = createEntityAdapter();

export const postSlice = createSlice({
  name: "post",
  initialState: postEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
    status404: false,
    loadedPages: [],
    slugToId: {},
  }),
  extraReducers: {
    [fetchPost.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.pending;
      state.status404 = false;
    },
    [fetchPost.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.fulfilled;
      state.status404 = false;
      payload.forEach((item) => {
        if (item.slug) state.slugToId[item.slug] = item.id;
      });
      if (
        payload?.length &&
        payload[0].pageIndex &&
        !state.loadedPages.includes(Number(payload[0].pageIndex))
      )
        state.loadedPages.push(Number(payload[0].pageIndex));

      postEntityAdapter.setMany(state, payload);
    },
    [fetchPost.rejected]: (state, { payload }) => {
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
