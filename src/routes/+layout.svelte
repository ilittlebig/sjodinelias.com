<script lang="ts">
	import Cursor from "$lib/components/cursor.svelte";
	import Navbar from "$lib/components/navbar.svelte";
	import CtaSection from "$lib/components/sections/cta-section.svelte";
	import "../app.css";

	let { children } = $props();
</script>

<Cursor />
<div class="flex justify-center">
	<Navbar />
</div>

<div class="max-w-6xl ml-auto mr-auto">
	{@render children()}
</div>

<div class="overflow-x-hidden">
	<CtaSection />
</div>
