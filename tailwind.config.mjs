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

        goldenRod: "#D0B229",
        roseQuartz: "#C58F9B",
        limeGreen: "#73C255",
        ceruleanBlue: "#3C86BA",
        turQuoise: "#55C2B9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
