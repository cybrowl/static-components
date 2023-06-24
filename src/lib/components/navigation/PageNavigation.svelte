<script>
	import {createEventDispatcher} from 'svelte';
	export let navigationItems = [];
	const dispatchEvent = createEventDispatcher();

	function handleItemClick(event) {
		dispatchEvent('itemclick', event);
	}

	function handleHomeClick(event) {
		dispatchEvent('home', event);
	}

	function handleKeyPress(event, item) {
		if (event.key === 'Enter' || event.key === ' ') {
			handleItemClick(item);
			event.preventDefault();
		}
	}
</script>

<div class="pageNavigation" aria-label="Main navigation">
	<nav class="navigation">
		<button
			class="logo"
			aria-label="Home"
			on:keypress={handleKeyPress}
			on:click={handleHomeClick}
		>
			Static
		</button>
		{#each navigationItems as item}
			<a
				class="navItem"
				href={'/' + item.href}
				class:selected={item.isSelected === true ? 'selected' : ''}
				tabindex="0"
				aria-label={item.name}
				on:click={() => handleItemClick(item)}
				on:keypress={event => handleKeyPress(event, item)}
				>{item.name}
			</a>
		{/each}
	</nav>
	<slot />
</div>

<style lang="postcss">
	.pageNavigation {
		@apply flex flex-row justify-between items-center mt-6 mb-8;
	}

	.logo {
		@apply mr-12 text-2xl 2xl:text-3xl 3xl:text-4xl font-bold text-light-green flex flex-row items-center;
	}

	.navItem {
		@apply font-sans font-bold text-white no-underline mr-8;
	}

	.selected {
		@apply text-leaf-green;
	}

	.navigation {
		@apply flex flex-row items-center;
	}
</style>
