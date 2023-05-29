import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../../constants";
import { selectIfPostIdInIds, selectIsPostPageLoaded } from "../selectors";

export const fetchPost = createAsyncThunk(
  "post/fetchPostById",
  async (
    { postId, pageIndex = 1, loadFull = false },
    { getState, rejectWithValue }
  ) => {
    const state = getState();
    const isPostPageLoaded = selectIsPostPageLoaded(state, {
      pageIndex,
    });

    const isPostAlreadyLoaded = selectIfPostIdInIds(state, { postId });
    console.log("isPostAlreadyLoaded", isPostAlreadyLoaded);

    if (isPostAlreadyLoaded) {
      return rejectWithValue(LOADING_STATUS.earlyAdded);
    }

    if (!postId && isPostPageLoaded) {
      return rejectWithValue(LOADING_STATUS.earlyAdded);
    }

    const url = new URL("posts", import.meta.env.VITE_API_BASE_URL);

    const fields = `id,title,categories,excerpt,date,link,type,slug,modified${
      loadFull ? "content" : ""
    }`;
    url.searchParams.set("_fields", fields);

    if (!postId && pageIndex) url.searchParams.set("page", pageIndex);
    if (postId) url.searchParams.set("include", postId);

    url.searchParams.set("per_page", import.meta.env.VITE_POSTS_PER_PAGE);

    const response = await fetch(url);
    const json = await response.json();

    return json.map((item) => {
      return { ...item, pageIndex };
    });
  }
);

// https://consultapp.ru/wp-json/wp/v2/pages?_fields=id,title

// author
// :
// 1
// categories
// :
// [40, 42, 6]
// comment_status
// :
// "closed"
// content
// :
// {,  }
// date
// :
// "2020-04-12T17:24:26"
// date_gmt
// :
// "2020-04-12T14:24:26"
// excerpt
// :
// {,…}
// featured_media
// :
// 1081
// format
// :
// "standard"
// guid
// :
// {rendered: "https://consultapp.ru/?p=1070"}
// id
// :
// 1070
// link
// :
// "https://consultapp.ru/simple-bot-for-telegram-php/"
// meta
// :
// []
// modified
// :
// "2021-01-09T12:05:45"
// modified_gmt
// :
// "2021-01-09T09:05:45"
// ping_status
// :
// "open"
// slug
// :
// "simple-bot-for-telegram-php"
// status
// :
// "publish"
// sticky
// :
// false
// tags
// :
// []
// template
// :
// ""
// title
// :
// {rendered: "Простейший бот для Телеграма на PHP"}
// type
// :
// "post"
// yoast_head
// :

// yoast_head_json
// :
// {title: "Простейший бот для Телеграма на PHP",…}
// _links
// :
// {self: [{href: "https://consultapp.ru/wp-json/wp/v2/posts/1070"}],…}
