const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
    mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'production',
	entry: {
        vendor: './app/vendor/js/index.js',
        app: './app/App.js',
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
		filename: '[name].bundle.min.js',
		path: path.resolve(__dirname, 'dist/'),
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
            template: 'app/index.html',
            chunksSortMode: function(a, b) {
                return (a.names[0] < b.names[0])? 1 : -1;
            }
        }),
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups:{
                node_vendors:{
                    test: '/[\\/]node_modules[\\/]/',
                    chunks: 'async',
                    priority: 1
                }
            }
        }
    },
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