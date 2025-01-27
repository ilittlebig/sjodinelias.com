<script lang="ts">
	import HeroSection from "$lib/components/sections/hero-section.svelte";
	import ProjectsSection from "$lib/components/sections/projects-section.svelte";
	import BackgroundSection from "$lib/components/sections/background-section.svelte";
</script>

<svelte:head>
	<title>Elias Sjödin - Developer Portfolio</title>
	<meta name="description" content="Explore Elias Sjödin's developer portfolio, showcasing projects, professional background, and technical expertise in building innovative solutions." />

	<meta property="og:title" content="Elias Sjödin - Developer Portfolio" />
	<meta property="og:description" content="Discover the projects and background of Elias Sjödin, a developer passionate about creating efficient and innovative software solutions." />
	<meta property="og:image" content="/portfolio-hero.jpg" />
	<meta property="og:image:alt" content="Elias Sjödin Portfolio Hero Section" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sjodinelias.com/" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Elias Sjödin - Developer Portfolio" />
	<meta name="twitter:description" content="Explore the portfolio of Elias Sjödin, featuring innovative projects, technical expertise, and a passion for development." />
	<meta name="twitter:image" content="/portfolio-hero.jpg" />
	<meta name="twitter:image:alt" content="Elias Sjödin Portfolio Hero Section" />

	<meta name="author" content="Elias Sjödin" />
	<link rel="canonical" href="https://sjodinelias.com/" />
</svelte:head>

<div class="overflow-x-hidden relative">
	<HeroSection />
	<div class="flex flex-col gap-y-[304px]">
		<ProjectsSection />
		<BackgroundSection />
	</div>
</div>
