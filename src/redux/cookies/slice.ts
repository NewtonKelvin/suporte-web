import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { setCookie } from "nookies";

type cookieStoreType = {
	theme: "dark" | "light" | string;
	isDark: boolean;
};

const initialState: cookieStoreType = {
	theme: "light",
	isDark: false
};

export const cookieStore = createSlice({
	name: "cookieStore",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			const newTheme = state.theme === "dark" ? "light" : "dark";
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
