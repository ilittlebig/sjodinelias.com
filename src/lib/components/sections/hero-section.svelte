<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  let images = [
    "/high-performance.svg",
    "/future-proof.svg",
  ];

  onMount(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    gsap.from(".animate", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });

    images.forEach((_, index) => {
      timeline.fromTo(
        `#image-${index}`,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      )
      .to(
        `#image-${index}`,
        {
          delay: 2,
          y: -30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "+=0.5"
      );
    });
  });
</script>

<div class="flex items-center justify-center h-screen px-3 md:px-0 pointer-events-none">
  <div class="flex flex-col gap-y-12 items-center animate">
    <p class="text-subtext text-lg md:text-2xl text-center">
      Hello! I’m <span class="text-grayish italic">Elias Sjödin</span>,
      <br/>
      front-end developer based in Sweden.
    </p>
    <p class="text-3xl lg:text-5xl text-center font-semibold bg-gradient-to-b from-grayish to-[#958B8C] bg-clip-text text-transparent">
      Building seamless, accessible
      <br class="hidden md:block" />
      interfaces that bring ideas to life.
    </p>

    <div class="flex items-center justify-center relative w-full h-[46px]">
      {#each images as image, index}
        <img
          src={image}
          id={"image-" + index}
          width={767}
          class="absolute top-1/2 transform -translate-y-1/2 opacity-0"
					alt="Job Logo"
        />
      {/each}
    </div>

		<div class="w-full h-px bg-gradient-to-r from-transparent via-blue to-transparent"></div>

    <div class="flex gap-x-3 md:gap-x-4 items-center">
      <p class="text-subtext text-xs md:text-xl">Currently</p>
      <p class="text-subtext text-xs md:text-xl">@</p>
      <img src="/logos/am-system.svg" alt="Microsoft Logo" class="h-4 md:h-6" />
      <p class="text-subtext text-xs md:text-xl">|</p>
      <p class="text-subtext text-xs md:text-xl">Previously</p>
      <p class="text-subtext text-xs md:text-xl">@</p>
      <img src="/logos/roblox-logo.svg" alt="Roblox Logo" class="h-4 md:h-6" />
    </div>
  </div>

  <img src="/glow.png" alt="Glow Effect" width={1100} height={1100} class="absolute select-none -z-10 scale-125" />
</div>
