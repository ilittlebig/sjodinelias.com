<script lang="ts">
  import { onMount } from "svelte";
  let cursor;

  onMount(() => {
    if (!cursor) return;

    window.addEventListener("mousemove", (e: Event) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    const hoverElements = document.querySelectorAll(".expand-on-hover");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.style.width = "70px";
        cursor.style.height = "70px";
        cursor.classList.add("mix-blend-difference");
      });

      element.addEventListener("mouseleave", () => {
        cursor.style.width = "15px";
        cursor.style.height = "15px";
        cursor.classList.remove("mix-blend-difference");
      });
    });
  });
</script>

<div bind:this={cursor} class="custom-cursor hidden md:block" />

<style lang="postcss">
  .custom-cursor {
    @apply fixed w-[15px] h-[15px] rounded-full bg-white pointer-events-none z-[9999];
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease-out, width 0.2s, height 0.2s, background-color 0.2s, mix-blend-mode 0.2s;
  }
</style>
