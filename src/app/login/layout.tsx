"use client";
import { Grid } from "@mui/material";
import React from "react";
export const metadata = {
  title: "My todo List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid container className="h-full w-full">
      <Grid
        item
        sm={12}
        md={6}
        className="w-float h-float rounded-md p-4 bg-neutral-900"
      >
        A
      </Grid>
      <Grid
        item
        sm={12}
        md={6}
        className="w-float h-float rounded-md p-4 hidden md:block"
      >
        B
      </Grid>
    </Grid>
  );
}
