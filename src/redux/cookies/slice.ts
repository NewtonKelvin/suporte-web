import { createSlice } from "@reduxjs/toolkit";

type cookieStoreType = {
  theme: "dark" | "ligth";
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
      state.theme = state.theme === "dark" ? "ligth" : "dark";
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = cookieStore.actions;

export default cookieStore.reducer;
