<script lang="ts">
	import { Reflections } from "$lib/components/reflections";
	import { Project } from "$lib/components/project";
	import { Metadata } from "$lib/components/metadata";
</script>

<div class="flex flex-col gap-y-32 mt-24 p-4 sm:p-8">
	<Project.Root>
		<Project.Name>Robbery (Story)</Project.Name>
		<Project.Image src="robbery-story.png" />
		<Project.Content>
			<Project.Description>
				Robbery (Story) is a Roblox game that became a major success, with over 12 million plays and thousands of concurrent players at its peak. Combining story-driven gameplay with microtransactions, it delivered a compelling experience. As my first major project, it taught me valuable lessons about building, scaling, and maintaining a game for a large player base.
			</Project.Description>
			<Project.Metadata>
				<Project.Role>Game Developer</Project.Role>
				<Project.Techstack list={["Lua", "Roblox Studio"]} />
			</Project.Metadata>
		</Project.Content>
	</Project.Root>

	<Reflections.Root>
		<Reflections.Title background="Features" foreground="Game Highlights" />
		<Reflections.Children>
			<Reflections.Child
				title="Story-Driven Gameplay"
				description="Players follow an immersive story of high-stakes heists, featuring a dynamic world and engaging characters."
			/>
			<Reflections.Child
				title="Massive Player Base"
				description="At its peak, the game handled thousands of concurrent players, demonstrating its widespread appeal."
			/>
			<Reflections.Child
				title="Microtransactions"
				description="Implemented monetization features that provided players with optional upgrades and cosmetic items while generating significant revenue."
			/>
			<Reflections.Child
				title="Scalable Backend"
				description="Utilized Roblox DataStores for player progression and inventory systems, ensuring stability even with large player volumes."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Setbacks" foreground="Obstacles Faced" />
		<Reflections.Children>
			<Reflections.Child
				title="Managing Frequent Updates"
				description="Balancing the need for regular updates to keep the player base engaged while avoiding prolonged development cycles was a constant challenge."
			/>
			<Reflections.Child
				title="Buggy Releases"
				description="Occasionally, updates were pushed with unexpected bugs, leading to downtime or player frustration, requiring immediate patches."
			/>
			<Reflections.Child
				title="Scalability Issues"
				description="As the game grew, ensuring that the backend could handle increasing player data and server loads became critical."
			/>
			<Reflections.Child
				title="Balancing Monetization"
				description="Designing microtransactions that enhanced gameplay without making the game pay-to-win required thoughtful balancing and player feedback."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Reflections.Root>
		<Reflections.Title background="Reflections" foreground="Insights Gained" />
		<Reflections.Children>
			<Reflections.Child
				title="Engaging a Large Player Base"
				description="The importance of maintaining a steady stream of updates to keep a large player base engaged became clear, emphasizing planning and efficient workflows."
			/>
			<Reflections.Child
				title="Iterative Development"
				description="Testing updates in smaller environments before releasing them taught me the value of iterative development and avoiding rushed releases."
			/>
			<Reflections.Child
				title="Revenue-Driven Game Design"
				description="Understanding how to design monetization features that provide value without alienating players was a critical lesson in balancing business goals with player satisfaction."
			/>
			<Reflections.Child
				title="First Big Success"
				description="This project was my first major success, solidifying my understanding of game development, project management, and player engagement at scale."
			/>
		</Reflections.Children>
	</Reflections.Root>

	<Metadata.Root>
		<Metadata.SourceCode />
		<Metadata.ProjectLink link="https://www.roblox.com/games/5548533908/Robbery-Story" label="Roblox Page" />
	</Metadata.Root>
</div>
