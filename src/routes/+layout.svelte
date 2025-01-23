<script lang="ts">
	import Cursor from "$lib/components/cursor.svelte";
	import Navbar from "$lib/components/navbar.svelte";
	import CtaSection from "$lib/components/sections/cta-section.svelte";
	import "../app.css";

	let { children } = $props();
</script>

<Cursor />
<div class="flex justify-center fixed top-0 z-10 w-full">
	<Navbar />
</div>

<div class="flex flex-col items-center w-full overflow-x-hidden">
	<div class="max-w-6xl">
		{@render children()}
	</div>
</div>

<div class="overflow-x-hidden">
	<CtaSection />
</div>
