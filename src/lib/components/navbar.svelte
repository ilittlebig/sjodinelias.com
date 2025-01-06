<script lang="ts">
  import SquareArrowOutUpRight from "lucide-svelte/icons/square-arrow-out-up-right";
  import HoverTextAnimation from "$lib/components/hover-text-animation.svelte";
</script>

<div class="flex justify-between items-center p-8 absolute top-0 w-full max-w-6xl z-10">
  <a href="/" class="expand-on-hover">
    <img src="sjodinelias.svg" class="h-8 select-none" alt="Logo" />
  </a>

  <div class="flex gap-x-6 md:gap-x-12">
    <a href="/resume.pdf" class="flex items-center gap-x-2 expand-on-hover">
      <HoverTextAnimation label="Resume" />
      <SquareArrowOutUpRight class="text-grayish w-6 h-6" />
    </a>
    <a href="https://www.linkedin.com/in/elias-sj%C3%B6din-504a6322a/" class="flex items-center gap-x-2 expand-on-hover">
      <HoverTextAnimation label="Linkedin" />
      <SquareArrowOutUpRight class="text-grayish w-6 h-6" />
    </a>
  </div>
</div>
