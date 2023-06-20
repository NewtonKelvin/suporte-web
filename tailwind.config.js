/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "600px",
        md: "900px",
        xl: "1200px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-dark": "url('/images/background_dark.jpg')",
        "background-light": "url('/images/background_light.jpg')",
      },
      width: {
        float: "calc( 100vw - 1rem)",
        "float/2": "calc( 100vw - 2rem)",
      },
      height: {
        float: "calc( 100vh - 1rem)",
        "float/2": "calc( 100vh - 2rem)",
      },
    },
  },
  plugins: [],
};
