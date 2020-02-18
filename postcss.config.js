module.exports = () => ({
	plugins: [
		require('autoprefixer')({
			add: true,
			grid: 'autoplace'
		})
	]
});
