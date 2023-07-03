"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { Grid } from "@mui/material";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<Grid container className="flex h-full w-full flex-col gap-inner">
			<Navbar
				className="flex h-navbar w-full flex-row items-center justify-between self-stretch rounded-md bg-container-ligth
       px-8 py-1 text-black dark:bg-container-dark dark:text-white"
			/>
			<div className="flex h-float-nav w-full flex-row gap-inner">
				<Sidebar
					className="h-with-navbar hidden w-sidebar flex-col rounded-md bg-container-ligth p-2 text-black
        transition-transform dark:bg-container-dark dark:text-white sm:block "
				/>
				<Grid
					item
					className="h-with-navbar ml-0 flex w-full flex-col rounded-md bg-container-ligth p-2 text-black
          dark:bg-container-dark dark:text-white sm:-ml-sidebar sm:w-content "
				>
					{children}
				</Grid>
			</div>
		</Grid>
	);
}
