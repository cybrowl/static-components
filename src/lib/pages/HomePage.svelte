<script>
	import UploadButton from '../components/basic_elements/UploadButton.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';
	import Image from '../components/basic_elements/Image.svelte';
	import VideoPlayer from '../components/video_player/VideoPlayer.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let navigationItems;
	export let assets = [];
	export const isLoadingSnap = false;
</script>

<main>
	<html lang="en" class="dark">
		<body>
			<div class="grid_layout">
				<div class="navigation_main_layout">
					<PageNavigation {navigationItems}>
						<UploadButton />
					</PageNavigation>
				</div>
				<div class="content_layout">
					{#each assets as asset}
						{#if asset.type === 'image'}
							<Image {asset} />
						{/if}
						{#if asset.type === 'video'}
							<VideoPlayer {asset} />
						{/if}
					{/each}
				</div>
			</div>
		</body>
	</html>
</main>

<style lang="postcss">
	.grid_layout {
		@apply grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-y-2 relative mx-4 md:mx-12 2xl:mx-60;
	}
	.navigation_main_layout {
		@apply row-start-1 row-end-auto col-start-1 col-end-13 sticky top-0 z-30 bg-backdrop;
	}
	.content_layout {
		@apply row-start-2 md:row-start-4 row-end-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-6 md:gap-y-12 col-start-1 col-end-13 mb-16;
	}
</style>
