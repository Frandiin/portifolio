import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "safari-pinned-tab.svg, "],
      manifest: {
        name: "Portifolio",
        short_name: "Portifolio",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/w-button-icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/w-button-icon.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/css-3.svg",
            sizes: "128x128",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
