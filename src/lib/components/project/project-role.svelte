<script lang="ts">
	let { children } = $props();
</script>

<div class="flex flex-col gap-y-4">
	<p class="text-grayish text-lg font-semibold">Role</p>
	<p class="text-subtext">
		{@render children()}
	</p>
</div>
