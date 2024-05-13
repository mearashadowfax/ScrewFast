/** @type {import('tailwindcss').Config} */
import colors, { blue } from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      blue: {
        50: "#78d0f0",
        100: "#3CBFF0",
        400: "#00AEEF",
        500: "#0083b3",
      },
      yellow: {
        50: "#78d0f0",
        100: "#3CBFF0",
        400: "#00AEEF",
        500: "#0083b3",
      }, // Accent colors, used mainly for star color, heading and buttons
      pink: {
        100: "#ed77be",
        200: "#ED4FAD",
        300: "#EC289D",
        400: "#EC008C",
        500: "#9D0861",
        600: "#4E0F36",
      },
      orange: {
        100: "#ed77be",
        200: "#ED4FAD",
        300: "#EC289D",
        400: "#EC008C",
        500: "#9D0861",
        600: "#4E0F36",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms")
  ],
};
