<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="flex flex-col gap-y-4 max-w-md w-full">
  {@render children()}
</div>
