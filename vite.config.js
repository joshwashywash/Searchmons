import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/searchmons/',
	plugins: [svelte()],
	build: {
		minify: 'esbuild',
		target: 'esnext'
	}
});
