<script lang="ts">
	import { cn } from "$lib/utils/class-utils";

	interface Props {
		title: string;
		description: string;
		image: string;
		isLeft?: boolean;
	}

	let {
		title,
		description,
		image,
		isLeft = false
	}: Props = $props();
</script>

<div class={cn("flex gap-x-16 items-center", isLeft && "flex-row-reverse" )}>
	<div class="flex flex-col gap-y-4 max-w-md w-full">
		<h3 class="text-grayish text-lg font-semibold">{title}</h3>
		<p class="text-subtext">{description}</p>
	</div>
	<div class="flex justify-center relative w-[800px] h-[517px]">
		<div class={cn("flex items-center absolute w-[800px] h-full", isLeft ? "right-0" : "left-0")}>
			<img src={image} class="rounded-card object-fill shadow-card" alt="Feature" />
		</div>
	</div>
</div>
