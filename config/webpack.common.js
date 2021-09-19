const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layout': path.resolve(__dirname, './src/components/layout'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
      '@contexts': path.resolve(__dirname, './src/store/contexts'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@views': path.resolve(__dirname, './src/views')
    },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
        logLevel: "info",
        extensions: [".ts", ".tsx"],
        mainFields: ["browser", "main"],
        baseUrl: "./src"
      })
    ]
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      }
    }),
    new ForkTsCheckerNotifierWebpackPlugin({ skipSuccessful: true })
  ],

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.js(x?)$/,
        exclude: ['/node_modules/'],
        use: ['babel-loader?compact=false', 'eslint-loader'],
      },
      {
        test: /\.ts(x?)$/,
        exclude: ['/node_modules/'],
        use: [
          { loader: 'babel-loader?compact=false' },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer],
              }),
            },
          },
        ],
      },
      {
        test: /\.js(x?)$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
    ],
  },
};
