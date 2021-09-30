<script lang="ts">
	import Figure from './components/Figure.svelte';
	import List from './components/List.svelte';
	import Search from './components/Search.svelte';
	import SidePanel from './components/SidePanel.svelte';
	import type { Pokemon } from './types';
	import { open, selectedPokemon } from './stores';
	import { onMount } from 'svelte';
	import { fetchJSON, getID } from './functions';

	let pokemons: Pokemon[] = [];
	let value = '';

	onMount(() => {
		fetchJSON('https://pokeapi.co/api/v2/pokemon?limit=151').then(
			(json: { results: Pokemon[] }) => {
				pokemons = json.results;
			}
		);
	});

	$: filtered = pokemons.filter(({ name }) => {
		return name.includes(value.trim().toLowerCase());
	});
</script>

<svelte:head>
	<title>Searchmons</title>
</svelte:head>
<main class="p-4 h-screen flex flex-col">
	<button
		aria-label="open"
		class="self-start"
		on:click|stopPropagation={open.toggle}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-8 w-8"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>

	{#if $selectedPokemon}
		<Figure
			alt={$selectedPokemon.name}
			caption={$selectedPokemon.name}
			src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{getID(
				$selectedPokemon.url
			)}.png"
		/>
	{/if}
</main>
{#if $open}
	<SidePanel>
		<svelte:fragment slot="content">
			<Search bind:value placeholder={'Search...'} />
			<List items={filtered} let:item={pokemon}>
				<button
					class="hover:translate-x-4 transition ease-in-out"
					class:selected={$selectedPokemon === pokemon}
					on:click={() => selectedPokemon.set(pokemon)}
				>
					{pokemon.name}
				</button>
			</List>
		</svelte:fragment>
	</SidePanel>
{/if}

<style lang="postcss">
	.selected {
		@apply translate-x-8;
	}
</style>
