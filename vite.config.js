import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        airportTransfers: resolve(__dirname, "airport-transfers/index.html"),
        privateCharters: resolve(__dirname, "private-charters/index.html"),
        queenstownPrivateTours: resolve(__dirname, "queenstown-private-tours/index.html"),
        activities: resolve(__dirname, "activities/index.html"),
        specialOffers: resolve(__dirname, "special-offers/index.html"),
      },
    },
  },
});
