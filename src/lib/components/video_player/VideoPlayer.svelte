<script>
	export let asset = {};
	let videoElement;
	let isPlaying = false;
	let volume = 0.5;

	const playPause = () => {
		isPlaying = !isPlaying;
		if (isPlaying) videoElement.play();
		else videoElement.pause();
	};

	const changeVolume = () => {
		videoElement.volume = volume;
	};

	const toggleFullscreen = () => {
		if (!document.fullscreenElement) {
			videoElement.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
	};
</script>

<div class="video-player">
	<video bind:this={videoElement} src={asset.url}>
		<track kind="captions" src="captions.vtt" srclang="en" label="English" />
	</video>
	<div class="controls">
		<button on:click={playPause}>{isPlaying ? 'Pause' : 'Play'}</button>
		<label>
			Volume:
			<input
				type="range"
				min="0"
				max="1"
				step="0.1"
				bind:value={volume}
				on:input={changeVolume}
			/>
		</label>
		<button on:click={toggleFullscreen}>Toggle Fullscreen</button>
	</div>
</div>

<style>
	.video-player {
		height: 100%;
		position: relative;
		overflow: hidden;
	}

	video {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.controls {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.7);
		color: #ddd;
		backdrop-filter: blur(5px);
	}

	button {
		background-color: transparent;
		border: none;
		color: #ddd;
		cursor: pointer;
	}

	button:hover {
		color: #fff;
	}

	input[type='range'] {
		width: 100px;
	}
</style>
