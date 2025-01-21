<script lang="ts">
	import { FeatureSection } from "$lib/components/feature-section";
	import { Reflections } from "$lib/components/reflections";
	import { Project } from "$lib/components/project";
	import { Metadata } from "$lib/components/metadata";
	import Alert from "$lib/components/alert.svelte";
</script>

<div class="flex flex-col gap-y-32 mt-24 p-8">
	<Project.Root>
		<Project.Name>Jaafar</Project.Name>
		<Project.Image src="jaafar.png" />
		<Project.Content>
			<Project.Description>
				Jaafar is a Tauri-based desktop app for automating account creation, proxy management, and stealth operations. It features bulk account handling, captcha solving, and proxy rotation, with upcoming tools for product monitoring and real-time dashboards.
			</Project.Description>
			<Project.Metadata>
				<Project.Techstack list={["Svelte", "TypeScript", "Vitest", "AWS", "Tailwind", "Vite", "Shadcn", "Vercel"]} />
			</Project.Metadata>
		</Project.Content>
	</Project.Root>

	<Alert variant="note">
		This project is currently a work in progress and remains unfinished at the time of writing.
	</Alert>

	<FeatureSection.Root background="Features" foreground="Most Notable">
		<FeatureSection.Image
			title="Login and Authentication Interface"
			description="Offers a clean and user-friendly login interface, allowing users to securely access their accounts. Includes features like password recovery and account registration to ensure a seamless authentication experience."
			image="/jaafar-login.png"
		/>

		<FeatureSection.Image
			title="Dashboard Overview"
			description="Provides a comprehensive overview of key metrics, including product carting success, missed opportunities, total estimated cart value, and cost per successful task. This dashboard enables users to track performance and make informed decisions at a glance."
			image="/jaafar-dashboard-1.png"
			isLeft
		/>

		<FeatureSection.Image
			title="User Settings and Preferences"
			description="A comprehensive settings interface that allows users to customize their bot configurations. Includes options for entering API keys, adjusting delay durations, setting preferences, managing billing details, and configuring integrations like captcha solvers or SMS verifiers. Designed to provide flexibility and control over every aspect of the bot’s behavior."
			image="/jaafar-settings.png"
		/>

		<FeatureSection.Image
			title="Signup Automation"
			description="A streamlined interface for managing bot-driven signups, designed to efficiently handle multiple accounts. Ideal for automating tasks like entering raffle ticket pages or similar events, allowing bots to quickly and accurately submit all your accounts in a fraction of the time."
			image="/jaafar-signups.png"
			isLeft
		/>

		<FeatureSection.Image
			title="Accounts Overview"
			description="A centralized interface for listing all accounts, showing essential details such as email, name, address, and location. Includes import functionality to easily manage and expand account databases."
			image="/jaafar-accounts.png"
		/>
	</FeatureSection.Root>

	<Alert variant="note">
		These are just a few of the features available, not an exhaustive list.
	</Alert>

	<Reflections.Root>
		<Reflections.Title background="Setbacks" foreground="Obstacles Faced" />
		<Reflections.Children>
			<Reflections.Child
				title="Managing Proxy Rotation Effectively"
				description="One of the challenges was implementing dynamic proxy rotation to ensure undetectable automation. Balancing speed and stealth required extensive testing and fine-tuning of the proxy management system."
			/>
			<Reflections.Child
				title="Handling Captcha Solver Integration"
				description="Integrating a reliable captcha solver proved difficult due to varying site challenges and compatibility issues. It required identifying the most efficient solver API and optimizing its performance for seamless automation."
			/>
			<Reflections.Child
				title="Optimizing Performance with Tauri"
				description="While Tauri provided a lightweight framework, optimizing performance for handling large datasets and multiple simultaneous tasks was challenging. Ensuring smooth operation without compromising system resources took significant effort."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Reflections" foreground="Insights Gained" />
		<Reflections.Children>
			<Reflections.Child
				title="Iterative Development is Essential"
				description="Frequent testing and iteration based on early feedback significantly improved the application’s reliability and usability. This process ensured a smoother development cycle and fewer bugs in the final product."
			/>
			<Reflections.Child
				title="User-Focused Design Matters"
				description="Incorporating user preferences, such as customizable settings and detailed dashboards, highlighted the importance of building with the end-user in mind. This approach greatly enhanced user satisfaction and adoption rates."
			/>
			<Reflections.Child
				title="Independent Problem-Solving Builds Resilience"
				description="Working on this project independently allowed me to strengthen my problem-solving skills. Addressing complex issues, from debugging to feature implementation, required creative thinking and self-reliance."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Metadata.Root>
		<Metadata.SourceCode link="https://github.com/ilittlebig/jaafar/" />
		<Metadata.ProjectLink link="https://jaafar.app/" />
	</Metadata.Root>
</div>
