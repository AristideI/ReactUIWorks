var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts", // Entry file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Handle .ts and .tsx files
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.js$/, // Optional: Handle .js files if needed
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Resolve these extensions
  },
  externals: {
    react: "react",
  },
};
