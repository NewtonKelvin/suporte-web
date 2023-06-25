"use client";
import { Router } from "next/router";
import nProgress from "nprogress";
import { createContext, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import SnackbarProvider from "./snackbar-provider";
import ThemeProvider from "./theme-provider";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const GlobalContext = createContext(null);
  useEffect(() => {
    nProgress.configure({ showSpinner: false });
    Router.events.on("routeChangeStart", () => {
      nProgress.start();
    });
    Router.events.on("routeChangeComplete", () => {
      nProgress.done();
    });
    Router.events.on("routeChangeError", () => {
      nProgress.done();
    });
  });

  return (
    <GlobalContext.Provider value={null}>
      <Provider store={store}>
        <ThemeProvider>{children}</ThemeProvider>
        <SnackbarProvider />
      </Provider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
