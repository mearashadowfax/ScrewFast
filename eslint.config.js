import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro", "**/*.ts", "**/*.js"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      // --- CÁC QUY TẮC ĐƯỢC NỚI LỎNG ---
      
      // 1. Cho phép dùng 'any' (chỉ cảnh báo thay vì báo lỗi)
      "@typescript-eslint/no-explicit-any": "warn",
      
      // 2. Cho phép biến khai báo mà chưa dùng
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      
      // 3. Cảnh báo nếu quên dùng const (thay vì let)
      "prefer-const": "warn",
      
      // 4. Cảnh báo về XSS khi dùng set:html (Astro thường xuyên phải dùng cái này)
      "astro/no-set-html-directive": "warn",

      // 5. Bỏ qua lỗi triple-slash cũ trong file env.d.ts
      "@typescript-eslint/triple-slash-reference": "off"
    },
  },
  {
    ignores: ["dist/", ".astro/", "node_modules/"]
  }
];