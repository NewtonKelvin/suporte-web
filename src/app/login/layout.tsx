"use client";
import { Grid } from "@mui/material";
import React from "react";

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
        className="w-float h-float rounded-md py-4 px-16 bg-white dark:bg-neutral-900 text-black dark:text-white flex flex-col"
      >
        {children}
      </Grid>
      <Grid
        item
        sm={12}
        md={6}
        className="w-float h-float rounded-md py-4 px-16 hidden md:flex flex-col text-justify justify-center my-auto text-black dark:text-white"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          auctor auctor velit, non accumsan nulla facilisis sit amet. Curabitur
          ut purus mollis, elementum ligula non, vehicula felis. Nam sagittis
          viverra ornare. Aliquam erat volutpat. Sed tincidunt a ligula vitae
          pulvinar. Sed in mauris quis augue ultrices volutpat. Quisque eu
          finibus lorem. Pellentesque sollicitudin, dui non tristique accumsan,
          nunc metus dignissim orci, ut hendrerit orci nisl eu massa. Vestibulum
          vitae varius est. Nam eleifend magna vel lobortis sollicitudin. Etiam
          sollicitudin hendrerit convallis. Ut condimentum nibh vitae ante
          varius, sed interdum tortor consectetur. Donec id turpis rhoncus,
          scelerisque sem quis, eleifend nibh. Ut ultrices sapien ligula,
          blandit iaculis ante luctus vel.
        </p>
        <br />
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Cras rhoncus diam sit amet arcu imperdiet luctus.</li>
        <li>Donec porttitor felis non neque ultrices pulvinar.</li>
        <li>Sed quis velit egestas, varius velit eget, interdum nulla.</li>
        <li>Praesent posuere quam a mauris iaculis posuere.</li>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          auctor auctor velit, non accumsan nulla facilisis sit amet. Curabitur
          ut purus mollis, elementum ligula non, vehicula felis.
        </p>
      </Grid>
    </Grid>
  );
}
