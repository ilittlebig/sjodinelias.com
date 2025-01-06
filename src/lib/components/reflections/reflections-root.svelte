<script lang="ts">
	let { children } = $props();
</script>

<div class="flex flex-col gap-y-16">
	{@render children()}
</div>
