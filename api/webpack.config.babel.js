import path from 'path'
import webpack from 'webpack'
import zip from 'zip-webpack-plugin'

export default {
  entry: path.resolve(__dirname),
  output: {
    path: path.join(__dirname, '..', 'dist', 'api'),
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'umd',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '..'),
        exclude: path.resolve(__dirname, '..', 'node_modules'),
        loader: 'babel-loader',
      },
      {
        test: /\.graphql$/,
        include: path.resolve(__dirname, '..'),
        exclude: path.resolve(__dirname, '..', 'node_modules'),
        loader: 'graphql-tag/loader',
      },
    ],
  },

  resolve: {
    alias: {
      mariasql: path.resolve(__dirname, '..', 'misc', 'blank'),
      mssql: path.resolve(__dirname, '..', 'misc', 'blank'),
      mysql: path.resolve(__dirname, '..', 'misc', 'blank'),
      mysql2: path.resolve(__dirname, '..', 'misc', 'blank'),
      oracle: path.resolve(__dirname, '..', 'misc', 'blank'),
      oracledb: path.resolve(__dirname, '..', 'misc', 'blank'),
      'pg-native': path.resolve(__dirname, '..', 'misc', 'blank'),
      'pg-query-stream': path.resolve(__dirname, '..', 'misc', 'blank'),
      sqlite3: path.resolve(__dirname, '..', 'misc', 'blank'),
      'strong-oracle': path.resolve(__dirname, '..', 'misc', 'blank'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      XMLHttpRequest: ['xmlhttprequest', 'XMLHttpRequest'],
    }),
    new zip({
      filename: 'index.zip',
    }),
  ],
}
