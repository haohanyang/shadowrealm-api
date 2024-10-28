const path = require("path");

/**
 * @type {import("webpack").Configuration}
 */
const libConfig = {
  entry: "./src/index.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: [/node_modules/, /playground/],
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
}

/**
 * @type {import("webpack").Configuration}
 */
const polyfillConfig = {
  entry: "./src/polyfill.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  output: {
    filename: "polyfill.js",
    path: path.resolve(__dirname, "dist")
  },
}

module.exports = [libConfig, polyfillConfig]