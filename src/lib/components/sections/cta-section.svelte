<script lang="ts">
  import SquareArrowOutUpRight from "lucide-svelte/icons/square-arrow-out-up-right";
  import HoverTextAnimation from "$lib/components/hover-text-animation.svelte";
  import Chip from "$lib/components/chip.svelte";
</script>

<div class="bg-[#141414] py-32 mt-64 rounded-t-[50px] shadow-[0px_0px_74px_0px_rgba(62,65,255,1)]">
  <div class="flex flex-col gap-y-32 items-center max-w-6xl ml-auto mr-auto">
    <div class="flex flex-col gap-y-8 items-center relative">
      <p class="font-playfair italic text-4xl md:text-6xl text-grayish">
        Like what you see?
      </p>
      <p class="text-3xl md:text-5xl text-subtext/50">
        Get in touch
      </p>
    </div>

    <div class="flex flex-col md:flex-row gap-y-16 gap-x-32">
      <div class="flex flex-col items-center">
        <p class="text-subtext">Email</p>
        <p class="text-3xl text-grayish">elias@jamee.se</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-subtext">Social</p>
        <a href="https://www.linkedin.com/in/elias-sj%C3%B6din-504a6322a/" class="flex items-center gap-x-2 expand-on-hover">
          <HoverTextAnimation label="Linkedin" size="lg" />
          <SquareArrowOutUpRight class="text-grayish w-6 h-6" />
        </a>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-subtext">Projects</p>
        <a href="https://www.github.com/ilittlebig/" class="flex items-center gap-x-2 expand-on-hover">
          <HoverTextAnimation label="Github" size="lg" />
          <SquareArrowOutUpRight class="text-grayish w-6 h-6" />
        </a>
      </div>
    </div>

    <p class="text-subtext">
      Inspired by
      <a href="https://www.ishanipandey.com/" class="hover:underline text-blue expand-on-hover">
        ishanipandey
      </a>
    </p>
  </div>
</div>
