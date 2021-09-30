import type { Pokemon } from '../types';
import { writable } from 'svelte/store';
import { createToggler } from './toggler';

import resolveConfig from 'tailwindcss/resolveConfig';

const config = resolveConfig(false);
console.log(config.theme.screens.md);

export const open = createToggler(false);

export const selectedPokemon = writable<Pokemon>(null);
