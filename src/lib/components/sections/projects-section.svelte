<script lang="ts">
	import ProjectCard from "$lib/components/project-card.svelte";
	import { onMount } from "svelte";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	interface Project {
		title: string;
		description: string;
		type: string;
		tags: string[];
		image: string;
		href: string;
	}

	const projects: Project[] = [
		{
			title: "Internal Company Application",
			description: "Internal application for handling customers, and developer tools.",
			type: "Work",
			tags: ["JavaScript", "Svelte", "Tauri"],
			image: "internal-application.png",
			href: "/internal-company-application",
		},
		{
			title: "Jaafar",
			description: "Automate product monitoring and purchases with ease. Buy instantly or get notified with a cart link!",
			type: "Side Project",
			tags: ["TypeScript", "Svelte", "Tauri", "AWS Cognito"],
			image: "jaafar.png",
			href: "/jaafar",
		},
		{
			title: "Self Blog",
			description: "A custom CMS for blogging with SvelteKit, AWS S3, Cognito and DynamoDB.",
			type: "Side Project",
			tags: ["Svelte", "AWS S3", "Cognito", "DynamoDB"],
			image: "self-blog.png",
			href: "/self-blog",
		},
		{
			title: "Elias Mattor",
			description: "Fullstack e-commerce website for selling rugs.",
			type: "Side Project",
			tags: ["JavaScript", "Next.js", "Vercel", "GSAP"],
			image: "eliasmattor.png",
			href: "/eliasmattor",
		},
		{
			title: "Personal Portfolio",
			description: "Portfolio showcasing previous projects, and work experience.",
			type: "Side Project",
			tags: ["TypeScript", "Svelte", "Vercel", "Tailwind"],
			image: "personal-portfolio.png",
			href: "/personal-portfolio",
		},
		{
			title: "Easy Auth",
			description: "AWS Cognito authentication library using AWS SDK with SRP-based login.",
			type: "Side Project",
			tags: ["TypeScript", "AWS Cognito", "AWS SDK"],
			image: "easy-auth.png",
			href: "/easy-auth",
		},
		{
			title: "Discord AI Bot",
			description: "Discord bot leveraging OpenAI for intelligent, responsive, and customizable AI-powered chat interactions.",
			type: "Side Project",
			tags: ["Python", "OpenAI API"],
			image: "discord-bot.png",
			href: "/discord-bot",
		},
		{
			title: "Little",
			description: "A custom programming language made in C.",
			type: "Side Project",
			tags: ["C", "GCC", "Make"],
			image: "little-lang.png",
			href: "/little-lang",
		},
		{
			title: "Dynamo To Cognito",
			description: "Migrates users from AWS DynamoDB to AWS Cognito.",
			type: "Side Project",
			tags: ["TypeScript", "AWS DynamoDB", "AWS Cognito"],
			image: "dynamo-to-cognito.png",
			href: "/dynamo-to-cognito",
		},
		{
			title: "Robbery (Story)",
			description: "Game on Roblox, played over 12 million times, with microtransactions.",
			type: "Side Project",
			tags: ["Lua", "Roblox Studio"],
			image: "robbery-story.png",
			href: "/robbery",
		},
	];

	onMount(() => {
		gsap.utils.toArray(".projects-section").forEach((card: any) => {
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
