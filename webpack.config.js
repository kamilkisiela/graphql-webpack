const { GraphQLCodegenPlugin } = require('graphql-codegen-webpack');
const { resolve } = require('path');

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
  plugins: [
    new GraphQLCodegenPlugin({
      schema: resolve(__dirname, 'src/schema.graphql'),
      template: 'graphql-codegen-typescript-template',
      out: resolve(__dirname, 'src/types.ts'),
      overwrite: true,
    }),
  ],
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.graphql$/, loader: 'graphql-tag/loader' },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  }
};
