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
      neutral: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#011427",
        900: "#00070d",
      },
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
      },
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
      },
      red: colors.red,
      zinc: colors.zinc,
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms")
  ],
};
