/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "./playground",
  plugins: [react(), tailwindcss()],
  base: "/tailwind-preset-antd",
  build: {
    outDir: "docs-dist",
  },
  test: {
    root: ".",
    setupFiles: "./vitest.setup.ts",
    environment: "jsdom",
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    },
  },
});
