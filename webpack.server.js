const path = require("path");

module.exports = {
  entry: "./lambda/hello.js",

  target: "node",

  externals: [],

  output: {
    path: path.resolve("lambda-build"),
    filename: "hello.js",
    libraryTarget: "umd",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: "css-loader",
      },
    ],
  },
};
