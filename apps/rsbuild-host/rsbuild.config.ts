import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  server: {
    port: 5172,
    open: true
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:5172"
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = "app1";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "rsbuild-host",
          remotes: {
            viteRemote: "http://localhost:5173/dd/remoteEntry.js"
          },
          remoteType: "module",
          manifest: {
            filePath: "manifestpath"
          },
          shared: ["react", "react-dom"]
        })
      ]);
    }
  },
  plugins: [
    pluginReact({
      splitChunks: {
        react: false,
        router: false
      }
    })
  ]
});
