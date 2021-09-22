import './app.postcss';
import App from './App.svelte';

import type { Pokemon } from 'src/types';
import { createFetcher } from './functions';

const fetchJSON = createFetcher((response: Response) => response.json());

const json: { results: Pokemon[] } = await fetchJSON(
	'https://pokeapi.co/api/v2/pokemon?limit=151'
);

const app = new App({
	props: {
		pokemons: json.results
	},
	target: document.body
});

export default app;
