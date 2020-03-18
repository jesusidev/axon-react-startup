module.exports = {
  entry: {
    app: './src/app.tsx'
  },

  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        vendor: {
          test: /[\\/]node_modules[\\/]((?!react|react-dom).*)[\\/]/,
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true
        },
        react: {
          test: /[\\/]node_modules[\\/]((react|react-dom).*)[\\/]/,
          name: 'react',
          chunks: 'all'
        }
      }
    }
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.json']
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
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
