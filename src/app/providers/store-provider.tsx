"use client";
import { createContext } from "react";

import Loading from "@/components/loading/Loading";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import SnackbarProvider from "./snackbar-provider";
import ThemeProvider from "./theme-provider";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
	const GlobalContext = createContext(null);

	return (
		<GlobalContext.Provider value={null}>
			<Provider store={store}>
				<PersistGate loading={<Loading />} persistor={persistor}>
					<ThemeProvider>{children}</ThemeProvider>
				</PersistGate>
				<SnackbarProvider />
			</Provider>
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
