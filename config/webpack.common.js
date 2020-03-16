module.exports = {
	entry: {
		app: './src/app.jsx'
	},

	optimization: {
		runtimeChunk: {
			name: "manifest"
		},
		splitChunks: {
			cacheGroups: {
				default: false,
				vendor: {
					test: /[\\/]node_modules[\\/]((?!react|react-dom).*)[\\/]/,
					name: "vendors",
					chunks: "all",
					reuseExistingChunk: true
				},
				react: {
					test: /[\\/]node_modules[\\/]((react|react-dom).*)[\\/]/,
					name: "react",
					chunks: "all"
				}
			}
		}
	},

	resolve: {
		extensions: ['*', '.js', '.jsx']
	},

	module: {
		rules: [
			{
				test: /\.(ico|jpg|jpeg|png|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images',
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts',
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			}
		]
	}
};
