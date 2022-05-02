<script lang="ts">
  import './app.postcss';
  import Figure from './components/Figure.svelte';
  import List from './components/List.svelte';
  import Search from './components/Search.svelte';
  import SearchIcon from './svgs/SearchIcon.svelte';
  import SidePanel from './components/SidePanel.svelte';
  import type { Pokemon } from './types';
  import { onMount } from 'svelte';
  import { open, selectedPokemon } from './stores';

  export let pokemons: Pokemon[];
  let value = '';

  onMount(() => {
    selectedPokemon.set(pokemons[Math.floor(Math.random() * pokemons.length)]);
  });

  $: filtered = pokemons.filter(({ name }) => {
    return name.includes(value.trim().toLowerCase());
  });
</script>

<svelte:head>
  <title>Searchmons</title>
</svelte:head>

<main class="flex h-screen flex-col p-4">
  <button
    aria-label="open side panel"
    class="self-start"
    on:click|stopPropagation={open.toggle}
  >
    <SearchIcon />
  </button>

  {#if $selectedPokemon}
    {@const { name, id } = $selectedPokemon}
    <Figure
      alt={name}
      caption={name}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
    />
  {/if}
</main>

{#if $open}
  <SidePanel>
    <svelte:fragment slot="content">
      <Search bind:value placeholder={'Search...'} />
      <List items={filtered} let:item={pokemon}>
        <button
          class="transition ease-in-out hover:translate-x-4"
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
