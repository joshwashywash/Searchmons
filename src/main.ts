import App from './App.svelte';
import { fetchJSON } from './functions';
import type { Pokemon, PokemonResult } from './types';

const json: { results: PokemonResult[] } = await fetchJSON(
  'https://pokeapi.co/api/v2/pokemon?limit=151'
);

const pokemons: Pokemon[] = json.results.map(({ name, url }) => ({
  name,
  id: parseInt(url.split('/').at(-2)),
}));

const app = new App({
  props: {
    pokemons,
  },
  target: document.body,
});

export default app;
