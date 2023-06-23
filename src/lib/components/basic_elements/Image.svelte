<script>
	import {fade} from 'svelte/transition';
	import {get} from 'lodash';
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	export let asset = {};

	let imgLoadFailed = false;

	const asset_url = get(asset, 'url', '');

	function handleError() {
		imgLoadFailed = true;
	}
</script>

<!-- Image -->
<button
	class="img_container"
	on:click={() => {
		dispatch('click', asset);
	}}
	on:keypress={e => {
		//TODO: need to design how this will work A11y
	}}
>
	<div class="img_scaling">
		{#if imgLoadFailed === true}
			<div class="img_error">
				<p>Image Loading Err</p>
			</div>
		{:else}
			<img
				class="img_content"
				src={asset_url}
				on:error={handleError}
				alt="uploaded_content"
				in:fade
			/>
		{/if}
	</div>
</button>

<style lang="postcss">
	.img_container {
		@apply flex flex-col;
	}

	.img_scaling {
		@apply relative font-sans cursor-pointer w-full;
		height: 0;
		padding-bottom: 75%;
	}

	.img_content {
		@apply absolute top-0 left-0 bg-black-a object-cover w-full h-full rounded-lg;
	}

	.img_error {
		@apply bg-black-a w-full h-full rounded-lg text-castle-grey font-bold text-center;
	}
	.img_error p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
