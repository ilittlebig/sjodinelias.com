<script lang="ts">
	import { FeatureSection } from "$lib/components/feature-section";
	import { Reflections } from "$lib/components/reflections";
	import { Project } from "$lib/components/project";
	import { Metadata } from "$lib/components/metadata";
	import Alert from "$lib/components/alert.svelte";
</script>

<svelte:head>
	<title>Elias Mattor - Hand-Tufted Rugs E-Commerce Platform</title>
	<meta name="description" content="Elias Mattor is an ongoing full-stack e-commerce project designed to showcase and sell unique, hand-tufted rugs. Users can customize their rugs or purchase preset designs." />

	<meta property="og:title" content="Elias Mattor - Hand-Tufted Rugs E-Commerce Platform" />
	<meta property="og:description" content="Explore Elias Mattor, an e-commerce platform showcasing unique hand-tufted rugs. Users can customize designs or purchase vibrant, preset rug styles." />
	<meta property="og:image" content="/eliasmattor-1.png" />
	<meta property="og:image:alt" content="Elias Mattor Hero Section" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Elias Mattor - Hand-Tufted Rugs E-Commerce Platform" />
	<meta name="twitter:description" content="Discover Elias Mattor, a platform featuring customizable and preset hand-tufted rugs, blending creativity with craftsmanship." />
	<meta name="twitter:image" content="/eliasmattor-1.png" />
	<meta name="twitter:image:alt" content="Elias Mattor Hero Section" />

	<meta name="author" content="Elias Sjödin" />
	<link rel="canonical" href="https://github.com/ilittlebig/eliasmattor" />
</svelte:head>

<div class="flex flex-col gap-y-32 mt-24 p-4 sm:p-8">
	<Project.Root>
		<Project.Name>Elias Mattor</Project.Name>
		<Project.Image src="eliasmattor-1.png" />
		<Project.Content>
			<Project.Description>
				Elias Mattor is an ongoing full-stack e-commerce project designed to showcase and sell unique, hand-tufted rugs. It aims to allow users to customize their own rugs or purchase preset designs. Although still in progress, the hero section sets the tone with a professional design emphasizing warmth, creativity, and craftsmanship.
			</Project.Description>
			<Project.Metadata>
				<Project.Role>Full-Stack Developer</Project.Role>
				<Project.Techstack list={["SvelteKit", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB", "Vercel"]} />
			</Project.Metadata>
		</Project.Content>
	</Project.Root>

	<Alert variant="note">
		This project is currently a work in progress and remains unfinished at the time of writing.
	</Alert>

	<FeatureSection.Root background="Features" foreground="Key Elements">
		<FeatureSection.Image
			title="Hero Section"
			description="The visually engaging hero section greets visitors with vibrant rug designs, emphasizing customization and creativity. This section highlights the company’s mission to bring warmth and individuality to homes."
			image="/eliasmattor-2.png"
		/>

		<FeatureSection.Image
			title="Highlighting Unique Rugs"
			description="The website showcases a collection of vibrant and unique hand-tufted rugs, each designed to reflect personal style and creativity."
			image="/eliasmattor-3.png"
			isLeft
		/>

		<FeatureSection.Image
			title="Customizable Design Options"
			description="Users can explore and customize rugs to fit their preferences, making each product truly one of a kind."
			image="/eliasmattor-4.png"
		/>

		<FeatureSection.Image
			title="Streamlined Navigation"
			description="The interface provides easy navigation, ensuring users can browse rugs, learn about the customization process, and make purchases effortlessly."
			image="/eliasmattor-5.png"
			isLeft
		/>

		<FeatureSection.Image
			title="Footer with Additional Resources"
			description="The footer consolidates essential links, legal information, and a subscription form. This ensures users can find relevant resources, stay informed, and easily connect with the company."
			image="/eliasmattor-6.png"
		/>
	</FeatureSection.Root>

	<Reflections.Root>
		<Reflections.Title background="Setbacks" foreground="Obstacles Faced" />
		<Reflections.Children>
			<Reflections.Child
				title="Balancing Design with Functionality"
				description="Creating a visually appealing yet functional hero section was challenging. Ensuring the design aligned with user experience and e-commerce standards required iterative feedback and refinement."
			/>
			<Reflections.Child
				title="Responsive Layout"
				description="Designing a fully responsive layout that maintained aesthetic integrity on all devices proved to be time-intensive, especially for high-resolution images."
			/>
			<Reflections.Child
				title="Scalability Challenges"
				description="Implementing a scalable architecture for future features, such as advanced customization tools, required extra planning and prototyping."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Reflections" foreground="Insights Gained" />
		<Reflections.Children>
			<Reflections.Child
				title="Importance of User-Centric Design"
				description="Designing the hero section emphasized the value of user-centric design. Early feedback helped refine the interface to better meet user expectations."
			/>
			<Reflections.Child
				title="Iterative Development is Key"
				description="Adopting an iterative approach to design and functionality allowed for continuous improvements and better alignment with project goals."
			/>
			<Reflections.Child
				title="Focus on Branding"
				description="Developing the hero section highlighted the importance of consistent branding to convey the company’s unique identity and vision."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Metadata.Root>
		<Metadata.SourceCode link="https://github.com/ilittlebig/eliasmattor" label="Github Page" />
		<Metadata.ProjectLink />
	</Metadata.Root>
</div>
