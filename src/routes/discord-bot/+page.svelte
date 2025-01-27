<script lang="ts">
	import { Reflections } from "$lib/components/reflections";
	import { Project } from "$lib/components/project";
	import { Metadata } from "$lib/components/metadata";
</script>

<svelte:head>
	<title>Discord AI Bot - Dynamic AI-Powered Conversations</title>
	<meta name="description" content="The Discord AI Bot is a self-bot powered by OpenAI's GPT models, offering customizable personalities, context-aware interactions, and dynamic, human-like responses tailored for Discord servers." />

	<meta property="og:title" content="Discord AI Bot - Dynamic AI-Powered Conversations" />
	<meta property="og:description" content="Explore the Discord AI Bot, a self-bot powered by OpenAI's GPT models. It enables context-aware, customizable, and engaging interactions for Discord communities." />
	<meta property="og:image" content="/discord-bot.png" />
	<meta property="og:image:alt" content="Discord AI Bot Overview" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Discord AI Bot - Dynamic AI-Powered Conversations" />
	<meta name="twitter:description" content="Discover the Discord AI Bot, featuring OpenAI-powered responses, server-specific prompts, and modular configurations for engaging Discord interactions." />
	<meta name="twitter:image" content="/discord-bot.png" />
	<meta name="twitter:image:alt" content="Discord AI Bot Overview" />

	<meta name="author" content="Elias Sjödin" />
	<link rel="canonical" href="https://github.com/ilittlebig/discord-self-bot/" />
</svelte:head>

<div class="flex flex-col gap-y-32 mt-24 p-4 sm:p-8">
	<Project.Root>
		<Project.Name>Discord AI Bot</Project.Name>
		<Project.Image src="discord-bot.png" />
		<Project.Content>
			<Project.Description>
				The Discord AI Bot is a self-bot powered by OpenAI's GPT models, designed to automate user interactions with natural, human-like responses. It allows customizable prompts to tailor the bot's personality and behavior for different servers.
			</Project.Description>
			<Project.Metadata>
				<Project.Role>Maintainer</Project.Role>
				<Project.Techstack list={["Python", "OpenAI API"]} />
			</Project.Metadata>
		</Project.Content>
	</Project.Root>

	<Reflections.Root>
		<Reflections.Title background="Features" foreground="Bot Capabilities" />
		<Reflections.Children>
			<Reflections.Child
				title="AI-Powered Responses"
				description="Generates human-like responses using OpenAI's GPT models, creating dynamic and engaging conversations."
			/>
			<Reflections.Child
				title="Customizable Personalities"
				description="Enables personality-driven prompts to tailor the bot’s behavior and tone for specific servers."
			/>
			<Reflections.Child
				title="Context-Aware Interactions"
				description="Uses recent conversation history to provide contextually relevant replies, ensuring natural flow."
			/>
			<Reflections.Child
				title="Flexible Configuration"
				description="Offers extensive configuration options, including cooldown timers, history limits, and testing modes."
			/>
			<Reflections.Child
				title="Modular and Scalable"
				description="Designed to be easily extendable for additional features and adaptable to specific use cases."
			/>
			<Reflections.Child
				title="Server-Specific Prompts"
				description="Supports custom prompts for each server, enabling tailored interaction styles per community."
			/>
			<Reflections.Child
				title="Relevance Filtering"
				description="Decides whether to reply to messages based on their relevance and engagement potential."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Setbacks" foreground="Obstacles Faced" />
		<Reflections.Children>
			<Reflections.Child
				title="Managing Context Size"
				description="Keeping conversation history within token limits while maintaining meaningful context was a recurring challenge."
			/>
			<Reflections.Child
				title="Prompt Optimization"
				description="Crafting prompts that balanced humor, intelligence, and relevance required constant refinement and testing."
			/>
			<Reflections.Child
				title="Discord TOS Risks"
				description="Developing a self-bot came with the inherent challenge of navigating Discord’s strict Terms of Service."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Reflections" foreground="Insights Gained" />
		<Reflections.Children>
			<Reflections.Child
				title="Importance of Personalization"
				description="Allowing personality-driven customization significantly enhanced the bot’s appeal and usability across diverse communities."
			/>
			<Reflections.Child
				title="Effective Prompt Engineering"
				description="Crafting well-optimized prompts proved critical in shaping the bot's responses and maintaining conversational quality. Understanding how to phrase instructions for OpenAI's models highlighted the importance of prompt engineering in delivering accurate and engaging interactions."
			/>
			<Reflections.Child
				title="Token Management and Cost Efficiency"
				description="Managing token size was essential not only for preserving conversation context but also for reducing API costs. Learning how to balance meaningful context with efficient token usage taught valuable lessons in designing cost-effective AI solutions."
			/>
			<Reflections.Child
				title="Flexibility in Configuration"
				description="Providing extensive configuration options, such as cooldowns and context limits, highlighted the value of adaptability in software design."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Metadata.Root>
		<Metadata.SourceCode link="https://github.com/ilittlebig/discord-self-bot/" label="Github Page" />
		<Metadata.ProjectLink />
	</Metadata.Root>
</div>
