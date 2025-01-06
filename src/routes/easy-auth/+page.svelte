<script lang="ts">
	import { Reflections } from "$lib/components/reflections";
	import { Project } from "$lib/components/project";
</script>

<div class="flex flex-col gap-y-32 mt-24 p-8">
	<Project.Root>
		<Project.Name>Easy Auth</Project.Name>
		<Project.Image src="easy-auth.png" />
		<Project.Content>
			<Project.Description>
				The Easy Auth project is an AWS Cognito authentication library that utilizes the AWS SDK with SRP-based login, aiming to simplify and secure user authentication processes.
			</Project.Description>
			<Project.Metadata>
				<Project.Techstack list={["TypeScript", "Vite", "Vitest"]} />
			</Project.Metadata>
		</Project.Content>
	</Project.Root>

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
</div>
