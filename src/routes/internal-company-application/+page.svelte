<script lang="ts">
  import { ProjectFeature } from "$lib/components/project-feature";
</script>

<div class="flex flex-col gap-y-32 mt-24 p-8">
  <div class="flex flex-col gap-y-8">
    <p class="text-grayish text-3xl font-semibold">Internal Company Application</p>
    <div class="flex items-center justify-center">
			<img
				src="internal-application.png"
				class="rounded-card w-[900px] h-[600px] object-cover"
				alt="Project Cover"
			/>
    </div>

    <div class="flex justify-between gap-x-16">
      <div class="flex flex-col gap-y-4 max-w-xl">
        <p class="text-grayish text-lg font-semibold">Description</p>
        <p class="text-subtext">
          This internal application I developed for the company serves multiple essential functions. It primarily manages customer systems and supports developers in their daily workflows, including code deployment. Over the course of six months, I worked on creating and refining this tool, which is packed with various features designed to streamline operations and boost efficiency.
        </p>
      </div>
      <div class="flex gap-x-16">
        <div class="flex flex-col gap-y-4">
          <p class="text-grayish text-lg font-semibold">Role</p>
          <p class="text-subtext">
            Front-end developer, and UX designer
          </p>
        </div>
        <div class="flex flex-col gap-y-4">
          <p class="text-grayish text-lg font-semibold">Techstack</p>
          <p class="text-subtext">
            Svelte, Tauri, AWS, JavaScript, Tailwind
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-y-16">
    <div class="flex justify-center relative">
      <p class="font-playfair italic font-bold text-[70px] md:text-[150px] opacity-10 text-gradient leading-none">
        Features
      </p>
      <p class="text-lg md:text-2xl text-nowrap text-subtext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Most Frequently Used
      </p>
    </div>

    <div class="flex flex-col gap-y-4">
      <div class="flex flex-col gap-y-32 items-center">
        <ProjectFeature.Root>
          <ProjectFeature.Text>
            <ProjectFeature.Title>CI/CD Workflow Tools</ProjectFeature.Title>
            <ProjectFeature.Description>
              Automate code deployment, testing, and blue-green deployments. The “Deploy” button triggers these processes, ensuring efficient, reliable, and smooth transitions to production.
            </ProjectFeature.Description>
          </ProjectFeature.Text>
          <ProjectFeature.Image src="/deploy-page.png" />
        </ProjectFeature.Root>

        <ProjectFeature.Root>
          <ProjectFeature.Image src="/bastion-page.png" isLeft />
          <ProjectFeature.Text>
            <ProjectFeature.Title>Interact with AWS RDS</ProjectFeature.Title>
            <ProjectFeature.Description>
              Enables authorized DevOps team members to connect to and manage AWS RDS instances. It supports tasks like monitoring and maintenance, with restricted access to ensure secure, role-based usage.
            </ProjectFeature.Description>
          </ProjectFeature.Text>
        </ProjectFeature.Root>

        <ProjectFeature.Root>
          <ProjectFeature.Text>
            <ProjectFeature.Title>List All Customers</ProjectFeature.Title>
            <ProjectFeature.Description>
              Dialog for managing customer systems, including enabling features, activating or deactivating modules, modifying licenses, and viewing customer data.
            </ProjectFeature.Description>
          </ProjectFeature.Text>
          <ProjectFeature.Image src="/systems-page.png" />
        </ProjectFeature.Root>

        <ProjectFeature.Root>
          <ProjectFeature.Image src="/system-dialog.png" isLeft />
          <ProjectFeature.Text>
            <ProjectFeature.Title>Manage Customer Systems</ProjectFeature.Title>
            <ProjectFeature.Description>
              Dialog for managing customer systems, including enabling features, activating or deactivating modules, modifying licenses, and viewing customer data.
            </ProjectFeature.Description>
          </ProjectFeature.Text>
        </ProjectFeature.Root>
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-y-16">
    <div class="flex justify-center relative">
      <p class="font-playfair italic font-bold text-[70px] md:text-[150px] opacity-10 text-gradient leading-none">
        Setbacks
      </p>
      <p class="text-lg md:text-2xl text-nowrap text-subtext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Obstacles Faced
      </p>
    </div>
		<ol class="grid grid-cols-2 gap-8 list-decimal list-inside">
			<div class="flex flex-col gap-y-2">
				<li class="font-semibold text-grayish">Balancing Feature Requests and Deadlines</li>
				<p class="text-subtext">
					The biggest challenge was managing the balance between adding critical features requested by stakeholders and adhering to strict deadlines. This required careful prioritization and clear communication with the team to ensure that the most impactful features were delivered on time.
				</p>
			</div>
			<div class="flex flex-col gap-y-2">
				<li class="font-semibold text-grayish">Integrating CI/CD Workflows</li>
				<p class="text-subtext">
					Setting up the CI/CD workflow tools was particularly challenging due to the need to ensure compatibility with the company’s existing infrastructure. There were initial setbacks in automating deployment processes, but these were resolved by closely collaborating with DevOps teams to refine the pipeline.
				</p>
			</div>
			<div class="flex flex-col gap-y-2">
				<li class="font-semibold text-grayish">User Access and Role Management</li>
				<p class="text-subtext">
					Ensuring secure and role-based access for interacting with AWS RDS was complex. Implementing granular permissions required significant testing to avoid accidental privilege escalation while keeping the interface user-friendly.
				</p>
			</div>
		</ol>
  </div>

  <div class="flex flex-col gap-y-16">
    <div class="flex justify-center relative">
      <p class="font-playfair italic font-bold text-[70px] md:text-[150px] opacity-10 text-gradient leading-none">
				Reflections
      </p>
      <p class="text-lg md:text-2xl text-nowrap text-subtext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Insights Gained
      </p>
    </div>
		<ol class="grid grid-cols-2 gap-8 list-decimal list-inside">
			<div class="flex flex-col gap-y-2">
				<li class="font-semibold text-grayish">Importance of User Feedback</li>
				<p class="text-subtext">
					Regular feedback from internal users proved invaluable. Iterating based on their input significantly improved the tool’s usability, leading to higher adoption rates among the staff.
				</p>
			</div>
			<div class="flex flex-col gap-y-2">
				<li class="font-semibold text-grayish">Designing for Scalability</li>
				<p class="text-subtext">
					Planning for potential future features during the initial design phase saved significant time. For example, building modular components allowed new features to be added with minimal disruption to the existing codebase.
				</p>
			</div>
			<div class="flex flex-col gap-y-2">
				<li class="font-semibold text-grayish">Cross-Department Collaboration is Key</li>
				<p class="text-subtext">
					Collaborating with different teams, such as DevOps and IT, emphasized the importance of cross-functional communication. This collaboration not only sped up development but also ensured that the tool met the diverse needs of its users.
				</p>
			</div>
		</ol>
  </div>
</div>
