<script lang="ts">
  import { cn } from "$lib/utils/class-utils";

  interface Props {
    src: string;
    isLeft?: boolean;
  }

  let {
    src,
    isLeft = false,
  }: Props = $props();
</script>

<div class="flex justify-center relative w-[800px] h-[517px]">
  <div class={cn("absolute w-[800px] h-full", isLeft ? "right-0" : "left-0")}>
    <img {src} class="rounded-card object-fill shadow-card" alt="Feature" />
  </div>
</div>
