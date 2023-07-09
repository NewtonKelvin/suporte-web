/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			screens: {
				xs: "0px",
				sm: "600px",
				md: "900px",
				lg: "1200px",
				xl: "1536px"
			},
			boxShadow: {
				"input-dark":
					"0 0 0 30px var(--input-background-dark) inset !important;",
				"input-light":
					"0 0 0 30px var(--input-background-light) inset !important;"
			},
			padding: {
				outter: "var(--page-padding-outter)"
			},
			gap: {
				inner: "var(--page-gap-inner)"
			},
			colors: {
				primary: "var(--primary)",
				white: "var(--white)",
				"opacity-light": "var(--text-opacity-light)",
				"opacity-dark": "var(--text-opacity-dark)",
				"primary-light": "var(--text-light)",
				"primary-dark": "var(--text-dark)",
				"container-light": "var(--container-background-light)",
				"container-dark": "var(--container-background-dark)",
				"input-light": "var(--input-background-light)",
				"input-dark": "var(--input-background-dark)"
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"image-dark": `url('${process.env.BASE_URL}/images/background_dark.jpg')`,
				"image-light": `url('${process.env.BASE_URL}/images/background_light.jpg')`
			},
			width: {
				float: "calc(100vw - (2 * var(--page-padding-outter)))",
				sidebar: "var(--sidebar-width)",
				content: "calc(100% - var(--sidebar-width))"
			},
			height: {
				navbar: "var(--navbar-height)",
				float: "calc(100vh - (2 * var(--page-padding-outter)))",
				"float-nav": "calc(100% - var(--navbar-height) - var(--page-gap-inner))"
			},
			margin: {
				sidebar: "var(--sidebar-width)"
			},
			translate: {
				sidebar: "var(--sidebar-width)"
			}
		}
	},
	plugins: [require("tailwindcss-text-fill")]
};
