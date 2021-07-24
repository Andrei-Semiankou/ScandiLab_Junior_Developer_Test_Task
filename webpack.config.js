const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          { loader: MiniCssExtractPlugin.loader, options: { esModule: false } },
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          { 
            loader: MiniCssExtractPlugin.loader, 
            options: { esModule: false } 
          },
          "css-loader",
          "sass-loader",
        ],
      },
      { test: /\.hbs$/, loader: "handlebars-loader" },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      
    ],
  },
  plugins: 
  [
    new MiniCssExtractPlugin({ filename: "styles.css" }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template:'./src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'add.html',
      template:'./src/add.html'
    }),
  ],
  optimization:{
    minimizer: [ new CssMinimizerPlugin(),]
  },
  devServer:{
    open: true,
  }
};
