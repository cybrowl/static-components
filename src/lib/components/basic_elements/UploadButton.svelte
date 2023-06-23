<script>
	import Buttom from './Button.svelte';
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	let fileinput;

	function handleUploadFile() {
		fileinput.click();
	}

	function handleFileSelection(e) {
		const file = e.target.files[0];

		dispatch('fileSelection', file);
	}
</script>

<div>
	<Buttom label="Upload" on:click={handleUploadFile} />
	<input
		class="input"
		type="file"
		multiple={false}
		accept="image/*,video/*"
		on:change={e => handleFileSelection(e)}
		bind:this={fileinput}
	/>
</div>

<style lang="postcss">
	.input {
		@apply invisible w-0 h-0;
	}
</style>
