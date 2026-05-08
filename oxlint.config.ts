import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["eslint", "typescript", "unicorn", "oxc", "node"],
  ignorePatterns: ["**/node_modules/**", "**/dist/**", "**/docs-dist", "**/pnpm-lock.yaml"],
});
