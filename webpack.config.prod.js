const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpackBase = require("./webpack.config.base");

module.exports = merge.smart(webpackBase, {
  output: {
    filename: "index.bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
});
