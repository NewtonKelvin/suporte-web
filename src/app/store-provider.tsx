"use client";
import { createContext } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ThemeProvider from "./theme-provider";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const GlobalContext = createContext(null);

  return (
    <GlobalContext.Provider value={null}>
      <Provider store={store}>
        <ThemeProvider>{children}</ThemeProvider>
      </Provider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
