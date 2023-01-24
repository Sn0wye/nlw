/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tailwindConfig: "./packages/config/tailwind",

  semi: true,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: "none",
  arrowParens: "avoid",
  endOfLine: "auto",
  bracketSpacing: true,
};
