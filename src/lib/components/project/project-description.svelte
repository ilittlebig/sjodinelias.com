<script lang="ts">
	let { children } = $props();
</script>

<div class="flex flex-col gap-y-4 max-w-lg">
	<p class="text-grayish text-lg font-semibold">Description</p>
	<p class="text-subtext">
		{@render children()}
	</p>
</div>
