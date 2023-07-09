"use client";
import { createContext } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import SnackbarProvider from "./snackbar-provider";
import ThemeProvider from "./theme-provider";

import { PersistGate } from "redux-persist/integration/react";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
	const GlobalContext = createContext(null);

	return (
		<GlobalContext.Provider value={null}>
			<Provider store={store}>
				<PersistGate loading={<p>Loading...</p>} persistor={persistor}>
					<ThemeProvider>{children}</ThemeProvider>
				</PersistGate>
				<SnackbarProvider />
			</Provider>
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
