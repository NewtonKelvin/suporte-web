/** @type {import('tailwindcss').Config} */

let input = {
	dark: {
		background: "rgb(38 38 38 / var(--tw-bg-opacity))"
	},
	ligth: {
		background: "rgb(226 232 240 / var(--tw-bg-opacity))"
	}
};

let gap = {
	outter: ".25rem", // 4px
	inner: ".25rem" // 4px
};

let size = {
	navbar: {
		heigth: "3rem"
	},
	sidebar: {
		width: "18.5rem"
	}
};

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
				"input-dark": `0 0 0 30px ${input.dark.background} inset !important;`,
				"input-ligth": `0 0 0 30px ${input.ligth.background} inset !important;`
			},
			gap: {
				inner: `${gap.inner}`
			},
			padding: {
				outter: `${gap.outter}`
			},
			colors: {
				primary: "#0A84FF",
				"opacity-ligth": "#808080",
				"opacity-dark": "#5a5a5a",
				white: "#D9D9D9",
				"primary-ligth": "#000000",
				"primary-dark": "#FFFFFF",
				"container-ligth": "#FFFFFF",
				"container-dark": "#151718"
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"background-dark": `url('${process.env.BASE_URL}/images/background_dark.jpg')`,
				"background-light": `url('${process.env.BASE_URL}/images/background_light.jpg')`
			},
			width: {
				float: `calc(100vw - (2*${gap.outer}))`,
				sidebar: `${size.sidebar.width}`,
				content: `calc(100% - ${size.sidebar.width})`
			},
			height: {
				navbar: `${size.navbar.heigth}`,
				float: `calc(100vh - (2*${gap.outer}))`,
				"float-nav": `calc(100% - ${size.navbar.heigth} - ${gap.inner})`
			},
			margin: {
				sidebar: `${size.sidebar.width}`
			},
			translate: {
				sidebar: `${size.sidebar.width}`
			}
		}
	},
	plugins: [require("tailwindcss-text-fill")]
};
