module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			dark: {
				light: '#626793',
				DEFAULT: '#3d405b',
				dark: '#212231'
			},
			light: {
				DEFAULT: '#f4f1de',
				dark: '#d6cb85'
			}
		}
	},
	plugins: []
};
