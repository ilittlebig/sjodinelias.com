<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils/class-utils";

	interface Props {
		children: Snippet;
		variant: "success" | "warning" | "error" | "note";
	}

	let {
		variant,
		children
	}: Props = $props();

	const styles = {
		success: {
			background: "border-green-300",
			textColor: "text-green-300",
			header: "text-green-300"
		},
		warning: {
			background: "border-yellow-300",
			textColor: "text-yellow-300",
			header: "text-yellow-300"
		},
		error: {
			background: "border-red-300",
			textColor: "text-red-300",
			header: "text-red-300"
		},
		note: {
			background: "border-subtext",
			textColor: "text-subtext",
			header: "text-grayish"
		}
	};
</script>

<div
	class={cn(
		"flex flex-col gap-y-1 p-4 rounded-md border border-opacity-50",
		styles[variant].background
	)}
>
	<h3 class={cn("font-semibold", styles[variant].header)}>
		{#if variant === "success"}
			Success
		{:else if variant === "error"}
			Error
		{:else if variant === "warning"}
			Warning
		{:else if variant === "note"}
			Note
		{/if}
	</h3>
	<p class={cn("text-opacity-50", styles[variant].textColor)}>
		{@render children()}
	</p>
</div>
