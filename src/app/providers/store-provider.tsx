"use client";
import { createContext } from "react";

import Loading from "@/components/loading/Loading";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
	const GlobalContext = createContext(null);

	return (
		// <GlobalContext.Provider value={null}>
		// 	<Provider store={store}>
		// 		<PersistGate loading={<Loading />} persistor={persistor}>
		// 			<ThemeProvider>{children}</ThemeProvider>
		// 		</PersistGate>
		// 		<SnackbarProvider />
		// 	</Provider>
		// </GlobalContext.Provider>
		<Loading />
	);
};

export default GlobalProvider;
