<script lang="ts">
  import HeroSection from "$lib/components/hero-section.svelte";
  import Navbar from "$lib/components/navbar.svelte";
</script>

<Navbar />
<HeroSection />

<div class="flex justify-center h-screen">
  <div class="relative h-fit">
    <p class="font-playfair italic font-bold text-[150px] opacity-10 text-gradient leading-none">
      Experience
    </p>
    <div class="text-2xl text-grayish absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Previously worked at
    </div>
  </div>
</div>
