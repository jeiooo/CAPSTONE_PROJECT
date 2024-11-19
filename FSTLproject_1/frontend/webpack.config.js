const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production", // Automatically sets NODE_ENV to 'production'
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    // Remove DefinePlugin if not needed
  ],
};
