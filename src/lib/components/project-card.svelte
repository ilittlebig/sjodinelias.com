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

<a href="/" class="flex flex-col gap-y-4 w-full expand-on-hover px-3 md:px-0">
  <img src={image} class="bg-white rounded-card w-full h-[300px] md:h-[348px] object-cover" />
  <div class="flex gap-x-5">
    <Chip variant="filled" label={type} />
    <div class="flex flex-wrap gap-2">
      {#each tags as tag}
        <Chip variant="outline" label={tag} />
      {/each}
    </div>
  </div>

  <div class="flex flex-col gap-y-2">
    <p class="text-lg md:text-2xl text-grayish font-semibold">{title}</p>
    <p class="text-base md:text-xl text-subtext">{description}</p>
  </div>
</a>
