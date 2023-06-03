import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../../constants";
import { selectIsPageLoaded } from "../selectors";

export const fetchPage = createAsyncThunk(
  "page/fetchPage",
  async (slug, { getState, rejectWithValue }) => {
    const state = getState();

    const isPageLoaded = selectIsPageLoaded(state, { slug });

    if (isPageLoaded) {
      return rejectWithValue(LOADING_STATUS.earlyAdded);
    }

    const url = new URL("pages", import.meta.env.VITE_API_BASE_URL);
    const fields = `id,title,content,date,link,slug,modified,author`;
    url.searchParams.set("_fields", fields);
    if (slug) url.searchParams.set("slug", slug);

    const response = await fetch(url);
    const data = await response.json();
    if (!data || !data.length) {
      return rejectWithValue(LOADING_STATUS.notfound);
    }

    return data;
  }
);
