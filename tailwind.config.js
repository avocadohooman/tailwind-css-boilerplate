const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit', // compiles css on run-time
	purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'], // removes unused styles
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#202225',
				secondary: '#5865f2',
				gray: colors.neutral,
				gray: {
					900: '#202225',
					800: '#2f3136',
					700: '#36393f',
					600: '#4f545c',
					400: '#d4d7dc',
					300: '#e3e5e8',
					200: '#ebedef',
					100: '#f2f3f5',					
				}
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
