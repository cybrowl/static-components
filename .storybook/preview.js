import '../src/tailwind.css';
import {themes} from '@storybook/theming';

export const parameters = {
	layout: 'fullscreen',
	darkMode: {
		dark: {
			...themes.dark,
			appBg: '#32313D',
			brandImage:
				'https://raw.githubusercontent.com/cybrowl/static-components/main/src/lib/assets/static_logo.png'
		},
		light: {...themes.normal, appBg: 'white'},
		stylePreview: true,
		current: 'dark'
	},
	backgrounds: {
		default: 'static',
		values: [
			{
				name: 'static',
				value: '#1B1A22'
			}
		]
	}
};
