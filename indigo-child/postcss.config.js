module.exports = () => ({
	plugins: [
		require('autoprefixer')({
			add: true,
			grid: true
		}),
		require('cssnano')({
			preset: 'default',
		}),
	]
});
