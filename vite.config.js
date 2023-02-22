import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    watch: true,
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@utils": "/src/utils",
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
});
