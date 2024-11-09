<script lang="ts">
  import Cursor from "$lib/components/cursor.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import HeroSection from "$lib/components/sections/hero-section.svelte";
  import TimelineSection from "$lib/components/sections/timeline-section.svelte";
  import ProjectsSection from "$lib/components/sections/projects-section.svelte";
  import BackgroundSection from "$lib/components/sections/background-section.svelte";
  import CtaSection from "$lib/components/sections/cta-section.svelte";
</script>

<Cursor />

<div class="max-w-6xl ml-auto mr-auto relative">
  <Navbar />
  <HeroSection />

  <div class="flex flex-col gap-y-[304px]">
    <TimelineSection />
    <ProjectsSection />
    <BackgroundSection />
  </div>
</div>
<CtaSection />
