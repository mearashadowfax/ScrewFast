/** @type {import('tailwindcss').Config} */
import starlightPlugin from '@astrojs/starlight-tailwind';
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
    starlightPlugin(),
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms")
  ],
};
