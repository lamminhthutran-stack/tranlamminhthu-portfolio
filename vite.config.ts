import { thinkingFallback } from "./scripts/thinking-fallback";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [thinkingFallback(), TanStackRouterVite(), react(), tailwindcss(), tsconfigPaths()],
  base: "/tranlamminhthu-portfolio/",
});
