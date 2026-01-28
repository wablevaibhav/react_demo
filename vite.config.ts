import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/api": path.resolve(__dirname, "./src/api"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/config": path.resolve(__dirname, "./src/config"),
      "@/constants": path.resolve(__dirname, "./src/constants"),
      "@/features": path.resolve(__dirname, "./src/features"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/store": path.resolve(__dirname, "./src/store"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/routes": path.resolve(__dirname, "./src/routes"),
      "@/types": path.resolve(__dirname, "./src/types"),
      "@/interface": path.resolve(__dirname, "./src/interface"),
      "@/theme": path.resolve(__dirname, "./src/theme"),
      "@/testing": path.resolve(__dirname, "./src/testing"),
    },
  },
});
