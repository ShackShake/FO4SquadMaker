const path = require("path");

const cssloader = {
  loader: require.resolve("css-loader"),
  options: {
    importLoaders: 2,
    modules: {
      localIdentName: "[local]___[hash:base64:5]",
    },
  },
};

module.exports = {
  entry: {
    main: ["./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: ["json", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", cssloader],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", cssloader, "sass-loader"],
      },
    ],
  },
  plugins: [],
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },
};
