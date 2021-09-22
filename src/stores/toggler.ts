import { writable } from 'svelte/store';

export const createToggler = (val: boolean) => {
	const { subscribe, update } = writable(val);
	return {
		subscribe,
		toggle() {
			update(val => !val);
		}
	};
};
