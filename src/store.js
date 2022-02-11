import {getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";

import rootReducer from "./features";

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});
