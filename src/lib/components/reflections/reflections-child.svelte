<script lang="ts">
	interface Props {
		title: string;
		description: string;
	}

	let {
		title,
		description,
	}: Props = $props();
</script>

<div class="flex flex-col gap-y-2">
	<li class="font-semibold text-grayish">{title}</li>
	<p class="text-subtext">{description}</p>
</div>
