import cookieStore from "@/redux/cookies/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cookies: cookieStore
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
