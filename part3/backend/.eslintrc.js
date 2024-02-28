/** @format */

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true, // This allows Node.js global variables and Node.js scoping.
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },
  },
  rules: {},
};
