<script lang="ts">
	let { children } = $props();
</script>

<div class="flex gap-x-16">
	{@render children()}
</div>
