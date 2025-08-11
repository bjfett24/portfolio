import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginPrettier from "eslint-plugin-prettier"; // The plugin to run Prettier as an ESLint rule
import configPrettier from "eslint-config-prettier"; // The config to disable conflicting ESLint rules

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },

  {
    languageOptions: {
      globals: globals.browser, // Or globals.browser, globals.node if both apply
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // Runs Prettier as an ESLint rule and reports differences as errors
      "prettier/prettier": "error",
    },
  },

  configPrettier,
]);
