<script lang="ts">
  import Chip from "$lib/components/chip.svelte";

	interface Props {
		list: string[];
	}

	let {
		list,
	}: Props = $props();
</script>

<div class="flex flex-col gap-y-4">
	<p class="text-grayish text-lg font-semibold">Techstack</p>
	<div class="flex flex-wrap gap-2">
		{#each list as tech}
			<Chip variant="outline" label={tech} />
		{/each}
	</div>
</div>
