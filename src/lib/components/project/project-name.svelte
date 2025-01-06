<script lang="ts">
	let { children } = $props();
</script>

<h1 class="text-grayish text-3xl font-semibold">
	{@render children()}
</h1>
