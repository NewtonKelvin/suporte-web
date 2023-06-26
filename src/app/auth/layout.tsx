"use client";
import { Grid } from "@mui/material";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid container className="h-full w-full">
      <Grid
        item
        className="w-float h-float rounded-md p-2 bg-container-ligth dark:bg-container-dark text-black dark:text-white flex flex-col"
      >
        {children}
      </Grid>
    </Grid>
  );
}
