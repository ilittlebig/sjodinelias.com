<script lang="ts">
  import SquareArrowOutUpRight from "lucide-svelte/icons/square-arrow-out-up-right";
  import Chip from "$lib/components/chip.svelte";
</script>

<div class="flex flex-col gap-y-[304px] items-center pb-64">
  <div class="flex flex-col gap-y-8 items-center">
    <p class="font-playfair italic text-6xl text-subtext">
      Like what you see?
    </p>
    <p class="text-5xl text-subtext">
      Get in touch
    </p>
  </div>

  <div class="flex gap-x-32">
    <div class="flex flex-col items-center">
      <p class="text-subtext">Email</p>
      <p class="text-3xl text-subtext">elias@jamee.se</p>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-subtext">Social</p>
      <div class="flex items-center gap-x-2">
        <p class="text-3xl text-subtext">Linkedin</p>
        <SquareArrowOutUpRight class="text-grayish w-6 h-6" />
      </div>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-subtext">Projects</p>
      <div class="flex items-center gap-x-2">
        <p class="text-3xl text-subtext">Github</p>
        <SquareArrowOutUpRight class="text-grayish w-6 h-6" />
      </div>
    </div>
  </div>
</div>
