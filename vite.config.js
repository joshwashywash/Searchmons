import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { injectManifest } from 'rollup-plugin-workbox';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/searchmons/',
	plugins: [
		injectManifest({
			globDirectory: 'public/',
			globPatterns: ['**/*.{ico,png,json,txt}'],
			mode: 'production',
			swDest: 'dist/sw.js',
			swSrc: 'public/sw.js'
		}),
		svelte()
	]
});
