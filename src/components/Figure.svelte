<script lang="ts">
	import { createFetcher } from '../functions';

	import { blur } from 'svelte/transition';
	export let alt = '';
	export let caption = '';
	export let src = '';

	const fetchBlob = createFetcher((response: Response) => response.blob());
</script>

{#await fetchBlob(src) then blob}
	<figure
		class="flex flex-col items-center justify-center flex-grow"
		in:blur={{ amount: 10 }}
	>
		<img src={URL.createObjectURL(blob)} {alt} />
		<figcaption class="text-4xl">{caption}</figcaption>
	</figure>
{/await}
