<script>
	export let data = {}; // the JSON data

	const isObject = item =>
		typeof item === 'object' && !Array.isArray(item) && item !== null;

	const isArray = item => Array.isArray(item);
</script>

{#if Object.keys(data).length}
	<div class="display">
		{#each Object.entries(data) as [key, value]}
			{#if isObject(value)}
				<div><b>{key}:</b></div>
				<div style="margin-left: 20px">
					<svelte:self data={value} />
				</div>
			{:else if isArray(value)}
				<div><b>{key}:</b></div>
				<ul>
					{#each value as item (item)}
						<li><svelte:self data={item} /></li>
					{/each}
				</ul>
			{:else}
				<div><b>{key}:</b> {value}</div>
			{/if}
		{/each}
	</div>
{:else}
	<div class="display">Loading...</div>
{/if}

<style lang="postcss">
	.display {
		@apply text-moon-grey;
	}
</style>
