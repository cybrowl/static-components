<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import HomePage from '../../lib/pages/HomePage.svelte';

	const modal_visible = {
		asset_preview: false
	};

	const navigationItems = [
		{name: 'Home', isSelected: false},
		{name: 'Canisters', isSelected: false}
	];
</script>

<Meta
	title="Pages/Home"
	component={HomePage}
	argTypes={{
		onClick: {action: 'onClick'}
	}}
/>

<Template let:args>
	<HomePage {...args} />
</Template>

<Story
	name="Home / Guest"
	args={{
		modal_visible: modal_visible,
		is_authenticated: true,
		navigationItems: navigationItems
	}}
/>
