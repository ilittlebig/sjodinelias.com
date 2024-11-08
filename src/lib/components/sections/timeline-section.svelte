<script lang="ts">
  import { cn } from "$lib/utils/class-utils";

  interface Job {
    image: string;
    alt: string;
    description: string;
    year: number;
  }

  const jobs: Job[] = [
    {
      image: "microsoft-logo.svg",
      alt: "Microsoft Logo",
      description: "Some text about some work and this is some text. This is more text, I don't know exactly what to say.",
      year: 2024,
    },
    {
      image: "roblox-logo.svg",
      alt: "Roblox Logo",
      description: "Some text about some work and this is some text. This is more text, I don't know exactly what to say.",
      year: 2023,
    },
    {
      image: "microsoft-logo.svg",
      alt: "Microsoft Logo",
      description: "Some text about some work and this is some text. This is more text, I don't know exactly what to say.",
      year: 2022,
    },
    {
      image: "microsoft-logo.svg",
      alt: "Microsoft Logo",
      description: "Some text about some work and this is some text. This is more text, I don't know exactly what to say.",
      year: 2021,
    },
  ];
</script>

{#snippet year(job: Job, isLeft: boolean)}
  <div class={cn("w-1/2", isLeft ? "pr-16 text-right" : "pl-16 text-left")}>
    <p class="text-5xl font-medium text-grayish">{job.year}</p>
  </div>
{/snippet}

{#snippet connector(index: number)}
  <div class="relative flex flex-col items-center">
    {#if index === 0}
      <div class="h-5 w-5 bg-blue rounded-full" />
    {:else}
      <div class="h-5 w-5 bg-dark-border rounded-full" />
    {/if}
    {#if index < jobs.length - 1}
      {#if index === 0}
        <div class="absolute top-full h-60 w-0.5 bg-gradient-to-b from-blue to-dark-border" />
      {:else}
        <div class="absolute top-full h-60 w-0.5 bg-dark-border" />
      {/if}
    {/if}
  </div>
{/snippet}

{#snippet jobDetails(job: Job, isLeft: boolean)}
    <div class={cn("w-1/2 flex items-center", isLeft ? "pl-16" : "pr-16")}>
    <div class="flex flex-col items-start gap-y-3">
      <img src="/logos/{job.image}" alt={job.alt} class="h-8">
      <p class="text-subtext">
        {job.description}
      </p>
    </div>
  </div>
{/snippet}

<div class="flex flex-col gap-y-8 items-center">
  <div class="relative">
    <p class="font-playfair italic font-bold text-[150px] opacity-10 text-gradient leading-none">
      Experience
    </p>
    <p class="text-2xl text-subtext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Previously worked at
    </p>
  </div>

  <div class="flex flex-col gap-y-36 items-center max-w-4xl">
    {#each jobs as job, index}
      <div class="flex items-center justify-between">
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
