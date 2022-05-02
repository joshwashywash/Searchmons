<script lang="ts">
  import CloseIcon from '../svgs/CloseIcon.svelte';
  import { clickaway } from '../actions/clickaway';
  import { fly } from 'svelte/transition';
  import { open } from '../stores';

  let width: number;
</script>

<aside
  bind:clientWidth={width}
  transition:fly={{ x: -width }}
  use:clickaway={open.toggle}
  class="
		absolute
		top-0
		flex
    h-full
    w-max flex-col items-start gap-2
    overflow-y-scroll
    bg-dark-dark
    p-4
    opacity-95
    transition
    ease-in-out
  "
>
  <button aria-label="close" on:click={open.toggle}>
    <CloseIcon />
  </button>
  <slot name="content" />
</aside>
