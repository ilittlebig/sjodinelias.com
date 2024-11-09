<script lang="ts">
  import ProjectCard from "$lib/components/project-card.svelte";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

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

  onMount(() => {
    gsap.utils.toArray(".projects-section").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });
  });
</script>

<div class="flex flex-col gap-y-16 md:grid md:grid-cols-2 md:gap-[90px] projects-section">
  {#each projects as project}
    <ProjectCard {...project} />
  {/each}
</div>
