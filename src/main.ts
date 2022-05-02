import App from './App.svelte';
import { fetchJSON } from './functions';
import type { Pokemon, PokemonResult } from './types';

const json: { results: PokemonResult[] } = await fetchJSON(
  'https://pokeapi.co/api/v2/pokemon?limit=151'
);

console.log(json.results);

const getID = (url: PokemonResult['url']) => {
  const split = url.split('/');
  return split.at(-2);
};

const pokemons: Pokemon[] = json.results.map(({ name, url }) => ({
  name,
  id: getID(url),
}));

const app = new App({
  props: {
    pokemons,
  },
  target: document.body,
});

export default app;
