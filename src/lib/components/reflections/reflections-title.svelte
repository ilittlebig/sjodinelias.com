<script lang="ts">
	interface Props {
		background: string;
		foreground: string;
	}

	let {
		background,
		foreground,
	}: Props = $props();
</script>

<div class="flex justify-center relative">
	<p class="font-playfair italic font-bold text-[70px] md:text-[150px] opacity-10 text-gradient leading-none">
		{background}
	</p>
	<p class="text-lg md:text-2xl text-nowrap text-subtext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
		{foreground}
	</p>
</div>
