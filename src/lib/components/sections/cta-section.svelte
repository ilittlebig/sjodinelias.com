<script lang="ts">
  import SquareArrowOutUpRight from "lucide-svelte/icons/square-arrow-out-up-right";
  import HoverTextAnimation from "$lib/components/hover-text-animation.svelte";
  import Chip from "$lib/components/chip.svelte";
</script>

<div class="flex flex-col gap-y-32 items-center pb-64">
  <div class="flex flex-col gap-y-8 items-center relative">
    <p class="font-playfair italic text-4xl md:text-6xl text-grayish">
      Like what you see?
    </p>
    <p class="text-3xl md:text-5xl text-subtext">
      Get in touch
    </p>
    <img src="/glow.png" alt="Glow Effect" width={900} height={900} class="absolute -top-1/2 select-none -z-10" />
  </div>

  <div class="flex flex-col md:flex-row gap-y-16 gap-x-32">
    <div class="flex flex-col items-center">
      <p class="text-subtext">Email</p>
      <p class="text-3xl text-grayish">elias@jamee.se</p>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-subtext">Social</p>
      <a href="/" class="flex items-center gap-x-2 expand-on-hover">
        <HoverTextAnimation label="Linkedin" size="lg" />
        <SquareArrowOutUpRight class="text-grayish w-6 h-6" />
      </a>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-subtext">Projects</p>
      <a href="/" class="flex items-center gap-x-2 expand-on-hover">
        <HoverTextAnimation label="Github" size="lg" />
        <SquareArrowOutUpRight class="text-grayish w-6 h-6" />
      </a>
    </div>
  </div>
</div>
