<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

<div class="max-w-6xl ml-auto mr-auto relative overflow-x-hidden">
  {@render children()}
</div>
