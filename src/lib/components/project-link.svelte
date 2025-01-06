<script lang="ts">
	import { Link } from "lucide-svelte";
  import HoverTextAnimation from "$lib/components/hover-text-animation.svelte";
</script>

<div class="flex flex-col gap-y-1 items-center mx-auto">
	<div class="flex gap-x-2 items-center">
		<Link class="text-grayish w-4 h-4" />
		<h3 class="text-subtext text-sm">Project Website</h3>
	</div>
	<a href="https://jaafar.app/" class="flex items-center gap-x-2 expand-on-hover">
		<HoverTextAnimation label="https://jaafar.app/" />
	</a>
</div>
