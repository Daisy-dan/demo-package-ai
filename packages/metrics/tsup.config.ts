import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  format: "esm",
  dts: true,
  outExtension() {
    return {
      js: ".js",
      dts: ".ts",
    };
  },
});
