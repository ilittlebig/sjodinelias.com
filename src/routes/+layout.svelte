<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

<div class="overflow-x-hidden">
  {@render children()}
</div>
