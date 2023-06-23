<script>
	import UploadButton from '../components/basic_elements/UploadButton.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let navigationItems;
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
			</div>
		</body>
	</html>
</main>

<style lang="postcss">
	.grid_layout {
		@apply lg:grid grid-cols-12 gap-y-2 relative mx-12 2xl:mx-60;
	}
	.navigation_main_layout {
		@apply col-start-1 col-end-13 row-start-1 row-end-auto;
	}
	.navigation_main_layout span {
		@apply flex gap-x-3 cursor-pointer;
	}
</style>
