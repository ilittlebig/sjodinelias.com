<script lang="ts">
	import { Reflections } from "$lib/components/reflections";
	import { Project } from "$lib/components/project";
	import { Metadata } from "$lib/components/metadata";
</script>

<svelte:head>
	<title>Personal Portfolio - Showcasing Skills and Projects</title>
	<meta name="description" content="Explore my Personal Portfolio, a platform built with SvelteKit to showcase my skills, projects, and professional journey in an interactive and visually engaging way." />

	<meta property="og:title" content="Personal Portfolio - Showcasing Skills and Projects" />
	<meta property="og:description" content="Discover my Personal Portfolio, featuring interactive project showcases, responsive design, and dynamic animations powered by SvelteKit and GSAP." />
	<meta property="og:url" content="https://sjodinelias.com" />
	<meta property="og:image" content="/personal-portfolio.png" />
	<meta property="og:image:alt" content="Personal Portfolio Overview" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Personal Portfolio - Showcasing Skills and Projects" />
	<meta name="twitter:description" content="A visually engaging and responsive portfolio showcasing my skills and projects, built with SvelteKit, Tailwind CSS, and GSAP." />
	<meta name="twitter:image" content="/personal-portfolio.png" />
	<meta name="twitter:image:alt" content="Personal Portfolio Overview" />

	<meta name="author" content="Elias Sjödin" />
	<link rel="canonical" href="https://sjodinelias.com" />
</svelte:head>

<div class="flex flex-col gap-y-32 mt-24 p-4 sm:p-8">
	<Project.Root>
		<Project.Name>Personal Portfolio</Project.Name>
		<Project.Image src="personal-portfolio.png" />
		<Project.Content>
			<Project.Description>
				The Personal Portfolio project showcases my skills, projects, and professional journey in an interactive and visually engaging way. Built with SvelteKit and Tailwind CSS, it emphasizes clean design, responsiveness, and modularity while maintaining scalability for future expansions.
			</Project.Description>
			<Project.Metadata>
				<Project.Role>Full-Stack Developer</Project.Role>
				<Project.Techstack list={["SvelteKit", "Tailwind CSS", "TypeScript", "Vercel", "GSAP"]} />
			</Project.Metadata>
		</Project.Content>
	</Project.Root>

	<Reflections.Root>
		<Reflections.Title background="Features" foreground="Project Capabilities" />
		<Reflections.Children>
			<Reflections.Child
				title="Interactive Project Showcases"
				description="Each project is presented with an interactive and modular design, emphasizing animations and responsiveness."
			/>
			<Reflections.Child
				title="Responsive Design"
				description="Optimized for all devices, ensuring a seamless user experience across desktops, tablets, and smartphones."
			/>
			<Reflections.Child
				title="Dynamic Animations"
				description="Utilizes GSAP for animations to create a visually appealing and engaging user experience."
			/>
			<Reflections.Child
				title="Lightweight & Fast"
				description="Hosted on Vercel, leveraging SvelteKit for blazing-fast performance and SEO-friendly static rendering."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Setbacks" foreground="Obstacles Faced" />
		<Reflections.Children>
			<Reflections.Child
				title="Animation Complexity"
				description="Implementing smooth animations using GSAP while ensuring optimal performance across devices was challenging and required iterative fine-tuning."
			/>
			<Reflections.Child
				title="Content Organization"
				description="Structuring content effectively, especially for projects and the blog section, posed challenges in terms of modularity and scalability."
			/>
			<Reflections.Child
				title="Balancing Design and Development"
				description="Ensuring a balance between aesthetic appeal and functional design required several iterations based on user feedback and usability testing."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Reflections" foreground="Insights Gained" />
		<Reflections.Children>
			<Reflections.Child
				title="Importance of Modularity"
				description="This project reinforced the value of building modular components for scalability and maintainability in personal and professional projects."
			/>
			<Reflections.Child
				title="Iterative Design Approach"
				description="Adopting an iterative design approach helped refine the user experience and resulted in a polished final product."
			/>
			<Reflections.Child
				title="Power of Animation"
				description="Leveraging GSAP animations demonstrated how visual elements can significantly enhance user engagement and interactivity."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Metadata.Root>
		<Metadata.SourceCode link="https://github.com/ilittlebig/sjodinelias.com" label="Github Page" />
		<Metadata.ProjectLink link="https://sjodinelias.com" />
	</Metadata.Root>
</div>
