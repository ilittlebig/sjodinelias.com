<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { cn } from "$lib/utils/class-utils";

  interface Props {
    label: string;
    size: "sm" | "md" | "lg";
  }

  let {
    label,
    size = "md",
  }: Props = $props();

  let container;

  const sizeClasses: Record<string, string> = {
    "sm": "text-sm",
    "md": "text-base",
    "lg": "text-lg",
    "xl": "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  };

  onMount(() => {
    if (!container) return;
    const [originalText, newText] = container.querySelectorAll(".text");

    container.addEventListener("mouseenter", () => {
      gsap.to(originalText, {
        y: "-1.25em",
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.fromTo(newText, {
        y: "1.25em",
      }, {
        y: "0em",
        duration: 0.5,
        ease: "power2.out"
      });
    });

    container.addEventListener("mouseleave", () => {
      gsap.to(originalText, {
        y: "0em",
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.to(newText, {
        y: "1.25em",
        duration: 0.5,
        ease: "power2.out"
      });
    });
  });
</script>

<div bind:this={container} class="relative overflow-hidden inline-block">
  <p class={cn("text-grayish text relative", sizeClasses[size])}>
    {label}
  </p>
  <p class={cn("text-grayish text absolute left-0 right-0 top-0", sizeClasses[size])}>
    {label}
  </p>
</div>
