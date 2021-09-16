import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { generateSW } from "rollup-plugin-workbox";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    generateSW({
      globDirectory: "public/",
      globPatterns: ["**/*.{ico,png,json,txt}"],
      runtimeCaching: [
        {
          // Match any request that ends with .png, .jpg, .jpeg or .svg.
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

          // Apply a cache-first strategy.
          handler: "CacheFirst",

          options: {
            // Use a custom cache name.
            cacheName: "images",

            expiration: {
              maxEntries: 30,
            },
          },
        },
      ],
      sourcemap: false,
      swDest: "dist/sw.js",
    }),
  ],
});
