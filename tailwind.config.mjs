/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("preline/plugin"),
    require("@tailwindcss/forms")
  ],
};
