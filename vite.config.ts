// File: creative-social-canvas/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // The condition `mode === 'development'` was incorrectly placed directly in the plugins array.
    // If there was a plugin intended to be conditional, it should be added like:
    // mode === 'development' && yourConditionalPlugin()
  ].filter(Boolean), // filter(Boolean) is still useful if you have conditional plugins that might be `false`
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
