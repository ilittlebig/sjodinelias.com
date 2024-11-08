<script lang="ts">
  import Chip from "$lib/components/chip.svelte";
</script>

<div class="flex flex-col gap-y-8 items-center">
  <div class="relative">
    <p class="font-playfair italic font-bold text-[150px] opacity-10 text-gradient leading-none">
      Background
    </p>
    <p class="text-2xl text-subtext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Get to know me
    </p>
  </div>

  <div class="flex gap-x-16 max-w-4xl">
    <img src="project-image.png" class="bg-white rounded-card w-full w-[313px] h-[375px]" />

    <div class="flex flex-col gap-y-6">
      <p class="text-grayish">
        Software developer with nearly a <span class="text-blue">decade of experience</span>.
        To me, programming is more than a job—it’s a hobby I’m lucky to get paid for.
        I focus on clean, structured code, thorough documentation, and comprehensive testing to ensure quality and maintainability.
      </p>
      <p class="text-grayish">
        I take pride in writing code that’s clean, maintainable, and easy for others to work with.
        Whether collaborating with a team or tackling a project solo, I strive to create user-friendly, accessible interfaces that turn complex ideas into seamless experiences.
      </p>
      <div class="flex gap-x-2">
        <Chip variant="outline" label="Social" />
        <Chip variant="outline" label="Spontaneous" />
        <Chip variant="outline" label="Always up for an adventure" />
      </div>
    </div>
  </div>
</div>
