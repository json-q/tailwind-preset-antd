import { defineConfig } from "oxfmt";

export default defineConfig({
  useTabs: false,
  tabWidth: 2,
  printWidth: 100,
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "lf",
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  sortPackageJson: true,
  trailingComma: "es5",
  sortTailwindcss: {
    functions: ["clsx", "cn"],
    preserveWhitespace: true,
  },
  ignorePatterns: ["**/node_modules/**", "**/dist/**", "**/pnpm-lock.yaml"],
});
