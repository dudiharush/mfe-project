const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require('../../package.json').dependencies;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (config, context) => {
  return {
    mode: 'development',
    devServer: {
      port: 4200,
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      historyApiFallback: true,
      hot: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
    },
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx', '.css'],
      plugins: [new TsconfigPathsPlugin()],
    },
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    output: {
      publicPath: 'auto',
      chunkFilename: '[id].[contenthash].js',
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'MainApp',
        filename: 'remoteEntry.js',
        exposes: {
          './shell': './src/app/components/shell',
          './theme': './src/app/providers/theme',
        },
        remotes: {
          MainApp: 'MainApp@http://localhost:4200/remoteEntry.js',
          GridApp: 'GridApp@http://localhost:4201/remoteEntry.js',
          TextApp: 'TextApp@http://localhost:4202/remoteEntry.js',
          ImageApp: 'ImageApp@http://localhost:4203/remoteEntry.js',
          ListApp: 'ListApp@http://localhost:4204/remoteEntry.js',
        },
        shared: [
          {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            'react-dom': {
              singleton: true,
              requiredVersion: deps['react-dom'],
            },
            'react-router-dom': {
              singleton: true,
              requiredVersion: deps['react-router-dom'],
            },
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  };
};
