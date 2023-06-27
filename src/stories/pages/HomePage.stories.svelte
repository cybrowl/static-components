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
		navigationItems: navigationItems,
		assets: [
			{
				type: 'image',
				url: 'https://images.squarespace-cdn.com/content/v1/54437e21e4b048c830a0cff1/1518623641072-CMO3UYC0OD9X6TGRLDRJ/meat.jpg?format=2500w'
			},
			{
				type: 'video',
				url: 'https://ifw4i-haaaa-aaaag-abrja-cai.raw.icp0.io/asset/a0eee020-995-3ac-f7d-f2941a076139'
			}
		]
	}}
/>
