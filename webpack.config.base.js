const webpack = require("webpack");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babelrc = JSON.parse(fs.readFileSync("./.babelrc"));

module.exports = {
  entry: ["@babel/polyfill", "whatwg-fetch", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\js$/,
        exclude: "/node_modules/",
        use: { loader: "babel-loader", options: babelrc },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "index.bundle.css" }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new webpack.ProgressPlugin(),
  ],
};
