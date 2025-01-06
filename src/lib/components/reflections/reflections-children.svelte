<script lang="ts">
	let { children } = $props();
</script>

<ol class="flex flex-col gap-8 list-decimal list-inside mx-auto max-w-xl">
	{@render children()}
</ol>
