<script lang="ts">
  import HeroSection from "$lib/components/sections/hero-section.svelte";
  import ProjectsSection from "$lib/components/sections/projects-section.svelte";
  import BackgroundSection from "$lib/components/sections/background-section.svelte";
</script>

<div class="overflow-x-hidden relative">
  <HeroSection />

  <div class="flex flex-col gap-y-[304px]">
    <ProjectsSection />
    <BackgroundSection />
  </div>
</div>
