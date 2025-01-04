<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet,
  }

  let {
    children,
  }: Props = $props();
</script>

<div class="flex gap-x-16 items-center">
  {@render children()}
</div>
