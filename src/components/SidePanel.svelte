<script lang="ts">
  import { open } from '../stores';
  import { clickaway } from '../actions/clickaway';
  import { fly } from 'svelte/transition';

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  <slot name="content" />
</aside>
