<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<p class="text-grayish text-lg font-semibold">
  {@render children()}
</p>
