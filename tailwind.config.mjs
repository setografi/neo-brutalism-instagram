/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#ECE6C2",
        textBlack: "#000000",
        grayBgpost: "#DFDFE8",
        dimGray: "#6E6E6E",
        textGray: "#727272",
        lightSeaGreen: "#73BDA8",
        burntOrange: "#CC6B49",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sfPro: ["SF Pro Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
