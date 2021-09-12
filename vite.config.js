import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { generateSW } from 'rollup-plugin-workbox';

import workbox from './workbox-config.js';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/searchmons/',
  build: {
    rollupOptions: {
      plugins: [generateSW(workbox)]
    }
  },
  plugins: [svelte()]
});
