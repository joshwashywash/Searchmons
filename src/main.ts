import './app.postcss';
import App from './App.svelte';

import type { Pokemon } from 'src/types';
import { fetchJSON } from './functions';

const json = await fetchJSON<{ results: Pokemon[] }>(
	'https://pokeapi.co/api/v2/pokemon?limit=151'
);

const app = new App({
	props: {
		pokemons: json.results
	},
	target: document.body
});

export default app;
