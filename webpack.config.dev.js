const merge = require("webpack-merge");
const webpackBase = require("./webpack.config.base");

module.exports = merge.smart(webpackBase, {
  mode: "development",
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
});
