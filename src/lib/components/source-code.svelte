<script lang="ts">
	import { Github } from "lucide-svelte";
  import HoverTextAnimation from "$lib/components/hover-text-animation.svelte";
</script>

<div class="flex flex-col gap-y-1 items-center mx-auto">
	<div class="flex gap-x-2 items-center">
		<Github class="text-grayish w-4 h-4" />
		<h3 class="text-subtext text-sm">Source Code</h3>
	</div>
	<a href="https://github.com/ilittlebig/jaafar/" class="flex items-center gap-x-2 expand-on-hover">
		<HoverTextAnimation label="https://github.com/ilittlebig/jaafar/" />
	</a>
</div>
