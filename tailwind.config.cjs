module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      dark: {
        light: '#626793',
        DEFAULT: '#3d405b',
        dark: '#212231',
      },
      light: {
        DEFAULT: '#f4f1de',
        dark: '#d6cb85',
      },
    },
  },
  plugins: [],
};
