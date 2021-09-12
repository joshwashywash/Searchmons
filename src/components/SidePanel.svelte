<script lang="ts">
  import { open } from '../stores';
  import { clickaway } from '../actions/clickaway';
</script>

<aside
  use:clickaway={() => {
    if ($open) open.toggle();
  }}
  class:-translate-x-full={!$open}
  class="
    w-max
    h-full
    flex
    flex-col
    items-start
    gap-2
    absolute
    md:relative
    inset-0
    p-4
    bg-dark-dark
    overflow-y-scroll
    opacity-95
    md:opacity-100
    md:transform-none
    transition
    ease-in-out
    z-10
  "
>
  <button aria-label="close" class="md:hidden" on:click={open.toggle}>
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
  <slot />
</aside>
