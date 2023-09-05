import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { postSlice } from "./entities/post";
// import { logger } from "./middlewares/logger";
import { pageSlice } from "./entities/page";
import { postNavSlice } from "./entities/postNav";

const rootReducer = combineReducers({
  post: postSlice.reducer,
  page: pageSlice.reducer,
  postNav: postNavSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
