import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { publicRoutes } from "./scripts/public-routes.mjs";

const input = Object.fromEntries(
  publicRoutes.map(({ inputName, inputFile }) => [inputName, resolve(__dirname, inputFile)]),
);

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input,
    },
  },
});
