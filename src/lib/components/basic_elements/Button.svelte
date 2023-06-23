<script>
	import {createEventDispatcher} from 'svelte';

	export let size = 'medium';
	export let label = '';
	let mode = 'button--primary';

	const dispatch = createEventDispatcher();

	function onClick(event) {
		dispatch('click', event);
	}
</script>

<button
	type="button"
	class={['button', `button--${size}`, mode, $$props.class].join(' ')}
	on:click={onClick}
	on:keypress={e => {
		//TODO: need to design how this will work A11y
	}}
>
	{label}
</button>

<style lang="postcss">
	.button {
		@apply font-sans font-bold text-white rounded-md border-0 cursor-pointer inline-block leading-5 w-24 h-12;
	}
	.button--primary {
		@apply bg-leaf-green hover:bg-grass-green;
	}
	.button--primary:active {
		@apply bg-leaf-green;
	}
	.button--primary-disabled {
		@apply bg-leaf-green opacity-50;
	}
	.cursor_default {
		@apply cursor-default;
	}
</style>
