import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "astro/no-set-html-directive": "error"
    }
  }
];