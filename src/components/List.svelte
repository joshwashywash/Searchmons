<script lang="ts">
	type Item = $$Generic;
	export let items: Item[] = [];
</script>

<ul>
	{#each items as item, index}
		<li>
			<slot {item} {index} />
		</li>
	{/each}
</ul>
