<script lang="ts">
	let { children } = $props();
</script>

<div class="flex justify-between gap-x-16">
	{@render children()}
</div>
