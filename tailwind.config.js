const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
	//content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
	content: ["./src/pages/visualiser.tsx"],
	theme: {
		extend: {},
	},
	plugins: [],
});