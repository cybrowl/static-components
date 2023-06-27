<script>
	export let asset = {};

	let videoElement;
	let isPlaying = false;
	let volume = 1;

	function playPause() {
		if (videoElement.paused) {
			videoElement.play();
			isPlaying = true;
		} else {
			videoElement.pause();
			isPlaying = false;
		}
	}

	function changeVolume() {
		videoElement.volume = volume;
	}

	function toggleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			videoElement.requestFullscreen();
		}
	}
</script>

<div class="video-container">
	<video class="video" bind:this={videoElement} src={asset.url} playsinline>
		<track kind="captions" src="captions.vtt" srclang="en" label="English" />
	</video>
	<div class="control-container">
		<button class="button" on:click={playPause} ontouchstart={playPause}
			>{isPlaying ? 'Pause' : 'Play'}</button
		>
		<label class="volume-label">
			Volume:
			<input
				type="range"
				min="0"
				max="1"
				step="0.1"
				bind:value={volume}
				on:input={changeVolume}
				ontouchstart={changeVolume}
				class="volume"
			/>
		</label>
		<button
			class="button"
			on:click={toggleFullscreen}
			ontouchstart={toggleFullscreen}>Toggle Fullscreen</button
		>
	</div>
</div>

<style lang="postcss">
	.video-container {
		@apply relative bg-black text-white;
	}

	.video {
		@apply w-full h-full object-cover;
	}

	.control-container {
		@apply absolute bottom-0 left-0 w-full bg-black bg-opacity-60 flex items-center justify-between px-4 py-2 md:flex-row flex-col;
	}

	.button {
		@apply text-white mb-2 md:mb-0 cursor-pointer;
	}

	.volume {
		@apply w-24 ml-2;
	}
</style>
