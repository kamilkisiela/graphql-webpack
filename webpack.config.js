const HtmlWebPackPlugin = require('html-webpack-plugin');
const { GraphQLCodegenPlugin } = require('graphql-codegen-webpack');
const { resolve } = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

const graphqlPlugin = new GraphQLCodegenPlugin({
  schema: resolve(__dirname, 'schema.json'),
  template: 'graphql-codegen-typescript-react-apollo-template',
  out: resolve(__dirname, 'src/graphql.tsx'),
  overwrite: true,
  args: ['src/**/*.graphql'],
});

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  target: 'web',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.graphql', '.js', '.mjs'],
  },
  plugins: [graphqlPlugin, htmlPlugin],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.graphql$/, loader: 'graphql-tag/loader' },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  devServer: {},
};
