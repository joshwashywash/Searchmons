import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/searchmons/',
  plugins: [
    svelte(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src/',
      filename: 'sw.ts',
      manifest: {
        name: 'Searchmons',
        short_name: 'Searchmons',
        start_url: '.',
        display: 'standalone',
        background_color: '#3d405b',
        theme_color: '#f4f1de',
        description: 'A searchable Pokedex app.',
        icons: [
          {
            src: 'icons/manifest-icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable any'
          },
          {
            src: 'icons/manifest-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable any'
          }
        ]
      }
    })
  ]
});
