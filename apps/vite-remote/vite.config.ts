import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 5173
  },
  base: "http://localhost:5173",
  plugins: [
    react(),
    federation({
      name: "viteRemote",
      exposes: {
        "./App": "./src/App.tsx"
      },
      filename: "dd/remoteEntry.js",
      shared: {
        vue: {},
        react: {
          requiredVersion: "18"
        },
        "react-dom": {}
      }
      // runtimePlugins: ["./src/mfPlugins"]
    })
    // If you set build.target: "chrome89", you can remove this plugin
    // false && topLevelAwait()
  ],
  build: {
    target: "chrome89"
  }
});
