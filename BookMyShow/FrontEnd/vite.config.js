import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/bms": {
        target: "http://localhost:8083",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
