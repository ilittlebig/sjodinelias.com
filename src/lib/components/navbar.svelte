<script lang="ts">
  import SquareArrowOutUpRight from "lucide-svelte/icons/square-arrow-out-up-right";
  import HoverTextAnimation from "$lib/components/hover-text-animation.svelte";
</script>

<div class="flex justify-between items-center p-8 absolute w-full">
  <p class="text-grayish text-2xl font-semibold select-none">sjodinelias</p>
  <div class="flex gap-x-12">
    <a href="/" class="flex items-center gap-x-2 expand-on-hover">
      <HoverTextAnimation label="Resume" />
      <SquareArrowOutUpRight class="text-grayish w-6 h-6" />
    </a>
    <a href="/" class="flex items-center gap-x-2 expand-on-hover">
      <HoverTextAnimation label="Linkedin" />
      <SquareArrowOutUpRight class="text-grayish w-6 h-6" />
    </a>
  </div>
</div>
