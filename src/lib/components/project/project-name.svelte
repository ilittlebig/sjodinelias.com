<script lang="ts">
	let { children } = $props();
</script>

<h1 class="text-grayish text-2xl sm:text-3xl font-semibold text-center md:text-left">
	{@render children()}
</h1>
