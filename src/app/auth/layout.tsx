"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { Drawer, Grid } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const [sideOpen, setSideOpen] = useState(false);
	const toggleSide = () => setSideOpen(!sideOpen);
	const theme = useSelector((state: RootState) => state.cookies.theme);

	return (
		<Grid container className="flex h-full w-full flex-col gap-inner">
			<Drawer
				anchor={"left"}
				open={sideOpen}
				onClose={toggleSide}
				className={`${theme} h-full w-full`}
			>
				<Sidebar
					sideOpen={sideOpen}
					className="h-full w-sidebar flex-col bg-container-light p-2 text-black
        transition-transform dark:bg-container-dark dark:text-white sm:block"
				/>
			</Drawer>
			<Navbar
				sideOpen={sideOpen}
				toggleSide={toggleSide}
				className="flex h-navbar w-full flex-row items-center justify-between self-stretch rounded-md bg-container-light
       px-3 py-1 text-black dark:bg-container-dark dark:text-white"
			/>
			<div className="flex h-float-nav w-full flex-row gap-inner">
				<Sidebar
					sideOpen={sideOpen}
					className="sm:none h-with-navbar hidden w-sidebar flex-col rounded-md bg-container-light p-2 text-black
        transition-transform dark:bg-container-dark dark:text-white sm:block "
				/>
				<Grid
					item
					className="h-with-navbar ml-0 flex w-full flex-col overflow-y-auto rounded-md bg-container-light p-2
          text-black dark:bg-container-dark dark:text-white sm:-ml-sidebar sm:w-content md:px-10 md:py-4"
				>
					{children}
				</Grid>
			</div>
		</Grid>
	);
}
