<script lang="ts">
	import { FeatureSection } from "$lib/components/feature-section";
	import { Reflections } from "$lib/components/reflections";
	import { Project } from "$lib/components/project";
	import { Metadata } from "$lib/components/metadata";
	import Alert from "$lib/components/alert.svelte";
</script>

<svelte:head>
	<title>Internal Company Application - Streamlining Operations</title>
	<meta name="description" content="An internal application designed to manage customer systems, support daily developer workflows, and automate code deployment. Built with Svelte, Tauri, and AWS for efficiency and scalability." />

	<meta property="og:title" content="Internal Company Application - Streamlining Operations" />
	<meta property="og:description" content="Explore an internal company tool that manages customer systems, automates CI/CD workflows, and enables secure AWS RDS interactions to enhance developer productivity and operational efficiency." />
	<meta property="og:image" content="/internal-application.png" />
	<meta property="og:image:alt" content="Internal Company Application Overview" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Internal Company Application - Streamlining Operations" />
	<meta name="twitter:description" content="A comprehensive tool for managing customer systems, automating deployments, and enabling secure interactions with AWS infrastructure. Designed for developers and DevOps teams." />
	<meta name="twitter:image" content="/internal-application.png" />
	<meta name="twitter:image:alt" content="Internal Company Application Overview" />

	<meta name="author" content="Elias Sjödin" />
</svelte:head>

<div class="flex flex-col gap-y-32 mt-24 p-4 sm:p-8">
	<Project.Root>
		<Project.Name>Internal Company Application</Project.Name>
		<Project.Image src="internal-application.png" />
		<Project.Content>
			<Project.Description>
				This internal application I developed manages customer systems and supports developers’ daily workflows, including code deployment. Over six months, I created and refined this feature-packed tool to streamline operations and enhance efficiency.
			</Project.Description>
			<Project.Metadata>
				<Project.Role>Front-end developer, and UX designer</Project.Role>
				<Project.Techstack list={["Svelte", "Tauri", "AWS", "JavaScript", "Tailwind"]} />
			</Project.Metadata>
		</Project.Content>
	</Project.Root>

	<Alert variant="note">
		These images are mockups made in Figma, and does not look exactly like the real product.
	</Alert>

	<FeatureSection.Root background="Features" foreground="Most Frequently Used">
		<FeatureSection.Image
			title="CI/CD Workflow Tools"
			description="Automate code deployment, testing, and blue-green deployments. The “Deploy” button triggers these processes, ensuring efficient, reliable, and smooth transitions to production."
			image="/deploy-page.png"
		/>

		<FeatureSection.Image
			title="Interact with AWS RDS"
			description="Enables authorized DevOps team members to connect to and manage AWS RDS instances. It supports tasks like monitoring and maintenance, with restricted access to ensure secure, role-based usage."
			image="/bastion-page.png"
			isLeft
		/>

		<FeatureSection.Image
			title="List All Customers"
			description="Dialog for managing customer systems, including enabling features, activating or deactivating modules, modifying licenses, and viewing customer data."
			image="/systems-page.png"
		/>

		<FeatureSection.Image
			title="Manage Customer Systems"
			description="Dialog for managing customer systems, including enabling features, activating or deactivating modules, modifying licenses, and viewing customer data."
			image="/system-dialog.png"
			isLeft
		/>
	</FeatureSection.Root>

	<Reflections.Root>
		<Reflections.Title background="Setbacks" foreground="Obstacles Faced" />
		<Reflections.Children>
			<Reflections.Child
				title="Balancing Feature Requests and Deadlines"
				description="The biggest challenge was managing the balance between adding critical features requested by stakeholders and adhering to strict deadlines. This required careful prioritization and clear communication with the team to ensure that the most impactful features were delivered on time."
			/>
			<Reflections.Child
				title="Integrating CI/CD Workflows"
				description="Setting up the CI/CD workflow tools was particularly challenging due to the need to ensure compatibility with the company’s existing infrastructure. There were initial setbacks in automating deployment processes, but these were resolved by closely collaborating with DevOps teams to refine the pipeline."
			/>
			<Reflections.Child
				title="User Access and Role Management"
				description="Ensuring secure and role-based access for interacting with AWS RDS was complex. Implementing granular permissions required significant testing to avoid accidental privilege escalation while keeping the interface user-friendly."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Reflections" foreground="Insights Gained" />
		<Reflections.Children>
			<Reflections.Child
				title="Importance of User Feedback"
				description="Regular feedback from internal users proved invaluable. Iterating based on their input significantly improved the tool’s usability, leading to higher adoption rates among the staff."
			/>
			<Reflections.Child
				title="Designing for Scalability"
				description="Planning for potential future features during the initial design phase saved significant time. For example, building modular components allowed new features to be added with minimal disruption to the existing codebase."
			/>
			<Reflections.Child
				title="Cross-Department Collaboration is Key"
				description="Collaborating with different teams, such as DevOps and IT, emphasized the importance of cross-functional communication. This collaboration not only sped up development but also ensured that the tool met the diverse needs of its users."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Metadata.Root>
		<Metadata.SourceCode />
		<Metadata.ProjectLink />
	</Metadata.Root>
</div>
