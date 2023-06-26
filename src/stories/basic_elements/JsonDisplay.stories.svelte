<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import JsonDisplay from '../../lib/components/basic_elements/JsonDisplay.svelte';
</script>

<Meta
	title="Basic Elements/JsonDisplay"
	component={JsonDisplay}
	argTypes={{}}
/>

<Template let:args>
	<div class="m-6">
		<JsonDisplay {...args} on:click={args.onClick} />
	</div>
</Template>

<Story
	name="Default"
	args={{
		data: [
			{
				created: 1687773989435827000,
				health: [
					{assets_size: 2, heap_mb: 1, memory_mb: 4, cycles: 1000000000000}
				],
				id: 'hptcf-emaaa-aaaaa-qaawq-cai',
				name: 'file_storage',
				parent_name: 'FileScalingManager'
			},
			{
				created: 1687773989435827000,
				health: [
					{assets_size: 4, heap_mb: 1, memory_mb: 4, cycles: 1000000000000}
				],
				id: 'hptcf-emaaa-aaaaa-qaawq-xxx',
				name: 'file_storage',
				parent_name: 'FileScalingManager'
			}
		]
	}}
/>
