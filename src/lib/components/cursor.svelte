<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { beforeNavigate } from "$app/navigation";

	let cursor: HTMLDivElement;

	const setCursorSize = (size: string) => {
		cursor.style.width = size;
		cursor.style.height = size;
	}

	const handleMouseMove = (e: MouseEvent) => {
		cursor.style.left = `${e.clientX}px`;
		cursor.style.top = `${e.clientY}px`;
	};

	const handleMouseEnter = () => {
		setCursorSize("70px");
		cursor.classList.add("mix-blend-difference");
	};

	const handleMouseLeave = () => {
		setCursorSize("15px");
		cursor.classList.remove("mix-blend-difference");
	};

	onMount(() => {
		if (!cursor) return;
		window.addEventListener("mousemove", handleMouseMove);

		const attachHoverListeners = () => {
			const hoverElements = document.querySelectorAll(".expand-on-hover");
			hoverElements.forEach(element => {
				element.addEventListener("mouseenter", handleMouseEnter);
				element.addEventListener("mouseleave", handleMouseLeave);
			});
		};

		attachHoverListeners();
		const observer = new MutationObserver(() => {
			attachHoverListeners();
		});

		observer.observe(document.body, { childList: true, subtree: true });

		onDestroy(() => {
			window.removeEventListener("mousemove", handleMouseMove);

			const hoverElements = document.querySelectorAll(".expand-on-hover");
			hoverElements.forEach(element => {
				element.removeEventListener("mouseenter", handleMouseEnter);
				element.removeEventListener("mouseleave", handleMouseLeave);
			});
			observer.disconnect();
		});
	});

	beforeNavigate(() => {
		handleMouseLeave();
	});
</script>

<div bind:this={cursor} class="custom-cursor hidden md:block"></div>

<style lang="postcss">
	.custom-cursor {
		@apply fixed w-[15px] h-[15px] rounded-full bg-white pointer-events-none z-[9999];
		transform: translate(-50%, -50%);
		transition: transform 0.2s ease-out, width 0.2s, height 0.2s, background-color 0.2s, mix-blend-mode 0.2s;
	}
</style>
