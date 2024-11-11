<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { cn } from "$lib/utils/class-utils";

  gsap.registerPlugin(ScrollTrigger);

  interface Job {
    image: string;
    alt: string;
    description: string;
    year: number;
  }

  const jobs: Job[] = [
    {
      image: "am-system.svg",
      alt: "AM System Logo",
      description: "Currently, I develop and maintain internal applications, build custom libraries (e.g., authentication in TypeScript), and design user interfaces using Svelte and Tailwind.",
      year: 2024,
    },
    {
      image: "trading.webp",
      alt: "Trading Logo",
      description: "Worked with a senior software engineer on a trading algorithm, contributing to its design and optimization.",
      year: 2023,
    },
    {
      image: "roblox-logo.svg",
      alt: "Roblox Logo",
      description: "I wasn’t employed by Roblox, but I developed and monetized a game on their platform, earning a decent income. That’s why I’ve included it as part of my work experience.",
      year: 2022,
    },
  ];

  onMount(() => {
    gsap.from(".timeline-section", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".timeline-section",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.utils.toArray(".timeline-year").forEach((year, index) => {
      gsap.from(year, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        scrollTrigger: {
          trigger: year,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });

    gsap.fromTo(".timeline-gradient-overlay",
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );
  });
</script>

{#snippet year(job: Job, isLeft: boolean)}
  <div class={cn("timeline-year md:w-1/2", isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left")}>
    <p class="text-3xl md:text-5xl font-medium text-grayish">{job.year}</p>
  </div>
{/snippet}

{#snippet connector(index: number)}
  <div class="relative hidden md:flex flex-col items-center">
    {#if index === 0}
      <div class="h-5 w-5 bg-blue rounded-full" />
    {:else}
      <div class="h-5 w-5 bg-dark-border rounded-full z-20" />
    {/if}
    {#if index < jobs.length - 1}
      <div class="absolute top-full h-[264px] w-0.5 bg-dark-border" />
    {/if}
  </div>
{/snippet}

{#snippet jobDetails(job: Job, isLeft: boolean)}
    <div class={cn("timeline-year md:w-1/2 flex items-center", isLeft ? "md:pl-16" : "md:pr-16")}>
    <div class="flex flex-col items-start gap-y-3">
      <img src="/logos/{job.image}" alt={job.alt} class="h-8">
      <p class="text-subtext">{job.description}</p>
    </div>
  </div>
{/snippet}

<div class="flex flex-col gap-y-8 items-center timeline-section">
  <div class="relative">
    <p class="font-playfair italic font-bold text-[70px] md:text-[150px] opacity-10 text-gradient leading-none">
      Experience
    </p>
    <p class="text-lg md:text-2xl text-nowrap text-subtext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Professional Work Experience
    </p>
  </div>

  <div class="flex flex-col gap-y-24 md:gap-y-36 items-center max-w-4xl relative">
    <div class="timeline-gradient-overlay absolute top-[60px] left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%-115px)] bg-gradient-to-b from-blue to-transparent scale-y-0 z-10 hidden md:block" />

    {#each jobs as job, index}
      <div class="flex items-center gap-x-6 md:justify-between px-6 md:px-0">
        {#if index % 2 === 0}
          {@render year(job, true)}
          {@render connector(index)}
          {@render jobDetails(job, true)}
        {:else}
          {@render jobDetails(job, false)}
          {@render connector(index)}
          {@render year(job, false)}
        {/if}
      </div>
    {/each}
  </div>
</div>
