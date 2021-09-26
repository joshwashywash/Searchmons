import type { Pokemon } from '../types';
import { writable } from 'svelte/store';
import { createToggler } from './toggler';

export const open = createToggler(false);

export const selectedPokemon = writable<Pokemon>(null);
