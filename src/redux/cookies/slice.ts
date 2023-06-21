import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { setCookie } from "nookies";

type cookieStoreType = {
  theme: "dark" | "ligth" | string;
};

const initialState: cookieStoreType = {
  theme: "ligth",
};

export const cookieStore = createSlice({
  name: "cookieStore",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newTheme = state.theme === "dark" ? "ligth" : "dark";
      setCookie(null, "theme", newTheme, {
        path: "/",
      });
      state.theme = newTheme;
    },
    setTheme: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      setCookie(null, "theme", action.payload, {
        path: "/",
      });
      state.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, setTheme } = cookieStore.actions;

export default cookieStore.reducer;
