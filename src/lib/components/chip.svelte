<script lang="ts">
	import { cn } from "$lib/utils/class-utils";

	interface Props {
		label: string;
		variant: "filled" | "outline";
		color?: string;
	}

	let {
		label,
		variant = "filled",
		color,
	}: Props = $props();
</script>

<div class={cn(
	"flex items-center gap-x-2 w-fit h-fit px-3 py-2 rounded-full",
	 variant === "outline" ? "border border-dark-border" : (color || "bg-blue")
)}>
	{#if variant === "filled"}
		<div class="w-2 h-2 shrink-0 rounded-full bg-grayish"></div>
	{/if}
	<p class="text-nowrap text-grayish text-xs md:text-sm">{label}</p>
</div>
