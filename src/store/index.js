import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { postSlice } from "./entities/post";
import { logger } from "./middlewares/logger";

const rootReducer = combineReducers({
  post: postSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
