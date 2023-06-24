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
        float: "calc( 100vw - 1rem)",
        "float/2": "calc( 100vw - 2rem)"
      },
      height: {
        float: "calc( 100vh - 1rem)",
        "float/2": "calc( 100vh - 2rem)"
      }
    }
  },
  plugins: []
};
