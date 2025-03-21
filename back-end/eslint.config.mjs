// eslint.config.mjs
import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "commonjs",     // CommonJS 모듈로 인식
      globals: globals.node,      // Node.js 글로벌 변수 허용
    },
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error", // Prettier 위반 시 ESLint 오류
    },
  },
]);
