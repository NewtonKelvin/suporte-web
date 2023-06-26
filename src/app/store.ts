import userStore from "@/redux/auth/slice";
import cookieStore from "@/redux/cookies/slice";
import snackbarStore from "@/redux/snackbar/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cookies: cookieStore,
    snackbar: snackbarStore,
    user: userStore
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
