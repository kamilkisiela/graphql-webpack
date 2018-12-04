const { GraphQLCodegenPlugin } = require('graphql-codegen-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  target: 'node',
  output: {
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.ts', '.graphql', '.js', '.mjs'],
  },
  externals: [nodeExternals()],
  plugins: [
    new GraphQLCodegenPlugin(),
  ],
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.graphql$/, loader: 'graphql-tag/loader' }
    ],
  }
};
