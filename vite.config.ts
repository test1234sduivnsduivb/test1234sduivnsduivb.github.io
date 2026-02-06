import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // User/organization GitHub Pages repo uses the site root.
  base: "/",
  plugins: [react()],
  build: {
    outDir: "docs",
  },
});
