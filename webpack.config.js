const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");


const config = {
	entry: {
		"scripts": './src/js/index.js',
		"customizer": './src/js/customizer.js',
		"style": './src/scss/style.scss',
		"rtl": './src/scss/rtl.scss',
		"block-editor-style": './src/scss/block-editor-style.scss',
		"editor-style": './src/scss/editor-style.scss'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'js')
	},
	plugins: [ new webpack.ProvidePlugin({
		Promise: ['es6-promise', 'Promise']
	})],
	module: {
		rules: [],
	}
};

module.exports = (env, argv) => {
	config.mode = argv.mode || 'development';
	config.plugins = [
		new CleanWebpackPlugin(),
		new FixStyleOnlyEntriesPlugin(),
		new MiniCssExtractPlugin({
			filename: './../[name].css',
			chunkFilename: './../[id].css'
		})
	];
	config.module.rules.push({
		test: /\.js/,
		exclude: /(node_modules|bower_components)/,
		use: [{
			loader: 'babel-loader'
		}]
	});
	config.module.rules.push({
		test: /\.scss$/i,
		use: [
			// Creates `style` nodes from JS strings
			{
				loader: MiniCssExtractPlugin.loader,
				options: {
					publicPath:  path.resolve(__dirname),
					hmr: argv.mode === 'development',
				},
			},
			'css-loader',
			'sass-loader',
			'postcss-loader'
		],
	});
	if (argv.mode === 'development') {
		config.devtool = 'source-map';
		config.output.filename = '[name].js';
		config.watch = true;
	}
	if (argv.mode === 'production') {
		config.optimization = {
			minimize: true
		};
	}
	return config;
};
