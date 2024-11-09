<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  let {
    label,
  } = $props();

  let container;

  onMount(() => {
    if (!container) return;
    const [originalText, newText] = container.querySelectorAll('.text');

    container.addEventListener("mouseenter", () => {
      gsap.to(originalText, {
        y: -20,
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.fromTo(newText, {
        y: 20,
      }, {
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    });

    container.addEventListener("mouseleave", () => {
      gsap.to(originalText, {
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.to(newText, {
        y: 20,
        duration: 0.5,
        ease: "power2.out"
      });
    });
  });
</script>

<div bind:this={container} class="relative overflow-hidden h-6 inline-block">
  <p class="text-grayish text relative">
    {label}
  </p>
  <p class="text-grayish text absolute left-0 right-0 top-0">
    {label}
  </p>
</div>
