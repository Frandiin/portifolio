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
            src: "/w-icon.png",
            sizes: "128x128",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
