import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../constants/index";
import { fetchPost } from "./thunk/fetchPost";
import { trimLinkReadNext } from "../../../utils/functions";

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

      if (
        payload?.length &&
        payload[0].pageIndex &&
        !state.loadedPages.includes(Number(payload[0].pageIndex))
      ) {
        state.loadedPages.push(Number(payload[0].pageIndex));
      }

      const newPayload = payload.map((item) => {
        if (item.slug) {
          state.slugToId[item.slug] = item.id;
        }
        return {
          ...item,
          content: trimLinkReadNext(item?.content?.rendered || ""),
          excerpt: trimLinkReadNext(item?.excerpt?.rendered || ""),
          title: item?.title?.rendered,
        };
      });

      postEntityAdapter.setMany(state, newPayload);
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
