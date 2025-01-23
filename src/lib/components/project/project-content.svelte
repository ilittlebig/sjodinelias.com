<script lang="ts">
	let { children } = $props();
</script>

<div class="flex md:flex-row flex-col justify-between gap-x-16 gap-y-8">
	{@render children()}
</div>
