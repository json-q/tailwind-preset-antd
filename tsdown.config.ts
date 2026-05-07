import { defineConfig } from "tsdown";

export default defineConfig({
  target: ["es6", "node16"],
  exports: true,
  platform: "neutral",
  unbundle: true,
  dts: true,
  entry: {
    components: "./src/components.tsx",
    plugin: "./src/plugin.ts",
    preset: "./src/preset/index.ts",
  },
});
