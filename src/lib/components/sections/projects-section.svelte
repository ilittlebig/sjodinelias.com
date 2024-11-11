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
      title: "Internal Company Application",
      description: "Internal application for handling customers, and developer tools.",
      type: "Work",
      tags: ["JavaScript", "Svelte", "Tauri"],
      image: "internal-application.png",
    },
    {
      title: "Easy Auth",
      description: "AWS Cognito authentication library using AWS SDK with SRP-based login.",
      type: "Side Project",
      tags: ["TypeScript", "AWS Cognito", "AWS SDK"],
      image: "easy-auth.png",
    },
    {
      title: "Eliasmattor",
      description: "Fullstack e-commerce website for selling rugs.",
      type: "Side Project",
      tags: ["JavaScript", "Next.js", "Vercel"],
      image: "project-image.png",
    },
    {
      title: "Personal Portfolio",
      description: "Portfolio showcasing previous projects, and work experience.",
      type: "Side Project",
      tags: ["TypeScript", "Svelte", "Vercel"],
      image: "personal-portfolio.png",
    },
    {
      title: "Little",
      description: "A custom programming language made in C.",
      type: "Side Project",
      tags: ["C", "GCC", "Make"],
      image: "little-lang.png",
    },
    {
      title: "Dynamo To Cognito",
      description: "Migrates users from AWS DynamoDB to AWS Cognito.",
      type: "Side Project",
      tags: ["JavaScript", "AWS DynamoDB", "AWS Cognito"],
      image: "dynamo-to-cognito.png",
    },
    {
      title: "Robbery (Story)",
      description: "Game on Roblox, played over 12 million times, with microtransactions.",
      type: "Side Project",
      tags: ["Lua", "Roblox Studio"],
      image: "robbery-story.png",
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
