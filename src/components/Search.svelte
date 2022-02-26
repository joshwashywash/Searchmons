<script lang="ts">
  export let value = '';
  export let placeholder = '';
</script>

<label for="search" class="sr-only">Search</label>
<input
  bind:value
  class="
    rounded-md bg-light py-1 px-2 text-dark placeholder-dark
    caret-dark ring-dark-light
    selection:bg-dark-dark
    focus:outline-none focus:ring-4
  "
  id="search"
  type="search"
  {placeholder}
/>
