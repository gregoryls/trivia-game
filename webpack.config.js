const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    // questionModal: "./src/questionModal.js",
    // players: "./src/players.js",
    // board: "./src/board.js",
    // stockNames: "./src/stockNames.js",
    questionBuilder: "./src/questionBuilder.js",
    // module1: "./src/module1.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    // assetModuleFilename: "[name][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "XXXXX",
      minify: false,
      template: "./src/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      title: "Question Builder",
      minify: false,
      filename: "questionBuilder.html",
      template: "./src/questionBuilder.html",
      chunks: ["questionBuilder"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
