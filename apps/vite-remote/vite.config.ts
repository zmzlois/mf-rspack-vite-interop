import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { federation } from "@module-federation/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001
  },
  plugins: [
    react(),
    federation({
      name: "viteRemote",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App"
      }
    })
  ]
});
