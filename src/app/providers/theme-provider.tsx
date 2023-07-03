"use client";
import { setTheme } from "@/redux/cookies/slice";
import { CookiesType } from "@/types/cookies";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const { theme: cookieTheme }: CookiesType = parseCookies();
	const theme = useSelector((state: RootState) => state.cookies.theme);
	const dispatch = useDispatch();

	useEffect(() => {
		if (cookieTheme && cookieTheme !== theme) dispatch(setTheme(cookieTheme));
	});

	return (
		<div className={theme}>
			<div
				className={`h-screen w-screen bg-background-light bg-cover bg-center bg-no-repeat p-outter transition-all duration-700 ease-in-out dark:bg-background-dark`}
			>
				{children}
			</div>
		</div>
	);
};
export default ThemeProvider;
