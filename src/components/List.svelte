<script lang="ts">
  type Item = $$Generic;
  export let items: Item[] = [];
</script>

<ul class="p-2">
  {#each items as item}
    <li>
      <slot {item} />
    </li>
  {/each}
</ul>
