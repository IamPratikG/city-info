import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Ensures Vite is accessible
    port: 5173, // Explicitly sets the port
    strictPort: true, // Prevents random port assignment
    watch: {
      usePolling: true, // Ensures hot reload works in all environments
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000", // local NestJS app
        changeOrigin: true,
      },
    },
  },
});
