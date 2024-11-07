<script lang="ts">
  import ProjectCard from "$lib/components/project-card.svelte";

  interface Project {
    title: string;
    description: string;
    type: string;
    tags: string[];
    image: string;
  }

  const projects: Project[] = [
    {
      title: "Roblox Game",
      description: "This is a description about the thing on the card.",
      type: "Side Project",
      tags: ["JavaScript", "Next.js", "Vercel"],
      image: "project-image.png",
    },
    {
      title: "Roblox Game",
      description: "This is a description about the thing on the card.",
      type: "Side Project",
      tags: ["JavaScript", "Next.js", "Vercel"],
      image: "project-image.png",
    },
    {
      title: "Roblox Game",
      description: "This is a description about the thing on the card.",
      type: "Side Project",
      tags: ["JavaScript", "Next.js", "Vercel"],
      image: "project-image.png",
    },
    {
      title: "Roblox Game",
      description: "This is a description about the thing on the card.",
      type: "Side Project",
      tags: ["JavaScript", "Next.js", "Vercel"],
      image: "project-image.png",
    },
    {
      title: "Roblox Game",
      description: "This is a description about the thing on the card.",
      type: "Side Project",
      tags: ["JavaScript", "Next.js", "Vercel"],
      image: "project-image.png",
    },
    {
      title: "Roblox Game",
      description: "This is a description about the thing on the card.",
      type: "Side Project",
      tags: ["JavaScript", "Next.js", "Vercel"],
      image: "project-image.png",
    },
  ];
</script>

<div class="grid grid-cols-2 gap-[90px]">
  {#each projects as project}
    <ProjectCard {...project} />
  {/each}
</div>
