<script lang="ts">
	interface Props {
		src: string;
	}
	let { src }: Props = $props();
</script>

<div class="flex items-center justify-center">
	<img
		{src}
		class="rounded-card w-full h-full lg:w-[900px] lg:h-[600px] object-cover"
		alt="Project Cover"
	/>
</div>
