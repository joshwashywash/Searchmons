<script lang="ts">
	import { fetchBlob } from '../functions';
	import { blur } from 'svelte/transition';

	export let alt = '';
	export let caption = '';
	export let src = '';
</script>

{#await fetchBlob(src) then blob}
	<figure
		class="flex flex-col items-center justify-center grow"
		in:blur={{ amount: 10 }}
	>
		<img src={URL.createObjectURL(blob)} {alt} />
		<figcaption class="text-4xl">{caption}</figcaption>
	</figure>
{/await}
