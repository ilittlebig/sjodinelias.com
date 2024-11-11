<script lang="ts">
  import HeroSection from "$lib/components/sections/hero-section.svelte";
</script>

<div class="flex flex-col gap-y-16 mt-24 p-8">
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

  <div class="flex flex-col gap-y-4">
    <p class="text-grayish text-lg font-semibold">Features</p>

    <div class="flex flex-col gap-y-2 pl-4">
      <p class="text-subtext">Manage Users</p>
      <p class="text-subtext">Access AWS RDS</p>
      <p class="text-subtext">Manage Customers</p>
      <p class="text-subtext">Generate Wifi Codes</p>
      <p class="text-subtext">Deploy Code</p>
      <p class="text-subtext">Ask AI</p>
      <p class="text-subtext">Manage Release Notes</p>
      <p class="text-subtext">Deployment Rate Dashboard</p>
      <p class="text-subtext">DevSecOps Mature Model</p>
    </div>
  </div>

  <div class="flex flex-col gap-y-4">
    <p class="text-grayish text-lg font-semibold">Feature Overview</p>

    <div class="flex flex-col items-center">
      <div class="flex gap-x-16 items-center">
        <div class="flex items-center justify-center">
          <img src="bastion.png" class="rounded-card w-[580px] h-[500px] object-contain" />
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
          <p class="text-grayish text-lg font-semibold">Manage Customer Systems</p>
          <p class="text-subtext max-w-md">
            Dialog for managing customer systems, including enabling features, activating or deactivating modules, modifying licenses, and viewing customer data.
          </p>
        </div>

        <div class="flex items-center justify-center">
          <img src="system-dialog.png" class="rounded-card w-[550px] h-[500px] object-contain" />
        </div>
      </div>
    </div>
  </div>
</div>
