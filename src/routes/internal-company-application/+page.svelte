<script lang="ts">
  import HeroSection from "$lib/components/sections/hero-section.svelte";
</script>

<div class="flex flex-col gap-y-32 mt-24 p-8">
  <div class="flex flex-col gap-y-8">
    <p class="text-grayish text-3xl font-semibold">Internal Company Application</p>
    <div class="flex items-center justify-center">
      <img src="internal-application.png" class="rounded-card w-[900px] h-[600px] object-cover" />
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
        <div class="flex gap-x-16 items-center">
          <div class="flex flex-col gap-y-4 max-w-md">
            <p class="text-grayish text-lg font-semibold">CI/CD Workflow Tools</p>
            <p class="text-subtext">
              Automate code deployment, testing, and blue-green deployments. The “Deploy” button triggers these processes, ensuring efficient, reliable, and smooth transitions to production.
            </p>
          </div>

          <div class="flex items-center justify-center">
            <img src="deploy-page.png" class="rounded-card w-[580px] h-[375px] object-contain shadow-card" />
          </div>
        </div>

        <div class="flex gap-x-16 items-center">
          <div class="flex items-center justify-center">
            <img src="bastion-page.png" class="rounded-card w-[580px] h-[375px] object-contain shadow-card" />
          </div>

          <div class="flex flex-col gap-y-4 max-w-md">
            <p class="text-grayish text-lg font-semibold">Interact with AWS RDS</p>
            <p class="text-subtext">
              Enables authorized DevOps team members to connect to and manage AWS RDS instances. It supports tasks like monitoring and maintenance, with restricted access to ensure secure, role-based usage.
            </p>
          </div>
        </div>

        <div class="flex gap-x-16 items-center">
          <div class="flex flex-col gap-y-4 max-w-md">
            <p class="text-grayish text-lg font-semibold">List All Customers</p>
            <p class="text-subtext max-w-md">
              Dialog for managing customer systems, including enabling features, activating or deactivating modules, modifying licenses, and viewing customer data.
            </p>
          </div>

          <div class="flex items-center justify-center">
            <img src="systems-page.png" class="rounded-card w-[580px] h-[375px] object-contain shadow-card" />
          </div>
        </div>

        <div class="flex gap-x-16 items-center">
          <div class="flex items-center justify-center">
            <img src="system-dialog.png" class="rounded-card w-[580px] h-[375px] object-contain shadow-card" />
          </div>

          <div class="flex flex-col gap-y-4 max-w-md">
            <p class="text-grayish text-lg font-semibold">Manage Customer Systems</p>
            <p class="text-subtext max-w-md">
              Dialog for managing customer systems, including enabling features, activating or deactivating modules, modifying licenses, and viewing customer data.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-y-16">
    <div class="flex justify-center relative">
      <p class="font-playfair italic font-bold text-[70px] md:text-[150px] opacity-10 text-gradient leading-none">
        Difficulties
      </p>
      <p class="text-lg md:text-2xl text-nowrap text-subtext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Obstacles and Insights
      </p>
    </div>
  </div>
</div>
