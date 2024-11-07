<script lang="ts">
  import { cn } from "$lib/utils/class-utils";

  let {
    label,
    variant,
  } = $props();
</script>

<div class={cn(
  "flex items-center gap-x-2 w-fit px-3 py-2 rounded-full",
  variant === "outline" ? "border border-dark-border" : "bg-blue"
)}>
  {#if variant === "filled"}
    <div class="w-2 h-2 shrink-0 rounded-full bg-grayish" />
  {/if}
  <p class="text-grayish text-sm">{label}</p>
</div>
