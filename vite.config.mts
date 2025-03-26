import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import Sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    Sitemap({
      hostname: "https://4-playersofcolorado.com",
      dynamicRoutes: ["/", "/about", "run-info", "/membership", "/contact"],
      exclude: ["/thanks"],
    }),
  ],
  base: "/",
});
