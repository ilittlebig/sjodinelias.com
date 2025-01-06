<script lang="ts">
	let { children } = $props();
</script>

<div class="flex gap-x-8">
	{@render children()}
</div>
