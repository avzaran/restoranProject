const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/scripts/index.js',
    menu: './src/scripts/menu.js',
    home: './src/scripts/home.js',
    chipBasket: './src/scripts/chipBasket.js',
    aboutUs: './src/scripts/aboutUs.js',
    img: './src/img/mediamodifier_image(1).png'
  },
  output: {
    filename: 'scripts/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: restoranProject,
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles/[name].css' }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'menu.html',
      template: './src/pages/menu.html',
      chunks: ['menu'],
    }),
    new HtmlWebpackPlugin({
      filename: 'home.html',
      template: './src/pages/home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      filename: 'chipBasket.html',
      template: './src/pages/chipBasket.html',
      chunks: ['chipBasket'],
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutUs.html',
      template: './src/pages/aboutUs.html',
      chunks: ['aboutUs'],
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
  mode: 'development',
};