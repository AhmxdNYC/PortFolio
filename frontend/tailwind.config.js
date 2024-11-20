/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'open-sans': ['Open Sans', 'sans-serif'], // Adding Open Sans font
			},
			fontWeight: {
				'extra-bold': '800', // Optional: Naming the 800 weight as extra-bold
			},
		},
	},
	plugins: [],
};
