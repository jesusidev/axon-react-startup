const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;

const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
	mode: 'production',

	output: {
		path: path.resolve(__dirname, '../public/'),
		filename: '[name].[chunkhash:4].js'
	},

	plugins: [
		new Dotenv({
			path: path.join(__dirname, '../.env.prod'),
			systemvars: true
		}),
		new CleanWebpackPlugin(),
		new webpack.HashedModuleIdsPlugin(),
		new BundleAnalyzerPlugin({
			analyzerMode: 'disabled',
			generateStatsFile: true,
			statsOptions: {
				source: false
			}
		}),
		new HtmlWebPackPlugin({
			template: '../src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: false,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true
			},
			inject: "body"
		})
	],

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: false,
							removeComment: true,
							collapseWhitespace: false
						}
					}
				]
			}
		]
	}
});