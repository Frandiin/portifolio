import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "robots.txt",
        "safari-pinned-tab.svg, icon-app.svg",
      ],
      manifest: {
        name: "Portifolio",
        short_name: "Portifolio",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icon-app.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "/icon-app.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});
