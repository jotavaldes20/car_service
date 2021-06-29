const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
      
    rules: [
      {
        test: /\.(js|jsx)$/, //expresion regular para tomar js y jsx
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], //especifico , el generico
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(gif|png|jep?g)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i, //sass o scss
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  //definicion de extensiones
  resolve: {
    extensions: [".js", ".jsx"],
  },
  performance: {
    hints: process.env.NODE_ENV === "production" ? "error" : false, //parametros, error, warning, false
    maxEntrypointSize: 580000, //recomendado 500000
    maxAssetSize: 580000,
  },
  //devtool: 'eval-cheap-module-source-map', //dos valores, monitoreo procesos de desarrollo
  devtool: "source-map", //otro para produccion
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  //simular servidor para probar webPAck
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public"),
  },
};
