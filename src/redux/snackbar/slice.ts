import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type snackbarStoreType = {
  open?: boolean;
  type: "error" | "warning" | "info" | "success";
  title: string;
  details?: string | null;
};

const initialState: snackbarStoreType = {
  open: false,
  type: "info",
  title: "This is an info alert — check it out!",
  details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet purus quis tortor malesuada finibus."
};

export const snackbarStore = createSlice({
  name: "snackbarStore",
  initialState,
  reducers: {
    show: (state, action: PayloadAction<snackbarStoreType>) => {
      state.open = true;
      state.type = action.payload.type;
      state.title = action.payload.title;
      state.details = action.payload.details || null;
    },
    close: (state) => {
      state.open = false;
    }
  }
});

export const { show, close } = snackbarStore.actions;
export default snackbarStore.reducer;
