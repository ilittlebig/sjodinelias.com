<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Chip from "$lib/components/chip.svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.utils.toArray(".text-highlight").forEach(element => {
      gsap.fromTo(
        element,
        { backgroundSize: "0% 100%" },
        {
          backgroundSize: "100% 100%",
          backgroundImage: "linear-gradient(90deg, #f2f20d, #f2f20d)",
          scrollTrigger: {
            trigger: element,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
            scrub: true,
          },
        }
      );
    });
  });
</script>

<div class="flex flex-col gap-y-8 items-center">
  <div class="relative">
    <p class="font-playfair italic font-bold text-[70px] md:text-[150px] opacity-10 text-gradient leading-none">
      Background
    </p>
    <p class="text-lg md:text-2xl text-subtext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Get to know me
    </p>
  </div>

  <div class="flex flex-col items-center md:items-start md:flex-row gap-y-8 gap-x-16 max-w-4xl px-3 md:px-0">
    <img src="profile-picture.jpeg" class="bg-white rounded-card w-full w-[313px] h-[375px] object-cover" />

    <div class="flex flex-col gap-y-6">
      <p class="text-grayish">
        Software developer with nearly a <span class="text-highlight">decade of experience</span>.
        To me, programming is more than a job—it’s a hobby I’m lucky to get paid for.
        I focus on clean, structured code, thorough documentation, and comprehensive testing to ensure quality and maintainability.
      </p>
      <p class="text-grayish">
        I take pride in writing code that’s clean, maintainable, and easy for others to work with.
        Whether collaborating with a team or tackling a project solo, I strive to create <span class="text-highlight">user-friendly, accessible interfaces</span> that turn complex ideas into seamless experiences.
      </p>
      <div class="flex gap-x-2">
        <Chip variant="outline" label="Social" />
        <Chip variant="outline" label="Spontaneous" />
        <Chip variant="outline" label="Always up for an adventure" />
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .text-highlight {
    @apply bg-no-repeat text-black;
  }
</style>
