import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["eslint", "typescript", "unicorn", "oxc", "node"],
  ignorePatterns: ["**/node_modules/**", "**/dist/**", "**/pnpm-lock.yaml"],
});
