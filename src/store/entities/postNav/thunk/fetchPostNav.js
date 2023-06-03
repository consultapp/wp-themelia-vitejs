import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectPostNavCount } from "../selectors";
import { LOADING_STATUS } from "../../../../constants";

export const fetchPostNav = createAsyncThunk(
  "postNav/fetchPostNav",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    if (selectPostNavCount(state) > 0) {
      return rejectWithValue(LOADING_STATUS.earlyAdded);
    }

    const url = new URL("posts", import.meta.env.VITE_API_BASE_URL);
    url.searchParams.set("_fields", "id");
    url.searchParams.set("per_page", "100");

    const response = await fetch(url);
    return await response.json();
  }
);
