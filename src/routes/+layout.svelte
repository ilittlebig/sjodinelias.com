<script lang="ts">
  import Cursor from "$lib/components/cursor.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import CtaSection from "$lib/components/sections/cta-section.svelte";
	import "../app.css";

	let { children } = $props();
</script>

<Cursor />

<div class="max-w-6xl ml-auto mr-auto relative overflow-x-hidden">
  <Navbar />
  {@render children()}
</div>
<CtaSection />
