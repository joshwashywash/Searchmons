import type { Pokemon } from '../types';
import { derived, writable } from 'svelte/store';
import { createToggler } from './toggler';

export const open = createToggler(false);

export const selectedPokemon = writable<Pokemon>(null);

export const id = derived(selectedPokemon, $selectedPokemon => {
  if ($selectedPokemon) {
    const [_, id] = $selectedPokemon.url.match(/\d+/g);
    return id;
  }
});
