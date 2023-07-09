"use client";

import { usePathname, useSearchParams } from "next/navigation";
import nProgress from "nprogress";
import { useEffect } from "react";

export function NavigationEvents() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		nProgress.configure({
			showSpinner: false,
			easing: "ease",
			speed: 500,
			trickle: true,
			trickleSpeed: 250
		});
		nProgress.done();
		return () => {
			nProgress.start();
		};
	}, [pathname, searchParams]);

	return null;
}
