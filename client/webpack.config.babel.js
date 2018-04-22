import path from 'path'
import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import HTMLWebpackTemplate from 'html-webpack-template'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
export default {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'client'),
    filename: '[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '..'),
        exclude: path.resolve(__dirname, '..', 'node_modules'),
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: false,
      title: 'React-Boilerplate',
      template: HTMLWebpackTemplate,
      meta: [
        { charset: 'utf-8' },
        { name: 'charset', content: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=no',
        },

        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'HandheldFriendly', content: 'true' },
        { httpEquiv: 'cleartype', content: 'on' },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  resolve: {
    alias: {
      'react-dom': path.resolve(__dirname, '..', 'node_modules', 'react-dom'),
      react: path.resolve(__dirname, '..', 'node_modules', 'react'),
    },
  },
}
