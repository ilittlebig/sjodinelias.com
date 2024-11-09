<script lang="ts">
  import Chip from "$lib/components/chip.svelte";

  let {
    title,
    description,
    image,
    type,
    tags,
  } = $props();
</script>

<div class="flex flex-col gap-y-4 w-[556px] expand-on-hover">
  <img src={image} class="bg-white rounded-card w-full h-[348px]" />
  <div class="flex gap-x-5">
    <Chip variant="filled" label={type} />
    <div class="flex gap-x-2">
      {#each tags as tag}
        <Chip variant="outline" label={tag} />
      {/each}
    </div>
  </div>
  <p class="text-2xl text-grayish font-semibold">{title}</p>
  <p class="text-xl text-subtext">{description}</p>
</div>
