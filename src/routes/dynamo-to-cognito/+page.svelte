<script lang="ts">
	import { Reflections } from "$lib/components/reflections";
	import { Project } from "$lib/components/project";
	import { Metadata } from "$lib/components/metadata";
</script>

<svelte:head>
	<title>Dynamo To Cognito - User Migration Simplified</title>
	<meta name="description" content="Dynamo To Cognito is a project for seamless migration of user accounts from AWS DynamoDB to AWS Cognito. It ensures secure password handling, AWS service integration, and user-friendly authentication." />

	<meta property="og:title" content="Dynamo To Cognito - User Migration Simplified" />
	<meta property="og:description" content="Explore Dynamo To Cognito, a project designed to migrate user accounts from AWS DynamoDB to AWS Cognito, leveraging secure password handling and AWS Lambda integration." />
	<meta property="og:image" content="/dynamo-to-cognito.png" />
	<meta property="og:image:alt" content="Dynamo To Cognito Project Overview" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Dynamo To Cognito - User Migration Simplified" />
	<meta name="twitter:description" content="Seamlessly migrate user accounts from DynamoDB to Cognito with Dynamo To Cognito. Leverages bcrypt, AWS Lambda, and AWS Cognito for a secure, scalable solution." />
	<meta name="twitter:image" content="/dynamo-to-cognito.png" />
	<meta name="twitter:image:alt" content="Dynamo To Cognito Project Overview" />

	<meta name="author" content="Elias Sjödin" />
	<link rel="canonical" href="https://github.com/ilittlebig/dynamo-to-cognito/" />
</svelte:head>

<div class="flex flex-col gap-y-32 mt-24 p-4 sm:p-8">
	<Project.Root>
		<Project.Name>Dynamo To Cognito</Project.Name>
		<Project.Image src="dynamo-to-cognito.png" />
		<Project.Content>
			<Project.Description>
				Dynamo To Cognito is a project designed to provide seamless migration of user accounts from AWS DynamoDB to AWS Cognito. It showcases the integration of AWS services while ensuring a secure and user-friendly authentication process. The project emphasizes clean coding practices and professional-grade implementation.
			</Project.Description>
			<Project.Metadata>
				<Project.Role>Maintainer</Project.Role>
				<Project.Techstack list={["TypeScript", "React", "AWS Lambda", "AWS Cognito", "AWS DynamoDB", "bcrypt"]} />
			</Project.Metadata>
		</Project.Content>
	</Project.Root>

	<Reflections.Root>
		<Reflections.Title background="Features" foreground="Project Capabilities" />
		<Reflections.Children>
			<Reflections.Child
				title="User Migration"
				description="Migrates user accounts securely from AWS DynamoDB to AWS Cognito using the UserMigration_Authentication Lambda trigger."
			/>
			<Reflections.Child
				title="Password Hash Comparison"
				description="Uses bcrypt to verify user passwords during migration, ensuring a secure authentication process."
			/>
			<Reflections.Child
				title="User Authentication"
				description="Provides features like sign-up, sign-in, account verification, and a responsive user dashboard."
			/>
			<Reflections.Child
				title="AWS Service Integration"
				description="Demonstrates seamless integration of AWS DynamoDB, AWS Cognito, and AWS Lambda for a full-stack cloud-based solution."
			/>
			<Reflections.Child
				title="Responsive Design"
				description="Ensures pages are fully responsive, providing a seamless experience across devices."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Setbacks" foreground="Obstacles Faced" />
		<Reflections.Children>
			<Reflections.Child
				title="Password Migration Challenges"
				description="Ensuring bcrypt compatibility between the old and new systems required careful debugging and validation to guarantee accuracy."
			/>
			<Reflections.Child
				title="Lambda Trigger Configuration"
				description="Configuring the UserMigration_Authentication Lambda trigger to work seamlessly with Cognito and DynamoDB required extensive testing and refinement."
			/>
			<Reflections.Child
				title="Lack of Unit Tests"
				description="The absence of unit tests posed challenges in validating edge cases, highlighting the need for future improvements in testing coverage."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Reflections" foreground="Insights Gained" />
		<Reflections.Children>
			<Reflections.Child
				title="Importance of Secure Password Handling"
				description="Learning how to securely hash and verify passwords using bcrypt emphasized the significance of strong authentication practices."
			/>
			<Reflections.Child
				title="Leveraging AWS Services"
				description="This project deepened my understanding of AWS services like Cognito, DynamoDB, and Lambda, and how to integrate them for cloud-based solutions."
			/>
			<Reflections.Child
				title="Scalable System Design"
				description="Designing a migration system that scales with growing user bases taught me the importance of clean and efficient code architecture."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Metadata.Root>
		<Metadata.SourceCode link="https://github.com/ilittlebig/dynamo-to-cognito/" label="Github Page" />
		<Metadata.ProjectLink />
	</Metadata.Root>
</div>
