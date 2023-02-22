import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import { supabaseApi } from "./slices/supabaseSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [supabaseApi.reducerPath]: supabaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supabaseApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
