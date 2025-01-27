<script lang="ts">
	import { Reflections } from "$lib/components/reflections";
	import { Project } from "$lib/components/project";
	import { Metadata } from "$lib/components/metadata";
</script>

<svelte:head>
	<title>Easy Auth - Simplified AWS Cognito Authentication</title>
	<meta name="description" content="Easy Auth is an AWS Cognito authentication library using the AWS SDK with SRP-based login. It simplifies and secures user authentication processes with robust features." />

	<meta property="og:title" content="Easy Auth - Simplified AWS Cognito Authentication" />
	<meta property="og:description" content="Explore Easy Auth, a library designed to streamline AWS Cognito authentication with SRP-based login, user management, MFA, and secure session handling." />
	<meta property="og:image" content="/easy-auth.png" />
	<meta property="og:image:alt" content="Easy Auth Library Overview" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Easy Auth - Simplified AWS Cognito Authentication" />
	<meta name="twitter:description" content="Secure and simplify user authentication with Easy Auth. Features include SRP-based login, MFA support, session management, and AWS Cognito integration." />
	<meta name="twitter:image" content="/easy-auth.png" />
	<meta name="twitter:image:alt" content="Easy Auth Library Overview" />

	<meta name="author" content="Elias Sjödin" />
	<link rel="canonical" href="https://github.com/ilittlebig/easy-auth/" />
</svelte:head>

<div class="flex flex-col gap-y-32 mt-24 p-4 sm:p-8">
	<Project.Root>
		<Project.Name>Easy Auth</Project.Name>
		<Project.Image src="easy-auth.png" />
		<Project.Content>
			<Project.Description>
				The Easy Auth project is an AWS Cognito authentication library that utilizes the AWS SDK with SRP-based login, aiming to simplify and secure user authentication processes.
			</Project.Description>
			<Project.Metadata>
				<Project.Role>Maintainer</Project.Role>
				<Project.Techstack list={["TypeScript", "Vite", "Vitest"]} />
			</Project.Metadata>
		</Project.Content>
	</Project.Root>

	<Reflections.Root>
		<Reflections.Title background="Features" foreground="Library Capabilities" />
		<Reflections.Children>
			<Reflections.Child
				title="Secure Authentication"
				description="Utilizes the SRP (Secure Remote Password) protocol to ensure secure user logins and protection against unauthorized access."
			/>
			<Reflections.Child
				title="AWS SDK Integration"
				description="Seamlessly integrates with AWS Cognito for streamlined user authentication and management workflows."
			/>
			<Reflections.Child
				title="User Management"
				description="Provides functionality for user registration, sign-ins, password resets, and managing user attributes effortlessly."
			/>
			<Reflections.Child
				title="Multi-Factor Authentication (MFA)"
				description="Supports managing and configuring TOTP and SMS-based MFA preferences for added security."
			/>
			<Reflections.Child
				title="Session Management"
				description="Includes features for retrieving current sessions, signing users out globally or locally, and managing remembered devices."
			/>
			<Reflections.Child
				title="Extensive API Support"
				description="Offers APIs for user sign-up, confirmation, session retrieval, MFA verification, and user deletion to cover a wide range of use cases."
			/>
			<Reflections.Child
				title="Storage Customization"
				description="Allows changing storage providers for managing tokens, including localStorage, in-memory storage, or cookies for flexibility."
			/>
			<Reflections.Child
				title="Comprehensive Unit Tests"
				description="Fully tested with robust unit tests to ensure reliable performance across various authentication scenarios."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Setbacks" foreground="Obstacles Faced" />
		<Reflections.Children>
			<Reflections.Child
				title="Implementing SRP Protocol"
				description="Integrating the SRP protocol with AWS Cognito required in-depth understanding and meticulous implementation to ensure compatibility and security."
			/>
			<Reflections.Child
				title="Managing User Sessions"
				description="Handling user sessions securely, including token management and session expiration, posed significant challenges during development."
			/>
			<Reflections.Child
				title="Ensuring Comprehensive Test Coverage"
				description="Developing extensive unit tests to cover various authentication scenarios was time-consuming but essential for maintaining code reliability."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Reflections" foreground="Insights Gained" />
		<Reflections.Children>
			<Reflections.Child
				title="Importance of Security Protocols"
				description="Implementing industry-standard security protocols like SRP is crucial for building secure authentication systems."
			/>
			<Reflections.Child
				title="Effective Session Management"
				description="Proper management of user sessions enhances both security and user experience, highlighting the need for robust session handling mechanisms."
			/>
			<Reflections.Child
				title="Value of Testing"
				description="Comprehensive testing is vital in identifying edge cases and ensuring the reliability of authentication processes, reinforcing the importance of thorough test coverage."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Metadata.Root>
		<Metadata.SourceCode link="https://github.com/ilittlebig/easy-auth/" label="Github Page" />
		<Metadata.ProjectLink />
	</Metadata.Root>
</div>
