<script lang="ts">
	import { FeatureSection } from "$lib/components/feature-section";
	import { Reflections } from "$lib/components/reflections";
	import { Project } from "$lib/components/project";
	import { Metadata } from "$lib/components/metadata";
</script>

<svelte:head>
	<title>Self Blog - A Custom CMS for Personal Blogging</title>
	<meta name="description" content="Explore Self-Blog, a custom-built Content Management System (CMS) featuring Markdown editing, AWS integration, and tools for managing blog posts seamlessly." />

	<meta property="og:title" content="Self Blog - A Custom CMS for Personal Blogging" />
	<meta property="og:description" content="Self-Blog is a personalized CMS designed to simplify content creation, featuring Markdown editing, AWS S3 integration, and dynamic dashboards for blog management." />
	<meta property="og:url" content="https://blog.sjodinelias.com/" />
	<meta property="og:image" content="/self-blog.png" />
	<meta property="og:image:alt" content="Self Blog CMS Overview" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Self Blog - A Custom CMS for Personal Blogging" />
	<meta name="twitter:description" content="Discover Self-Blog, a powerful CMS built with SvelteKit, AWS DynamoDB, and Tailwind CSS for seamless blogging." />
	<meta name="twitter:image" content="/self-blog.png" />
	<meta name="twitter:image:alt" content="Self Blog CMS Overview" />

	<meta name="author" content="Elias Sjödin" />
	<link rel="canonical" href="https://blog.sjodinelias.com/" />
</svelte:head>

<div class="flex flex-col gap-y-32 mt-24 p-4 sm:p-8">
	<Project.Root>
		<Project.Name>Self Blog</Project.Name>
		<Project.Image src="self-blog.png" />
		<Project.Content>
			<Project.Description>
				Self-Blog is a custom CMS built for personal blogging, featuring Markdown editing, post management, and AWS integration. Designed to simplify content creation and provide tools for showcasing projects and sharing knowledge.
			</Project.Description>
			<Project.Metadata>
				<Project.Techstack list={[
					"Svelte",
					"TypeScript",
					"AWS DynamoDB",
					"AWS S3",
					"AWS Cognito",
					"Vercel",
					"Tailwind CSS"
				]} />
			</Project.Metadata>
		</Project.Content>
	</Project.Root>

	<FeatureSection.Root background="Features" foreground="Most Notable">
		<FeatureSection.Image
			title="Feed Overview"
			description="Displays a list of published posts in a clean and accessible format. Readers can browse through the feed to find articles on various topics, with tags and summaries making navigation easy."
			image="/self-blog-feed.png"
		/>

		<FeatureSection.Image
			title="Admin Dashboard"
			description="A centralized dashboard for managing posts, featuring tools for editing, deleting, and organizing blog content. Users can view statistics and manage their publishing schedule."
			image="/self-blog-dashboard.png"
			isLeft
		/>

		<FeatureSection.Image
			title="Edit Post"
			description="Provides a rich Markdown editing interface for updating content seamlessly. Includes options to add or modify tags, summaries, and featured images, ensuring posts remain dynamic and up-to-date."
			image="/self-blog-edit-post.png"
		/>

		<FeatureSection.Image
			title="Create New Post"
			description="Simplifies content creation with an intuitive editor. Authors can draft articles, upload thumbnails, and preview their posts before publishing to ensure a polished final product."
			image="/self-blog-new-post.png"
			isLeft
		/>
	</FeatureSection.Root>

	<Reflections.Root>
		<Reflections.Title background="Setbacks" foreground="Obstacles Faced" />
		<Reflections.Children>
			<Reflections.Child
				title="Managing Cloud Resources"
				description="Setting up and configuring AWS services like S3 and DynamoDB required careful planning to ensure cost-efficiency and security, which was a key challenge during development."
			/>
			<Reflections.Child
				title="Optimizing Performance"
				description="Handling large datasets and ensuring smooth interactions, especially with dynamic dashboards, required multiple iterations and performance profiling."
			/>
			<Reflections.Child
				title="Ensuring Seamless Authentication"
				description="Integrating AWS Cognito for secure authentication while maintaining a smooth user experience involved extensive testing and debugging."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Reflections" foreground="Insights Gained" />
		<Reflections.Children>
			<Reflections.Child
				title="Building a Robust Content Management System"
				description="Developing a tailored CMS allowed for seamless post creation, editing, and management, ensuring flexibility and ease of use for content creators."
			/>
			<Reflections.Child
				title="Simplifying Media Management"
				description="Integrating AWS S3 for image uploads streamlined media handling, providing reliable and scalable storage for thumbnails and other assets."
			/>
			<Reflections.Child
				title="Cloud Services Empower Scalability"
				description="Leveraging AWS services like DynamoDB and S3 showcased the importance of scalable cloud infrastructure for modern applications."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Metadata.Root>
		<Metadata.SourceCode link="https://github.com/ilittlebig/self-blog/" label="Github Page" />
		<Metadata.ProjectLink link="https://blog.sjodinelias.com/" label="Blog Page" />
	</Metadata.Root>
</div>
