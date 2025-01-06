<script lang="ts">
	let { children } = $props();
</script>

<div class="flex flex-col gap-y-8">
	{@render children()}
</div>
