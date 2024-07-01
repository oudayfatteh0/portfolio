/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			colors: {
				primary: colors.slate[100],
				secondary: colors.red[500],
				tertiary: colors.gray[800],
				bgDark: colors.gray[900],
				bgLight: colors.gray[200],
				meteorite: {
					50: '#f4f3ff',
					100: '#eceafd',
					200: '#dcd7fd',
					300: '#c2b7fb',
					400: '#a58ef7',
					500: '#8761f1',
					600: '#7640e7',
					700: '#672ed3',
					800: '#5626b1',
					900: '#421e85',
					950: '#2c1362',
				},
			},
		},
	},
	plugins: [],
};

