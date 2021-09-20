<script lang="ts">
	type Item = $$Generic;
	export let items: Item[] = [];
</script>

<ul>
	{#each items as item}
		<li>
			<slot {item} />
		</li>
	{/each}
</ul>
