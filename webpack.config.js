const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = (env) => {
  return {
    context: __dirname,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
      publicPath: "/",
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.((c|sa|sc)ss)$/i,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
            {
              loader: "postcss-loader",
            },
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          test: /\.(png|j?g|svg|gif)?$/,
          use: "file-loader",
        },
        {
          test: /\.(png|jpg)$/,
          loader: "url-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
        filename: "index.html",
      }),
      new Dotenv({
        path: `.env${env.file ? `.${env.file}` : ""}`,
      }),
    ],
  };
};
