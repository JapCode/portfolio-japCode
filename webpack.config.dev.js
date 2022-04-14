const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
    },
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        type: 'asset',
        test: /\.(png|gif|jpg|jpeg|svg)$/i,
      },
      {
        test: /\.(woff|woff2)$/i, // Tipos de fuentes a incluir
        type: 'asset/resource', // Tipo de módulo a usar (este mismo puede ser usado para archivos de imágenes)
        generator: {
          filename: 'assets/fonts/[hash][ext][query]', // Directorio de salida
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
    liveReload: true,
    open: {
      app: {
        name: 'firefox',
      },
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].css',
    }),
    new BundleAnalyzerPlugin(),
    new DotenvWebpackPlugin(),
  ],
};
