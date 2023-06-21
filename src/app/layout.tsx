"use client";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import "../style/global.css";
import { store } from "./store";
import ThemeProvider from "./theme";
require("dotenv").config();

const poppins = Poppins({
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const muiEnv =
    process.env.NODE_ENV === "development" ? "development" : "production";

  return (
    <html lang="pt-BR" className={poppins.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <script
          async
          src={`https://unpkg.com/@mui/material@latest/umd/material-ui.${muiEnv}.js`}
        ></script>
      </head>

      <body>
        <Provider store={store}>
          <ThemeProvider>{children}</ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
