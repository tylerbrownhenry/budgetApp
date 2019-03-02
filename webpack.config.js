const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		app: './app/components/index.js'
	},
	devServer: {
		contentBase: './app/component/',
		hot: true,
		proxy: {
			'/api': 'http://127.0.0.1:8000',
		}
	},
	devtool: 'inline-source-map',
	output: {
		filename: 'react.bundle.min.js',
		path: path.resolve(__dirname, 'app/static/js/'),
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: 'app/index.html'
		}),
	],
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		],
	},
};

