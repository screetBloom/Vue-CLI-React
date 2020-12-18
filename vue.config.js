const webpack = require("webpack")
module.exports = {
  pluginOptions: {},
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
        react: "react",
      }),
    ],
  },
}
