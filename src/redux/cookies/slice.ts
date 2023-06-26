import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { setCookie } from "nookies";

type cookieStoreType = {
	theme: "dark" | "ligth" | string;
	isDark: boolean;
};

const initialState: cookieStoreType = {
	theme: "ligth",
	isDark: false
};

export const cookieStore = createSlice({
	name: "cookieStore",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			const newTheme = state.theme === "dark" ? "ligth" : "dark";
			setCookie(null, "theme", newTheme, {
				path: "/"
			});
			state.theme = newTheme;
			state.isDark = state.theme === "dark";
		},
		setTheme: (state, action: PayloadAction<string>) => {
			setCookie(null, "theme", action.payload, {
				path: "/"
			});
			state.theme = action.payload;
			state.isDark = action.payload === "dark";
		}
	}
});

export const { toggleTheme, setTheme } = cookieStore.actions;
export default cookieStore.reducer;
