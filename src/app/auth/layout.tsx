"use client";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { setSocket } from "@/redux/socket/slice";
import { Drawer, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io as ClientIO } from "socket.io-client";
import { RootState } from "../store";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const [sideOpen, setSideOpen] = useState(false);
	const toggleSide = () => setSideOpen(!sideOpen);
	const theme = useSelector((state: RootState) => state.cookies.theme);
	const { user } = useSelector((state: RootState) => state.user);
	const { socket } = useSelector((state: RootState) => state.socket);
	const dispatch = useDispatch();

	useEffect((): any => {
		dispatch(
			setSocket(
				new (ClientIO as any)(process.env.NEXT_PUBLIC_SITE_URL, {
					path: "/api/socket/io",
					addTrailingSlash: false,
					cors: {
						origin: process.env.NEXT_PUBLIC_SITE_URL
					}
				})
			)
		);
		return () => socket.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		socket.emit("newUser", user.name);
	}, [socket, user]);

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
					className="flex h-full w-sidebar flex-col bg-container-light p-2 text-black
        transition-transform dark:bg-container-dark dark:text-white sm:flex"
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
        transition-transform dark:bg-container-dark dark:text-white sm:flex"
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
