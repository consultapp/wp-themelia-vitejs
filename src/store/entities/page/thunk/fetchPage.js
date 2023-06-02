import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../../constants";
import { selectPageBySlug } from "../selectors";

export const fetchPage = createAsyncThunk(
  "page/fetchPage",
  async (slug, { getState, rejectWithValue }) => {
    const state = getState();

    // const isPageLoaded = selectPageBySlug(state, { slug });

    // if (isPageLoaded) {
    //   rejectWithValue(LOADING_STATUS.earlyAdded);
    // }

    const url = new URL("pages", import.meta.env.VITE_API_BASE_URL);
    const fields = `id,title,categories,excerpt,date,link,type,slug,modified`;
    url.searchParams.set("_fields", fields);
    if (slug) url.searchParams.set("slug", slug);

    const response = await fetch(url);
    return await response.json();
  }
);
