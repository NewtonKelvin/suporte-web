import userStore from "@/redux/auth/slice";
import cookieStore from "@/redux/cookies/slice";
import sidebarStore from "@/redux/sidebar/slice";
import snackbarStore from "@/redux/snackbar/slice";
import socketStore from "@/redux/socket/slice";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
	key: "root",
	storage
};
const persistedReducer = persistReducer(persistConfig, userStore);

export const store = configureStore({
	reducer: {
		cookies: cookieStore,
		snackbar: snackbarStore,
		user: persistedReducer,
		socket: socketStore,
		sidebar: sidebarStore
	},
	middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
