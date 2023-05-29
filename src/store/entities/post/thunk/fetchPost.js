import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk(
  "post/fetchPostById",
  async (
    { postId, pageIndex, loadFull = false },
    { getState, rejectWithValue }
  ) => {
    // const state = getState();
    // const restaurantMenu = selectMenuByRestaurantId(state, {
    //   restaurantId,
    // });
    // const dishIds = selectDishIds(state);
    // if (
    //   restaurantMenu &&
    //   restaurantMenu.every((dishId) => dishIds.includes(dishId))
    // ) {
    //   return rejectWithValue(LOADING_STATUS.earlyAdded);
    // }

    const url = new URL("posts", import.meta.env.VITE_API_BASE_URL);

    const fields = `id,categories,excerpt,date,_links,type,slug,modified${
      loadFull ? "content" : ""
    }`;
    url.searchParams.set("_fields", fields);
    if (pageIndex) url.searchParams.set("page", pageIndex);

    const response = await fetch(url);
    return await response.json();
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
