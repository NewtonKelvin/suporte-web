import { Poppins } from "next/font/google";
import "../style/global.css";
import "../style/nprogress.css";
import GlobalProvider from "./providers/store-provider";

export const metadata = {
	title: "Nest suporte"
};

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
	subsets: ["latin"]
});

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR" className={poppins.className}>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="icon" href="/icon.svg" sizes="any" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
			</head>
			<body>
				<GlobalProvider>{children}</GlobalProvider>
			</body>
		</html>
	);
}
