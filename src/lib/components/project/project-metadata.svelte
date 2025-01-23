<script lang="ts">
	let { children } = $props();
</script>

<div class="flex flex-col sm:flex-row gap-x-16 gap-y-8">
	{@render children()}
</div>
