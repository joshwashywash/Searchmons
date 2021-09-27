<script lang="ts">
	export let value = '';
	export let placeholder = '';
</script>

<label for="search" class="sr-only">Search</label>
<input
	bind:value
	class="
    py-1 px-2 rounded-md ring-dark-light bg-light text-dark
    caret-dark selection:bg-dark-dark
    placeholder-dark
    focus:outline-none focus:ring-4
  "
	id="search"
	type="search"
	{placeholder}
/>
